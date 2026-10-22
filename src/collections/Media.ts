import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '../access'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Media', plural: 'Media' },
  access: {
    read: anyone,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'alt',
      label: 'Teks alternatif',
      type: 'text',
      required: true,
      admin: {
        description: 'Deskripsi singkat gambar untuk pembaca layar dan mesin pencari.',
      },
    },
  ],
  upload: {
    // Relative to the project root. Mount it as a volume in production so
    // uploads survive redeploys.
    staticDir: 'media',
    mimeTypes: ['image/*'],
    imageSizes: [
      { name: 'thumbnail', width: 480 },
      { name: 'card', width: 960 },
      { name: 'og', width: 1200, height: 630, position: 'centre' },
    ],
    adminThumbnail: 'thumbnail',
  },
}
