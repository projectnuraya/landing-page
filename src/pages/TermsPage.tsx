import { FileText } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export function TermsPage() {
  useEffect(() => {
    document.title = 'Ketentuan Layanan - Nuraya Digital Nusantara'
  }, [])

  return (
    <div className='min-h-screen bg-soft-white dark:bg-dark-bg transition-colors duration-300'>
      <Navbar />

      <main className='pt-24'>
        {/* Hero Section */}
        <section className='py-16 md:py-24 bg-gradient-to-br from-deep-navy to-deep-navy/90 dark:from-dark-surface dark:to-dark-bg text-white'>
          <div className='container mx-auto px-6 md:px-12'>
            <div className='max-w-4xl mx-auto text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-blue/20 text-sky-blue mb-6'>
                <FileText className='w-8 h-8' />
              </div>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>Ketentuan Layanan</h1>
              <p className='text-lg text-gray-300'>
                Ketentuan dan kondisi yang mengatur penggunaan layanan Project Nuraya.
              </p>
              <p className='text-sm text-gray-400 mt-4'>Terakhir diperbarui: 13 Januari 2026</p>
            </div>
          </div>
        </section>

        {/* Terms of Service Content */}
        <section className='py-16 md:py-24 bg-white dark:bg-dark-bg'>
          <div className='container mx-auto px-6 md:px-12'>
            <div className='max-w-4xl mx-auto'>
              <div className='prose prose-lg dark:prose-invert max-w-none space-y-8'>
                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    Penerimaan Ketentuan
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Dengan menggunakan layanan Project Nuraya, Anda setuju untuk mematuhi ketentuan
                    ini. Jika tidak setuju, mohon untuk tidak menggunakan layanan kami.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    Penggunaan Layanan
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Anda setuju untuk menggunakan layanan kami dengan cara yang sah dan tidak
                    merugikan. Jangan menggunakan layanan untuk aktivitas ilegal, menyebarkan konten
                    berbahaya, atau mengganggu pengguna lain.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    Akun Pengguna
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Anda bertanggung jawab atas keamanan akun Anda. Berikan informasi yang akurat
                    dan jaga kerahasiaan kata sandi Anda.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    Konten dan Hak Kekayaan Intelektual
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Semua konten di platform kami adalah milik PT Nuraya Digital Nusantara. Konten
                    yang Anda unggah tetap menjadi milik Anda, tetapi Anda memberikan kami izin
                    untuk menggunakannya dalam operasional layanan.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    Batasan Tanggung Jawab
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Layanan disediakan "sebagaimana adanya". Kami berusaha memberikan layanan
                    terbaik, tetapi tidak menjamin layanan akan selalu sempurna atau tanpa gangguan.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    Perubahan Ketentuan
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Kami dapat memperbarui ketentuan ini sewaktu-waktu. Perubahan akan diposting di
                    halaman ini dengan tanggal pembaruan yang baru.
                  </p>
                </div>

                <div className='bg-sky-blue/10 border-l-4 border-sky-blue p-6 rounded-r-lg mt-8'>
                  <p className='text-deep-navy dark:text-white font-semibold mb-2'>
                    Komitmen Kami terhadap Layanan Berkualitas
                  </p>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Ketentuan ini dirancang untuk melindungi hak Anda dan kami, serta memastikan
                    pengalaman yang adil dan aman bagi semua pengguna. Kami berkomitmen untuk
                    memberikan layanan terbaik dengan integritas dan transparansi penuh.
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
              Punya pertanyaan tentang ketentuan layanan? Hubungi kami di{' '}
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
