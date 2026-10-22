import { ArrowLeft, CalendarDays, Eye } from 'lucide-react'
import type { Metadata } from 'next'
import { draftMode } from 'next/headers'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { BlogLayout } from '@/components/blog/BlogLayout'
import { PostContent } from '@/components/blog/PostContent'
import { company } from '@/config/company'
import { asMedia, formatPostDate, postPath } from '@/lib/blog'
import { getPost } from '@/lib/posts'
import { ogLocale, siteUrl } from '@/lib/seo'
import type { User } from '@/payload-types'

export const dynamic = 'force-dynamic'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost((await params).slug)
  if (!post) return {}

  const title = post.meta?.title || `${post.title} — ${company.brandName}`
  const description = post.meta?.description || post.excerpt
  const image = asMedia(post.meta?.image) ?? asMedia(post.coverImage)
  const imageUrl = image?.sizes?.og?.url ?? image?.url

  return {
    title,
    description,
    alternates: { canonical: postPath(post.slug ?? '') },
    openGraph: {
      type: 'article',
      title,
      description,
      url: postPath(post.slug ?? ''),
      locale: ogLocale('id'),
      publishedTime: post.publishedAt ?? undefined,
      modifiedTime: post.updatedAt,
      images: imageUrl ? [{ url: imageUrl, alt: image?.alt }] : undefined,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const post = await getPost((await params).slug)
  if (!post) notFound()

  const { isEnabled: isPreview } = await draftMode()
  const cover = asMedia(post.coverImage)
  const authors = (post.authors ?? []).filter((a): a is User => typeof a === 'object')

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt ?? undefined,
    dateModified: post.updatedAt,
    // Payload already returns absolute media URLs; `new URL` copes with both.
    image: cover?.url ? new URL(cover.url, siteUrl).href : undefined,
    url: `${siteUrl}${postPath(post.slug ?? '')}`,
    author: authors.map((a) => ({ '@type': 'Person', name: a.name })),
    publisher: { '@type': 'Organization', name: company.legalName, url: siteUrl },
  }

  return (
    <BlogLayout>
      {isPreview && (
        <div className='bg-nuraya-gold-400 text-deep-navy text-sm'>
          <div className='container mx-auto px-6 md:px-12 py-2 flex items-center justify-between gap-4'>
            <span className='flex items-center gap-2 font-medium'>
              <Eye className='w-4 h-4' />
              Mode pratinjau: menampilkan draf terbaru.
            </span>
            <a
              href={`/next/exit-preview?path=${encodeURIComponent(postPath(post.slug ?? ''))}`}
              className='underline underline-offset-4 font-semibold'>
              Keluar pratinjau
            </a>
          </div>
        </div>
      )}

      <article>
        <header className='py-16 md:py-20 bg-gradient-to-br from-deep-navy to-deep-navy/90 dark:from-dark-surface dark:to-dark-bg text-white'>
          <div className='container mx-auto px-6 md:px-12'>
            <div className='max-w-3xl mx-auto'>
              <Link
                href='/blog'
                className='inline-flex items-center gap-2 text-sm text-nuraya-gold-400 hover:text-nuraya-gold-300 mb-8'>
                <ArrowLeft className='w-4 h-4' />
                Semua artikel
              </Link>
              <h1 className='text-3xl md:text-5xl font-bold leading-tight mb-6 text-balance'>
                {post.title}
              </h1>
              <p className='text-lg text-gray-300 mb-6'>{post.excerpt}</p>
              <div className='flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400'>
                {post.publishedAt && (
                  <span className='flex items-center gap-2'>
                    <CalendarDays className='w-4 h-4' />
                    <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
                  </span>
                )}
                {authors.length > 0 && <span>oleh {authors.map((a) => a.name).join(', ')}</span>}
              </div>
            </div>
          </div>
        </header>

        <div className='container mx-auto px-6 md:px-12 py-12 md:py-16'>
          <div className='max-w-3xl mx-auto'>
            {cover?.url && (
              <img
                src={cover.sizes?.card?.url ?? cover.url}
                alt={cover.alt}
                className='w-full rounded-2xl mb-12 shadow-sm'
              />
            )}
            <PostContent data={post.content} />
          </div>
        </div>
      </article>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
    </BlogLayout>
  )
}
