# GEO Audit Report: Zaydtex

**Audit Date:** 17 November 2026
**URL:** https://www.zaydtex.com/
**Business Type:** B2B Manufacturer / Wholesale (Agency/Services-style lead funnel, with a local factory)
**Pages Analyzed:** 2 indexable (`/`, `/get-a-quote`) plus `/thank-you`, `robots.txt`, `sitemap.xml`, `llms.txt`, and the 404 page
**Brand / Manufacturer:** Zaydtex, made by Korteks Textiles Africa (Pty) Ltd, 14 Sesmylspruit St, Sunderland Ridge, Centurion, Gauteng

---

## Executive Summary

**Overall GEO Score: 36/100 (Critical)**

The technical base is sound: the site is server-rendered on Next.js and Vercel, it is fast and mobile-friendly, and robots.txt lets every AI crawler in. Beyond that, AI systems have very little to work with.

- There are only two pages, with no specs, FAQ or About page.
- The site's strongest facts, almost 1M curtains a year, 250+ staff and 19,000 m², are delivered to crawlers as **"0"**.
- Across the web there is almost nothing independent about Zaydtex. The only third-party mention found is one trade-show exhibitor listing.
- AI models are already mixing Korteks Textiles Africa up with Korteks Mensucat, an unrelated Turkish yarn company.

Zaydtex did not appear for any of the buyer queries tested, such as "ready made curtains wholesale South Africa". Competitors listed on sadecor.co.za appear for all of them.

### Score Breakdown

| Category | Score | Weight | Weighted Score |
|---|---|---|---|
| AI Citability | 49/100 | 25% | 12.3 |
| Brand Authority | 5/100 | 20% | 1.0 |
| Content E-E-A-T | 34/100 | 20% | 6.8 |
| Technical GEO | 68/100 | 15% | 10.2 |
| Schema & Structured Data | 25/100 | 10% | 2.5 |
| Platform Optimization | 32/100 | 10% | 3.2 |
| **Overall GEO Score** | | | **36/100** |

The biggest gain is content plus fixing the zero counters. Most of the other score lost is in Brand Authority. That needs off-site work and takes time, but it is the main lever for getting Zaydtex recommended by ChatGPT, Gemini and Perplexity.

---

## Critical Issues (Fix Immediately)

1. **The trust stats render as "0" in the server HTML.**
   - **What crawlers read:** the raw HTML says "Almost **0** Ready-made curtains a year · **0**+ Skilled hands · **0** m² Under one roof · **0** % South African owned". GPTBot, ClaudeBot, PerplexityBot and similar crawlers read this HTML, so AI answers may quote false figures about the company.
   - **Cause:** `components/ui/count-up.tsx:45` starts with `useState(0)`.
   - **Fix:** initialise the counter with the final `value` so the server renders the real number, and animate only on the client after mount. Add one plain-text facts sentence as well (see Citability).
   - **Pages:** `/`.

2. **The canonical URLs point to an address that redirects.**
   - `https://zaydtex.com` returns 308 to `https://www.zaydtex.com/`.
   - Every canonical, og:url, og:image, sitemap `<loc>`, the robots.txt `Sitemap:` line and the JSON-LD `url` use the non-www host. Google, Bing and AI crawlers get conflicting signals about which host is the real one.
   - **Fix:** in `config/site-config.ts:63`, set `website: "https://www.zaydtex.com"`. That one value feeds `lib/metadata.ts`, `app/sitemap.ts`, `app/robots.ts` and `lib/schema.ts`.
   - **Pages:** all.

3. **There is no privacy policy, but the quote form collects personal data (POPIA).**
   - The form promises "Your details are kept private and secure" but links to no policy.
   - The handover notes that leads currently go to the agency inbox as a temporary setup. This should be disclosed or switched to the client's own inbox.
   - **Fix:** add `/privacy-policy` and a link next to the form. This is a trust issue and a legal one, especially before running Ads.
   - **Pages:** `/get-a-quote`.

4. **Zaydtex has almost no presence outside its own site.**
   - No Wikipedia, LinkedIn, YouTube, Reddit, news coverage, Google Business Profile result or SA directory listing was found.
   - The only third-party mention is the Hotel & Hospitality Expo Africa 2024 exhibitor page.
   - Searches for "Zaydtex" bring up look-alike names (Zydex, Zeyd Tekstil), not this company.
   - See Brand Authority.

5. **The schema type is invalid and the schema has no linked graph.**
   - `@type: ["Organization","Manufacturer"]` is invalid, because `Manufacturer` is not a schema.org type.
   - There is no `@id`, WebSite, WebPage or LocalBusiness entity, so search engines and AI systems can't connect the brand, the site and the Centurion factory as one entity.
   - **Fix:** use `["Organization","Corporation"]` and ship the `@graph` in `lib/schema.ts`.
   - **Location:** `lib/schema.ts`, injected in `app/layout.tsx:41-47`.

## High Priority Issues

6. **The hero is invisible until JavaScript runs.**
   - The H1 wrapper and the hero image are server-rendered at `opacity:0`, and about 40 elements on the page start at `opacity:0`.
   - With JavaScript disabled, the first screen is blank (screenshot: `docs/geo-audit/no-js-mobile.png`). No LCP was recorded in testing.
   - **Fix:** in `components/sections/funnel-hero.tsx:24, :86, :109, :126, :142`, use `initial={false}` or animate only `transform` above the fold. Add a `@media (scripting: none)` override for the sections further down.
7. **There is no llms.txt** (`/llms.txt` and `/llms-full.txt` return 404). A draft is in Appendix B.
8. **The content is too thin to be cited.**
   - The home page has about 760 words and the quote page about 200.
   - There are no product pages, specs (sizes, widths, roll lengths, compositions, MOQ, lead times), FAQ, About page or how-to-order page.
   - Trade buyers search for exactly these facts, and AI engines quote them.
9. **The company's size is described five different ways:**
   - "one of South Africa's vertically integrated textile manufacturers" (hero)
   - "one of South Africa's **most** vertically integrated…" (Factory section)
   - "One of the **largest**… in Africa" (trust strip)
   - "South Africa's vertically integrated textile manufacturer" (title, meta, schema, footer)
   - "**Africa's largest curtain manufacturer**" (`/get-a-quote` meta description, `app/get-a-quote/page.tsx:8`)

   Pick one claim the client can back up, for example "one of the largest vertically integrated curtain textile producers in Africa, ≈1M curtains a year", and use it everywhere.
10. **The Organization schema needs filling in.**
    - The phone is not in E.164 format; it should be `+27126667100`.
    - There is no `contactPoint`.
    - `sameAs` lists only Facebook.
    - The address omits Sunderland Ridge.
    - The CIPC registration number is in the config but not in the schema.
    - Only 1 of the 7 product lines is marked up.
11. **Five of six security headers are missing:** CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy and Permissions-Policy. HSTS has no `includeSubDomains` or `preload`.
    - **Fix:** add `async headers()` to `next.config.js`. Start the CSP in Report-Only mode and allow GTM, GA and Vercel.
12. **Bing and IndexNow are not set up.**
    - There is no `msvalidate.01` meta tag and no IndexNow key in the HTML, though Bing may already be verified via DNS.
    - Bing's index feeds ChatGPT search and Copilot.
    - **Fix:** verify the site in Bing Webmaster Tools (it can import from Google Search Console), submit the sitemap and enable IndexNow.
13. **Zaydtex is missing from sadecor.co.za,** the directory AI engines cite most for this category. It came up for every buyer query tested, and Zaydtex is not listed.
14. **Nobody is named and there is no About page.** The site has no founding story or year, no people, no B-BBEE level and no registration number. Expertise and authority signals are close to zero.

## Medium Priority Issues

15. **The sitemap is thin.** It has 2 URLs, no `<lastmod>`, and both `<loc>` values redirect. Add `lastModified` in `app/sitemap.ts` and add new pages as they ship.
16. **The title and meta description are too long.**
    - The title is 87 characters; aim for 60 or fewer.
    - The meta description is 257 characters; aim for 160 or fewer.
    - Both are set in `config/seo-config.ts:2-5`.
17. **The 404 page sends conflicting signals.** It outputs both `noindex` and `index, follow`, plus the homepage canonical and title. Add `app/not-found.tsx` with its own metadata.
18. **`/thank-you` is blocked in robots.txt and also marked noindex.** Because crawlers can't fetch it, they never see the noindex. Remove the `disallow` at `app/robots.ts:9` and rely on the meta noindex.
19. **The schema claims a product the page never mentions.** `knowsAbout` lists "Blackout curtains", which appears nowhere on the page. Confirm it with the client or remove it.
20. **Some claims can't be checked.** These need the client to confirm or back them up:
    - "Everything we sell, we make", which includes dress forms and towelling
    - "8 Quality Checks", which are never listed
    - "National Chains" as current customers
    - "ZaHa snag-proof"
21. **The Zaydtex Korteks name is being confused with Turkish Korteks** (Korteks Mensucat, a Zorlu Group yarn producer that exports to South Africa).
    - One AI search summary has already called it the "parent company".
    - **Fix:** add a disambiguation line to the About page and llms.txt, and the CIPC identifier to the schema. Before publishing, have the client confirm the two companies are unrelated.
22. **Headings are slogans** ("Built for the long term.", "Made properly, at every step."). None describe the content or match what people search for. Keep the slogans, but add descriptive H2s and H3s, or question-style ones.
23. **Some product images may be placeholders.** The handover flags the Table Cloths, Cushions, Towelling and Dress Forms images as placeholders, and their alt text names them as Zaydtex products. Confirm these are real product photos.
24. **The B-BBEE claim is "contributor", with no level or certificate.** Procurement and hospitality buyers will ask for the level.

## Low Priority Issues

25. `lang="en"` should be `lang="en-ZA"` to match og:locale `en_ZA` (`app/layout.tsx:36`).
26. **The logo image is heavy and unsized.** It is a 66 KB PNG with no width or height. `knit-divider.png` is 172 KB and loads from CSS at `app/globals.css:53`. Convert both to WebP or AVIF and add `images.formats: ['image/avif','image/webp']`.
27. **About 40 MB of original JPG files sit in `public/images`.** They ship with the deployment and anyone can download them. Remove them or optimise them.
28. **There is no Content-Signal line in robots.txt.** Optional: `Content-Signal: search=yes, ai-retrieval=yes, ai-train=…`.
29. **Some copy repeats.** "Get / Request Trade Pricing" appears more than 15 times, which dilutes the text AI systems could quote.
30. **There is no visible Facebook link,** although `sameAs` lists it. Add social links to the footer.

---

## Category Deep Dives

### AI Citability (49/100)

No passage on the site scores above 70, the level at which a passage is ready to be cited. The best passages:

| Passage | Score | Note |
|---|---|---|
| Ready-Made Curtains: "Made, packaged and barcoded in-house… Almost a million leave our floor a year" | 57 | The only volume figure readable as text |
| "Zaydtex products are manufactured by Korteks Textiles Africa… Warping, knitting, weaving… under one roof in Centurion." | 53 | Good link between the two names. No numbers. |
| Hero sub-copy: "Manufactured by Korteks Textiles Africa, one of South Africa's…" | 46 | Too vague ("one of") |
| Product cards, e.g. "Full rolls of curtain fabric for the trade." | ~25 | Too short, no specs |
| Stat strip ("Almost 0…") | 14 | Actively harmful |

**Suggested rewrites:**
1. **Facts sentence.** Add this as server-rendered text near the stat strip: *"Korteks Textiles Africa makes almost 1,000,000 ready-made curtains a year in a 19,000 m² factory in Centurion, Gauteng, with 250+ staff, and is 100% South African owned."*
2. **Definition under the H1:** *"Zaydtex is the trade and wholesale brand of Korteks Textiles Africa (Pty) Ltd, a vertically integrated curtain and textile manufacturer in Centurion, South Africa. It supplies ready-made curtains, curtain fabric by the metre and roll, table cloths, scatter cushions, ZaHa towelling and dress forms to retailers, wholesalers and hospitality groups nationwide."*
3. **Quality checks.** Turn "Eight checks before anything is packed" into a numbered list of the 8 named checks. The client needs to confirm what they are.
4. **Product cards.** Add one spec line to each: sizes (width × drop), fabric width per roll, towelling GSM.
5. **Trade FAQ.** Add 2–3 sentence answers on `/get-a-quote`, or on a new `/trade-faq` page (questions in the 30-Day Plan).

### Brand Authority (5/100)

| Platform | Found? | Notes |
|---|---|---|
| Wikipedia / Wikidata | No | No article or item for Zaydtex or Korteks Textiles Africa |
| LinkedIn | No | No company page found |
| YouTube | No | No channel or videos |
| Reddit / forums | No | No mentions |
| Facebook | Listed, not verified | `facebook.com/zaydtex` is in the schema. Couldn't be checked from the audit sandbox. |
| Google Business Profile | Not found in web search | The client needs to confirm. Maps isn't fully indexed by web search. |
| SA directories (sadecor.co.za, D&B, Hellopeter) | No | Competitors are listed and Zaydtex is not |
| Industry / trade show | Yes (1) | [Hotel & Hospitality Expo Africa 2024 exhibitor listing](https://exhibitors.thehotelshowafrica.com/hotel-and-hospitality-expo-africa-2024/Exhibitor/ExbDetails/MTU4NzA=) for "Korteks Textiles Africa/Zaydtex®": "the largest vertically integrated Inside Curtain Textile producer in Africa" |
| News / press | No | None |

**How it was checked:** WebSearch only. The sandbox couldn't reach Wikipedia, LinkedIn, Facebook, YouTube or Reddit directly.

**Name confusion:** "Korteks" searches are dominated by Korteks Mensucat (Bursa, Turkey).

### Content E-E-A-T (34/100)

E-E-A-T sub-scores (combined 31/100): Experience 8/25 · Expertise 6/25 · Authoritativeness 6/25 · Trustworthiness 11/25.

**Strengths:**
- Real, specific factory photography with good alt text (raschel knitting, jacquard loom, Schiffli embroidery, stenter).
- Trade terms used correctly.
- The legal entity is disclosed.
- Contact details (phone, email, address) are identical everywhere.
- The owner's voice reads as human-written.

**Gaps:**
- No people, About page, specs, case studies, testimonials, certifications (beyond "B-BBEE contributor"), external citations, dates or privacy policy.
- Seven product categories get one line each, so the site has almost no topical authority.

### Technical GEO (68/100)

| Area | Status |
|---|---|
| Server-side rendering | ✅ Text is in the HTML. ⚠️ Counters show "0", and the hero sits at opacity 0. |
| AI crawler access | ✅ Every bot is allowed (`User-Agent: * Allow: /`) |
| Canonical / host | ❌ Non-www canonical, but the site serves from www |
| Sitemap | ⚠️ 2 URLs, no lastmod, redirecting locs |
| llms.txt | ❌ 404 |
| Security headers | ⚠️ HSTS only |
| Speed | ✅ TTFB 0.13–0.9 s; HTML is 15 KB compressed (Brotli); FCP 0.55 s desktop / 1.26 s mobile; CLS ≈ 0; first-party JS is 174 KB |
| Mobile | ✅ Viewport set, 16px base font, no horizontal scroll |
| 404 handling | ⚠️ Real 404 status, but conflicting meta tags |

Not run: Lighthouse/PageSpeed Insights. The sandbox also blocked GTM, so third-party JavaScript weight is not included.

### Schema & Structured Data (25/100)

**Current markup:** one JSON-LD block, server-rendered from `lib/schema.ts` and repeated on every route.

**Problems:**
- Invalid `Manufacturer` type.
- Entity URL on the non-www host.
- No `@id`.
- Phone not in E.164 format.
- `sameAs` lists only Facebook.
- One `makesOffer` covering 7 product lines.
- No WebSite, WebPage, BreadcrumbList or LocalBusiness entity.

**Proposed:** a linked `@graph` in `lib/schema.ts`. It covers:
- Organization + Corporation, with `@id`, `contactPoint`, the CIPC `identifier`, and the ZaHa range as a Brand
- A LocalBusiness entity for the Centurion factory
- An OfferCatalog of all 7 product lines
- WebSite and WebPage entities
- A BreadcrumbList on `/get-a-quote`

The module has been rendered to JSON and every `@id` reference resolves. Items the client must confirm are commented out as `TODO(client)`: geo coordinates, opening hours, extra `sameAs` profiles and `parentOrganization`.

Also remove "Blackout curtains" from `knowsAbout` unless the client confirms it (#19). Never add ratings, prices or a founding date without real data.

After deploying, validate with Google's Rich Results Test and validator.schema.org.

### Platform Optimization (32/100)

| Platform | Readiness | Key gap |
|---|---|---|
| Google AI Overviews | 35 | No answer-format content, product pages or FAQ |
| ChatGPT search | 40 | Weak entity signals; counters read "0" |
| Perplexity | 34 | No community or directory validation; no freshness signals |
| Google Gemini | 16 | No Google footprint (Business Profile, YouTube) |
| Bing Copilot | 34 | No Bing Webmaster or IndexNow signals; host mismatch |

**Who shows up for the target queries instead** (WebSearch, 17 Nov 2026):
- Stuart Graham Fabrics
- Eshanima Fabrics
- Curtain Master
- Kathleen's Home Designs
- Helm Textile Mills, which publishes blog posts targeting these queries
- D. Doucakis
- fibre2fashion

Most of these appear through **sadecor.co.za**.

---

## Quick Wins (Implement This Week)

1. **Fix the zero counters.** Server-render the real values in `count-up.tsx` and add the facts sentence. *Impact: removes false data AI could quote; Citability +10–15.*
2. **Move every URL to the www host.** Change `siteConfig.website` to `https://www.zaydtex.com`, which fixes the canonicals, sitemap, robots.txt line, OG tags and schema in one edit. *Impact: one consistent host for every crawler.*
3. **Publish `public/llms.txt`.** The draft is in Appendix B. *Impact: Technical and AI Visibility.*
4. **Replace the schema with the linked `@graph`.** Also fix the type, the E.164 phone and the address. *Impact: Schema 25 → about 55–60.*
5. **Make the size claim consistent.** Shorten the title and meta description, and add a privacy policy link. *Impact: Trust and consistency.*

## 30-Day Action Plan

### Week 1: Fix what crawlers see
- [ ] Server-render the counter values; add the facts sentence and the H1 definition line
- [ ] Set `siteConfig.website` to www; add `lastModified` to the sitemap
- [ ] Hero animations: `initial={false}` above the fold; `@media (scripting: none)` fallback for sections below
- [ ] Ship `llms.txt` and the new schema `@graph`
- [ ] Add security headers in `next.config.js`; add `app/not-found.tsx`; remove the `/thank-you` disallow
- [ ] Publish `/privacy-policy` (POPIA) and route leads to the client's inbox

### Week 2: Entity and listings (client involvement needed)
- [ ] Claim or verify the Google Business Profile for 14 Sesmylspruit St, with NAP identical to the site
- [ ] Create a full LinkedIn company page for Zaydtex / Korteks Textiles Africa
- [ ] Get listed on sadecor.co.za (fabric and curtain supplier categories), Hellopeter and fibre2fashion
- [ ] Verify in Google Search Console and Bing Webmaster Tools; submit the sitemap; enable IndexNow
- [ ] Add every verified profile to `sameAs` and to the footer

### Week 3: Content that can be cited (needs client facts)
- [ ] `/about`: the Korteks story, founding year (1994 vs 1997 is unconfirmed), CIPC number, B-BBEE level, leadership names, and a note on how the company differs from Korteks Mensucat
- [ ] `/ready-made-curtains`: size grid (widths × drops), heading types, fabric types, pack quantities, barcoding, private label
- [ ] `/curtain-fabric`: widths, roll lengths, compositions, weights, minimum cut, treatments
- [ ] `/trade-faq` with FAQPage schema. Questions:
  - Do you sell to trade only?
  - Where is it made?
  - What is the MOQ?
  - What sizes and heading types do you offer?
  - What fabric widths and roll lengths are available?
  - Do you offer blackout, sheer, lace and jacquard?
  - Do you do private label or custom colours?
  - What are your lead times?
  - What are your delivery terms?
  - How do I open a trade account?
  - What is your B-BBEE level?
  - How quickly will I get a quote?

### Week 4: Proof and reach
- [ ] `/manufacturing`: one section per process, plus the 8 named quality checks
- [ ] Shoot a 2–3 minute factory walkthrough, publish it on YouTube and embed it on `/manufacturing`
- [ ] 1–2 case studies or client logos (with permission)
- [ ] Pitch a local-manufacturing story to SA trade or business press, the first step toward Wikipedia and Wikidata eligibility
- [ ] Generate `llms-full.txt`; run the next audit with `/geo-compare` to measure the change from this baseline

**Facts the client must confirm before publishing:**
- Founding year
- B-BBEE level
- MOQs, sizes and lead times
- Whether "Blackout" is in the range
- Whether dress forms and towelling are made in-house
- What the 8 QC checks are
- Whether product images are real
- Whether the company is related to Korteks Mensucat
- Opening hours and map pin

---

## Fix Log — 17 November 2026

Everything below shipped in code. Items that need client facts or off-site accounts were **not** invented; they are listed under "Still open".

| # | Issue | Status | Where |
|---|---|---|---|
| 1 | Stats rendered "0" | ✅ Real values server-rendered; count-up only re-primes when off-screen; plain-text facts sentence added under the stats | `components/ui/count-up.tsx`, `trust-strip.tsx`, `trustSummary` |
| 2 | Canonical on redirecting host | ✅ `siteConfig.website` → `https://www.zaydtex.com` (canonicals, OG, sitemap, robots, schema) | `config/site-config.ts` |
| 3 | No privacy policy | ✅ `/privacy-policy` (POPIA baseline, describes the real data flows), linked under the form and in the footer. **Client should have it reviewed.** | `app/privacy-policy/page.tsx` |
| 5 | Invalid schema / no graph | ✅ Per-page linked `@graph`: Organization+Corporation, LocalBusiness factory, ZaHa Brand, OfferCatalog (7 products), WebSite, WebPage, BreadcrumbList, FAQPage. E.164 phone, contactPoint, suburb in address. "Blackout" removed. | `lib/schema.ts`, `components/seo/json-ld.tsx` |
| 6 | Hero invisible without JS | ✅ Hero copy + LCP image animate transform only; `@media (scripting: none)` fallback reveals all other animated sections | `funnel-hero.tsx`, `app/globals.css` |
| 7 | No llms.txt | ✅ `/llms.txt` (www URLs, verified facts only) | `public/llms.txt` |
| 8 | Thin content | ⚠️ Partly: 10-question trade FAQ on `/get-a-quote` (verified facts only) + definition sentence in hero. Product/About/spec pages need client facts. | `tradeFaq`, `components/sections/trade-faq.tsx` |
| 9 | Inconsistent scale claim | ✅ One claim everywhere: "one of the largest vertically integrated textile producers in Africa" ("Africa's largest curtain manufacturer" removed) | configs, quote meta, footer |
| 10 | Schema gaps | ✅ (see #5). `sameAs` driven by `siteConfig.socialProfiles` | |
| 11 | Security headers | ✅ nosniff, SAMEORIGIN, Referrer-Policy, Permissions-Policy, HSTS includeSubDomains, CSP **Report-Only** | `next.config.js` |
| 15 | Sitemap | ✅ www URLs, `lastmod`, privacy page added | `app/sitemap.ts` |
| 16 | Title / description length | ✅ 54 / 149 chars | `config/seo-config.ts` |
| 17 | 404 conflicting signals | ✅ Branded `app/not-found.tsx`; root layout no longer emits canonical or `index, follow` | `lib/metadata.ts`, `app/layout.tsx` |
| 18 | `/thank-you` blocked + noindex | ✅ Disallow removed (meta noindex kept) | `app/robots.txt/route.ts` |
| 19 | "Blackout curtains" in schema | ✅ Removed | `lib/schema.ts` |
| 25 | `lang="en"` | ✅ `en-ZA` | `app/layout.tsx` |
| 26 | Heavy logo / divider | ✅ 240px WebP icon (2 KB) with width/height; divider WebP (62 KB vs 172 KB); AVIF enabled | `components/ui/logo.tsx`, `next.config.js` |
| 27 | 40 MB originals public | ✅ Unreferenced originals moved to `assets/source-images/` (not deployed); `public/images` 71 MB → ~2 MB | |
| 28 | Content-Signal | ✅ `search=yes, ai-input=yes` (ai-train left to client) | `app/robots.txt/route.ts` |
| 30 | No visible social link | ✅ Footer Facebook link (`rel="me"`) | `minimal-footer.tsx` |

**Still open — needs the client or off-site work (not something code can fix):**
- **Client facts:** founding year, B-BBEE level, MOQs, sizes/widths/roll lengths, lead times, delivery terms, the 8 named QC checks, whether blackout is in the range, whether dress forms/towelling are made in-house, real product photos, opening hours + map pin, Information Officer, relationship (if any) to Korteks Mensucat. Then build `/about`, product pages, `/manufacturing`, `/how-to-order`, and extend the FAQ.
- **Off-site (#4, #12, #13):** Google Business Profile, LinkedIn page, sadecor.co.za / Hellopeter / fibre2fashion listings, Google Search Console + Bing Webmaster (submit sitemap, IndexNow), YouTube factory video, press. Add each verified URL to `siteConfig.socialProfiles`.
- **Leads:** form still posts to the agency's GoHighLevel webhook — confirm the client receives them.
- **CSP:** move from Report-Only to enforced after checking the browser console in production.
- **Deliberately not done:** CIPC registration number in schema (removed from the site on purpose earlier); descriptive H2 rewrites (brand-voice decision for the owner).

---

## Appendix A: Pages Analyzed

| URL | Title | Status | GEO Issues |
|---|---|---|---|
| https://www.zaydtex.com/ | Zaydtex \| South Africa's Vertically Integrated Textile Manufacturer — Trade & Wholesale | 200 | 14 |
| https://www.zaydtex.com/get-a-quote | Get a Trade Quote — Ready-Made Curtains \| Zaydtex | 200 | 9 |
| https://www.zaydtex.com/thank-you | (noindex) | 200 | 1 |
| https://zaydtex.com/* | — | 308 → www | Canonical mismatch |
| /robots.txt | — | 200 | 1 |
| /sitemap.xml | — | 200 | 2 |
| /llms.txt, /llms-full.txt | — | 404 | Missing |
| /sitemap_index.xml | — | 404 | Harmless |

**Not tested:** plain `http://` URLs (sandbox limitation); Lighthouse/PageSpeed Insights; direct fetches of social platforms and Wikipedia (blocked); GTM/GA weight (blocked).

## Appendix B: Draft `llms.txt` (place at `public/llms.txt`)

URLs are written for the www host. Lines marked ⚠️ need the client to confirm them before shipping.

```
# Zaydtex

> Zaydtex is the trade and wholesale brand of Korteks Textiles Africa (Pty) Ltd, a vertically integrated textile manufacturer in Centurion, Gauteng, South Africa. It makes ready-made curtains and a full home-textile range from yarn to finished product, and supplies retailers, wholesalers and the trade nationwide. Trade and wholesale enquiries only.

Key facts:
- Manufacturer: Korteks Textiles Africa (Pty) Ltd, 14 Sesmylspruit Street, Sunderland Ridge, Centurion, 0157, Gauteng, South Africa
- Output: almost 1,000,000 ready-made curtains a year
- Factory: 19,000 m² under one roof in Centurion; 250+ skilled staff
- Ownership: 100% South African owned and run; B-BBEE contributor
- In-house processes: warping, knitting, weaving, embroidery, dyeing and finishing, cut-make-trim (CMT), and eight quality checks before packing
- Customers: independent retailers, national chains, wholesalers, curtain shops, furniture stores, interior designers, hospitality groups, property developers, construction and industrial buyers
- Contact: +27 12 666 7100 · sales@zaydtex.com · quotes answered within 1 business day
- ⚠️ Not affiliated with Korteks Mensucat (Bursa, Turkey)  [confirm with client]

## Main pages

- [Zaydtex home](https://www.zaydtex.com/): Company overview, manufacturing capabilities, product range and why trade buyers choose Zaydtex
- [Get a trade quote](https://www.zaydtex.com/get-a-quote): Request trade or wholesale pricing for ready-made curtains, curtain fabric and the full textile range

## Product range

- [Ready-made curtains](https://www.zaydtex.com/get-a-quote?product=Ready-Made%20Curtains): Made, packaged and barcoded in-house, ready for retail shelves or projects; sheers, lace and woven jacquard styles
- [Curtain fabric by the metre](https://www.zaydtex.com/get-a-quote?product=Curtain%20Fabric%20by%20the%20Metre): Curtain fabric cut to requirement, any quantity
- [Curtain fabric by the roll](https://www.zaydtex.com/get-a-quote?product=Curtain%20Fabric%20by%20the%20Roll): Full rolls of curtain fabric for the trade
- [Table cloths](https://www.zaydtex.com/get-a-quote?product=Table%20Cloths): Table linen for hospitality and retail
- [Scatter cushions](https://www.zaydtex.com/get-a-quote?product=Scatter%20Cushions): Coordinating cushions to complete a curtain range
- [Towelling products](https://www.zaydtex.com/get-a-quote?product=Towelling%20Products): The ZaHa snag-proof towelling range
- [Dress forms](https://www.zaydtex.com/get-a-quote?product=Dress%20Forms): Plain and adjustable dress forms in every size

## Optional

- [Facebook](https://www.facebook.com/zaydtex): Official Zaydtex Facebook page
```

When product pages exist, point the product links at them instead of the quote URL.

## Appendix C: Supporting files

- `lib/schema.ts`: the shipped per-page `@graph` (client-confirm items listed in its header comment).
- `docs/geo-audit/no-js-mobile.png`: the home page on mobile with JavaScript disabled (blank hero).
