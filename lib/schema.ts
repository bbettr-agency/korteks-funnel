import { siteConfig } from "@/config/site-config";

/**
 * Structured data (JSON-LD).
 *
 * Public brand = Zaydtex (name). The registered entity is exposed via the
 * schema `legalName` field only — a legitimate legal/technical use. No
 * aggregateRating/review schema until real, consent-given reviews exist.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Manufacturer"],
  name: siteConfig.businessName,
  legalName: siteConfig.legalName,
  url: siteConfig.website,
  logo: `${siteConfig.website}${siteConfig.logo.primary}`,
  image: `${siteConfig.website}${siteConfig.logo.ogImage}`,
  description: siteConfig.description,
  telephone: siteConfig.phone,
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
  knowsAbout: [
    "Ready-made curtains",
    "Curtain manufacturing",
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
