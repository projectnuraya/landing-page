import { CheckCircle, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'

import { Button } from './ui/Button'

const CONTACT_EMAIL = 'hello@projectnuraya.id'

export function CollaborationSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Nama wajib diisi'
    if (!formData.email.trim()) {
      newErrors.email = 'Email wajib diisi'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email tidak valid'
    }
    if (!formData.message.trim()) newErrors.message = 'Pesan wajib diisi'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    const subject = encodeURIComponent(`[Project Nuraya] Pesan dari ${formData.name}`)
    const body = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`,
    )
    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, '_self')

    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setErrors({})
  }

  const inputBaseClass =
    'w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-bg text-deep-navy dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-nuraya-gold-400 dark:focus:ring-nuraya-gold-300 focus:border-transparent transition-all'

  return (
    <section id='collaboration' className='py-20 md:py-32 bg-light-sand/90 dark:bg-dark-surface/90'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='flex flex-col lg:flex-row items-center gap-16'>
          <div className='lg:w-1/2'>
            <h2 className='text-3xl md:text-4xl font-bold text-deep-navy dark:text-white mb-6'>
              Mari Membangun Sesuatu yang Bermakna Bersama
            </h2>
            <p className='text-lg text-warm-gray dark:text-gray-300 mb-8 leading-relaxed'>
              Pintu kami selalu terbuka bagi mitra yang berbagi visi dengan kami. Baik Anda
              organisasi bisnis atau sosial yang memerlukan arahan teknis, hingga pengembang yang
              ingin berbagi melalui open source.
            </p>

            <div className='space-y-4 mb-8'>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-nuraya-gold-400' />
                <span className='text-deep-navy dark:text-gray-200'>Technical Partnership</span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-nuraya-blue-400' />
                <span className='text-deep-navy dark:text-gray-200'>Kolaborasi Strategis</span>
              </div>
              <div className='flex items-center gap-3'>
                <div className='w-2 h-2 rounded-full bg-green-500' />
                <span className='text-deep-navy dark:text-gray-200'>Kontribusi Open Source</span>
              </div>
            </div>
          </div>

          <div className='lg:w-1/2 w-full'>
            <div className='relative'>
              <div className='absolute -inset-4 bg-nuraya-blue-400/20 dark:bg-nuraya-gold-400/15 opacity-20 blur-2xl rounded-full' />
              <div className='relative bg-white dark:bg-dark-surface p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10'>
                {isSubmitted ? (
                  <div className='text-center py-8 space-y-4'>
                    <div className='inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30'>
                      <CheckCircle className='w-8 h-8 text-green-600 dark:text-green-400' />
                    </div>
                    <h3 className='text-xl font-semibold text-deep-navy dark:text-white'>
                      Terima kasih!
                    </h3>
                    <p className='text-warm-gray dark:text-gray-400 text-sm max-w-xs mx-auto'>
                      Aplikasi email Anda seharusnya sudah terbuka dengan pesan yang sudah terisi.
                      Silakan kirim email tersebut.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className='text-sm text-nuraya-gold-500 dark:text-nuraya-gold-300 hover:underline font-medium mt-2'>
                      Kirim pesan lain
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className='text-xl md:text-2xl font-semibold mb-2 text-deep-navy dark:text-white'>
                      Punya ide projek?
                    </h3>
                    <p className='text-warm-gray dark:text-gray-400 mb-6 text-sm'>
                      Ceritakan pada kami masalah yang ingin Anda selesaikan.
                    </p>

                    <form className='space-y-4' onSubmit={handleSubmit} noValidate>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <input
                            type='text'
                            placeholder='Nama'
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={`${inputBaseClass} border ${errors.name ? 'border-red-400 dark:border-red-400' : 'border-gray-200 dark:border-white/10'}`}
                          />
                          {errors.name && (
                            <p className='text-red-500 text-xs mt-1'>{errors.name}</p>
                          )}
                        </div>
                        <div>
                          <input
                            type='email'
                            placeholder='Email'
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`${inputBaseClass} border ${errors.email ? 'border-red-400 dark:border-red-400' : 'border-gray-200 dark:border-white/10'}`}
                          />
                          {errors.email && (
                            <p className='text-red-500 text-xs mt-1'>{errors.email}</p>
                          )}
                        </div>
                      </div>
                      <div>
                        <textarea
                          placeholder='Ceritakan sedikit tentang visi Anda...'
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className={`${inputBaseClass} border resize-none ${errors.message ? 'border-red-400 dark:border-red-400' : 'border-gray-200 dark:border-white/10'}`}
                        />
                        {errors.message && (
                          <p className='text-red-500 text-xs mt-1'>{errors.message}</p>
                        )}
                      </div>
                      <Button type='submit' className='w-full gap-2'>
                        <Send className='w-4 h-4' />
                        Kirim Pesan
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
