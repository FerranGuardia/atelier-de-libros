# T17 — Home composition map

> The shape of the home below the hero. T18 — T22 implement against this map.

## 1. Section order (final)

1. **Hero** (T15) — already built.
2. **Manifesto** (T18) — declarative, italic Cormorant body, single column.
3. **Services teaser** (T19) — *El Índice*, 4 chapter rows.
4. **Portfolio teaser** (T20) — 3 historias in an asymmetric grid.
5. **Epilogue CTA** (T21) — single line + link, library-green-soft wash.
6. **Footer** (T11) — already built.

The order moves from interior (manifesto, philosophy) → evidence (portfolio) → invitation (epilogue). Don't reorder without rewriting the rationale.

## 2. Rhythm between sections

| Boundary | Gap | Rationale |
|---|---|---|
| Hero → Manifesto | `--space-32` desktop / `--space-24` mobile | Largest beat. The hero closes; the page begins again. |
| Manifesto → Services | `--space-24` | Standard breath. |
| Services → Portfolio | `--space-32` | Second largest. From declaration to evidence. |
| Portfolio → Epilogue | `--space-24` | Standard. |
| Epilogue → Footer | `--space-24` | Standard. |

The two largest gaps frame the portfolio — the visual heart sits in extra air.

## 3. Transition cues

No section dividers (rules, separators) unless specified. Cues are typographic / atmospheric:

- **Hero → Manifesto:** the manifesto's ribbon-line (1px library-green, 80px wide, off-centre left) appears just before its text. The only horizontal line in the home page hierarchy.
- **Manifesto → Services:** no rule. The vertical rhythm + section heading carries the boundary.
- **Services → Portfolio:** no rule. The portfolio's first photograph (full-bleed at desktop) breaks the column structure visibly.
- **Portfolio → Epilogue:** the epilogue's library-green-soft wash signals "the closing".
- **Epilogue → Footer:** the footer's top border (1px paper-deep) — first border on the page from above.

## 4. Visual weight per section

| Section | Weight | What carries it |
|---|---|---|
| Hero | High | Italic Cormorant `--step-5`, illustration |
| Manifesto | Medium | Italic Cormorant body, ribbon |
| Services teaser | Medium-low | Type structure (4 rows + Roman numerals) |
| Portfolio teaser | High | Three photographs, full-bleed top |
| Epilogue CTA | Medium-low | Library-green-soft wash |

The two "high" beats sit at first-third and two-thirds of the page. The medium beats sit between, breathing.

## 5. Whitespace targets

| Section | Target |
|---|---|
| Manifesto | 60ch column centred → ≈ 50% empty viewport |
| Services teaser | 4 rows over ≈ 40% of a viewport's height → ≈ 50% empty |
| Portfolio teaser | full-bleed top consumes ≈ 80% of its viewport; 50/50 row below has captions in air |
| Epilogue CTA | 60% empty paper above + below the line |

## 6. Per-breakpoint adaptation

### Tablet
- Manifesto column drops to 56ch.
- Services rows: same structure, titles step down `--step-2` → `--step-1`.
- Portfolio: 50/50 + 50/50 (no full-bleed top — replaced by a single ≈ 70%-wide image at top).
- Epilogue: same.

### Mobile
- Manifesto: full column at 32px outer padding; type drops one step.
- Services rows: 4 rows stacked, Roman numeral above title (not beside).
- Portfolio: every image stacks full-width, ≈ 16:9 aspect.
- Epilogue: same; **green wash drops** to keep mobile quiet.

## 7. Section IDs

Each gets `scroll-margin-top` from a11y.css for sticky-header offset.

| Section | id | Anchor link from |
|---|---|---|
| Manifesto | `#manifiesto` | header nav |
| Services teaser | `#indice` | (services link goes to `/servicios`, but in-page `#indice` exists for completeness) |
| Portfolio teaser | `#historias` | (link goes to `/historias` page) |
| Epilogue CTA | `#epilogo` | (CTA links to `/epilogo` page) |

## 8. Mireia placeholders inventory

| Section | Marker | Source | Backlog |
|---|---|---|---|
| Manifesto | `<!-- M01 DRAFT -->` | 4 axiomas in `es.ts home.manifesto.axiom_{1..4}` (Mireia draft, lives on the page until sign-off) | M01 |
| Services teaser | `<!-- M02 LOREM -->` per chapter | dedicatorias + body in `es.ts servicios.items.*` (lorem-marked) | M02 |
| Portfolio teaser | `<!-- M05 LOREM -->` per case | 3 lorem cases in `es.ts historias.cases.lorem_{1..3}` | M05 |

## 9. Resolved questions

- **Manifesto links to a fuller "About" page?** No. The Nota de la Autora (T27) carries longer-form. The home manifesto is a poster.
- **Services teaser shows body or just Roman numeral + title?** Includes the dedicatoria (one line per chapter). The page's job is to seduce into clicking through to /servicios.
- **Portfolio teaser case order?** Fixed: lorem-1 (biblioteca privada) → lorem-2 (identidad editorial) → lorem-3 (salón de autora). Variety of typology.

## 10. The "no" list (home as a whole)

- No testimonials section.
- No "trusted by" logo strip.
- No newsletter sign-up modal.
- No second hero pattern halfway down ("you've scrolled, here's another announcement").
- No statistics / counters.
- No FAQ accordion.
- No "process" diagram.
- No quote slider / carousel.

Each absence is doctrine, not omission.
