# T02 — Astro project init + base config

**Skill:** `frontend-design:frontend-design`
**Phase:** 0 — Doctrines
**Depends on:** T01
**Blocks:** T03 onwards
**Mireia-blocked:** No
**Estimated commits:** 1

## Goal
Initialise Astro + TS at the repo root with the integrations the editorial language needs.

## Scope

1. `git init`. The directory is not a repo yet.
2. `npm create astro@latest .` — minimal template, TS strict, no UI framework.
3. Integrations to add:
   - `@astrojs/mdx` — manifesto, services, author bio land here.
   - `@astrojs/sitemap`.
4. `astro.config.mjs`:
   - `site` — placeholder URL.
   - `prefetch: { defaultStrategy: 'viewport' }`.
   - `image.service` → Sharp.
5. `tsconfig.json` strict; include `astro/client`.
6. `.editorconfig`, `.prettierrc` (single quotes, no semicolons, 2-space).
7. `.gitignore` — `node_modules`, `dist`, `.astro`, `.env*`.
8. Project-root `README.md` — 5 lines, points to `.claude/README.md`.

## Folder structure
```
src/
  layouts/
  components/
  components/sections/
  pages/
  content/
  styles/
  assets/illustrations/
public/
  fonts/
```

## Deliverables
- `npm run dev` opens a blank page on the future paper background.
- `npm run build` succeeds with zero warnings.
- All folders exist (`.gitkeep` where empty).

## Acceptance criteria
- Lighthouse on the empty default page ≥ 95.
- TS strict; build typechecks cleanly.
- Zero backend dependency added.

## Notes
**No Tailwind.** Vanilla CSS + custom properties (T03–T05). The control this brief demands is harder under utility CSS.
