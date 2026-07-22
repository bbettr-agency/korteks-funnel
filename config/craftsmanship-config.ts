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
      // Real embroidery photo supplied by the client (uploaded as
      // "embriodery 101.jpeg"); optimised into this webp derivative.
      image: `${DIR}/embroidery.webp`,
      alt: "A Lässer Schiffli embroidery machine embroidering patterned fabric at Korteks Textiles Africa",
      title: "Embroidery",
      line: "Pattern and detail added in-house on specialist machines.",
    },
    {
      // Real Korteks dyeing & finishing photo supplied by the client (uploaded
      // as "Dying & Finishing.jpeg"); optimised into this webp derivative.
      image: `${DIR}/dyeing-finishing.webp`,
      alt: "Fabric feeding through the stenter on the Korteks Textiles Africa dyeing & finishing line",
      title: "Dyeing & Finishing",
      line: "Colour that matches batch after batch, finished to a standard we'll put our name to.",
    },
    {
      // Real "curtain being sewn" photo supplied by the client
      // (public/images/curtain being sewed); this is the web-optimised webp
      // derivative of that original.
      image: "/images/curtain-being-sewed.webp",
      alt: "A sheer curtain being sewn on an industrial machine on the Zaydtex CMT floor",
      title: "Cut, Make & Trim",
      line: "Curtains cut, sewn and finished by hands that have done it for years.",
    },
    {
      // Real inspection photo supplied by the client (uploaded as DSC_0077.jpg);
      // optimised into this webp derivative.
      image: `${DIR}/quality-control.webp`,
      alt: "A Zaydtex quality controller checking and measuring a finished lace curtain on the factory floor",
      title: "Quality Control",
      line: "Eight checks before anything is packed. If it's not right, it doesn't ship.",
    },
  ] as CraftsmanshipCard[],
};
