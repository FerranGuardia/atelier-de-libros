# Illustration system — placement rules

> Output of T29. When and how line illustrations appear on this site. T31 implements the component; T30 ships the five prompts.

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

## Placement rules

1. **On the grid, never breaking it.** Illustrations sit inside a column; they never bleed.
2. **Currentcolor.** The host CSS sets `color: var(--library-green)` on the wrapper; the SVG inherits.
3. **Width by container, height by aspect.** Each illustration declares its viewBox; the container width caps the size (typical: 220–320px).
4. **Aria-hidden by default.** Decorative; alt-text would be noise on the screen reader. The host page may pass an `aria-label` for exceptions.
5. **One stroke weight.** ≈ 1.25px equivalent at the design size. Thicker reads as cartoon; thinner as engineering diagram.

## Motion

- The hero uses `m-stroke-draw` once.
- Other illustrations use **no motion**. They sit. The reader notices them on the second pass, not the first.
- Reduced-motion: the hero stroke-draw degrades to opacity fade (already in `motion.css`).

## House style

Every illustration cites [`image-prompts/T13-hero.md`](image-prompts/T13-hero.md). T30 prompts repeat the line-weight, termination ink-bleed, and viewBox conventions verbatim. The set must feel drawn by the same hand on the same afternoon.

## Failure modes

- **More than one per scroll-screen.** The page reads as scrapbook, not magazine.
- **Filled shapes.** Reads as logo, not drawing.
- **Decorative repeat.** A single illustration repeated across a section pretends to be a pattern; it is not.
- **Coloured beyond library-green.** Other accent colours read as inconsistent.
- **Inline width / height attributes.** Breaks responsive scaling.
