# Zaydtex — "Craftsmanship in Every Curtain" gallery images

This folder holds the real Zaydtex photography for the Craftsmanship gallery.
Everything is **config-driven** from **`config/craftsmanship-config.ts`** — no
image paths are hard-coded in any component.

## How the gallery picks images

The gallery renders one card per entry in the `cards` array in
`config/craftsmanship-config.ts`. Each entry points at a file in this folder and
carries its own `title`, `line` (one benefit sentence) and `alt` text.

**Currently used (8 cards, in order):**

| Card | File | Shows |
|---|---|---|
| Ready-Made Curtains | `DSC_0002.jpg` | Packaged, barcoded retail-ready curtains |
| Spun From Quality Yarn | `DSC_0269.jpg` | Yarn cones on the creel |
| Lace, Knitted In-House | `DSC_0292.jpg` | Lace being knitted on the machine |
| Woven Jacquard | `DSC_0454.jpg` | Jacquard woven on the loom |
| Colour & Consistency | `DSC_0358.jpg` | Colourful yarn cones |
| Built for Volume | `DSC_0241.jpg` | Factory-floor machinery at scale |
| Finished by Our Team | `DSC_0037.jpg` | Team finishing curtains |
| Quality, Finished | `DSC_0500.jpg` | Finished fabric on the rolling line |

All 18 uploaded `DSC_*.jpg` photos live here; the other 10 are spares you can
swap in any time.

## To change the gallery (no component edits)

- **Use a different photo for a card:** change that card's `image` path in
  `config/craftsmanship-config.ts` to any file in this folder.
- **Add / remove / reorder cards:** edit the `cards` array (one object per card —
  `image`, `alt`, `title`, `line`).
- **Replace a photo's content:** drop a new file in and point the config at it
  (or overwrite the file if you keep the same name).

## Image specs (for future / replacement photos)

- **Aspect:** displayed in a **4:3** card (`object-cover`, centre-cropped) — frame
  the subject centrally; landscape source works best.
- **Resolution:** ~1600 px on the long edge is plenty (served via `next/image`,
  which auto-resizes and converts to WebP — you can drop in large JPGs).
- **Format:** JPG or WebP. **File size:** the uploads are ~1.5–2 MB each; that's
  fine for source (Next optimises delivery), but ≤500 KB exports are kinder to the
  repo and build.
- **Alt text:** keep `cards[].alt` descriptive (SEO + screen readers).
