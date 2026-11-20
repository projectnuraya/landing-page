import { ArrowUp, Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'

import nurayaLogoDark from '../assets/nuraya_logo_dark.svg'
import nurayaLogoLight from '../assets/nuraya_logo_light.svg'

import { company, foundedLabel } from '../config/company'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <footer className='bg-white dark:bg-dark-bg pb-8'>
      {/* Same brand rule that opens the contact section, so the page is framed by one motif */}
      <div aria-hidden='true' className='h-1 bg-brand-gradient mt-14 md:mt-20 mb-16' />
      <div className='container mx-auto px-6 md:px-12'>
        <div className='flex flex-col md:flex-row justify-between items-start md:items-start gap-12 mb-16'>
          <div className='max-w-sm md:max-w-md'>
            <h2 className='sr-only'>Project Nuraya</h2>
            <Link to='/' onClick={() => window.scrollTo(0, 0)} aria-label='Project Nuraya, ke beranda'>
              <img src={nurayaLogoLight} alt='' aria-hidden='true' className='h-14 md:h-20 w-auto dark:hidden' />
              <img src={nurayaLogoDark} alt='' aria-hidden='true' className='h-14 md:h-20 w-auto hidden dark:block' />
            </Link>
            <p className='mt-6 text-3xl md:text-4xl font-extrabold tracking-tight leading-snug text-deep-navy dark:text-white'>
              Membangun makna, menyalakan harapan.
            </p>
          </div>

          <div>
            <h3 className='text-base font-bold text-deep-navy dark:text-white mb-4 flex items-center gap-2'>
              <span className='w-1 h-4 bg-nuraya-gold-400 rounded-full' />
              Projects
            </h3>
            <ul>
              <li>
                <a
                  href='https://tilawah-tracker.projectnuraya.id/'
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label='Buka Tilawah Tracker di tab baru'
                  className='inline-flex items-center min-h-11 text-sm md:text-base text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-800 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-900 dark:active:text-nuraya-gold-200 transition-colors'>
                  Tilawah Tracker
                </a>
              </li>
              <li>
                <a
                  href='/#roadmap'
                  className='inline-flex items-center min-h-11 text-sm md:text-base text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-800 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-900 dark:active:text-nuraya-gold-200 transition-colors'>
                  Sistem Digital Sewa Sepeda
                </a>
              </li>
              <li>
                <a
                  href='/#roadmap'
                  className='inline-flex items-center min-h-11 text-sm md:text-base text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-800 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-900 dark:active:text-nuraya-gold-200 transition-colors'>
                  Catat Servis Digital
                </a>
              </li>
              <li>
                <a
                  href='/#roadmap'
                  className='inline-flex items-center min-h-11 text-sm md:text-base text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-800 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-900 dark:active:text-nuraya-gold-200 transition-colors'>
                  Sistem Administrasi Komunitas & Warga
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className='text-base font-bold text-deep-navy dark:text-white mb-4 flex items-center gap-2'>
              <span className='w-1 h-4 bg-nuraya-blue-400 rounded-full' />
              Contact
            </h3>
            <div>
              <a
                href={`mailto:${company.email}`}
                className='flex items-center min-h-11 text-sm md:text-base text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-800 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-900 dark:active:text-nuraya-gold-200 transition-colors'>
                {company.email}
              </a>
              <div>
                <h4 className='text-sm font-semibold text-deep-navy dark:text-white mt-3 mb-1'>
                  Follow Us
                </h4>
                <div className='flex gap-1 -ml-3'>
                  <a
                    href={company.github}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center w-11 h-11 text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-800 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-900 dark:active:text-nuraya-gold-200 transition-all hover:scale-110'
                    aria-label='GitHub Project Nuraya (tab baru)'>
                    <Github className='w-5 h-5' />
                  </a>
                  <a
                    href={company.linkedin}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center justify-center w-11 h-11 text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-800 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-900 dark:active:text-nuraya-gold-200 transition-all hover:scale-110'
                    aria-label='LinkedIn Project Nuraya (tab baru)'>
                    <Linkedin className='w-5 h-5' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center pt-10 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 gap-4'>
          <div className='text-center md:text-left space-y-1'>
            <p>
              © {new Date().getFullYear()}{' '}
              <a
                href={company.ahuCertificateUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-nuraya-gold-800 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-900 dark:active:text-nuraya-gold-200 transition-colors font-medium'>
                {company.legalName}
              </a>
              . All rights reserved.
            </p>
            <p className='text-sm text-gray-600 dark:text-gray-400'>
              NIB {company.nib} · Didirikan {foundedLabel} · {company.address.city}, {company.address.country}
            </p>
          </div>

          <div className='flex items-center gap-3 sm:gap-5'>
            <Link
              to='/privacy'
              onClick={() => window.scrollTo(0, 0)}
              className='inline-flex items-center min-h-11 px-1 text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-800 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-900 dark:active:text-nuraya-gold-200 transition-colors font-medium'>
              Privacy
            </Link>
            <Link
              to='/terms'
              onClick={() => window.scrollTo(0, 0)}
              className='inline-flex items-center min-h-11 px-1 text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-800 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-900 dark:active:text-nuraya-gold-200 transition-colors font-medium'>
              Terms
            </Link>
            <Link
              to='/legal'
              onClick={() => window.scrollTo(0, 0)}
              className='inline-flex items-center min-h-11 px-1 text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-800 dark:hover:text-nuraya-gold-300 active:text-nuraya-gold-900 dark:active:text-nuraya-gold-200 transition-colors font-medium'>
              Legal
            </Link>
            <button
              onClick={scrollToTop}
              className='inline-flex items-center justify-center gap-1.5 min-h-11 min-w-11 px-1 text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-800 dark:hover:text-nuraya-gold-300 transition-colors font-medium'
              aria-label='Kembali ke atas'>
              <span className='hidden sm:inline'>Top</span>
              <ArrowUp className='w-4 h-4' />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
