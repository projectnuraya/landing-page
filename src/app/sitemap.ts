import type { MetadataRoute } from 'next'

import { postPath } from '@/lib/blog'
import { listPostSlugs } from '@/lib/posts'
import { pages, siteUrl } from '@/lib/seo'

// Built per request so new posts appear without a rebuild.
export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await listPostSlugs()

  return [
    ...pages.map((page) => ({ url: `${siteUrl}${page.path}` })),
    ...posts
      .filter((post) => post.slug)
      .map((post) => ({
        url: `${siteUrl}${postPath(post.slug!)}`,
        lastModified: post.updatedAt,
      })),
  ]
}
