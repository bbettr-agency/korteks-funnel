// ─────────────────────────────────────────────────────────────────────────────
//  SINGLE SOURCE OF TRUTH — Zaydtex
//  Public-facing brand: ZAYDTEX only. The registered company name
//  "Korteks Textiles Africa (Pty) Ltd" is used ONLY where legally required
//  (footer legal line + schema legalName).
//
//  Lead/contact paths: PHONE CALLS and the EMAIL / QUOTE FORM only. No WhatsApp.
//
//  Real details below are from the official Zaydtex company profile. A few
//  remaining items (form delivery, tracking IDs) are clearly-flagged placeholders.
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  // ── Identity ────────────────────────────────────────────────────────────────
  businessName: "Zaydtex",
  shortName: "Zaydtex",
  legalName: "Korteks Textiles Africa (Pty) Ltd", // registered entity — legal use only
  registrationNumber: "1997/002157/07",
  tagline: "From yarn to finished product.",
  description:
    "Zaydtex is South Africa's vertically integrated textile manufacturer and wholesale partner — ready-made curtains and a full textile range, made from yarn to finished product by Korteks Textiles Africa, and supplied to the trade nationwide.",

  // ── Brand assets ── SINGLE SOURCE OF TRUTH for every logo/image ──────────────
  // Drop replacement files into public/images/logo/ using the SAME filenames and
  // the whole site updates automatically. Until logo-primary.png / logo-icon.png
  // exist, a built-in fallback wordmark renders.
  logo: {
    primary: "/images/logo/logo-primary.png", // main horizontal logo (header/footer)
    icon: "/images/logo/logo-icon.png", // square Z icon / browser favicon
    favicon: "/images/logo/favicon.ico", // optional legacy favicon (future)
    ogImage: "/images/logo/og-image.jpg", // social share preview, 1200×630 (future)
  },

  // Hero photo (curated stock placeholder — replace with real Zaydtex photography).
  // Swap the file at this path (same filename) or change the path here. Alt text
  // is editable too — see /public/images/README.md for the full swap guide.
  heroImage: "/images/hero-curtains.jpg",
  heroImageAlt: "Premium ready-made curtains manufactured by Zaydtex",

  // ── Contact channels (phone + email only) ────────────────────────────────────
  phone: "012 666 7100",
  phoneDisplay: "012 666 7100",
  phoneLink: "tel:+27126667100",
  email: "info@zaydtex.com",
  emailLink: "mailto:info@zaydtex.com",

  // Physical address (from company profile)
  addressLine: "14 Sesmylspruit Street",
  suburb: "Sunderland Ridge",
  city: "Centurion",
  region: "Gauteng",
  postalCode: "0157",
  country: "South Africa",
  serviceArea: "Supplying nationwide across South Africa",

  hours: "Mon – Fri · 08:00 – 17:00", // PLACEHOLDER — confirm trading hours
  website: "https://zaydtex.com",
  facebook: "https://www.facebook.com/zaydtex",

  // ── Calls to action (copy) ──────────────────────────────────────────────────
  cta: "Request Trade Pricing", // form / strongest
  ctaQuote: "Get Trade Pricing", // primary CTA across the funnel
  ctaShort: "Get a Quote", // compact nav button
  ctaCall: "Call", // phone label (number shown alongside)

  // Dedicated quote page — every quote CTA links/scrolls here.
  quotePath: "/get-a-quote",

  // ── Lead capture ─────────────────────────────────────────────────────────────
  // TEMPORARY (development): native lead form emails submissions via FormSubmit.co
  // to leadEmail below (FormSubmit activated for that address). The PUBLIC contact
  // email shown on the site is info@zaydtex.com (above). Switch leadEmail to the
  // client's real inbox and re-activate FormSubmit when ready, or flip useGhlForm.
  useGhlForm: false, // ← set true once the real GHL form is provided
  leadEmail: "info@bbettragency.com", // TEMP form-delivery inbox (testing) — replace at launch
  thankYouPath: "/thank-you", // post-submit redirect (conversion destination)

  // CLIENT TO SUPPLY — dedicated GHL form (used only when useGhlForm=true)
  formId: "GHL-FORM-ID-XXXX", // PLACEHOLDER
  formSrc: "https://link.bbettragency.com/widget/form/GHL-FORM-ID-XXXX", // PLACEHOLDER
  formScript: "https://link.bbettragency.com/js/form_embed.js",

  // ── Conversion tracking ── CLIENT TO SUPPLY (placeholders are no-op) ──────────
  tracking: {
    gtmId: "GTM-XXXXXXX", // PLACEHOLDER — Google Tag Manager container
    googleAdsId: "AW-XXXXXXXXXX", // PLACEHOLDER — Google Ads conversion ID
    leadConversionLabel: "XXXXXXXXXXXXXXXXXX", // PLACEHOLDER — fires on /thank-you
    callConversionLabel: "XXXXXXXXXXXXXXXXXX", // PLACEHOLDER — click-to-call
  },
};
