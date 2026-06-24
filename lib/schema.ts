import { siteConfig } from "@/config/site-config";
import { seoConfig } from "@/config/seo-config";
import { faqs } from "@/config/funnel-config";

/**
 * Structured data (JSON-LD).
 *
 * Korteks is a textile manufacturer, so the primary entity is an Organization
 * typed as a Manufacturer. We deliberately omit aggregateRating / review schema
 * until real, consent-given reviews exist — no fabricated structured data.
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Manufacturer"],
  name: siteConfig.businessName,
  alternateName: siteConfig.tradingAs,
  url: siteConfig.website,
  logo: `${siteConfig.website}${seoConfig.ogImage}`,
  image: `${siteConfig.website}${seoConfig.ogImage}`,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  areaServed: { "@type": "Country", name: "South Africa" },
  address: {
    "@type": "PostalAddress",
    addressCountry: "ZA",
  },
  knowsAbout: [
    "Ready-made curtains",
    "Textile manufacturing",
    "Roll goods",
    "Fabrics",
    "Towels",
    "Table linen",
    "Cushions",
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

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};
