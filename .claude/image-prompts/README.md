# Image prompts

This directory holds ChatGPT prompts drafted by executing agents when a task requires an image.

## Workflow

1. The task's executing agent (governed by `impeccable`) drafts a prompt here.
2. Ferran copies the prompt into ChatGPT (or another generator), downloads the result, places it under `public/` or `src/assets/`.
3. The corresponding component is updated to point at the real asset, replacing the placeholder.

## Naming
`T<task-id>-<short-name>.md` — e.g. `T05-hero.md`, `T12-open-book.md`.

## Each prompt file structure
- `## Subject` — what it depicts.
- `## Treatment` — line, color, fill, edge.
- `## Composition` — framing, negative space.
- `## Output spec` — format, dimensions, transparency.
- `## Don't` — what to avoid.
- `## House style reference` — link to T05 prompt or `.claude/visual-language.md`.

## House style (canonical)
Once T05 is done, every illustration prompt cites that hero prompt as the canonical reference for hand, line, and posture. The illustration set must feel drawn by one person.
