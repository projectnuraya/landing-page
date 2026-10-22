import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '../access'
import { slugFrom } from '../lib/slug'

export const Categories: CollectionConfig = {
  slug: 'categories',
  labels: { singular: 'Kategori', plural: 'Kategori' },
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'title',
      label: 'Nama',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      admin: { position: 'sidebar', description: 'Dibuat otomatis dari nama jika dikosongkan.' },
      hooks: { beforeValidate: [slugFrom('title')] },
    },
  ],
}
