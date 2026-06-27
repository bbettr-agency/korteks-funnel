# Zaydtex — Ready-Made Curtains Funnel

A premium, conversion-first **B2B lead site** for **Zaydtex**, Africa's largest
ready-made curtain manufacturer. Built on the **Bbettr Website OS** (config-driven
Next.js sections).

> **Branding rule:** the public-facing brand is **Zaydtex only**. The registered
> entity **Korteks Textiles Africa (Pty) Ltd** (Reg 1997/002157/07) appears ONLY
> where legally required — the footer legal line and schema `legalName`.

## Project purpose

A simple, premium homepage + dedicated quote page that, within ~5 seconds, tells a
visitor: *we manufacture ready-made curtains · we're the largest curtain
manufacturer in Africa · we supply businesses · get a quote.* Nothing competes
with that message. It is **not** a consumer curtain store, **not** a long funnel,
and **not** a corporate brochure.

The primary action everywhere is **Get a Quote** → `/get-a-quote`.

## Design direction

- Official Zaydtex palette: **cream / copper / chocolate** (Tailwind `brand.*`).
- Premium, lots of whitespace, large luxury typography (Plus Jakarta Sans).
- Subtle textile brand accents — a braided copper **ThreadDivider**, faint woven
  **`.texture-weave`** overlays on dark sections, **`.stitch-border`** cards, a
  copper "Z" drapery hero, copper-thread card hovers. All Apple-subtle and
  reduced-motion aware.

## Funnel goal

Generate **high-quality B2B leads** from retailers, wholesalers, designers,
developers and hospitality groups.

**Two** lead/contact paths only: the **quote form** and **phone calls**.
**No WhatsApp anywhere.** Consumer shoppers are filtered out by copy ("trade &
wholesale only") and form qualifiers (company name + business type).

**Phone:** 012 666 7100 (`tel:+27126667100`) · **Email:** info@zaydtex.com ·
**Quote page:** `/get-a-quote` — every quote CTA links here.

## ⚠️ Temporary development decisions (read before launch)

These are interim choices for development/testing, to be swapped for the
client's final setup. Full detail in [`SESSION-HANDOVER.md`](./SESSION-HANDOVER.md).

- **Native lead form replaces the blank GHL embed.** The quote form on
  `/get-a-quote` is a fully functional native form (`components/funnel/lead-form.tsx`),
  shown while `siteConfig.useGhlForm === false`. Set it to `true` (with a real
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
lib/schema.ts             # Manufacturer/Organization JSON-LD (Zaydtex + legalName)
lib/tracking.ts           # GTM / Google Ads helpers (no-op until IDs set)
```

## Page structure (simplified — 5 sections)

**Home (`/`):** Header → Hero → Trust strip → What We Make → Why Zaydtex →
Quote CTA band → Footer → sticky mobile **Call** bar. Every quote CTA links to
`/get-a-quote`.

**Quote page (`/get-a-quote`):** headline → short trust row → "who this is for" →
quote form (6 fields) → phone CTA → response expectation. The form emails the
lead and redirects to `/thank-you` (noindex), where the lead conversion fires.

Removed in the simplification: Who-We-Supply section, Product Ranges grid, How-It-
Works steps, Reviews placeholder, and the FAQ (plus its FAQPage schema).

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

Most real details are now in (phone, email, address, the 8 trust facts — all from
the official company profile, nothing invented). Remaining items:

| Item | Location | Notes |
|---|---|---|
| **Logo files** | `public/images/logo/` | upload `logo-primary.png` + `logo-icon.png` — site auto-updates (fallback wordmark until then). See that folder's README. |
| **OG image + favicon** | `public/images/logo/` | optional: `og-image.jpg` (1200×630) and `favicon.ico` — config already points at them |
| **Hero photo** (optional) | `siteConfig.heroImage` | empty = built-in premium drapery visual; set a path to use a real curtain photo |
| **Form delivery inbox** | `config/site-config.ts` (`leadEmail`) | temp `info@bbettragency.com` (FormSubmit, activated). Switch to client's inbox + re-activate, or set `useGhlForm = true` with a real `formId`. Public contact email is already `info@zaydtex.com`. |
| **GTM + Google Ads IDs & labels** | `config/site-config.ts` (`tracking`) | tracking is a no-op until real IDs are pasted |
| Trading hours | `config/site-config.ts` (`hours`) | confirm |

## Vercel deployment notes

1. **Import the repo** into Vercel: `bbettr-agency/korteks-funnel`. Next.js is
   auto-detected — no build config changes needed (`next build`, output `.next`).
2. **Production domain:** point the client's domain at the Vercel project and
   update `website` in `config/site-config.ts` (used by canonical URLs, sitemap,
   robots and JSON-LD).
3. **Environment:** no secret env vars are required for the front end — the GHL
   form and tracking IDs live in `config/site-config.ts`. Replace the
   placeholders there and redeploy.
4. **Before going live:** upload the logo files, point `leadEmail` at the
   client's inbox (or set `useGhlForm = true` with a real `formId`, confirming the
   GHL post-submit redirect → `/thank-you`), and paste the GTM + Google Ads
   IDs/labels.
5. **Analytics:** `/thank-you` is `noindex` and is where the Google Ads lead
   conversion fires; verify it in Google Ads / GTM preview after deploy.

---

Website by [Bbettr Agency](https://bbettragency.com).
