import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import type { CollectionConfig } from 'payload'

import { authenticated, authenticatedOrPublished } from '../access'
import { postPath, previewUrl } from '../lib/blog'
import { slugFrom } from '../lib/slug'

export const Posts: CollectionConfig = {
  slug: 'posts',
  labels: { singular: 'Artikel', plural: 'Artikel' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', '_status', 'publishedAt'],
    preview: (doc) => (typeof doc.slug === 'string' ? previewUrl(postPath(doc.slug)) : null),
  },
  access: {
    read: authenticatedOrPublished,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  defaultSort: '-publishedAt',
  versions: {
    // Drafts let an article be written and previewed before it goes live.
    drafts: true,
    maxPerDoc: 50,
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Artikel',
          fields: [
            {
              name: 'title',
              label: 'Judul',
              type: 'text',
              required: true,
            },
            {
              name: 'excerpt',
              label: 'Ringkasan',
              type: 'textarea',
              required: true,
              maxLength: 300,
              admin: {
                description:
                  'Tampil di daftar artikel dan jadi deskripsi default untuk mesin pencari.',
              },
            },
            {
              name: 'coverImage',
              label: 'Gambar sampul',
              type: 'upload',
              relationTo: 'media',
            },
            {
              name: 'content',
              label: 'Isi',
              type: 'richText',
              required: true,
            },
          ],
        },
        {
          // Fields come from the SEO plugin; the plugin's generate* functions in
          // payload.config.ts power the "Auto-generate" buttons.
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({ hasGenerateFn: true, overrides: { label: 'Judul meta' } }),
            MetaImageField({ relationTo: 'media', overrides: { label: 'Gambar meta' } }),
            MetaDescriptionField({ hasGenerateFn: true, overrides: { label: 'Deskripsi meta' } }),
            PreviewField({
              hasGenerateFn: true,
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: 'Alamat artikel: /blog/<slug>. Dibuat otomatis dari judul jika dikosongkan.',
      },
      hooks: { beforeValidate: [slugFrom('title')] },
    },
    {
      name: 'publishedAt',
      label: 'Tanggal terbit',
      type: 'date',
      index: true,
      admin: {
        position: 'sidebar',
        date: { pickerAppearance: 'dayAndTime' },
        description: 'Diisi otomatis saat pertama kali diterbitkan.',
      },
      hooks: {
        beforeChange: [
          ({ value, siblingData }) =>
            !value && siblingData._status === 'published' ? new Date().toISOString() : value,
        ],
      },
    },
    {
      name: 'authors',
      label: 'Penulis',
      type: 'relationship',
      relationTo: 'users',
      hasMany: true,
      admin: { position: 'sidebar' },
      defaultValue: ({ user }) => (user ? [user.id] : []),
    },
    {
      name: 'categories',
      label: 'Kategori',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
      admin: { position: 'sidebar' },
    },
  ],
}
