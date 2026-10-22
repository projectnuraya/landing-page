import { revalidatePath } from 'next/cache'
import type { GlobalConfig, TextFieldSingleValidation } from 'payload'

import { anyone, authenticated } from '../access'
import { company } from '../config/company'

const httpsUrl: TextFieldSingleValidation = (value) =>
  !value || /^https:\/\/\S+$/.test(value) || 'Harus berupa URL lengkap yang diawali https://'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Pengaturan Situs',
  admin: {
    description:
      'Kontak dan media sosial yang tampil di beranda dan footer. Halaman legal tetap memakai data di src/config/company.ts.',
  },
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'whatsappNumber',
          label: 'Nomor WhatsApp',
          type: 'text',
          required: true,
          defaultValue: company.whatsappNumber,
          validate: (value: string | null | undefined) =>
            /^62\d{8,13}$/.test(value ?? '') ||
            'Gunakan format internasional tanpa + atau spasi, contoh 6281234567890.',
          admin: { width: '50%', description: 'Format internasional, contoh 6281234567890.' },
        },
        {
          name: 'email',
          label: 'Email kontak',
          type: 'email',
          required: true,
          defaultValue: company.email,
          admin: { width: '50%' },
        },
      ],
    },
    {
      name: 'whatsappMessage',
      label: 'Pesan awal WhatsApp',
      type: 'textarea',
      required: true,
      defaultValue: company.whatsappMessage,
      admin: { description: 'Teks yang sudah terisi saat pengunjung membuka chat WhatsApp.' },
    },
    {
      type: 'row',
      fields: [
        {
          name: 'github',
          label: 'GitHub',
          type: 'text',
          defaultValue: company.github,
          validate: httpsUrl,
          admin: { width: '50%' },
        },
        {
          name: 'linkedin',
          label: 'LinkedIn',
          type: 'text',
          defaultValue: company.linkedin,
          validate: httpsUrl,
          admin: { width: '50%' },
        },
      ],
    },
  ],
  hooks: {
    // Pages showing these details are cached; refresh all of them on save.
    afterChange: [() => revalidatePath('/', 'layout')],
  },
}
