# T07 — Responsive doctrine

**Skill:** `impeccable`
**Phase:** 0 — Doctrines
**Depends on:** T06
**Blocks:** every page task
**Mireia-blocked:** No
**Estimated commits:** 1

## Goal
Decide how layouts adapt across breakpoints. The rule is **not** "shrink the desktop". Each breakpoint is its own composition.

## Scope

### Breakpoints (match T06 grid)
- Mobile: < 768px
- Tablet: 768–1023px
- Desktop: 1024–1439px
- Wide: ≥ 1440px (content max-width caps; outer padding grows)

### Per-breakpoint composition strategy

#### Desktop (and wide)
- Asymmetric grid placements (cols 2–7, cols 9–11, etc.).
- Headlines at full --step-5.
- Multiple horizontal blocks per viewport.
- Generous outer padding (64px+).

#### Tablet
- Most asymmetric blocks remain asymmetric but shrink to the 8-col grid.
- Hero illustration sits at cols 5–8 instead of 9–11.
- Headlines drop one step (--step-5 → --step-4).
- Outer padding 48px.

#### Mobile
- **Stack, don't shrink.** Multi-column blocks become single-column stacks with their own rhythm.
- Hero illustration sits ABOVE headline (not beside), centered, ~30% width.
- Headlines drop two steps (--step-5 → --step-3).
- Outer padding 32px.
- Vertical rhythm tightens (`--space-24` → `--space-16` between sections).
- Hover states are gone — replace with focus / tap feedback (200ms scale or color shift).

### Type fluidity
- Body and captions: fixed at --step-0 / --step--1 on all breakpoints.
- Display (--step-3 to --step-5): use `clamp()` to interpolate between mobile and desktop values, never sudden jumps.
- Example for hero headline:
  ```css
  font-size: clamp(2.369rem, 1rem + 5vw, 4.209rem);
  ```

### Image responsive plan
- Hero illustration: sized via aspect ratio, width via container.
- Portfolio thumbs:
  - Desktop: full-bleed and 50/50 mixed grid.
  - Tablet: 50/50 throughout.
  - Mobile: stacked, full-width.
- `srcset` + `sizes` always, via `astro:assets`.

### Navigation
- Desktop / tablet: horizontal nav.
- Mobile (< 768px): hamburger → full-screen paper panel (defined in T09).

### Form (Epílogo)
- Desktop / tablet: fields at full grid width (max ~600px column).
- Mobile: same fields, full-width within outer padding.
- The qualifying first question always renders larger (--step-1) regardless of breakpoint.

### Touch targets
- Minimum 44×44px tap areas on touch devices.
- Apply to nav links, form submit, portfolio thumbs.

### Orientation
- No special landscape handling on mobile beyond what the grid does naturally.
- Tablet landscape behaves as small desktop (inherits desktop rules above 1024px width).

## Deliverables
- `.claude/responsive-doctrine.md` — this doc as standalone reference.
- Updated `.claude/design-system.md` (responsive section).
- CSS media-query helpers in `src/styles/breakpoints.css`:
  ```css
  @custom-media --tablet  (min-width: 768px);
  @custom-media --desktop (min-width: 1024px);
  @custom-media --wide    (min-width: 1440px);
  ```
- Dev-only resize-tester route `src/pages/_dev/responsive.astro` showing all 4 breakpoints side-by-side via iframes (deleted before T40).

## Acceptance criteria
- No page-task in this project says "make it responsive" — they cite this doctrine and explicitly state per-breakpoint composition.
- Mobile composition for every page is a deliberate stack, not a downscaled grid.
- `clamp()` used for display type; no sudden font-size jumps at breakpoints.

## Notes
The biggest mistake in editorial sites is treating mobile as an afterthought. Treat each breakpoint as its own design.
