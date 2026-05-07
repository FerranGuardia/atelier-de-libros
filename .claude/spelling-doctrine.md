# Spelling & typographic doctrine

> Output of T04c. The orthographic and typographic standards every text-emitting agent (and Mireia) follows. A misplaced apostrophe is a stain — this doc is the institutional memory.
>
> Refusals to write incorrect copy must cite a rule code (`ES-3`, `FR-NBSP`, `IT-ACUTE-GRAVE`).

## Hard universal rules (apply to all 5 languages)

| Code | Rule |
|---|---|
| `U-1` | **Curly quotes always.** Never straight `"` or `'` in rendered text. |
| `U-2` | **Em-dash** `—` (U+2014), never `--`. **En-dash** `–` (U+2013) for ranges (`pp. 12–18`). |
| `U-3` | **Ellipsis** is the single character `…` (U+2026), never three dots. |
| `U-4` | **Apostrophe** is `’` (U+2019), never `'`. |
| `U-5` | Non-breaking space (` ` / `&nbsp;`) between number+unit (`24 h`, `12 km`), digit+currency in ES/CA/FR/IT, and to prevent display-headline widows. |
| `U-6` | **No ALL CAPS for emphasis** in body. Reserve uppercase for the wordmark and individual letters where the design specifies it. |
| `U-7` | **Sentence case** for headings and section titles in every language. Title Case is a US press convention this site rejects. |
| `U-8` | **Single space after period.** No double space. |
| `U-9` | Numerals: words for **one through nine** in body prose, digits for **10+**. Always digits in tables, captions, dates, addresses. |
| `U-10` | **No emoji** anywhere in site copy. |

## Per-language rules

### Español (`es`) — canonical

**Special characters required:** `ñ Ñ`, `á é í ó ú`, `ü Ü` (`pingüino`).

| Code | Rule |
|---|---|
| `ES-1` | Opening `¿…?`, `¡…!`. Never start a question with just `?`. |
| `ES-2` | Quotation hierarchy in literary register: `«…»` (outer) → `“…”` (inner) → `‘…’` (deepest). The site is in literary register: **default to `«…»`**, not `“…”`. |
| `ES-3` | RAE since 2010 prefers **`solo`** without accent. Do not write *sólo*. |
| `ES-4` | Demonstrative pronouns (*este, ese, aquel*): no accent under current RAE rules. |
| `ES-5` | Em-dash for dialogue and parenthetical asides; no space between dash and the word it attaches to inside the aside: `—Eso —dijo ella— es un libro.` |
| `ES-6` | Capital letters carry their accents: `ÁNGEL`, not `ANGEL`. |
| `ES-7` | Decimal separator: comma. Thousands: thin space or period (`12 500` or `12.500`). |
| `ES-8` | Currency: `12,50 €` — symbol after, non-breaking space. |
| `ES-9` | Long date: `12 de mayo de 2026`. Short: `12/05/2026`, never `05/12/2026`. |

### Català (`ca`)

**Special characters required:** `ç Ç`, `l·l` (geminated L: middle dot `·` U+00B7, **not** `.` or two `ll`), `à è ò`, `é í ó ú`, `ï ü` (`raïm`, `qüestió`).

| Code | Rule |
|---|---|
| `CA-1` | Articles `el`/`la` and prepositions `de`/`per` elide before vowels: `l’aigua`, `d’ell`, `n’hi`, `s’ha`. The apostrophe is **`’`** (curly), never straight. |
| `CA-2` | **No possessive apostrophe** — Catalan does not have one. `*Joan’s llibre*` is wrong; it is `el llibre de Joan`. |
| `CA-3` | Quotation: `«…»` primary, `“…”` secondary, `‘…’` tertiary. |
| `CA-4` | Em-dash for dialogue, same as ES (`CA-DIALOGUE`). |
| `CA-5` | Decimal comma; thousands period or thin space. Currency: `12,50 €`. |
| `CA-6` | Long date: `12 de maig de 2026` (lowercase `de`, lowercase month). |
| `CA-7` | Catalan does **not** use `¿` `¡` (Spanish only). |
| `CA-8` | `paral·lel` (geminated L), never `*paral.lel*`, `*paral-lel*`, `*parallel*`. Same for `il·lustre`, `cel·la`. |
| `CA-9` | Diaeresis is mandatory where prescribed: `qüestió`, `següent`, `raïm`. |

### Français (`fr`)

**Special characters required:** `à â ä`, `é è ê ë`, `î ï`, `ô ö`, `ù û ü`, `ç`, `œ æ`, `ÿ`.

| Code | Rule |
|---|---|
| `FR-NBSP` | French inserts a **thin non-breaking space** (` ` U+202F) before `; : ! ? » %` and after `«`. `« texte »`, not `«texte»`. `Vraiment ?`, not `Vraiment?`. `12 %`, not `12%`. |
| `FR-2` | Quotation: `« … »` with narrow nbsp inside (primary). Inside `«…»` use `“…”`. |
| `FR-3` | Em-dash for dialogue, with a space after the dash: `— Bonjour, dit-elle.` |
| `FR-4` | Capital letters carry their accents: `À`, `É`, `È`, `Ç`. `*A bientôt*` is wrong; it is `À bientôt`. |
| `FR-5` | Months and days are **lowercase**: `lundi`, `mai`. |
| `FR-6` | Languages and nationalities (adjective): lowercase (`le français`, `un livre français`); the noun for the people takes capital (`les Français`). |
| `FR-7` | Decimal comma. Thousands: thin space (`12 500`). Currency: `12,50 €` — symbol after. |
| `FR-8` | Long date: `12 mai 2026` (no `le`, no comma in body prose; with `le` in formal openings: `Le 12 mai 2026,`). |
| `FR-9` | `œ` is **mandatory** in `cœur, sœur, œuvre, œil` — never `oe`. `æ` is rare but mandatory in `et cætera` (though `etc.` is preferred). |

### English (`en`) — UK style

This site uses **British English**, aligned with the European literary publishing register.

| Code | Rule |
|---|---|
| `EN-1` | Quotation primary `“…”`, secondary `‘…’` (modern UK book convention). |
| `EN-2` | Em-dash **without spaces**: `the book—a small one—was sold`. |
| `EN-3` | En-dash for ranges: `pp. 12–18`, `1990–95`. |
| `EN-4` | **Oxford comma: yes.** A literary site values clarity over column-inch economy. |
| `EN-5` | Possessives: `Mireia’s books`. Plural possessive: `the authors’ collection`. |
| `EN-6` | Decimal point. Thousands comma: `12,500.50`. |
| `EN-7` | Currency: `€12.50` — symbol before, no space (English convention). |
| `EN-8` | Long date: `12 May 2026` (UK order). Not `May 12, 2026`. No comma between day and month. |
| `EN-9` | UK spellings: `colour, favour, honour`; `centre, theatre, metre`; `organise, recognise, specialise` (`-ise`); `catalogue, dialogue`; `travelled, modelling`. |
| `EN-10` | UK verb / noun split: `practice` (noun) vs `practise` (verb); `licence` (noun) vs `license` (verb). |
| `EN-11` | Sentence case for headings. Title Case is the rejected American convention. |

### Italiano (`it`)

**Special characters:** grave `à è ì ò ù`; acute `é ó` (mandatory on `perché, affinché, sé, né`).

| Code | Rule |
|---|---|
| `IT-ACUTE-GRAVE` | The grave/acute distinction is load-bearing and the most-failed Italian rule. |
| `IT-2` | `perché` (acute), never `*perchè*`. Same for `affinché`, `né`, `sé`. |
| `IT-3` | `è` (verb "is", grave) vs `e` ("and", no accent). `dà` (verb "gives", grave) vs `da` (preposition). `lì`/`là` (place adverbs) carry their grave accents. |
| `IT-4` | Quotation: `«…»` primary (aligned with the other Romance locales); secondary `“…”`. |
| `IT-5` | Em-dash for dialogue with space: `— Buongiorno — disse.` |
| `IT-6` | `’` (curly) for elision: `l’amico`, `dell’arte`, `un’opera`. |
| `IT-7` | `un’opera` (apostrophe before feminine vowel-initial) but `un amico` (no apostrophe before masculine). Gendered, easy to err. |
| `IT-8` | Decimal comma; thousands period (`12.500,50`). Currency: `12,50 €`. |
| `IT-9` | Long date: `12 maggio 2026` (lowercase month, no `di`). |

## Glyph cheat-sheet

| Glyph | Codepoint | Use |
|---|---|---|
| `«` `»` | U+00AB / U+00BB | ES/CA/FR/IT primary quotes |
| `“` `”` | U+201C / U+201D | EN primary; others secondary |
| `‘` `’` | U+2018 / U+2019 | innermost quote, apostrophe |
| `—` | U+2014 | em-dash (dialogue, parenthetical) |
| `–` | U+2013 | en-dash (ranges) |
| `…` | U+2026 | ellipsis |
| `·` | U+00B7 | Catalan geminated l (`l·l`) |
| ` ` | U+202F | French narrow no-break space |
| ` ` | U+00A0 | non-breaking space (numbers, currency) |
| `œ` `æ` | U+0153 / U+00E6 | French ligatures |
| `ç` | U+00E7 | ES/CA/FR cedilla |
| `ñ` | U+00F1 | Spanish |
| `ü` | U+00FC | ES/CA diaeresis |

## Workflow integration

1. **Mireia tickets (M01 — M05)** carry a footer linking here, with the relevant per-language quirks called out.
2. **`impeccable` is the gatekeeper.** Any task that emits text runs an orthographic review before commit.
3. **`simplify`** treats every diff that touches `src/i18n/locales/*.ts` as text-bearing and audits against this doctrine.
4. The audit phase (T32 — T38) gains an implicit orthography lens through `impeccable`'s reviews on copy-touching tasks.

## Refusal procedure

When asked to write copy that breaks a rule:

1. State the rule code (`ES-3`, `FR-NBSP`, `IT-ACUTE-GRAVE`) in the refusal.
2. Quote the canonical glyph or form.
3. Offer the corrected version.

Example: *"`*sólo*` violates ES-3 (RAE 2010+ prefers `solo`). Corrected: `solo`."*

## Maintenance

This doctrine grows. When a new language quirk surfaces in review, it gets added — by code, with a one-line definition, in the relevant section. The doctrine is the institutional memory; updates are commits, not conversations.
