import { ArrowRight, CalendarDays } from 'lucide-react'
import Link from 'next/link'

import { asMedia, formatPostDate, postPath } from '../../lib/blog'
import type { Post } from '../../payload-types'
import { Card } from '../ui/Card'

export function PostCard({ post }: { post: Post }) {
  const cover = asMedia(post.coverImage)
  const coverUrl = cover?.sizes?.card?.url ?? cover?.url

  return (
    <Card variant='gold' className='group overflow-hidden flex flex-col h-full'>
      <Link href={postPath(post.slug ?? '')} className='flex flex-col h-full'>
        <div className='aspect-[16/9] bg-light-sand dark:bg-dark-surface overflow-hidden'>
          {coverUrl ? (
            <img
              src={coverUrl}
              alt={cover?.alt ?? ''}
              loading='lazy'
              className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
            />
          ) : (
            <div className='w-full h-full bg-gradient-to-br from-nuraya-gold-400/20 to-nuraya-blue-400/20' />
          )}
        </div>

        <div className='flex flex-col flex-1 p-6'>
          {post.publishedAt && (
            <p className='flex items-center gap-2 text-xs text-warm-gray dark:text-gray-400 mb-3'>
              <CalendarDays className='w-3.5 h-3.5' />
              <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            </p>
          )}
          <h2 className='text-xl font-bold text-deep-navy dark:text-white mb-3 group-hover:text-nuraya-gold-500 dark:group-hover:text-nuraya-gold-300 transition-colors'>
            {post.title}
          </h2>
          <p className='text-sm text-warm-gray dark:text-gray-400 leading-relaxed line-clamp-3 flex-1'>
            {post.excerpt}
          </p>
          <span className='inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-nuraya-gold-500 dark:text-nuraya-gold-300'>
            Baca selengkapnya
            <ArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
          </span>
        </div>
      </Link>
    </Card>
  )
}
