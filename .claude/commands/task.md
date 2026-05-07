---
description: Dispatch a project task — reads .claude/tasks/T<id>-*.md and invokes the listed skill with full context.
---

# /task

Project task dispatcher. Usage:

- `/task T05` → execute task T05.
- `/task` (no argument) → list open tasks and recommend the next one.
- `/task list` → same as no argument.

## When invoked with a task id (e.g. T05)

1. **Locate the task file.** Use a glob: `.claude/tasks/T05-*.md` (one file matches). If zero or multiple matches, abort and tell the user.
2. **Read the entire task file.** Do not summarise — load all of it.
3. **Verify dependencies.** Check the task's `Depends on:` field against `tasks/00-INDEX.md` status legend. If a dependency is not ☑ done, abort and tell the user which task to do first. Exception: the user may pass `--force` to override.
4. **Verify Mireia-blocked status.** If the task is fully Mireia-blocked, abort. If partial, proceed and remind the user that Mireia placeholders will be inserted.
5. **Mark in progress.** Update `tasks/00-INDEX.md` to flip ☐ → ◐ for this task.
6. **Invoke the skill(s).** Read the `Skill:` field of the task file:
   - Single skill (e.g. `frontend-design:frontend-design`) → invoke it once via the Skill tool. Pass as args the entire task file content, prefixed with: `"Execute task T<id>. Deliverables and acceptance criteria are non-negotiable. Task spec follows:\n\n"`.
   - Sequence (e.g. `impeccable → frontend-design`) → invoke in listed order. After the first skill returns, invoke the next, passing the prior output plus the original task spec.
   - Combination (e.g. `frontend-design + impeccable`) → invoke `frontend-design` for build, then `impeccable` for audit, fixing any audit findings before closing.
7. **Image prompts.** If the task lists "Image needs", confirm the executing skill has drafted the corresponding `.claude/image-prompts/T<id>-*.md` file(s). If not, prompt the user / re-invoke `impeccable` to draft them.
8. **Code review.** If the task touched code, invoke `simplify` over the changed files.
9. **Commit.** Invoke `commit-commands:commit` with a message in this shape: `T<id>: <task title> — <one-line summary>`.
10. **Mark done.** Update `tasks/00-INDEX.md`: ◐ → ☑ for this task.

## When invoked without an argument (or with `list`)

1. Read `tasks/00-INDEX.md`.
2. Print the open (☐) tasks grouped by phase, with their `Skill:` and dependency status.
3. Recommend the next task: the first ☐ whose dependencies are all ☑.
4. If a task is in progress (◐), flag it and recommend resuming.

## Hard rules

- **Never invoke a project skill without reading the task file first.** This command exists to enforce that.
- **Do not invent task ids.** If the user types `/task T99` and no file matches, abort.
- **Do not skip the commit step** unless the task is non-code (e.g. T01 visual-language doc still commits the .md).
- **Do not edit `tasks/00-INDEX.md` status fields silently** — keep the legend honest.

## Example

```
User: /task T05
Claude: [reads .claude/tasks/T05-hero.md, verifies T03 + T04 are ☑]
       [marks T05 ◐ in INDEX]
       [invokes /impeccable with task spec → produces .claude/image-prompts/T05-hero.md]
       [invokes /frontend-design:frontend-design with task spec + prompt context → builds Hero.astro]
       [invokes /simplify over changed files]
       [invokes /commit-commands:commit with "T05: Hero Página en blanco — SVG prompt + component"]
       [marks T05 ☑ in INDEX]
```
