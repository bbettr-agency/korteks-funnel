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
    "Zaydtex is the trade and wholesale brand of Korteks Textiles Africa, one of the largest vertically integrated textile producers in Africa. Ready-made curtains, curtain fabric and a full textile range are made from yarn to finished product under one roof in Centurion, South Africa, and supplied to the trade nationwide.",
  // Canonical scale claim — use THIS wording everywhere (copy, meta, schema,
  // llms.txt). Don't introduce stronger variants ("Africa's largest…") unless
  // the client confirms and can substantiate them.
  scaleClaim: "one of the largest vertically integrated textile producers in Africa",

  // ── Brand assets ── SINGLE SOURCE OF TRUTH for every logo/image ──────────────
  // Drop replacement files into public/images/logo/ using the SAME filenames and
  // the whole site updates automatically. Until logo-primary.png / logo-icon.png
  // exist, a built-in fallback wordmark renders.
  logo: {
    primary: "/images/logo/logo-primary.png", // main horizontal logo (header/footer)
    // Transparent-corner version (original logo-icon.png has an opaque white
    // background that showed as white corners on the dark footer). Original is
    // preserved at logo-icon.png.
    icon: "/images/logo/logo-icon-transparent.png", // square Z icon (favicon / metadata)
    // Lightweight display version of the icon used in the header/footer
    // (240px WebP, ~10 KB vs the 1006px PNG). Regenerate if the icon changes.
    iconDisplay: "/images/logo/logo-icon-240.webp",
    favicon: "/images/logo/favicon.ico", // optional legacy favicon (future)
    ogImage: "/images/logo/og-image.jpg", // social share preview, 1200×630 (future)
  },

  // Hero photo (curated stock placeholder — replace with real Zaydtex photography).
  // Swap the file at this path (same filename) or change the path here. Alt text
  // is editable too — see /public/images/README.md for the full swap guide.
  heroImage: "/images/craftsmanship/DSC_0269.webp",
  heroImageAlt:
    "Rows of yarn cones on the creel inside the Zaydtex / Korteks Textiles Africa factory",

  // ── Contact channels (phone + email only) ────────────────────────────────────
  phone: "012 666 7100",
  phoneDisplay: "012 666 7100",
  phoneLink: "tel:+27126667100",
  email: "sales@zaydtex.com",
  emailLink: "mailto:sales@zaydtex.com",

  // Physical address (from company profile)
  addressLine: "14 Sesmylspruit Street",
  suburb: "Sunderland Ridge",
  city: "Centurion",
  region: "Gauteng",
  postalCode: "0157",
  country: "South Africa",
  serviceArea: "Supplying nationwide across South Africa",
  // Single-line address shown in the footer (clickable → Google Maps).
  addressDisplay: "14 Sesmylspruit St, Sunderland Ridge, Centurion, 0157",

  hours: "Mon – Fri · 08:00 – 17:00", // PLACEHOLDER — confirm trading hours
  website: "https://www.zaydtex.com", // served host (apex 308-redirects here)
  facebook: "https://www.facebook.com/zaydtex",
  // Verified public profiles — every URL here is emitted in schema `sameAs`
  // and linked in the footer. Add LinkedIn / YouTube / Google Business Profile
  // once they exist (never add unverified URLs).
  socialProfiles: [{ label: "Facebook", url: "https://www.facebook.com/zaydtex" }],
  privacyPath: "/privacy-policy",

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
  // email shown on the site is sales@zaydtex.com (above). Switch leadEmail to the
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
    gtmId: "GTM-K6S3H8H9", // LIVE — Google Tag Manager container
    googleAdsId: "AW-XXXXXXXXXX", // PLACEHOLDER — Google Ads conversion ID
    leadConversionLabel: "XXXXXXXXXXXXXXXXXX", // PLACEHOLDER — fires on /thank-you
    callConversionLabel: "XXXXXXXXXXXXXXXXXX", // PLACEHOLDER — click-to-call
  },
};
