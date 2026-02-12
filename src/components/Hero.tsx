import { ArrowDown } from 'lucide-react'

import nurayaPattern from '../assets/nuraya_pattern.svg'
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
    return { rotation, key: `pattern-${row}-${col}` }
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
          {/* Text Content - Asymmetric Left (7 cols) */}
          <div className='lg:col-span-7 flex flex-col items-start text-left animate-fade-up'>
            <div className='inline-block px-3 py-1 mb-4 md:mb-6 rounded-full bg-deep-navy/15 dark:bg-nuraya-gold-400/10 border border-deep-navy/30 dark:border-nuraya-gold-400/20 text-deep-navy dark:text-nuraya-gold-200 text-sm font-medium tracking-wide'>
              PROJECT NURAYA
            </div>

            <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold leading-tight tracking-tight text-deep-navy dark:text-white mb-4 md:mb-6'>
              Menerangi masa depan dengan{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-nuraya-gold-400 to-nuraya-blue-400'>
                teknologi yang bermakna
              </span>
            </h1>

            <p className='text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-100 max-w-2xl mb-2'>
              <strong>Membangun makna, menyalakan harapan.</strong>
            </p>

            <p className='text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-8 md:mb-10 leading-relaxed'>
              Kami membangun produk digital yang memecahkan masalah nyata, bukan gimmick. Teknologi
              harus menjadi alat untuk pendidikan, pemberdayaan, dan kolaborasi sosial.
            </p>

            <div className='flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto'>
              <Button
                onClick={() => scrollToSection('products')}
                className='h-11 md:h-12 px-6 md:px-8 text-base'>
                Lihat Solusi
              </Button>
              <Button
                onClick={() => scrollToSection('about')}
                variant='outline'
                className='h-11 md:h-12 px-6 md:px-8 text-base border-deep-navy/10 text-deep-navy hover:bg-deep-navy/5 dark:border-white/10 dark:text-white dark:hover:bg-white/5'>
                Tentang Kami
              </Button>
            </div>
          </div>

          {/* Visual Element - Pattern Mosaic Grid */}
          <div className='lg:col-span-5 relative hidden lg:block min-h-[500px]'>
            {/* Horizontal mask: fade from left (transparent) to right (visible) */}
            <div
              className='absolute inset-y-[-15%] left-[-15%] right-[-25%] opacity-90 dark:opacity-50'
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
                      className='flex items-center justify-center p-1'
                      style={{ transform: `rotate(${tile.rotation}deg)` }}>
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

      {/* Simplified Scroll Indicator */}
      <button
        onClick={() => scrollToSection('mission')}
        className='absolute bottom-8 left-1/2 -translate-x-1/2 z-20 group'
        aria-label='Scroll to mission section'>
        <ArrowDown className='w-6 h-6 text-nuraya-gold-400 dark:text-nuraya-gold-300 animate-bounce opacity-60 group-hover:opacity-100 transition-opacity' />
      </button>
    </section>
  )
}
