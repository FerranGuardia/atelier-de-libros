# T08 — Image system

**Skill:** `impeccable`
**Phase:** 0 — Doctrines
**Depends on:** T01, T06
**Blocks:** every page task using images
**Mireia-blocked:** No
**Estimated commits:** 1

## Goal
Define how images live in this project: sourcing, treatment, placement, optimisation, placeholder strategy. Every later image decision cites this doc.

## Scope

### Image taxonomy (this project has 4 kinds, no others)
1. **Line illustrations (SVG)** — house style. Library-green stroke on paper. T13 hero + T29–T31 set.
2. **Atmospheric photographs** — portfolio cases, nota portrait, manifesto teaser (when it lands). Side-light, warm-desaturated, hand/detail crops.
3. **Texture overlays** — paper grain (T03). One only, site-wide.
4. **Functional graphics** — OG image (T37), favicon. Designed inline with the brand, not borrowed.

### Sourcing decisions, by kind

| Kind | Source | Until source delivers |
|---|---|---|
| Line SVG | ChatGPT prompts (T13 / T30) drafted by `impeccable` | Inline placeholder SVG by build agent |
| Photo | Mireia's photographer brief (T26 prompt informs them) | Curated Unsplash URLs documented inline |
| Texture | Inline procedural SVG noise (T03) | n/a |
| OG / favicon | Generated programmatically (T37) | Solid paper + wordmark text fallback |

### Treatment rules

#### Photos
- Color grade: warm-desaturated (saturation 80–90%, slight warm shift).
- Contrast: medium-low. No crushed blacks; ink-deepest goes to ~#2A2A2A, not pure ink.
- Grain: visible but not overlaid digitally — should come from the photograph itself.
- Crop preference: details over wides. Hand-on-book over a whole library shot.
- No faces unless hand-in-frame is the focal point.
- Aspect ratios in use: 16:9 (hero), 4:5 (portrait / detail), 1:1 (square). No others.

#### SVG illustrations
- Always inline (not `<img>`) — `currentColor` for tint control.
- Single stroke weight ~1.25px.
- No fills, no shadows, no gradients, no perspective shading.
- Edge ink-bleed at terminations only — subtle, not painterly.
- One illustration per scroll-screen maximum.

### Placement principles (cite from page-tasks)

1. **Photographs anchor; illustrations punctuate.** A photo grounds a section as evidence; an illustration breathes a section as ornament.
2. **Off-grid for photographs** — full-bleed allowed. **On-grid for illustrations** — they sit in a column.
3. **Captions are typography, not image overlays.** Caption sits below, in Inter --step--1, ink-soft.
4. **No image without intent.** If a section "needs" an image to feel complete, it usually needs better typography first.

### Optimisation (mandatory)
- Every photo through `astro:assets` `<Image>` with `widths` array and `formats={['avif', 'webp']}`.
- Explicit `width` and `height` on every image to prevent CLS.
- LCP image preloaded via `<link rel="preload" as="image">`.
- Below-the-fold: `loading="lazy" decoding="async"`.
- Blur-up placeholder on every photographic asset.
- Budget: no displayed image > 200KB at largest size.

### Placeholder policy (until real assets arrive)
- **Photos:** Unsplash search with documented credit URL in HTML comment. Mark `<!-- M0X-photo-N -->` for later swap.
- **SVG illustrations:** simple inline SVG by the build agent (book outline, page outline, etc.) committed to `src/assets/illustrations/`. Mark filename with `-placeholder` suffix.
- **OG image:** programmatic fallback (Astro + sharp text-on-paper) until ChatGPT version produced in T37.
- **Never block on an image.** The page ships with a placeholder.

### Image directory layout
```
src/assets/
  illustrations/
    hero.svg
    open-book.svg
    hand-page.svg
    shelf.svg
    bookmark.svg
    page-fold.svg
    signature.svg
  historias/
    {slug}/
      hero.jpg
      gallery-1.jpg ...
  portrait/
    mireia.jpg
public/
  og-default.png
  favicon.svg
  fonts/
```

## Deliverables
- `.claude/image-system.md` — this doc as standalone reference.
- Updated `.claude/design-system.md` (image section).
- Asset directory structure committed (with `.gitkeep` where empty).
- A documented Unsplash placeholder list in `.claude/placeholders.md` (URLs + credit) as the agent picks them.

## Acceptance criteria
- No page-task invents image treatment ad-hoc — they cite this doc.
- Every image asset has explicit width / height in its component.
- Bundle inspection: total image weight per page ≤ 600KB on first load.
- Placeholder swap-out is a one-line change per asset (file path replacement).

## Notes
Images are this brand's biggest risk for AI slop. Keep the count low, the treatment consistent, the placement intentional.
