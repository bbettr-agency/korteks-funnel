# Session Handover — Korteks Textiles Africa (Zaydtex) Funnel

Context for future sessions. The site is a config-driven B2B Google Ads funnel
for **ready-made curtains (trade & wholesale)**, built on the Bbettr Website OS.
See [`README.md`](./README.md) for the full overview.

---

## ⚠️ Temporary development decisions (active now)

These are interim and must be revisited before / at launch.

### 1. Temporary email destination = `info@bbettragency.com`
- Lead form submissions are emailed here **for development/testing only**.
- Set in `config/site-config.ts` → `leadEmail`.
- Transport: **FormSubmit.co** (`https://formsubmit.co/ajax/{email}`) — no API
  key, no backend.
- **One-time activation required:** the first submission triggers an
  "Activate Form" email to `info@bbettragency.com`. Someone must click that link
  once before submissions actually deliver. (A test submission was already sent
  during the build session, so the activation email should be in that inbox.)
- The FormSubmit AJAX response on an unactivated address is
  `{"success":"false","message":"This form needs Activation…"}` — our code keys
  the redirect off the HTTP 200, so the **visitor flow works regardless**.
- **At launch:** replace with the client's real email, or switch to GHL (below).

### 2. Temporary native form replacing the blank GHL placeholder
- The original GHL embed rendered blank (placeholder form id), which looked
  broken. It's replaced with a native form: `components/funnel/lead-form.tsx`.
- Fields: Full Name, Company Name, Email, Phone, Business Type (qualifier
  dropdown), Message (optional). Honeypot anti-spam. Client-side validation.
- Toggled by `config/site-config.ts` → `useGhlForm` (currently `false`).
- Business-type options live in `config/funnel-config.ts` → `businessTypes`.

### 3. Thank You page is the conversion destination
- `/thank-you` (`views/thank-you-page.tsx`, route `app/thank-you/page.tsx`).
- Confirms enquiry received, sets a "reply within 1 business day" expectation,
  shows Call + WhatsApp, and is `noindex`.
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
| Click-to-Call | `click_to_call` + Ads conversion | header, hero, final CTA, sticky mobile bar |
| WhatsApp Click | `whatsapp_click` + Ads conversion | header, hero, final CTA, WhatsApp band, sticky bar |

**To activate:** set real IDs in `config/site-config.ts` → `tracking`
(`gtmId`, `googleAdsId`, `leadConversionLabel`, `callConversionLabel`,
`whatsappConversionLabel`). Verified in the build session: all events push to
`dataLayer` correctly; `gtag` is absent only because the Ads ID is still a
placeholder.

---

## Still needed from client

Phone / WhatsApp / email / factory city / domain · real GHL form id ·
GTM + Google Ads IDs & labels · capacity / years / trade-client numbers
(`trustStatsConfirmed`) · real reviews · certifications · logo + OG image ·
MOQs / lead times / delivery specifics for FAQ. See README table for exact
locations. **Do not fabricate any of these** — honest placeholders are in place.

---

## Build / verify status (last session)

- `npm run build` ✅ · `npm run lint` ✅ (no warnings/errors)
- Verified in preview desktop (1280) + mobile (375): hero form, validation
  (5 required-field errors), end-to-end submit → `/thank-you`, all three
  conversion events, sticky mobile Call+WhatsApp bar.
- Local preview: `npm run dev` → http://localhost:3400 (config `korteks-dev`).
- ⚠️ Don't run `npm run build` while `npm run dev` is live — they share `.next`
  and it corrupts the dev server's CSS. Stop the dev server first, or
  `rm -rf .next` and restart it.

## Git

- Remote: `origin` → https://github.com/bbettr-agency/korteks-funnel.git
- Branch: `main`.
