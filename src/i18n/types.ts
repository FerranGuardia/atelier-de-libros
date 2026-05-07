/* T04b — Dictionary shape inferred from the canonical es.ts.
 *
 * Translation files (ca/fr/en/it) `satisfies Partial<DeepNullable<Dictionary>>`,
 * which gives them three options per key: matching string (translated),
 * `null` (deliberately untranslated → fall back to ES), or absent
 * (also falls back). Anything else is a TS error. */

import type esDict from './locales/es'

export type Dictionary = typeof esDict

export type DeepNullable<T> = T extends string
  ? string | null
  : T extends ReadonlyArray<infer U>
    ? ReadonlyArray<DeepNullable<U>>
    : T extends object
      ? { [K in keyof T]?: DeepNullable<T[K]> }
      : T

export type PartialDictionary = DeepNullable<Dictionary>
