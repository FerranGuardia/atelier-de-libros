# T12 — Hero composition & hierarchy spec

**Skill:** `impeccable`
**Phase:** 1 — Hero
**Depends on:** T01, T04, T06, T07
**Blocks:** T15
**Mireia-blocked:** No (headline from briefing)
**Estimated commits:** 1

## Goal
Decide where every element of the hero sits, why, and what whitespace they breathe in. **No code in this task.** Output is a markdown document and an ASCII grid sketch that the build task (T15) follows literally.

## Inputs
- Headline: *"Curaduría Literaria: El libro como identidad"*
- Sub-headline: *"Diseñamos el alma intelectual de marcas, espacios y personas"*
- T06 Grid + whitespace doctrine (12-col desktop, 35% empty minimum, 60% empty for hero).
- T07 Responsive doctrine.

## Output: `.claude/specs/T12-hero-composition.md`

The doc contains, in this order:

### 1. Focal logic
One paragraph: where the eye lands first, second, third, and why. (Expected: headline first via type weight + position; illustration second via line and color novelty; sub-headline third as the explanatory beat.)

### 2. Visual hierarchy ranking
| Rank | Element | Size | Weight | Color | Position |
|---|---|---|---|---|---|
| 1 | Headline | --step-5 | Cormorant 300 italic | ink | cols 2–7, vertical center −80px |
| 2 | Illustration | ~280px wide | line | library-green | cols 9–11, vertical center +120px |
| 3 | Sub-headline | --step-0 | Inter 400 | ink-soft | cols 2–5, below headline gap `--space-8` |

### 3. ASCII grid sketch (desktop)
```
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |10 |11 |12 |
|   |   .   .   .   .   .   .   |   |   .   .  |
|   |   [Curaduría Literaria:    ]  |   .   .  |
|   |   [El libro como identidad]   |  [ill.]  |
|   |   .   .   .   .   .   .   |   |   .   .  |
|   |   [Diseñamos el alma . ]  |   |   .   .  |
|   |   .   .   .   .   .   .   |   |   .   .  |
```

### 4. Whitespace ratios (target)
- Total empty area (paper visible) above the fold: **≥ 60%**.
- Headline column: text takes ~40% vertical space of its column band; the rest is air.
- Illustration column: subject takes ~25% of its column area.
- Bottom of viewport: zero content for the last 12% (forces the eye to discover scroll).

### 5. Per-breakpoint composition (no shrinking — restated for each)

**Tablet (8-col):**
- Headline at cols 2–7, --step-4.
- Illustration at cols 5–8, ~220px wide, vertical center +90px.
- Sub-headline at cols 2–5, gap `--space-6`.

**Mobile (4-col):**
- **Stack.** Illustration above headline, ~30% viewport width, centered.
- Headline below at cols 1–4, --step-3, centered text-align left within column.
- Sub-headline immediately below, max-width 32ch.
- Vertical centering removed; content starts ~`--space-24` below header.

### 6. What's absent (the no-list)
- No CTA button.
- No scroll indicator (arrow, "scroll" text, animated dot).
- No background gradient or pattern (the grain overlay is enough).
- No social proof, logos, badges.
- No second illustration or photograph.
- No date, year, or location text.

### 7. Test for the spec
"If a stakeholder asks where the CTA is, the answer is: there isn't one. The user scrolls because the page rewards scrolling." Document this as the philosophical defense of the hero's restraint.

### 8. Open questions
- Is the headline split across two lines deliberately? (Decision: yes — the colon is the natural break, and italic Cormorant looks strongest two-line.)
- Where exactly does the illustration float — column-perfect or slightly offset for asymmetry? (Decision: snap to grid columns 9–11 but offset vertically +120px from optical center to avoid a too-symmetric layout.)

## Deliverables
- `.claude/specs/T12-hero-composition.md` containing all of the above.

## Acceptance criteria
- A build agent reading this spec can implement the hero without making any composition decisions of their own.
- Every dimension is either an exact value, a token, or a column reference.
- The "what's absent" list is at least 6 items long.
- Mobile composition is described as its own composition, not as "desktop, but smaller".

## Notes
This task is a writing task. If the doc takes more than one screen, you're over-specifying — pull back to principles and let the build task interpret edges.
