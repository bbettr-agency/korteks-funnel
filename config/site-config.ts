// ─────────────────────────────────────────────────────────────────────────────
//  SINGLE SOURCE OF TRUTH — Korteks Textiles Africa (Zaydtex)
//  B2B Ready-Made Curtains · Trade & Wholesale lead funnel.
//
//  ⚠️ PLACEHOLDERS: Several values below are placeholders and MUST be replaced
//  with the client's verified details before launch. They are written as obvious
//  placeholders (all-zero numbers, XXXX tokens) so nothing fabricated is ever
//  presented to a visitor as fact. See the "CLIENT TO SUPPLY" markers.
// ─────────────────────────────────────────────────────────────────────────────

// WhatsApp number — digits only, international format, no "+" or spaces.
// CLIENT TO SUPPLY — placeholder below (all zeros).
const whatsappNumber = "27100000000";

// Pre-filled WhatsApp message — primes a qualifying, trade-framed conversation.
const whatsappMessage =
  "Hi Korteks, I'd like trade / wholesale pricing for ready-made curtains. My business is a [retailer / interior design studio / hospitality group / developer].";

export const siteConfig = {
  // ── Identity ────────────────────────────────────────────────────────────────
  businessName: "Korteks Textiles Africa",
  shortName: "Korteks",
  tradingAs: "Zaydtex",
  tagline:
    "South African manufacturer and wholesale supplier of ready-made curtains for the trade.",
  description:
    "Korteks Textiles Africa (Zaydtex) is a vertically integrated South African textile manufacturer supplying ready-made curtains — plus roll goods, fabrics, towels, table linen and cushions — to retailers, interior designers, hospitality groups, developers and wholesale buyers nationwide.",

  // ── Contact channels ── CLIENT TO SUPPLY (placeholders below) ────────────────
  phone: "010 000 0000", // PLACEHOLDER — replace with real number
  phoneDisplay: "010 000 0000", // PLACEHOLDER
  phoneLink: "tel:+27100000000", // PLACEHOLDER
  email: "sales@korteks.co.za", // PLACEHOLDER — verify real address
  emailLink: "mailto:sales@korteks.co.za", // PLACEHOLDER

  whatsappNumber,
  whatsappMessage,
  whatsappDisplay: "010 000 0000", // PLACEHOLDER
  whatsappLink: `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
    whatsappMessage
  )}`,

  hours: "Mon – Fri · 08:00 – 17:00", // PLACEHOLDER — confirm trading hours
  website: "https://korteks.co.za", // PLACEHOLDER — confirm live domain
  city: "South Africa", // CLIENT TO SUPPLY — factory city
  region: "", // CLIENT TO SUPPLY — province
  country: "South Africa",
  serviceArea: "Supplying nationwide across South Africa",

  // ── Calls to action (copy) ──────────────────────────────────────────────────
  // Primary conversion offer for the whole funnel:
  offer: "Request Trade / Wholesale Pricing for Ready-Made Curtains",
  cta: "Request Trade Pricing",
  ctaShort: "Get Trade Pricing",
  ctaWhatsApp: "Chat on WhatsApp",
  ctaCall: "Call the Factory",

  // ── Lead capture ─────────────────────────────────────────────────────────────
  // TEMPORARY (development): while the client's GHL form is not yet provided we
  // render a native lead form that emails submissions via FormSubmit.co to the
  // address below. Flip `useGhlForm` to true (and set a real formId) to swap the
  // GoHighLevel embed back in — no other code changes needed.
  useGhlForm: false, // ← set true once the real GHL form is provided
  leadEmail: "info@bbettragency.com", // TEMP dev destination — replace with client's address / GHL
  thankYouPath: "/thank-you", // post-submit redirect (conversion destination)

  // CLIENT TO SUPPLY — dedicated Korteks GHL form (used only when useGhlForm=true)
  formId: "GHL-FORM-ID-XXXX", // PLACEHOLDER
  formSrc: "https://link.bbettragency.com/widget/form/GHL-FORM-ID-XXXX", // PLACEHOLDER
  formScript: "https://link.bbettragency.com/js/form_embed.js",

  // ── Conversion tracking ── CLIENT TO SUPPLY (placeholders are no-op) ──────────
  // While these contain the "XXXX" token, no tracking scripts load and no
  // conversions fire — the site runs clean. Paste real IDs to activate.
  tracking: {
    gtmId: "GTM-XXXXXXX", // PLACEHOLDER — Google Tag Manager container
    googleAdsId: "AW-XXXXXXXXXX", // PLACEHOLDER — Google Ads conversion ID
    leadConversionLabel: "XXXXXXXXXXXXXXXXXX", // PLACEHOLDER — fires on /thank-you
    callConversionLabel: "XXXXXXXXXXXXXXXXXX", // PLACEHOLDER — click-to-call
    whatsappConversionLabel: "XXXXXXXXXXXXXXXXXX", // PLACEHOLDER — WhatsApp click
  },
};
