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

## Client-supplied images → optimised derivatives

The client uploads full-res originals (named after their section) and those
originals are left **untouched**. The site is config-driven and renders
web-optimised, web-safe-named `.webp` derivatives generated from them (the
originals' names contain spaces / `&` / mixed formats that are unreliable in
URLs). To swap any image later, replace the original and regenerate the webp,
or point the config path at a new file.

| Client original (untouched) | Optimised derivative (used by site) | Used by |
|---|---|---|
| `embroidery.jpg` | `embroidery.webp` | Capabilities → Embroidery |
| `curtain being sewed` (no extension) | `curtain-being-sewed.webp` | Capabilities → Cut, Make & Trim |
| `Dying & Finishing.png` | `craftsmanship/dyeing-finishing.webp` | Capabilities → Dyeing & Finishing |
| `Ready made curtain.jpg` | `product-ready-made-curtain.webp` | Products → Ready-Made Curtains |
| `Scatter cusion.png` | `product-scatter-cushion.webp` | Products → Scatter Cushions |
| `Table cloth.avif` (264×264, low-res) | `product-table-cloth.webp` | Products → Table Cloths |
| `Towel.webp` | `product-towel.webp` | Products → Towelling |

## Extracted from the company profile

| File | Used by | Source | Licence |
|---|---|---|---|
| `product-dress-form.webp` | Products → Dress Forms (`config/funnel-config.ts`) | Extracted from the official **Company Profile 2024.pdf** (page 10, "Dressforms"), optimised for web | Client-owned company asset |

## Not photography (do not replace with photos)

- `knit-divider.png` — the optimised Zaydtex **knitting motif** used as the
  section divider (via `app/globals.css` → `.knit-strip`). It's a brand graphic,
  not a swappable photo.
- `Knitting backround png.png` — the client's original uploaded knit source.
- `logo/` — brand logos; see `logo/README.md`.
