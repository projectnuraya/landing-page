import { ArrowDown, MessageCircle } from 'lucide-react'

import nurayaPattern from '../assets/nuraya_pattern.svg'
import { company } from '../config/company'
import { scrollToSection } from '../lib/scroll'

import { Button } from './ui/Button'

export function Hero() {
  // Generate pattern mosaic tiles
  const COLS = 7
  const ROWS = 4
  const patternTiles = Array.from({ length: COLS * ROWS }, (_, i) => {
    const row = Math.floor(i / COLS)
    const col = i % COLS
    // Alternate rotation for interlocking weave effect
    const rotation = (row + col) % 2 === 0 ? 0 : 180
    // Staggered shimmer animation delay for subtle breathing wave
    const animDelay = `${((row + col) * 0.35).toFixed(2)}s`
    return { rotation, animDelay, key: `pattern-${row}-${col}` }
  })

  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center overflow-hidden pt-20 bg-white dark:bg-dark-bg'>
      {/* Background Glow Elements - positioned behind text for warmth */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute top-[10%] left-[0%] w-[600px] h-[600px] bg-nuraya-gold-400/25 dark:bg-nuraya-gold-400/18 rounded-full blur-[100px] animate-pulse-slow' />
        <div
          className='absolute bottom-[15%] left-[10%] w-[550px] h-[550px] bg-nuraya-blue-400/20 dark:bg-nuraya-blue-400/15 rounded-full blur-[110px] animate-pulse-slow'
          style={{ animationDelay: '2.5s' }}
        />
      </div>

      <div className='container mx-auto px-6 md:px-12 lg:px-20 py-8 md:py-12 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center'>
          {/* Text Content - Asymmetric Left (8 cols) */}
          <div className='lg:col-span-8 flex flex-col items-start text-left'>
            {/* Required brand badge for OAuth and brand verification */}
            <div className='inline-flex items-center gap-2 px-3.5 py-1 mb-4 md:mb-6 rounded-full bg-deep-navy/10 dark:bg-nuraya-gold-400/10 border border-deep-navy/20 dark:border-nuraya-gold-400/20 text-deep-navy dark:text-nuraya-gold-200 text-xs sm:text-sm font-medium tracking-wide animate-fade-in'>
              <span className='w-2 h-2 rounded-full bg-nuraya-gold-400 animate-pulse' />
              <span>Project Nuraya</span>
              <span className='text-gray-400 dark:text-gray-500'>|</span>
              <span className='text-gray-600 dark:text-gray-300 font-normal'>Software Studio & Digital Solutions</span>
            </div>

            <h1
              className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-deep-navy dark:text-white mb-4 md:mb-6 animate-fade-in'
              style={{ animationDelay: '180ms' }}>
              Membangun Solusi Digital Andal untuk{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-nuraya-gold-400 to-nuraya-blue-400'>
                Mengakselerasi Bisnis Anda
              </span>
            </h1>

            <p
              className='text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mb-4 leading-relaxed animate-fade-in'
              style={{ animationDelay: '340ms' }}>
              <strong>PT Nuraya Digital Nusantara</strong> menghadirkan rekayasa perangkat lunak modern,
              sistem informasi terintegrasi, dan arsitektur data berkinerja tinggi yang dirancang untuk kebutuhan nyata organisasi Anda.
            </p>

            <p
              className='text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-xl mb-8 md:mb-10 leading-relaxed animate-fade-in'
              style={{ animationDelay: '480ms' }}>
              Transparan, berakar pada kebutuhan pengguna, dan dikembangkan langsung oleh tim engineering tanpa perantara.
            </p>

            <div
              className='flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto animate-fade-in'
              style={{ animationDelay: '600ms' }}>
              <Button
                asChild
                className='h-11 md:h-12 px-6 md:px-8 text-base bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 gap-2 active:scale-[0.98] transition-transform'>
                <a href={company.whatsappUrl} target='_blank' rel='noopener noreferrer'>
                  <MessageCircle className='w-5 h-5' />
                  Konsultasi Proyek (WhatsApp)
                </a>
              </Button>
              <Button
                onClick={() => scrollToSection('products')}
                variant='outline'
                className='h-11 md:h-12 px-6 md:px-8 text-base border-deep-navy/15 text-deep-navy hover:bg-deep-navy/5 dark:border-white/15 dark:text-white dark:hover:bg-white/5 active:scale-[0.98] transition-all'>
                Eksplorasi Solusi
              </Button>
            </div>
          </div>

          {/* Visual Element - Pattern Mosaic Grid with Subtle Breathing Shimmer */}
          <div className='lg:col-span-4 relative hidden lg:block min-h-[500px]'>
            {/* Horizontal mask: fade from left (transparent) to right (visible) */}
            <div
              className='absolute inset-y-[-15%] left-[-15%] right-[-25%] opacity-90 dark:opacity-60'
              style={{
                maskImage: 'linear-gradient(to right, transparent 5%, black 30%)',
                WebkitMaskImage: 'linear-gradient(to right, transparent 5%, black 30%)',
              }}>
              {/* Vertical mask: fade top and bottom edges */}
              <div
                style={{
                  maskImage:
                    'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                  WebkitMaskImage:
                    'linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)',
                }}>
                <div className='grid grid-cols-7 gap-3'>
                  {patternTiles.map((tile) => (
                    <div
                      key={tile.key}
                      className='flex items-center justify-center p-1 motion-safe:animate-shimmer-subtle'
                      style={{
                        transform: `rotate(${tile.rotation}deg)`,
                        animationDelay: tile.animDelay,
                      }}>
                      <img
                        src={nurayaPattern}
                        alt=''
                        className='w-full h-auto select-none pointer-events-none'
                        draggable={false}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Gentle Glide Scroll Indicator */}
      <button
        onClick={() => scrollToSection('products')}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 z-20 group flex flex-col items-center gap-1.5 focus:outline-none'
        aria-label='Scroll ke section solusi'>
        <span className='text-[11px] font-medium uppercase tracking-wider text-warm-gray dark:text-gray-400 group-hover:text-nuraya-gold-400 transition-colors'>
          Scroll
        </span>
        <ArrowDown className='w-5 h-5 text-nuraya-gold-400 dark:text-nuraya-gold-300 motion-safe:animate-gentle-glide group-hover:text-nuraya-gold-300 transition-colors' />
      </button>
    </section>
  )
}
