// ─────────────────────────────────────────────────────────────────────────────
//  SINGLE SOURCE OF TRUTH — Korteks Textiles Africa (Zaydtex)
//  B2B Ready-Made Curtains · Trade & Wholesale lead funnel.
//
//  Lead/contact paths: PHONE CALLS and the EMAIL/QUOTE FORM only.
//  (No WhatsApp anywhere in this funnel — removed by request.)
//
//  ⚠️ PLACEHOLDERS: Some values below are placeholders and MUST be replaced with
//  the client's verified details before launch. They are written as obvious
//  placeholders (XXXX tokens) so nothing fabricated is presented as fact.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  // ── Identity ────────────────────────────────────────────────────────────────
  businessName: "Korteks Textiles Africa",
  shortName: "Korteks",
  tradingAs: "Zaydtex",

  // ── Brand assets ── SINGLE SOURCE OF TRUTH for every logo/image ──────────────
  // Drop replacement files into public/images/logo/ using the SAME filenames and
  // the whole site updates automatically — no code changes. See that folder's
  // README. Until logo-primary.png / logo-icon.png exist, a built-in fallback
  // lockup renders (nothing looks broken).
  logo: {
    primary: "/images/logo/logo-primary.png", // main horizontal logo (header/footer)
    icon: "/images/logo/logo-icon.png", // square icon / browser favicon
    favicon: "/images/logo/favicon.ico", // optional legacy favicon (future)
    ogImage: "/images/logo/og-image.jpg", // social share preview, 1200×630 (future)
  },
  tagline:
    "South African manufacturer and wholesale supplier of ready-made curtains for the trade.",
  description:
    "Korteks Textiles Africa (Zaydtex) is a vertically integrated South African textile manufacturer supplying ready-made curtains — plus roll goods, fabrics, towels, table linen and cushions — to retailers, interior designers, hospitality groups, developers and wholesale buyers nationwide.",

  // ── Contact channels (phone + email only) ────────────────────────────────────
  phone: "012 666 7100",
  phoneDisplay: "012 666 7100",
  phoneLink: "tel:+27126667100",
  email: "sales@korteks.co.za", // PLACEHOLDER — verify real address
  emailLink: "mailto:sales@korteks.co.za", // PLACEHOLDER

  hours: "Mon – Fri · 08:00 – 17:00", // PLACEHOLDER — confirm trading hours
  website: "https://korteks.co.za", // PLACEHOLDER — confirm live domain
  city: "South Africa", // CLIENT TO SUPPLY — factory city
  region: "", // CLIENT TO SUPPLY — province
  country: "South Africa",
  serviceArea: "Supplying nationwide across South Africa",

  // ── Calls to action (copy) ──────────────────────────────────────────────────
  // Primary conversion offer for the whole funnel:
  offer: "Request Trade / Wholesale Pricing for Ready-Made Curtains",
  cta: "Request Trade Pricing", // primary quote CTA label
  ctaQuote: "Get a Quote",
  ctaShort: "Get Trade Pricing",
  ctaCall: "Speak to Sales", // phone CTA label (number shown alongside)

  // Dedicated quote page — every quote CTA links/scrolls here.
  quotePath: "/get-a-quote",

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
  },
};
