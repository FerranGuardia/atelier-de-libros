# T04c — Multilingual spelling & typographic doctrine

**Skill:** `impeccable`
**Phase:** 0 — Doctrines
**Depends on:** T04b
**Blocks:** every Mireia ticket (M01–M05), every page that emits copy
**Mireia-blocked:** No (rules ship before her copy lands; she follows them)
**Estimated commits:** 1

## Goal
Lock the orthographic and typographic standards for ES · CA · FR · EN · IT so that **no copy emitted by this site contains spelling errors, wrong-direction quotes, ASCII-substituted punctuation, or locale-incorrect dates and numbers.** This is a book-trade website — a misplaced apostrophe is a stain.

The output is `.claude/spelling-doctrine.md`: a single reference any agent (or Mireia) can cite when writing or auditing copy. Every Mireia ticket links to it. Every text-emitting build task cites it. Every audit task tests against it.

## Hard universal rules (apply to all 5 languages)

1. **Curly quotes always**, never straight `"` or `'` in rendered text.
2. **Em-dash** `—` (U+2014), never `--`. **En-dash** `–` (U+2013) for ranges (`pp. 12–18`).
3. **Ellipsis** is the single character `…` (U+2026), never three dots.
4. **Apostrophe** is `’` (U+2019), never `'`.
5. Non-breaking space (`&nbsp;` / ` `) between **number and unit** (`24 h`, `12 km`), between **digit and currency symbol** in ES/CA/FR/IT, and to prevent widow words on display headlines.
6. **No ALL CAPS for emphasis** in body copy. Reserve uppercase for the wordmark and individual nav letters where the design specifies it.
7. **Sentence case** for headings and section titles in all languages (matches the boutique-quiet aesthetic). Title Case is a US press convention this site rejects.
8. **No double space after period.**
9. Numerals: words for **one through nine** in body prose, digits for **10+**. Always digits in tables, captions, dates, and addresses.
10. **No emoji** anywhere in site copy.

## Per-language rules

### Español (`es`) — canonical

**Special characters required:**
- `ñ Ñ` · vowels with acute accent `á é í ó ú` · diaeresis `ü Ü` (`pingüino`).

**Punctuation that gets botched in translation:**
- Opening question/exclamation marks: `¿…?`, `¡…!`. **Never** start a question with just `?`.
- Quotation hierarchy in literary register: `«…»` (outer) → `“…”` (inner) → `‘…’` (deepest).
  - The site is in literary register — **default to `«…»` for all primary quotation**, not `“…”`. Reserve curly English quotes for the `en` locale.
- Em-dash for **dialogue and parenthetical asides**:
  > —Eso —dijo ella— es un libro.

  Note: no space between dash and word it attaches to inside the aside.
- Decimal separator: comma (`12,50 €`). Thousands: thin space or period (`12 500` or `12.500`).
- Currency: `12,50 €` — symbol **after**, non-breaking space.
- Dates: `12 de mayo de 2026` (long), `12/05/2026` (short, never `05/12/2026`).

**Common errors to refuse:**
- *"sólo"* with accent — RAE since 2010 prefers **`solo`** without accent. Use `solo`.
- *"éste / ése / aquél"* (demonstrative pronouns) — **no accent** under current RAE rules.
- Capital letters **must carry their accents**: `ÁNGEL`, not `ANGEL`.
- *"haber"* vs *"a ver"* — context-dependent; never auto-correct.

### Català (`ca`)

**Special characters required:**
- `ç Ç` · `l·l` (geminated L: middle dot `·` U+00B7 between two l's, **not** a regular `.` or two separate `ll`).
- Open vowels: `à è ò` · closed: `é í ó ú` · diaeresis: `ï ü` (`raïm`, `qüestió`).

**Apostrophe rules (most-violated foreign rule):**
- Articles `el`/`la` and prepositions `de`/`per` elide before vowels: `l’aigua`, `d’ell`, `n’hi`, `s’ha`. The apostrophe is **`’` (curly)** — never straight.
- *Never* an apostrophe for possessives (Catalan has none): `*Joan’s llibre*` is wrong. It is `el llibre de Joan`.

**Quotation:**
- Primary: `«…»`. Secondary: `“…”`. Tertiary: `‘…’`.
- Em-dash for dialogue, same convention as ES.

**Numerals & dates:**
- Decimal comma, thousands period or thin space.
- Currency: `12,50 €`.
- Long date: `12 de maig de 2026` (note **`de`** before the month, lowercase month).

**Errors agents must not produce:**
- `*paral.lel*`, `*paral-lel*`, `*parallel*` — correct is **`paral·lel`**.
- `*qüestió*` without diaeresis is wrong; same for `següent`.
- Catalan does **not** use `¿` `¡` (those are Spanish only).

### Français (`fr`)

**Special characters required:**
- `à â ä · é è ê ë · î ï · ô ö · ù û ü · ç · œ æ · ÿ`.

**The non-breaking-space rule (most-violated French rule):**
French inserts a **thin non-breaking space** before `; : ! ? » %` and after `«`. In HTML render: ` ` (narrow no-break) or ` ` (regular nbsp) — pick **` `** (narrow) and document it.
- `« texte »` not `«texte»`.
- `Vraiment ?` not `Vraiment?`.
- `12 %` not `12%`.

**Quotation:**
- Primary: `« … »` with narrow nbsp inside.
- Secondary inside a `«…»`: `“…”`.
- Em-dash for dialogue, with a space after the dash:
  > — Bonjour, dit-elle.

**Capitalization:**
- Capital letters **carry their accents**: `À`, `É`, `È`, `Ç`. `*A bientôt*` is wrong; it is `À bientôt`.
- Months and days: **lowercase** (`lundi`, `mai`).
- Languages and nationalities (adjective): lowercase (`le français`, `un livre français`); the noun (the people) takes capital (`les Français`).

**Numerals & dates:**
- Decimal comma. Thousands: thin space (`12 500`).
- Currency: `12,50 €` — symbol after.
- Long date: `12 mai 2026` (no `le`, no comma in body prose; with `le` in formal openings: `Le 12 mai 2026,`).

**Ligatures:**
- `œ` is mandatory in `cœur, sœur, œuvre, œil` — never `oe`.
- `æ` rare, but mandatory in `et cætera` (though `etc.` is preferred).

### English (`en`)

**Variant choice: British English** (matches the literary-European register; aligns with French/Italian publishing world).

**Quotation:**
- Primary: `“…”`. Secondary: `‘…’`. (UK style historically used singles outer / doubles inner; modern UK book publishing now matches US doubles-outer. We follow the modern convention.)
- Em-dash **without spaces**: `the book—a small one—was sold`.
- En-dash for ranges: `pp. 12–18`, `1990–95`.

**Punctuation:**
- **Oxford comma: yes.** A literary site values clarity over column-inch economy.
- Single space after period.
- Possessives: `Mireia’s books`. Plural possessive: `the authors’ collection`.

**Numerals & dates:**
- Decimal point. Thousands comma (`12,500.50`).
- Currency: `€12.50` — symbol **before**, no space (English convention).
- Long date: `12 May 2026` (UK order), not `May 12, 2026`. No comma between day and month.

**Spelling — UK forms:**
- `colour, favour, honour` (not `color, favor, honor`).
- `centre, theatre, metre` (not `center, theater, meter`).
- `organise, recognise, specialise` (`-ise`, not `-ize`) — though `-ize` is also etymologically defensible; **pick `-ise` and stay consistent**.
- `catalogue, dialogue` (not `catalog, dialog`).
- `travelled, modelling` (double-l, not `traveled, modeling`).

**Common errors agents must not produce:**
- `it's` vs `its` (contraction vs possessive).
- `practice` (noun) vs `practise` (verb) — UK distinction; in US both are `practice`.
- Title Case for headings: **avoid**. Sentence case is the house style.

### Italiano (`it`)

**Special characters required:**
- Grave accents: `à è ì ò ù`.
- Acute accents: `é ó` (rarer; mandatory on `perché, affinché, sé, né`).
- The grave/acute distinction is **load-bearing** and the most-failed Italian rule.

**Critical orthographic distinctions:**
- `perché` (acute) — never `*perchè*`.
- `né` (acute) — never `*nè*`.
- `sé` (reflexive pronoun, acute) — never `*sè*`.
- `è` (verb "is", grave) vs `e` ("and", no accent).
- `dà` (verb "gives", grave) vs `da` (preposition).
- `lì` / `là` (place adverbs, grave) carry their accents.

**Quotation:**
- Primary: `«…»` (literary register; same as ES/CA/FR).
- Secondary: `“…”`. Em-dash for dialogue with space:
  > — Buongiorno — disse.

- Inverted commas `“…”` are also widely used in Italian publishing; **the site uses `«…»` to align with the other Romance locales.**

**Apostrophe:**
- `’` curly only. Used in elision: `l’amico, dell’arte, un’opera`.
- Note: `un’` (apostrophe) before feminine vowel-initial noun (`un’opera`). `un` (no apostrophe) before masculine (`un amico`). This is gendered and easy to err.

**Numerals & dates:**
- Decimal comma, thousands period (`12.500,50`).
- Currency: `12,50 €` — symbol after, non-breaking space.
- Long date: `12 maggio 2026` (lowercase month, no `di`).

## Glyph cheat-sheet (for any agent emitting copy)

| Glyph | Codepoint | Use |
|---|---|---|
| `«` `»` | U+00AB / U+00BB | ES/CA/FR/IT primary quotes |
| `“` `”` | U+201C / U+201D | EN primary, others secondary |
| `‘` `’` | U+2018 / U+2019 | innermost quote, apostrophe |
| `—` | U+2014 | em-dash (dialogue, parenthetical) |
| `–` | U+2013 | en-dash (ranges) |
| `…` | U+2026 | ellipsis |
| `·` | U+00B7 | Catalan geminated l (`l·l`) |
| ` ` | U+202F | French narrow no-break space |
| ` ` | U+00A0 | non-breaking space (numbers, currency) |
| `œ` `æ` | U+0153 / U+00E6 | French ligatures |
| `ç` | U+00E7 | ES/CA/FR cedilla |
| `ñ` | U+00F1 | Spanish |
| `ü` | U+00FC | ES/CA diaeresis (also DE, but not relevant) |

## Workflow integration

1. **Mireia tickets (M01–M05)** must each include a "spelling doctrine" footer linking to `.claude/spelling-doctrine.md` and listing the per-language quirks she should be careful with.
2. **`impeccable` is the gatekeeper.** Any task that emits text must run through `impeccable` for orthographic review before commit.
3. **`simplify`** treats every diff that touches `src/i18n/locales/*.ts` as text-bearing and checks against this doctrine.
4. The audit phase (T32–T38) gains an implicit "orthography" lens — already covered by `impeccable`'s reviews on copy-touching tasks.

## Deliverables

- `.claude/spelling-doctrine.md` — full document containing every rule above, structured exactly as in this task spec.
- Footer block appended to each `.claude/tasks-mireia/M0X-*.md` ticket pointing to the doctrine + the language-specific quirk list.
- One new section in `.claude/visual-language.md` (or a sibling doc) titled "Typographic punctuation" listing the universal rules (curly quotes, em-dash, ellipsis, nbsp) so they are visible from the visual spine.

## Acceptance criteria

- The doctrine doc covers every rule in this task spec, no omissions.
- All 5 M0X tickets carry the spelling-doctrine footer.
- An `impeccable` audit of `src/i18n/locales/es.ts` placeholders confirms zero violations (curly quotes, `«…»`, no `--`, no `...`).
- A spot-check audit asks: "If Mireia delivers copy with `*sólo*` (acute), does the doctrine reject it?" → yes, by rule ES-3.

## Notes

This document grows. When a new language quirk surfaces in review (a misplaced French nbsp, an Italian acute/grave swap), it gets added to the doctrine — the doctrine is the institutional memory. Refusals to write incorrect copy must cite the rule by section (`ES-3`, `FR-NBSP`, `IT-ACUTE-GRAVE`).
