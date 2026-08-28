import type { Locale } from '../../lib/seo'

/**
 * Content blocks a legal section can hold.
 *
 * Text fields accept a deliberately small inline syntax — `**bold**` and
 * `[label](href)` — so the content files stay plain data with no JSX. Anything
 * richer than that belongs in a new block kind, not in embedded markup.
 */
export type LegalBlock =
  | { kind: 'paragraph'; text: string }
  | { kind: 'list'; items: string[]; ordered?: boolean }
  | { kind: 'definitions'; items: { term: string; value: string }[] }
  | { kind: 'note'; text: string }
  | { kind: 'table'; head: string[]; rows: string[][] }

export interface LegalSection {
  heading: string
  blocks: LegalBlock[]
}

export interface LegalDocument {
  locale: Locale
  /** Page heading and `<h1>`. */
  title: string
  /** Lead paragraph under the heading. */
  intro: string
  lastUpdated: string
  sections: LegalSection[]
  callout: { title: string; text: string }
  /** Bottom call-to-action above the "back home" button. */
  contactPrompt: string
  backHome: string
  /** Link to the same document in the other language. */
  languageSwitch: { label: string; to: string }
}
