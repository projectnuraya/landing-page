const values = [
  {
    title: 'Transparansi, Kejelasan, dan Kejujuran',
    description:
      'Segala yang kami lakukan berlandaskan kejujuran. Tanpa agenda tersembunyi; hanya kode yang bersih dan niat yang tulus.',
    rule: 'border-nuraya-gold-400',
  },
  {
    title: 'Eksekusi di Atas Wacana',
    description:
      'Kami percaya pada nilai yang dihantarkan, bukan sekadar diperdebatkan. Ide itu murah; dampak nyata butuh pergerakan.',
    rule: 'border-nuraya-blue-400',
  },
  {
    title: 'Manusia yang Utama',
    description:
      'Kami mendesain bagi mereka yang ada di pelosok desa, sebagaimana kami mendesain bagi mereka yang tumbuh dengan digital di perkotaan.',
    rule: 'border-nuraya-gold-400',
  },
  {
    title: 'Tumbuh Bersama, Berkelanjutan',
    description:
      'Kami bekerja secara iteratif dan adaptif dengan visi jangka panjang. Kami menciptakan sistem yang tidak statis, melainkan terus berkembang seiring luasnya pertumbuhan komunitas di dalamnya.',
    rule: 'border-nuraya-blue-400',
  },
]

export function ValuesSection() {
  return (
    <section id='values' className='pt-6 md:pt-8 pb-20 md:pb-32 bg-white dark:bg-dark-bg'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='mb-12 max-w-2xl'>
          <h2 className='tracking-tight text-3xl md:text-4xl font-extrabold text-deep-navy dark:text-white mb-6'>
            Core Values
          </h2>
          <p className='text-lg text-warm-gray dark:text-gray-300'>
            Prinsip utama di balik setiap keputusan, baris kode, dan budaya yang kami bangun.
          </p>
        </div>

        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10'>
          {values.map((value) => (
            <li key={value.title} className={`border-t-2 pt-6 ${value.rule}`}>
              <h3 className='text-xl font-bold text-deep-navy dark:text-white mb-3'>{value.title}</h3>
              <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                {value.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
