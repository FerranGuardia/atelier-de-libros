# T37 — Open Graph share card

**Kind:** functional graphic (programmatically generated; final design rendered externally)
**Aspect:** 1.91:1 (1200 × 630 px — Twitter / Facebook / LinkedIn standard)
**Lands in:** `public/og-default.png` (default, all pages); per-historia overrides at `public/og/{slug}.png` later.
**Used by:** `Base.astro` `<meta property="og:image">` + Twitter card

## Brief

A single share card for the site, used as the default OG image on every page. Per-page overrides come later for the historias detail pages once their photographs land. The card must read as the brand at glance — restrained, literary, paper.

## Direction

- **Background:** `--paper` (`#F5F5F0`) flat. **Not** the grain overlay (the grain is for live render only; printed flat reads cleaner).
- **Layout:** asymmetric. Wordmark + tagline on the left at ≈ 20% from the left edge, vertically centred. The right ≈ 60% holds either:
  - Option A — empty paper with a single library-green ribbon-line ≈ 80px wide.
  - Option B — a small line illustration (`hero` or `open-book` from T13/T30 once they land), centred in the right pane.
  - **Default until hero / open-book ships:** Option A.
- **Wordmark:** Cormorant 400, ≈ 64px on the 1200 × 630 canvas. Uppercase, tracking +4%. Colour `--ink`.
- **Tagline:** Cormorant 300 italic, ≈ 32px, colour `--ink-soft`. Reads *"Estilismo literario · Curaduría literaria"*.
- **No URL.** Sharing platforms render the URL alongside the image; baking it in is redundant.
- **No "Read more" / no CTA / no logo strip.**

## Anti-references

- No SaaS gradient banner.
- No big screenshot.
- No "Mireia" headshot.
- No hashtag. No social handle.
- No drop shadow under the wordmark.
- No "Find out more" call-to-action — the share card is announcement, not invitation.

## Output

- **Format:** PNG (the OG ecosystem still prefers PNG over WEBP for cards; some platforms reject WEBP).
- **Dimensions:** exactly 1200 × 630 px.
- **Colour profile:** sRGB.
- **File budget:** ≤ 200KB. Achievable easily with a flat paper background.
- **Filename:** `og-default.png`.
- **Path:** `public/og-default.png` (referenced as `/og-default.png` in Base.astro).

## Programmatic alternative

If Ferran prefers, a build-time script can render this card from typography + tokens using `sharp` + `@resvg/resvg-js` (already a dependency neighbour). The script would live at `scripts/render-og.mjs` and run in `astro build`'s `astro:build:done` hook. **Defer** to T37 finalisation; until then the static export from this prompt is the source.

## Per-historia overrides (later)

When historias detail photographs land (M05), each case gets its own OG card:

- 1200 × 630 PNG.
- Background = the case hero photograph at full bleed.
- Wordmark + case title overlaid bottom-left in `--paper` over a subtle ink scrim.

That brief is captured in T26's photographer brief; this T37 prompt only drafts the **default** card.

## Until shipped

`Base.astro` does not yet emit `og:image` (it ships `og:title`, `og:description`, `og:type`, `og:locale`). Once `og-default.png` lands, add `<meta property="og:image" content={site + '/og-default.png'}>` in `Base.astro`'s head.
