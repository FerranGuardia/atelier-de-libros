# M05 — Portfolio real cases

**Status:** ⏸ Blocked — awaiting Mireia.

## Items needed per case

For each "historia":
- `title`, `subtitle`, `year`, `location`, `role`.
- Hero image (16:9, ≥ 2400px wide).
- Gallery: 4–8 images. Aspect ratios mixed: 4:5, 1:1, 16:9.
- Body text in MDX: 250–500 words, Spanish, first-person plural. Closing italic line (≤ 30 words).

## Photography direction
See `.claude/image-prompts/T09-photography.md` (drafted in T09). Mireia or her photographer should follow that brief.

## Lands in
- `src/content/historias/{slug}.mdx`.
- Images: `src/assets/historias/{slug}/`.

**Lock criteria:** Mireia signs off each case individually. Cases roll out as they're ready.
**On arrival:** delete the placeholder MDX file with the same slot number; replace `<!-- M05 -->` markers in `src/pages/index.astro` (PortfolioTeaser).
