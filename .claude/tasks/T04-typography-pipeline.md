# T04 — Typography pipeline

**Skill:** `frontend-design:frontend-design` (build) + `impeccable` (review)
**Phase:** 0 — Doctrines
**Depends on:** T03
**Blocks:** every page task
**Mireia-blocked:** No
**Estimated commits:** 1

## Goal
Lock the typography system: fonts, scale, leading, tracking, italic policy, drop-cap rules, measure rules. Implemented in `src/styles/typography.css` and documented in `.claude/design-system.md`.

## Scope

### Font loading
- Display: **Cormorant Garamond** weights 300, 400; italic 300, 400.
- Body: **Inter** weights 400, 500.
- Self-host WOFF2 latin subset in `public/fonts/`.
- `@font-face` with `font-display: swap`.
- Preload critical weights: Cormorant 300 italic + Inter 400.
- **Do not pull from Google CDN** at runtime.

### Modular scale (ratio 1.333)
```css
:root {
  --step--1: 0.844rem;  /* small caps, fine print */
  --step-0:  1rem;      /* body */
  --step-1:  1.333rem;  /* lead-in, sub-headlines */
  --step-2:  1.777rem;  /* section title small, pull-quote */
  --step-3:  2.369rem;  /* section title */
  --step-4:  3.157rem;  /* page title */
  --step-5:  4.209rem;  /* hero headline */
}
```

### Application rules

| Element | Font | Weight | Size | Tracking | Leading |
|---|---|---|---|---|---|
| Hero headline | Cormorant | 300 italic | --step-5 desktop / --step-3 mobile | +1% | 1.1 |
| Page title | Cormorant | 400 | --step-4 | +3% | 1.15 |
| Section title | Cormorant | 400 | --step-3 | +2% | 1.2 |
| Sub-section / lead | Cormorant | 300 italic | --step-2 | +1% | 1.3 |
| Body | Inter | 400 | --step-0 | 0 | 1.55 |
| Body (italic) | Inter | 400 italic | --step-0 | 0 | 1.55 |
| Caption | Inter | 400 | --step--1 | +2% | 1.4 |
| Wordmark | Cormorant | 400 | --step-0 | +4% | 1 |
| Nav | Inter | 500 | --step--1 | +1% | 1 |

### Italic policy
- Cormorant italic carries emotional weight; reserve for hero, manifesto, pull-quotes, "La Nota". Don't sprinkle.
- Body italic: emphasis only, never decoration.

### Measure (max line length)
- Body: 60ch.
- Letter-style pages (Publishers, Nota): 56ch.
- Captions: 38ch.
- Display headlines: no max — let them breathe to the grid.

### Drop-cap rule (only on Nota)
- First letter of paragraph 1: Cormorant 300, --step-5, library-green, float left, margin-right `--space-3`. Line-clamps to 3 body lines.

### Print styles (`@media print`)
- Body 11pt. Cormorant for h1–h2. Inter for body.
- No backgrounds, ink only.

## Deliverables
- `src/styles/typography.css`.
- Self-hosted fonts in `public/fonts/`.
- Updated `.claude/design-system.md` (typography section).
- Dev-only `src/pages/_dev/type.astro` rendering the full scale + every rule above (deleted before T40).

## Acceptance criteria
- Total font payload ≤ 90KB.
- No font-load layout shift (CLS = 0 on font-loaded pages).
- `impeccable` audit: type rules match `.claude/visual-language.md`.
- Drop-cap renders correctly in Safari, Firefox, Chrome.

## Notes
Italic Cormorant is the most powerful weapon this project has. Use it like punctuation, not like a font.
