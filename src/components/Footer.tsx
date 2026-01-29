import { ArrowUp, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <footer className='bg-white dark:bg-dark-bg pt-20 pb-8 border-t border-gray-100 dark:border-white/5'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-start gap-12 mb-16'>
          <div className='max-w-xs'>
            <h2 className='text-2xl md:text-3xl font-bold text-deep-navy dark:text-white mb-3'>
              PROJECT <span className='text-nuraya-gold-400'>NURAYA</span>
            </h2>
            <p className='text-base text-warm-gray dark:text-gray-400 leading-relaxed'>
              Membangun makna, menyalakan harapan.
            </p>
          </div>

          <div>
            <h3 className='text-base font-bold text-deep-navy dark:text-white mb-4 flex items-center gap-2'>
              <span className='w-1 h-4 bg-nuraya-gold-400 rounded-full' />
              Projects
            </h3>
            <ul className='space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-sm md:text-base text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors'>
                  Sistem Digital Sewa Sepeda
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm md:text-base text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors'>
                  Catat Servis
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm md:text-base text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors'>
                  Tilawah Tracker
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm md:text-base text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors'>
                  Sistem Administrasi Surat RT/RW
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-base font-bold text-deep-navy dark:text-white mb-4 flex items-center gap-2'>
              <span className='w-1 h-4 bg-nuraya-blue-400 rounded-full' />
              Contact
            </h3>
            <div className='space-y-4'>
              <a
                href='mailto:hello@projectnuraya.id'
                className='block text-sm md:text-base text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors'>
                hello@projectnuraya.id
              </a>
              <div>
                <h4 className='text-sm font-semibold text-deep-navy dark:text-white mb-3'>
                  Follow Us
                </h4>
                <div className='flex gap-4'>
                  <a
                    href='https://github.com/projectnuraya'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-all hover:scale-110'
                    aria-label='Visit our GitHub'>
                    <Github className='w-5 h-5' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 gap-4'>
          <p className='text-center md:text-left'>
            © {new Date().getFullYear()}{' '}
            <a
              href='https://ptp.ahu.go.id/sertifikat?id=686e322971635ffa733f6966a9e546eb:2da925ddd9d2909e1ba364ee1d3dba84'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors font-medium'>
              PT Nuraya Digital Nusantara
            </a>
            . All rights reserved.
          </p>

          <div className='flex items-center gap-6'>
            <Link
              to='/privacy'
              onClick={() => window.scrollTo(0, 0)}
              className='text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors font-medium'>
              Privacy
            </Link>
            <Link
              to='/terms'
              onClick={() => window.scrollTo(0, 0)}
              className='text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors font-medium'>
              Terms
            </Link>
            <Link
              to='/legal'
              onClick={() => window.scrollTo(0, 0)}
              className='text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors font-medium'>
              Legal
            </Link>
            <button
              onClick={scrollToTop}
              className='flex items-center gap-1.5 text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 transition-colors font-medium'
              aria-label='Scroll to top'>
              <span className='hidden sm:inline'>Top</span>
              <ArrowUp className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
