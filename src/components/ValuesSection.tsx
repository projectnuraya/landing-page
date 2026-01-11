import { Heart, Lightbulb, Sprout, Zap } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card'

const values = [
  {
    icon: Lightbulb,
    title: 'Transparansi',
    description:
      'Transparansi, Kejelasan, dan Kejujuran. Segala yang kami lakukan berlandaskan kejujuran. Tanpa agenda tersembunyi; hanya kode yang bersih dan niat yang tulus.</b>',
    color: 'text-nuraya-gold',
    bg: 'bg-nuraya-gold/10',
  },
  {
    icon: Zap,
    title: 'Aksi',
    description:
      'Eksekusi di Atas Wacana. Kami percaya pada nilai yang dihantarkan, bukan sekadar diperdebatkan. Ide itu murah; dampak nyata butuh pergerakan.',
    color: 'text-sky-blue',
    bg: 'bg-sky-blue/10',
  },
  {
    icon: Heart,
    title: 'Empati',
    description:
      'Manusia yang Utama. Kami mendesain bagi mereka yang ada di pelosok desa, sebagaimana kami mendesain bagi mereka yang tumbuh dengan digital di perkotaan.',
    color: 'text-red-400',
    bg: 'bg-red-400/10',
  },
  {
    icon: Sprout,
    title: 'Pertumbuhan',
    description:
      'Tumbuh Bersama, Berkelanjutan. Kami bekerja secara iteratif dan adaptif dengan visi jangka panjang. Kami menciptakan sistem yang tidak statis, melainkan terus berkembang seiring luasnya pertumbuhan komunitas di dalamnya.',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
]
export function ValuesSection() {
  return (
    <section
      id='values'
      className='py-24 md:py-32 bg-deep-navy dark:bg-gray-100 text-white dark:text-deep-navy relative overflow-hidden'>
      {/* Background Pattern */}
      <div className='absolute inset-0 opacity-10 dark:opacity-[0.08]'>
        <div className='absolute right-0 top-0 w-96 h-96 bg-nuraya-gold dark:bg-amber-500 rounded-full blur-[120px]' />
        <div className='absolute left-0 bottom-0 w-96 h-96 bg-sky-blue dark:bg-blue-500 rounded-full blur-[120px]' />
      </div>

      <div className='container mx-auto px-6 md:px-12 relative z-10'>
        <div className='mb-16 md:mb-24 max-w-2xl'>
          <h2 className='text-3xl md:text-4xl font-bold text-white dark:text-deep-navy mb-6'>Core Values</h2>
          <p className='text-lg text-gray-300 dark:text-warm-gray'>
            Prinsip utama di balik setiap keputusan, baris kode, dan budaya yang kami bangun.
          </p>
        </div>

        {/* Asymmetric Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8'>
          {values.map((value, index) => (
            <Card
              key={value.title}
              className={`
                group hover:-translate-y-1 transition-all duration-300 bg-white/5 dark:bg-deep-navy/5 border border-white/10 dark:border-deep-navy/10 hover:bg-white/10 dark:hover:bg-deep-navy/10
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
                <CardTitle className='text-xl md:text-2xl mb-2 text-white dark:text-deep-navy'>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-gray-400 dark:text-warm-gray leading-relaxed'>{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
