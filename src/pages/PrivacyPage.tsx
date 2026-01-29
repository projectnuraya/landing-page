import { Shield } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'

export function PrivacyPage() {
  useEffect(() => {
    document.title = 'Kebijakan Privasi - Nuraya Digital Nusantara'
  }, [])

  return (
    <div className='min-h-screen bg-soft-white dark:bg-dark-bg transition-colors duration-300'>
      <Navbar />

      <main className='pt-24'>
        {/* Hero Section */}
        <section className='py-16 md:py-24 bg-gradient-to-br from-deep-navy to-deep-navy/90 dark:from-dark-surface dark:to-dark-bg text-white'>
          <div className='container mx-auto px-6 md:px-12'>
            <div className='max-w-4xl mx-auto text-center'>
              <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-nuraya-gold-500/20 text-nuraya-gold-500 mb-6'>
                <Shield className='w-8 h-8' />
              </div>
              <h1 className='text-4xl md:text-5xl font-bold mb-6'>Kebijakan Privasi</h1>
              <p className='text-lg text-gray-300'>
                Transparansi dan kejujuran adalah fondasi kami. Berikut adalah kebijakan privasi
                yang mengatur bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi
                Anda.
              </p>
              <p className='text-sm text-gray-400 mt-4'>Terakhir diperbarui: 13 Januari 2026</p>
            </div>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className='py-16 md:py-24 bg-white dark:bg-dark-bg'>
          <div className='container mx-auto px-6 md:px-12'>
            <div className='max-w-4xl mx-auto'>
              <div className='prose prose-lg dark:prose-invert max-w-none space-y-8'>
                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    Informasi yang Kami Kumpulkan
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Kami mengumpulkan informasi yang Anda berikan secara sukarela seperti nama dan
                    email, serta informasi teknis dasar seperti alamat IP dan jenis perangkat untuk
                    meningkatkan layanan kami.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    Penggunaan Informasi
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Informasi Anda digunakan untuk menyediakan dan meningkatkan layanan,
                    berkomunikasi dengan Anda, dan memastikan keamanan platform kami.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    Pembagian Informasi
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Kami tidak menjual data Anda. Informasi hanya dibagikan jika diperlukan untuk
                    operasional layanan atau jika diwajibkan oleh hukum.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    Hak Anda
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Anda dapat mengakses, mengubah, atau menghapus data pribadi Anda kapan saja.
                    Hubungi kami di{' '}
                    <a
                      href='mailto:hello@projectnuraya.id'
                      className='text-nuraya-gold-500 hover:underline'>
                      hello@projectnuraya.id
                    </a>{' '}
                    untuk menggunakan hak-hak ini.
                  </p>
                </div>

                <div>
                  <h3 className='text-2xl font-semibold text-deep-navy dark:text-white mb-4'>
                    Keamanan
                  </h3>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Kami melindungi data Anda dengan langkah-langkah keamanan yang sesuai. Namun,
                    tidak ada sistem yang 100% aman, dan kami mendorong Anda untuk berhati-hati
                    dengan informasi pribadi Anda.
                  </p>
                </div>

                <div className='bg-nuraya-gold-500/10 border-l-4 border-nuraya-gold-500 p-6 rounded-r-lg mt-8'>
                  <p className='text-deep-navy dark:text-white font-semibold mb-2'>
                    Komitmen Kami terhadap Privasi Anda
                  </p>
                  <p className='text-warm-gray dark:text-gray-300 leading-relaxed'>
                    Di Project Nuraya, privasi bukan sekadar kebijakan — ini adalah nilai inti kami.
                    Kami berkomitmen untuk melindungi data Anda dengan standar tertinggi dan
                    memberikan Anda kontrol penuh atas informasi pribadi Anda.
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
              Punya pertanyaan tentang privasi Anda? Hubungi kami di{' '}
              <a href='mailto:hello@projectnuraya.id' className='text-nuraya-gold-500 hover:underline'>
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
