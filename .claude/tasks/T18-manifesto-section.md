# T18 — Manifesto section

**Skill:** `frontend-design:frontend-design`
**Phase:** 2 — Home assembly
**Depends on:** T11, T17
**Blocks:** T22
**Mireia-blocked:** Partial (M01 — actual copy). Build with placeholder Latin.
**Estimated commits:** 1

## Goal
Build `Manifesto.astro` — the declarative italic-Cormorant block beneath the hero. Single column. Restrained.

## Composition & hierarchy (cite T17 §4–5)
- Single column, max 60ch (56ch tablet, full-column mobile), centred.
- Above the text: a 1px library-green ribbon-line, 80px wide, off-centre **toward the left** (not centred — gives the block a slight asymmetric pulse).
- 4 short paragraphs.
- After the last paragraph: nothing. No dividers, no decoration.

## Whitespace & rhythm
- `--space-32` above the section (gap from hero — see T17 §2).
- `--space-24` below the section (gap to services teaser).
- Inside the section:
  - Ribbon → text gap: `--space-8`.
  - Paragraph → paragraph gap: rely on body leading (1.55 = ample). Add `--space-3` only if the visual rhythm needs help.
  - Last paragraph → end of section: `--space-12` of empty before the section ends.

## Type
- Body: Cormorant 300 italic (overrides the body Inter — manifesto reads as voice, not document).
- Size: --step-2 desktop, --step-1 tablet, --step-0 mobile (italic Cormorant at body sizes is legible; smaller than --step-0 it loses weight).
- Color: ink. (Not ink-soft — this is the brand's voice.)
- Leading: 1.4 (looser than body — it breathes).
- Tracking: +0.5%.

## Image plan
None. The manifesto is text only. The ribbon is a styled `<hr>`, not an image.

## Motion
- Section enters viewport: `m-rise` (T05) — opacity 0 → 1 + translateY 16px → 0, fires at 25% visibility, once.
- Ribbon: same timing as section.
- Reduced-motion: opacity-only.
- No hover, no in-section animation.

## Navigation & interaction
- Section id: `manifiesto` for anchor support.
- No links inside the manifesto. The text speaks; it doesn't ask the reader to click.

## Responsive (cite T07)
- Desktop / tablet: column max-width controls; outer page padding handles edges.
- Mobile: full-column within outer 32px padding. Type drops one step.

## Accessibility (cite T10)
- Wrap in `<section aria-labelledby="manifesto-title">`.
- Use a visually-hidden h2 `<h2 id="manifesto-title" class="sr-only">Manifiesto</h2>` so the section has a heading for assistive tech without interrupting the visual silence.
- Ribbon: `<hr aria-hidden="true">` — semantic separator, but presentation-only.
- Paragraphs as `<p>` elements.

## Mireia placeholder
- 4 paragraphs of plausible Latin, each ~40–60 words.
- Wrap each paragraph in a comment: `<!-- M01-paragraph-1 -->`, etc.
- Document in the file: `<!-- M01: Mireia entrega copia. Ver .claude/tasks-mireia/M01-manifesto.md -->`.

## Deliverables
- `src/components/sections/Manifesto.astro`.

## Acceptance criteria
- Section visually matches T17 §5 whitespace target (~50% empty).
- Italic Cormorant at --step-2 reads as voice without strain.
- Reduced-motion contract upheld.
- Mireia swap-in is a one-place edit (the 4 paragraphs).
- `impeccable` audit: section feels declarative, restrained, present without pushing.

## Notes
The manifesto is the only place where Cormorant runs as body type. It is a deliberate exception. Don't generalise to other sections.
