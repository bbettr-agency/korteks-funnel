// ─────────────────────────────────────────────────────────────────────────────
//  COPY + STRUCTURED CONTENT — Zaydtex
//
//  Positioning: we are NOT selling curtains. We are selling confidence in a
//  vertically integrated South African textile MANUFACTURER & wholesale partner.
//  Curtains are the flagship product that partnership produces.
//
//  Voice: the owner of a proudly South African, family-run manufacturing
//  business — warm, plain, confident, quality-obsessed, relationship-first.
//  Never agency copy. Quality is the thread, felt not slogan-ised.
//
//  Public brand = Zaydtex. Korteks Textiles Africa is surfaced only as the
//  MANUFACTURER (a trust builder). No founding year (1994/1997 unconfirmed).
//  Facts are from the official company profile — nothing invented.
// ─────────────────────────────────────────────────────────────────────────────

// ── HERO — "What is Zaydtex, why trust them, what next?" ──────────────────────
export const heroContent = {
  eyebrow: "Zaydtex · Manufactured by Korteks Textiles Africa",
  headline: "We don't just supply textiles. We make them.",
  tagline: "From yarn to finished product.",
  subheadline:
    "Manufactured by Korteks Textiles Africa, one of South Africa's vertically integrated textile manufacturers, and supplied through Zaydtex to retailers, wholesalers and traders nationwide.",
  microPoints: [
    "Manufactured under one roof",
    "Flexible production",
    "Proudly South African",
    "Reliable supply",
  ],
  // Company slogan — shown small, italic and understated below the trust points.
  slogan: "We Beautify your home",
};

// ── HERO COMPOSITION — layered factory photography ───────────────────────────
// A designed, editorial arrangement of real Zaydtex / Korteks factory photos
// (NOT stock) that reads "large, vertically integrated manufacturer" at a
// glance: a dominant scale shot behind, two framed supporting panels
// (machinery + product), and one capability caption. Swap any panel per site
// by changing the src/alt below — the layout adapts automatically.
export const heroComposition = {
  // Dominant panel — the "scale" shot (full-height, bleeds off edge). The vast
  // warping creel hall reads instantly as a large manufacturing operation.
  // (Optimised from the client's DSC_0298.jpg.)
  primary: {
    src: "/images/hero-scale.webp",
    alt: "The vast warping creel hall at Korteks Textiles Africa, lined with thousands of yarn packages running to a vanishing point",
  },
  // Supporting panel #1 — knitting: a wide raschel machine producing lace.
  // (Optimised from the client's DSC_0283.jpg.)
  secondary: {
    src: "/images/hero-knitting.webp",
    alt: "A wide raschel knitting machine producing lace fabric on the Korteks factory floor",
  },
  // Supporting panel #2 — weaving: a jacquard loom in production.
  // (Optimised from the client's DSC_0454.jpg.)
  tertiary: {
    src: "/images/hero-weaving.webp",
    alt: "A jacquard weaving loom running a golden warp on the Korteks factory floor",
  },
  // One quiet trust line, floated over the composition.
  caption: "A real factory — every process under one roof",
};

// ── TRUST — the scale and capability behind the supply (no dates) ─────────────
export const trustEyebrow = "One of the largest vertically integrated textile producers in Africa";
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
    label: "Skilled hands on the floor",
  },
  {
    icon: "Factory",
    value: 19000,
    format: "auto",
    suffix: "m²",
    label: "Under one roof, in Centurion",
  },
  {
    icon: "MapPin",
    value: 100,
    format: "auto",
    suffix: "%",
    label: "South African owned & run",
  },
];

// ── WHO WE SUPPLY — the partner behind the trade ──────────────────────────────
export const whoWeSupply = {
  intro:
    "For years, we've been the quiet partner behind the curtains and textiles found in homes across South Africa.",
  buyers: [
    { icon: "Store", label: "Independent Retailers" },
    { icon: "Building2", label: "National Chains" },
    { icon: "Boxes", label: "Wholesalers" },
    { icon: "Blinds", label: "Curtain Shops" },
    { icon: "Sofa", label: "Furniture Stores" },
    { icon: "Palette", label: "Interior Designers" },
    { icon: "Hotel", label: "Hospitality Groups" },
    { icon: "Factory", label: "Industrial" },
  ],
};

// ── FACTORY — the manufacturer behind Zaydtex (the trust powerhouse) ──────────
export const factory = {
  eyebrow: "The Manufacturer Behind Zaydtex",
  heading: "Everything we sell, we make.",
  sentence:
    "Zaydtex products are manufactured by Korteks Textiles Africa — one of South Africa's most vertically integrated textile operations. Warping, knitting, weaving, embroidery, dyeing, finishing, CMT and other processes all take place under one roof in Centurion. From the yarn up, it's ours — and nothing leaves the floor until it's right.",
  steps: [
    "Yarn",
    "Knitted & Woven",
    "Dyed & Finished",
    "Cut, Made & Trimmed",
    "8 Quality Checks",
    "Delivered",
  ],
  trustLine:
    "Manufactured by Korteks Textiles Africa  ·  100% South African owned & run  ·  B-BBEE contributor",
  image: "/images/craftsmanship/DSC_0241.webp",
  imageAlt:
    "Rows of textile machinery across the Korteks Textiles Africa factory floor in Centurion",
};

// ── WHY ZAYDTEX — why trust us as a long-term supplier ────────────────────────
export const whyZaydtex = [
  {
    icon: "Layers",
    title: "One partner, from the yarn up",
    description:
      "We control every step in-house — so your pricing, your quality and your supply never hang on someone else's factory.",
  },
  {
    icon: "ShieldCheck",
    title: "Quality is the whole point",
    description:
      "Nothing ships until it's checked. We'd sooner keep a customer for years than push out an order we're not proud of.",
  },
  {
    icon: "Repeat",
    title: "Supply you can build on",
    description:
      "Whatever you sell or specify, we can make it — at scale, on time, order after order.",
  },
];

// ── PRODUCTS — a complete textile partner, curtains first ─────────────────────
export const featuredProduct = {
  tag: "The range we're known for",
  title: "Ready-Made Curtains",
  description:
    "Made, packaged and barcoded in-house — ready for your shelves or your project. Almost a million leave our floor a year, so the lines you reorder are always there.",
  // Client-supplied ready-made curtain photo (uploaded as DSC08231.jpg) —
  // the branded, taped, hook-ready header; optimised into this webp derivative.
  image: "/images/product-ready-made-curtain.webp",
  alt: "A Zaydtex ready-made curtain showing the taped header, hooks and branded Zaydtex label",
  cta: "Request a Curtain Supply Quote",
};

// The rest of the range — shown compactly (image · name · line · CTA).
// NOTE: entries flagged PLACEHOLDER re-use generic textile shots — swap for real
// product photos when supplied (just change the `image` path here).
export const productRange = [
  {
    // Client-supplied photo (uploaded as "Fabric by the meter.jpeg");
    // optimised into this webp derivative.
    image: "/images/product-fabric-metre.webp",
    alt: "Embroidered Zaydtex voile being measured and rolled off the machine, sold by the metre",
    title: "Fabric by the Metre",
    line: "Cut to your requirement, any quantity.",
  },
  {
    // Client-supplied photo (uploaded as "Fabric by the roll.jpeg");
    // optimised into this webp derivative.
    image: "/images/product-fabric-roll.webp",
    alt: "Zaydtex-branded rolls of finished fabric wrapped and racked, ready for supply",
    title: "Fabric by the Roll",
    line: "Roll goods for converters and the trade.",
  },
  {
    // Client-supplied table cloth photo (uploaded as "Table cloth.png");
    // optimised into this webp derivative.
    image: "/images/product-table-cloth.webp",
    alt: "A linen table cloth laid over a dining table with place settings",
    title: "Table Cloths",
    line: "Table linen for hospitality and retail.",
  },
  {
    // Client-supplied scatter cushion photo (uploaded as "Scatter cusion.png");
    // optimised into this webp derivative.
    image: "/images/product-scatter-cushion.webp",
    alt: "A woven scatter cushion",
    title: "Scatter Cushions",
    line: "Coordinating cushions to finish a range.",
  },
  {
    // Client-supplied towelling photo (uploaded as "toweling product png.webp")
    // — soft terry towelling fabric; optimised into this webp derivative.
    image: "/images/product-towel.webp",
    alt: "A soft swirl of Zaydtex ZaHa terry towelling fabric",
    title: "Towelling Products",
    line: "Our ZaHa snag-proof towelling range.",
  },
  {
    // Dress form extracted from the official Company Profile 2024 (page 10,
    // "Dressforms") and optimised for web.
    image: "/images/product-dress-form.webp",
    alt: "Adjustable dressmaking mannequin / dress form",
    title: "Dress Forms",
    line: "Plain and adjustable, in every size.",
  },
];

export const productsNote =
  "One partner, one order — a full textile range, all made in-house.";

// ── QUOTE CTA BAND — the ask, in our own words ────────────────────────────────
export const quoteBand = {
  heading: "Let's build something that lasts.",
  sentence:
    "Our mission is simple: to supply our customers on time, at the lowest cost, with the best quality curtains — by continually getting better and better at what we do. It's the responsibility of every one of our employees.",
};

// ── FOOTER closing CTA ────────────────────────────────────────────────────────
export const footerCta = {
  text: "Still need trade pricing?",
  cta: "Request your quote",
};

// ── GET A QUOTE PAGE (/get-a-quote) ───────────────────────────────────────────
export const quotePage = {
  badge: "Trade & Wholesale · Made in South Africa",
  headlineLead: "Let's talk about your",
  headlineHighlight: "trade pricing",
  whoForTitle: "Who this is for:",
  whoFor:
    "Retailers, wholesalers, industrial operations, construction, curtain & furniture stores, interior designers, property developers and hospitality groups.",
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
