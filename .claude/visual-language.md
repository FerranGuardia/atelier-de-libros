# Atelier de Libros — Lenguaje visual

> The spine. Every visual decision in this project cites this document.
> GRIS provides the grammar. Nemeri provides the volume — sparingly.

## 1. Posición

The site whispers, never weeps. *Lujo discreto* over loud beauty. Emotion through restriction, not intensity. The boutique reads its catalogue slowly; the website is read the same way.

## 2. Grammar from GRIS

- Negative space as protagonist, not as filler.
- Atmospheric layering — depth via opacity, not perspective.
- Ink / watercolor materiality — texture before color.
- Slow-poetic motion — entrance, never performance.
- Type as character, not as label.

## 3. Volume we discard

- Saturated washes, chapter-color shifts, melodrama, decoration for its own sake.
- Animations that announce themselves.
- Imagery that describes rather than evokes.

## 4. Translation table

| GRIS element | Atelier equivalent |
|---|---|
| Coloured chapter washes | Single library-green emerging at <8% surface |
| Particle dust parallax | Paper grain at 6–10% opacity, drifting slow |
| Watercolor character | Line-art SVG with subtle ink-bleed at terminations |
| Sweeping camera moves | Quiet crossfade + 8px translate-y |
| Ambient soundtrack | Type rhythm + measure; silence is the score |
| Hand-painted environment | Cropped photography — paper, linen, wood, sieved daylight |

## 5. Hard rules

1. Library-green (`#2D4033`) ≤ 8% of any viewport. Measured, not eyeballed.
2. Ink (`#1A1A1A`) for text only. Background (`#F5F5F0`) is paper, always.
3. One easing curve site-wide: `cubic-bezier(.2, .6, .2, 1)`.
4. One base duration: 700ms. 300ms reserved for micro-interactions (hover, focus). Nothing in between.
5. No bouncy, elastic, or overshoot easings.
6. Display: Cormorant Garamond. Body: Inter. Self-hosted, latin subset.
7. No box shadows. Optional 1px paper-deep border when separation is unavoidable.
8. No carousels. No popups. No scroll-jacking. No autoplaying anything.
9. No more than one illustration per scroll-screen.
10. Asymmetry is the default; the grid breathes around the content, not the reverse.

## 6. The "no" list

What we will *not* do, and why:

- **No hero video, no autoplay carousel.** Performance announces itself; this site reads.
- **No gradient anything.** Tonal shifts come from paper grain and ink density, not CSS.
- **No coloured CTAs.** Buttons are typographic — underline, weight, ink. Verde biblioteca is a detail, never a button.
- **No "4 servicios in 4 cards" grid.** Servicios is an index, not a feature matrix — numbered, vertical, paginated like the front matter of a book.
- **No emoji, no icon set, no decorative SVG sprites.** One illustration system (T29–T31), used scarcely.
- **No drop shadows, glows, or glassmorphism.** A book on a table has no shadow on this site.
- **No parallax dust, mouse-trailing particles, or scroll-scrubbed video.** Slow translate-y and crossfade only.
- **No pop-in cookie banner over the fold.** Inline footer notice, paper-tone, dismissable in place.
- **No SaaS-isms:** no testimonials grid with circular avatars, no "trusted by" logo strip, no metric counters, no comparison tables, no pricing tiers.
- **No mimicry of *Espacio en Blanco*.** We share the silence; we do not share the voice. We carry more asymmetry, denser rules of measure, heavier typographic weight where they go featherlight.

## 7. Failure modes to watch

- **Melodrama** — verde biblioteca creeping past 8%, photography grading toward warmth, type inflating to pull the eye. Cut.
- **Generic editorial** — becoming *Espacio en Blanco* without soul: empty grids, cropped marble, courier subheads, no point of view. Reintroduce asymmetry, paper grain, ink bleed, the index voice.
- **SaaS landing** — blocks of features, CTAs everywhere, hero-metric template, identical card grids. If a section reads "feature → benefit → proof," rewrite it as paragraph or index.
- **Architectural coldness** — *Hest Properties* read straight: steel-grey palette, flat photography, museum captions, no warmth. Reintroduce paper, sieved daylight, the human hand.

---

**References in `briefing-web.md §5` translated above:**
*Espacio en Blanco* — sensibilidad: silencio visual (§2 #1), navegación sutil (§2 #4, §5 rules 7–8), servicios como índice (§6).
*Hest Properties* — posicionamiento: paleta orgánica (§5 rule 2), retícula arquitectónica (§5 rule 10).
*Editec, Deleatur* — sector cleanliness benchmarks; structural comparison only, not aesthetic inspiration.
