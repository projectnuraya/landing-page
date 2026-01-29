import { Heart, Lightbulb, Sprout, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'

const values = [
  {
    icon: Lightbulb,
    title: 'Transparansi',
    description: (
      <>
        <strong>Transparansi, Kejelasan, dan Kejujuran.</strong> Segala yang kami lakukan
        berlandaskan kejujuran. Tanpa agenda tersembunyi; hanya kode yang bersih dan niat yang
        tulus.
      </>
    ),
    color: 'text-nuraya-gold-400',
    bg: 'bg-nuraya-gold-400/10',
  },
  {
    icon: Zap,
    title: 'Aksi',
    description: (
      <>
        <strong>Eksekusi di Atas Wacana.</strong> Kami percaya pada nilai yang dihantarkan, bukan
        sekadar diperdebatkan. Ide itu murah; dampak nyata butuh pergerakan.
      </>
    ),
    color: 'text-nuraya-blue-400',
    bg: 'bg-nuraya-blue-400/10',
  },
  {
    icon: Heart,
    title: 'Empati',
    description: (
      <>
        <strong>Manusia yang Utama.</strong> Kami mendesain bagi mereka yang ada di pelosok desa,
        sebagaimana kami mendesain bagi mereka yang tumbuh dengan digital di perkotaan.
      </>
    ),
    color: 'text-red-400',
    bg: 'bg-red-400/10',
  },
  {
    icon: Sprout,
    title: 'Pertumbuhan',
    description: (
      <>
        <strong>Tumbuh Bersama, Berkelanjutan.</strong> Kami bekerja secara iteratif dan adaptif
        dengan visi jangka panjang. Kami menciptakan sistem yang tidak statis, melainkan terus
        berkembang seiring luasnya pertumbuhan komunitas di dalamnya.
      </>
    ),
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
]

export function ValuesSection() {
  return (
    <section
      id='values'
      className='py-20 md:py-32 bg-gradient-to-br from-nuraya-gold-400/20 via-nuraya-blue-400/15 to-warm-gray/10 dark:from-gray-800 dark:via-gray-700/50 dark:to-gray-800/80 text-deep-navy dark:text-white relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-40 dark:opacity-20'>
        <div className='absolute right-0 top-0 w-96 h-96 bg-nuraya-gold-400/60 dark:bg-nuraya-gold-400/40 rounded-full blur-[120px]' />
        <div className='absolute left-0 bottom-0 w-96 h-96 bg-nuraya-blue-400/60 dark:bg-nuraya-blue-400/40 rounded-full blur-[120px]' />
      </div>

      {/* Border glow effect */}
      <div className='absolute inset-0 border-y border-nuraya-gold-400/30 dark:border-nuraya-gold-400/15 pointer-events-none' />

      <div className='container mx-auto px-6 md:px-12 relative z-10'>
        <div className='mb-12 max-w-2xl'>
          <h2 className='text-3xl md:text-4xl font-bold text-deep-navy dark:text-white mb-6'>
            Core Values
          </h2>
          <p className='text-lg text-warm-gray dark:text-gray-300'>
            Prinsip utama di balik setiap keputusan, baris kode, dan budaya yang kami bangun.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8'>
          {values.map((value, index) => (
            <Card
              key={value.title}
              variant={index % 2 === 0 ? 'gold' : 'blue'}
              className={`
                group hover:-translate-y-1 transition-all duration-300 bg-white dark:bg-gray-900 backdrop-blur-sm
                ${index === 0 ? 'lg:col-span-7' : ''}
                ${index === 1 ? 'lg:col-span-5' : ''}
                ${index === 2 ? 'lg:col-span-5' : ''}
                ${index === 3 ? 'lg:col-span-7' : ''}
              `}>
              <CardHeader>
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${value.bg} border ${value.color} transition-transform group-hover:scale-110 duration-300`}>
                  <value.icon className='w-6 h-6' />
                </div>
                <CardTitle className='text-xl md:text-2xl mb-2 text-deep-navy dark:text-white'>
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
