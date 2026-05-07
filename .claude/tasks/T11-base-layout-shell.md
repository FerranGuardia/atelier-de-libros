# T11 — Base layout shell

**Skill:** `frontend-design:frontend-design`
**Phase:** 0 — Doctrines (assembly)
**Depends on:** T03–T10
**Blocks:** T15 onwards
**Mireia-blocked:** No (placeholders for footer copy)
**Estimated commits:** 1

## Goal
Implement what the doctrines define: `BaseLayout.astro`, `SiteHeader.astro`, `SiteFooter.astro`, grain overlay, View Transitions, skip link. The chassis every page extends.

## Scope

### `src/layouts/BaseLayout.astro`
- Props: `title`, `description`, `ogImage?`, `noindex?`.
- `<html lang="es">`.
- `<head>`:
  - Charset, viewport, title.
  - Meta description (from props).
  - Canonical link.
  - OG tags + Twitter card defaults.
  - Preload critical fonts (Cormorant 300 italic, Inter 400) — see T04.
  - Preload LCP image when `slot="preload-lcp"` is provided by a page.
- `<body>`:
  - Skip-to-content link (T10).
  - `<SiteHeader />`.
  - Grain overlay (T03 — inline SVG, fixed, pointer-events none, `aria-hidden`).
  - `<main id="main">` — slot.
  - `<SiteFooter />`.
  - `<ViewTransitions fallback="none" />` from `astro:transitions`. Default motion: `m-route-cross` (T05).

### `src/components/SiteHeader.astro`
Implement T09 spec exactly:
- Wordmark + 6-link nav.
- Sticky behaviour with scroll-triggered border using `m-fade-in`.
- Hover underline `m-underline-roll`.
- Active link `aria-current="page"` and persistent underline.
- Mobile (< 768px): hamburger reveals full-screen paper panel with focus trap, Escape close, route-change close.

### `src/components/SiteFooter.astro`
Implement T09 spec exactly:
- 3 columns desktop, stacked mobile.
- Colofón placeholder marked `<!-- M01-footer -->`.
- Center nav (smaller).
- Contact + Instagram placeholders.
- Bottom strip with copyright line.

### Grain overlay
- Inline SVG noise tile (4×4 px), repeating, opacity 8%, fixed position, full viewport, `aria-hidden="true"`, `pointer-events: none`, z-index between content and chrome.

### Verification routes (dev only — deleted at T40)
- `src/pages/index.astro` — single line "Atelier de Libros" centered, just to verify chrome on the home route.
- `src/pages/_dev/route-2.astro` — to verify View Transition between two routes.
- `src/pages/_dev/grain.astro` — toggle grain on/off to confirm subtlety.

## Composition & hierarchy
- Header sits at top, content fills the middle, footer anchors the bottom.
- Sticky header but never fixed — page anchors must work without overlap (`scroll-margin-top` on each anchor target).
- Visual weight: header is light (just type), footer is also light (one column of fine print).

## Whitespace & rhythm
- Header inner padding: vertical `--space-4`, horizontal matches outer grid padding.
- Footer top padding: `--space-16`.
- `main` padding: page-controlled, but the layout reserves no extra padding inside `main`.

## Image plan
- Wordmark: text only, no image.
- Hamburger icon: inline SVG (3 lines).
- Grain: inline SVG noise tile.
- No raster images in the shell.

## Motion
- `m-route-cross` for route transitions.
- `m-fade-in` for header bottom border on scroll.
- `m-underline-roll` for nav hovers.
- Mobile nav panel: opens / closes using `m-route-cross` reuse (slide + fade).
- All respect reduced-motion.

## Navigation & interaction
- All 6 nav links functional and accurate.
- Wordmark links to `/`.
- Skip-to-content jumps to `#main` and is keyboard-only-visible.
- Mobile nav hamburger: button (not div), aria-expanded reflects state.
- Mobile nav panel: focus trap until closed.

## Responsive plan
- Per T07: header transforms at 768px breakpoint (full nav → hamburger).
- Footer columns collapse to stack at < 768px.
- Wordmark stays Cormorant 400 --step-0 at every breakpoint (no shrink).

## Accessibility
- Per T10: semantic header / nav / main / footer; aria-current; skip link; focus rings; reduced-motion contract.
- Mobile nav panel announces as an expanded region.

## Deliverables
- `BaseLayout.astro`, `SiteHeader.astro`, `SiteFooter.astro`.
- Grain overlay implementation.
- 3 verification routes (deleted before T40).

## Acceptance criteria
- Click between `/` and `/_dev/route-2`: View Transition `m-route-cross` visible; identical reduced-motion fallback.
- Header sticky behaviour: bottom border appears past 64px scroll.
- Mobile nav: opens / closes / traps focus / closes on Escape / closes on route change.
- Lighthouse a11y on the bare route ≥ 95.
- No horizontal scroll at any breakpoint (320px → 1920px).

## Notes
Resist the urge to add anything decorative to the shell. The doctrines are doing the heavy lifting; the shell is just the chassis.
