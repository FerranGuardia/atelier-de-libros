# M04 — Portrait of Mireia (founder)

**Kind:** photograph (single, anchors the Nota page)
**Aspect:** 4:5 (portrait)
**Lands in:** `src/assets/portrait/mireia.{webp,jpg}`
**Used by:** `src/components/pages/NotaPage.astro`

## Brief

A single photograph of Mireia at the studio, used once on `/nota`. The portrait reads as the author's voice — present but not performed. The image registers as quiet, considered, and a little reserved, in the same register as the manifesto's italic Cormorant.

This is **not** a corporate headshot. **Not** an Instagram founder portrait with crossed arms in front of a brand wall. It is the photographer answering the question *"how does this person sit when they read?"*

## Direction

- **Aspect:** 4:5 portrait. Subject occupies ≈ 60% of the frame; ≈ 40% is air.
- **Light:** side-light from one window. Late morning preferred.
- **Pose:** seated, three-quarter turn, looking off-frame or toward the light — **not at camera**. Hands present somewhere in the frame (resting on a book, on the chair arm, holding a teacup). Hands carry the literacy.
- **Wardrobe:** earth tones (linen ivory, loden, charcoal). No logos. No statement jewellery.
- **Setting:** the studio or a nearby library / domestic interior. Books visible but **not stacked theatrically** on the desk for the shot.
- **Grade:** matches [`T20-portfolio-direction.md`](T20-portfolio-direction.md) — warm-desaturated, no crushed blacks (≈ #2A2A2A floor), grain from the photograph itself.

## Anti-references

- No corporate headshot crossed-arms-in-front-of-brand-wall.
- No "founder Instagram" warm-light selfie with a coffee cup.
- No wide environmental shot where the person is small in the frame — the page wants the face and hands legible.
- No retouched-to-glass skin. Texture stays.
- No black-and-white version unless the colour version fails for a specific reason; default colour with the agreed grade.

## Output

- **Format:** WEBP + JPEG fallback per Astro `<Image>` widths.
- **Sizes:** 480, 768, 1024, 1280 widths (4:5 max ≈ 1280 × 1600).
- **Filename:** `mireia.webp`, `mireia.jpg`.
- **Per-page budget:** ≤ 200KB at the largest size after WEBP encode.
- **EXIF scrubbed.**

## Until rendered

The Nota page uses `<PendingImage prompt="M04-portrait" aspect="4/5">`. The HTML carries `<!-- M04-portrait PENDING -->` adjacent so a grep enumerates the slot.

## House style reference

Cites [`T20-portfolio-direction.md`](T20-portfolio-direction.md) for grade and texture. Composition aspect change documented above.
