// ─────────────────────────────────────────────────────────────────────────────
//  "CRAFTSMANSHIP IN EVERY CURTAIN" — configuration (single source of truth)
//
//  Conversion job: build confidence in product QUALITY (between Factory and
//  Products) so the buyer reaches the range already thinking "these are clearly
//  premium — I want pricing." Answers: "Can I trust the quality of what I'm buying?"
//
//  Future-proof, like the logo system:
//   • Every image lives in /public/images/craftsmanship/ (see that folder's README).
//   • Replace any image by dropping in the SAME filename — no code changes.
//   • Add / remove / reorder cards by editing the `cards` array below only.
//   • The gallery component reads ONLY from this file — no hard-coded paths.
//
//  ⚠️ Images are currently PLACEHOLDERS — swap for real Zaydtex photography.
// ─────────────────────────────────────────────────────────────────────────────

const DIR = "/images/craftsmanship";

export type CraftsmanshipCard = {
  /** File in /public/images/craftsmanship/ — replace by same name, zero code. */
  image: string;
  /** Alt text — descriptive, for SEO + screen readers. */
  alt: string;
  /** Product / fabric / detail name. */
  title: string;
  /** One short, benefit-driven line. Keep it minimal — the image leads. */
  line: string;
};

export const craftsmanship = {
  // Section copy — minimal on purpose; the photography does the talking.
  eyebrow: "Craftsmanship",
  headline: "Craftsmanship in Every Curtain.",
  subheading:
    "Every curtain is manufactured with consistency, precision and attention to detail — designed for retailers, wholesalers and commercial projects across South Africa.",
  // Per-card text CTA (small, not a big button). Links to siteConfig.quotePath.
  cta: "Request Trade Pricing",

  // Horizontal editorial gallery — quality over quantity.
  cards: [
    {
      image: `${DIR}/hero-ready-made.webp`,
      alt: "Finished Zaydtex ready-made curtains hanging in an interior",
      title: "Ready-Made Curtains",
      line: "Cut, made and finished in-house to a repeatable standard.",
    },
    {
      image: `${DIR}/sheer-closeup.webp`,
      alt: "Close-up of sheer voile curtain fabric with light passing through",
      title: "Sheers",
      line: "Light, even voiles that drape beautifully.",
    },
    {
      image: `${DIR}/lace-detail.webp`,
      alt: "Detail of lace curtain fabric pattern",
      title: "Lace",
      line: "Intricate lace, consistent across every run.",
    },
    {
      image: `${DIR}/blackout-curtain.webp`,
      alt: "Coated block-out curtain in a darkened room",
      title: "Blackout",
      line: "Coated fabrics that block light, heat and dust.",
    },
    {
      image: `${DIR}/jacquard-detail.webp`,
      alt: "Woven jacquard curtain fabric texture",
      title: "Jacquard",
      line: "Rich woven texture with real depth and weight.",
    },
    {
      image: `${DIR}/stitching-detail.webp`,
      alt: "Close-up of precision stitching on a curtain hem",
      title: "Precision Stitching",
      line: "Clean, even seams and hems on every panel.",
    },
    {
      image: `${DIR}/fabric-texture.webp`,
      alt: "Macro of premium curtain fabric weave",
      title: "Premium Fabrics",
      line: "Quality you can feel in the hand.",
    },
    {
      image: `${DIR}/factory-machine.webp`,
      alt: "Zaydtex manufacturing machinery on the factory floor",
      title: "Made in Our Factory",
      line: "Manufactured locally, start to finish.",
    },
    {
      image: `${DIR}/curtain-heading.webp`,
      alt: "Detail of a finished curtain heading",
      title: "Curtain Headings",
      line: "Headings finished to spec, ready to hang.",
    },
  ] as CraftsmanshipCard[],
};
