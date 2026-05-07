# T04b — i18n pipeline

**Skill:** `frontend-design:frontend-design` (build) + `impeccable` (review)
**Phase:** 0 — Doctrines
**Depends on:** T02
**Blocks:** every page task, every Mireia deliverable
**Mireia-blocked:** No (scaffold ships before her copy lands)
**Estimated commits:** 1

## Goal
Stand up the full localization pipeline for **5 languages** before any page emits visible copy. Every string in this site must be addressed by a stable label key and resolved through the locale store — **never inlined**. ESP is the canonical source; the other four are translation targets that fall back to ESP until provided.

## Languages

| Code | Language | Role |
|---|---|---|
| `es` | Español | **Default + canonical source** — every key must exist here first |
| `ca` | Català | Primary co-language (Mireia bilingual) |
| `fr` | Français | Translation target |
| `en` | English | Translation target |
| `it` | Italiano | Translation target |

**Locale order in language switcher:** ES · CA · FR · EN · IT (Romance-first, English centred).

## URL strategy

- Default ESP: served at root (`/`, `/servicios`, `/historias`, …) — **no `/es/` prefix**.
- All other locales: subpath prefix (`/ca/…`, `/fr/…`, `/en/…`, `/it/…`).
- Astro config: `i18n: { defaultLocale: 'es', locales: ['es','ca','fr','en','it'], routing: { prefixDefaultLocale: false } }`.
- 404s on missing translation: route to the ESP version of the same page, **not** to a generic 404.

## Label key conventions

```
<page>.<section>.<element>[.<variant>]
```

Examples:
- `home.hero.headline`
- `home.hero.subheadline`
- `home.manifesto.body`
- `nav.servicios`
- `nav.historias`
- `services.curaduria.title`
- `services.curaduria.body`
- `footer.legal.imprint`
- `meta.home.title`
- `meta.home.description`
- `forms.contact.field.book_question`

Rules:
- snake_case for multi-word leaves; dot-separated path otherwise.
- No spaces, no accents, no capitals in keys.
- `meta.*` reserved for `<title>`, OG, description.
- `aria.*` reserved for screen-reader-only labels.
- `cta.*` reserved for buttons/links resolving to a verb phrase.

## File layout

```
src/
  i18n/
    locales/
      es.ts          ← canonical, fully populated
      ca.ts
      fr.ts
      en.ts
      it.ts
    types.ts         ← inferred dictionary shape from es.ts
    t.ts             ← `t(key, locale)` resolver with fallback chain
    locale.ts        ← `getLocaleFromUrl(Astro.url)` helper
    config.ts        ← locale list, default, language switcher metadata
```

Locale files are **TypeScript**, not JSON, so `es.ts` types every other locale (`Dictionary = typeof esDict`). Missing keys in `ca/fr/en/it` are TS errors, not silent runtime fallbacks.

## Resolver behavior

`t(key, locale)`:
1. Lookup in requested locale.
2. If missing or `null`, fall back to `es`.
3. If still missing in dev: throw. In prod build: log + render the key string (never empty DOM).
4. Returns a string. HTML interpolation goes through a separate `tHtml(key, locale)` (uses `set:html`) — keep them distinct so plain `t()` is XSS-safe by default.

Translation status marker:
```ts
// in ca.ts, fr.ts, en.ts, it.ts:
export default {
  home: {
    hero: {
      headline: null, // TODO: Mireia translation
    },
  },
} satisfies Partial<Dictionary>;
```
`null` means "not yet translated → fall back to ES." Empty string `""` means "intentionally blank in this locale."

## Mireia-blocked copy bridge

Placeholder convention from CLAUDE.md (`<!-- M0X -->`) **wraps the rendered output**, not the key:
```astro
<!-- M01 -->
<p>{t('home.manifesto.body', locale)}</p>
<!-- /M01 -->
```
Until Mireia delivers, `home.manifesto.body` resolves to `'[M01 — manifiesto pendiente]'` in ES. When she delivers, only the `es.ts` value changes; the markup is untouched.

## Language switcher

- Component scaffold ships in this task: `src/components/LanguageSwitcher.astro` — renders the 5 codes, current one marked `aria-current="true"`, others as anchors to the equivalent path in that locale.
- **Visual integration** is deferred to T09 (navigation task). This task only ships the unstyled, accessible component.
- Switching preserves the current path: `/historias/caso-x` in `en` → `/en/historias/caso-x`. (Slugs stay ESP-canonical for now; per-locale slug translation deferred — open question for Mireia.)

## `<html lang>` and `dir`

- `lang` attribute on `<html>` set per locale: `es`, `ca`, `fr`, `en`, `it`.
- `dir="ltr"` always (no RTL targets).
- Set in `BaseLayout.astro` (will exist after T11; this task adds the helper now and BaseLayout adopts it).

## SEO/meta

- `<link rel="alternate" hreflang="es" href="…" />` for each locale on every page.
- `hreflang="x-default"` points to the ESP URL.
- OG locale: `og:locale` + `og:locale:alternate` per page.

## Deliverables

- Astro config patched with `i18n` block.
- `src/i18n/{locales/*.ts,types.ts,t.ts,locale.ts,config.ts}` — full scaffold.
- `src/i18n/locales/es.ts` populated with every key the site already needs (nav, footer, meta for home, placeholders for Mireia keys M01–M05).
- `ca.ts`, `fr.ts`, `en.ts`, `it.ts` — same shape, all values `null` except a smoke-test key (`nav.home`) translated in all five so the resolver can be verified.
- `src/components/LanguageSwitcher.astro` (unstyled, accessible).
- Dev-only `src/pages/_dev/i18n.astro` rendering every key in every locale as a table — visible fallbacks, untranslated count per locale (deleted before T40).
- `.claude/i18n-doctrine.md` — short doc: key conventions, fallback rules, how to add a new key, how to mark translation done.

## Acceptance criteria

- TypeScript compiles with all 5 locale files type-checked against `Dictionary`.
- Visiting `/`, `/ca/`, `/fr/`, `/en/`, `/it/` returns the correct `<html lang>` and resolves `nav.home` correctly per locale.
- Language switcher swaps locales without losing the current path.
- No string literal in any `.astro` page outside `src/pages/_dev/` — every visible string flows through `t()`. (CI grep check: documented in the doctrine doc; not yet automated.)
- Fallback chain verified: a key only present in `es.ts` renders the ES value on a `/fr/` page (and the `_dev/i18n` page reports it as untranslated).
- No runtime fetches for locale data — everything bundled per page.

## Notes

ESP is canonical because (a) the boutique is Spanish-language native, (b) Mireia drafts in ES/CA, (c) translations downstream. The pipeline assumes ES is always complete and other locales chase it. Don't invert this hierarchy without consulting Ferran.

Slug translation (per-locale URLs like `/fr/services` vs `/services`) is **not** in scope for this task. Mark as open question; revisit when FR/EN/IT translations actually land.
