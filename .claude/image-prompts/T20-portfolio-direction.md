# T20 — Portfolio teaser photography direction

**Kind:** photograph (3 case images for the home teaser; same brief reused per-case for the historias detail pages — T26)
**Aspect:** 16:9 (full-bleed top + 50/50 row at desktop; stacked 16:9 at mobile)
**Lands in:** `src/assets/historias/{slug}/hero.{webp,jpg}` per case
**Used by:** `src/components/sections/PortfolioTeaser.astro` and historia detail pages (T26)

## Brief

Three photographs that anchor the home page's portfolio teaser. Each photograph is **evidence** of the studio's work — a curated library, a designed identity setting, a salón evening. The photographs read as found details, not staged compositions. They never include faces unless a hand-in-frame is the focal point.

The three together must feel like a coherent series: same photographer, same grading, same eye.

## Direction

### Light

- **Side-light always.** Natural daylight off-axis; never flat overhead.
- Time of day: late morning or late afternoon. Never midday, never night with artificial fill.
- Shadow side reads warm-grey (≈ #4A463E), not black.

### Colour grade

- **Warm-desaturated.** Saturation 80–90% of natural; overall warmth +5 mireds (a hint, not a tan).
- Highlights protected — paper textures must not blow out.
- Deepest blacks ≈ #2A2A2A. **No crushed pure black.** Pure black on the paper background reads as cheap.

### Composition

- **Detail crops, not wides.** Hand on a book spine beats a whole-library shot. A folded page corner beats a desk-from-above.
- Aspect 16:9 (landscape). The frame's golden-mean point holds the subject; ≈ 60% of the frame is air or texture.
- No lens distortion (no 24mm wide angles on a still life).
- Vertical lines stay vertical — fix any keystone in post.

### Texture

- Surface texture (paper, linen, wood, ink) is the photograph's voice. Make it visible.
- Grain is from the photograph itself, not a digital overlay.

### Subjects (one per case)

| Case slug | Subject | Mood |
|---|---|---|
| `_lorem-1` (Salón Marais) | Detail of an open book on a marble side table beside a tasselled bookmark | Calm, almost domestic |
| `_lorem-2` (Sello Albariza) | A hand setting a stack of identity-printed books onto a felt slip | Working, in the moment |
| `_lorem-3` (Velada en La Latina) | An empty chair beside a small reading lamp in a salón just before guests arrive | Anticipatory, quiet |

These match the lorem cases in `src/i18n/locales/es.ts historias.cases.lorem_*`. When real cases land via M05, override per-case with new subject prompts as the brief evolves.

## Anti-references

- No Instagram-influencer flat-lay (book + coffee + plant top-down).
- No model with a book opened in their lap (we do not show faces).
- No hands lit theatrically with rim-light (no studio melodrama).
- No high-contrast B&W — this is colour, restrained.
- No vignette in post.
- No filter that reads as a preset (Mastin Labs, VSCO A6, etc.). The grade is custom.
- No Hest-Properties steel-grey palette — the photographs carry warmth.

## Output

- **Format:** WEBP for delivery + JPEG fallback.
- **Sizes (per case, via Astro `<Image>`):** 480, 768, 1024, 1440, 1920, 2400 widths.
- **Largest dimension:** 2400px on the long edge.
- **File budget:** ≤ 200KB at the largest size after WEBP encode (Astro's sharp config handles).
- **Filename:** `hero.webp`, `hero.jpg` per case folder.
- **Per-case folder:** `src/assets/historias/{slug}/`.
- **EXIF:** scrubbed.
- **No watermark, no border, no caption baked into the image.** Captions live in markup.

## Until rendered

The build uses `<PendingImage prompt="T20-portfolio-direction" aspect="16/9">` per slot. Each placeholder declares its case label so the page reads as composition while photographs are pending.

## House style reference

This brief is the canonical reference for **every photograph the site ships** (home teaser, historias detail, future M04 portrait — though portrait gets its own variant at 4:5). T26 detail pages cite this MD; M04 portrait cites it with the aspect change noted.
