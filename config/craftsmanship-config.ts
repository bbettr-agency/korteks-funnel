// ─────────────────────────────────────────────────────────────────────────────
//  "CRAFTSMANSHIP" — manufacturing capabilities gallery (config = source of truth)
//
//  Shows CAPABILITY, not products — the in-house processes from the company
//  profile that stand behind everything Zaydtex makes, so a buyer gains
//  confidence in the quality before they reach the range.
//  Voice: the maker's own — plain, proud, quality-first.
//
//  Config-driven & future-proof: every image lives in
//  /public/images/craftsmanship/; change a card's photo by editing its `image`
//  path. No hard-coded image paths in the component.
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
    "Quality is a key to customer loyalty. We stand behind every single process and every one of our capabilities — and we make sure each product is carefully controlled, every step of the way.",
  cta: "Request Trade Pricing",

  // The processes from the company profile, in the order they happen.
  cards: [
    {
      image: `${DIR}/DSC_0188.webp`,
      alt: "Warping — yarn being prepared onto the warp beam",
      title: "Warping",
      line: "Every warp beam prepared in-house — the base of a good fabric.",
    },
    {
      image: `${DIR}/DSC_0292.webp`,
      alt: "Lace being knitted on a warp-knitting machine",
      title: "Knitting",
      line: "Fine lace and sheers, knitted on our own machines.",
    },
    {
      image: `${DIR}/DSC_0454.webp`,
      alt: "Jacquard fabric being woven on a wide loom",
      title: "Weaving",
      line: "Jacquards and wovens with real depth, woven wide.",
    },
    {
      // NOTE: placeholder image — swap in a real Shifli embroidery photo when
      // supplied (just replace this path).
      image: `${DIR}/DSC_0370.webp`,
      alt: "Detail work being added on the factory floor",
      title: "Embroidery",
      line: "Pattern and detail added in-house on specialist machines.",
    },
    {
      // Dyeing + finishing, shown as one department. Real finishing-line photo
      // (fabric finished and rolled). NOTE: a dedicated dye-house photo would
      // strengthen this further — swap the path in when supplied.
      image: `${DIR}/DSC_0481.webp`,
      alt: "Fabric being finished and rolled on the finishing line at Korteks Textiles Africa",
      title: "Dyeing & Finishing",
      line: "Colour that matches batch after batch, finished to a standard we'll put our name to.",
    },
    {
      image: `${DIR}/DSC_0037.webp`,
      alt: "The Zaydtex team cutting, sewing and finishing curtains on the CMT floor",
      title: "Cut, Make & Trim",
      line: "Curtains cut, sewn and finished by hands that have done it for years.",
    },
    {
      image: `${DIR}/DSC_0500.webp`,
      alt: "Finished fabric checked and rolled before shipping",
      title: "Quality Control",
      line: "Eight checks before anything is packed. If it's not right, it doesn't ship.",
    },
  ] as CraftsmanshipCard[],
};
