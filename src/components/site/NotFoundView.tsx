'use client'

import { ArrowLeft, Home } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { applyStoredTheme } from '../../lib/theme'
import { Button } from '../ui/Button'

export function NotFoundView() {
  const router = useRouter()

  // With one root layout per language, Next renders 404s in the browser from
  // an empty shell, so the pre-paint theme script never runs for them.
  useEffect(applyStoredTheme, [])

  return (
    <div className='min-h-screen flex items-center justify-center bg-soft-white dark:bg-dark-bg transition-colors duration-300 px-6'>
      <div className='text-center max-w-lg'>
        {/* Big 404 with gradient */}
        <h1 className='text-8xl md:text-9xl font-extrabold tracking-tighter'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-nuraya-gold-400 to-nuraya-blue-400'>
            404
          </span>
        </h1>

        <h2 className='text-2xl md:text-3xl font-bold text-deep-navy dark:text-white mt-4 mb-3'>
          Halaman Tidak Ditemukan
        </h2>
        <p className='text-warm-gray dark:text-gray-400 mb-10 leading-relaxed'>
          Maaf, halaman yang Anda cari tidak ada atau sudah dipindahkan. Silakan kembali ke beranda.
        </p>

        <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
          <Button asChild className='h-11 px-6 gap-2'>
            <Link href='/'>
              <Home className='w-4 h-4' />
              Beranda
            </Link>
          </Button>
          <Button
            variant='outline'
            onClick={() => router.back()}
            className='h-11 px-6 gap-2 border-deep-navy/10 text-deep-navy hover:bg-deep-navy/5 dark:border-white/10 dark:text-white dark:hover:bg-white/5'>
            <ArrowLeft className='w-4 h-4' />
            Kembali
          </Button>
        </div>
      </div>
    </div>
  )
}
