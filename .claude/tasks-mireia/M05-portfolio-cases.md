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

**Hasta que Mireia entregue:** dos o tres casos placeholder en `src/content/historias/_lorem-{1,2,3}.mdx` con lorem ipsum (250–500 words) y figuras grises (`src/assets/historias/_lorem-N/placeholder-{1..n}.svg`). Cada caso lorem se marca con `<!-- M05 LOREM -->` en el frontmatter. La rejilla del portfolio se monta y audita con estos.

**Lock criteria:** Mireia signs off each case individually. Cases roll out as they're ready.
**On arrival:** delete the corresponding `_lorem-N.mdx` and its `_lorem-N/` image folder; replace `<!-- M05 LOREM -->` markers in `src/pages/index.astro` (PortfolioTeaser) by linking to the new real case.
