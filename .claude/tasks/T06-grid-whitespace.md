# T06 — Grid & whitespace doctrine

**Skill:** `impeccable`
**Phase:** 0 — Doctrines
**Depends on:** T01, T03
**Blocks:** every composition task
**Mireia-blocked:** No
**Estimated commits:** 1

## Goal
Define how the page is divided and how it breathes. Without this doctrine, every page-task argues spacing from scratch.

## Scope

### Grid

**Desktop (≥ 1024px)**
- 12 columns. Max content width: 1440px.
- Outer padding: `--space-16` (64px).
- Gutter: `--space-6` (24px).
- Baseline: 8px (matches spacing scale).

**Tablet (768–1023px)**
- 8 columns.
- Outer padding: `--space-12` (48px).
- Gutter: `--space-4` (16px).

**Mobile (< 768px)**
- 4 columns.
- Outer padding: `--space-8` (32px).
- Gutter: `--space-3` (12px).

### Asymmetry rules
- Editorial layouts must not center every block. At least one block per viewport sits off-axis.
- Off-axis offset: typically 1 or 2 columns to one side (e.g. headline at cols 2–7 with content beneath at cols 2–5).
- Centered blocks reserved for: page titles, manifesto-like single-column reading, epilogue CTA.

### Vertical rhythm
- **Section gap (between major sections on a page):** minimum `--space-24` (96px) desktop, `--space-16` (64px) mobile.
- **Block gap (between sub-blocks within a section):** `--space-12` to `--space-16`.
- **Element gap (heading → body):** `--space-4` to `--space-6`.
- **Tight gap (paragraph → paragraph):** body's leading × 0.5, no extra margin (rely on leading).

### Whitespace doctrine
1. **The viewport is paper. The default is empty.** Every element placed must justify its presence.
2. **Whitespace is not absence — it is composition.** A 96px gap is a deliberate beat.
3. **At least 35% of any above-fold viewport must be empty paper** (no text, no image, no rule).
4. **The hero is the strictest:** target 60% empty.
5. **No element touches the viewport edge except intentional full-bleed images.** Use outer padding always.
6. **Letters between text blocks beat lines.** Use whitespace before adding rules / dividers.

### Breaking the grid (when allowed)
- Full-bleed photographs (portfolio, hero photo).
- Library-green-soft atmospheric wash (one per page max).
- Hero illustration when off-grid placement increases breathing space.
- Never break grid for type — type lives on the grid, always.

### Deliverables
- `src/styles/grid.css` (or merged into `global.css`) with grid utility classes:
  - `.container` (max-width, outer padding).
  - `.grid-12`, `.grid-8`, `.grid-4` for explicit grids.
  - Column-span utilities `.col-2-7`, `.col-9-11`, etc. — only those used by the design.
- `.claude/grid-whitespace.md` — this doc as standalone reference.
- Updated `.claude/design-system.md` (grid + whitespace section).
- Dev-only `src/pages/_dev/grid.astro` overlaying the grid for visual verification (deleted before T40).

## Acceptance criteria
- `impeccable` audit on later builds: composition tasks cite "cols X–Y at breakpoint Z" rather than ad-hoc layouts.
- Above-fold whitespace ratio ≥ 35% on every page (eyeballed; spot-check screenshots).
- Hero whitespace ratio ≥ 60%.
- Mobile compositions are not just downscaled desktops — see T07.

## Notes
Editorial design lives or dies by whitespace discipline. If a page feels "empty" to a stakeholder, the answer is almost never to fill it; it is to make the existing elements better.
