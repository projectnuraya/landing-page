import { Copy, Mail, MapPin, MessageCircle, Send } from 'lucide-react'
import { type FormEvent, useEffect, useRef, useState } from 'react'

import { company } from '../config/company'

import { Button } from './ui/Button'

const CONTACT_EMAIL = company.email

// mailto: and wa.me URLs are length-limited by mail clients, so the message is capped well below that.
const MAX_NAME = 100
const MAX_EMAIL = 254
const MAX_MESSAGE = 1200
const COUNTER_FROM = 1000

type Field = 'name' | 'email' | 'message'
type FormErrors = Partial<Record<Field, string>>
type CopyState = 'idle' | 'copied' | 'failed'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const validateField = (field: Field, value: string): string | undefined => {
  const trimmed = value.trim()
  if (field === 'name') {
    if (!trimmed) return 'Isi nama Anda atau nama organisasi.'
  }
  if (field === 'email') {
    if (!trimmed) return 'Isi alamat email agar kami bisa membalas.'
    if (!EMAIL_PATTERN.test(trimmed)) return 'Email belum lengkap. Contoh: nama@perusahaan.com'
  }
  if (field === 'message') {
    if (!trimmed) return 'Tuliskan kebutuhan Anda secara singkat.'
  }
  return undefined
}

export function CollaborationSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isDrafted, setIsDrafted] = useState(false)
  const [copyState, setCopyState] = useState<CopyState>('idle')

  const fieldRefs = {
    name: useRef<HTMLInputElement>(null),
    email: useRef<HTMLInputElement>(null),
    message: useRef<HTMLTextAreaElement>(null),
  }
  const draftHeadingRef = useRef<HTMLHeadingElement>(null)
  const draftTextRef = useRef<HTMLTextAreaElement>(null)
  const copyTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  const previouslyDrafted = useRef(false)

  useEffect(() => () => clearTimeout(copyTimer.current), [])

  // Move focus with the view change so keyboard and screen-reader users land on the new content.
  // Compared against the previous value (not a mount flag) so StrictMode's double effect run
  // never steals focus on page load.
  useEffect(() => {
    if (previouslyDrafted.current === isDrafted) return
    previouslyDrafted.current = isDrafted
    if (isDrafted) draftHeadingRef.current?.focus()
    else fieldRefs.message.current?.focus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDrafted])

  const cleaned = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    message: formData.message.trim(),
  }

  const messageText = `Nama: ${cleaned.name}\nEmail: ${cleaned.email}\n\nPesan:\n${cleaned.message}`
  const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    `[Project Nuraya] Konsultasi Proyek dari ${cleaned.name}`,
  )}&body=${encodeURIComponent(messageText)}`
  const whatsappDraftUrl = `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(
    `Halo Project Nuraya, saya ${cleaned.name} ingin berkonsultasi.\n\n${cleaned.message}\n\nEmail saya: ${cleaned.email}`,
  )}`

  const updateField = (field: Field, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear the error as soon as the user starts fixing it.
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const nextErrors: FormErrors = {}
    ;(['name', 'email', 'message'] as const).forEach((field) => {
      const message = validateField(field, formData[field])
      if (message) nextErrors[field] = message
    })
    setErrors(nextErrors)

    const firstInvalid = (['name', 'email', 'message'] as const).find((field) => nextErrors[field])
    if (firstInvalid) {
      fieldRefs[firstInvalid].current?.focus()
      return
    }

    setCopyState('idle')
    setIsDrafted(true)
    window.location.href = mailtoUrl
  }

  const handleCopyMessage = async () => {
    clearTimeout(copyTimer.current)
    try {
      await navigator.clipboard.writeText(messageText)
      setCopyState('copied')
    } catch {
      // Clipboard API is missing on insecure origins or blocked by permissions: select the text instead.
      draftTextRef.current?.focus()
      draftTextRef.current?.select()
      setCopyState('failed')
    }
    copyTimer.current = setTimeout(() => setCopyState('idle'), 4000)
  }

  const inputBaseClass =
    'w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-dark-bg text-base text-deep-navy dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-nuraya-gold-400 dark:focus:ring-nuraya-gold-300 focus:border-transparent transition-all'
  const labelClass = 'block mb-1.5 text-sm font-medium text-deep-navy dark:text-gray-100'
  const errorClass = 'mt-1.5 text-sm text-red-600 dark:text-red-400'
  const borderFor = (field: Field) =>
    errors[field] ? 'border-red-500 dark:border-red-400' : 'border-gray-200 dark:border-white/10'

  return (
    <section id='collaboration' className='py-20 md:py-32 bg-light-sand/90 dark:bg-dark-surface/90'>
      <div className='container mx-auto px-6 md:px-12'>
        <div className='flex flex-col lg:flex-row items-start gap-12 lg:gap-16'>
          {/* Left Column: Direct WhatsApp & Company Contact Info */}
          <div className='lg:w-1/2 space-y-8'>
            <div>
              <div className='inline-block px-3 py-1 mb-3 rounded-full bg-nuraya-gold-400/10 text-nuraya-gold-800 dark:text-nuraya-gold-300 text-xs font-semibold uppercase tracking-wider'>
                Konsultasi & Kontak
              </div>
              <h2 className='tracking-tight text-3xl md:text-4xl font-extrabold text-deep-navy dark:text-white mb-4 leading-tight'>
                Mulai Diskusi Kebutuhan Teknologi Anda
              </h2>
              <p className='text-base md:text-lg text-warm-gray dark:text-gray-300 leading-relaxed'>
                Kami siap membantu merancang solusi teknologi yang presisi—mulai dari audit arsitektur,
                pembuatan web & portal bisnis terintegrasi, hingga automasi alur kerja operasional.
              </p>
            </div>

            {/* High-Intent WhatsApp Card */}
            <div className='p-6 rounded-2xl bg-nuraya-blue-50 dark:bg-nuraya-blue-400/10 border border-nuraya-blue-200 dark:border-nuraya-blue-400/25 shadow-sm'>
              <div className='flex flex-col sm:flex-row items-start gap-4'>
                <div className='w-12 h-12 rounded-xl bg-deep-navy text-white dark:bg-nuraya-gold-400 dark:text-deep-navy flex items-center justify-center shrink-0 shadow-md shadow-deep-navy/20'>
                  <MessageCircle className='w-6 h-6' />
                </div>
                <div className='space-y-2 min-w-0 w-full'>
                  <span className='inline-block px-2 py-0.5 rounded text-xs font-semibold bg-nuraya-gold-200 dark:bg-nuraya-gold-400/20 text-nuraya-gold-900 dark:text-nuraya-gold-200'>
                    Saluran Komunikasi Tercepat
                  </span>
                  <h3 className='text-lg font-bold text-deep-navy dark:text-white'>
                    Konsultasi Cepat via WhatsApp
                  </h3>
                  <p className='text-sm text-gray-600 dark:text-gray-300'>
                    Diskusi langsung dengan engineer yang akan membangun sistem Anda: kebutuhan awal, estimasi biaya, dan jadwal pengerjaan.
                  </p>
                  <p className='text-sm text-slate-700 dark:text-gray-200'>
                    <span className='font-semibold tabular-nums text-deep-navy dark:text-white'>
                      {company.whatsappFormatted}
                    </span>
                    <span aria-hidden='true' className='hidden sm:inline'> · </span>
                    <span className='block sm:inline'>Balasan WhatsApp dan email dalam 1 hari kerja.</span>
                  </p>
                  <div className='pt-2'>
                    <Button
                      asChild
                      className='gap-2 text-sm h-auto min-h-11 py-2.5 px-5 w-full sm:w-auto whitespace-normal text-center active:scale-[0.98] transition-transform'>
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
              <div className='relative bg-white dark:bg-dark-surface p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10'>
                {isDrafted ? (
                  <div className='space-y-5'>
                    <div className='text-center space-y-3'>
                      <div className='inline-flex items-center justify-center w-14 h-14 rounded-full bg-nuraya-gold-400/15'>
                        <Mail className='w-7 h-7 text-nuraya-gold-800 dark:text-nuraya-gold-300' />
                      </div>
                      <h3
                        ref={draftHeadingRef}
                        tabIndex={-1}
                        className='text-xl font-semibold text-deep-navy dark:text-white focus:outline-none'>
                        Satu langkah lagi: kirim draf email Anda
                      </h3>
                      <p className='text-sm text-slate-600 dark:text-gray-300 max-w-md mx-auto'>
                        Kami sudah menyiapkan draf di aplikasi email Anda. Pesan baru terkirim setelah Anda
                        menekan Kirim di sana. Kalau aplikasi email tidak terbuka, salin pesan di bawah atau
                        kirim lewat WhatsApp.
                      </p>
                    </div>

                    <div>
                      <label htmlFor='draft-text' className={labelClass}>
                        Salinan pesan Anda
                      </label>
                      <textarea
                        id='draft-text'
                        ref={draftTextRef}
                        readOnly
                        rows={6}
                        value={messageText}
                        onFocus={(e) => e.currentTarget.select()}
                        className={`${inputBaseClass} border border-gray-200 dark:border-white/10 resize-none`}
                      />
                    </div>

                    <div className='flex flex-col sm:flex-row gap-3'>
                      <Button
                        type='button'
                        onClick={handleCopyMessage}
                        variant='outline'
                        className='h-11 gap-2 sm:flex-1'>
                        <Copy className='w-4 h-4' />
                        Salin Pesan
                      </Button>
                      <Button
                        asChild
                        className='h-11 gap-2 sm:flex-1'>
                        <a href={whatsappDraftUrl} target='_blank' rel='noopener noreferrer'>
                          <MessageCircle className='w-4 h-4' />
                          Kirim lewat WhatsApp
                        </a>
                      </Button>
                    </div>

                    <p role='status' aria-live='polite' className='min-h-5 text-sm text-slate-600 dark:text-gray-300'>
                      {copyState === 'copied' && 'Pesan tersalin ke clipboard.'}
                      {copyState === 'failed' &&
                        'Salin otomatis tidak didukung di browser ini. Teks sudah dipilih, tekan Ctrl+C (atau tahan lalu pilih Salin).'}
                    </p>

                    <div className='flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-1 text-sm font-medium'>
                      <a
                        href={mailtoUrl}
                        className='inline-flex items-center min-h-11 px-1 text-nuraya-gold-800 dark:text-nuraya-gold-300 underline underline-offset-4 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nuraya-gold-400 rounded'>
                        Buka ulang draf email
                      </a>
                      <button
                        type='button'
                        onClick={() => setIsDrafted(false)}
                        className='inline-flex items-center min-h-11 px-1 text-nuraya-gold-800 dark:text-nuraya-gold-300 underline underline-offset-4 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nuraya-gold-400 rounded'>
                        Ubah pesan
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h3 className='text-xl md:text-2xl font-semibold mb-2 text-deep-navy dark:text-white'>
                      Formulir Penjajakan Kebutuhan
                    </h3>
                    <p className='text-slate-600 dark:text-gray-300 mb-6 text-sm'>
                      Sampaikan ringkasan permasalahan atau visi aplikasi yang ingin Anda bangun.
                    </p>

                    <form className='space-y-4' onSubmit={handleSubmit} noValidate>
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div>
                          <label htmlFor='contact-name' className={labelClass}>
                            Nama / Organisasi
                          </label>
                          <input
                            id='contact-name'
                            ref={fieldRefs.name}
                            type='text'
                            name='name'
                            autoComplete='name'
                            maxLength={MAX_NAME}
                            required
                            aria-required='true'
                            aria-invalid={errors.name ? true : undefined}
                            aria-describedby={errors.name ? 'contact-name-error' : undefined}
                            placeholder='Nama atau organisasi Anda'
                            value={formData.name}
                            onChange={(e) => updateField('name', e.target.value)}
                            className={`${inputBaseClass} border ${borderFor('name')}`}
                          />
                          {errors.name && (
                            <p id='contact-name-error' role='alert' className={errorClass}>
                              {errors.name}
                            </p>
                          )}
                        </div>
                        <div>
                          <label htmlFor='contact-email' className={labelClass}>
                            Email Kerja
                          </label>
                          <input
                            id='contact-email'
                            ref={fieldRefs.email}
                            type='email'
                            name='email'
                            autoComplete='email'
                            inputMode='email'
                            autoCapitalize='none'
                            spellCheck={false}
                            maxLength={MAX_EMAIL}
                            required
                            aria-required='true'
                            aria-invalid={errors.email ? true : undefined}
                            aria-describedby={errors.email ? 'contact-email-error' : undefined}
                            placeholder='nama@perusahaan.com'
                            value={formData.email}
                            onChange={(e) => updateField('email', e.target.value)}
                            onBlur={(e) => {
                              if (!e.target.value.trim()) return
                              const message = validateField('email', e.target.value)
                              if (message) setErrors((prev) => ({ ...prev, email: message }))
                            }}
                            className={`${inputBaseClass} border ${borderFor('email')}`}
                          />
                          {errors.email && (
                            <p id='contact-email-error' role='alert' className={errorClass}>
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                      <div>
                        <label htmlFor='contact-message' className={labelClass}>
                          Kebutuhan Anda
                        </label>
                        <textarea
                          id='contact-message'
                          ref={fieldRefs.message}
                          name='message'
                          rows={4}
                          maxLength={MAX_MESSAGE}
                          required
                          aria-required='true'
                          aria-invalid={errors.message ? true : undefined}
                          aria-describedby={
                            [errors.message && 'contact-message-error', 'contact-message-hint']
                              .filter(Boolean)
                              .join(' ') || undefined
                          }
                          placeholder='Kebutuhan sistem, kendala saat ini, atau perkiraan timeline'
                          value={formData.message}
                          onChange={(e) => updateField('message', e.target.value)}
                          className={`${inputBaseClass} border resize-y min-h-28 ${borderFor('message')}`}
                        />
                        <div className='flex items-start justify-between gap-3'>
                          {errors.message ? (
                            <p id='contact-message-error' role='alert' className={errorClass}>
                              {errors.message}
                            </p>
                          ) : (
                            <span />
                          )}
                          <span
                            id='contact-message-hint'
                            className={`mt-1.5 shrink-0 text-sm tabular-nums ${
                              formData.message.length >= COUNTER_FROM
                                ? 'text-slate-700 dark:text-gray-200'
                                : 'sr-only'
                            }`}>
                            {formData.message.length}/{MAX_MESSAGE} karakter
                          </span>
                        </div>
                      </div>

                      <Button type='submit' variant='secondary' className='w-full h-11 gap-2 active:scale-[0.98] transition-transform'>
                        <Send className='w-4 h-4' />
                        Kirim lewat Email
                      </Button>
                      <p className='text-sm text-slate-600 dark:text-gray-300'>
                        Tombol ini membuka draf di aplikasi email Anda. Lebih suka chat?{' '}
                        <a
                          href={company.whatsappUrl}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='font-medium text-nuraya-gold-800 dark:text-nuraya-gold-300 underline underline-offset-4 hover:no-underline'>
                          Langsung via WhatsApp
                        </a>
                        .
                      </p>
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
