# Atelier de Libros — Design system

> Token reference. The doctrine is `.claude/visual-language.md`; this file just enumerates what's in code.
> Source of truth: `src/styles/tokens.css`.

## Color

| Token | Value | Use |
|---|---|---|
| `--paper` | `#F5F5F0` | Background. Always. Never a fill on text. |
| `--paper-deep` | `#EDEDE6` | 1px dividers without strokes. Never used as a fill. |
| `--ink` | `#1A1A1A` | Body and display text. |
| `--ink-soft` | `rgba(26,26,26,0.6)` | Secondary text **at body size or larger**. Never on display type. |
| `--ink-whisper` | `rgba(26,26,26,0.32)` | Tertiary — footer fine print, captions, meta. |
| `--library-green` | `#2D4033` | Detail only. Never a button, never a wash. |
| `--library-green-soft` | `rgba(45,64,51,0.08)` | Atmospheric wash. **One per page max.** |

### Hard rules

1. Library-green ≤ **8% of any viewport**, soft variant counted in.
2. Ink for text only. Background = paper, always.
3. Component files contain **zero hex / rgba literals**. Always cite the variable.
4. Selection state uses `--library-green-soft` over `--ink` — defined globally.

## Spacing

8px base. Numerals correspond to 4px units (`--space-12` = 48px).

| Token | Value |
|---|---|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-24` | 96px |
| `--space-32` | 128px |
| `--space-48` | 192px |

### Hard rules

1. Section vertical rhythm: ≥ `--space-24` desktop, `--space-16` mobile.
2. Component-internal gaps: `--space-3` to `--space-8`.
3. When in doubt, step up. The site is generous, never cramped.
4. **No off-scale values** (`13px`, `15px`, etc.). The scale forbids them; reach for the next step instead.

## Wiring

- `src/styles/tokens.css` — declarations.
- `src/styles/global.css` — Andy Bell-style reset + body wired to tokens, imports `tokens.css`.
- `src/layouts/Base.astro` — minimal shell, imports `global.css`. Every page extends it.

## Typography

Source: `src/styles/typography.css`. Self-hosted WOFF2, Spanish subset (~86 KB total). No CDN.

### Families

- **Display:** Cormorant Garamond (300, 400; italic 300, 400).
- **Body:** Inter (400, 500).

### Modular scale (ratio 1.333)

| Token | Value | Use |
|---|---|---|
| `--step--1` | 0.844rem | small caps, fine print |
| `--step-0` | 1rem | body |
| `--step-1` | 1.333rem | lead-in, sub-headlines |
| `--step-2` | 1.777rem | section title small, pull-quote |
| `--step-3` | 2.369rem | section title (or hero on mobile) |
| `--step-4` | 3.157rem | page title |
| `--step-5` | 4.209rem | hero headline (desktop) |

### Application classes

| Class | Font | Weight | Size | Tracking | Leading |
|---|---|---|---|---|---|
| `.t-hero` | Cormorant | 300 italic | `--step-5` desktop / `--step-3` mobile | +1% | 1.1 |
| `.t-page-title` | Cormorant | 400 | `--step-4` | +3% | 1.15 |
| `.t-section-title` | Cormorant | 400 | `--step-3` | +2% | 1.2 |
| `.t-lead` | Cormorant | 300 italic | `--step-2` | +1% | 1.3 |
| body (default) | Inter | 400 | `--step-0` | 0 | 1.55 |
| `<em>` | Inter | 400 italic | `--step-0` | 0 | 1.55 |
| `.t-caption` | Inter | 400 | `--step--1` | +2% | 1.4 |
| `.t-wordmark` | Cormorant | 400 | `--step-0` | +4% | 1 |
| `.t-nav` | Inter | 500 | `--step--1` | +1% | 1 |

### Italic policy

Cormorant italic carries emotional weight. Reserve for: hero, manifesto, pull-quotes, "La Nota". Don't sprinkle. Body italic (`<em>`): emphasis only, never decoration.

### Measure utilities

| Class | Max-width | Use |
|---|---|---|
| `.measure-body` | 60ch | body paragraphs |
| `.measure-letter` | 56ch | Publishers, Nota — letter-style pages |
| `.measure-caption` | 38ch | captions |

Display headlines have no max-width — let them breathe to the grid.

### Drop-cap (Nota only)

Apply `.drop-cap` to the first paragraph. First letter renders in Cormorant 300, `--step-5`, library-green, floated left, line-clamps to ~3 body lines.

### Print styles

`@media print` — body 11pt, Cormorant for h1/h2 + display classes, Inter for body, no backgrounds, ink only.

### Preload

`Base.astro` preloads Cormorant 300 italic and Inter 400 with `crossorigin`. Other weights `font-display: swap` from cold cache.

### Dev QA

`src/pages/dev/type.astro` — full scale + every rule. The `dev/` (no underscore) routing is deliberate: underscore-prefix would hide the page in dev too, defeating QA. Delete the whole `src/pages/dev/` directory before T40 deploy.

## Typographic punctuation

Universal rules every text-emitting agent follows. Full per-language doctrine in [`spelling-doctrine.md`](spelling-doctrine.md).

| Rule | Glyph | Replaces |
|---|---|---|
| Curly quotes only | `’ ‘ ’ « » “ ”` | `"`, `'` |
| Em-dash | `—` (U+2014) | `--` |
| En-dash | `–` (U+2013) | hyphen for ranges |
| Ellipsis | `…` (U+2026) | three dots `...` |
| Apostrophe | `’` (U+2019) | `'` |
| Non-breaking space | ` ` / `&nbsp;` | regular space between number+unit, digit+currency, display widows |

**Sentence case** for headings in every locale. **No ALL CAPS** for emphasis (uppercase is reserved for the wordmark and typographic detail). **No emoji** anywhere in site copy.

Refusals to write incorrect copy must cite a rule code (`ES-3`, `FR-NBSP`, `IT-ACUTE-GRAVE`).

## Motion

Source: `src/styles/motion.css`. Doctrine: [`motion-catalog.md`](motion-catalog.md). Build tasks reference catalog names only — no inline durations, no inline curves.

### Tokens

| Token | Value |
|---|---|
| `--ease` | `cubic-bezier(0.2, 0.6, 0.2, 1)` |
| `--dur` | `700ms` |
| `--dur-fast` | `300ms` |
| `--dur-slow` | `1400ms` (hero stroke draw only) |

There is **one curve, three durations**. Anything else fails the audit.

### Catalog (named motions)

`m-fade-in` · `m-rise` · `m-mask-wipe` · `m-stroke-draw` · `m-parallax-soft` · `m-underline-roll` · `m-row-tint` · `m-image-desat` · `m-route-cross` · `m-image-morph` · `m-form-success` · `grain-drift`.

Specs and reduced-motion fallbacks: see [`motion-catalog.md`](motion-catalog.md).

### Hard rules

1. **No bouncy / elastic / overshoot easings.** No springs.
2. **`prefers-reduced-motion: reduce`** clamps durations to `200ms` and disables transforms (per-motion fallback documented in the catalog).
3. **Stagger** caps at 5 elements per group, 60–120ms interval, max one staggered group per scroll-screen.
4. **One ambient loop only:** `grain-drift`, opacity/position-only, 24s.
5. **No scroll-jacking, no snap, no scroll-scrubbed video, no autoplay.**

### Dev QA

`src/pages/dev/motion.astro` — every catalog entry triggerable by name. Delete `src/pages/dev/` before T40 deploy.
