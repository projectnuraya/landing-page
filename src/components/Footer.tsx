import { ArrowUp, Github, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <footer className='bg-white dark:bg-dark-bg pt-16 pb-8 border-t border-gray-100 dark:border-white/5'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-start mb-12'>
          <div className='mb-8 md:mb-0'>
            <h2 className='text-xl md:text-2xl font-bold text-deep-navy dark:text-white mb-2'>
              PROJECT NURAYA
            </h2>
            <p className='text-sm text-warm-gray dark:text-gray-500'>
              Membangun makna, menyalakan harapan.
            </p>
          </div>

          <div className='mb-8 md:mb-0'>
            <h3 className='text-sm font-semibold text-deep-navy dark:text-white mb-1'>Projects</h3>
            <ul>
              <li>
                <a
                  href='#'
                  className='text-sm text-warm-gray dark:text-gray-500 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors'>
                  Sistem Digital Sewa Sepeda
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-warm-gray dark:text-gray-500 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors'>
                  Catat Servis
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-warm-gray dark:text-gray-500 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors'>
                  Tilawah Tracker
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm text-warm-gray dark:text-gray-500 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors'>
                  Sistem Administrasi Surat RT/RW
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className='mb-4'>
              <h3 className='text-sm font-semibold text-deep-navy dark:text-white mb-1'>
                Contacts
              </h3>
              <a
                href='mailto:hello@projectnuraya.id'
                className='text-sm text-warm-gray dark:text-gray-500 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors'>
                hello@projectnuraya.id
              </a>
            </div>
            <div className='mb-2'>
              <h3 className='text-sm font-semibold text-deep-navy dark:text-white'>Socials</h3>
            </div>
            <div className='flex gap-6'>
              <a
                href='https://github.com/projectnuraya'
                target='_blank'
                className='text-warm-gray dark:text-gray-500 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors'>
                <Github className='w-5 h-5' />
                <span className='sr-only'>GitHub</span>
              </a>
              <a
                href='#'
                className='text-warm-gray dark:text-gray-500 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors'>
                <Linkedin className='w-5 h-5' />
                <span className='sr-only'>LinkedIn</span>
              </a>
              <a
                href='#'
                className='text-warm-gray dark:text-gray-500 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors'>
                <Instagram className='w-5 h-5' />
                <span className='sr-only'>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400'>
          <p>
            © {new Date().getFullYear()}
            <a
              href='https://ptp.ahu.go.id/sertifikat?id=686e322971635ffa733f6966a9e546eb:2da925ddd9d2909e1ba364ee1d3dba84'
              target='_blank'
              className='hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors ml-1'>
              PT Nuraya Digital Nusantara.
            </a>{' '}
            All rights reserved.
          </p>

          <div className='flex items-center gap-6 mt-4 md:mt-0'>
            <Link
              to='/privacy'
              onClick={() => window.scrollTo(0, 0)}
              className='text-warm-gray dark:text-gray-500 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors'>
              Privacy
            </Link>
            <Link
              to='/terms'
              onClick={() => window.scrollTo(0, 0)}
              className='text-warm-gray dark:text-gray-500 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-500 dark:active:text-nuraya-gold-200 transition-colors'>
              Terms
            </Link>
            <Link
              to='/legal'
              onClick={() => window.scrollTo(0, 0)}
              className='text-warm-gray dark:text-gray-500 hover:text-nuraya-gold dark:hover:text-nuraya-gold active:text-nuraya-gold dark:active:text-nuraya-gold transition-colors'>
              Legal
            </Link>
            <button
              onClick={scrollToTop}
              className='flex items-center gap-2 hover:text-nuraya-gold transition-colors'>
              Back to top <ArrowUp className='w-3 h-3' />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
