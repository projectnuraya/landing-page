import config from '@payload-config'
import { draftMode } from 'next/headers'
import { getPayload, type Where } from 'payload'
import { cache } from 'react'

import type { Post } from '../payload-types'

const published: Where = { _status: { equals: 'published' } }

/** Published posts, newest first, one page at a time. */
export async function listPosts({ page = 1, limit = 12 } = {}) {
  const payload = await getPayload({ config })
  return payload.find({
    collection: 'posts',
    where: published,
    sort: '-publishedAt',
    page,
    limit,
    depth: 1,
  })
}

/**
 * One post by slug. In draft mode (turned on by the admin "Preview" button)
 * this returns the latest saved draft instead of the published version.
 *
 * Wrapped in `cache` so `generateMetadata` and the page share one query.
 */
export const getPost = cache(async (slug: string): Promise<Post | null> => {
  const { isEnabled: draft } = await draftMode()
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: draft ? { slug: { equals: slug } } : { and: [{ slug: { equals: slug } }, published] },
    draft,
    limit: 1,
    depth: 2,
  })
  return docs[0] ?? null
})

/** Slug and last-modified date of every published post, for the sitemap. */
export async function listPostSlugs() {
  const payload = await getPayload({ config })
  const { docs } = await payload.find({
    collection: 'posts',
    where: published,
    pagination: false,
    depth: 0,
    select: { slug: true, updatedAt: true },
  })
  return docs
}
