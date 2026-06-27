# Session Handover — Zaydtex Funnel

Context for future sessions. The site is a config-driven, premium B2B lead site
for **Zaydtex** (ready-made curtains, trade & wholesale), on the Bbettr Website OS.
See [`README.md`](./README.md) for the full overview.

---

## 📌 Latest update — 2026-06-27 (V2: light premium photography-led redesign)

Full UI redesign per owner: a premium manufacturer site (Apple / Herman Miller
feel) that still converts. Functionality/SEO/tracking/quote-form/conversion
architecture all preserved.

- **Light theme** — white / warm cream (`brand.cream`) / very light beige
  (`brand.mist`) backgrounds, **dark brown** (`brand.ink`) type & footer, **copper**
  (`brand.primary`) buttons/accents. No dark backgrounds throughout (footer +
  factory band only). Tokens in `tailwind.config.ts`; white body base.
- **Photography is the hero.** Curated stock images in **`public/images/`**
  (`hero-curtains`, `factory`, `product-*`). ⚠️ These are **placeholders** —
  replace with real Zaydtex product/factory photos using the **same filenames**
  (paths in `funnel-config.ts` `products`/`factory` + `siteConfig.heroImage`).
  Served via `next/image`.
- **Homepage sections:** Hero (full-screen, big headline + 2 CTAs + full-bleed
  curtain photo) → Trust (large numbers, no cards) → Products (large photography,
  featured + 4 tiles) → Why Zaydtex (3 reasons, icons, no cards) → Factory
  (full-width image band, id `#about`) → Quote band → Footer (id `#contact`).
- **Knit motif** = `.knit-braid` (globals.css) via `components/ui/knit-divider.tsx`
  — used tastefully (quote-band accent, footer top border). Never a page bg.
- Nav: Products · Why Zaydtex · About · Contact · phone · Get Quote. Logo lockup =
  copper Z tile + wordmark (dark on light header, cream in footer).
- Old dark-theme sections/components removed (what-we-make, thread-divider, the
  weave/stitch/drapery treatments). Quote + thank-you pages re-themed light.

Verified: build ✅ lint ✅ desktop+mobile, all images load, 10 CTAs → /get-a-quote,
form → /thank-you (conversions fire), 0 WhatsApp, sticky mobile Call bar.

---

## 📌 Update — 2026-06-27 (Zaydtex rebrand + simplified redesign, superseded by V2)

Per the owner: simpler, cleaner, premium, aligned to the official company profile.
Built from the profile + the 8 strongest facts (nothing invented).

- **Public brand = Zaydtex everywhere.** "Korteks" appears ONLY as the registered
  entity in the footer legal line + schema `legalName` (`siteConfig.legalName =
  "Korteks Textiles Africa (Pty) Ltd"`, Reg `1997/002157/07`).
- **Theme swapped** navy/gold → official **cream / copper / chocolate**
  (`tailwind.config.ts` `brand.*`; light body base).
- **Homepage simplified to 5 sections:** Hero → Trust strip → What We Make →
  Why Zaydtex → Quote CTA band (+ header/footer + sticky Call bar). Deleted the
  old who-we-supply / product-ranges / how-it-works / reviews / FAQ components
  (and the FAQPage schema).
- **Premium textile accents** (subtle, reduced-motion aware): `ThreadDivider`
  (braided copper), `.texture-weave` overlays on dark sections, `.stitch-border`
  cards, copper-"Z" drapery hero visual, copper-thread card hovers — in
  `globals.css` + `tailwind.config.ts`.
- **Real contact (from profile):** phone `012 666 7100`, email
  `info@zaydtex.com`, address 14 Sesmylspruit Street, Sunderland Ridge, Centurion,
  0157. Website `zaydtex.com`.
- **Trust facts used (all real):** almost 1M curtains/yr · largest in Africa ·
  since 1997 · 250+ employees · 19,000 m² · SA owned & operated · B-BBEE · 8 QC
  checks. In `funnel-config.ts` (`trustStats` + `trustMarkers`).
- **Logo:** drop `logo-primary.png` + `logo-icon.png` into `public/images/logo/`
  (system already wired; fallback "zaydtex" wordmark until then). Optional
  `siteConfig.heroImage` swaps the drapery visual for a real curtain photo.
- **Unchanged & verified:** quote form (6 fields) on `/get-a-quote` →
  `/thank-you` (noindex, conversion), phone + form only, no WhatsApp, all quote
  CTAs → `/get-a-quote`. Form still delivers to `info@bbettragency.com` (temp).

Verified: build ✅, lint ✅, desktop + mobile, 0 WhatsApp, 0 public "Korteks",
all CTAs → /get-a-quote, form → /thank-you, conversions fire.

---

## 📌 Update — 2026-06-25 (WhatsApp removed + dedicated quote page)

**Lead/contact paths are now PHONE + FORM only. No WhatsApp anywhere.**

- **WhatsApp fully removed:** no buttons, no band, no sticky WhatsApp, no
  `whatsapp_click` tracking, no links/icons. The `whatsapp-band.tsx` component
  was deleted; `whatsappConversionLabel` removed from `siteConfig.tracking`.
  (The only "WhatsApp" strings left are code comments stating it's not used.)
- **Phone (real/confirmed):** `012 666 7100` → `tel:+27126667100` everywhere.
  Phone CTA copy = "Speak to Sales" / "Call 012 666 7100".
- **New dedicated quote page `/get-a-quote`** (`views/get-a-quote-page.tsx`,
  route `app/get-a-quote/page.tsx`, copy in `funnel-config.ts → quotePage`):
  strong headline, short trust row, "who this is for", the 6-field quote form,
  phone CTA, response expectation. Indexable; added to sitemap.
- **The quote form now lives only on `/get-a-quote`.** The home hero's right
  column is a "Get a Quote" CTA *card* (not a form); the old final-CTA form is
  now a CTA band. **Every quote CTA across the funnel links to `/get-a-quote`**
  (verified: 12 on the home page). Form still submits to `info@bbettragency.com`
  and redirects to `/thank-you`.
- **Sticky mobile bar is now Call-only** (full-width "Call 012 666 7100").

Verified this session: build ✅, lint ✅, desktop + mobile, 0 WhatsApp links,
all quote CTAs → `/get-a-quote`, form → `/thank-you`, `click_to_call` +
`lead_form_submit`/`generate_lead` fire, `/thank-you` still noindex.

---

## 📌 Status snapshot — end of day 2026-06-24

**Done & on `main`:**
- Funnel complete, pushed to `main`. Build ✅ · lint ✅ · mobile verified ✅.
- Native lead form live; submissions → `info@bbettragency.com` via FormSubmit.
- **FormSubmit activation COMPLETE** — submissions now deliver for real.
- Thank-you page live as the primary conversion destination (noindex).
- Conversion architecture in place: form submit, click-to-call.
- Repo connected; ready for Vercel.

**Outstanding (mostly client-asset / ID dependent):**
- Replace placeholder logo.
- Replace placeholder imagery with real Korteks assets.
- Add real manufacturing statistics (then set `trustStatsConfirmed = true`).
- Add real testimonials/reviews.
- Add GTM + Google Ads conversion IDs/labels.
- Add final GHL form if required (`useGhlForm = true`).
- Connect final domain (update `siteConfig.website`).
- Final conversion-optimisation review before Google Ads launch.

**Next session priorities (refine & launch — DO NOT rebuild structure):**
1. Review the live funnel with fresh eyes.
2. Identify conversion improvements (refinement only; change architecture only
   for a clear, justified conversion benefit).
3. Replace placeholder assets *if supplied*.
4. Verify tracking setup (real IDs if provided; otherwise confirm dataLayer).
5. Deploy / verify on Vercel.
6. Prepare a launch-ready version.

---

## 🖼️ Logo / brand-asset system (config-driven, future-proof)

- **Single source of truth:** `config/site-config.ts` → `siteConfig.logo`
  (`primary`, `icon`, `favicon`, `ogImage`), all pointing into
  **`public/images/logo/`** (which has its own README).
- Reusable `components/ui/logo.tsx` renders the image and **falls back to a
  built-in mark + wordmark** until the real files exist (no broken images). Used
  by header + footer. Browser icon + OG image (`lib/metadata.ts`) and JSON-LD
  logo (`lib/schema.ts`) also read from `siteConfig.logo`.
- **To go live:** drop `logo-primary.png` (horizontal) and `logo-icon.png`
  (square) into `public/images/logo/` using those exact filenames — the whole
  site updates automatically, no code changes. `favicon.ico` + `og-image.jpg`
  are optional future additions (config already points at them).
- Verified this session: fallback renders with files absent; adding a real file
  makes header/footer switch to the `<img>` automatically (tested + cleaned up).

---

## ⚠️ Temporary development decisions (active now)

These are interim and must be revisited before / at launch.

### 1. Temporary email destination = `info@bbettragency.com`
- Lead form submissions are emailed here **for development/testing only**.
- Set in `config/site-config.ts` → `leadEmail`.
- Transport: **FormSubmit.co** (`https://formsubmit.co/ajax/{email}`) — no API
  key, no backend.
- **Activation: DONE.** FormSubmit was activated for `info@bbettragency.com`, so
  submissions now deliver. (If the destination email changes, the new address
  must be activated once the same way.)
- The FormSubmit AJAX response on an unactivated address is
  `{"success":"false","message":"This form needs Activation…"}` — our code keys
  the redirect off the HTTP 200, so the **visitor flow works regardless**.
- **At launch:** replace with the client's real email, or switch to GHL (below).

### 2. Temporary native form (now on /get-a-quote)
- The original GHL embed rendered blank (placeholder form id), which looked
  broken. It's replaced with a native form: `components/funnel/lead-form.tsx`.
- Fields: Full Name, Company Name, Email, Phone, Business Type (qualifier
  dropdown), Message (optional). Honeypot anti-spam. Client-side validation.
- The form lives on **`/get-a-quote`** only (FormPanel `instanceId="quote"`).
  Home + sections drive to it via "Get a Quote" CTAs.
- Toggled by `config/site-config.ts` → `useGhlForm` (currently `false`).
- Business-type options live in `config/funnel-config.ts` → `businessTypes`.

### 3. Thank You page is the conversion destination
- `/thank-you` (`views/thank-you-page.tsx`, route `app/thank-you/page.tsx`).
- Confirms enquiry received, sets a "reply within 1 business day" expectation,
  shows a Call CTA + "Return to Website", and is `noindex`.
- `components/funnel/conversion-tracker.tsx` fires the lead conversion on mount
  (`generate_lead` dataLayer event + Google Ads conversion). This is the
  **primary Google Ads / GTM conversion destination**.
- Native form redirects here via `siteConfig.thankYouPath`.

### 4. GHL integration will be swapped in later
- When the client provides the dedicated GHL form:
  1. Set `siteConfig.formId` / `formSrc` to the real values.
  2. Set `siteConfig.useGhlForm = true`.
  3. Confirm the GHL form's post-submit redirect points to `/thank-you` (so the
     conversion still fires), or keep relying on `ConversionTracker`.
  4. The native `LeadForm` is then bypassed automatically.

---

## Tracking architecture (built, placeholder IDs)

All in `lib/tracking.ts` + `components/funnel/tracking-scripts.tsx`. No-op while
IDs contain the `XXXX` placeholder token, so the site runs clean pre-launch.

| Conversion | Event | Where it fires |
|---|---|---|
| Form submit | `lead_form_submit` (on submit) + `generate_lead` + Ads conversion (on `/thank-you`) | `lead-form.tsx`, `conversion-tracker.tsx` |
| Click-to-Call | `click_to_call` + Ads conversion | header, hero, final CTA, sticky mobile bar, `/get-a-quote` |

_(WhatsApp click conversion removed — WhatsApp is no longer used.)_

**To activate:** set real IDs in `config/site-config.ts` → `tracking`
(`gtmId`, `googleAdsId`, `leadConversionLabel`, `callConversionLabel`).
Verified: all events push to `dataLayer` correctly; `gtag` is absent only
because the Ads ID is still a placeholder.

---

## Still needed from client

Email · factory city / domain · real GHL form id · GTM + Google Ads IDs & labels ·
capacity / years / trade-client numbers (`trustStatsConfirmed`) · real reviews ·
certifications · logo + OG image · MOQs / lead times / delivery specifics for FAQ.
(Phone `012 666 7100` is confirmed.) See README table for exact locations.
**Do not fabricate any of these** — honest placeholders are in place.

---

## Build / verify status (last session)

- `npm run build` ✅ · `npm run lint` ✅ (no warnings/errors)
- Verified in preview desktop (1280) + mobile (375): home hero CTA card,
  `/get-a-quote` form + validation, end-to-end submit → `/thank-you`,
  `click_to_call` + `lead_form_submit`/`generate_lead`, Call-only sticky bar,
  zero WhatsApp links.
- Local preview: `npm run dev` → http://localhost:3400 (config `korteks-dev`).
- ⚠️ Don't run `npm run build` while `npm run dev` is live — they share `.next`
  and it corrupts the dev server's CSS. Stop the dev server first, or
  `rm -rf .next` and restart it.

## Git

- Remote: `origin` → https://github.com/bbettr-agency/korteks-funnel.git
- Branch: `main`.
