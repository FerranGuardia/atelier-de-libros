# T05 — Motion language

**Skill:** `impeccable` (catalog) + `frontend-design:frontend-design` (implementation)
**Phase:** 0 — Doctrines
**Depends on:** T01, T03
**Blocks:** every page task with motion
**Mireia-blocked:** No
**Estimated commits:** 1

## Goal
Define the entire motion vocabulary in one place. Tokens + a catalog of named motions that build tasks reference by name. No build task invents motion ad-hoc.

## Scope

### Motion tokens (`src/styles/motion.css`)
```css
:root {
  --ease:     cubic-bezier(.2, .6, .2, 1);
  --dur:      700ms;
  --dur-fast: 300ms;
  --dur-slow: 1400ms;  /* reserved for hero stroke draw only */
}

@media (prefers-reduced-motion: reduce) {
  :root { --dur: 200ms; --dur-fast: 200ms; --dur-slow: 200ms; }
  /* No transforms allowed under reduced-motion. Components enforce per-element. */
}
```

### Motion catalog (named, reusable)

| Name | When | Spec |
|---|---|---|
| `m-fade-in` | Section enters viewport | opacity 0 → 1, `--dur` `--ease`, `IntersectionObserver` trigger at 25% |
| `m-rise` | Section enters viewport | opacity 0 → 1 + translateY 16px → 0, `--dur` `--ease` |
| `m-mask-wipe` | Display headlines on load | clip-path inset(0 100% 0 0) → inset(0), `--dur` `--ease`, line-by-line stagger 120ms |
| `m-stroke-draw` | Hero SVG (one-off) | stroke-dashoffset 100% → 0, `--dur-slow` `--ease` |
| `m-parallax-soft` | Hero illustration on scroll | translateY 0 → −24px max, scroll-linked, throttled |
| `m-underline-roll` | Nav / link hover | width 0 → 100%, transform-origin left, `--dur-fast` `--ease` |
| `m-row-tint` | Service row hover | background opacity 0 → 1 (library-green-soft), `--dur-fast` `--ease`; numeral translateX 0 → 6px |
| `m-image-desat` | Portfolio thumb hover | filter saturate(0.92) → 1, `--dur-fast` `--ease` |
| `m-route-cross` | View Transition default | opacity 0 → 1 + translateY 8px → 0 (incoming); reverse on outgoing; `--dur` `--ease` |
| `m-image-morph` | Portfolio thumb → detail hero | View Transition with shared `transition:name`, `--dur` `--ease` |
| `m-form-success` | Form submit success | form opacity 1 → 0 (`--dur-fast`), success message opacity 0 → 1 (`--dur`) |

### Forbidden motions
- Bouncy / elastic easings (`back`, `bounce`, `elastic`).
- Springs.
- Looping ambient animations except the grain drift (very slow, opacity-only).
- Scroll-jacking. Snap scrolls. Parallax that fights native scroll.
- Hover effects on non-interactive elements.

### Reduced-motion contract
For each named motion in the catalog, document the reduced-motion fallback:
- `m-mask-wipe` → opacity fade, no clip-path.
- `m-stroke-draw` → instant render, opacity 0 → 1.
- `m-parallax-soft` → none (translateY 0).
- `m-image-morph` → opacity crossfade, no shared element transition.
- All others: keep `--dur` capped at 200ms, opacity-only.

### Stagger rules
- Maximum 5 elements in a single staggered group.
- Stagger interval 60–120ms.
- Never stagger more than once per scroll-screen (the user notices).

## Deliverables
- `src/styles/motion.css`.
- `.claude/motion-catalog.md` — the table above as standalone reference (build tasks cite by name).
- Updated `.claude/design-system.md` (motion section).
- Dev-only `src/pages/_dev/motion.astro` demoing each catalog entry (deleted before T40).

## Acceptance criteria
- No build task in this project specifies a duration or curve numerically — they reference catalog names.
- Every catalog entry has a reduced-motion fallback documented.
- Demo page lets you trigger each motion by name.

## Notes
The catalog is small on purpose. If a build task needs a motion that isn't here, the answer is to add it here first, with a name, an audit pass, and a fallback. Don't improvise in components.
