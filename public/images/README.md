# Zaydtex — Site Photography

All site photography lives in this folder and is **config-driven** — no image
paths are hard-coded in components. To swap a placeholder for a real Zaydtex
photo, either **drop a new file in using the exact same filename**, or change the
path in config. Alt text is editable in config too (good for SEO/accessibility).

> ⚠️ The current images are **curated stock placeholders**. Replace them with real
> Zaydtex product and factory photography before launch.

## Files to supply

| Filename (in `/public/images/`) | Used by | Recommended | Path in config | Alt text in config |
|---|---|---|---|---|
| `hero-curtains.jpg` | Hero (right half / full on mobile) | Portrait-ish, ~1500×1875, premium curtains in a light interior | `config/site-config.ts` → `heroImage` | `site-config.ts` → `heroImageAlt` |
| `factory.jpg` | Factory band ("Every curtain starts here") | Landscape, ~2000×1300, machinery / production floor showing scale | `config/funnel-config.ts` → `factory.image` | `funnel-config.ts` → `factory.imageAlt` |
| `product-ready-made.jpg` | Products — featured (Ready-Made Curtains) | Landscape ~4:3, hero curtain shot | `funnel-config.ts` → `products[0].image` | `products[0].alt` |
| `product-sheers.jpg` | Products tile — Sheers | Portrait ~3:4 | `products[1].image` | `products[1].alt` |
| `product-lace.jpg` | Products tile — Lace | Portrait ~3:4 (fabric detail) | `products[2].image` | `products[2].alt` |
| `product-blackout.jpg` | Products tile — Blackout | Portrait ~3:4 | `products[3].image` | `products[3].alt` |
| `product-jacquard.jpg` | Products tile — Jacquard | Portrait ~3:4 (textured fabric) | `products[4].image` | `products[4].alt` |

## How to swap (two options)

1. **Same filename (easiest):** export your photo to the filename above, drop it
   into `/public/images/`, redeploy. The site picks it up automatically.
2. **New filename / path:** put the file in `/public/images/` and update the
   matching `image` path (and `alt`) in the config file noted above.

## Specs & tips

- Format: **JPG** (photos). Optimise to keep each file roughly **≤ 350 KB**
  (the placeholders are ~130–550 KB). Tools: Squoosh, ImageOptim, or `sips`.
- Keep the recommended orientation so the crop (`object-cover`) frames well.
- Images are served through **`next/image`** (automatic responsive sizing), so
  supply a good-resolution source — Next handles the rest.
- Always set meaningful **alt text** in config (not "image1") — it's read by
  Google and screen readers.

## Externally sourced / extracted images (documented for licensing)

These are **not** original Zaydtex photography. Replace with real Zaydtex/Korteks
photos when available (just swap the path in config).

| File | Used by | Source | Licence |
|---|---|---|---|
| `craftsmanship/dyeing-finishing.webp` | Capabilities → Dyeing & Finishing (`config/craftsmanship-config.ts`) | Pexels photo [38357014](https://www.pexels.com/photo/38357014/) | Pexels licence — free for commercial use, no attribution required |
| `product-hooded-towel.webp` | Products → Towelling (`config/funnel-config.ts`) | Pexels photo [24538693](https://www.pexels.com/photo/24538693/) | Pexels licence — free for commercial use, no attribution required |
| `product-dress-form.webp` | Products → Dress Forms (`config/funnel-config.ts`) | Extracted from the official **Company Profile 2024.pdf** (page 10, "Dressforms"), optimised for web | Client-owned company asset |

Client-supplied factory photos added this round (real Zaydtex/Korteks). The client
uploaded the full-res originals and named them; those originals are left untouched.
The site renders web-optimised `.webp` derivatives generated from them:

| Client original (untouched) | Optimised derivative (used by site) | Used by |
|---|---|---|
| `embroidery.jpg` | `embroidery.webp` | Capabilities → Embroidery |
| `curtain being sewed` (no extension) | `curtain-being-sewed.webp` | Capabilities → Cut, Make & Trim |

Still needed as real photos (currently placeholders / not authorised to source):
Table Cloths (`product-jacquard.jpg`) and Scatter Cushions (`product-blackout.jpg`,
currently a curtain).

## Not photography (do not replace with photos)

- `knit-divider.png` — the optimised Zaydtex **knitting motif** used as the
  section divider (via `app/globals.css` → `.knit-strip`). It's a brand graphic,
  not a swappable photo.
- `Knitting backround png.png` — the client's original uploaded knit source.
- `logo/` — brand logos; see `logo/README.md`.
