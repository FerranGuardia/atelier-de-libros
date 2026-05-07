# T12 — Hero composition spec

> The literal layout the build (T15) implements. No code here.

## 1. Focal logic

The eye lands first on the headline — Cormorant 300 italic at `--step-5` carries the heaviest visual weight despite the lightest font weight, because it's the largest block of letterforms on a paper field. Second, the illustration: a single library-green stroke is the only colour cue on the page, and the brain reads novelty before mass. Third, the sub-headline: Inter 400 at `--step-0`, ink-soft — quiet, explanatory, the beat that confirms the meaning of the first two.

## 2. Visual hierarchy ranking

| Rank | Element | Size | Weight | Colour | Position (desktop) |
|---|---|---|---|---|---|
| 1 | Headline | clamp `--step-3` → `--step-5` | Cormorant 300 italic | `--ink` | cols 2–7, optical centre −80px |
| 2 | Illustration | ≈ 280px wide | line, currentColor | `--library-green` | cols 9–11, optical centre +120px |
| 3 | Sub-headline | `--step-0` | Inter 400 | `--ink-soft` | cols 2–5, gap `--space-8` below headline |

Headline copy is split across two lines deliberately:

> *Curaduría literaria*<br>
> *el libro como identidad*

The natural break is the colon; italic Cormorant carries best two-line. The break is preserved in markup with two spans, not a `<br>`.

## 3. ASCII grid sketch (desktop, 12-col)

```
   1     2   3   4   5   6   7     8     9   10   11    12
   │   .   .   .   .   .   .   │   .   .   .   .   │
   │                                                │
   │   ┌──────────────────────┐                     │
   │   │ Curaduría literaria  │                     │
   │   │                      │            ╭──╮     │
   │   │ el libro como        │           (    )    │
   │   │ identidad            │            ╰──╯     │
   │   └──────────────────────┘                     │
   │                                                │
   │   ┌──────────────────┐                         │
   │   │ Diseñamos el     │                         │
   │   │ alma intelectual │                         │
   │   └──────────────────┘                         │
   │                                                │
   │   .   .   .   .   .   .   .   .   .   .   .    │
```

Not centred. The headline and sub-headline are anchored to the left half of the grid; the illustration floats off-axis to the right at vertical +120px so the page reads as composed, not balanced.

## 4. Whitespace ratios (above the fold)

| Region | Target |
|---|---|
| Total empty paper | ≥ 60% |
| Headline column band | text occupies ≈ 40% vertical, the rest is air |
| Illustration column band | subject occupies ≈ 25% of its area |
| Bottom strip (last 12% of viewport) | zero content — the eye discovers scroll |

## 5. Per-breakpoint composition (each is its own composition)

### Tablet (8-col, ≥ 768px)

- Headline at cols 2–7, font size steps to clamp lower bound (`--step-3` → `--step-4`).
- Illustration at cols 5–8, ≈ 220px wide, optical centre +90px.
- Sub-headline at cols 2–5, gap `--space-6`.

### Mobile (4-col, < 768px)

- **Stack.** Illustration above headline, ≈ 30% of viewport width, centred.
- Headline below at cols 1–4, clamp lower bound (`--step-3`), text-align left within column.
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
