/* T04b — Resolver. `t(key, locale)` looks up a dot-path key in the
 * requested locale; falls back to ES if missing or null. In dev, missing
 * everywhere throws (loud). In prod, it logs and returns the key string —
 * never empty DOM.
 *
 * Two entry points:
 *   - t()      → plain string. XSS-safe by default.
 *   - tHtml()  → string intended for `set:html`. Same lookup, marker name
 *                makes the intent visible at the call site. */

import esDict from './locales/es'
import caDict from './locales/ca'
import frDict from './locales/fr'
import enDict from './locales/en'
import itDict from './locales/it'
import { defaultLocale, type Locale } from './config'
import type { Dictionary, PartialDictionary } from './types'

type AnyDict = Dictionary | PartialDictionary

const dictionaries: Record<Locale, AnyDict> = {
  es: esDict,
  ca: caDict,
  fr: frDict,
  en: enDict,
  it: itDict
}

/* Dot-path leaf typing, e.g. 'home.hero.headline_part_1'.
 * Constrained to keys whose value is `string` so callers can't pass an
 * intermediate-node path like 'home.hero'. */
type Leaves<T> = T extends string
  ? ''
  : T extends object
    ? {
        [K in keyof T & string]: Leaves<T[K]> extends ''
          ? `${K}`
          : `${K}.${Leaves<T[K]>}`
      }[keyof T & string]
    : never

export type Key = Leaves<Dictionary>

function lookup(dict: AnyDict, key: string): string | null | undefined {
  const parts = key.split('.')
  let cursor: unknown = dict
  for (const p of parts) {
    if (cursor && typeof cursor === 'object' && p in (cursor as object)) {
      cursor = (cursor as Record<string, unknown>)[p]
    } else {
      return undefined
    }
  }
  if (typeof cursor === 'string') return cursor
  if (cursor === null) return null
  return undefined
}

const isDev = import.meta.env?.DEV ?? false

export function t(key: Key, locale: Locale = defaultLocale): string {
  const requested = lookup(dictionaries[locale], key)
  if (typeof requested === 'string') return requested

  // null or missing → fall back to ES
  if (locale !== defaultLocale) {
    const fallback = lookup(dictionaries[defaultLocale], key)
    if (typeof fallback === 'string') return fallback
  }

  if (isDev) {
    throw new Error(`[i18n] Missing key in es.ts: "${key}"`)
  }
  console.warn(`[i18n] Missing key (returning key string): "${key}"`)
  return key
}

/** Same as `t()`. Use when the rendered string contains intentional HTML
 * and the call site uses `set:html`. The wrapper exists to make HTML
 * intent grep-able and to keep `t()` XSS-safe by convention. */
export const tHtml = t

/** Audit helper for the dev page: returns a per-locale completeness map. */
export function localeCoverage(): Record<
  Locale,
  { translated: number; pending: number; total: number }
> {
  const allKeys: string[] = []
  const walk = (node: unknown, prefix: string) => {
    if (typeof node === 'string') {
      allKeys.push(prefix)
      return
    }
    if (node && typeof node === 'object') {
      for (const [k, v] of Object.entries(node)) {
        walk(v, prefix ? `${prefix}.${k}` : k)
      }
    }
  }
  walk(esDict, '')

  const out = {} as Record<
    Locale,
    { translated: number; pending: number; total: number }
  >
  for (const [code, dict] of Object.entries(dictionaries) as [Locale, AnyDict][]) {
    let translated = 0
    let pending = 0
    for (const k of allKeys) {
      const v = lookup(dict, k)
      if (typeof v === 'string') translated++
      else pending++
    }
    out[code] = { translated, pending, total: allKeys.length }
  }
  return out
}

export function allKeys(): string[] {
  const out: string[] = []
  const walk = (node: unknown, prefix: string) => {
    if (typeof node === 'string') {
      out.push(prefix)
      return
    }
    if (node && typeof node === 'object') {
      for (const [k, v] of Object.entries(node)) {
        walk(v, prefix ? `${prefix}.${k}` : k)
      }
    }
  }
  walk(esDict, '')
  return out
}

export function rawLookup(key: string, locale: Locale): string | null | undefined {
  return lookup(dictionaries[locale], key)
}
