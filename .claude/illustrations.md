# Illustration registry

> Output of T13 (and grown by T30 / T31). Lists every line illustration the site uses, with its prompt slug, target asset path, and current status.

## Status legend

- ⏳ **Awaiting render** — `<PendingImage>` placeholder is in use; prompt MD is ready for ChatGPT or Midjourney.
- 🟢 **Landed** — asset committed at the target path; build uses inline SVG.
- 🟡 **Drafted** — asset exists but has not passed the audit; placeholder still in use.

## Slots

| Slot | Used by | Prompt | Target path | Status |
|---|---|---|---|---|
| `hero` | `Hero.astro` (T15) | [`T13-hero.md`](image-prompts/T13-hero.md) | `src/assets/illustrations/hero.svg` | ⏳ |
| `open-book` | T31 (illustration block) | T30 | `src/assets/illustrations/open-book.svg` | ⏳ |
| `hand-page` | T31 | T30 | `src/assets/illustrations/hand-page.svg` | ⏳ |
| `shelf` | T31 | T30 | `src/assets/illustrations/shelf.svg` | ⏳ |
| `bookmark` | T31 | T30 | `src/assets/illustrations/bookmark.svg` | ⏳ |
| `page-fold` | T31 | T30 | `src/assets/illustrations/page-fold.svg` | ⏳ |
| `signature` | T27 (Nota) | M04-signature | `src/assets/illustrations/signature.svg` | ⏳ |

## House style

Every illustration follows [`image-prompts/T13-hero.md`](image-prompts/T13-hero.md):

- Single stroke ≈ 1.25px.
- Stroke colour `currentColor`, defaults to `--library-green`.
- No fills, no shadows, no gradients, no perspective shading.
- Subtle ink-bleed at terminations only.
- ViewBox `0 0 1200 800` for landscape; `0 0 800 1200` for portrait if needed (rare).
- `stroke-linecap: round` + `stroke-linejoin: round`.
- One illustration per scroll-screen. Never two.

## Integration pattern

```astro
---
import OpenBook from '../assets/illustrations/open-book.svg?raw'
---
<Fragment set:html={OpenBook} />
```

The inline `set:html` include is preferred over `<img src>` so `currentColor` and the `m-stroke-draw` motion (which requires `stroke-dasharray` / `stroke-dashoffset` attributes set on the path) work without an extra wrapper.

## Replacing a placeholder

1. Drop the rendered SVG into `src/assets/illustrations/<slug>.svg`.
2. Audit it against the prompt — line weight uniform, no fills, terminations subtle, file ≤ 8 KB after SVGO.
3. Replace `<PendingImage prompt="<slug>" …>` in the consuming component with the inline include pattern above.
4. Update this registry's status to 🟢.
