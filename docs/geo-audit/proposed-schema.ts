import { siteConfig } from "@/config/site-config";

/**
 * Structured data (JSON-LD) — one connected @graph per page.
 * Public brand = Zaydtex; registered entity exposed via legalName only.
 * No aggregateRating / review / foundingDate until real data exists.
 * Items marked TODO(client) are commented out so nothing unverified ships.
 */

// Canonical origin. The site serves from www (apex 308-redirects), so the
// schema (and ideally siteConfig.website + canonical tags) must use www.
const SITE = "https://www.zaydtex.com"; // TODO: switch siteConfig.website to this and use it here

const ID = {
  org: `${SITE}/#organization`,
  factory: `${SITE}/#factory-centurion`,
  website: `${SITE}/#website`,
  logo: `${SITE}/#logo`,
  catalog: `${SITE}/#catalog`,
  brandZaha: `${SITE}/#brand-zaha`,
};

const PHONE_E164 = "+27126667100"; // from siteConfig.phoneLink

const address = {
  "@type": "PostalAddress",
  streetAddress: siteConfig.addressLine, // "14 Sesmylspruit Street"
  addressLocality: `${siteConfig.suburb}, ${siteConfig.city}`, // "Sunderland Ridge, Centurion"
  addressRegion: siteConfig.region,
  postalCode: siteConfig.postalCode,
  addressCountry: "ZA",
};

const products = [
  { slug: "ready-made-curtains", name: "Ready-Made Curtains", category: "Curtains" },
  { slug: "curtain-fabric-by-the-metre", name: "Curtain Fabric by the Metre", category: "Curtain Fabric" },
  { slug: "curtain-fabric-by-the-roll", name: "Curtain Fabric by the Roll", category: "Curtain Fabric" },
  { slug: "table-cloths", name: "Table Cloths", category: "Table Linen" },
  { slug: "scatter-cushions", name: "Scatter Cushions", category: "Cushions" },
  { slug: "towelling-products", name: "Towelling Products (ZaHa range)", category: "Towelling", brand: ID.brandZaha },
  { slug: "dress-forms", name: "Dress Forms", category: "Dress Forms" },
];

const organization = {
  "@type": ["Organization", "Corporation"], // "Manufacturer" is NOT a schema.org type
  "@id": ID.org,
  name: siteConfig.businessName,
  legalName: siteConfig.legalName,
  url: SITE,
  logo: {
    "@type": "ImageObject",
    "@id": ID.logo,
    url: `${SITE}${siteConfig.logo.primary}`,
    contentUrl: `${SITE}${siteConfig.logo.primary}`,
    caption: siteConfig.businessName,
  },
  image: `${SITE}${siteConfig.logo.ogImage}`,
  description: siteConfig.description,
  slogan: siteConfig.tagline,
  telephone: PHONE_E164,
  email: siteConfig.email,
  address,
  areaServed: { "@type": "Country", name: "South Africa" },
  identifier: {
    "@type": "PropertyValue",
    propertyID: "CIPC company registration number",
    value: siteConfig.registrationNumber,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: PHONE_E164,
      email: siteConfig.email,
      areaServed: "ZA",
      availableLanguage: ["en"], // TODO(client): add "af" etc. if supported
      // hoursAvailable: TODO(client) — reuse openingHoursSpecification below once hours are confirmed
    },
  ],
  sameAs: [
    siteConfig.facebook,
    // TODO(client): add ONLY verified, active official profiles, e.g.
    // LinkedIn company page, Instagram, YouTube, Google Business Profile
    // (maps.google.com/?cid=...), Wikidata entity if one is created.
  ],
  brand: [
    { "@type": "Brand", name: siteConfig.businessName, logo: `${SITE}${siteConfig.logo.primary}` },
    { "@id": ID.brandZaha },
  ],
  // TODO(client): if Korteks Textiles Africa is a SEPARATE parent company (not
  // the same legal entity as Zaydtex), replace legalName with:
  // parentOrganization: { "@type": "Organization", name: "Korteks Textiles Africa (Pty) Ltd", url: "TODO" },
  location: { "@id": ID.factory },
  knowsAbout: [
    "Ready-made curtains",
    "Curtain manufacturing",
    "Curtain fabric",
    "Sheers and lace curtains",
    "Blackout curtains",
    "Woven jacquard curtains",
    "Warp knitting",
    "Weaving",
    "Embroidery",
    "Textile dyeing and finishing",
    "Cut, make and trim (CMT)",
    "Towelling",
  ],
  hasOfferCatalog: { "@id": ID.catalog },
};

const brandZaha = {
  "@type": "Brand",
  "@id": ID.brandZaha,
  name: "ZaHa",
  description: "Zaydtex snag-proof towelling range.",
};

const factory = {
  "@type": "LocalBusiness", // consider ["LocalBusiness","WholesaleStore"] if trade buyers can collect on site
  "@id": ID.factory,
  name: `${siteConfig.businessName} Factory — Centurion`,
  url: SITE,
  image: `${SITE}${siteConfig.heroImage}`,
  telephone: PHONE_E164,
  email: siteConfig.email,
  address,
  parentOrganization: { "@id": ID.org },
  areaServed: { "@type": "Country", name: "South Africa" },
  // TODO(client): verify pin from Google Business Profile before enabling (5+ decimals).
  // geo: { "@type": "GeoCoordinates", latitude: TODO, longitude: TODO },
  // hasMap: "TODO: Google Maps share URL / GBP cid link",
  // TODO(client): siteConfig.hours ("Mon – Fri · 08:00 – 17:00") is a PLACEHOLDER — enable once confirmed:
  // openingHoursSpecification: [{
  //   "@type": "OpeningHoursSpecification",
  //   dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"],
  //   opens: "08:00", closes: "17:00",
  // }],
};

const catalog = {
  "@type": "OfferCatalog",
  "@id": ID.catalog,
  name: "Zaydtex trade & wholesale textile range",
  itemListElement: products.map((p, i) => ({
    "@type": "Offer",
    position: i + 1,
    businessFunction: "http://purl.org/goodrelations/v1#Sell",
    eligibleCustomerType: "http://purl.org/goodrelations/v1#Business",
    areaServed: "ZA",
    seller: { "@id": ID.org },
    itemOffered: {
      "@type": "Product",
      "@id": `${SITE}/#product-${p.slug}`,
      name: p.name,
      category: p.category,
      manufacturer: { "@id": ID.org },
      brand: { "@id": p.brand ?? ID.org },
      // image: TODO — absolute URL of each product card image
      // No price/availability: trade pricing is quote-only. Do not add fake prices.
    },
  })),
};

const website = {
  "@type": "WebSite",
  "@id": ID.website,
  url: `${SITE}/`,
  name: siteConfig.businessName,
  alternateName: "Zaydtex Textiles", // TODO(client): remove if not a name the business uses
  description: siteConfig.description,
  publisher: { "@id": ID.org },
  inLanguage: "en-ZA",
  // No SearchAction: the site has no internal search. Don't add a fake one.
};

type PageInput = { path: string; name: string; description: string };

function webPage({ path, name, description }: PageInput, breadcrumbId?: string) {
  const url = path === "/" ? `${SITE}/` : `${SITE}${path}`;
  return {
    "@type": path === "/get-a-quote" ? ["WebPage", "ContactPage"] : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    isPartOf: { "@id": ID.website },
    about: { "@id": ID.org },
    publisher: { "@id": ID.org },
    primaryImageOfPage: { "@type": "ImageObject", url: `${SITE}${siteConfig.heroImage}` },
    inLanguage: "en-ZA",
    ...(breadcrumbId ? { breadcrumb: { "@id": breadcrumbId } } : {}),
    ...(path === "/" ? { mainEntity: { "@id": ID.org } } : {}),
  };
}

const quoteBreadcrumb = {
  "@type": "BreadcrumbList",
  "@id": `${SITE}/get-a-quote#breadcrumb`,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: "Get a Trade Quote", item: `${SITE}/get-a-quote` },
  ],
};

const sitewide = [organization, brandZaha, factory, catalog, website];

export function buildSchemaGraph(page: PageInput) {
  const isQuote = page.path === "/get-a-quote";
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...sitewide,
      webPage(page, isQuote ? quoteBreadcrumb["@id"] : undefined),
      ...(isQuote ? [quoteBreadcrumb] : []),
    ],
  };
}

/** Kept for backwards compatibility with app/layout.tsx; remove once pages render buildSchemaGraph. */
export const organizationSchema = { "@context": "https://schema.org", ...organization };
