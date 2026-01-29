import { Button } from './ui/Button'

export function CollaborationSection() {
  return (
    <section id='collaboration' className='py-20 md:py-32 bg-light-sand/90 dark:bg-dark-surface/90'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          <div className='lg:w-1/2'>
            <h2 className='text-3xl md:text-4xl font-bold text-deep-navy dark:text-white mb-6'>
              Mari Membangun Sesuatu yang Bermakna Bersama
            </h2>
            <p className='text-lg text-warm-gray dark:text-gray-300 mb-8 leading-relaxed'>
              Pintu kami selalu terbuka bagi mitra yang berbagi visi dengan kami. Baik Anda
              organisasi bisnis atau sosial yang memerlukan arahan teknis, hingga pengembang yang
              ingin berbagi melalui open source.
            </p>

            <div className='space-y-4 mb-8'>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-nuraya-gold-400' />
                <span className='text-deep-navy dark:text-gray-200'>Technical Partnership</span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-nuraya-blue-400' />
                <span className='text-deep-navy dark:text-gray-200'>Kolaborasi Strategis</span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-green-500' />
                <span className='text-deep-navy dark:text-gray-200'>Kontribusi Open Source</span>
              </div>
            </div>
          </div>

          <div className='lg:w-1/2 w-full'>
            <div className='relative'>
              <div className='absolute -inset-4 bg-nuraya-blue-400/20 dark:bg-nuraya-gold-400/15 opacity-20 blur-2xl rounded-full' />
              <div className='relative bg-white dark:bg-dark-surface p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10'>
                <h3 className='text-xl md:text-2xl font-semibold mb-2 text-deep-navy dark:text-white'>
                  Punya ide projek?
                </h3>
                <p className='text-warm-gray dark:text-gray-400 mb-6 text-sm'>
                  Ceritakan pada kami masalah yang ingin Anda selesaikan.
                </p>

                <form className='space-y-4' onSubmit={(e) => e.preventDefault()}>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <input
                      type='text'
                      placeholder='Nama'
                      className='w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-white/10 text-deep-navy dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-nuraya-gold-400 dark:focus:ring-nuraya-gold-300 focus:border-transparent transition-all'
                    />
                    <input
                      type='email'
                      placeholder='Email'
                      className='w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-white/10 text-deep-navy dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-nuraya-gold-400 dark:focus:ring-nuraya-gold-300 focus:border-transparent transition-all'
                    />
                  </div>
                  <textarea
                    placeholder='Ceritakan sedikit tentang visi Anda...'
                    rows={4}
                    className='w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-bg border border-gray-200 dark:border-white/10 text-deep-navy dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-nuraya-gold-400 dark:focus:ring-nuraya-gold-300 focus:border-transparent transition-all resize-none'
                  />
                  <Button type='submit' className='w-full'>
                    Kirim Pesan
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
