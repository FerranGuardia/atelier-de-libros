# T12 — Hero composition spec

> The literal layout the build (T15) implements. **Revised after the GRIS-watercolor pivot:** the small-illustration brief (cols 9-11, ≈ 280px) was downgrading the asset. The painted hero now occupies the whole canvas; the headline overlays on the left where the cream-paper negative space sits.

## 1. Focal logic

The eye lands first on the headline — Cormorant 300 italic at `--step-5` carries the heaviest visual weight despite the lightest font weight, because it's the largest block of letterforms on a paper field. Second, the illustration: a single library-green stroke is the only colour cue on the page, and the brain reads novelty before mass. Third, the sub-headline: Inter 400 at `--step-0`, ink-soft — quiet, explanatory, the beat that confirms the meaning of the first two.

## 2. Visual hierarchy ranking

| Rank | Element | Size | Weight | Colour | Position (desktop) |
|---|---|---|---|---|---|
| 1 | **Illustration** (watercolor, full-bleed) | covers the hero, anchored 70% across | painted | the painting's own palette (cream + dusty teal + soft rose, library-green at the deepest fold) | full bleed, behind the text |
| 2 | Headline | clamp ≈ 2rem → 3.4rem (one to two steps below `--step-5`) | Cormorant 300 italic | `--ink` | overlay on the left, in the painting's cream-paper negative space, vertically centred |
| 3 | Sub-headline | clamp ≈ 1.1rem → 1.4rem | Cormorant 300 italic (`.t-lead`) | `--ink-soft` | below headline, max 32ch |

The headline **competes with the painting** if rendered at full `--step-5`. The post-pivot rule: **let the painting carry the volume; let the type whisper alongside.**

Headline copy is split across two lines deliberately:

> *Curaduría literaria*<br>
> *el libro como identidad*

The natural break is the colon; italic Cormorant carries best two-line. The break is preserved in markup with two spans, not a `<br>`.

## 3. ASCII grid sketch (desktop, 12-col, post-pivot)

```
   1     2   3   4   5   6   7     8     9   10   11    12
   ┌────────────────────────────────────────────────────┐
   │ ░ falling pages   ░░░░░░  rose horizon  ░░░░░░░░░░ │
   │                                                    │
   │   Curaduría literaria        ░░░ open book ░░░░░░  │
   │   el libro como identidad    ░░░ → landscape ░░░░  │
   │                              ░░░ figure at spine ░ │
   │   Diseñamos el alma          ░░░░░░░░░░░░░░░░░░░░  │
   │   intelectual…               ░░░░░░░░░░░░░░░░░░░░  │
   │                                                    │
   └────────────────────────────────────────────────────┘
```

The watercolor is the canvas. Headline + sub-headline anchor on the left where the painting's cream paper falls away from the book; the painting's narrative content (book + figure + falling pages) lives on the right and top. `object-position: 70% center` keeps the book and figure in frame at every viewport while letting the cream-paper edge extend off-screen on the left, giving the text room.

## 4. Whitespace ratios (above the fold)

| Region | Target |
|---|---|
| Total empty paper | ≥ 60% |
| Headline column band | text occupies ≈ 40% vertical, the rest is air |
| Illustration column band | subject occupies ≈ 25% of its area |
| Bottom strip (last 12% of viewport) | zero content — the eye discovers scroll |

## 5. Per-breakpoint composition (each is its own composition)

### Tablet (8-col, ≥ 768px)

- Watercolor still full-bleed, `object-position: 70% center`.
- Headline + sub-headline overlay on the left, headline clamp lands mid-range.
- Same vertical centering as desktop.

### Mobile (4-col, < 768px)

- **Stack.** Watercolor sits as a contained block at the top of the hero (full container width, natural aspect, ≈ 50–60% viewport height).
- Headline below the painting in cream paper, headline clamp at lower bound.
- Sub-headline immediately below, max-width 32ch.
- No vertical centering — content starts ≈ `--space-24` below the header.

## 6. The "what's absent" list

The hero contains, by deliberate choice, **none of the following**:

- No CTA button.
- No scroll indicator (arrow, "scroll" text, animated dot, mouse pictogram).
- No background gradient or pattern (the grain overlay is the only texture).
- No social proof, logo strip, badges, awards.
- No second illustration or photograph.
- No date, year, or location text.
- No play button or video element.
- No motion arrow / scroll cue.

## 7. Test for the spec

If a stakeholder asks where the CTA is, the answer is: **there isn't one**. The user scrolls because the page rewards scrolling, not because a button told them to. This is the philosophical defence of the hero's restraint: the brand whispers; restraint is voice.

## 8. Resolved questions

- **Two-line headline?** Yes. Italic Cormorant looks strongest two-line; the colon is the natural break.
- **Illustration column-perfect or offset?** Snap to grid columns 9–11 (alignment), but offset vertically +120px from optical centre (asymmetry).
- **`min-height` of the hero?** `100dvh` on mobile (avoids Safari address-bar jump), `100vh` desktop.
- **Section element?** `<section aria-labelledby="hero-title">` with `<h1 id="hero-title">` for the headline.
