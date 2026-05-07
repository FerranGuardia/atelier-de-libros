# T13 — Hero illustration

**Kind:** illustration (line art SVG)
**Aspect:** 3:2 (canvas), subject occupies ≈ 20%, off-centred right (golden mean)
**Lands in:** `src/assets/illustrations/hero.svg`
**Used by:** `src/components/sections/Hero.astro` (via inline SVG include)

## Brief

A simple book lying half-open on its spine, viewed slightly from the side. The pages curve naturally; the binding is suggested rather than detailed. No text on the pages. No decoration around the subject. The illustration is the *single* coloured stroke on the home page above the fold — it must read as voice, not ornament.

This prompt is the **canonical reference for the entire illustration set** (T30 will cite it five times). Every other illustration must feel drawn by the same hand: same line weight, same termination quality, same negative-space ratio.

## Direction

- **Style:** line art only. Single stroke weight ≈ 1.25px throughout.
- **Colour:** stroke `#2D4033` (library-green). No fill. No second colour.
- **Edge quality:** at line terminations, a hint of ink-bleed irregularity — like a fountain pen settling on absorbent paper. Subtle. Mid-line is clean.
- **No shadows. No gradients. No perspective shading. No texture inside the lines.**
- **Composition:** the subject occupies ≈ 20% of the canvas area, off-centred to the right (≈ 60% across, 55% down — golden mean). The book leans slightly to the right, suggesting it has just been set down. ≈ 80% of the canvas is empty.
- **No frame, no border, no decoration around the subject.**
- **No surface beneath the book** — no shadow, no table line, no drop. The book floats in paper.

## Subject justification

A book half-open on its spine is the most generous shape: it asks the viewer to imagine the rest, leaves room for whitespace inside the pages, and reads symbolically as *the work is in process*. A closed book is too final; an open-flat book crowds the frame.

## Anti-references

- No "designy" line drawing where the line varies in weight (caligraphic).
- No "hand-drawn" look that becomes painterly — the line is precise; only the *terminations* show ink-bleed.
- No fills, anywhere.
- No shadows, no glows, no perspective vanishing-point dramatic angles.
- No bookmark dangling, no light rays, no surface beneath the book.
- Not Cormorant-italic-on-marble editorial cliché — this is a single drawn object on white space, not a magazine spread.
- Not Klim Type Foundry specimen-page, not Stripe-minimal — those are typographic lanes, not illustration.

## Output

- **Format:** SVG, vector. Single `<path>` if possible; multiple paths sharing the same stroke style otherwise.
- **ViewBox:** `0 0 1200 800`. No inline `width` / `height`.
- **Stroke:** `currentColor` so the page can tint the illustration via CSS (default falls back to `#2D4033`).
- **Stroke-linejoin:** `round`. **Stroke-linecap:** `round`.
- **No `<style>` blocks** inside the SVG — every attribute set on the path elements directly so the inline include carries no orphan CSS.
- **Optimised:** SVGO-pass; remove metadata, editor namespaces, `id`s.
- **Filename:** `hero.svg`.
- **Raster fallback (only if asked):** 2400 × 1600 PNG, transparent background.

## Implementation note for the build agent

Once the asset lands, replace the `<PendingImage prompt="T13-hero" …>` in `Hero.astro` with an inline SVG include. The motion `m-stroke-draw` requires `pathLength="1"` plus `stroke-dasharray="1"` `stroke-dashoffset="1"` initial state — those attributes are added at integration time, not in the asset itself.

## House-style reference

Cited by:

- `T30-illustration-set.md` — five additional illustrations (book, page, shelf, bookmark, page-fold). All five must match this hero's hand.
