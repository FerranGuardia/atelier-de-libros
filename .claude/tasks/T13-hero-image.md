# T13 — Hero image direction + ChatGPT prompt + placeholder

**Skill:** `impeccable`
**Phase:** 1 — Hero
**Depends on:** T01, T08, T12
**Blocks:** T15
**Mireia-blocked:** No
**Estimated commits:** 1

## Goal
Produce the canonical illustration prompt for the hero AND a usable placeholder SVG so the hero can ship before Ferran returns from ChatGPT with the rendered version. This prompt becomes the "house style" reference cited by the entire illustration set (T30).

## Scope

### Step 1 — Subject decision
Pick one and document the justification in the prompt file:
- (a) A book lying half-open on its spine.
- (b) A folded page (single sheet, dog-eared corner visible).
- (c) A slim book seen edge-on (canto).

**Recommendation:** (a) book half-open on its spine. Highest narrative weight, lowest decorative cost, most generous to the negative space.

### Step 2 — Draft the ChatGPT prompt

Save to `.claude/image-prompts/T13-hero.md` with this structure:

```md
# Hero illustration — "Open book on spine"

## Subject
A simple book lying half-open on its spine, viewed slightly from the side. The pages curve naturally; the binding is suggested rather than detailed. No text on the pages, no decoration.

## Treatment
- **Style:** line art only. Single stroke weight ~1.25px throughout.
- **Color:** stroke #2D4033 (library-green). No fill, no second color.
- **Edge quality:** at line terminations, a hint of ink-bleed irregularity — like a fountain pen on absorbent paper. Subtle, not painterly. Mid-line is clean.
- **No shadows. No gradients. No perspective shading. No texture inside the lines.**

## Composition
- The subject occupies ~20% of the canvas area, off-centred toward the right (golden mean placement, roughly 60% across, 55% down).
- ~80% of the canvas is empty.
- The subject leans slightly to the right, suggesting it has just been set down.
- No frame, no border, no decoration around the subject.

## Output spec
- Format: SVG, vector. If raster fallback needed: 2400×1600px PNG, transparent background.
- ViewBox: 0 0 1200 800. No inline width / height.
- Stroke as `currentColor` so we can tint via CSS (default to library-green).

## Don't
- No shadows or gradients.
- No decorative elements (no bookmark dangling, no light rays, no surface beneath the book).
- No realistic shading inside the pages.
- No perspective vanishing point dramatic angles.
- No "hand drawn" look that becomes painterly — the line is precise; only the *terminations* show ink-bleed.
- No fills, anywhere. Pure outline.

## House style reference
**This prompt is the canonical reference for every other illustration in the project (T30 set).** All five illustrations in T30 must feel drawn by the same hand: same stroke weight, same termination quality, same negative-space ratio. Cite this prompt in each.

## Subject justification
The book half-open on its spine is the most generous shape: it asks the viewer to imagine the rest, leaves room for whitespace inside the pages, and reads symbolically as "the work is in process". A closed book would be too final; an open-flat book would crowd the frame.
```

### Step 3 — Placeholder SVG

While Ferran goes to ChatGPT, commit a simple placeholder:
- Path: `src/assets/illustrations/hero-placeholder.svg`.
- Content: a minimal hand-drawn outline of an open book (two trapezoid "pages" meeting at a spine line, slight asymmetry).
- Stroke: `currentColor`, width 1.25, no fill.
- ViewBox 0 0 1200 800.
- The placeholder is good enough to ship; it reads as "open book" and matches the visual language. Replacement is a one-line change in T15 once the real SVG is in.

### Step 4 — Documentation

Update `.claude/illustrations.md` (created in T29) to register:
- `hero` → `src/assets/illustrations/hero.svg` (real) + `hero-placeholder.svg` (fallback).
- Mark the slot as "awaiting ChatGPT render — placeholder in use."

## Deliverables
- `.claude/image-prompts/T13-hero.md` — the ChatGPT prompt above, ready to copy.
- `src/assets/illustrations/hero-placeholder.svg` — committed placeholder.
- Stub entry in `.claude/illustrations.md` (file may not exist yet — create it minimally).

## Acceptance criteria
- The prompt fits in a single ChatGPT message (≤ ~400 words).
- The "Don't" list is concrete and actionable.
- The placeholder renders cleanly at 280px width and at 80px width without anti-aliasing artifacts.
- A reader of the prompt can answer "would Y belong in this illustration?" without ambiguity.

## Notes
This prompt is the canonical reference for the entire illustration set. T30 will cite it five times. Get it right; the rest follows.
