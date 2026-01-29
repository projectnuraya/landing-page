import { Sparkles } from 'lucide-react'

export function MissionStatement() {
  return (
    <section
      id='mission'
      className='py-20 md:py-32 relative overflow-hidden bg-light-sand/90 dark:bg-dark-surface/90'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='max-w-4xl mx-auto text-center'>
          <div className='inline-flex items-center justify-center w-12 h-12 rounded-full bg-nuraya-gold-400/10 text-nuraya-gold-400 mb-8'>
            <Sparkles className='w-6 h-6' />
          </div>

          <h2 className='text-3xl md:text-4xl font-bold leading-tight text-deep-navy dark:text-white mb-12'>
            Teknologi bukan sekadar kode dan piksel. Ia adalah{' '}
            <span className='text-nuraya-gold-500 dark:text-nuraya-gold-300'>cahaya</span> — yang
            menerangi berbagai persoalan, memberdayakan{' '}
            <span className='text-nuraya-blue-500 dark:text-nuraya-blue-300'>sesama</span>, dan
            menciptakan dampak sosial yang bermakna.
          </h2>

          <div className='h-1 w-24 bg-gradient-to-r from-nuraya-gold-400 to-nuraya-blue-400 mx-auto rounded-full' />

          <p className='mt-12 text-lg md:text-xl text-warm-gray dark:text-gray-300 max-w-2xl mx-auto leading-relaxed'>
            Kami percaya produk digital yang paling hebat adalah yang mampu membaur dengan
            pengalaman, menyisakan hanya interaksi yang bermakna dan manfaat nyata bagi penggunanya.
          </p>
        </div>
      </div>

      {/* Decorative light rays */}
      {/* <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden opacity-30'>
        <div className='absolute top-[-50%] left-1/2 w-[1px] h-[200%] bg-gradient-to-b from-transparent via-nuraya-gold to-transparent transform rotate-45' />
        <div className='absolute top-[-50%] left-1/2 w-[1px] h-[200%] bg-gradient-to-b from-transparent via-sky-blue to-transparent transform -rotate-45' />
      </div> */}
    </section>
  )
}
