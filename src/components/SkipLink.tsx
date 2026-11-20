/** First tab stop on every page: lets keyboard users jump past the navbar to the content. */
export function SkipLink() {
  return (
    <a
      href='#main-content'
      className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-deep-navy focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg dark:focus:bg-nuraya-gold-400 dark:focus:text-deep-navy'>
      Lewati ke konten utama
    </a>
  )
}
