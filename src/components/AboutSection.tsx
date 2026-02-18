import { Card } from './ui/Card'

export function AboutSection() {
  return (
    <section id='about' className='py-20 md:py-32 bg-white dark:bg-dark-bg'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-start'>
          {/* Left Column: Story */}
          <div className='space-y-8'>
            <h2 className='text-3xl md:text-4xl font-bold text-deep-navy dark:text-white'>
              Mengapa Project Nuraya?
            </h2>
            <div className='space-y-6 text-lg text-warm-gray dark:text-gray-300 leading-relaxed'>
              <p>
                Nama "Nuraya" lahir dari perpaduan dua kata:{' '}
                <span className='text-nuraya-gold-500 dark:text-nuraya-gold-300 font-semibold'>
                  Nur
                </span>{' '}
                (cahaya) dan{' '}
                <span className='text-nuraya-blue-500 dark:text-nuraya-blue-300 font-semibold'>
                  Raya
                </span>{' '}
                (agung/luas).
              </p>
              <p>
                Banyak teknologi hari ini diciptakan untuk menyita perhatian kita, bukan memecahkan
                masalah kita. Kami ingin mengubah narasi tersebut: Teknologi seharusnya hadir untuk
                memberdayakan, bukan sekadar menciptakan ketergantungan.
              </p>
              <p>
                Filosofi kami berakar pada keyakinan bahwa perangkat digital haruslah aksesibel,
                inklusif, dan benar-benar bermanfaat. Kami tidak mengejar tren; kami mengejar
                dampak. Baik itu platform pendidikan untuk pelosok daerah maupun sistem manajemen
                sumber daya untuk masyarakat, tujuan kami tetap sama: memperbaiki kualitas hidup
                melalui kode.
              </p>
            </div>
          </div>

          {/* Right Column: Principles/Stats */}
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 lg:pt-0'>
            <Card
              variant='gold'
              className='p-6 border-l-4 border-l-nuraya-gold-500 dark:border-l-nuraya-gold-500 hover:-translate-y-2 transition-transform duration-300'>
              <h3 className='text-2xl md:text-3xl font-bold text-deep-navy dark:text-white mb-2'>
                100%
              </h3>
              <p className='text-sm font-medium text-warm-gray dark:text-gray-400 uppercase tracking-wider'>
                Berpusat pada Manusia
              </p>
              <p className='mt-4 text-sm text-gray-600 dark:text-gray-300'>
                Setiap baris kode diletakkan dengan penuh empati terhadap setiap langkah pengguna.
              </p>
            </Card>

            <Card
              variant='blue'
              className='p-6 border-l-4 border-l-nuraya-blue-400 dark:border-l-nuraya-blue-400 hover:-translate-y-2 transition-transform duration-300 sm:translate-y-8'>
              <h3 className='text-2xl md:text-3xl font-bold text-deep-navy dark:text-white mb-2'>
                0%
              </h3>
              <p className='text-sm font-medium text-warm-gray dark:text-gray-400 uppercase tracking-wider'>
                Gimmick
              </p>
              <p className='mt-4 text-sm text-gray-600 dark:text-gray-300'>
                Kami hadir untuk menyelesaikan masalah nyata, bukan masalah yang diada-adakan.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
