import type { Media } from '../payload-types'

import { siteUrl } from './seo'

/** Public path of a blog post. */
export const postPath = (slug: string) => `/blog/${slug}`

/**
 * Admin "Preview" link. The route checks the editor's admin session before
 * turning on draft mode, so the URL itself carries no secret.
 */
export const previewUrl = (path: string) =>
  `${siteUrl}/next/preview?path=${encodeURIComponent(path)}`

const dateFormat = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Asia/Jakarta',
})

/** "21 Oktober 2026" */
export const formatPostDate = (iso: string) => dateFormat.format(new Date(iso))

/** The populated media document, if the relation was loaded. */
export const asMedia = (value: number | Media | null | undefined): Media | null =>
  value && typeof value === 'object' ? value : null
