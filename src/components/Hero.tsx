import { ArrowDown } from 'lucide-react'
import { Button } from './ui/Button'

export function Hero() {
  const scrollToMission = () => {
    const missionSection = document.getElementById('mission')
    missionSection?.scrollIntoView({
      behavior: 'smooth',
    })
  }
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center overflow-hidden pt-20 bg-white dark:bg-dark-bg'>
      {/* Background Elements */}
      <div className='absolute inset-0 z-0 pointer-events-none'>
        <div className='absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-nuraya-gold-400/15 dark:bg-nuraya-gold-400/8 rounded-full blur-[100px] animate-pulse' />
        <div className='absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-nuraya-blue-400/15 dark:bg-nuraya-blue-400/8 rounded-full blur-[120px]' />
      </div>

      <div className='container mx-auto px-8 md:px-16 lg:px-20 py-12 md:py-16 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center'>
          {/* Text Content - Asymmetric Left (7 cols) */}
          <div className='lg:col-span-7 flex flex-col items-start text-left animate-fade-up'>
            <div className='inline-block px-3 py-1 mb-6 rounded-full bg-deep-navy/15 dark:bg-nuraya-gold-400/10 border border-deep-navy/30 dark:border-nuraya-gold-400/20 text-deep-navy dark:text-nuraya-gold-200 text-sm font-medium tracking-wide'>
              PROJECT NURAYA
            </div>

            <h1 className='text-5xl md:text-6xl font-bold leading-tight tracking-tight text-deep-navy dark:text-white mb-6'>
              Menerangi masa depan dengan{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-nuraya-gold-400 to-nuraya-blue-400'>
                teknologi yang bermakna
              </span>
            </h1>

            <p className='text-xl md:text-2xl text-gray-700 dark:text-gray-100 max-w-2xl mb-2'>
              <strong>Membangun makna, menyalakan harapan.</strong>
            </p>

            <p className='text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-xl mb-10 leading-relaxed'>
              Kami membangun produk digital yang memecahkan masalah nyata, bukan gimmick. Teknologi
              harus menjadi alat untuk pendidikan, pemberdayaan, dan kolaborasi sosial.
            </p>

            <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16'>
              <Button onClick={scrollToMission} className='h-12 px-8 text-base'>
                Jelajahi Misi Kami
              </Button>
              <Button
                onClick={scrollToAbout}
                variant='outline'
                className='h-12 px-8 text-base border-deep-navy/10 text-deep-navy hover:bg-deep-navy/5 dark:border-white/10 dark:text-white dark:hover:bg-white/5'>
                Tentang Kami
              </Button>
            </div>
          </div>

          {/* Visual Element - Asymmetric Right (5 cols) */}
          <div className='lg:col-span-5 relative hidden lg:block h-full min-h-[400px]'>
            <div className='absolute inset-0 flex items-center justify-center'>
              {/* Abstract Light Representation */}
              <div className='relative w-full aspect-square max-w-[500px]'>
                <div className='absolute inset-0 bg-gradient-to-tr from-nuraya-gold-400/25 to-nuraya-blue-400/25 dark:from-nuraya-gold-400/15 dark:to-nuraya-blue-400/15 rounded-full blur-3xl animate-float' />
                <div className='absolute top-1/4 right-1/4 w-32 h-32 bg-nuraya-gold-400/50 dark:bg-nuraya-gold-400/30 rounded-full blur-2xl animate-glow' />
                <div className='absolute bottom-1/3 left-1/3 w-40 h-40 bg-nuraya-blue-400/40 dark:bg-nuraya-blue-400/25 rounded-full blur-2xl animate-pulse' />

                {/* Glass Card Floating */}
                <div
                  className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-80 glass-panel rounded-2xl border border-white/40 dark:border-white/10 flex flex-col items-center justify-center p-6 animate-float'
                  style={{
                    animationDelay: '1s',
                  }}>
                  <div className='w-16 h-16 rounded-full bg-gradient-to-br from-nuraya-gold to-orange-300 mb-6 shadow-lg shadow-nuraya-gold/30 flex items-center justify-center'>
                    <div className='w-8 h-8 bg-white/90 rounded-full blur-sm' />
                  </div>
                  <div className='w-full h-2 bg-gray-100 dark:bg-white/10 rounded-full mb-3' />
                  <div className='w-3/4 h-2 bg-gray-100 dark:bg-white/10 rounded-full mb-3' />
                  <div className='w-5/6 h-2 bg-gray-100 dark:bg-white/10 rounded-full' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-10 inset-x-0 flex justify-center z-20'>
        <div
          className='flex flex-col items-center animate-glow opacity-50 hover:opacity-100 transition-opacity cursor-pointer'
          onClick={scrollToMission}>
          <span className='text-xs uppercase tracking-widest mb-2 text-deep-navy dark:text-white'>
            Scroll
          </span>
          <ArrowDown className='w-5 h-5 text-deep-navy dark:text-white' />
        </div>
      </div>
    </section>
  )
}
