# T14 — Hero motion choreography

**Skill:** `impeccable`
**Phase:** 1 — Hero
**Depends on:** T05, T12, T13
**Blocks:** T15
**Mireia-blocked:** No
**Estimated commits:** 1

## Goal
Choreograph every motion the hero performs: on-load entrance, on-scroll behaviour, hover (none), reduced-motion fallback. Output is a timing diagram and per-element specs the build task (T15) follows literally.

## Inputs
- T05 Motion catalog (`m-stroke-draw`, `m-mask-wipe`, `m-fade-in`, `m-parallax-soft`).
- T12 Hero composition.
- T13 Hero illustration.

## Output: `.claude/specs/T14-hero-motion.md`

### 1. Timeline (on first paint)

```
t=0ms     │ Page paints. All elements render at opacity 1, then immediately
          │ have animation classes applied that set their entrance state.
t=0ms     │ Sub-headline starts at opacity 0 (will fade later).
t=0ms     │ Headline starts with clip-path inset(0 100% 0 0) (mask-wipe ready).
t=0ms     │ Illustration starts with stroke-dashoffset = path length (invisible).
t=0ms     │ Illustration begins m-stroke-draw (1400ms, --ease).
t=200ms   │ Headline begins m-mask-wipe, line-by-line, 800ms each, 120ms stagger.
          │   - Line 1 ("Curaduría Literaria:") fires at t=200ms.
          │   - Line 2 ("El libro como identidad") fires at t=320ms.
t=1100ms  │ Sub-headline begins m-fade-in (700ms, --ease).
t=1800ms  │ Animation complete. Hero is fully present.
```

The timing is musical, not technical. The illustration "writes itself" while the words appear; both finish almost together; the explanatory line settles last.

### 2. Per-element specs

#### Illustration
- Motion: `m-stroke-draw`.
- Implementation: SVG with `<path stroke-dasharray={pathLength} stroke-dashoffset={pathLength}>`. Animate `stroke-dashoffset` to 0.
- Duration: `--dur-slow` (1400ms).
- Easing: `--ease`.
- Trigger: on-load, immediately.
- After draw: stroke-dasharray cleared (so the illustration looks normal — no faint dash artifacts at zoom).

#### Headline (2 lines)
- Motion: `m-mask-wipe`.
- Implementation: each line wrapped in `<span class="line">` with `clip-path: inset(0 100% 0 0)` initial → `inset(0)` final.
- Duration: `--dur` (700ms) per line. Stagger: 120ms.
- Easing: `--ease`.
- Trigger: on-load, t=200ms.

#### Sub-headline
- Motion: `m-fade-in`.
- Duration: `--dur` (700ms).
- Easing: `--ease`.
- Trigger: on-load, t=1100ms.

### 3. On-scroll behaviour

- **Illustration:** `m-parallax-soft` — translateY 0 → −24px max as the hero scrolls out of view. Implementation: scroll-linked via `transform: translate3d(0, calc(var(--scroll) * -24px), 0)` where `--scroll` is a 0–1 progress value driven by IntersectionObserver or `scroll()` (CSS scroll-driven animations where supported).
- **Headline:** does not move. Anchored.
- **Sub-headline:** does not move.

### 4. On-hover behaviour

- **Hero contains no hover-able elements.** No CTA, no link in the hero. Cursor stays default.
- Hovering the illustration does nothing. Resist the urge.

### 5. Reduced-motion contract

When `prefers-reduced-motion: reduce`:

| Element | Behaviour |
|---|---|
| Illustration | Renders complete instantly. opacity 0 → 1 over 200ms. No stroke-draw. No parallax on scroll. |
| Headline | opacity 0 → 1 over 200ms. No clip-path. No stagger. |
| Sub-headline | opacity 0 → 1 over 200ms. |

All three reduced-motion fades happen at t=0, t=100ms, t=200ms staggered — fast, dignified, no hint of melodrama.

### 6. Without JavaScript

The hero must render and read correctly without JS:
- All elements visible at opacity 1, headline fully revealed, illustration fully drawn.
- No flash of invisible content (FOIC) — initial state set in CSS only when the body has class `js-ready` (added by inline script before paint).

Pattern: pre-paint inline script adds `js-ready` to `<html>`. Animation styles target `.js-ready .hero-element`. Without JS, no class, animations don't apply, content renders directly.

### 7. Performance

- Use `transform` and `opacity` only — never `top` / `left` / `width`.
- Apply `will-change: transform` to the illustration container during scroll only; remove after.
- Reduce paint area: hero contained in its own stacking context.
- Test on a low-end device emulation: animations should hold 60fps.

## Deliverables
- `.claude/specs/T14-hero-motion.md` — the document above.

## Acceptance criteria
- Build agent (T15) implements timings and behaviour without inventing values.
- Reduced-motion contract is explicit per element.
- No-JS fallback documented and testable.
- Timing reads musically: each beat justified.

## Notes
The hero's motion is the user's first impression of the brand's restraint. If it announces itself, we lose. The animation should feel like the page is *settling*, not *performing*.
