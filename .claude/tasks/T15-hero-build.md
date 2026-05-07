# T15 — Hero build

**Skill:** `frontend-design:frontend-design`
**Phase:** 1 — Hero
**Depends on:** T11, T12, T13, T14
**Blocks:** T16, T17
**Mireia-blocked:** No
**Estimated commits:** 1–2

## Goal
Build `Hero.astro` to the specs produced in T12 (composition), T13 (illustration), T14 (motion). Make no composition / motion / image decisions in this task — just implement.

## Scope

### File: `src/components/Hero.astro`

### Composition (cite T12)
Implement T12 exactly:
- Desktop: 12-col grid, headline at cols 2–7 vertical-center −80px, illustration at cols 9–11 vertical-center +120px, sub-headline at cols 2–5 below headline.
- Tablet (T07): headline cols 2–7 step-down to --step-4, illustration cols 5–8 ~220px.
- Mobile (T07): stacked — illustration above (~30% width centered), headline below at full column at --step-3.

### Whitespace (cite T12)
- Hero min-height 100vh (clamp at 100dvh on mobile to avoid Safari urlbar issues).
- Above-fold empty ratio target 60%.
- No element touches the viewport edge except inside outer-padding zones.

### Image (cite T13)
- Inline the hero SVG (placeholder until ChatGPT version arrives) — the placeholder lives at `src/assets/illustrations/hero-placeholder.svg`.
- Use `<svg ...><path stroke="currentColor" .../></svg>` with `aria-hidden="true"` (decorative).
- Container width set to 280px desktop / 220px tablet / 30vw mobile.

### Type (cite T04)
- Headline: Cormorant 300 italic, --step-5 desktop / --step-4 tablet / --step-3 mobile, tracking +1%, color ink. Use clamp() per T07.
- Sub-headline: Inter 400, --step-0, ink-soft, max 38ch.

### Motion (cite T14)
- Apply T14's timing diagram exactly. Use catalog motions: `m-stroke-draw`, `m-mask-wipe`, `m-fade-in`, `m-parallax-soft`.
- Inline pre-paint script to add `js-ready` to `<html>` so non-JS users see the static composition.
- Path length for stroke-draw computed with a small inline script using `getTotalLength()`.

### Navigation & interaction
- No interactive elements inside the hero.
- The hero links nowhere; the user scrolls.

### Responsive (cite T07)
- Three compositions across breakpoints, not three sizes of one composition.
- Use `@custom-media --tablet` / `--desktop` from T07 helper file.

### Accessibility (cite T10)
- `<section aria-labelledby="hero-title">`.
- `<h1 id="hero-title">` for the headline.
- Sub-headline as `<p>`.
- Illustration `aria-hidden="true"`, decorative.
- Focusable elements: none (hero contains none).
- Reduced-motion contract from T14.

### Page assembly
- Update `src/pages/index.astro` to slot the Hero component as the first child of `<main>`.
- Add `slot="preload-lcp"` to the layout that preloads the hero illustration source (or the first text glyph if SVG is inline).

## Deliverables
- `src/components/Hero.astro`.
- Updated `src/pages/index.astro` — Hero rendered, page valid (rest of page can be empty for now; T17–T22 fill it).

## Acceptance criteria
- Visual match against T12 ASCII grid (eyeball + measurement).
- Motion match against T14 timeline (record a 3s screencap, frame-check beats).
- Lighthouse desktop on `/` ≥ 99 across all metrics.
- No layout shift on font load (CLS = 0).
- Works without JS — content renders, no FOIC.
- Reduced-motion: opacity-only, no transforms, ≤ 200ms per element.
- No horizontal scroll at any width 320px → 1920px.

## Notes
This is the implementation task — read the three spec files at the start, then write code. If the build reveals the spec has a gap, log the gap as a finding for T16 audit; don't paper over it in code.
