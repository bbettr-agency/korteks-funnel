// ─────────────────────────────────────────────────────────────────────────────
//  "CRAFTSMANSHIP" — manufacturing capabilities gallery (config = source of truth)
//
//  Repositioned: this section no longer shows PRODUCTS. It shows CAPABILITY —
//  the in-house manufacturing steps that stand behind the products, so a buyer
//  gains confidence in the quality before they reach the range.
//  Voice: the maker's own — plain, proud, quality-first.
//
//  Config-driven & future-proof (like the logo system):
//   • Every image lives in /public/images/craftsmanship/ (real Zaydtex photos).
//   • Change a card's photo by editing its `image` path — no component edits.
//   • Add / remove / reorder capabilities via the `cards` array only.
// ─────────────────────────────────────────────────────────────────────────────

const DIR = "/images/craftsmanship";

export type CraftsmanshipCard = {
  image: string;
  alt: string;
  title: string;
  line: string;
};

export const craftsmanship = {
  eyebrow: "Craftsmanship",
  headline: "Made properly, at every step.",
  subheading:
    "Curtains are what most people see. This is what stands behind them — every capability we need to make a quality product, in-house and under our own control.",
  cta: "Request Trade Pricing",

  cards: [
    {
      image: `${DIR}/DSC_0292.webp`,
      alt: "Lace being knitted on a warp-knitting machine at Zaydtex",
      title: "Knitting",
      line: "Fine lace and sheers, knitted on our own machines to a consistent standard.",
    },
    {
      image: `${DIR}/DSC_0454.webp`,
      alt: "Jacquard fabric being woven on a wide loom",
      title: "Weaving",
      line: "Jacquards and wovens with real depth — woven wide, in-house.",
    },
    {
      image: `${DIR}/DSC_0358.webp`,
      alt: "Dyed yarn cones ready for production",
      title: "Dyeing & Finishing",
      line: "Colour that matches, batch after batch — dyed and finished on site.",
    },
    {
      // NOTE: placeholder image (closest available). Swap in a real Shifli
      // embroidery photo when supplied — just replace this path.
      image: `${DIR}/DSC_0370.webp`,
      alt: "Detail work being added on the factory floor",
      title: "Embroidery",
      line: "Pattern and detail added in-house on specialist machines.",
    },
    {
      image: `${DIR}/DSC_0037.webp`,
      alt: "The Zaydtex team cutting and finishing curtains",
      title: "Cut, Make & Trim",
      line: "Cut, sewn and finished by hands that have done it for years.",
    },
    {
      image: `${DIR}/DSC_0500.webp`,
      alt: "Finished fabric checked and rolled before shipping",
      title: "Quality Control",
      line: "Eight checks before anything is packed. If it's not right, it doesn't ship.",
    },
  ] as CraftsmanshipCard[],
};
