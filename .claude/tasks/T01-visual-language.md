# T01 — Visual language document

**Skill:** `impeccable`
**Phase:** 0 — Doctrines
**Depends on:** —
**Blocks:** every visual decision downstream
**Mireia-blocked:** No
**Estimated commits:** 1

## Goal
Produce `.claude/visual-language.md` defining the GRIS → brief translation. The spine. Every visual decision cites it.

## Inputs
- `briefing-web.md` (sections 2 and 5).
- Project conversation: GRIS provides grammar, Nemeri provides volume, brief demands "lujo discreto", emotion via restriction not intensity.

## Sections to write

1. **Posición** — one paragraph. "The site whispers, never weeps."
2. **Grammar from GRIS** — bulleted list:
   - Negative space as protagonist (not as filler).
   - Atmospheric layering — depth via opacity, not perspective.
   - Ink / watercolor materiality — texture before color.
   - Slow-poetic motion — entrance, never performance.
   - Type as character — not a label.
3. **Volume we discard** — bulleted list:
   - Saturated washes; chapter-color shifts; melodrama; decoration for its own sake.
   - Animations that announce themselves.
   - Imagery that describes rather than evokes.
4. **Translation table** — concrete pairs:
   | GRIS element | Atelier equivalent |
   |---|---|
   | Coloured chapter washes | Single library-green emerging at <8% surface |
   | Particle dust parallax | Paper grain at 6–10% opacity, drifting slow |
   | Watercolor character | Line-art SVG with subtle ink-bleed at terminations |
   | Sweeping camera moves | Quiet crossfade + 8px translate-y |
   | Ambient soundtrack | Type rhythm + measure; silence is the score |
5. **Hard rules** (numbered, non-negotiable):
   - Library-green ≤ 8% of any viewport.
   - Ink for text only. Background = paper, always.
   - One easing curve site-wide: `cubic-bezier(.2, .6, .2, 1)`.
   - One base duration: 700ms (300ms only for micro-interactions).
   - No bouncy / elastic easings.
   - Display: Cormorant Garamond. Body: Inter. Self-hosted, latin subset.
   - No box shadows except optional 1px paper-deep border.
   - No carousels. No popups. No scroll-jacking.
   - No more than one illustration per scroll-screen.
6. **The "no" list** — at least as long as the "yes" list. Concrete examples of what we will *not* do, and why.
7. **Failure modes to watch** — when GRIS-inspiration tips into:
   - Melodrama (color volume creeping up).
   - Generic editorial (becoming "Espacio en Blanco" without soul).
   - SaaS landing (blocks of features, CTAs everywhere).

## Deliverables
- `.claude/visual-language.md` — the document.
- Citation added to `.claude/README.md`.

## Acceptance criteria
- Fits one screen at standard reading width.
- Every reference in `briefing-web.md §5` is reflected.
- "Do we do X?" can be answered using this doc alone.
- Editorial brevity: zero filler adjectives.
- The "no" list is as long as the "yes" list.

## Notes
This is the only task in the project where prose runs long. Restraint is the test — three pages = wrong.
