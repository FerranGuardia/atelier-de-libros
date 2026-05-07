# Task index

Status: ☐ open · ◐ in progress · ☑ done · ⏸ blocked

Each task .md addresses one focused concern. Heavy surfaces (hero, home, portfolio detail) are split across multiple tasks so composition, image direction, motion choreography, and build are each thought through separately — never collapsed into a single "make the page" task.

## Phase 0 — Doctrines (the rules of the game)

- ☐ **T01** — Visual language doc · `impeccable`
- ☐ **T02** — Astro project init + base config · `frontend-design`
- ☐ **T03** — Design tokens (colors, spacing scale) · `frontend-design` + `impeccable`
- ☐ **T04** — Typography pipeline · `frontend-design` + `impeccable`
- ☐ **T05** — Motion language · `impeccable` + `frontend-design`
- ☐ **T06** — Grid & whitespace doctrine · `impeccable`
- ☐ **T07** — Responsive doctrine · `impeccable`
- ☐ **T08** — Image system · `impeccable`
- ☐ **T09** — Navigation & scroll system · `impeccable` + `frontend-design`
- ☐ **T10** — Accessibility doctrine · `impeccable`
- ☐ **T11** — Base layout shell (assembly of T09 + T10) · `frontend-design`

## Phase 1 — Hero (exploded)

- ☐ **T12** — Hero composition & hierarchy spec · `impeccable`
- ☐ **T13** — Hero image direction + ChatGPT prompt + placeholder · `impeccable`
- ☐ **T14** — Hero motion choreography · `impeccable`
- ☐ **T15** — Hero build (assembles T12 + T13 + T14) · `frontend-design`
- ☐ **T16** — Hero audit pass · `impeccable`

## Phase 2 — Home assembly (exploded)

- ☐ **T17** — Home composition map (sections, order, rhythm, transition cues) · `impeccable`
- ☐ **T18** — Manifesto section · `frontend-design`
- ☐ **T19** — Services teaser section · `frontend-design`
- ☐ **T20** — Portfolio teaser + photo direction · `frontend-design` + `impeccable`
- ☐ **T21** — Epilogue CTA section · `frontend-design`
- ☐ **T22** — Home assembly + flow audit · `frontend-design` + `impeccable`

## Phase 3 — Inner pages

- ☐ **T23** — Servicios / "El Índice" · `frontend-design`
- ☐ **T24** — Publishers' Room · `frontend-design`
- ☐ **T25** — Historias index (composition + motion + build) · `frontend-design` + `impeccable`
- ☐ **T26** — Historias detail template (composition + image direction + build) · `frontend-design` + `impeccable`
- ☐ **T27** — Nota de la Autora · `frontend-design`
- ☐ **T28** — Epílogo / Contacto + form · `frontend-design`

## Phase 4 — Illustration system

- ☐ **T29** — Illustration placement rules · `impeccable`
- ☐ **T30** — Illustration prompts (5 SVGs via ChatGPT) · `impeccable`
- ☐ **T31** — Illustration component + integration · `frontend-design`

## Phase 5 — Polish (one audit per concern)

- ☐ **T32** — Image audit · `impeccable`
- ☐ **T33** — Motion audit · `impeccable` + `simplify`
- ☐ **T34** — Navigation & flow audit · `impeccable`
- ☐ **T35** — Responsive audit · `impeccable`
- ☐ **T36** — Accessibility audit · `impeccable`
- ☐ **T37** — SEO + OG image · `impeccable`
- ☐ **T38** — Lighthouse final pass · `impeccable`

## Phase 6 — Ship

- ☐ **T39** — Formspree provisioning · `frontend-design`
- ☐ **T40** — Cloudflare Pages deploy + smoke test · `frontend-design`

## Mireia backlog (frozen until copy/photos arrive)

- ⏸ M01 — Manifiesto
- ⏸ M02 — 4 servicios (cuerpo)
- ⏸ M03 — Publishers' Room (cuerpo)
- ⏸ M04 — Nota de la Autora (bio + portrait + signature)
- ⏸ M05 — Casos reales de portfolio (texto + fotos)

## Critical path

T01 → T02 → T03 → T04 → T05 → T06 → T07 → T08 → T09 → T10 → T11 → T12 → T13 → T14 → T15 → T16 → T17 → (T18–T21 in parallel) → T22 → (T23–T28 in parallel where dependencies clear) → T29 → T30 → T31 → (T32–T38 in audit order) → T39 → T40

## Task template axes

Each task in this project considers, where applicable: **composition & hierarchy · whitespace & rhythm · image plan · motion · navigation & interaction · responsive plan · accessibility**. Doctrine tasks (T01, T05–T10) establish the rules; build tasks cite them.
