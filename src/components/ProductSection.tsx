import { Check, Database, ExternalLink, Globe, Lightbulb, MessageCircle } from 'lucide-react'

import { company } from '../config/company'
import { scrollToSection } from '../lib/scroll'

import { Button } from './ui/Button'
import { Card, CardContent, CardHeader } from './ui/Card'

const services = [
  {
    icon: Globe,
    title: 'Web & Custom Application Development',
    description:
      'Arsitektur web modern, portal bisnis, dan aplikasi kustom yang dirancang dengan performa optimal, keamanan ketat, dan skalabilitas tinggi untuk mendukung pertumbuhan bisnis Anda.',
    target: 'Perusahaan, Startup, & Organisasi',
    deliverables: [
      'Landing page & website korporat berkinerja tinggi',
      'Aplikasi web kustom & portal internal operasional',
      'Integrasi payment gateway, sistem otentikasi & API',
    ],
    price: {
      label: 'Mulai dari',
      value: 'Rp5.000.000',
      note: 'Untuk landing page & website korporat. Aplikasi kustom dihitung sesuai kebutuhan.',
    },
    color: 'text-nuraya-blue-600 dark:text-nuraya-blue-300',
    bg: 'bg-nuraya-blue-400/15',
  },
  {
    icon: Lightbulb,
    title: 'IT Consulting & System Architecture',
    description:
      'Konsultasi strategis untuk membantu organisasi memilih fondasi teknologi yang tepat, merancang arsitektur yang efisien, dan menghindari pemborosan anggaran infrastruktur.',
    target: 'Founder, CTO, & Manajemen Bisnis',
    deliverables: [
      'Audit sistem & rekomendasi arsitektur perangkat lunak',
      'Strategi deployment & optimalisasi self-hosted / cloud',
      'Perencanaan keamanan & kepatuhan data',
    ],
    price: {
      label: 'Harga',
      value: 'Sesuai kebutuhan',
      note: 'Estimasi biaya & waktu kami kirim transparan setelah diskusi awal.',
    },
    color: 'text-nuraya-gold-700 dark:text-nuraya-gold-300',
    bg: 'bg-nuraya-gold-400/15',
  },
  {
    icon: Database,
    title: 'Data Solutions & Process Automation',
    description:
      'Pengolahan data bisnis dan otomatisasi alur kerja manual menjadi sistem terstruktur. Mengubah data operasional menjadi dashboard analitik yang memudahkan pengambilan keputusan.',
    target: 'Bisnis dengan Alur Kerja & Data Aktif',
    deliverables: [
      'Dashboard analitik & Business Intelligence',
      'Otomatisasi proses repetitif antar sistem',
      'Arsitektur & manajemen basis data relasional',
    ],
    price: {
      label: 'Harga',
      value: 'Sesuai kebutuhan',
      note: 'Estimasi biaya & waktu kami kirim transparan setelah diskusi awal.',
    },
    color: 'text-deep-navy dark:text-gray-200',
    bg: 'bg-deep-navy/10 dark:bg-white/10',
  },
]

const liveProduct = {
  title: 'Tilawah Tracker',
  badge: 'Live & Produksi',
  description:
    'Platform koordinasi dan monitoring tilawah komunal berbasis web. Memfasilitasi pembagian target mingguan secara otomatis, rekapitulasi pelaporan real-time ke kanal pesan, dan pengalaman pengguna tanpa hambatan instalasi.',
  url: 'https://tilawah-tracker.projectnuraya.id/',
  host: 'tilawah-tracker.projectnuraya.id',
  highlights: [
    'Sistem pembagian juz mingguan otomatis',
    'Generator rekap siap kirim ke WhatsApp',
    'PWA ringan dengan waktu muat di bawah 1 detik',
  ],
}

const roadmapProducts = [
  {
    title: 'Sistem Digital Sewa Sepeda',
    description:
      'Sistem manajemen persewaan aset berbasis QRIS dan monitoring durasi otomatis. Mengurangi beban pencatatan manual pengelola dan meminimalisasi risiko kehilangan aset.',
    target: 'Pengelola Destinasi & Komunitas',
  },
  {
    title: 'Catat Servis Digital',
    description:
      'Buku servis dan pemeliharaan armada digital. Menyimpan riwayat pergantian komponen, kilometer operasional, dan notifikasi jadwal servis berkala secara mobile-friendly.',
    target: 'Bengkel & Pemilik Kendaraan',
  },
  {
    title: 'Sistem Administrasi Komunitas & Warga',
    description:
      'Portal pelayanan surat digital warga dengan verifikasi QR code dinamis. Mempercepat proses birokrasi lingkungan rukun warga secara transparan dan terdokumentasi.',
    target: 'Pengurus Lingkungan & Komunitas',
  },
]

const groupHeadingClass = 'text-xl md:text-2xl font-bold text-deep-navy dark:text-white'
const groupLeadClass = 'mt-2 text-base text-slate-600 dark:text-gray-300 leading-relaxed'

export function ProductSection() {
  return (
    <section
      id='products'
      className='pt-20 md:pt-32 pb-14 md:pb-16 bg-light-sand/90 dark:bg-dark-surface/90'>
      <div className='container mx-auto px-6 md:px-12'>
        {/* Section Header */}
        <div className='mb-14 md:mb-16 max-w-3xl'>
          <h2 className='tracking-tight text-3xl md:text-4xl font-extrabold text-deep-navy dark:text-white mb-4'>
            Solusi Rekayasa & Produk Digital
          </h2>
          <p className='text-base md:text-lg text-slate-600 dark:text-gray-300 leading-relaxed max-w-prose'>
            Kami menggabungkan kapabilitas rekayasa perangkat lunak kustom untuk klien bisnis dengan
            pengembangan produk digital mandiri yang dirancang untuk memecahkan persoalan
            operasional nyata.
          </p>
        </div>

        <div className='space-y-20 md:space-y-28'>
          {/* 1. What clients can commission: leads, it is the thing being sold */}
          <div id='layanan'>
            <div className='mb-6 max-w-2xl'>
              <h3 className={groupHeadingClass}>Layanan untuk klien</h3>
              <p className={groupLeadClass}>
                Tiga lini layanan untuk perusahaan, startup, dan organisasi.
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
              {services.map((service) => (
                <Card
                  key={service.title}
                  variant='gold'
                  className='md:max-lg:last:col-span-2 group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between border-black/5 dark:border-white/10'>
                  <div>
                    <CardHeader className='pb-3'>
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.bg} border ${service.color} transition-transform group-hover:scale-105 duration-300`}>
                        <service.icon className={`w-6 h-6 ${service.color}`} />
                      </div>
                      <h4 className='text-xl font-semibold leading-snug tracking-tight'>
                        {service.title}
                      </h4>
                      <p className='text-xs uppercase tracking-wider mt-1 text-slate-600 dark:text-gray-400'>
                        Target: {service.target}
                      </p>
                    </CardHeader>

                    <CardContent className='pb-4'>
                      <p className='text-slate-600 dark:text-gray-300 leading-relaxed text-base mb-4'>
                        {service.description}
                      </p>

                      <div className='mb-4 rounded-lg bg-black/[0.03] dark:bg-white/5 px-3.5 py-3'>
                        <span className='block text-sm font-medium text-slate-600 dark:text-gray-300'>
                          {service.price.label}
                        </span>
                        <span className='block text-lg font-bold text-deep-navy dark:text-white'>
                          {service.price.value}
                        </span>
                        <span className='block mt-1 text-sm leading-relaxed text-slate-600 dark:text-gray-300'>
                          {service.price.note}
                        </span>
                      </div>

                      <div className='border-t border-gray-100 dark:border-white/5 pt-3'>
                        <span className='text-sm font-semibold text-deep-navy dark:text-gray-200 block mb-2'>
                          Ruang Lingkup & Deliverable:
                        </span>
                        <ul className='space-y-1.5'>
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className='text-sm text-slate-600 dark:text-gray-300 flex items-start gap-2'>
                              <Check className='w-3.5 h-3.5 text-nuraya-blue-600 dark:text-nuraya-blue-300 mt-0.5 shrink-0' />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>

                  <div className='p-6 pt-0'>
                    <Button
                      onClick={() => scrollToSection('collaboration')}
                      variant='outline'
                      className='w-full h-11 text-sm font-semibold hover:border-nuraya-gold-400 hover:text-nuraya-gold-800 transition-colors'>
                      Konsultasikan Kebutuhan &rarr;
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Services Bottom Banner */}
            <div className='mt-8 md:mt-10 rounded-2xl p-6 sm:p-8 bg-white/70 dark:bg-dark-bg/60 border border-black/5 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6'>
              <div>
                <h4 className='text-lg font-bold text-deep-navy dark:text-white mb-1'>
                  Punya spesifikasi sistem atau kebutuhan arsitektur khusus?
                </h4>
                <p className='text-sm text-slate-600 dark:text-gray-300 max-w-xl'>
                  Diskusikan langsung dengan engineer yang akan mengerjakannya, tanpa perantara
                  sales, untuk estimasi waktu dan biaya yang transparan.
                </p>
              </div>
              <Button
                asChild
                className='shrink-0 h-11 gap-2 active:scale-[0.98] transition-transform'>
                <a href={company.whatsappUrl} target='_blank' rel='noopener noreferrer'>
                  <MessageCircle className='w-4 h-4' />
                  Konsultasi Cepat (WhatsApp)
                </a>
              </Button>
            </div>
          </div>

          {/* 2. Proof: the product we built and run ourselves, anyone can open it today */}
          <div id='produk-berjalan'>
            <div className='mb-6 max-w-2xl'>
              <h3 className={groupHeadingClass}>Produk yang sudah berjalan</h3>
              <p className={groupLeadClass}>
                Contoh hasil kerja kami: aplikasi yang sudah live dan bisa Anda buka sekarang.
              </p>
            </div>

            <article className='grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 rounded-2xl border border-nuraya-gold-400/40 dark:border-nuraya-gold-400/25 bg-white dark:bg-dark-bg/60 p-6 sm:p-8 md:p-10'>
              <div className='lg:col-span-3 flex flex-col items-start'>
                <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'>
                  <span className='relative flex h-2 w-2'>
                    <span className='motion-safe:animate-ping motion-reduce:hidden absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
                    <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
                  </span>
                  {liveProduct.badge}
                </span>
                <h4 className='mt-5 text-2xl md:text-3xl font-bold tracking-tight text-deep-navy dark:text-white'>
                  {liveProduct.title}
                </h4>
                <p className='mt-3 text-base text-slate-700 dark:text-gray-300 leading-relaxed max-w-xl lg:text-justify'>
                  {liveProduct.description}
                </p>
                <div className='mt-7 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 w-full'>
                  <Button
                    asChild
                    className='h-11 gap-2 px-6 hover:-translate-y-0.5 transition-transform'>
                    <a
                      href={liveProduct.url}
                      target='_blank'
                      rel='noopener noreferrer'
                      aria-label={`Buka ${liveProduct.title} di tab baru`}>
                      Buka Aplikasi Langsung
                      <ExternalLink className='w-4 h-4' />
                    </a>
                  </Button>
                  <span className='text-sm text-slate-600 dark:text-gray-300 break-all'>
                    {liveProduct.host}
                  </span>
                </div>
              </div>

              <div className='lg:col-span-2'>
                <p className='text-sm font-semibold text-deep-navy dark:text-gray-100 mb-1'>
                  Fitur unggulan
                </p>
                <ul className='divide-y divide-black/10 dark:divide-white/10'>
                  {liveProduct.highlights.map((item) => (
                    <li
                      key={item}
                      className='flex items-start gap-3 py-3.5 text-base text-slate-700 dark:text-gray-300'>
                      <Check className='w-4 h-4 text-nuraya-blue-600 dark:text-nuraya-blue-300 mt-1 shrink-0' />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>

          {/* 3. What is next: quieter than everything above, no cards */}
          <div id='roadmap'>
            <div className='mb-6 max-w-2xl'>
              <h3 className={groupHeadingClass}>Sedang dikembangkan</h3>
              <p className={groupLeadClass}>
                Produk berikutnya yang masih dalam fase pengembangan.
              </p>
            </div>

            <ul className='grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8 border-t border-black/10 dark:border-white/10 pt-8'>
              {roadmapProducts.map((item) => (
                <li key={item.title}>
                  <h4 className='text-lg font-semibold text-deep-navy dark:text-white'>
                    {item.title}
                  </h4>
                  <p className='mt-1 text-sm font-medium text-slate-700 dark:text-gray-200'>
                    Untuk: {item.target}
                  </p>
                  <p className='mt-3 text-sm text-slate-600 dark:text-gray-300 leading-relaxed'>
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
