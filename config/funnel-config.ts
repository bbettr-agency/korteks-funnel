// ─────────────────────────────────────────────────────────────────────────────
//  COPY + STRUCTURED CONTENT — Zaydtex
//  Written as a buyer's psychological journey (what → trust → for me? → real
//  manufacturer? → products → why them? → act) and as BENEFITS, not features.
//  Every line earns its place by moving a trade buyer closer to requesting
//  trade pricing. Public brand = Zaydtex. Facts are from the official profile.
// ─────────────────────────────────────────────────────────────────────────────

// ── HERO — "What is this company, and is it for me?" ──────────────────────────
export const heroContent = {
  eyebrow: "Africa's Leading Ready-Made Curtain Manufacturer · Trade & Wholesale",
  headline: "Premium Ready-Made Curtains, Manufactured in South Africa.",
  sentence:
    "Supply your store, project or property with curtains made at scale by Zaydtex — dependable trade & wholesale supply, nationwide.",
  microPoints: [
    "Reply within 1 business day",
    "Trade & wholesale supply",
    "South African manufacturing",
  ],
};

// ── TRUST — "Can I trust them?" (animated count-up) ───────────────────────────
export const trustEyebrow = "Why the trade trusts Zaydtex";
export const trustStats = [
  {
    icon: "Layers",
    eyebrow: "Almost",
    value: 1000000,
    format: "compact",
    suffix: "",
    label: "Ready-made curtains a year",
  },
  {
    icon: "Users",
    value: 250,
    format: "auto",
    suffix: "+",
    label: "Skilled people behind them",
  },
  {
    icon: "Factory",
    value: 19000,
    format: "auto",
    suffix: "m²",
    label: "Production under one roof",
  },
  {
    icon: "Award",
    value: 1997,
    format: "plain",
    suffix: "",
    label: "Manufacturing in SA since",
  },
];

// ── WHO WE SUPPLY — "Do they supply businesses like mine?" ────────────────────
export const whoWeSupply = {
  intro: "Whatever you sell, specify or fit out — we supply it, at trade prices and at scale.",
  buyers: [
    { icon: "Store", label: "Retailers" },
    { icon: "Boxes", label: "Wholesalers" },
    { icon: "Blinds", label: "Curtain Shops" },
    { icon: "Sofa", label: "Furniture Stores" },
    { icon: "Palette", label: "Interior Designers" },
    { icon: "Building2", label: "Property Developers" },
    { icon: "Hotel", label: "Hospitality Groups" },
  ],
};

// ── FACTORY — "Do they manufacture, or just resell?" ──────────────────────────
export const factory = {
  eyebrow: "Manufactured in South Africa",
  heading: "Every curtain starts here.",
  sentence:
    "From yarn to finished curtain, under one roof in Centurion. You buy direct from the manufacturer — better pricing, full control and supply you can depend on.",
  steps: ["Yarn", "Knitting & Weaving", "8 Quality Checks", "Delivered Nationwide"],
  trustLine: "100% South African owned & operated  ·  B-BBEE contributor",
  image: "/images/factory.jpg",
  imageAlt: "Inside the Zaydtex textile factory in Centurion — manufacturing machinery",
};

// ── PRODUCTS — "Do they have what I need?" (benefit-led) ───────────────────────
export const featuredProduct = {
  title: "Ready-Made Curtains",
  tag: "Our core product",
  description:
    "Manufactured in-house and supplied trade & wholesale — ready to stock, specify or install. Almost a million made a year, so the lines you reorder are always there.",
};

export const products = [
  {
    title: "Ready-Made Curtains",
    blurb: "Cut, made & finished in-house.",
    image: "/images/product-ready-made.jpg",
    alt: "Zaydtex ready-made curtains hanging in an interior",
    featured: true,
  },
  {
    title: "Sheers",
    blurb: "Light, airy voiles with constant demand.",
    image: "/images/product-sheers.jpg",
    alt: "Light sheer voile curtains",
  },
  {
    title: "Lace",
    blurb: "Timeless lace that keeps reordering.",
    image: "/images/product-lace.jpg",
    alt: "Close-up of lace curtain fabric",
  },
  {
    title: "Blackout",
    blurb: "Coated black-out that sells every season.",
    image: "/images/product-blackout.jpg",
    alt: "Black-out curtains in a darkened room",
  },
  {
    title: "Jacquard",
    blurb: "Rich texture that lifts your range.",
    image: "/images/product-jacquard.jpg",
    alt: "Woven jacquard curtain fabric with rich texture",
  },
];

export const productsNote =
  "Including Scrimp® coated black-out fabrics and ZaHa® towelling.";

// ── WHY ZAYDTEX — "Why buy from them instead of another supplier?" ────────────
export const whyZaydtex = [
  {
    icon: "Layers",
    title: "Made in SA, start to finish",
    description:
      "Yarn to finished curtain under one roof — so you get better pricing, tighter control and none of the import delays.",
  },
  {
    icon: "Factory",
    title: "Supply you can plan around",
    description:
      "Almost a million curtains a year means stock is there when you reorder — no stockouts, no scrambling.",
  },
  {
    icon: "ShieldCheck",
    title: "Quality you can resell with confidence",
    description:
      "Eight quality checks before every order ships, so what your customers receive matches what you promised.",
  },
];

// ── QUOTE CTA BAND — "What's the easiest next step?" ──────────────────────────
export const quoteBand = {
  heading: "Let's get your trade pricing.",
  sentence:
    "Tell us what you need — we reply within one business day. Trade & wholesale enquiries welcome.",
};

// ── FOOTER closing CTA ────────────────────────────────────────────────────────
export const footerCta = {
  text: "Still need trade pricing?",
  cta: "Request your quote",
};

// ── GET A QUOTE PAGE (/get-a-quote) ───────────────────────────────────────────
export const quotePage = {
  badge: "Trade & Wholesale · Ready-Made Curtains",
  headlineLead: "Get your curtain",
  headlineHighlight: "trade pricing",
  subheadline:
    "Send your requirements and our team replies with trade / wholesale pricing, minimum order quantities and lead times — manufactured locally by Zaydtex.",
  trustChips: [
    "Africa's largest curtain manufacturer",
    "Made in South Africa",
    "Trade & wholesale only",
  ],
  whoForTitle: "Who this is for:",
  whoFor:
    "Retailers, wholesalers, curtain & furniture stores, interior designers, property developers and hospitality groups.",
  responseNote: "No obligation. Trade enquiries only. We reply within 1 business day.",
};

// ── LEAD FORM — business-type qualifier options ───────────────────────────────
export const businessTypes = [
  "Retailer / Curtain Store",
  "Wholesaler",
  "Furniture / Décor Store",
  "Interior Designer",
  "Property Developer",
  "Hospitality Group / Hotel",
  "Procurement / Commercial Buyer",
  "Other",
];
