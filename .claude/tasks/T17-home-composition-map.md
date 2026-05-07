# T17 — Home composition map

**Skill:** `impeccable`
**Phase:** 2 — Home assembly
**Depends on:** T01, T06, T07, T16
**Blocks:** T18–T22
**Mireia-blocked:** No
**Estimated commits:** 1

## Goal
Decide the shape of the home page below the hero: which sections, in what order, with what rhythm between them, what transitions cue the reader from one to the next. **No code in this task.** Output is a markdown map and a section-by-section spec the build tasks (T18–T22) follow.

## Output: `.claude/specs/T17-home-map.md`

### 1. Section order (final)
1. Hero (T15) — already built.
2. **Manifesto** — declarative, italic Cormorant, single column.
3. **Services teaser** — "El Índice", 4 chapter rows.
4. **Portfolio teaser** — 3 stories in asymmetric grid.
5. **Epilogue CTA** — single line + link, library-green-soft wash.
6. Footer (T11) — already built.

The order moves from interior (manifesto, philosophy) to evidence (portfolio) to invitation (epilogue). Don't reorder without rewriting the rationale.

### 2. Rhythm between sections (vertical gaps)

| Boundary | Gap | Rationale |
|---|---|---|
| Hero → Manifesto | `--space-32` (128px) desktop / `--space-24` mobile | Largest beat. The hero closes; the page begins. |
| Manifesto → Services | `--space-24` | Standard breath. |
| Services → Portfolio | `--space-32` | Second largest. From declaration to evidence. |
| Portfolio → Epilogue | `--space-24` | Standard. |
| Epilogue → Footer | `--space-24` | Standard. |

The two largest gaps frame the portfolio — the visual heart of the page sits in extra air.

### 3. Transition cues (visual / motion)

Between sections, cue the reader subtly. No section dividers (rules, separators) unless specified:
- **Hero → Manifesto:** the manifesto's ribbon-line (1px library-green, 80px wide, off-centre left) appears just before its text. This is the only horizontal line in the home page hierarchy.
- **Manifesto → Services:** no rule. The vertical rhythm + section heading "El Índice" carries the boundary.
- **Services → Portfolio:** no rule. The portfolio's first full-bleed image breaks the column structure visibly.
- **Portfolio → Epilogue:** the epilogue's library-green-soft wash signals "we're at the closing".
- **Epilogue → Footer:** the footer's top border (1px paper-deep) — first border on the page from above.

### 4. Visual weight per section

| Section | Weight | What carries it |
|---|---|---|
| Hero | High | Italic Cormorant, illustration |
| Manifesto | Medium | Italic Cormorant body, ribbon |
| Services teaser | Medium-low | Type structure (4 rows + Roman numerals) |
| Portfolio teaser | High | Three photographs, full-bleed top |
| Epilogue CTA | Medium-low | Library-green-soft wash |

The two "high" beats (hero + portfolio) sit at first-third and two-thirds of the page. The medium beats sit between, breathing.

### 5. Whitespace per section
- **Manifesto:** 60ch column centred, paper around it = ~50% empty viewport.
- **Services teaser:** 4 rows over ~40% of a viewport's height; ~50% empty.
- **Portfolio teaser:** the full-bleed top image consumes ~80% of its viewport; the 50/50 row below has captions in air.
- **Epilogue CTA:** 60% of its section is empty paper above + below the line.

### 6. Per-breakpoint adaptation (cite T07)

**Tablet:**
- Manifesto column drops to 56ch.
- Services rows: same structure, smaller --step-2 → --step-1 for titles.
- Portfolio: 50/50 + 50/50 (no full-bleed top — replaced by a single ~70%-wide image at top).
- Epilogue: same.

**Mobile:**
- Manifesto: full column at 32px outer padding; type drops one step.
- Services rows: 4 rows stacked, Roman numeral above title (not beside).
- Portfolio: every image stacks full-width, ~16:9 aspect.
- Epilogue: same, no green wash (drops to keep mobile quiet).

### 7. Section IDs (for anchor support)
- `#manifiesto`
- `#indice` (services teaser links here, full page is `/servicios`)
- `#historias` (teaser links here, full page is `/historias`)
- `#epilogo` (teaser links to full page `/epilogo`)

Each id has `scroll-margin-top: calc(72px + var(--space-12))` per T09.

### 8. Mireia placeholders inventory (every spot that needs copy / images)

| Section | Placeholder | Backlog ticket | Marker |
|---|---|---|---|
| Manifesto | 4 paragraphs of Latin | M01 | `<!-- M01 -->` |
| Services teaser | 4 dedicatorias (one line each) | M02 | `<!-- M02-1..4 -->` |
| Portfolio teaser | 3 case titles + images | M05 | `<!-- M05 -->` |

### 9. Open questions
- Should the manifesto link to a fuller "About" page? Decision: no. The Nota de la Autora (T27) carries longer-form. The home manifesto is a poster.
- Should the services teaser show body copy (the dedicatoria line) or just title + Roman numeral? Decision: include the dedicatoria — the page's job is to seduce into clicking through to /servicios.

## Deliverables
- `.claude/specs/T17-home-map.md` — the document above.

## Acceptance criteria
- T18–T22 can implement their sections without making composition decisions.
- Rhythm gaps documented in token names, not pixel values.
- Mobile composition described as its own stack.
- The "no" choices are documented (no rules between sections, no fuller about link, etc.).

## Notes
A magazine spread reads because someone decided the order. This task is that decision, made once, in writing.
