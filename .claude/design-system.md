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

<!-- T04 will append typography tokens (display = Cormorant Garamond, body = Inter, scale, line-heights, measure). -->

## Motion

<!-- T05 will append motion tokens (one easing curve, base duration 700ms, micro-interaction 300ms, no bounce). -->
