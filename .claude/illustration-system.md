# Illustration system — placement rules

> Output of T29 (revised after the GRIS-watercolor pivot). When and how illustrations appear on this site. T31 implements the component; T30 ships the five prompts.

## When an illustration appears

The site uses **at most one illustration per scroll-screen** (visual-language §10). The hero gets one. Each inner page gets, at most, one.

| Page | Illustration slot | Slug | Status |
|---|---|---|---|
| `/` (hero) | hero illustration | `hero` (T13 prompt) | ⏳ |
| `/servicios` | (none — index pages stay typographic) | — | — |
| `/publishers` | small ornament beside the pull-quote | `bookmark` | ⏳ |
| `/historias` (index) | (none — photographs anchor the page) | — | — |
| `/historias/{slug}` (detail) | (none) | — | — |
| `/nota` | small ornament beside the signature, or above the drop-cap | `page-fold` | ⏳ |
| `/epilogo` | (none — form discipline) | — | — |

Five additional drawings (T30 set: `open-book`, `hand-page`, `shelf`, `bookmark`, `page-fold`) are commissioned for use **as needed** when the design surfaces a place that benefits — not as a fixed-grid decoration.

## Aesthetic (after the pivot)

Watercolor + ink wash on paper, in the volume of *GRIS* (Conrad Roset / Nomada Studio). Cream paper background, dusty teal + soft rose washes, library-green only at the deepest fold. Visible paper grain. Soft brush edges. **Not** line art; **not** outline drawings; **not** flat-color vectors. See [`image-prompts/T13-hero.md`](image-prompts/T13-hero.md) — the canonical reference every other illustration in the set cites.

## Placement rules

1. **On the grid, never breaking it.** Illustrations sit inside a column; they never bleed.
2. **Format:** raster (PNG / WebP), served via Astro's `<Image>` with the standard widths array. Watercolor doesn't survive vectorisation.
3. **Width by container, height by aspect.** Each illustration's aspect (3:2 landscape for most, 1:2 portrait for `bookmark`) is declared on the host slot.
4. **Aria-hidden by default.** Decorative; alt-text would be noise on the screen reader. The host page may pass an `aria-label` for exceptions.
5. **No tinting.** Colours are baked into the watercolor asset. The host page does not apply CSS filter, mix-blend-mode, or hue-rotate.
6. **No motion on entrance** for these — they sit on the page like a still life. The hero illustration is the only animated one (a slow opacity rise from 0 → 1, replacing the original `m-stroke-draw` which was line-art-specific). Reduced-motion: opacity fade only.

## Library-green budget

The 8% library-green rule (`visual-language.md` §5.1) applies to the **rendered viewport**. A watercolor illustration whose deepest fold is library-green still counts those pixels toward the budget. Choose illustration placements with this in mind: the hero (large, centre of viewport) carries most of the budget. The `page-fold` and `bookmark` ornaments are small enough that they barely register. The other slots stay typographic.

## House style

Every illustration cites [`image-prompts/T13-hero.md`](image-prompts/T13-hero.md). The set must feel painted by the same hand on the same afternoon — same paper, same wash technique, same restraint, same three-tone palette (cream + dusty teal + soft rose, with library-green at the deepest fold only).

## Failure modes

- **More than one per scroll-screen.** The page reads as scrapbook, not magazine.
- **Saturated colours.** Anything brighter than the agreed muted washes pushes the page toward children's-book illustration. Refuse.
- **Decorative repeat.** A single illustration repeated across a section pretends to be a pattern; it is not.
- **Photographic inserts mixed with the illustrations on the same page.** Photography (T20) and watercolor (T13/T30) speak different volumes — keep the page committed to one or the other.
- **Outlines or flat fills.** Reads as comic-book or logo; refuse.
