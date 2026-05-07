# Accessibility checklist

Template for T36. Tick during the audit; record date and reviewer at the top of each pass.

```
Date:        2026-__-__
Reviewer:    
Build SHA:   
```

## Automated (axe-core via Playwright)

- [ ] `/` — 0 critical · 0 serious findings
- [ ] `/servicios` — 0 critical · 0 serious findings
- [ ] `/publishers` — 0 critical · 0 serious findings
- [ ] `/historias` — 0 critical · 0 serious findings
- [ ] `/historias/_lorem-1` — 0 critical · 0 serious findings
- [ ] `/nota` — 0 critical · 0 serious findings
- [ ] `/epilogo` — 0 critical · 0 serious findings
- [ ] `/ca/` (smoke) — 0 critical · 0 serious findings

## Keyboard walkthrough

- [ ] Tab from `<body>` reaches the skip link first.
- [ ] Skip link jumps to `#main`.
- [ ] Tab order matches visual order on every page.
- [ ] Mobile nav opens / closes with keyboard.
- [ ] Mobile nav traps focus while open.
- [ ] `Escape` closes the mobile nav panel.
- [ ] Form: Tab through fields → submit; success message receives focus.
- [ ] Language switcher reachable, current locale announced.

## Screen-reader pass (VoiceOver on macOS)

- [ ] Each page announces its `<title>` on load.
- [ ] `<h1>` is the hero headline (or page title).
- [ ] Nav announces *"Navegación principal, lista de 6 elementos."*
- [ ] `aria-current="page"` reads on the active link.
- [ ] Form labels announce on focus.
- [ ] Required fields announce *"obligatorio."*
- [ ] Form success region announces on transition.

## Reduced-motion

- [ ] `/dev/motion` with OS reduced-motion ON: every catalog entry uses opacity-only fallback.
- [ ] View Transitions clamp to `--dur-fast` (200ms) under reduced-motion.

## Color & contrast

- [ ] Body text on paper: ≥ 4.5:1 verified by tooling (axe handles).
- [ ] No text on `--library-green-soft` background.
- [ ] No `--ink-whisper` text in any reading paragraph.

## Image alt-text

- [ ] Every decorative illustration: `alt=""`.
- [ ] Every photograph: descriptive alt naming subject + setting.
- [ ] Every `<PendingImage>`: `aria-label` populated.

## Touch targets (mobile)

- [ ] All nav links: ≥ 44 × 44px.
- [ ] Form submit: ≥ 44 × 44px.
- [ ] Portfolio thumbs: tap target ≥ 44 × 44px.

## Sign-off

- [ ] All checks pass.
- [ ] Findings (if any) logged below with severity + remediation.

```
Findings:

```
