// ─────────────────────────────────────────────────────────────────────────────
//  ALL COPY + STRUCTURED CONTENT — Korteks Textiles Africa (Zaydtex)
//  B2B Ready-Made Curtains · Trade & Wholesale lead funnel.
//
//  Tone: professional textile manufacturer addressing trade buyers. NOT a
//  consumer curtain store, NOT a generic corporate brochure.
//  Icons reference keys in components/ui/icon.tsx.
//
//  ⚠️ HONEST PLACEHOLDERS: No capacity numbers, years in operation,
//  certifications or reviews are invented. Numeric trust stats stay hidden
//  (trustStatsConfirmed = false) until the client supplies verified figures.
// ─────────────────────────────────────────────────────────────────────────────

// ── HERO ──────────────────────────────────────────────────────────────────────
export const heroContent = {
  badge: "SA Textile Manufacturer · Trade & Wholesale",
  headlineLead: "Ready-Made Curtains, Manufactured in South Africa for the",
  headlineHighlight: "Trade & Wholesale",
  subheadline:
    "Korteks Textiles Africa is a vertically integrated manufacturer supplying ready-made curtains to retailers, interior designers, hospitality groups and developers — with in-house design, flexible production capacity and consistent quality, order after order.",
  trustPoints: [
    "Local South African manufacturing — control from fabric to finish",
    "Flexible production capacity & fast market response",
    "Consistent, repeatable quality across large orders",
    "Trade & wholesale supply only",
  ],
};

// ── LEAD FORM — business-type qualifier options ───────────────────────────────
// The core qualifier: routes leads and filters out single-unit consumers.
export const businessTypes = [
  "Retailer / Curtain Store",
  "Furniture / Décor Store",
  "Interior Designer",
  "Property Developer",
  "Hospitality Group / Hotel",
  "Guest House / Lodge",
  "Procurement / Commercial Buyer",
  "Wholesaler",
  "Other",
];

// ── TRUST BAR ───────────────────────────────────────────────────────────────
// Qualitative pillars are CLIENT-STATED strengths (not invented numbers) and
// render now. Numeric stats stay hidden until verified figures are supplied.
export const trustStatsConfirmed = false; // ← set true once real numbers confirmed

// CLIENT TO SUPPLY — real figures. Not rendered while trustStatsConfirmed=false.
export const trustStats = [
  { value: 0, decimals: 0, suffix: "+", label: "Years Manufacturing" },
  { value: 0, decimals: 0, suffix: "+", label: "Curtains Produced / Month" },
  { value: 0, decimals: 0, suffix: "", label: "Product Categories" },
  { value: 0, decimals: 0, suffix: "+", label: "Trade Clients Supplied" },
];

// Qualitative trust pillars (shown while numeric stats are unconfirmed).
export const trustPillars = [
  { icon: "Factory", label: "Local South African Manufacturing" },
  { icon: "Layers", label: "Vertically Integrated Production" },
  { icon: "Palette", label: "In-House Design & Development" },
  { icon: "Gauge", label: "Flexible Production Capacity" },
];

export const credibilityMarkers = [
  { icon: "Globe", label: "Worldwide Sourcing Capabilities" },
  { icon: "Boxes", label: "Importing of Greige Fabric" },
  { icon: "Droplet", label: "Flexible Dyeing & Finishing" },
  { icon: "TrendingUp", label: "Market Trend Analysis" },
  { icon: "Repeat", label: "Reliable Supply Chain" },
];

// ── WHO WE SUPPLY — buyer segments (self-recognition) ─────────────────────────
export const whoWeSupply = [
  {
    icon: "Store",
    title: "Retail & Curtain Stores",
    description:
      "Stock-ready ranges and consistent reorders that keep your shelves full and your margins healthy.",
  },
  {
    icon: "Sofa",
    title: "Furniture & Décor Stores",
    description:
      "Coordinated curtain ranges to complement your furniture and homeware offering.",
  },
  {
    icon: "Palette",
    title: "Interior Designers",
    description:
      "Made-to-spec curtains in the colours, fabrics and finishes your project briefs demand.",
  },
  {
    icon: "Building2",
    title: "Property Developers",
    description:
      "Volume supply for residential and commercial developments, delivered to deadline.",
  },
  {
    icon: "Hotel",
    title: "Hospitality Groups & Hotels",
    description:
      "Durable, contract-grade curtains produced to a repeatable standard across every room and property.",
  },
  {
    icon: "BedDouble",
    title: "Guest Houses & Lodges",
    description:
      "Smaller-batch supply with the same manufacturing quality the big groups rely on.",
  },
  {
    icon: "ClipboardCheck",
    title: "Procurement & Commercial Buyers",
    description:
      "A reliable, single-source local supplier with the capacity and lead times you can plan around.",
  },
  {
    icon: "Boxes",
    title: "Wholesale Buyers",
    description:
      "Trade pricing and dependable bulk supply, manufactured here in South Africa.",
  },
];

// ── PRODUCT RANGES — Ready-Made Curtains lead the offer ───────────────────────
export const featuredRange = {
  icon: "Blinds",
  title: "Ready-Made Curtains",
  description:
    "Our core offer. Manufactured in-house and supplied trade & wholesale — ready to stock, specify or install. Consistent quality across repeat orders, with the flexibility to produce to your colours, fabrics and finishes.",
  points: [
    "Stock-ready ranges & made-to-spec production",
    "Repeatable quality across large volumes",
    "Custom colours, fabrics & finishes on request",
  ],
};

export const productRanges = [
  {
    icon: "Layers",
    title: "Roll Goods",
    description: "Fabric on the roll for converters, manufacturers and trade buyers.",
  },
  {
    icon: "Scissors",
    title: "Fabrics",
    description: "A broad range of fabrics, dyed and finished to your requirements.",
  },
  {
    icon: "Droplet",
    title: "Towels",
    description: "Quality towelling for retail, hospitality and commercial supply.",
  },
  {
    icon: "Utensils",
    title: "Table Linen",
    description: "Table linen ranges for hospitality, retail and wholesale.",
  },
  {
    icon: "Square",
    title: "Cushions",
    description: "Coordinating cushions to round out your textile and décor ranges.",
  },
];

// ── WHY KORTEKS — differentiators framed as buyer benefits ────────────────────
export const whyChoose = [
  {
    icon: "Layers",
    title: "Vertically Integrated",
    description:
      "We control production from greige fabric through to finished curtains — which means tighter quality control, better pricing and fewer points of failure for you.",
  },
  {
    icon: "ShieldCheck",
    title: "Consistent Quality",
    description:
      "Reorder with confidence. We manufacture to a repeatable standard so batch two matches batch one — critical for retailers and contract supply.",
  },
  {
    icon: "Gauge",
    title: "Flexible Capacity",
    description:
      "Production scales to your order — from smaller specified runs to large-volume wholesale and development supply.",
  },
  {
    icon: "Zap",
    title: "Fast Market Response",
    description:
      "Local manufacturing and trend analysis mean quicker turnaround and ranges that move with the market — not long import lead times.",
  },
  {
    icon: "Palette",
    title: "In-House Design & Development",
    description:
      "Our own design and development team can produce to your brief — colours, fabrics and finishes tailored to your brand or project.",
  },
  {
    icon: "Globe",
    title: "Local + Global Sourcing",
    description:
      "South African manufacturing backed by worldwide sourcing and greige imports — a reliable supply chain you can plan around.",
  },
];

// ── HOW IT WORKS — 4-step trade process ───────────────────────────────────────
export const steps = [
  {
    number: "01",
    title: "Send Your Enquiry",
    description:
      "Tell us what you're sourcing — products, rough quantities and any deadlines. Takes under a minute via the form, phone or WhatsApp.",
  },
  {
    number: "02",
    title: "We Prepare Your Trade Quote",
    description:
      "We come back with trade / wholesale pricing, minimum order quantities and lead times — plus samples where you need them.",
  },
  {
    number: "03",
    title: "Approve & Confirm Your Order",
    description:
      "Confirm specs, quantities and timelines. For custom work we develop to your colours, fabrics and finishes.",
  },
  {
    number: "04",
    title: "We Manufacture & Supply",
    description:
      "We produce to a consistent standard and supply your order reliably — ready to stock, specify or install.",
  },
];

// ── FAQ — objection handling (also powers FAQ schema) ─────────────────────────
// Answers avoid inventing unconfirmed specifics (MOQs, lead times, prices) and
// instead invite the buyer to enquire for exact figures.
export const faqs = [
  {
    question: "Do you only supply businesses, or individuals too?",
    answer:
      "Korteks Textiles Africa supplies the trade — retailers, interior designers, hospitality groups, developers, procurement and wholesale buyers. Our pricing and minimum order quantities are structured for business and bulk supply rather than single-unit consumer orders.",
  },
  {
    question: "What are your minimum order quantities (MOQs)?",
    answer:
      "Minimum order quantities vary by product and specification. Send us your requirements and we'll confirm the exact MOQ and trade pricing for your order.",
  },
  {
    question: "Can you manufacture curtains to our own specifications?",
    answer:
      "Yes. As a vertically integrated manufacturer with in-house design and development, we can produce to your colours, fabrics and finishes — alongside our stock-ready ranges.",
  },
  {
    question: "What are your lead times?",
    answer:
      "Lead times depend on the product, quantity and whether the order is stock-ready or custom-made. Tell us your deadline when you enquire and we'll confirm a realistic timeline before you commit.",
  },
  {
    question: "Do you deliver nationwide across South Africa?",
    answer:
      "Yes — we supply trade and wholesale buyers across South Africa. Confirm your delivery location when you request pricing and we'll include the details in your quote.",
  },
  {
    question: "Can we get samples before placing a wholesale order?",
    answer:
      "Samples can be arranged for genuine trade enquiries so you can assess quality and finish before committing to a larger order. Mention it in your enquiry and we'll guide you through it.",
  },
  {
    question: "What else do you manufacture besides ready-made curtains?",
    answer:
      "Ready-made curtains are our primary offer, but we also manufacture and supply roll goods, fabrics, towels, table linen and cushions — useful if you'd like to consolidate sourcing with one reliable local supplier.",
  },
];

// ── SOCIAL PROOF — honest placeholder ─────────────────────────────────────────
// IMPORTANT: Replace with REAL, consent-given client testimonials / Google
// reviews before launch. Do not present fabricated reviews as genuine.
export const reviewsMeta = {
  showAggregate: false, // ← keep false until a real aggregate rating is confirmed
  ratingValue: "0.0",
  reviewCount: "0",
  googleProfileUrl: "https://www.google.com/search?q=Korteks+Textiles+Africa",
};

export const reviews: {
  name: string;
  initial: string;
  text: string;
}[] = [
  // TODO (CLIENT TO SUPPLY): Real trade-client testimonials with consent.
];
