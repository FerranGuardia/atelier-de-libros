# i18n doctrine

> Output of T04b. Lives next to `visual-language.md` and `design-system.md`. Cited by every text-emitting task.

## Five locales

| Code | Language | Role |
|---|---|---|
| `es` | Castellano | **Default + canonical source** — every key exists here first |
| `ca` | Català | Primary co-language (Mireia bilingual) |
| `fr` | Français | Translation target |
| `en` | English (UK) | Translation target |
| `it` | Italiano | Translation target |

Switcher order: ES · CA · FR · EN · IT.

## URL strategy

- ESP at root: `/`, `/servicios`, `/historias/{slug}`. **No `/es/` prefix.**
- Others prefixed: `/ca/…`, `/fr/…`, `/en/…`, `/it/…`.
- Per-locale slug translation is **out of scope** for now (open question for Mireia). Slugs stay ESP-canonical across locales.

Astro config: see `astro.config.mjs` `i18n` block.

## Source layout

```
src/i18n/
  config.ts           ← locale list, default, switcher order, native labels
  locale.ts           ← getLocaleFromUrl, localizePath
  t.ts                ← resolver: t(), tHtml(), allKeys(), localeCoverage()
  types.ts            ← Dictionary inferred from es.ts
  locales/
    es.ts             ← canonical, populated
    ca.ts             ← Partial<Dictionary>, smoke-test key only
    fr.ts             ←       "
    en.ts             ←       "
    it.ts             ←       "
```

`es.ts` types every other locale via `Dictionary = typeof esDict`. CA/FR/EN/IT files `satisfies Partial<DeepNullable<Dictionary>>` — so missing keys, `null` values, or matching strings type-check; anything else is a TS error.

## Key conventions

```
<page>.<section>.<element>[.<variant>]
```

- snake_case for multi-word leaves; dot-separated path otherwise.
- No spaces, no accents, no capitals in keys.
- Reserved namespaces:
  - `meta.*` — `<title>`, OG, descriptions.
  - `aria.*` — screen-reader-only labels.
  - `cta.*` — buttons / verb-phrase links.
  - `brand.*` — wordmark, tagline.

## Resolver behaviour

`t(key, locale)`:

1. Look up the key in the requested locale.
2. If missing or `null`, fall back to `es`.
3. If still missing in **dev**: throw (loud — surfaces during build).
4. If still missing in **prod**: log + return the key string (never empty DOM).

`tHtml(key, locale)` — alias of `t()` whose name documents at the call site that the result is intended for `set:html`. Plain `t()` should never be passed to `set:html`.

### Three states per translation slot

| Value type | Meaning |
|---|---|
| `string` | Translated. |
| `null` | Deliberately not translated yet → fall back to ES. |
| absent (key not present) | Not translated yet → fall back to ES (treated identically to `null`). |

Distinction: `""` (empty string) means **intentionally blank in this locale** — e.g. removing a tagline that doesn't translate. Use sparingly.

## Adding a new key

1. Add it to `src/i18n/locales/es.ts` first, with the final ES copy.
2. TypeScript will flag the four other locale files as out of date if they declared this branch — they still type-check because their fields are partial.
3. Optionally pre-stub the key in CA/FR/EN/IT with `null` to make the TODO explicit on the dev page.
4. Use `t('your.new.key', locale)` at the call site.
5. Verify on `/dev/i18n` that the new key shows in the coverage table.

## Marking a translation done

In the relevant locale file:

```ts
const dict: PartialDictionary = {
  home: {
    hero: { headline_part_1: 'Curatoría literaria' /* now CA-translated */ }
  }
}
```

A translation is **complete for a locale** when the locale's `pending` count on `/dev/i18n` reaches zero. There's no automated CI check yet — the dev page is the audit surface.

## Mireia-blocked copy bridge

Per CLAUDE.md (commit `c75995b`), the copy doctrine is:

- **M01 (manifesto)** — the brand-voice spine. Mireia-locked draft is in [`tasks-mireia/M01-drafts.md`](tasks-mireia/M01-drafts.md). The values live in `home.manifesto.axiom_{1..4}` of `es.ts` and render on the page with `<!-- M01 DRAFT -->` adjacent. Mireia revises on the rendered page.
- **M02 — M05** — lorem ipsum estructural in `es.ts`, prefixed with the marker `__LOREM_M0{n}__` so a grep across `src/i18n/` enumerates every pending slot. The page-side `<!-- M0X LOREM -->` HTML comment sits next to the rendered output.

Until Mireia delivers, **non-ES locales never override these slots** — they stay `null` so they fall through to the ES lorem (a French viewer should still see ES lorem, not invented French).

## XSS

`t()` returns a plain string. Astro's default escaping handles HTML-special characters at the `{...}` interpolation site. Use `tHtml()` only when the dictionary value is *deliberately* HTML markup (rare — currently zero such keys), and pass it through `set:html`. Never concatenate user input into either.

## Hreflang & OG

Every page emits, via `Base.astro`:

- `<link rel="alternate" hreflang="es|ca|fr|en|it" href="…">` per locale.
- `<link rel="alternate" hreflang="x-default" href="…(ES URL)">`.
- `<meta property="og:locale" content="…">` for the active locale.
- `<meta property="og:locale:alternate" content="…">` for the four others.

The path is rebuilt from the canonical (ES-rooted) `pathname` prop using `localizePath()`.

## Spelling / orthography

Companion doctrine: [`spelling-doctrine.md`](spelling-doctrine.md) (T04c). Every translation file follows it. Refusals to write incorrect copy must cite the rule code (`ES-3`, `FR-NBSP`, `IT-ACUTE-GRAVE`).

## Dev surface

`/dev/i18n` — coverage table + per-key audit, all 5 locales, fallback-aware. Delete `src/pages/dev/` before T40 deploy.

## Acceptance contract (T04b)

- All 5 locale files type-check against `Dictionary` via `Partial<DeepNullable<Dictionary>>`.
- `/`, `/ca/`, `/fr/`, `/en/`, `/it/` each return the correct `<html lang>`.
- The smoke-test key `nav.home` resolves per locale.
- An ES-only key on a `/fr/` page renders the ES value (verified on `/dev/i18n`).
- No string literals in `.astro` pages outside `src/pages/dev/` — every visible string flows through `t()`.
- No runtime fetches for locale data; everything bundled.

## Open questions

- Per-locale slug translation (`/fr/services` vs `/services`). Defer to when FR/EN/IT translations actually land.
- Plural/cardinal handling. None of the current copy needs it; revisit if Mireia introduces counted phrases.
- Right-to-left support. Not in scope for any current target locale.
