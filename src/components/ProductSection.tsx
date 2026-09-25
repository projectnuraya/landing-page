import { Bike, BookOpen, Check, Database, ExternalLink, FileText, Globe, Lightbulb, MessageCircle, Wrench } from 'lucide-react'
import { useState } from 'react'

import { company } from '../config/company'
import { scrollToSection } from '../lib/scroll'

import { Button } from './ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/Card'

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
    status: 'Tersedia',
    color: 'text-nuraya-blue-400',
    bg: 'bg-nuraya-blue-400/10',
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
    status: 'Tersedia',
    color: 'text-nuraya-gold-400',
    bg: 'bg-nuraya-gold-400/10',
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
    status: 'Tersedia',
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
]

const liveProducts = [
  {
    icon: BookOpen,
    title: 'Tilawah Tracker',
    badge: 'Live & Produksi',
    description:
      'Platform koordinasi dan monitoring tilawah komunal berbasis web. Memfasilitasi pembagian target mingguan secara otomatis, rekapitulasi pelaporan real-time ke kanal pesan, dan pengalaman pengguna tanpa hambatan instalasi.',
    url: 'https://tilawah-tracker.projectnuraya.id/',
    highlights: [
      'Sistem pembagian juz mingguan otomatis',
      'Generator rekap siap kirim ke WhatsApp',
      'PWA ringan dengan waktu muat di bawah 1 detik',
    ],
    color: 'text-emerald-500',
    bg: 'bg-emerald-500/10',
  },
]

const roadmapProducts = [
  {
    icon: Bike,
    title: 'Sistem Digital Sewa Sepeda',
    badge: 'Fase Pengembangan',
    description:
      'Sistem manajemen persewaan aset berbasis QRIS dan monitoring durasi otomatis. Mengurangi beban pencatatan manual pengelola dan meminimalisasi risiko kehilangan aset.',
    target: 'Pengelola Destinasi & Komunitas',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
  },
  {
    icon: Wrench,
    title: 'Catat Servis Digital',
    badge: 'Fase Pengembangan',
    description:
      'Buku servis dan pemeliharaan armada digital. Menyimpan riwayat pergantian komponen, kilometer operasional, dan notifikasi jadwal servis berkala secara mobile-friendly.',
    target: 'Bengkel & Pemilik Kendaraan',
    color: 'text-orange-500',
    bg: 'bg-orange-500/10',
  },
  {
    icon: FileText,
    title: 'Sistem Administrasi Komunitas & Warga',
    badge: 'Fase Pengembangan',
    description:
      'Portal pelayanan surat digital warga dengan verifikasi QR code dinamis. Mempercepat proses birokrasi lingkungan rukun warga secara transparan dan terdokumentasi.',
    target: 'Pengurus Lingkungan & Komunitas',
    color: 'text-rose-500',
    bg: 'bg-rose-500/10',
  },
]

export function ProductSection() {
  const [activeTab, setActiveTab] = useState<'services' | 'products'>('services')

  return (
    <section id='products' className='py-20 md:py-32 bg-light-sand/90 dark:bg-dark-surface/90'>
      <div className='container mx-auto px-6 md:px-12'>
        {/* Section Header */}
        <div className='mb-12 max-w-3xl'>
          <div className='inline-block px-3 py-1 mb-3 rounded-full bg-nuraya-gold-400/10 text-nuraya-gold-500 dark:text-nuraya-gold-300 text-xs font-semibold uppercase tracking-wider'>
            Portofolio & Kapabilitas
          </div>
          <h2 className='text-3xl md:text-4xl font-bold text-deep-navy dark:text-white mb-4'>
            Solusi Rekayasa & Produk Digital
          </h2>
          <p className='text-base md:text-lg text-warm-gray dark:text-gray-300 leading-relaxed'>
            Kami menggabungkan kapabilitas rekayasa perangkat lunak kustom untuk klien bisnis dengan
            pengembangan produk digital mandiri yang dirancang untuk memecahkan persoalan operasional nyata.
          </p>
        </div>

        {/* Interactive Tab Switcher */}
        <div className='flex items-center justify-start sm:justify-center mb-12 overflow-x-auto pb-2'>
          <div className='inline-flex p-1.5 rounded-xl bg-gray-200/80 dark:bg-white/5 border border-black/5 dark:border-white/10 shadow-inner'>
            <button
              onClick={() => setActiveTab('services')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'services'
                  ? 'bg-white dark:bg-dark-bg text-deep-navy dark:text-white shadow-sm ring-1 ring-black/5'
                  : 'text-warm-gray dark:text-gray-400 hover:text-deep-navy dark:hover:text-white'
              }`}>
              <Globe className='w-4 h-4' />
              Layanan Pengembangan Klien
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 whitespace-nowrap ${
                activeTab === 'products'
                  ? 'bg-white dark:bg-dark-bg text-deep-navy dark:text-white shadow-sm ring-1 ring-black/5'
                  : 'text-warm-gray dark:text-gray-400 hover:text-deep-navy dark:hover:text-white'
              }`}>
              <BookOpen className='w-4 h-4' />
              Produk Digital Mandiri
            </button>
          </div>
        </div>

        {/* Tab 1: Client Services */}
        {activeTab === 'services' && (
          <div className='motion-safe:animate-fade-in-scale space-y-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
              {services.map((service) => (
                <Card
                  key={service.title}
                  variant='gold'
                  className='group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-between border-black/5 dark:border-white/10'>
                  <div>
                    {/* Status Badge */}
                    <div className='absolute top-4 right-4'>
                      <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300'>
                        {service.status}
                      </span>
                    </div>

                    <CardHeader className='pb-3'>
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${service.bg} border ${service.color} transition-transform group-hover:scale-105 duration-300`}>
                        <service.icon className={`w-6 h-6 ${service.color}`} />
                      </div>
                      <CardTitle className='text-xl leading-snug'>{service.title}</CardTitle>
                      <CardDescription className='text-xs uppercase tracking-wider mt-1 text-warm-gray dark:text-gray-400'>
                        Target: {service.target}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className='pb-4'>
                      <p className='text-warm-gray dark:text-gray-300 leading-relaxed text-sm mb-4'>
                        {service.description}
                      </p>

                      <div className='border-t border-gray-100 dark:border-white/5 pt-3'>
                        <span className='text-xs font-semibold text-deep-navy dark:text-gray-200 block mb-2'>
                          Ruang Lingkup & Deliverable:
                        </span>
                        <ul className='space-y-1.5'>
                          {service.deliverables.map((item) => (
                            <li
                              key={item}
                              className='text-xs text-warm-gray dark:text-gray-400 flex items-start gap-2'>
                              <Check className='w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0' />
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
                      className='w-full text-xs font-semibold hover:border-nuraya-gold-400 hover:text-nuraya-gold-500 transition-colors'>
                      Konsultasikan Kebutuhan &rarr;
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {/* Services Bottom Banner */}
            <div className='rounded-2xl p-6 sm:p-8 bg-white/70 dark:bg-dark-bg/60 border border-black/5 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6'>
              <div>
                <h4 className='text-lg font-bold text-deep-navy dark:text-white mb-1'>
                  Punya spesifikasi sistem atau kebutuhan arsitektur khusus?
                </h4>
                <p className='text-sm text-warm-gray dark:text-gray-300 max-w-xl'>
                  Diskusikan langsung dengan tim engineering kami tanpa perantara sales untuk estimasi waktu dan biaya yang transparan.
                </p>
              </div>
              <Button
                asChild
                className='shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white gap-2 active:scale-[0.98] transition-transform'>
                <a href={company.whatsappUrl} target='_blank' rel='noopener noreferrer'>
                  <MessageCircle className='w-4 h-4' />
                  Konsultasi Cepat (WhatsApp)
                </a>
              </Button>
            </div>
          </div>
        )}

        {/* Tab 2: Proprietary Products & Roadmap */}
        {activeTab === 'products' && (
          <div className='motion-safe:animate-fade-in-scale space-y-16'>
            {/* Live Featured Product */}
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <div className='h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent dark:from-emerald-500/30' />
                <span className='text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider'>
                  Solusi Berjalan (Live Case Study)
                </span>
                <div className='h-px flex-1 bg-gradient-to-l from-emerald-500/50 to-transparent dark:from-emerald-500/30' />
              </div>

              <div className='max-w-3xl mx-auto'>
                {liveProducts.map((product) => (
                  <Card
                    key={product.title}
                    variant='gold'
                    className='group hover:-translate-y-1 transition-all duration-300 relative overflow-hidden border-emerald-500/30 dark:border-emerald-500/20'>
                    {/* Live Badge */}
                    <div className='absolute top-4 right-4'>
                      <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'>
                        <span className='relative flex h-2 w-2'>
                          <span className='motion-safe:animate-ping motion-reduce:hidden absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75'></span>
                          <span className='relative inline-flex rounded-full h-2 w-2 bg-emerald-500'></span>
                        </span>
                        {product.badge}
                      </span>
                    </div>

                    <CardHeader className='pb-4'>
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${product.bg} border ${product.color}`}>
                        <product.icon className={`w-6 h-6 ${product.color}`} />
                      </div>
                      <CardTitle className='text-2xl'>{product.title}</CardTitle>
                      <CardDescription className='text-xs uppercase tracking-wider text-warm-gray dark:text-gray-400'>
                        Studi Kasus Produk Komunal
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <p className='text-warm-gray dark:text-gray-300 leading-relaxed text-sm mb-5'>
                        {product.description}
                      </p>

                      <div className='border-t border-gray-100 dark:border-white/5 pt-4 mb-6'>
                        <span className='text-xs font-semibold text-deep-navy dark:text-gray-200 block mb-2'>
                          Fitur Unggulan Sistem:
                        </span>
                        <ul className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
                          {product.highlights.map((item) => (
                            <li
                              key={item}
                              className='text-xs text-warm-gray dark:text-gray-400 flex items-center gap-1.5'>
                              <Check className='w-3.5 h-3.5 text-emerald-500 shrink-0' />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className='flex flex-col sm:flex-row gap-3'>
                        <Button
                          asChild
                          className='w-full sm:w-auto hover:-translate-y-0.5 transition-transform gap-1.5'
                          variant='outline'>
                          <a
                            href={product.url}
                            target='_blank'
                            rel='noopener noreferrer'
                            aria-label={`Buka ${product.title} di tab baru`}>
                            Buka Aplikasi Langsung
                            <ExternalLink className='w-4 h-4' />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Roadmap / Coming Soon */}
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <div className='h-px flex-1 bg-gradient-to-r from-nuraya-blue-400/50 to-transparent dark:from-nuraya-blue-400/30' />
                <span className='text-xs font-semibold text-nuraya-blue-400 uppercase tracking-wider'>
                  Roadmap Inovasi Terjadwal
                </span>
                <div className='h-px flex-1 bg-gradient-to-l from-nuraya-blue-400/50 to-transparent dark:from-nuraya-blue-400/30' />
              </div>

              <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {roadmapProducts.map((item) => (
                  <Card
                    key={item.title}
                    variant='blue'
                    className='relative overflow-hidden border-black/5 dark:border-white/10'>
                    <div className='absolute top-4 right-4'>
                      <span className='inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300'>
                        {item.badge}
                      </span>
                    </div>

                    <CardHeader className='pb-3'>
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${item.bg} border ${item.color}`}>
                        <item.icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <CardTitle className='text-lg'>{item.title}</CardTitle>
                      <CardDescription className='text-xs uppercase tracking-wider text-warm-gray dark:text-gray-400'>
                        Target: {item.target}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className='text-warm-gray dark:text-gray-400 leading-relaxed text-xs'>
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
