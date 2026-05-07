# T26 — Historias detail photography

**Kind:** photograph (per-case set; replaces the home teaser placeholder when the real case lands)
**Aspect:** 16:9 hero + 4–8 gallery images at 4:5, 1:1, 16:9 mixed
**Lands in:** `src/assets/historias/{slug}/{hero,gallery-1..n}.{webp,jpg}`
**Used by:** `src/pages/historias/[slug].astro` and the home portfolio teaser

## Brief

Each historia detail is a photo essay first. The hero photograph carries the case's single strongest image — the moment that says "this is what we did, and this is what it felt like." The gallery rounds out the story with details: a hand on a spine, a tipped page, a corner of the room, the back of a chair beside the lamp.

Cite [`T20-portfolio-direction.md`](T20-portfolio-direction.md) — same photographer, same grade, same eye. This MD only adds the detail-page-specific guidance.

## Direction

- The **hero** is the image you'd put on a magazine cover for this case. One frame, one decision.
- The **gallery** of 4–8 images alternates aspect ratios deliberately:
  - 1 hero (16:9)
  - 2–3 detail crops (4:5)
  - 1 environmental (16:9)
  - 1–2 textural still (1:1)
- **No before / after pair.** This is curaduría, not renovation.
- **No floor plans, mood-boards, swatch grids.** The case is photographed, not documented.

## Per-case overrides

Each case slug gets its own photo brief once Mireia signs on a final list. For the three lorem placeholders, reuse the home-teaser subject from [`T20-portfolio-direction.md`](T20-portfolio-direction.md):

- `_lorem-1` (Salón Marais) — open book on marble side table, plus 4–6 detail crops of the same room.
- `_lorem-2` (Sello Albariza) — hand-on-stack hero, plus a wider studio shot, a bound-book corner, a typeset proof on a felt slip.
- `_lorem-3` (Velada en La Latina) — empty chair beside a reading lamp at dusk, plus details of the table set and books arranged for guests.

## Anti-references

Same as T20-portfolio-direction.md. Add:

- No "before" image of the same room without the curatorial intervention. The page is not a transformation reel.
- No staged shot of the team — no faces, no hand-held cameras-in-mirror.
- No diagram, callout, or annotation overlaid on the photo.

## Output

- **Format:** WEBP + JPEG fallback per Astro `<Image>` widths array.
- **Filenames:** `hero.webp`, `gallery-1.webp` … `gallery-N.webp` per case folder.
- **Per-case folder:** `src/assets/historias/{slug}/`.
- **Budget:** ≤ 200KB per image at largest size. Per-page total ≤ 1.6MB across hero + gallery (relaxed from the 600KB home page budget because the detail page is image-led).

## Until rendered

The detail page uses `<PendingImage prompt="T26-historias-detail" aspect="16/9">` for the hero and gallery slots. Each placeholder carries the case label so the page composition is auditable while photographs are pending.
