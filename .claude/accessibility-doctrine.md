# Accessibility doctrine

> Output of T10. Component-by-component requirements every page-task cites and T36 audits against.

## Color contrast (verified)

| Pairing | Ratio | Use |
|---|---|---|
| `--ink` on `--paper` | 13.4:1 | All body and display text. AAA at every size. |
| `--ink-soft` on `--paper` | ≈ 6:1 | Secondary text **at body size only**. Never on display type. |
| `--ink-whisper` on `--paper` | ≈ 3.4:1 | Footer fine print, captions only. Not for any reading paragraph. |
| `--library-green` on `--paper` | 9.5:1 | Accent only — icons, hover underline, ribbon rules. |
| `--library-green-soft` on `--paper` | n/a | Atmospheric wash; never carries text. |

## Focus indication

- Default browser ring removed but **always** replaced via `src/styles/a11y.css`:
  ```css
  :focus-visible {
    outline: 2px solid var(--library-green);
    outline-offset: 2px;
    border-radius: 1px;
  }
  ```
- `:focus` (not `:focus-visible`) is silenced for mouse only; keyboard always shows the ring.
- Form inputs use a bottom-border focus state defined in T28 — no double-ring.

## Semantic HTML (per component)

| Component | Element | Notes |
|---|---|---|
| Site shell | `<header>` + `<main id="main">` + `<footer>` | One of each per page. |
| Site nav | `<nav aria-label="Principal">` + `<a>`s | Active link `aria-current="page"`. |
| Hero | `<section aria-labelledby="hero-title">` | Headline gets `id="hero-title"`. |
| Manifesto | `<section aria-labelledby="manifesto-title">` | Same pattern. |
| Servicios index | `<ol>` of chapters | Roman numerals are visual; `<ol>` provides the count. |
| Portfolio | `<ul>` of `<article>` | Each historia is an article. |
| Story detail | `<article>` with `<header>` | Title in header. |
| Form | `<form>` + real `<label>`s | Required: `aria-required`. |
| Skip link | `<a href="#main">` | Visible on focus only. |

## ARIA usage policy

- Native HTML first. ARIA only when no semantic alternative exists.
- `aria-label` only on icon-only buttons (the hamburger trigger, e.g.).
- `aria-current="page"` on active nav link.
- `aria-live="polite"` on the form success region.
- `aria-hidden="true"` on purely decorative SVGs (illustrations, grain overlay, ribbon rules).
- **Never** `role="button"` on a `<div>`; use `<button>`.

## Reduced-motion contract

Defined per-motion in [`motion-catalog.md`](motion-catalog.md). Summary: durations clamp to 200ms, transforms become opacity-only, parallax disables. Audit the contract on `/dev/motion` with the OS preference toggled.

## Form accessibility (Epílogo, T28)

- Each input has a `<label>`, programmatically associated by `for`/`id`.
- Required fields: `aria-required="true"` plus visual hint (the word *"obligatorio"*, not `*`).
- Error messages: inline below the field, `role="alert"` on dynamic insertion, associated via `aria-describedby`.
- Honeypot field: `aria-hidden="true"` and `tabindex="-1"`.
- The qualifying first question (*"Si tu marca fuera un libro…"*) renders larger (`--step-1`) but uses a `<label>` like every other field.

## Image alt-text policy

| Image kind | Alt text |
|---|---|
| Decorative illustration (T29 — T31) | `alt=""` |
| Photograph in portfolio | descriptive, naming subject + setting (e.g. *"Detalle de mano sobre lomo en biblioteca privada, Barcelona, 2025"*) |
| Author portrait (T27) | *"Retrato de Mireia [Apellido], fundadora del estudio."* |
| Wordmark/logo | `alt="Atelier de Libros"` once site-wide; inline SVG with `<title>` thereafter |
| Pending placeholder (`<PendingImage>`) | the component's `aria-label` (`label` prop falls back) |

## Keyboard map

- Tab order matches visual order on every page.
- `Enter` activates links and buttons.
- `Space` activates buttons.
- `Escape` closes the mobile nav panel.
- No custom keybindings beyond browser defaults.

## Touch targets

Minimum **44 × 44px** on every interactive element. Matches T07.

## Screen-reader sanity (manual test list, run during T36)

- Page announces its `<title>` on load.
- Site nav announces 6 items + language switcher.
- Hero headline announces as `h1`.
- Form fields announce labels + required state.
- Form success region announces *"Recibido."*

## Audit checklist (T36 fills this)

Lives at `.claude/audits/a11y-checklist.md`. T36 ticks each item against axe-core, manual screen-reader pass, and keyboard-only walkthrough.

## Notes

For an editorial site, accessibility means: *the experience holds when imagery and motion are removed.* If a screen reader can read the page in order and a keyboard-only user can reach every action, the site is editorial. If they can't, it's decorative.
