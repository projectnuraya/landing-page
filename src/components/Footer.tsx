import { ArrowUp, Github, Instagram, Linkedin } from 'lucide-react'

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
            <h2 className='text-xl font-bold text-deep-navy dark:text-white mb-2'>
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
                <a href='#' className='text-gray-500 dark:text-nuraya-gold-bright hover:underline'>
                  Project Alpha
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-500 dark:text-nuraya-gold-bright hover:underline'>
                  Project Beta
                </a>
              </li>
              <li>
                <a href='#' className='text-gray-500 dark:text-nuraya-gold-bright hover:underline'>
                  Project Gamma
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
                className='text-sm text-gray-500 dark:text-nuraya-gold-bright hover:underline'>
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
                className='text-gray-500 hover:text-nuraya-gold transition-colors'>
                <Github className='w-5 h-5' />
                <span className='sr-only'>GitHub</span>
              </a>
              <a href='#' className='text-gray-500 hover:text-nuraya-gold transition-colors'>
                <Linkedin className='w-5 h-5' />
                <span className='sr-only'>LinkedIn</span>
              </a>
              <a href='#' className='text-gray-500 hover:text-nuraya-gold transition-colors'>
                <Instagram className='w-5 h-5' />
                <span className='sr-only'>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-300 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400'>
          <p>© {new Date().getFullYear()} PT Nuraya Digital Nusantara. All rights reserved.</p>

          <div className='flex items-center gap-6 mt-4 md:mt-0'>
            <a href='#' className='hover:text-deep-navy dark:hover:text-white transition-colors'>
              Privacy
            </a>
            <a href='#' className='hover:text-deep-navy dark:hover:text-white transition-colors'>
              Terms
            </a>
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
