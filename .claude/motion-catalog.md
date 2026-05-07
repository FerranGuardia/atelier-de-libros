# Motion catalog

> Output of T05. Every motion this site uses, named, specced, and accountable. Build tasks **reference by name**; they do not invent durations, curves, or offsets inline. If a build task needs motion that isn't here, the answer is to add it here first — name, spec, reduced-motion fallback, audit pass — then use it.
>
> Tokens in `src/styles/motion.css`. Implementation as `[data-motion="<name>"]` attribute hooks. The base curve is `cubic-bezier(0.2, 0.6, 0.2, 1)`; the base duration is `700ms`. There is no second curve. There are three durations.

## Tokens

| Token | Value | Use |
|---|---|---|
| `--ease` | `cubic-bezier(0.2, 0.6, 0.2, 1)` | every motion, no exception |
| `--dur` | `700ms` | base — section reveals, route changes, headline wipes |
| `--dur-fast` | `300ms` | micro-interactions only — hover, focus, row tint |
| `--dur-slow` | `1400ms` | reserved for the hero stroke draw |

Under `prefers-reduced-motion: reduce`, all three durations clamp to `200ms`. Translate, clip, and parallax become opacity-only. The catalog enforces this per-entry below.

## Catalog

| Name | Trigger | Spec | Duration | Reduced-motion fallback |
|---|---|---|---|---|
| `m-fade-in` | Section enters viewport | opacity 0 → 1 | `--dur` | unchanged (already opacity-only) |
| `m-rise` | Section enters viewport | opacity 0 → 1 + translateY 16px → 0 | `--dur` | opacity-only, no translate |
| `m-mask-wipe` | Display headlines on load | clip-path inset(0 100% 0 0) → inset(0); line-by-line stagger 120ms | `--dur` | opacity fade, no clip-path |
| `m-stroke-draw` | Hero SVG (one-off) | stroke-dashoffset 100% → 0 | `--dur-slow` | instant render, opacity 0 → 1 over `--dur` |
| `m-parallax-soft` | Hero illustration on scroll | translateY 0 → −24px max, scroll-linked, throttled | live | none (`transform: none`) |
| `m-underline-roll` | Nav / link hover | pseudo-element underline scaleX 0 → 1, transform-origin left | `--dur-fast` | unchanged (transforms on a 1px line are imperceptible) |
| `m-row-tint` | Service row hover/focus | background `library-green-soft` 0% → 8%; numeral translateX 0 → 6px | `--dur-fast` | tint unchanged; numeral translateX disabled |
| `m-image-desat` | Portfolio thumb hover | filter saturate(0.92) → 1 | `--dur-fast` | unchanged (filter, not transform) |
| `m-route-cross` | View Transition default | opacity + 8px translateY (in / out) | `--dur` | duration clamped to `--dur-fast` |
| `m-image-morph` | Portfolio thumb → detail hero | shared `view-transition-name`; CSS view-transition default cross-fade | `--dur` | falls back to `m-route-cross` |
| `m-form-success` | Form submit success | form opacity 1 → 0, then success message opacity 0 → 1 | `--dur-fast` then `--dur` | unchanged |
| `grain-drift` | Body background ambient | background-position drift, 24s loop | n/a | animation cancelled |

## Stagger

- Maximum **5 elements** in a single staggered group.
- Stagger interval **60–120ms**; default `0.08s` via `--stagger-step`.
- Applied via inline `--stagger-i: <index>` per child.
- **Never stagger more than once per scroll-screen.** A reader notices the second time.

## Forbidden

- Bouncy / elastic / overshoot easings (`back`, `bounce`, `elastic`).
- Springs.
- Looping ambient animations except `grain-drift` (very slow, opacity/position-only).
- Scroll-jacking. Snap scrolls. Parallax that fights native scroll.
- Hover effects on non-interactive elements.
- Page-load splashes. Motion announces section enters, not the site arriving.

## How to use

```astro
<section data-motion="m-rise">
  <h2 class="t-section-title">…</h2>
</section>
```

```astro
{/* Stagger 4 children */}
<ul>
  {items.map((item, i) => (
    <li
      data-motion="m-rise"
      data-stagger
      style={`--stagger-i:${i};--stagger-step:0.08s;`}
    >
      {item}
    </li>
  ))}
</ul>
```

The IntersectionObserver that flips `data-in-view` is wired once per page from the base layout (T11). Components don't observe their own elements.

## Curve note

`cubic-bezier(0.2, 0.6, 0.2, 1)` is a single-direction ease-out with a long tail — slow start, decisive middle, soft landing. It carries the project's restraint: nothing pops, nothing snaps. Replacing it without consulting visual-language.md changes the voice.

## Audit lens

Every page or component touching motion is reviewed against this catalog by `impeccable`. The audit has three checks:

1. **Names cited, not values.** No raw `300ms` or `cubic-bezier()` in component code outside this catalog and `motion.css`.
2. **Reduced-motion verified.** Each motion is tested with `prefers-reduced-motion: reduce` set in the browser.
3. **Stagger discipline.** No more than one staggered group per scroll-screen.

Failures are commits, not conversations.
