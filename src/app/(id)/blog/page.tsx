import { ArrowLeft, ArrowRight, Newspaper } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'

import { BlogLayout } from '@/components/blog/BlogLayout'
import { PostCard } from '@/components/blog/PostCard'
import { listPosts } from '@/lib/posts'
import { pageMetadata } from '@/lib/seo'

// Rendered per request so a published post shows up immediately, without a
// rebuild or cache invalidation.
export const dynamic = 'force-dynamic'

interface Props {
  searchParams: Promise<{ page?: string }>
}

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const page = Number((await searchParams).page) || 1
  const metadata = pageMetadata('/blog')
  // Later pages are reachable but should not compete with page one in search.
  return page > 1 ? { ...metadata, robots: { index: false, follow: true } } : metadata
}

const pagerClass =
  'inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-deep-navy/10 dark:border-white/10 text-sm font-medium text-deep-navy dark:text-white hover:bg-deep-navy/5 dark:hover:bg-white/5 transition-colors'

export default async function BlogIndexPage({ searchParams }: Props) {
  const page = Math.max(1, Number((await searchParams).page) || 1)
  const posts = await listPosts({ page })

  return (
    <BlogLayout>
      <section className='py-16 md:py-24 bg-gradient-to-br from-deep-navy to-deep-navy/90 dark:from-dark-surface dark:to-dark-bg text-white'>
        <div className='container mx-auto px-6 md:px-12'>
          <div className='max-w-3xl mx-auto text-center'>
            <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-nuraya-gold-500/20 text-nuraya-gold-500 mb-6'>
              <Newspaper className='w-8 h-8' />
            </div>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>Blog</h1>
            <p className='text-lg text-gray-300'>
              Catatan, tutorial, dan cerita di balik produk dan layanan yang kami bangun.
            </p>
          </div>
        </div>
      </section>

      <section className='py-16 md:py-24'>
        <div className='container mx-auto px-6 md:px-12'>
          {posts.docs.length === 0 ? (
            <p className='text-center text-warm-gray dark:text-gray-400'>
              Belum ada artikel. Nantikan tulisan pertama kami.
            </p>
          ) : (
            <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto'>
              {posts.docs.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}

          {posts.totalPages > 1 && (
            <nav
              aria-label='Halaman artikel'
              className='flex items-center justify-center gap-4 mt-16'>
              {posts.hasPrevPage && (
                <Link
                  href={posts.prevPage === 1 ? '/blog' : `/blog?page=${posts.prevPage}`}
                  className={pagerClass}>
                  <ArrowLeft className='w-4 h-4' />
                  Sebelumnya
                </Link>
              )}
              <span className='text-sm text-warm-gray dark:text-gray-400'>
                Halaman {posts.page} dari {posts.totalPages}
              </span>
              {posts.hasNextPage && (
                <Link href={`/blog?page=${posts.nextPage}`} className={pagerClass}>
                  Berikutnya
                  <ArrowRight className='w-4 h-4' />
                </Link>
              )}
            </nav>
          )}
        </div>
      </section>
    </BlogLayout>
  )
}
