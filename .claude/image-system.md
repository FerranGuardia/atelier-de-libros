# Image system

> Output of T08. How images live in this project: taxonomy, treatment, optimisation, and — until generation lands — the **prompt-only placeholder workflow** Ferran asked for.

## Taxonomy (4 kinds, no others)

1. **Line illustrations (SVG)** — the house style. Library-green stroke on paper. T13 hero + T29 — T31 set.
2. **Atmospheric photographs** — portfolio cases, nota portrait, occasional manifesto teaser. Side-light, warm-desaturated, hand/detail crops.
3. **Texture overlay** — paper grain (T03). One only, site-wide.
4. **Functional graphics** — OG image (T37), favicon. Designed inline with the brand, not borrowed.

## Sourcing (current decision)

| Kind | Source | Until source delivers |
|---|---|---|
| Line SVG | ChatGPT prompt in `.claude/image-prompts/T<id>-<slug>.md` | `<PendingImage illustration />` placeholder |
| Photograph | Photographer brief in `.claude/image-prompts/T<id>-<slug>.md` (Mireia or her photographer) | `<PendingImage />` placeholder |
| Texture | Inline procedural SVG noise (T03) | n/a |
| OG / favicon | Generated programmatically (T37) | Solid paper + wordmark text fallback |

**No stock photography. No Unsplash.** This decision overrides the original T08 spec — Ferran wants the site to ship with deliberate-empty placeholders and prompts, not generic stand-ins.

## Treatment rules

### Photographs

- Colour grade: warm-desaturated (saturation 80 — 90%, slight warm shift).
- Contrast: medium-low. No crushed blacks; ink-deepest goes to ≈ #2A2A2A, not pure ink.
- Grain: visible but **from the photograph itself** — not a digital overlay.
- Crop preference: **details over wides.** Hand-on-book over a whole-library shot.
- No faces unless a hand-in-frame is the focal point.
- Aspect ratios in use: **16:9** (hero), **4:5** (portrait / detail), **1:1** (square). No others.

### SVG illustrations

- Always **inline**, not `<img>` — `currentColor` for tint control.
- Single stroke weight ≈ 1.25px.
- No fills. No shadows. No gradients. No perspective shading.
- Edge ink-bleed at terminations only — subtle, not painterly.
- **One illustration per scroll-screen** maximum.

## Placement principles

1. **Photographs anchor; illustrations punctuate.** A photograph grounds a section as evidence; an illustration breathes a section as ornament.
2. **Off-grid for photographs** — full-bleed allowed. **On-grid for illustrations** — they sit in a column.
3. **Captions are typography, not overlays.** Caption sits below in `.t-caption`, ink-soft.
4. **No image without intent.** If a section "needs" an image to feel complete, it usually needs better typography first.

## Optimisation (mandatory once real assets land)

- Every photograph through Astro's `astro:assets` `<Image>` or `<Picture>` with `widths` array and `formats={['avif','webp']}`.
- Explicit `width` + `height` on every image to prevent CLS.
- LCP image preloaded via `<link rel="preload" as="image">`.
- Below-the-fold: `loading="lazy" decoding="async"`.
- Blur-up placeholder on every photographic asset.
- **Per-image budget: 200KB at largest size.** Per-page total: 600KB.

## Prompt-only placeholder workflow

1. **Build authors the slot** with the `<PendingImage>` component:

   ```astro
   <PendingImage
     prompt="T13-hero"
     aspect="9/16"
     illustration
     label="Estanteria, lomo abierto"
     hint="Cormorant italic-leaning composition, tinta verde biblioteca"
   />
   ```

2. **Build authors the prompt MD** at `.claude/image-prompts/T<id>-<slug>.md` (template below). The PendingImage `prompt` prop matches the file slug.

3. **Ferran (or Mireia) renders externally** — ChatGPT / Midjourney / photographer — and drops the file into `src/assets/illustrations/<slug>.svg` or `src/assets/<bucket>/<slug>.{webp,jpg}`.

4. **Build replaces** `<PendingImage>` with `<Image>` / inline SVG. The compile-time grep `<PendingImage` enumerates every remaining slot.

The site **never blocks on a missing image**: every page renders with deliberate-empty placeholders that read as composition decisions, not as broken state.

### Prompt MD template

```md
# T<id> — <slug>

**Kind:** illustration | photograph
**Aspect:** 16/9 | 4/5 | 1/1 | other
**Lands in:** src/assets/<path>
**Used by:** <component or page>

## Brief
<one paragraph: what the image carries, what it must not become>

## Direction
- composition / framing
- lighting / treatment
- crop preferences
- references (external URLs, mood-boards)

## Anti-references
- what this image must NOT look like

## Output
- format (SVG / WEBP / AVIF + JPEG fallback)
- maximum dimension
- file naming
```

## Image directory layout (final)

```
src/assets/
  illustrations/
    hero.svg
    open-book.svg
    hand-page.svg
    shelf.svg
    bookmark.svg
    page-fold.svg
    signature.svg
  historias/
    {slug}/
      hero.{webp,jpg}
      gallery-1.{webp,jpg} …
  portrait/
    mireia.{webp,jpg}

public/
  og-default.png
  favicon.svg
  fonts/
```

Empty directories get `.gitkeep` until populated.

## Audit lens

`impeccable` on every page-task touching images. Three checks:

1. **No raw `<img>`.** Either `<Image>` (real asset) or `<PendingImage>` (slot + prompt).
2. **Aspect ratios are 16:9, 4:5, or 1:1.** No others.
3. **One illustration per scroll-screen.** No exceptions.

## Index of prompts

Authored at `.claude/image-prompts/`:

- `T13-hero.md` — hero illustration prompt (drafted in T13).
- `T20-portfolio-direction.md` — photographer brief for portfolio teaser (drafted in T20).
- `T26-historias-detail.md` — per-case photographer brief (drafted in T26).
- `T30-illustration-set.md` — five additional line illustrations (drafted in T30).
- `T37-og-image.md` — OG / share-card design brief (drafted in T37).
- `M04-portrait.md` — Mireia portrait brief (drafted alongside T27).

Each prompt is a self-contained MD that the external creator can read, follow, and produce against without context from this conversation.
