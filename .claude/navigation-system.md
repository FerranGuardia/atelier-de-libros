# Navigation & scroll system

> Output of T09. Every navigation interaction in one place. T11 implements; this is the spec it cites.

## Sitemap

| Path | Page | Mireia-blocked? |
|---|---|---|
| `/` | Home / La Portada | M01, M02-teaser, M05-teaser |
| `/servicios` | El Índice | M02 |
| `/publishers` | Publishers' Room | M03 |
| `/historias` | Historias index | M05 |
| `/historias/[slug]` | Historia detail | M05 |
| `/nota` | La Nota de la Autora | M04 |
| `/epilogo` | El Epílogo (form) | — |

Plus the locale-prefixed mirrors: `/{ca,fr,en,it}/...`. Per T04b, slugs stay ESP-canonical.

## Header (`src/components/SiteHeader.astro`)

- **Wordmark:** "Atelier de Libros", Cormorant 400, `--step-0`, tracking +4%, ink, links to `/`.
- **Nav** (right-aligned desktop / tablet): Portada · Índice · Publishers · Historias · Nota · Epílogo.
  - Type: Inter 500, `--step--1`, `--ink-soft` at rest.
  - Hover/focus: ink + library-green underline (motion `m-underline-roll`).
  - Active page (matches current pathname): `aria-current="page"`, persistent underline, ink colour.
- **Sticky** (`position: sticky`, never `fixed`) so anchor links can use `scroll-margin-top`.
- 1px paper-deep bottom border fades in past 64px scroll using `m-fade-in`.
- **Heights:** 72px desktop · 64px tablet · 56px mobile.
- **Language switcher** (T04b component) sits to the right of the nav, separated by a vertical paper-deep rule. On mobile, it appears at the bottom of the panel.

## Mobile nav (< 768px)

- **Hamburger trigger:** `<button>`, three horizontal 1px library-green lines.
- **Open state:** full-screen paper panel slides in (motion: `m-route-cross` reused; fade + 8px translate-y).
- Nav items in panel: Cormorant 300 italic, `--step-3`, vertical stack, gap `--space-8`, centred.
- Body gains `overflow: hidden` while the panel is open (no double scroll).
- Panel **traps focus**, closes on `Escape`, closes on route change.
- The trigger is `aria-expanded`-aware; the panel is `role="dialog"` with `aria-modal="true"`.

## Footer (`src/components/SiteFooter.astro`)

- 3 columns desktop, stacked mobile.
  - **Left:** Studio block — wordmark + tagline + colofón paragraph (cites typography choices).
  - **Center:** language switcher (compact form), nav repeat (small), legal triple (Aviso · Privacidad · Cookies).
  - **Right:** contact email (`estudio@atelierdelibros.com` placeholder) + future Instagram link slot.
- Bottom strip: copyright line, Inter `--step--1`, ink-whisper, centred.
- Footer top has 1px paper-deep border, `--space-16` padding above and below.

## View Transitions

- `<ViewTransitions />` from `astro:transitions` mounted in `Base.astro`.
- Default route motion: `m-route-cross` (defined in `motion.css`).
- Per-route override allowed for portfolio detail (`m-image-morph` via shared `view-transition-name`).
- Reduced-motion: opacity-only fallback (already in the catalog).

## Anchor / hash handling

- `html { scroll-behavior: smooth; }` — but only when `prefers-reduced-motion: no-preference`.
- Anchor targets (e.g. `id="capitulo-2"` on `/servicios`) declare `scroll-margin-top: calc(72px + var(--space-12))` so the sticky header doesn't overlap the heading on jump.
- The Epílogo form reads `?ref=` from query string (used by Publishers CTA).

## Scroll behaviour

- **No scroll-jacking. No scroll-snap.** Native browser scroll, period.
- IntersectionObserver triggers used for `m-fade-in` and `m-rise` only — at 25% visibility, fire once, no replay.
- The IO is wired once from `Base.astro`; components don't observe their own elements.

## Focus management

- Visible focus rings everywhere: 2px library-green outline, 2px offset, never `outline: none` without a replacement.
- Skip-to-content link in `Base.astro` (already shipped in T04b): visible on focus only, jumps to `#main`.
- After route change: focus moves to `<main>`; an `aria-live="polite"` region announces the new page title.

## Prefetch

- `prefetch: { defaultStrategy: 'viewport' }` — set in `astro.config.mjs` (T02).
- Internal links auto-prefetch as they enter viewport. No prefetch for external links.

## Audit lens

T11 ships the implementation; T34 audits navigation flow. The audit verifies:

1. Sticky header bottom border appears past 64px scroll on every page.
2. Mobile nav opens, closes (Escape, button, route-change), and traps focus.
3. Anchor jumps land below the sticky header, not under it.
4. View Transitions visible at default speed; opacity-only under `prefers-reduced-motion`.
5. Tab order matches visual order on every page.
