import { ShieldCheck, Server } from 'lucide-react'

import { company, foundedLabel } from '../config/company'

export function AboutSection() {
  return (
    <section id='about' className='pt-20 md:pt-32 pb-14 md:pb-20 bg-white dark:bg-dark-bg'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          {/* Left Column: Story & Philosophy */}
          <div className='space-y-8'>
            <h2 className='tracking-tight text-3xl md:text-4xl font-extrabold text-deep-navy dark:text-white leading-tight'>
              Membangun Fondasi Digital dengan Transparansi & Integritas
            </h2>
            <div className='space-y-5 text-base md:text-lg text-warm-gray dark:text-gray-300 leading-relaxed'>
              <p>
                Nama "Nuraya" berakar dari perpaduan dua kata:{' '}
                <span className='text-nuraya-gold-800 dark:text-nuraya-gold-300 font-semibold'>
                  Nur
                </span>{' '}
                (cahaya yang memberi kejelasan) dan{' '}
                <span className='text-nuraya-blue-700 dark:text-nuraya-blue-300 font-semibold'>
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
                Kami tidak sekadar menulis kode. Kami mendesain aset digital yang dapat diandalkan untuk
                jangka panjang.
              </p>
            </div>

            <div className='border-t border-black/10 dark:border-white/10 pt-6'>
              <p className='text-lg font-bold text-deep-navy dark:text-white'>
                {company.founder.name}
              </p>
              <p className='text-sm text-warm-gray dark:text-gray-400'>
                {company.founder.roleId}, {company.legalName} · Didirikan {foundedLabel} di{' '}
                {company.address.city}
              </p>
            </div>
          </div>

          {/* Right Column: the two trust pillars, plainly stated */}
          <div className='space-y-10 lg:pt-14'>
            <div className='flex gap-4'>
              <Server className='w-6 h-6 mt-1 shrink-0 text-nuraya-gold-700 dark:text-nuraya-gold-300' aria-hidden='true' />
              <div>
                <h3 className='text-xl font-bold text-deep-navy dark:text-white'>Kedaulatan Data</h3>
                <p className='text-sm font-semibold text-nuraya-gold-800 dark:text-nuraya-gold-300 mt-1 mb-3'>
                  Infrastruktur di Indonesia
                </p>
                <p className='text-base text-warm-gray dark:text-gray-300 leading-relaxed'>
                  Seluruh aplikasi dan basis data klien berjalan pada infrastruktur server mandiri (Proxmox)
                  yang berlokasi di Indonesia untuk privasi maksimal dan kepatuhan regulasi lokal.
                </p>
              </div>
            </div>

            <div className='flex gap-4 border-t border-black/10 dark:border-white/10 pt-10'>
              <ShieldCheck className='w-6 h-6 mt-1 shrink-0 text-nuraya-blue-600 dark:text-nuraya-blue-300' aria-hidden='true' />
              <div>
                <h3 className='text-xl font-bold text-deep-navy dark:text-white'>Entitas Resmi & Legal</h3>
                <p className='text-sm font-semibold text-nuraya-blue-700 dark:text-nuraya-blue-300 mt-1 mb-3'>
                  Terdaftar Kemenkumham
                </p>
                <p className='text-base text-warm-gray dark:text-gray-300 leading-relaxed'>
                  Beroperasi resmi dengan NIB dan sertifikat AHU yang valid. Setiap kerja sama dilindungi oleh
                  kontrak transparan dan jaminan purna jual profesional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
