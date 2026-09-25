import { ShieldCheck, Server } from 'lucide-react'

import { Card } from './ui/Card'

export function AboutSection() {
  return (
    <section id='about' className='py-20 md:py-32 bg-white dark:bg-dark-bg'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          {/* Left Column: Story & Philosophy */}
          <div className='space-y-8'>
            <div className='inline-block px-3 py-1 rounded-full bg-nuraya-blue-400/10 text-nuraya-blue-500 dark:text-nuraya-blue-300 text-xs font-semibold uppercase tracking-wider'>
              Tentang Perusahaan
            </div>
            <h2 className='text-3xl md:text-4xl font-bold text-deep-navy dark:text-white leading-tight'>
              Membangun Fondasi Digital dengan Transparansi & Integritas
            </h2>
            <div className='space-y-5 text-base md:text-lg text-warm-gray dark:text-gray-300 leading-relaxed'>
              <p>
                Nama "Nuraya" berakar dari perpaduan dua kata:{' '}
                <span className='text-nuraya-gold-500 dark:text-nuraya-gold-300 font-semibold'>
                  Nur
                </span>{' '}
                (cahaya yang memberi kejelasan) dan{' '}
                <span className='text-nuraya-blue-500 dark:text-nuraya-blue-300 font-semibold'>
                  Raya
                </span>{' '}
                (keluasan pandangan dan visi jangka panjang).
              </p>
              <p>
                Di tengah ekosistem teknologi yang kerap terjebak jargon berlebihan dan kompleksitas tak perlu,{' '}
                <strong>PT Nuraya Digital Nusantara</strong> hadir memberikan pendekatan yang pragmatis:
                membangun solusi digital yang memecahkan hambatan operasional nyata secara terukur.
              </p>
              <p>
                Kami tidak sekadar menulis kode, kami mendesain aset digital yang dapat diandalkan untuk jangka panjang—didukung
                oleh infrastruktur mandiri, kepatuhan regulasi data, dan komunikasi langsung dengan para insinyur yang membangunnya.
              </p>
            </div>
          </div>

          {/* Right Column: Engineering & Trust Pillars */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 lg:pt-0'>
            <Card
              variant='gold'
              className='p-6 border-l-4 border-l-nuraya-gold-500 dark:border-l-nuraya-gold-500 hover:-translate-y-1.5 transition-transform duration-300 flex flex-col justify-between'>
              <div>
                <div className='w-10 h-10 rounded-lg bg-nuraya-gold-400/10 text-nuraya-gold-500 flex items-center justify-center mb-4'>
                  <Server className='w-5 h-5' />
                </div>
                <h3 className='text-xl font-bold text-deep-navy dark:text-white mb-1'>
                  Kedaulatan Data
                </h3>
                <p className='text-xs font-semibold text-nuraya-gold-500 dark:text-nuraya-gold-300 uppercase tracking-wider mb-3'>
                  Infrastruktur di Indonesia
                </p>
                <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
                  Seluruh aplikasi dan basis data klien berjalan pada infrastruktur server mandiri (Proxmox)
                  yang berlokasi di Indonesia untuk privasi maksimal dan kepatuhan regulasi lokal.
                </p>
              </div>
            </Card>

            <Card
              variant='blue'
              className='p-6 border-l-4 border-l-nuraya-blue-400 dark:border-l-nuraya-blue-400 hover:-translate-y-1.5 transition-transform duration-300 sm:translate-y-8 flex flex-col justify-between'>
              <div>
                <div className='w-10 h-10 rounded-lg bg-nuraya-blue-400/10 text-nuraya-blue-500 flex items-center justify-center mb-4'>
                  <ShieldCheck className='w-5 h-5' />
                </div>
                <h3 className='text-xl font-bold text-deep-navy dark:text-white mb-1'>
                  Entitas Resmi & Legal
                </h3>
                <p className='text-xs font-semibold text-nuraya-blue-500 dark:text-nuraya-blue-300 uppercase tracking-wider mb-3'>
                  Terdaftar Kemenkumham
                </p>
                <p className='text-sm text-gray-600 dark:text-gray-300 leading-relaxed'>
                  Beroperasi resmi dengan NIB dan sertifikat AHU yang valid. Setiap kerja sama dilindungi oleh
                  kontrak transparan dan jaminan purna jual profesional.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
