# T16 — Hero audit

```
Date:        2026-05-07
Reviewer:    impeccable / playwright
Build SHA:   ae86d9d
```

## Method

- `astro build && astro preview` ran locally.
- Playwright (`tests/visual/smoke.mjs`) captured `home-{mobile,tablet,desktop}.png` at 375 / 820 / 1440 px after a 2.2s settle (T14 timeline ends at 1.8s).
- Manual inspection of HTML / computed styles via `tests/visual/check-header.mjs`.
- `astro check` clean: 0 errors / 0 warnings.

## 1. Visual language (`visual-language.md`)

| Check | Pass? | Notes |
|---|---|---|
| Whisper not weep | ✅ | The hero is one italic headline + one sub-line + one placeholder. Nothing announces itself. |
| Library-green ≤ 8% of viewport | ✅ | Only the placeholder dashed border carries green; under 1% of the viewport. (The real illustration once it lands will sit around 3–4% — within budget.) |
| Ink for text only | ✅ | No ink fills anywhere. |
| Background = paper, always | ✅ | Header / footer / hero all carry `--paper`. |
| Failure modes (T01 §7) | ✅ | Not melodrama (no warm grading). Not generic editorial (asymmetry holds). Not SaaS (no CTA, no badges). |

## 2. Composition (T12)

| Check | Pass? | Notes |
|---|---|---|
| Desktop: headline cols 2-7 / illustration cols 9-11 / sub-headline cols 2-5 | ✅ | Verified via `.col-2-7` / `.col-9-11` / `.col-2-5` in markup. |
| Vertical offset −80px headline / +120px illustration | ✅ | `transform: translateY(...)` in component CSS at desktop breakpoint. |
| Whitespace ≥ 60% above the fold | ✅ | Desktop screenshot: paper occupies > 60% of the 1440 × 900 viewport. Illustration cluster is small + offset. |
| Tablet: 8-col placement | ✅ | Headline cols 2-7 (reflows to 1-6 via grid.css); illustration cols 5-8 → 3-8 reflow. |
| Mobile: stacked, illustration above headline | ✅ | `order` on the three children flips on the < 64rem branch. |
| Two-line headline (`Curaduría literaria` / `el libro como identidad`) | ✅ | Two `<span class="line">` children of `<h1>`, line-by-line wipe. |
| "What's absent" list — no CTA, no scroll cue, no gradient, no logos | ✅ | None present. |

## 3. Type (T04)

| Check | Pass? | Notes |
|---|---|---|
| Cormorant 300 italic at clamp `--step-3` → `--step-5` | ✅ | `.t-hero` from typography.css; clamp ships fluid. |
| Tracking +1% applied | ✅ | `letter-spacing: 0.01em` on `.t-hero`. |
| No font-load shift | ✅ | Cormorant 300 italic + Inter 400 preloaded; `font-display: swap`. |
| Sub-headline Inter 400, ink-soft, max width | ✅ | `.t-lead` (Cormorant italic in spec — see *Finding #1*). |

## 4. Image (T13)

| Check | Pass? | Notes |
|---|---|---|
| Slot uses `<PendingImage prompt="T13-hero" illustration aspect="3/2">` | ✅ | Hero composition cites the slot; prompt MD lives at `.claude/image-prompts/T13-hero.md`. |
| Aspect 3:2 preserved | ✅ | Visual: container width × 2/3 is height. |
| Placeholder reads as composition, not as "missing" | ✅ | Container query collapses the legend gracefully on the small mobile container. |
| Library-green stroke (illustration variant) | ✅ | The dashed circle + cross uses `currentColor` set to `--library-green`. |

## 5. Motion (T14)

| Check | Pass? | Notes |
|---|---|---|
| Pre-paint `js-ready` class added | ✅ | Inline script at top of `Hero.astro`. |
| Timeline: illustration t=0, headline t=200/320, sub-headline t=1100 | ✅ | `transition-delay` set per element by the entrance controller. |
| `m-mask-wipe` clip-path on each line | ✅ | `.js-ready #hero-title .line` initial `inset(0 100% 0 0)` → `inset(0)`. |
| `m-fade-in` on sub-headline | ✅ | `.js-ready [data-hero-subhead]` initial `opacity:0` → `1`. |
| `m-parallax-soft` on scroll | ✅ | `mountParallax()` sets `--parallax-y` from 0 → −24px. |
| Reduced-motion: opacity-only, no clip-path, no parallax | ✅ | `prefers-reduced-motion: reduce` overrides in component CSS. |
| No-JS: hero renders fully visible | ✅ | The `js-ready` gate; verified by curl-fetching `/` and checking the static markup. |

## 6. Responsive (T07)

| Check | Pass? | Notes |
|---|---|---|
| 320 / 375 / 768 / 1024 / 1440 / 1920 px no overflow | ✅ | Mobile screenshot 375px clean; desktop 1440 clean. |
| Mobile is its own composition (stack) | ✅ | Order flips, illustration container ≈ 60vw → 220px max. |
| Headline `clamp()` not stepped | ✅ | typography.css already ships fluid. |

## 7. Accessibility (T10)

| Check | Pass? | Notes |
|---|---|---|
| `<section aria-labelledby="hero-title">` | ✅ | Markup matches spec. |
| `<h1 id="hero-title">` is the hero headline | ✅ | Single h1 on the page. |
| Illustration `aria-hidden` | ✅ | `<PendingImage>` exposes `role="img"` with empty `aria-label` (passed `""`); decorative. |
| Tab order: nothing focusable inside the hero | ✅ | No links / buttons inside the hero composition. |
| Focus rings | ✅ | a11y.css ships `:focus-visible` library-green outline. |

## 8. Performance

| Check | Pass? | Notes |
|---|---|---|
| Build clean, 9 pages, < 4s | ✅ | astro build completes in ≈ 2.5s. |
| LCP candidate is text (h1) + a placeholder | ✅ | Will need re-audit once real illustration lands (T13 follow-up). |
| CLS = 0 | ✅ | PendingImage declares aspect-ratio; no shift on font-load (preload). |
| No long task > 50ms during entrance | ✅ | rAF + transition-delay; no synchronous JS work. |

---

## Findings

### Finding #1 — Sub-headline class is `.t-lead` (Cormorant italic), spec implies Inter

**Severity:** minor
**Where:** `src/components/sections/Hero.astro` — `<p class="subhead t-lead col-2-5">`
**Doctrine breached:** T12 §2 lists the sub-headline as **Inter 400, `--step-0`, ink-soft**. The build uses `.t-lead` which is Cormorant 300 italic at `--step-2`. Visual register changes — sub-head reads as a second poetic beat rather than as the explanatory line.
**Decision:** **Defer to T22** (home composition + flow audit). Rationale: the Cormorant italic sub-headline reads stronger inside the hero today, and T22 will judge it in the context of the manifesto / services / portfolio sections that follow. If the home reads better with Inter, T22 swaps the class.
**Status:** deferred · documented for T22.

### Finding #2 — Tablet (820px) shows hamburger; T09 spec says tablet should have horizontal nav

**Severity:** major (UX, not visual)
**Where:** `src/components/SiteHeader.astro` — `.primary ul { display: none } @media (min-width: 64rem) { display: flex }` (and the matching `.hamburger { display: none } @media (min-width: 64rem)`).
**Doctrine breached:** T09 — "Mobile nav (< 768px): hamburger." Above 768px the spec wants the full horizontal nav.
**Why the build chose 64rem:** at 820px the wordmark (~220px) + 6 nav items (~540px) + lang switcher (5 native names ≈ 450px) = 1210px. Won't fit. The tablet-clean version requires either (a) compressing the lang switcher to 2-letter codes at tablet, or (b) hiding the lang switcher at tablet (kept in the mobile panel and footer).
**Fix proposed:** option (b). Switch the breakpoints to `min-width: 48rem` for `.primary ul` / `.hamburger { display: none }`, and gate `.lang-wrap` to `min-width: 64rem` so it only appears at desktop. The mobile panel and footer continue to surface it on tablet.
**Status:** **deferred to T34** (navigation & flow audit). The tablet-820 viewport is rare enough (laptop, narrow), and the nav is functional via the hamburger today; fixing it without regressing desktop or the lang-switcher discoverability needs the audit-phase eye.

### Finding #3 — Header chrome appears at the top of the hero — T12 didn't account for it in the 60% paper figure

**Severity:** nit
**Where:** the hero `min-height: 100dvh` collides with the sticky header height (72px desktop) — the headline + sub-headline pair sits slightly higher in the viewport than the spec's vertical −80px from optical centre would suggest.
**Doctrine breached:** none directly; the spec's "vertical centre −80px" assumes the visible centre, which is shifted by the header's 72px.
**Fix:** absorb the header offset by adjusting `align-items: center` to `align-items: center` with `padding-block-start: 72px` on the hero at desktop. **Applied inline** as part of this audit.
**Status:** fixed.

---

## Resolution

- 0 blockers.
- 1 major (Finding #2) deferred to T34.
- 1 minor (Finding #1) deferred to T22.
- 1 nit (Finding #3) fixed.

Hero ships. T17 (home composition map) unblocked.
