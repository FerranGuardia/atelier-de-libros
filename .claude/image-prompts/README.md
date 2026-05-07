# Image prompts

External image briefs. Each MD here is self-contained — its reader (ChatGPT, Midjourney, a photographer) does not need any other project context to execute it.

## Workflow

1. Build agent authors a `<PendingImage prompt="<slug>">` in the page composition.
2. Same agent authors `<slug>.md` here using the prompt template in [`../image-system.md`](../image-system.md).
3. Ferran or the named creator renders the asset externally — ChatGPT, Midjourney, photographer.
4. The asset lands at the path declared in the MD's "Lands in" field (under `src/assets/` or `public/`).
5. Build replaces `<PendingImage />` with `<Image>` (real photograph) or inline SVG (illustration).

The grep target `<PendingImage` site-wide enumerates outstanding slots. The grep target `Lands in:` here enumerates target paths.

## Naming

- `T<task-id>-<short-slug>.md` — build-task-driven prompts (`T13-hero.md`, `T30-illustration-set.md`).
- `M<id>-<short-slug>.md` — Mireia-blocked prompts (`M04-portrait.md`).

The slug used in `<PendingImage prompt="…">` matches the filename without `.md`.

## Each prompt file structure

Use the template from [`../image-system.md`](../image-system.md):

- `**Kind:**` — illustration | photograph
- `**Aspect:**` — 16/9 | 4/5 | 1/1
- `**Lands in:**` — target asset path
- `**Used by:**` — component or page
- `## Brief` — one paragraph, what the image carries
- `## Direction` — composition, lighting, crop, references
- `## Anti-references` — what this must NOT look like
- `## Output` — format, max dimension, file naming

## House style (canonical)

Every illustration prompt cites the hero (`T13-hero.md`) as the reference for line weight, posture, and edge — the illustration set must feel drawn by one person. Photograph prompts cite the *visual-language.md* §6 photography rules: side-light, warm-desaturated, hand/detail crops, no faces unless hand-in-frame is the focal point.
