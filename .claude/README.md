# Atelier de Libros — Claude project manifest

Boutique literary styling agency. Editorial minimalist with soul.

## Skill set governing this project (the anti-AI-slop pack)

This project is governed by a small, deliberate set of skills:

- **`frontend-design:frontend-design`** — build distinctive components/pages that avoid generic AI aesthetics.
- **`impeccable`** — design critique, audit, polish, visual language, motion language. Also drafts ChatGPT image prompts.
- **`simplify`** — post-implementation code review.
- **`commit-commands:commit`** — one task = one commit (per global rules).

Auxiliary: **`plain-talk`** for any communication framed around the data pipeline.

Every task file declares which skill governs it. Do not deviate.

## Workflow

Use `/task <id>` (defined in `.claude/commands/task.md`) — it reads the task .md, dispatches to the listed skill(s) with full context, runs `simplify`, commits, and updates the index. **Direct skill invocation without a task file is a workflow violation.**

Manual flow (if for some reason `/task` isn't available):
1. Pick the next ☐ task in `tasks/00-INDEX.md`.
2. Read the entire task file.
3. Invoke the skill named in its `Skill:` field, passing the task spec.
4. Produce the listed deliverables. Satisfy acceptance criteria.
5. Run `simplify` if code changed.
6. End with `commit-commands:commit` (one task = one commit).
7. Mark the task ☑ in `tasks/00-INDEX.md`.

## Inputs (canonical references)

- `briefing-web.md` (repo root) — the client briefing.
- `.claude/visual-language.md` — produced by **T01**. Once written, it is the spine. Every visual decision cites it.
- `.claude/design-system.md` — produced by **T03**. Token reference.

## Image policy

No images are pre-generated. When a task needs one:

1. The executing agent (governed by `impeccable`) drafts a ChatGPT prompt and saves it to `.claude/image-prompts/T<id>-<name>.md`.
2. Ferran runs the prompt in ChatGPT, downloads the result, drops it in `public/` or `src/assets/`.
3. Until then, the task uses a documented placeholder (Unsplash search term or Lorem Picsum). **Never block on the image.**

Format for prompt files: see `.claude/image-prompts/README.md`.

## Mireia-blocked tasks

Filler text comes from Mireia. Tasks waiting on her copy live in `tasks-mireia/`. Do not touch those tasks unless Mireia has delivered. Build pages with placeholder text marked `<!-- M0X -->`.

## Tech stack (locked)

- **Astro** (static, MDX, View Transitions, `astro:assets`).
- **TypeScript**, strict.
- **No backend.** Form via Formspree (provisioned in T15).
- **Hosting:** Cloudflare Pages (primary).
- **Vanilla CSS** with custom properties. No Tailwind — editorial control demands hand-tuned typography that fights against utility CSS.

## Cadence

One task = one commit. No PRs unless Ferran asks.
