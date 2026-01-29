import { Scale } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export function LegalNoticePage() {
  useEffect(() => {
    document.title = 'Pemberitahuan Hukum - Nuraya Digital Nusantara'
  }, [])

  return (
    <div className='min-h-screen bg-soft-white dark:bg-dark-bg transition-colors duration-300'>
      <Navbar />

      <main className='pt-24'>
        {/* Hero Section */}
        <section className='py-16 md:py-24 bg-gradient-to-br from-deep-navy to-deep-navy/90 dark:from-dark-surface dark:to-dark-bg text-white'>
          <div className='container mx-auto px-6 md:px-12'>
            <div className='max-w-4xl mx-auto text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-6'>
                <Scale className='w-8 h-8' />
              </div>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>Pemberitahuan Hukum</h1>
              <p className='text-lg text-gray-300'>
                Informasi hukum dan regulasi mengenai PT Nuraya Digital Nusantara.
              </p>
              <p className='text-sm text-gray-400 mt-4'>Terakhir diperbarui: 13 Januari 2026</p>
            </div>
          </div>
        </section>

        {/* Legal Notice Content */}
        <section className='py-16 md:py-24 bg-white dark:bg-dark-bg'>
          <div className='container mx-auto px-6 md:px-12'>
            <div className='max-w-4xl mx-auto'>
              <div className='prose prose-lg dark:prose-invert max-w-none space-y-8'>
                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    1. Informasi Perusahaan
                  </h3>
                  <div className='bg-light-sand/50 dark:bg-dark-surface p-6 rounded-lg space-y-2'>
                    <p className='text-warm-gray dark:text-gray-300'>
                      <strong>Nama Perusahaan:</strong> PT Nuraya Digital Nusantara
                    </p>
                    <p className='text-warm-gray dark:text-gray-300'>
                      <strong>Status Hukum:</strong> Perseroan Terbatas Perorangan
                    </p>
                    <p className='text-warm-gray dark:text-gray-300'>
                      <strong>Nomor Registrasi:</strong> Terdaftar di Kementerian Hukum dan HAM
                      Republik Indonesia
                    </p>
                    <p className='text-warm-gray dark:text-gray-300'>
                      <strong>Alamat Terdaftar:</strong> Indonesia
                    </p>
                    <p className='text-warm-gray dark:text-gray-300'>
                      <strong>Email Kontak:</strong>{' '}
                      <a
                        href='mailto:hello@projectnuraya.id'
                        className='text-nuraya-gold hover:underline'>
                        hello@projectnuraya.id
                      </a>
                    </p>
                    <p className='text-warm-gray dark:text-gray-300'>
                      <strong>Email Legal:</strong>{' '}
                      <a
                        href='mailto:hello@projectnuraya.id'
                        className='text-nuraya-gold hover:underline'>
                        hello@projectnuraya.id
                      </a>
                    </p>
                    <p className='text-warm-gray dark:text-gray-300'>
                      <strong>Website:</strong>{' '}
                      <a
                        href='https://projectnuraya.id'
                        className='text-nuraya-gold hover:underline'
                        target='_blank'
                        rel='noopener noreferrer'>
                        https://projectnuraya.id
                      </a>
                    </p>
                    <p className='text-warm-gray dark:text-gray-300'>
                      <strong>Sertifikat Registrasi:</strong>{' '}
                      <a
                        href='https://ptp.ahu.go.id/sertifikat?id=686e322971635ffa733f6966a9e546eb:2da925ddd9d2909e1ba364ee1d3dba84'
                        className='text-nuraya-gold hover:underline'
                        target='_blank'
                        rel='noopener noreferrer'>
                        Lihat Sertifikat
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    2. Hak Cipta dan Merek Dagang
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    © {new Date().getFullYear()} PT Nuraya Digital Nusantara. Semua hak dilindungi
                    undang-undang. "Project Nuraya", logo Nuraya, dan semua merek terkait adalah
                    merek dagang atau merek dagang terdaftar dari PT Nuraya Digital Nusantara.
                    Penggunaan merek ini tanpa izin tertulis yang tegas dilarang keras.
                  </p>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed mt-4'>
                    Semua konten, desain, grafik, kompilasi, penerjemahan magnetik, konversi
                    digital, dan materi lainnya yang terkait dengan situs ini dilindungi oleh hukum
                    hak cipta Indonesia dan internasional.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    3. Kepatuhan Hukum
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed mb-4'>
                    PT Nuraya Digital Nusantara beroperasi sesuai dengan peraturan perundang-
                    undangan Republik Indonesia, termasuk namun tidak terbatas pada:
                  </p>
                  <ul className='list-disc list-inside space-y-2 text-warm-gray dark:text-gray-300 ml-4'>
                    <li>
                      Undang-Undang No. 40 Tahun 2007 tentang Perseroan Terbatas dan perubahannya
                    </li>
                    <li>
                      Undang-Undang No. 11 Tahun 2008 tentang Informasi dan Transaksi Elektronik
                      (ITE) dan perubahannya
                    </li>
                    <li>Undang-Undang No. 27 Tahun 2022 tentang Pelindungan Data Pribadi (PDP)</li>
                    <li>Undang-Undang No. 28 Tahun 2014 tentang Hak Cipta</li>
                    <li>Peraturan pemerintah dan regulasi terkait lainnya</li>
                  </ul>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    4. Penafian
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Informasi yang disediakan di situs ini adalah untuk tujuan informasi umum saja
                    dan tidak dimaksudkan sebagai nasihat hukum, profesional, atau teknis. Meskipun
                    kami berusaha untuk menjaga informasi tetap akurat dan terkini, kami tidak
                    membuat representasi atau jaminan apa pun, tersurat atau tersirat, tentang
                    kelengkapan, keakuratan, keandalan, kesesuaian, atau ketersediaan situs atau
                    informasi, produk, layanan, atau grafik terkait yang terdapat di situs untuk
                    tujuan apa pun.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    5. Tautan Eksternal
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Situs kami mungkin berisi tautan ke situs web eksternal yang tidak dioperasikan
                    atau dikendalikan oleh PT Nuraya Digital Nusantara. Kami tidak memiliki kendali
                    atas konten, kebijakan privasi, atau praktik situs pihak ketiga mana pun dan
                    tidak bertanggung jawab atasnya. Anda mengakui dan setuju bahwa kami tidak akan
                    bertanggung jawab atau berkewajiban, secara langsung atau tidak langsung, untuk
                    kerusakan atau kerugian apa pun yang disebabkan atau diduga disebabkan oleh atau
                    sehubungan dengan penggunaan atau ketergantungan pada konten, barang, atau
                    layanan yang tersedia di atau melalui situs web atau layanan pihak ketiga
                    tersebut.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    6. Lisensi Open Source
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Layanan kami mungkin menggunakan komponen perangkat lunak sumber terbuka (open
                    source). Kami mengakui dan menghormati hak cipta dan lisensi dari semua
                    perpustakaan dan kerangka kerja pihak ketiga yang kami gunakan. Informasi
                    tentang komponen open source yang digunakan tersedia atas permintaan.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    7. Pelaporan Pelanggaran
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed mb-4'>
                    Jika Anda yakin bahwa hak kekayaan intelektual Anda telah dilanggar, atau jika
                    Anda menemukan konten yang tidak pantas atau melanggar hukum di platform kami,
                    silakan hubungi kami segera:
                  </p>
                  <div className='bg-light-sand/50 dark:bg-dark-surface p-6 rounded-lg'>
                    <p className='text-warm-gray dark:text-gray-300'>
                      <strong>Email Legal:</strong>{' '}
                      <a
                        href='mailto:hello@projectnuraya.id'
                        className='text-nuraya-gold hover:underline'>
                        hello@projectnuraya.id
                      </a>
                    </p>
                    <p className='text-warm-gray dark:text-gray-300 mt-2'>
                      <strong>Subjek:</strong> Pelaporan Pelanggaran - [Jenis Pelanggaran]
                    </p>
                  </div>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed mt-4'>
                    Harap sertakan informasi rinci tentang pelanggaran, termasuk bukti kepemilikan
                    dan lokasi konten yang melanggar. Kami akan meninjau setiap laporan dengan
                    serius dan mengambil tindakan yang sesuai sesuai dengan hukum yang berlaku.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    8. Yurisdiksi
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Pemberitahuan hukum ini dan semua masalah yang timbul dari atau terkait dengan
                    penggunaan layanan kami diatur oleh dan ditafsirkan sesuai dengan hukum Republik
                    Indonesia. Pengadilan di Jakarta, Indonesia akan memiliki yurisdiksi eksklusif
                    atas setiap sengketa yang timbul dari pemberitahuan ini, dengan ketentuan hak
                    untuk arbitrase sebagaimana tercantum dalam Ketentuan Layanan kami.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    9. Kontak
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed mb-4'>
                    Jika Anda memiliki pertanyaan tentang pemberitahuan hukum ini, atau masalah
                    hukum lainnya terkait dengan layanan kami, silakan hubungi kami:
                  </p>
                  <div className='bg-light-sand/50 dark:bg-dark-surface p-6 rounded-lg space-y-2'>
                    <p className='text-warm-gray dark:text-gray-300'>
                      <strong>PT Nuraya Digital Nusantara</strong>
                    </p>
                    <p className='text-warm-gray dark:text-gray-300'>
                      <strong>Email Umum:</strong>{' '}
                      <a
                        href='mailto:hello@projectnuraya.id'
                        className='text-nuraya-gold hover:underline'>
                        hello@projectnuraya.id
                      </a>
                    </p>
                    <p className='text-warm-gray dark:text-gray-300'>
                      <strong>Email Legal:</strong>{' '}
                      <a
                        href='mailto:hello@projectnuraya.id'
                        className='text-nuraya-gold hover:underline'>
                        hello@projectnuraya.id
                      </a>
                    </p>
                    <p className='text-warm-gray dark:text-gray-300'>
                      <strong>Email Privasi:</strong>{' '}
                      <a
                        href='mailto:privacy@projectnuraya.id'
                        className='text-nuraya-gold hover:underline'>
                        privacy@projectnuraya.id
                      </a>
                    </p>
                  </div>
                </div>

                <div className='bg-green-500/10 border-l-4 border-green-500 p-6 rounded-r-lg mt-8'>
                  <p className='text-deep-navy dark:text-white font-semibold mb-2'>
                    Komitmen Kami terhadap Transparansi
                  </p>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Di Project Nuraya, transparansi bukan hanya kata-kata — ini adalah nilai inti
                    kami. Kami berkomitmen untuk beroperasi dengan integritas penuh, menghormati hak
                    pengguna kami, dan mematuhi semua hukum dan regulasi yang berlaku. Jika Anda
                    memiliki pertanyaan atau kekhawatiran, kami di sini untuk mendengarkan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to Home CTA */}
        <section className='py-12 bg-gradient-to-br from-deep-navy to-deep-navy/90 dark:from-dark-surface dark:to-dark-bg text-white'>
          <div className='container mx-auto px-6 md:px-12 text-center'>
            <p className='text-lg mb-4'>
              Punya pertanyaan hukum? Hubungi kami di{' '}
              <a href='mailto:hello@projectnuraya.id' className='text-nuraya-gold hover:underline'>
                hello@projectnuraya.id
              </a>
            </p>
            <Link
              to='/'
              onClick={() => window.scrollTo(0, 0)}
              className='inline-block px-8 py-3 bg-nuraya-gold-400 hover:bg-nuraya-gold-500 text-deep-navy font-semibold rounded-lg transition-colors duration-300'>
              Kembali ke Beranda
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
