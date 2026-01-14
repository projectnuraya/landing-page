import { Code2, Database, Globe, Lightbulb, Rocket, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card'
import { Button } from './ui/Button'

const services = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Website dan aplikasi web yang dirancang khusus untuk kebutuhan bisnis Anda. Dari landing page hingga sistem manajemen internal, kami bangun dengan teknologi modern dan performa optimal.',
    target: 'UMKM, Komunitas, Organisasi',
    status: 'available',
    color: 'text-sky-blue',
    bg: 'bg-sky-blue/10',
  },
  {
    icon: Lightbulb,
    title: 'IT Consulting',
    description:
      'Bingung memilih teknologi yang tepat? Kami bantu Anda menavigasi dunia digital dengan arahan yang jelas dan strategi yang terukur. Tanpa jargon yang membingungkan.',
    target: 'Startup, Bisnis Berkembang',
    status: 'available',
    color: 'text-nuraya-gold',
    bg: 'bg-nuraya-gold/10',
  },
  {
    icon: Database,
    title: 'Data Solutions',
    description:
      'Pengolahan dan manajemen data yang membantu Anda mengambil keputusan berbasis fakta. Dari dashboard sederhana hingga integrasi sistem yang kompleks.',
    target: 'Bisnis dengan Data Operasional',
    status: 'available',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
  },
]

const comingSoon = [
  {
    icon: Users,
    title: 'Community Hub',
    description:
      'Platform manajemen komunitas yang memudahkan koordinasi, komunikasi, dan kolaborasi antar anggota. Didesain untuk komunitas yang ingin tumbuh bersama.',
    status: 'coming',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Code2,
    title: 'DevKit Open Source',
    description:
      'Kumpulan tools dan template open source untuk mempercepat development. Karena kami percaya berbagi ilmu itu investasi, bukan kerugian.',
    status: 'coming',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
  {
    icon: Rocket,
    title: 'Business Starter Pack',
    description:
      'Paket lengkap untuk UMKM yang baru memulai digitalisasi. Website, sistem kasir sederhana, dan manajemen inventori dalam satu tempat.',
    status: 'coming',
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
  },
]

export function ProductSection() {
  const scrollToCollaboration = () => {
    const collaborationSection = document.getElementById('collaboration')
    collaborationSection?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <section id='products' className='py-24 md:py-32 bg-light-sand/50 dark:bg-dark-surface/50'>
      <div className='container mx-auto px-6 md:px-12'>
        {/* Section Header */}
        <div className='mb-16 max-w-3xl'>
          <h2 className='text-3xl md:text-4xl font-bold text-deep-navy dark:text-white mb-6'>
            Solusi Kami
          </h2>
          <p className='text-lg text-warm-gray dark:text-gray-300 leading-relaxed'>
            Bukan sekadar janji manis atau proposal berlembar-lembar. Ini adalah solusi konkret yang
            kami tawarkan — dibangun dengan transparansi, dikerjakan dengan dedikasi penuh, dan
            disampaikan langsung tanpa perantara.
          </p>
        </div>

        {/* Services Section */}
        <div className='mb-20'>
          <div className='flex items-center gap-3 mb-8'>
            <div className='h-px flex-1 bg-gradient-to-r from-nuraya-gold/50 to-transparent dark:from-nuraya-gold/30' />
            <span className='text-sm font-semibold text-nuraya-gold uppercase tracking-wider'>
              Layanan Tersedia
            </span>
            <div className='h-px flex-1 bg-gradient-to-l from-nuraya-gold/50 to-transparent dark:from-nuraya-gold/30' />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {services.map((service) => (
              <Card
                key={service.title}
                className='group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden'>
                {/* Available Badge */}
                <div className='absolute top-4 right-4'>
                  <span className='inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'>
                    Tersedia
                  </span>
                </div>

                <CardHeader className='pb-4'>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.bg} border ${service.color} transition-transform group-hover:scale-110 duration-300`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <CardTitle className='text-xl'>{service.title}</CardTitle>
                  <CardDescription className='text-xs uppercase tracking-wider mt-1'>
                    {service.target}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='text-warm-gray dark:text-gray-400 leading-relaxed text-sm'>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Coming Soon Section */}
        <div className='mb-16'>
          <div className='flex items-center gap-3 mb-8'>
            <div className='h-px flex-1 bg-gradient-to-r from-sky-blue/50 to-transparent dark:from-sky-blue/30' />
            <span className='text-sm font-semibold text-sky-blue uppercase tracking-wider'>
              Segera Hadir
            </span>
            <div className='h-px flex-1 bg-gradient-to-l from-sky-blue/50 to-transparent dark:from-sky-blue/30' />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
            {comingSoon.map((product) => (
              <Card
                key={product.title}
                className='group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden opacity-90 hover:opacity-100'>
                {/* Coming Soon Badge */}
                <div className='absolute top-4 right-4'>
                  <span className='inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'>
                    Segera
                  </span>
                </div>

                <CardHeader className='pb-4'>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${product.bg} border ${product.color} transition-transform group-hover:scale-110 duration-300`}>
                    <product.icon className={`w-6 h-6 ${product.color}`} />
                  </div>
                  <CardTitle className='text-xl'>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-warm-gray dark:text-gray-400 leading-relaxed text-sm'>
                    {product.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className='text-center'>
          <div className='inline-flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/50 dark:bg-dark-bg/50 border border-black/5 dark:border-white/5'>
            <p className='text-warm-gray dark:text-gray-300 max-w-md'>
              Punya kebutuhan spesifik yang tidak ada di daftar? Ceritakan pada kami — mungkin kami
              bisa membantu.
            </p>
            <Button onClick={scrollToCollaboration} className='px-8'>
              Diskusikan Kebutuhan Anda
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
