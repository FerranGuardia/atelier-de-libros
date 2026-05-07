# T16 — Hero audit pass

**Skill:** `impeccable`
**Phase:** 1 — Hero
**Depends on:** T15
**Blocks:** T17
**Mireia-blocked:** No
**Estimated commits:** 1

## Goal
Audit the built hero against doctrine + spec. Find every drift, fix it, and produce a log so the same drift doesn't repeat in later builds.

## Scope

### Audit checklist (work through in order)

#### 1. Visual language (`.claude/visual-language.md`)
- Whisper, not weep — does the hero feel like it's announcing itself? Should not.
- Library-green coverage: measure (eyeball) — should be a small fraction of viewport (illustration line + nothing else).
- Ink for text only — no ink fills anywhere except text glyphs.
- Background is paper — full bleed, no other surface.
- Failure modes (T01 §7): is it tipping toward melodrama, generic editorial, or SaaS? If yes, document where and fix.

#### 2. Composition (T12)
- Match the ASCII grid placement at desktop. Compare a screenshot against the spec.
- Whitespace ratio above the fold ≥ 60%. Take a screenshot, eyeball; if borderline, count empty pixels in a tool.
- Per-breakpoint composition matches T12's breakpoint sections (not just shrunk).
- The "what's absent" list (T12 §6) — verify nothing on the list is present.

#### 3. Type (T04)
- Headline is Cormorant 300 italic at correct sizes.
- Tracking +1% applied.
- No font-load shift.
- Sub-headline is Inter 400, ink-soft, max 38ch.
- Italic Cormorant feels like punctuation, not decoration.

#### 4. Image (T13)
- Placeholder SVG renders cleanly at displayed width and at 80px (test by zooming).
- Stroke is `currentColor` and renders library-green.
- Aspect ratio is preserved; no horizontal stretch.

#### 5. Motion (T14)
- On-load timeline matches t=0 / t=200 / t=1100 / t=1800 beats. Record a 3s screencap, frame-check.
- Illustration stroke-draw lasts 1400ms ±50ms.
- Headline mask-wipe is line-by-line with 120ms stagger.
- Reduced-motion: enable in browser, reload — confirm opacity-only, ≤ 200ms.
- No-JS test: disable JS in DevTools, reload — confirm content renders complete and static.

#### 6. Responsive (T07)
- Test at 320, 375, 768, 1024, 1440, 1920px widths. No overflow, no clipping.
- Mobile composition is a stack, not a downscaled desktop.
- Headline uses clamp(); no sudden font-size jumps.

#### 7. Accessibility (T10)
- Run axe on `/`. Zero critical, zero serious findings.
- Tab into the hero — there should be nothing focusable inside it.
- Heading order: h1 is the hero headline. Confirm it's the only h1.
- Screen reader test (VoiceOver / NVDA): announces "Atelier de Libros" wordmark, then h1 "Curaduría Literaria: El libro como identidad", then sub-headline.

#### 8. Performance
- Lighthouse desktop on `/`: 100 / 100 / 100 / 100 target.
- LCP < 1.5s on simulated 4G.
- CLS = 0.
- No long task > 50ms during entrance animation.

### Findings format

For each issue found, log to `.claude/audits/T16-hero.md`:
```md
## Finding #N — [one-line title]
**Severity:** blocker | major | minor | nit
**Where:** file:line or screenshot reference
**Doctrine breached:** which doc and section
**Fix:** what was changed
**Status:** fixed | deferred (with rationale)
```

### Resolution

- **Blockers** must be fixed in this task before commit.
- **Majors** must be fixed unless they require composition changes that warrant going back to T12.
- **Minors / nits** can be batched into a polish task or fixed inline if cheap.

## Deliverables
- `.claude/audits/T16-hero.md` — the audit log with all findings + resolutions.
- Code fixes in `Hero.astro` for any blockers / majors.
- Updated `.claude/visual-language.md` if the audit reveals a doctrine ambiguity that needs clarifying.

## Acceptance criteria
- Audit log has at least one entry (even if "no findings — page ships clean").
- Zero blockers remaining at task close.
- Lighthouse run on `/` recorded in the log.
- Reduced-motion + no-JS tests recorded as pass / fail.

## Notes
The hero is the project's calling card. A small drift here echoes through every page. Spend the time.
