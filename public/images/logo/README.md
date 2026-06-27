# Korteks / Zaydtex — Logo & Brand Assets

This folder is the **single home for every brand image** used on the site.
All logo paths are referenced from one central config:
[`config/site-config.ts`](../../../config/site-config.ts) → `siteConfig.logo`.

> ♻️ **Future-proof:** to update the logo across the entire website, just drop a
> replacement file here using the **exact same filename**. No code changes are
> needed — the header, footer, mobile header, browser icon and social preview
> all read from these paths automatically.

## Files

| Filename | Used for | Recommended spec | Status |
|---|---|---|---|
| `logo-primary.png` | Main **horizontal** logo — header & footer | PNG, transparent background, ~600×160px (≥2× for retina) | **Upload this** |
| `logo-icon.png` | Square **icon / favicon** version | PNG, transparent background, square (e.g. 512×512px) | **Upload this** |
| `favicon.ico` | Legacy browser icon (optional) | Multi-size `.ico` (16/32/48px) | Future / optional |
| `og-image.jpg` | Social share preview (Open Graph / Twitter) | JPG, **1200×630px** | Future / optional |

## How to upload

1. Drag and drop the files into this folder (`public/images/logo/`).
2. Use the **exact filenames** above — do **not** rename the references in code.
3. That's it. The site picks them up automatically on the next load/build.

## Notes

- Until `logo-primary.png` / `logo-icon.png` exist, the site shows a tasteful
  built-in fallback lockup (brand mark + wordmark) — so nothing ever looks broken.
- `og-image.jpg` and `favicon.ico` are optional enhancements; the config already
  points at them so they activate the moment they're added.
- Keep the original source/vector files elsewhere; this folder holds the
  web-optimised exports only.
