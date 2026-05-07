# Grid & whitespace doctrine

> Output of T06. The page is paper. The default is empty. Every element placed must justify its presence — and the gap before it.
>
> Source: `src/styles/grid.css`. Composition tasks cite columns by name (`cols 2–7 at desktop`); they do not invent layouts in component CSS.

## Breakpoints

| Name | Range | `--col-count` | `--gutter` | `--container-pad` |
|---|---|---|---|---|
| Mobile | < 768px | 4 | `--space-3` (12px) | `--space-8` (32px) |
| Tablet | 768–1023px | 8 | `--space-4` (16px) | `--space-12` (48px) |
| Desktop | ≥ 1024px | 12 | `--space-6` (24px) | `--space-16` (64px) |
| Wide | ≥ 1440px | 12 (capped) | `--space-6` | grows automatically via `margin-inline: auto` on `.container` |

Max content width: **1440px**. Above 1440 the outer margins absorb extra width — the grid does not stretch.

## Column-span vocabulary

The grammar of placements. Add a new span here when a component needs one (and only when).

| Class | Desktop | Tablet | Mobile |
|---|---|---|---|
| `.col-1-12` | 1–12 | 1–8 | 1–4 (stack) |
| `.col-2-7` | 2–7 | 1–6 | full |
| `.col-2-5` | 2–5 | 1–6 | full |
| `.col-3-9` | 3–9 | 1–6 | full |
| `.col-4-9` | 4–9 | 1–6 | full |
| `.col-5-12` | 5–12 | 3–8 | full |
| `.col-6-12` | 6–12 | 3–8 | full |
| `.col-9-11` | 9–11 | 5–8 | full |
| `.col-9-12` | 9–12 | 5–8 | full |

(Mobile is always single-column. The grammar collapses cleanly.)

## Asymmetry rules

1. Editorial layouts must not centre every block. **At least one block per viewport sits off-axis.**
2. Off-axis offset: typically 1 or 2 columns to one side. (`col-2-7` headline + `col-2-5` body beneath.)
3. Centred blocks reserved for: page titles, manifesto-style single-column reading, epilogue CTA.
4. Same offset twice in a scroll-screen reads as accidental. Vary.

## Vertical rhythm

| Beat | Desktop | Mobile |
|---|---|---|
| Section gap (between sections on a page) | ≥ `--space-24` (96px), often `--space-32` | `--space-16` (64px) |
| Block gap (within a section) | `--space-12` to `--space-16` | `--space-12` |
| Element gap (heading → body) | `--space-4` to `--space-6` | same |
| Tight gap (paragraph → paragraph) | leading × 0.5; rely on leading, no extra margin | same |

Helpers in `grid.css`: `.section`, `.section + .section`, `.block + .block`.

## Whitespace doctrine

1. **The viewport is paper. The default is empty.**
2. **Whitespace is composition, not absence.** A 96px gap is a deliberate beat.
3. **≥ 35% of any above-fold viewport must be empty paper** (no text, no image, no rule).
4. **The hero is strictest:** target ≥ 60% empty paper.
5. **No element touches the viewport edge** except intentional full-bleed images.
6. **Letters between blocks beat lines.** Use whitespace before adding rules / dividers.

## When to break the grid

- Full-bleed photographs (portfolio hero, historias detail hero).
- Library-green-soft atmospheric wash (one per page max — counts toward the 8% rule in `visual-language.md`).
- Hero illustration when off-grid placement increases breathing space.
- **Never break the grid for type.** Type lives on the grid, always.

## Audit lens

`impeccable` reviews every page-task against this doctrine. Three checks:

1. **Span vocabulary cited.** No raw `grid-column: 4 / 9` in component CSS — the class exists in `grid.css` or it doesn't exist.
2. **Whitespace ratio.** Spot-check screenshots at desktop and mobile; eyeball ≥ 35% empty paper above the fold (≥ 60% for the hero).
3. **No touched edges.** Outer padding holds at every breakpoint.

Stakeholder feedback that says *"the page feels empty"* is almost never solved by adding content. It is solved by making the existing elements better.

## Dev surface

`/dev/grid` — column overlay across breakpoints. Delete `src/pages/dev/` before T40 deploy.
