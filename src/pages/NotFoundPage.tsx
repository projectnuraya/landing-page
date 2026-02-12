import { ArrowLeft, Home } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'

export function NotFoundPage() {
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Halaman Tidak Ditemukan — Nuraya Digital Nusantara'
  }, [])

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
            <Link to='/'>
              <Home className='w-4 h-4' />
              Beranda
            </Link>
          </Button>
          <Button
            variant='outline'
            onClick={() => navigate(-1)}
            className='h-11 px-6 gap-2 border-deep-navy/10 text-deep-navy hover:bg-deep-navy/5 dark:border-white/10 dark:text-white dark:hover:bg-white/5'>
            <ArrowLeft className='w-4 h-4' />
            Kembali
          </Button>
        </div>
      </div>
    </div>
  )
}
