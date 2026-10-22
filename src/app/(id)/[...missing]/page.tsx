import { notFound } from 'next/navigation'

/**
 * Sends every unmatched URL to this language's `not-found.tsx`. The app has one
 * root layout per language and none above them, so there is no app-wide 404
 * page for Next to fall back on.
 */
export default function MissingPage() {
  notFound()
}
