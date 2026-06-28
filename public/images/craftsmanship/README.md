# Zaydtex — "Craftsmanship in Every Curtain" gallery images

Every image in the Craftsmanship gallery lives in **this folder** and is
referenced from **one config file**: `config/craftsmanship-config.ts`. No image
paths are hard-coded in any component.

> ♻️ **Swap with zero code:** to replace any image, export your photo to the
> **exact same filename** below and drop it in here. The gallery updates
> automatically — you never touch code. (To add/remove a *card*, edit the
> `cards` array in `config/craftsmanship-config.ts` — one line per card.)

> ⚠️ The current files are **placeholders** (re-used from existing site photos).
> Replace them with real Zaydtex photography before the section goes live.

## Required images

Recommended for all: **4:5 portrait · 1200 × 1500 px · WebP** (JPG also fine) ·
target **≤ 250 KB** each (these placeholders are 26–206 KB).

| # | Filename | Type | What it should show |
|---|---|---|---|
| 1 | `hero-ready-made.webp` | Product shot | Finished ready-made curtains hanging — the flagship, premium and clean |
| 2 | `sheer-closeup.webp` | Fabric close-up | Sheer / voile fabric with light through it; soft, even weave |
| 3 | `lace-detail.webp` | Fabric close-up | Lace pattern detail — intricate, crisp |
| 4 | `blackout-curtain.webp` | Product shot | Block-out / coated curtain in situ; rich, light-blocking |
| 5 | `jacquard-detail.webp` | Fabric close-up | Woven jacquard texture — depth and weight |
| 6 | `stitching-detail.webp` | Manufacturing detail | Macro of seams / hems / stitching — precision and finish |
| 7 | `fabric-texture.webp` | Texture | Premium fabric weave macro — tactile quality |
| 8 | `factory-machine.webp` | Factory | Manufacturing machinery / production floor — real maker |
| 9 | `curtain-heading.webp` | Product detail | Curtain heading top — pleats / eyelets / tape, finished to spec |

**Optional extra cards** (drop a file in *and* add a line to the config to use it):
e.g. `fabric-draping.webp` (fabric flow/drape), `eyelet-detail.webp`,
`pinch-pleat.webp`. Keep the set focused — **quality over quantity**.

## How to swap (no code)

1. Export your photo as **WebP**, 4:5, ~1200×1500, optimised to ≤250 KB.
2. Name it exactly as in the table above.
3. Drop it into `public/images/craftsmanship/` (overwrite the placeholder).
4. Redeploy. Done — the gallery uses your image automatically.

## Optimisation tips

- **Format:** WebP gives the best quality-to-size (alpha not needed here). JPG is
  fine if your tool can't export WebP.
- **Crop:** images are displayed `object-cover` in a 4:5 card, so frame the
  subject centrally; edges may crop on different screens.
- **Size:** aim 100–250 KB. Tools: [Squoosh](https://squoosh.app), ImageOptim,
  or `cwebp -q 72 in.jpg -o out.webp`.
- **Alt text:** each card's alt text lives in `config/craftsmanship-config.ts`
  (`cards[].alt`) — keep it descriptive for SEO and screen readers.

## Where it's wired

- Image paths + copy: **`config/craftsmanship-config.ts`** (single source of truth).
- Section copy (eyebrow / headline / subheading / CTA): same config file.
- The gallery component (added later) reads only from that config.
