/* T04b — URL → locale helper + path-rewrite for the language switcher. */

import { defaultLocale, isLocale, type Locale } from './config'

/** Extract the locale from `Astro.url`. ESP serves at root. */
export function getLocaleFromUrl(url: URL): Locale {
  const seg = url.pathname.split('/')[1]
  return seg && isLocale(seg) ? seg : defaultLocale
}

/** Rewrite a path to a different locale, preserving the rest of the slug.
 * `/historias/caso-x` (es) → `/en/historias/caso-x` (en).
 * `/ca/servicios` → `/servicios` (es, root). */
export function localizePath(pathname: string, target: Locale): string {
  const parts = pathname.split('/').filter(Boolean)
  if (parts[0] && isLocale(parts[0])) parts.shift()
  if (target === defaultLocale) return '/' + parts.join('/')
  return '/' + target + (parts.length ? '/' + parts.join('/') : '')
}
