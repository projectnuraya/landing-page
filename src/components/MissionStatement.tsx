/** The mission as its own beat between the offer and the story. Not in the nav on purpose. */
export function MissionStatement() {
  return (
    <section id='mission' className='py-20 md:py-28 bg-deep-navy text-white'>
      <div className='container mx-auto px-6 md:px-12'>
        <figure className='max-w-4xl mx-auto text-center'>
          <blockquote>
            <p className='tracking-tight text-3xl md:text-4xl font-extrabold leading-tight text-white'>
              Teknologi bukan sekadar kode dan piksel. Ia adalah{' '}
              <span className='text-nuraya-gold-300'>cahaya</span> — yang menerangi berbagai
              persoalan, memberdayakan <span className='text-nuraya-blue-300'>sesama</span>, dan
              menciptakan dampak sosial yang bermakna.
            </p>
          </blockquote>
          <div className='h-1 w-24 bg-brand-gradient mx-auto rounded-full mt-10' aria-hidden='true' />
        </figure>
      </div>
    </section>
  )
}
