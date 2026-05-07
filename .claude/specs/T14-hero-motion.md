# T14 — Hero motion choreography

> What the hero does on first paint, on scroll, on hover (nothing), and on `prefers-reduced-motion`. Build (T15) implements this literally.

## 1. Timeline (first paint)

```
t=0ms     Page paints. Pre-paint inline script flags <html class="js-ready">.
          .js-ready .hero-* receive their entrance state in the same frame.
            – sub-headline → opacity: 0
            – headline lines → clip-path: inset(0 100% 0 0)
            – illustration <path> → stroke-dashoffset: 1, dasharray: 1
t=0       Illustration begins m-stroke-draw  (--dur-slow = 1400ms, --ease).
t=200ms   Headline line 1 begins m-mask-wipe (--dur = 700ms, --ease).
t=320ms   Headline line 2 begins m-mask-wipe (--dur = 700ms, --ease) — 120ms stagger.
t=1100ms  Sub-headline begins m-fade-in     (--dur = 700ms, --ease).
t=1800ms  Animation complete. Hero is fully present.
```

The timing is musical: the illustration *writes itself* while the words appear; both finish almost together; the explanatory line settles last.

## 2. Per-element specs

### Illustration

- **Motion:** `m-stroke-draw`.
- **Implementation:** SVG `<path>` with `pathLength="1"`, initial `stroke-dasharray="1"` and `stroke-dashoffset="1"`. Animate `stroke-dashoffset` to `0`.
- **Duration:** `--dur-slow` (1400ms).
- **Trigger:** on-load, immediately (t = 0).
- **After draw:** clear `stroke-dasharray` (a `transitionend` listener in the component) — avoids faint dash artefacts at zoom.

### Headline (two lines)

- **Motion:** `m-mask-wipe`.
- **Markup:** each line wrapped in `<span class="line">` for clip-path scoping.
- **Implementation:** initial `clip-path: inset(0 100% 0 0)`, transition to `inset(0)`. The data-stagger helper from `motion.css` carries the per-line delay.
- **Duration:** `--dur` (700ms) per line; 120ms stagger between line 1 and line 2.
- **Trigger:** on-load, t = 200ms (delay applied via `transition-delay` on `.is-revealed` — set by the same pre-paint script after one rAF).

### Sub-headline

- **Motion:** `m-fade-in`.
- **Duration:** `--dur` (700ms).
- **Trigger:** on-load, t = 1100ms (delay applied via `transition-delay`).

## 3. On-scroll

- **Illustration:** `m-parallax-soft` — `transform: translate3d(0, calc(var(--scroll) * -24px), 0)`. `--scroll` is a 0 → 1 progress driven by IntersectionObserver wired in the component (one observer per page, the hero observes itself in this case because it's the only parallax target above the fold).
- **Headline:** does not move. Anchored.
- **Sub-headline:** does not move.

CSS scroll-driven animations are not used (yet) — IO + rAF is more compatible.

## 4. On-hover

The hero contains **no hover-able elements**. No CTA. No link. The cursor stays default; resist any hover effect on the illustration.

## 5. Reduced-motion contract (`prefers-reduced-motion: reduce`)

| Element | Behaviour |
|---|---|
| Illustration | renders complete instantly; opacity 0 → 1 over 200ms. No stroke-draw. No parallax on scroll. |
| Headline | opacity 0 → 1 over 200ms per line (no stagger). No clip-path. |
| Sub-headline | opacity 0 → 1 over 200ms. |

Three opacity fades at t = 0, t = 100ms, t = 200ms — fast, dignified, no melodrama. The catalog (T05) already enforces durations clamped to 200ms under the media query; this spec adds the order.

## 6. Without JavaScript

The hero must render and read correctly without JS:

- All elements render at opacity 1, headline fully revealed, illustration fully drawn (or at the placeholder state, which is already static).
- **No FOIC** (flash of invisible content). Initial state is set in CSS only when `<html>` carries `js-ready`. The pre-paint inline script adds that class before first paint.

```html
<script is:inline>document.documentElement.classList.add('js-ready')</script>
```

(Inlined in `Hero.astro`'s `<head>` slot, not in `Base.astro`.)

## 7. Performance

- Use **`transform` and `opacity` only** — never `top/left/width`.
- Apply `will-change: transform` to the illustration container during scroll only; remove on `transitionend` / when `--scroll` settles.
- Hero contained in its own stacking context to limit paint area.
- Test on a low-end device emulation: animations hold 60fps.

## 8. Audit beats (T16 frame-checks)

A 3s screen capture should show:

- t = 0 — illustration starts as a single point.
- t = 200ms — headline line 1 starts wiping in.
- t = 320ms — headline line 2 starts wiping in.
- t = 1100ms — sub-headline starts fading in.
- t = 1800ms — everything settled.
