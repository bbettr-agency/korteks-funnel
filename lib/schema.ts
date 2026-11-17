import { siteConfig } from "@/config/site-config";
import { productRange, tradeFaq } from "@/config/funnel-config";

/**
 * Structured data (JSON-LD) — one connected @graph per page.
 *
 * Public brand = Zaydtex; the registered entity is exposed via `legalName`
 * only. Nothing unverified ships: no aggregateRating / review / foundingDate /
 * prices / opening hours / geo coordinates until the client confirms real data.
 * (The CIPC registration number is deliberately NOT emitted — it was removed
 * from the visible site on purpose; add `identifier` only if the client OKs it.)
 *
 * Client-confirm TODOs:
 *   - geo + hasMap for the factory (take from the Google Business Profile pin)
 *   - openingHoursSpecification (siteConfig.hours is still a placeholder)
 *   - more sameAs profiles (LinkedIn, YouTube, GBP) → siteConfig.socialProfiles
 */

const SITE = siteConfig.website; // https://www.zaydtex.com
const PHONE_E164 = siteConfig.phoneLink.replace(/^tel:/, ""); // +27126667100

export const ID = {
  org: `${SITE}/#organization`,
  factory: `${SITE}/#factory-centurion`,
  website: `${SITE}/#website`,
  logo: `${SITE}/#logo`,
  catalog: `${SITE}/#catalog`,
  brandZaha: `${SITE}/#brand-zaha`,
};

const slug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const address = {
  "@type": "PostalAddress",
  streetAddress: siteConfig.addressLine,
  addressLocality: `${siteConfig.suburb}, ${siteConfig.city}`,
  addressRegion: siteConfig.region,
  postalCode: siteConfig.postalCode,
  addressCountry: "ZA",
};

const abs = (path: string) => `${SITE}${path}`;

const organization = {
  "@type": ["Organization", "Corporation"],
  "@id": ID.org,
  name: siteConfig.businessName,
  legalName: siteConfig.legalName,
  url: SITE,
  logo: {
    "@type": "ImageObject",
    "@id": ID.logo,
    url: abs(siteConfig.logo.primary),
    contentUrl: abs(siteConfig.logo.primary),
    width: 3721,
    height: 1140,
    caption: siteConfig.businessName,
  },
  image: abs(siteConfig.logo.ogImage),
  description: siteConfig.description,
  slogan: siteConfig.tagline,
  telephone: PHONE_E164,
  email: siteConfig.email,
  address,
  areaServed: { "@type": "Country", name: "South Africa" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      telephone: PHONE_E164,
      email: siteConfig.email,
      areaServed: "ZA",
      availableLanguage: ["en"],
    },
  ],
  sameAs: siteConfig.socialProfiles.map((p) => p.url),
  brand: [
    { "@type": "Brand", name: siteConfig.businessName },
    { "@id": ID.brandZaha },
  ],
  location: { "@id": ID.factory },
  knowsAbout: [
    "Ready-made curtains",
    "Curtain manufacturing",
    "Curtain fabric",
    "Lace and sheer curtains",
    "Jacquard and woven curtain fabric",
    "Warp knitting",
    "Weaving",
    "Embroidery",
    "Textile dyeing and finishing",
    "Cut, make and trim (CMT)",
    "Towelling",
  ],
  hasOfferCatalog: { "@id": ID.catalog },
};

const zaha = {
  "@type": "Brand",
  "@id": ID.brandZaha,
  name: "ZaHa",
  description: "Zaydtex snag-proof towelling range.",
};

const factory = {
  "@type": "LocalBusiness",
  "@id": ID.factory,
  name: `${siteConfig.businessName} factory — ${siteConfig.city}`,
  url: SITE,
  image: abs(siteConfig.heroImage),
  telephone: PHONE_E164,
  email: siteConfig.email,
  address,
  parentOrganization: { "@id": ID.org },
  areaServed: { "@type": "Country", name: "South Africa" },
};

const catalog = {
  "@type": "OfferCatalog",
  "@id": ID.catalog,
  name: "Zaydtex trade & wholesale textile range",
  itemListElement: productRange.map((p, i) => ({
    "@type": "Offer",
    position: i + 1,
    businessFunction: "http://purl.org/goodrelations/v1#Sell",
    eligibleCustomerType: "http://purl.org/goodrelations/v1#Business",
    areaServed: "ZA",
    seller: { "@id": ID.org },
    url: `${SITE}${siteConfig.quotePath}?product=${encodeURIComponent(p.title)}`,
    itemOffered: {
      "@type": "Product",
      "@id": `${SITE}/#product-${slug(p.title)}`,
      name: p.title,
      description: p.line,
      image: abs(p.image),
      manufacturer: { "@id": ID.org },
      brand: { "@id": /towel/i.test(p.title) ? ID.brandZaha : ID.org },
    },
  })),
};

const website = {
  "@type": "WebSite",
  "@id": ID.website,
  url: `${SITE}/`,
  name: siteConfig.businessName,
  description: siteConfig.description,
  publisher: { "@id": ID.org },
  inLanguage: "en-ZA",
};

type PageOptions = {
  path: string; // "/" or "/get-a-quote"
  name: string;
  description: string;
  type?: string | string[];
  breadcrumb?: string; // label for the current page (omit on home)
  faq?: boolean;
};

export function buildSchemaGraph(opts: PageOptions) {
  const url = opts.path === "/" ? `${SITE}/` : `${SITE}${opts.path}`;
  const pageId = `${url}#webpage`;
  const graph: Record<string, unknown>[] = [organization, zaha, factory, catalog, website];

  const page: Record<string, unknown> = {
    "@type": opts.type ?? "WebPage",
    "@id": pageId,
    url,
    name: opts.name,
    description: opts.description,
    isPartOf: { "@id": ID.website },
    about: { "@id": ID.org },
    publisher: { "@id": ID.org },
    inLanguage: "en-ZA",
  };
  if (opts.path === "/") page.mainEntity = { "@id": ID.org };

  if (opts.breadcrumb) {
    const crumbId = `${url}#breadcrumb`;
    page.breadcrumb = { "@id": crumbId };
    graph.push({
      "@type": "BreadcrumbList",
      "@id": crumbId,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: opts.breadcrumb, item: url },
      ],
    });
  }

  if (opts.faq) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      isPartOf: { "@id": pageId },
      mainEntity: tradeFaq.items.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  graph.push(page);
  return { "@context": "https://schema.org", "@graph": graph };
}
