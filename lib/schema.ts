import { siteConfig } from "@/config/site-config";

/**
 * Structured data (JSON-LD).
 *
 * Public brand = Zaydtex (name). The registered entity is exposed via the
 * schema `legalName` field only — a legitimate legal/technical use. No
 * aggregateRating/review schema until real, consent-given reviews exist, and
 * no opening hours / geo until confirmed.
 *
 * Stable @id values let Google consolidate the Organization + WebSite as one
 * entity and let per-page nodes (e.g. BreadcrumbList) reference them.
 */

const ORG_ID = `${siteConfig.website}/#organization`;
const WEBSITE_ID = `${siteConfig.website}/#website`;

// E.164 phone for machine readers (the human-readable form stays in siteConfig).
const telephoneE164 = siteConfig.phoneLink.replace("tel:", "");

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Manufacturer"],
  "@id": ORG_ID,
  name: siteConfig.businessName,
  legalName: siteConfig.legalName,
  url: siteConfig.website,
  logo: `${siteConfig.website}${siteConfig.logo.primary}`,
  image: `${siteConfig.website}${siteConfig.logo.ogImage}`,
  description: siteConfig.description,
  telephone: telephoneE164,
  email: siteConfig.email,
  sameAs: [siteConfig.facebook],
  areaServed: { "@type": "Country", name: "South Africa" },
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.addressLine,
    addressLocality: siteConfig.city,
    addressRegion: siteConfig.region,
    postalCode: siteConfig.postalCode,
    addressCountry: "ZA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: telephoneE164,
    email: siteConfig.email,
    areaServed: "ZA",
    availableLanguage: ["English"],
  },
  knowsAbout: [
    "Ready-made curtains",
    "Curtain manufacturing",
    "Curtain fabric",
    "Sheers and lace curtains",
    "Blackout curtains",
    "Woven jacquard curtains",
    "Towelling",
  ],
  makesOffer: {
    "@type": "Offer",
    itemOffered: {
      "@type": "Product",
      name: "Ready-Made Curtains (Trade & Wholesale)",
      category: "Curtains",
    },
  },
};

export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: siteConfig.website,
  name: siteConfig.businessName,
  inLanguage: "en-ZA",
  publisher: { "@id": ORG_ID },
};

/**
 * Combined site-wide graph injected once in the root layout. Per-page nodes
 * (e.g. breadcrumbs) are injected separately on their own pages.
 */
export const siteSchema = {
  "@context": "https://schema.org",
  "@graph": [organizationSchema, webSiteSchema],
};

/**
 * BreadcrumbList for an inner page. Pass ordered crumbs (name + absolute path);
 * the home crumb is added automatically.
 */
export function breadcrumbSchema(
  crumbs: { name: string; path: string }[]
): Record<string, unknown> {
  const items = [{ name: "Home", path: "/" }, ...crumbs];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${siteConfig.website}${c.path === "/" ? "" : c.path}`,
    })),
  };
}
