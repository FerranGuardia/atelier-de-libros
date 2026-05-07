# T03 — Design tokens (colors, spacing)

**Skill:** `frontend-design:frontend-design` (build) + `impeccable` (review)
**Phase:** 0 — Doctrines
**Depends on:** T01, T02
**Blocks:** T04, T05, every page task
**Mireia-blocked:** No
**Estimated commits:** 1

## Goal
Establish the foundational tokens — color and spacing only. Typography (T04) and motion (T05) live in their own files.

## Scope

### Color (`src/styles/tokens.css`)
```css
:root {
  --paper:              #F5F5F0;
  --paper-deep:         #EDEDE6; /* dividers without strokes */
  --ink:                #1A1A1A;
  --ink-soft:           rgba(26,26,26,0.6);
  --ink-whisper:        rgba(26,26,26,0.32);
  --library-green:      #2D4033;
  --library-green-soft: rgba(45,64,51,0.08);
}
```

### Color rules (cite in comments)
- Library-green ≤ 8% of viewport. Use library-green-soft for atmospheric washes only (one per page max).
- Ink for text. Background = paper, always.
- Ink-soft for secondary text only at body size or larger; never on display type.
- Ink-whisper for tertiary text (footer fine print, captions).

### Spacing scale
```css
:root {
  --space-1:  4px;
  --space-2:  8px;
  --space-3:  12px;
  --space-4:  16px;
  --space-6:  24px;
  --space-8:  32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;
  --space-48: 192px;
}
```

### Spacing rules
- Vertical rhythm between sections: minimum `--space-24` desktop, `--space-16` mobile.
- Component-internal gaps: `--space-3` to `--space-8`.
- Generous, never cramped — when in doubt, add one step up.

### Reset + global (`src/styles/global.css`)
- Modern minimal reset (Andy Bell style).
- `body { background: var(--paper); color: var(--ink); }`.
- Imports `tokens.css`.

## Deliverables
- `src/styles/tokens.css`.
- `src/styles/global.css`.
- One-page reference at `.claude/design-system.md` (sections will be appended by T04, T05).

## Acceptance criteria
- Zero hex / rgba values in component files for the rest of the project.
- `impeccable` audit: tokens align with `.claude/visual-language.md` rules.
- Spacing scale documented with usage notes.

## Notes
The 8px base + spacing scale is deliberate. Designers reach for `13px` or `15px` when they're undisciplined; the scale forbids that and forces clarity.
