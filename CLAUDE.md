# Atelier de Libros — project rules

Boutique literary styling agency. Astro + TS, vanilla CSS, no backend.

## Always

- **Read the task file before invoking any skill.** The task .md in `.claude/tasks/` declares the skill, the deliverables, and the acceptance criteria. Skipping it is a workflow violation.
- **Use `/task <id>` to dispatch work** (e.g. `/task T05`). Direct skill invocation without a task is reserved for ad-hoc questions, not scheduled work.
- **Mireia-blocked copy is never invented.** Placeholders only, HTML-commented `<!-- M0X -->`, matching a backlog ticket in `.claude/tasks-mireia/`.
- **One task = one commit.** Per Ferran's global rules.

## The skill set governing this project

| Skill | Use |
|---|---|
| `frontend-design:frontend-design` | Build distinctive components / pages (anti-AI-slop). |
| `impeccable` | Visual language, design audit, motion direction, drafting ChatGPT image prompts. |
| `simplify` | Code review after every build task. |
| `commit-commands:commit` | Close each task with one commit. |

Auxiliary: `plain-talk` for any pipeline-shaped communication.

## Where things live

- `briefing-web.md` — client briefing (canonical).
- `.claude/README.md` — project manifest.
- `.claude/visual-language.md` — produced by T01. Once written, the spine. Cited by every visual task.
- `.claude/tasks/00-INDEX.md` — task index with status.
- `.claude/tasks/T*-*.md` — task specs.
- `.claude/tasks-mireia/M*-*.md` — copy backlog (frozen until Mireia delivers).
- `.claude/image-prompts/T*-*.md` — ChatGPT prompts drafted by executing agents on demand.
- `.claude/audits/` — audit logs from T13 / T14.
- `.claude/commands/task.md` — `/task` dispatcher.

## Hard visual rules

- Library-green ≤ 8% of viewport. Ink for text only. Background = paper, always.
- One easing curve site-wide: `cubic-bezier(.2, .6, .2, 1)`.
- One base duration: 700ms (300ms only for micro-interactions).
- No bouncy / elastic motion. No carousels. No popups. No scroll-jacking.
- No Tailwind. Vanilla CSS with custom properties.
- Display: Cormorant Garamond. Body: Inter. Self-hosted, latin subset.

## Tone

The site whispers. Never weeps. GRIS provides the grammar; Nemeri provides the volume.
