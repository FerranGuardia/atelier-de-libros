# Responsive doctrine

> Output of T07. Each breakpoint is its own composition. Mobile is **not** the desktop layout shrunk.

## Breakpoints

| Name | Range | Source of truth |
|---|---|---|
| Mobile | < 768px | base styles |
| Tablet | 768–1023px | `@media (min-width: 48rem)` |
| Desktop | 1024–1439px | `@media (min-width: 64rem)` |
| Wide | ≥ 1440px | `@media (min-width: 90rem)` (rare; mostly absorbed by `.container max-width: 1440px`) |

**Only these three media-query thresholds.** Every CSS file in `src/styles/` and every `.astro` component honours them. Grep `min-width:` site-wide; nothing else should appear.

## Per-breakpoint composition strategy

### Desktop (≥ 1024px) — and Wide

- 12-column grid. Asymmetric placements (`col-2-7`, `col-9-11`).
- Headlines at full `--step-5` (hero), `--step-4` (page titles).
- Multiple horizontal blocks per viewport (a head + body + caption can share a fold).
- Outer padding `--space-16` (64px); container caps at 1440px.

### Tablet (768–1023px)

- 8-column grid.
- Asymmetric blocks remain asymmetric but reflow into the 8-col vocabulary (see [`grid-whitespace.md`](grid-whitespace.md) span table).
- Hero illustration sits at cols 5–8 instead of 9–11.
- Headlines drop one step (`--step-5` → `--step-4`).
- Outer padding `--space-12` (48px).

### Mobile (< 768px)

- **Stack, don't shrink.** Multi-column blocks become single-column with their own rhythm.
- Hero illustration sits **above** the headline (not beside), centred, ≈ 30% width.
- Headlines drop two steps from desktop (`--step-5` → `--step-3`).
- Outer padding `--space-8` (32px).
- Vertical rhythm tightens (`--space-24` → `--space-16` between sections).
- Hover states are disabled — replaced with focus / tap feedback (200ms colour shift; per `motion-catalog.md` the catalogue motions already handle this via `:focus-visible`).

## Type fluidity

- Body and captions: fixed at `--step-0` / `--step--1` on every breakpoint. (Reading rhythm survives, no fluid shrink-to-illegible.)
- Display sizes (`--step-3` to `--step-5`): use `clamp()` between mobile and desktop targets — never sudden jumps at the breakpoint.

Hero headline reference:

```css
.t-hero {
  font-size: clamp(2.369rem, 1rem + 5vw, 4.209rem);
}
```

(The current `typography.css` uses a hard min-width switch — fluidising it is the only T07 change to typography. See the patch in this commit.)

## Image responsive plan

| Surface | Mobile | Tablet | Desktop |
|---|---|---|---|
| Hero illustration | above headline, ≈30% width | beside headline, cols 5–8 | beside headline, cols 9–11 |
| Portfolio thumbs | stacked, full-width | 50/50 throughout | 50/50 + occasional full-bleed |
| Historias detail hero | full-bleed 16:9 | full-bleed 16:9 | full-bleed 16:9 |
| Nota portrait | above body, 4:5 | beside body, cols 9–11 | beside body, cols 9–11 |

`srcset` + `sizes` always, via `astro:assets`. Aspect ratios from [`image-system.md`](image-system.md).

## Navigation

- Desktop / tablet: horizontal nav.
- Mobile (< 768px): hamburger trigger → full-screen paper panel. Spec lands in T09.

## Form (Epílogo)

- Desktop / tablet: fields at full grid width inside a `col-3-9` (max ≈ 600px column).
- Mobile: same fields, full-width within outer padding.
- The qualifying first question (*"Si tu marca fuera un libro…"*) renders larger (`--step-1`) regardless of breakpoint.

## Touch targets

Minimum 44 × 44px tap areas on touch devices. Applies to nav links, the form submit, portfolio thumbs.

## Orientation

No special landscape handling on mobile beyond what the grid does naturally. Tablet landscape (≥ 1024px effective width) inherits desktop rules.

## Audit lens

`impeccable` reviews every page-task. Three checks:

1. **Per-breakpoint composition is named, not invented.** A page-task says *"mobile: stacked, hero illustration above headline"*; it does not just say *"make it responsive."*
2. **No surprise breakpoints.** Grep `min-width:` shows only `48rem`, `64rem`, `90rem`.
3. **Display type is fluid via `clamp()`,** not stepped at media-query boundaries.
