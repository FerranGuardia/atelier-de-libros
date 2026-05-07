# T30 — Illustration set (5 line drawings)

**Kind:** illustration (line art SVG, ×5)
**Aspect:** mostly landscape `0 0 1200 800`; the bookmark is portrait `0 0 600 1200`
**Lands in:** `src/assets/illustrations/{open-book,hand-page,shelf,bookmark,page-fold}.svg`
**Used by:** the per-page slots documented in [`illustration-system.md`](../illustration-system.md)

## House style — non-negotiable

**Every drawing in this set follows [`T13-hero.md`](T13-hero.md).** Same line weight (≈ 1.25px equivalent at the canvas size). Same library-green stroke (`#2D4033`) declared on the path so a CSS `currentColor` host can override. Same subtle ink-bleed at terminations only. Same negative-space ratio (≈ 80% empty). Same precise mid-line; no painterly variance.

The set must feel drawn by the same hand on the same afternoon. If a drawing reads as a different hand, it fails.

## Output (each)

- **Format:** SVG, vector, single `<path>` where possible.
- **ViewBox:** see per-drawing below.
- **Stroke:** `currentColor`, `stroke-linecap: round`, `stroke-linejoin: round`. **Stroke-width** baked at ≈ 2px on the listed viewBox sizes (renders as 1.25px when displayed at the site's default 280px width).
- **No fills, no shadows, no gradients.**
- **No `<style>` blocks, no inline width / height.** The host page sizes the SVG via CSS.
- **No metadata, no editor namespaces, no `id`s after SVGO.**
- **File size:** ≤ 4 KB after SVGO.

## The five drawings

### 1. `open-book.svg`

**ViewBox:** `0 0 1200 800`.
**Subject:** an open book lying flat, viewed from a soft three-quarter angle. Two pages curving up from the spine, the spine itself a simple line. No text on the pages.
**Composition:** subject occupies ≈ 40% of the canvas (book is wider than the hero's, but no airier in proportion), centred slightly low (≈ 55% down).
**Used in:** could replace the hero placeholder if the team prefers a flat-open variant; otherwise reserved for future use.

### 2. `hand-page.svg`

**ViewBox:** `0 0 1200 800`.
**Subject:** a single hand, drawn from above, with two fingers gently turning the corner of a single page. Just the hand and the page corner — no arm, no surface beneath.
**Composition:** hand occupies ≈ 25% of the canvas, off-centre right (≈ 60% across).
**Used in:** future "Servicios" detail or as a Servicios chapter accent if the page evolves.

### 3. `shelf.svg`

**ViewBox:** `0 0 1200 800`.
**Subject:** three or four books standing on a shelf line; the shelf is a single horizontal stroke under them. The books vary slightly in height; one leans. No spine details (no titles, no banding).
**Composition:** the shelf line lies at ≈ 70% down the canvas; books occupy the centre third horizontally.
**Used in:** future use — possibly the "Estudio" footer block if it surfaces a visual cue.

### 4. `bookmark.svg`

**ViewBox:** `0 0 600 1200` (portrait).
**Subject:** a tasselled bookmark dangling vertically. Two strokes for the body of the ribbon, a small tassel at the bottom (≈ 6 short stems).
**Composition:** ribbon centred, occupies ≈ 30% width, 80% height.
**Used in:** beside the Publishers' Room pull-quote.

### 5. `page-fold.svg`

**ViewBox:** `0 0 1200 800`.
**Subject:** a single rectangular page with a corner folded down (dog-eared), seen flat from above. Just the page outline + the fold line + a tiny crease shadow indicated by a single short line.
**Composition:** page occupies ≈ 35% of the canvas, off-centre left (≈ 35% across, 50% down).
**Used in:** above the drop-cap on `/nota`, beside the signature, or as a future generic ornament.

## Anti-references

- No bookshop sign-painting bookcase clichés (with a leaf, a cup of tea, a pair of glasses on top).
- No "drawn with a paintbrush" wobble. The line is precise.
- No second colour anywhere. Library-green only.
- No fills, no shadows, no perspective grids, no decorative serifs on the strokes.
- No watermarks, signatures, or "made by AI" giveaways.

## Until rendered

Pages that have an illustration slot use `<Illustration slug="<name>" />` (T31 component). Until each SVG lands, the component renders a `<PendingImage>` with the matching prompt slug.
