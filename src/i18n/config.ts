/* T04b — i18n config. Locale list, default, switcher metadata. */

export const locales = ['es', 'ca', 'fr', 'en', 'it'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'es'

/* Display order in the language switcher. Romance-first, English centred. */
export const switcherOrder: readonly Locale[] = ['es', 'ca', 'fr', 'en', 'it']

/* Native-name labels for the switcher. Two-letter codes are too cryptic
 * once you're already in a foreign locale. */
export const localeLabels: Record<Locale, string> = {
  es: 'Castellano',
  ca: 'Català',
  fr: 'Français',
  en: 'English',
  it: 'Italiano'
}

/* hreflang values for <link rel="alternate">. Same shape as `locales`
 * for now (no regional variants). */
export const hreflang: Record<Locale, string> = {
  es: 'es',
  ca: 'ca',
  fr: 'fr',
  en: 'en',
  it: 'it'
}

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value)
}
