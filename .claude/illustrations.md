# Illustration registry

> Lists every illustration slot on the site, with its prompt MD, target asset path, and current status. Revised after the GRIS-watercolor pivot — illustrations now ship as raster watercolors, not SVG line art.

## Status legend

- ⏳ **Awaiting render** — `<PendingImage>` placeholder is in use; prompt MD is ready for ChatGPT / Midjourney.
- 🟢 **Landed** — asset committed at the target path; build replaces the placeholder.
- 🟡 **Drafted** — asset exists but has not passed the audit; placeholder still in use.

## Slots

| Slot | Used by | Prompt | Target path | Status |
|---|---|---|---|---|
| `hero` | `Hero.astro` (via PendingImage) | [`T13-hero.md`](image-prompts/T13-hero.md) | `src/assets/illustrations/hero.{webp,png}` | ⏳ |
| `open-book` | `<Illustration slug="open-book">` (T31) | [`T30-illustration-set.md`](image-prompts/T30-illustration-set.md) §1 | `src/assets/illustrations/open-book.{webp,png}` | ⏳ |
| `hand-page` | `<Illustration slug="hand-page">` | T30 §2 | `src/assets/illustrations/hand-page.{webp,png}` | ⏳ |
| `shelf` | `<Illustration slug="shelf">` | T30 §3 | `src/assets/illustrations/shelf.{webp,png}` | ⏳ |
| `bookmark` | `<Illustration slug="bookmark">` (Publishers pull-quote) | T30 §4 | `src/assets/illustrations/bookmark.{webp,png}` | ⏳ |
| `page-fold` | `<Illustration slug="page-fold">` (Nota) | T30 §5 | `src/assets/illustrations/page-fold.{webp,png}` | ⏳ |
| `signature` | `NotaPage.astro` (inline) | (drafted alongside M04 — see [`tasks-mireia/M04-author-bio.md`](tasks-mireia/M04-author-bio.md)) | `src/assets/illustrations/signature.svg` | ⏳ |

The `signature` slot is the **only** SVG remaining in the set — it's a vectorised handwritten "— Mireia" tracing, not an illustration.

## House style

See [`image-prompts/T13-hero.md`](image-prompts/T13-hero.md) — the canonical reference. Every other illustration must feel painted by the same hand on the same afternoon: same paper, same wash technique, same restraint, same three-tone palette (cream + dusty teal + soft rose, with library-green at the deepest fold only).

## Integration pattern (when an asset lands)

```astro
---
import { Image } from 'astro:assets'
import heroSrc from '../assets/illustrations/hero.png'
---
<Image src={heroSrc} alt="" widths={[480, 768, 1024, 1440]} sizes="(min-width: 64rem) 280px, 60vw" />
```

The `<PendingImage>` component used today is replaced by `<Image>` once the rendered file lands. Dimensions follow the slot's expected aspect (3:2 landscape for most, 1:2 portrait for `bookmark`).

## Replacing a placeholder

1. Drop the rendered file into `src/assets/illustrations/<slug>.{webp,png}` (WebP preferred; PNG fallback if transparency is needed).
2. Audit against the prompt — palette restrained to cream + dusty teal + soft rose, library-green only at deepest fold, no outlines, paper grain visible.
3. Replace `<PendingImage prompt="<slug>" …>` (or `<Illustration slug="<slug>">`'s placeholder branch) with the `<Image>` include above.
4. Update this registry's status to 🟢.
