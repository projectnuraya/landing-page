import { ArrowDown, MessageCircle } from 'lucide-react'

import { company } from '../config/company'
import { scrollToSection } from '../lib/scroll'

import { PatternBand } from './PatternBand'
import { Button } from './ui/Button'

export function Hero() {
  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center overflow-hidden pt-20 bg-white dark:bg-dark-bg'>
      {/* Background Glow Elements - positioned behind text for warmth */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute top-[10%] left-[0%] w-[600px] h-[600px] bg-nuraya-gold-400/25 dark:bg-nuraya-gold-400/18 rounded-full blur-[100px]' />
        <div className='absolute bottom-[15%] left-[10%] w-[550px] h-[550px] bg-nuraya-blue-400/20 dark:bg-nuraya-blue-400/15 rounded-full blur-[110px]' />
      </div>

      <div className='container mx-auto px-6 md:px-12 lg:px-20 pt-8 pb-8 md:pt-12 md:pb-28 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center'>
          {/* Text Content - Asymmetric Left (8 cols) */}
          <div className='lg:col-span-8 flex flex-col items-start text-left'>
            {/* Beat 1: Brand badge & Main Headline (Instant 0ms) */}
            <div className='motion-safe:animate-hero-rise flex flex-col items-start w-full'>
              {/* Required brand badge for OAuth and brand verification */}
              <div className='inline-flex items-center gap-2 px-3.5 py-1 mb-4 md:mb-6 rounded-full bg-deep-navy/10 dark:bg-nuraya-gold-400/10 border border-deep-navy/20 dark:border-nuraya-gold-400/20 text-deep-navy dark:text-nuraya-gold-200 text-xs sm:text-sm font-medium tracking-wide'>
                <span className='w-2 h-2 rounded-full bg-nuraya-gold-400 motion-safe:animate-pulse' />
                <span>Project Nuraya</span>
                <span aria-hidden='true' className='text-gray-500 dark:text-gray-400'>|</span>
                <span className='text-gray-600 dark:text-gray-300 font-normal'>
                  Software Studio & Digital Solutions
                </span>
              </div>

              <h1 className='text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-deep-navy dark:text-white mb-4 md:mb-6'>
                Membangun Solusi Digital Andal untuk{' '}
                <span className='text-brand-gradient'>
                  Mengakselerasi Bisnis Anda
                </span>
              </h1>
            </div>

            {/* Beat 2: Descriptions & Action CTA Buttons (130ms snappy follow-up) */}
            <div
              className='motion-safe:animate-hero-rise flex flex-col items-start w-full'
              style={{ animationDelay: '130ms' }}>
              <p className='text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mb-4 leading-relaxed'>
                <strong>PT Nuraya Digital Nusantara</strong> menghadirkan rekayasa perangkat lunak modern,
                sistem informasi terintegrasi, dan arsitektur data berkinerja tinggi yang dirancang untuk
                kebutuhan nyata organisasi Anda.
              </p>

              <p className='text-base sm:text-lg font-medium text-deep-navy dark:text-white max-w-xl mb-8 md:mb-10 leading-relaxed'>
                Anda berdiskusi langsung dengan engineer yang membangun sistemnya, tanpa perantara sales,
                dengan estimasi biaya dan waktu yang transparan.
              </p>

              <div className='flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto'>
                <Button
                  asChild
                  className='h-11 md:h-12 px-6 md:px-8 text-base gap-2 active:scale-[0.98] transition-transform'>
                  <a href={company.whatsappUrl} target='_blank' rel='noopener noreferrer'>
                    <MessageCircle className='w-5 h-5' />
                    Konsultasi Proyek (WhatsApp)
                  </a>
                </Button>
                <Button
                  onClick={() => scrollToSection('products')}
                  variant='outline'
                  className='h-11 md:h-12 px-6 md:px-8 text-base border-deep-navy/15 text-deep-navy hover:bg-deep-navy/5 dark:border-white/15 dark:text-white dark:hover:bg-white/5 active:scale-[0.98] transition-all'>
                  Lihat Layanan & Produk
                </Button>
              </div>
            </div>
          </div>

          {/* The brandbook pattern at full strength: whole tiles, one orientation, no fade */}
          <PatternBand tile={64} className='hidden lg:block lg:col-span-4 h-[420px] dark:opacity-90' />
        </div>

        {/* Mobile has no side column, so the pattern closes the hero as a full-bleed band */}
        <PatternBand tile={46} className='lg:hidden mt-10 -mx-6 md:-mx-12 h-[151px] dark:opacity-90' />
      </div>

      {/* Professional Gentle Glide Scroll Indicator */}
      <button
        onClick={() => scrollToSection('products')}
        className='absolute bottom-6 left-1/2 -translate-x-1/2 z-20 group hidden md:flex flex-col items-center justify-center gap-1.5 min-h-11 min-w-11 px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nuraya-gold-400 rounded-md'
        aria-label='Scroll ke section solusi'>
        <span className='text-xs font-medium uppercase tracking-wider text-warm-gray dark:text-gray-400 group-hover:text-nuraya-gold-400 transition-colors'>
          Scroll
        </span>
        <ArrowDown className='w-5 h-5 text-nuraya-gold-400 dark:text-nuraya-gold-300 motion-safe:animate-gentle-glide group-hover:text-nuraya-gold-300 transition-colors' />
      </button>
    </section>
  )
}
