# Korteks Textiles Africa (Zaydtex) — Ready-Made Curtains Funnel

A conversion-first **B2B lead-generation funnel** for Korteks Textiles Africa
(trading as Zaydtex), a vertically integrated South African textile
manufacturer. Built on the **Bbettr Website OS** (config-driven Next.js sections).

## Project purpose

A single-page Google Ads landing funnel that positions Korteks as a trusted
South African manufacturer and **wholesale / trade supplier of ready-made
curtains**. It is **not** a consumer curtain store and **not** a general textile
brochure — every section is engineered to attract and qualify trade buyers.

The primary offer throughout the page is:

> **Request Trade / Wholesale Pricing for Ready-Made Curtains**

## Funnel goal

Generate **high-quality B2B leads** (quality over quantity) from a modest
Google Ads budget by capturing and qualifying:

- Retailers & curtain retailers
- Furniture / décor stores
- Interior designers
- Property developers
- Hospitality groups, hotels, guest houses & lodges
- Procurement & commercial buyers
- Wholesale buyers

Three conversion paths are provided: **contact form** (GoHighLevel), **phone
call**, and **WhatsApp**. Consumer / single-unit shoppers are filtered out by
copy ("trade & wholesale only") and form qualifiers (company name + business
type). Secondary goal: brand awareness as a local manufacturer.

## ⚠️ Temporary development decisions (read before launch)

These are interim choices for development/testing, to be swapped for the
client's final setup. Full detail in [`SESSION-HANDOVER.md`](./SESSION-HANDOVER.md).

- **Native lead form replaces the blank GHL embed.** The hero/final-CTA forms
  are a fully functional native form (`components/funnel/lead-form.tsx`), shown
  while `siteConfig.useGhlForm === false`. Set it to `true` (with a real
  `formId`) to swap the GoHighLevel embed back in — no other code changes.
- **Temporary email destination = `info@bbettragency.com`.** Submissions are
  emailed via [FormSubmit.co](https://formsubmit.co) (no API key). FormSubmit
  requires a **one-time activation**: the first submission triggers an
  "Activate Form" email to `info@bbettragency.com` — click it once and delivery
  goes live. The visitor flow (redirect to Thank You) works immediately
  regardless. Change the destination in `siteConfig.leadEmail`.
- **Thank You page is the conversion destination.** Successful submits redirect
  to `/thank-you` (noindex), where the Google Ads / GTM lead conversion fires.
- **GHL integration will be swapped in later** once the client provides the
  dedicated form.

## Tech stack

- Next.js 14 (App Router) · React 18 · TypeScript
- Tailwind CSS · Framer Motion · lucide-react
- Forms via GoHighLevel embed · conversion tracking via GTM / Google Ads
- Config-driven: edit `config/*.ts`, not the components

```
config/site-config.ts    # business identity, contact, GHL, tracking IDs
config/seo-config.ts      # metadata + keywords
config/funnel-config.ts   # all page copy + section content
components/sections/*      # reusable funnel sections
lib/schema.ts             # Manufacturer/Organization + FAQPage JSON-LD
lib/tracking.ts           # GTM / Google Ads helpers (no-op until IDs set)
```

## Page structure

Header → Hero (2-col, form) → Trust bar → Who We Supply → Product Ranges
(curtains featured) → Why Korteks → How It Works → WhatsApp band → Reviews →
FAQ → Final CTA → Footer → sticky mobile Call + WhatsApp bar. Successful form
submissions redirect to `/thank-you` (noindex), where the lead conversion fires.

## Local preview

```bash
npm install
npm run dev          # http://localhost:3400 (preview config: "korteks-dev")
npm run build        # production build
npm run lint         # eslint (next/core-web-vitals)
```

Local preview URL: **http://localhost:3400**

## Required placeholders still needed from the client

All are clearly flagged in code (`PLACEHOLDER` / `CLIENT TO SUPPLY`). Nothing is
fabricated — placeholders use obvious values (all-zero numbers, `XXXX` tokens)
and no fake stats, reviews or certifications are presented as real.

| Placeholder | Location | Notes |
|---|---|---|
| Phone, WhatsApp, email, factory city/province, domain | `config/site-config.ts` | shown as `010 000 0000`, all-zero WA, `sales@korteks.co.za` |
| **GHL form ID + embed URL** | `config/site-config.ts` (`formId`, `formSrc`, `useGhlForm`) | temporary native form is used until `useGhlForm = true` |
| **Final lead email / activation** | `config/site-config.ts` (`leadEmail`) | temp `info@bbettragency.com` via FormSubmit (activate once); replace with client's address or GHL |
| **GTM ID + Google Ads conversion ID & labels** | `config/site-config.ts` (`tracking`) | tracking is a no-op until real IDs are pasted |
| Capacity / years / trade-client numbers | `config/funnel-config.ts` (`trustStats`, `trustStatsConfirmed`) | qualitative pillars shown until `trustStatsConfirmed = true` |
| Real reviews / testimonials | `config/funnel-config.ts` (`reviews`, `reviewsMeta`) | empty + `showAggregate: false` |
| Certifications / memberships | `config/funnel-config.ts` (`credibilityMarkers`) | only client-stated strengths shown |
| Logo / favicon + OG image | `app/icon.svg`, `/public/og-image.jpg` | brand assets |
| MOQs / lead times / delivery specifics | `config/funnel-config.ts` (`faqs`) | answers invite enquiry rather than quote unconfirmed numbers |

## Vercel deployment notes

1. **Import the repo** into Vercel: `bbettr-agency/korteks-funnel`. Next.js is
   auto-detected — no build config changes needed (`next build`, output `.next`).
2. **Production domain:** point the client's domain at the Vercel project and
   update `website` in `config/site-config.ts` (used by canonical URLs, sitemap,
   robots and JSON-LD).
3. **Environment:** no secret env vars are required for the front end — the GHL
   form and tracking IDs live in `config/site-config.ts`. Replace the
   placeholders there and redeploy.
4. **Before going live:** set the real GHL form ID, confirm the post-submit
   redirect inside GoHighLevel points to `/thank-you`, paste the GTM + Google
   Ads IDs/labels, and flip `trustStatsConfirmed` once real figures are supplied.
5. **Analytics:** `/thank-you` is `noindex` and is where the Google Ads lead
   conversion fires; verify it in Google Ads / GTM preview after deploy.

---

Website by [Bbettr Agency](https://bbettragency.com).
