import { CheckCircle, Copy, Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'

import { company } from '../config/company'

import { Button } from './ui/Button'

const CONTACT_EMAIL = company.email

export function CollaborationSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

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

    const subject = encodeURIComponent(`[Project Nuraya] Konsultasi Proyek dari ${formData.name}`)
    const body = encodeURIComponent(
      `Nama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`,
    )
    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, '_self')

    setIsSubmitted(true)
  }

  const handleCopyMessage = () => {
    const text = `Nama: ${formData.name}\nEmail: ${formData.email}\nPesan: ${formData.message}`
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  const inputBaseClass =
    'w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-bg text-deep-navy dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-nuraya-gold-400 dark:focus:ring-nuraya-gold-300 focus:border-transparent transition-all'

  return (
    <section id='collaboration' className='py-20 md:py-32 bg-light-sand/90 dark:bg-dark-surface/90'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='flex flex-col lg:flex-row items-start gap-12 lg:gap-16'>
          {/* Left Column: Direct WhatsApp & Company Contact Info */}
          <div className='lg:w-1/2 space-y-8'>
            <div>
              <div className='inline-block px-3 py-1 mb-3 rounded-full bg-nuraya-gold-400/10 text-nuraya-gold-500 dark:text-nuraya-gold-300 text-xs font-semibold uppercase tracking-wider'>
                Konsultasi & Kontak
              </div>
              <h2 className='text-3xl md:text-4xl font-bold text-deep-navy dark:text-white mb-4 leading-tight'>
                Mulai Diskusi Kebutuhan Teknologi Anda
              </h2>
              <p className='text-base md:text-lg text-warm-gray dark:text-gray-300 leading-relaxed'>
                Kami siap membantu merancang solusi teknologi yang presisi—mulai dari audit arsitektur,
                pembuatan web & portal bisnis terintegrasi, hingga automasi alur kerja operasional.
              </p>
            </div>

            {/* High-Intent WhatsApp Card */}
            <div className='p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/60 shadow-sm'>
              <div className='flex items-start gap-4'>
                <div className='w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20'>
                  <MessageCircle className='w-6 h-6' />
                </div>
                <div className='space-y-2'>
                  <span className='inline-block px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-200 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-300'>
                    Saluran Komunikasi Tercepat
                  </span>
                  <h3 className='text-lg font-bold text-deep-navy dark:text-white'>
                    Konsultasi Cepat via WhatsApp
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>
                    Hubungi langsung tim rekayasa kami untuk diskusi kebutuhan awal, estimasi ruang lingkup, dan jadwal pengerjaan.
                  </p>
                  <div className='pt-2'>
                    <Button
                      asChild
                      className='bg-emerald-600 hover:bg-emerald-700 text-white gap-2 text-sm h-10 px-5 active:scale-[0.98] transition-transform shadow-md'>
                      <a href={company.whatsappUrl} target='_blank' rel='noopener noreferrer'>
                        <MessageCircle className='w-4 h-4' />
                        Buka Obrolan WhatsApp &rarr;
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Info List */}
            <div className='space-y-3 pt-2 text-sm text-warm-gray dark:text-gray-300'>
              <div className='flex items-center gap-3'>
                <Mail className='w-4 h-4 text-nuraya-blue-400 shrink-0' />
                <span>Email Resmi: <strong className='text-deep-navy dark:text-white'>{company.email}</strong></span>
              </div>
              <div className='flex items-center gap-3'>
                <MapPin className='w-4 h-4 text-nuraya-gold-400 shrink-0' />
                <span>Domisili: <strong className='text-deep-navy dark:text-white'>{company.addressLine}</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form */}
          <div className='lg:w-1/2 w-full'>
            <div className='relative'>
              <div className='absolute -inset-4 bg-nuraya-blue-400/20 dark:bg-nuraya-gold-400/15 opacity-20 blur-2xl rounded-full' />
              <div className='relative bg-white dark:bg-dark-surface p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10'>
                {isSubmitted ? (
                  <div className='text-center py-6 space-y-4'>
                    <div className='inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-900/30'>
                      <CheckCircle className='w-7 h-7 text-emerald-600 dark:text-emerald-400' />
                    </div>
                    <h3 className='text-xl font-semibold text-deep-navy dark:text-white'>
                      Formulir Terkirim
                    </h3>
                    <p className='text-warm-gray dark:text-gray-300 text-sm max-w-sm mx-auto'>
                      Klien email Anda telah dipanggil dengan draf pesan. Jika email client tidak terbuka otomatis, Anda dapat menyalin teks pesan berikut:
                    </p>

                    <div className='flex items-center justify-center gap-3 pt-2'>
                      <Button
                        onClick={handleCopyMessage}
                        variant='outline'
                        className='text-xs gap-1.5 h-9'>
                        <Copy className='w-3.5 h-3.5' />
                        {copied ? 'Tersalin ke Clipboard!' : 'Salin Detail Pesan'}
                      </Button>
                      <Button
                        asChild
                        className='text-xs gap-1.5 h-9 bg-emerald-600 hover:bg-emerald-700 text-white'>
                        <a href={company.whatsappUrl} target='_blank' rel='noopener noreferrer'>
                          <MessageCircle className='w-3.5 h-3.5' />
                          Kirim via WhatsApp
                        </a>
                      </Button>
                    </div>

                    <div className='pt-4'>
                      <button
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({ name: '', email: '', message: '' })
                        }}
                        className='text-xs text-nuraya-gold-500 dark:text-nuraya-gold-300 hover:underline font-medium'>
                        Kirim formulir baru
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className='text-xl md:text-2xl font-semibold mb-2 text-deep-navy dark:text-white'>
                      Formulir Penjajakan Kebutuhan
                    </h3>
                    <p className='text-warm-gray dark:text-gray-400 mb-6 text-sm'>
                      Sampaikan ringkasan permasalahan atau visi aplikasi yang ingin Anda bangun.
                    </p>

                    <form className='space-y-4' onSubmit={handleSubmit} noValidate>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <input
                            type='text'
                            placeholder='Nama Anda / Organisasi'
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
                            placeholder='Alamat Email Kerja'
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
                          placeholder='Deskripsikan kebutuhan sistem, kendala saat ini, atau perkiraan timeline...'
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className={`${inputBaseClass} border resize-none ${errors.message ? 'border-red-400 dark:border-red-400' : 'border-gray-200 dark:border-white/10'}`}
                        />
                        {errors.message && (
                          <p className='text-red-500 text-xs mt-1'>{errors.message}</p>
                        )}
                      </div>
                      <Button type='submit' className='w-full gap-2 active:scale-[0.98] transition-transform'>
                        <Send className='w-4 h-4' />
                        Kirim Pesan Konsultasi
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
