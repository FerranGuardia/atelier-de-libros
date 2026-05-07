# T10 — Accessibility doctrine

**Skill:** `impeccable`
**Phase:** 0 — Doctrines
**Depends on:** T03, T04, T05, T09
**Blocks:** every page-task, T36
**Mireia-blocked:** No
**Estimated commits:** 1

## Goal
Define accessibility requirements component-by-component, so every later build cites the rules and passes audit cleanly.

## Scope

### Color contrast (verified)
- Ink (#1A1A1A) on Paper (#F5F5F0): 13.4:1 — passes AAA at all sizes.
- Ink-soft (rgba 26,26,26,0.6 over paper): ~6:1 — passes AA on body-size text only. **Never use for display type**.
- Ink-whisper (~3.4:1): footer fine print only.
- Library-green (#2D4033) on Paper: 9.5:1 — passes AAA. Used for accent only (icons, hover underline, ribbon rules).
- Library-green-soft on Paper: never carries text.

### Focus indication
- Default browser focus ring is removed but **always** replaced:
  ```css
  :focus-visible {
    outline: 2px solid var(--library-green);
    outline-offset: 2px;
    border-radius: 1px;
  }
  ```
- Form inputs use the bottom-border focus state defined in T28 — no double-ring.
- `:focus` (not :focus-visible) silenced for mouse only; keyboard always shows the ring.

### Semantic HTML (per component)

| Component | Element | Notes |
|---|---|---|
| Header | `<header>` | Top of every page. `<nav aria-label="Principal">` inside. |
| Site nav | `<nav>` | Each link a real `<a>`. Active link `aria-current="page"`. |
| Hero | `<section aria-labelledby="hero-title">` | Headline gets `id="hero-title"`. |
| Manifesto | `<section aria-labelledby="manifesto-title">` | Same pattern. |
| Services teaser / Index | `<ol>` | Chapters are an ordered list. Roman numerals are visual; the `<ol>` provides the count. |
| Portfolio teaser / index | `<ul>` of `<article>` | Each story is an `<article>`. |
| Story detail | `<article>` with `<header>` | Title in header. |
| Form | `<form>` | Every field has a real `<label>` (visible or sr-only via aria-label). |
| Footer | `<footer>` | Contains contact info. |
| Skip link | `<a href="#main">` | Visible on focus only. |

### ARIA usage policy
- Use sparingly. Native HTML first.
- `aria-label` only when no visible label is possible (icon-only buttons).
- `aria-current="page"` on active nav link.
- `aria-live="polite"` on the form success state region.
- `aria-hidden="true"` on purely decorative SVGs (illustrations, grain overlay, ribbon rules).
- Never `role="button"` on a `<div>` — use `<button>`.

### Reduced-motion behaviour (per catalog entry — see T05)
- `m-fade-in` → identical (opacity is fine).
- `m-rise` → opacity only, no translate.
- `m-mask-wipe` → opacity only.
- `m-stroke-draw` → instant render.
- `m-parallax-soft` → none.
- `m-image-morph` → opacity crossfade only.
- All durations capped at 200ms under reduced-motion.

### Form accessibility (Epílogo, T28)
- Each input has a `<label>`, programmatically associated.
- Required fields have `aria-required="true"` and visual indication (no `*` asterisk; use the word "obligatorio" subtly).
- Error messages: inline below the field, `role="alert"` on dynamic insertion, programmatically associated via `aria-describedby`.
- Honeypot field has `aria-hidden="true"` and `tabindex="-1"`.

### Image alt text policy
- **Decorative illustrations:** `alt=""` (treated as decoration).
- **Photographs in portfolio:** descriptive alt naming the subject + setting (e.g. "Detalle de mano sobre lomo en biblioteca privada, Barcelona, 2025").
- **Author portrait (T27):** "Retrato de Mireia [Apellido], fundadora."
- **Wordmark / logo:** `alt="Atelier de Libros"` once site-wide; use inline SVG with `<title>` thereafter.

### Keyboard map
- Tab order matches visual order on every page.
- `Enter` activates links / buttons.
- `Space` activates buttons.
- `Escape` closes mobile nav and form success modal.
- No custom keybindings beyond browser defaults.

### Touch targets
- Minimum 44×44px on all interactive elements (matches T07).

### Screen reader sanity (manual test list)
- Each page announces its title on load.
- Navigation list announces 6 items.
- Hero headline announces as h1.
- Form fields announce labels and required state.
- Form success region announces "Recibido."

## Deliverables
- `.claude/accessibility-doctrine.md` — this doc as standalone reference.
- A `.claude/audits/a11y-checklist.md` template for T36 to fill in.

## Acceptance criteria
- Every later page-task includes an "Accessibility" section that cites concrete rules from this doc.
- T36 audit can complete the checklist with 0 critical / 0 serious findings.

## Notes
Accessibility for an editorial site means: the experience holds up when the imagery and motion are removed. If the site is unreadable to a screen reader, it isn't editorial — it's decorative.
