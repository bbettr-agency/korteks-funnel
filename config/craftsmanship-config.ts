// ─────────────────────────────────────────────────────────────────────────────
//  "CRAFTSMANSHIP IN EVERY CURTAIN" — configuration (single source of truth)
//
//  Conversion job: build confidence in product QUALITY (between Factory and
//  Products) so the buyer reaches the range already thinking "these are clearly
//  premium — I want pricing." Answers: "Can I trust the quality of what I'm buying?"
//
//  Config-driven & future-proof:
//   • Every image lives in /public/images/craftsmanship/ (see that folder's README).
//   • Each card points at a real uploaded Zaydtex photo (do not rename the files).
//   • To use a different photo, change the `image` path here — no component edits.
//   • To add / remove / reorder cards, edit the `cards` array below only.
//   • The gallery component reads ONLY from this file — no hard-coded paths.
// ─────────────────────────────────────────────────────────────────────────────

const DIR = "/images/craftsmanship";

export type CraftsmanshipCard = {
  /** File in /public/images/craftsmanship/ (real Zaydtex upload). */
  image: string;
  /** Alt text — descriptive, for SEO + screen readers. */
  alt: string;
  /** Product / fabric / process name. */
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

  // Horizontal editorial gallery — real Zaydtex photography, quality over quantity.
  cards: [
    {
      image: `${DIR}/DSC_0002.webp`,
      alt: "Packaged Zaydtex ready-made curtains, barcoded and retail-ready",
      title: "Ready-Made Curtains",
      line: "Packaged, barcoded and ready to stock.",
    },
    {
      image: `${DIR}/DSC_0269.webp`,
      alt: "Rows of yarn cones on the creel at the Zaydtex factory",
      title: "Spun From Quality Yarn",
      line: "It starts with the right yarn, prepared in-house.",
    },
    {
      image: `${DIR}/DSC_0292.webp`,
      alt: "Lace curtain fabric being knitted on a Zaydtex machine",
      title: "Lace, Knitted In-House",
      line: "Intricate lace, consistent across every run.",
    },
    {
      image: `${DIR}/DSC_0454.webp`,
      alt: "Jacquard curtain fabric being woven on a loom",
      title: "Woven Jacquard",
      line: "Rich texture, woven on state-of-the-art looms.",
    },
    {
      image: `${DIR}/DSC_0358.webp`,
      alt: "Colourful yarn cones on the creel ready for production",
      title: "Colour & Consistency",
      line: "Dyed to match, batch after batch.",
    },
    {
      image: `${DIR}/DSC_0241.webp`,
      alt: "Rows of textile machinery across the Zaydtex factory floor",
      title: "Built for Volume",
      line: "Almost a million curtains a year, under one roof.",
    },
    {
      image: `${DIR}/DSC_0037.webp`,
      alt: "The Zaydtex team finishing curtains on the factory floor",
      title: "Finished by Our Team",
      line: "Cut, made and finished by skilled hands.",
    },
    {
      image: `${DIR}/DSC_0500.webp`,
      alt: "Finished curtain fabric being rolled on the finishing line",
      title: "Quality, Finished",
      line: "Every roll checked before it ships.",
    },
  ] as CraftsmanshipCard[],
};
