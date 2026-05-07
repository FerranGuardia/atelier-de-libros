# T09 — Navigation & scroll system

**Skill:** `impeccable` (spec) + `frontend-design:frontend-design` (build)
**Phase:** 0 — Doctrines
**Depends on:** T03, T04, T05, T06, T07
**Blocks:** T11, every page-task
**Mireia-blocked:** No
**Estimated commits:** 1

## Goal
Define every navigation interaction in one place: header, mobile nav, footer, View Transitions, anchor / hash handling, scroll behaviour, focus management.

## Scope

### Site map (final)
- `/` — Home / La Portada
- `/servicios` — El Índice (with redirect from `/indice`)
- `/publishers` — Publishers' Room
- `/historias` — index of stories
- `/historias/[slug]` — story detail
- `/nota` — La Nota de la Autora
- `/epilogo` — El Epílogo (form)

### Header (`SiteHeader.astro`)
- Wordmark "Atelier de Libros" — Cormorant 400, --step-0, tracking +4%, ink, links to `/`.
- Nav (right-aligned desktop / tablet):
  - Portada · Índice · Publishers · Historias · Nota · Epílogo
  - Type: Inter 500, --step--1, ink-soft.
  - Hover: ink + library-green underline using `m-underline-roll` motion.
  - Active page (matches current pathname): underline persistent, ink color.
- Sticky on scroll. 1px paper-deep bottom border fades in past 64px scroll using `m-fade-in`.
- Header height: 72px desktop, 64px tablet, 56px mobile.
- Header is `position: sticky`, not fixed (so the page can use `scroll-margin-top` for anchor offsets).

### Mobile nav (< 768px)
- Hamburger icon: 3 horizontal 1px library-green lines, animated to a single line on toggle.
- Toggled state: full-screen paper panel slides in (`m-route-cross`).
- Nav items in panel: Cormorant 300 italic, --step-3, vertical stack, gap `--space-8`, centered.
- Body gets `overflow: hidden` while panel is open.
- Panel must trap focus and close on Escape.
- Panel must close after navigation (route change).

### Footer (`SiteFooter.astro`)
- 3 columns desktop, stacked mobile.
- **Left:** colofón placeholder (`<!-- M01-footer -->` — 2 sentences max).
- **Center:** minimal nav repeat (same 6 links, smaller).
- **Right:** contact email (`hola@atelierdelibros.com` placeholder), Instagram link placeholder.
- Bottom strip: `© 2026 Atelier de Libros · Una pieza por Mireia [Apellido]` — Inter --step--1, ink-whisper, centered.
- Footer top has 1px paper-deep border, `--space-16` padding above and below.

### View Transitions
- `<ViewTransitions />` from `astro:transitions` mounted in `BaseLayout`.
- Default route motion: `m-route-cross` from the catalog.
- Per-route override allowed for portfolio image morph (`m-image-morph`).
- Reduced-motion: opacity-only fallback (defined in `m-route-cross` reduced-motion contract).

### Anchor / hash handling
- Anchor links (e.g. `/servicios#capitulo-2`):
  - Each chapter heading has `id="capitulo-N"` and `scroll-margin-top: calc(72px + var(--space-12))` so the sticky header doesn't overlap.
  - Smooth scroll: `html { scroll-behavior: smooth; }` BUT respect `prefers-reduced-motion`.
- The form on `/epilogo` reads `?ref=` from query string (used by Publishers link).

### Scroll behaviour
- No scroll-jacking. Native browser scroll, period.
- No scroll-snap (this is a magazine, not a slideshow).
- IntersectionObserver triggers used for `m-fade-in` and `m-rise` only — at 25% visibility, fire once, no replay.

### Focus management
- Visible focus rings everywhere: 2px library-green outline, 2px offset, never `outline: none` without replacement.
- Skip-to-content link in `BaseLayout`: visible on focus only, jumps to `#main`.
- After route change: focus moves to `<main>` and announcing region update (aria-live polite).

### Prefetch
- `prefetch: { defaultStrategy: 'viewport' }` (set in T02).
- Internal links automatically prefetched as they enter viewport. No prefetch for external links.

## Deliverables
- `.claude/navigation-system.md` — this doc as standalone reference.
- Site map page in dev: `src/pages/_dev/sitemap.astro` showing all routes (deleted before T40).

## Acceptance criteria
- Every interaction in this doc is implemented in T11 and verified.
- Reduced-motion users experience opacity-only route transitions.
- Anchor links never hide their target under the sticky header.
- Mobile nav is keyboard-navigable and traps focus correctly.

## Notes
Navigation is the spine of the user experience. If it stutters once, the editorial illusion breaks. Treat it with at least as much care as the hero.
