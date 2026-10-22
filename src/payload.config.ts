import { postgresAdapter } from '@payloadcms/db-postgres'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { id } from '@payloadcms/translations/languages/id'
import path from 'path'
import { buildConfig } from 'payload'
import sharp from 'sharp'
import { fileURLToPath } from 'url'

import { Categories } from './collections/Categories'
import { Media } from './collections/Media'
import { Posts } from './collections/Posts'
import { Users } from './collections/Users'
import { company } from './config/company'
import { SiteSettings } from './globals/SiteSettings'
import { postPath } from './lib/blog'
import { siteUrl } from './lib/seo'
import { migrations } from './migrations'

const dirname = path.dirname(fileURLToPath(import.meta.url))

export default buildConfig({
  serverURL: siteUrl,
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ` — ${company.brandName} CMS`,
      icons: [{ rel: 'icon', type: 'image/svg+xml', url: '/favicon.svg' }],
    },
    components: {
      graphics: {
        Logo: '/components/admin/Logo#Logo',
        Icon: '/components/admin/Icon#Icon',
      },
    },
  },
  collections: [Posts, Categories, Media, Users],
  globals: [SiteSettings],
  // The admin is Indonesian only, matching the labels in the collections.
  i18n: {
    supportedLanguages: { id },
    fallbackLanguage: 'id',
    translations: {
      // The SEO plugin ships no Indonesian strings of its own.
      id: {
        'plugin-seo': {
          almostThere: 'Hampir',
          autoGenerate: 'Buat otomatis',
          bestPractices: 'panduan praktik terbaik',
          characterCount: '{{current}}/{{minLength}}-{{maxLength}} karakter, ',
          charactersLeftOver: 'kelebihan {{characters}}',
          charactersToGo: 'kurang {{characters}} lagi',
          charactersTooMany: 'kelebihan {{characters}}',
          checksPassing: '{{current}}/{{max}} pemeriksaan lolos',
          good: 'Bagus',
          imageAutoGenerationTip: 'Buat otomatis akan memakai gambar sampul yang dipilih.',
          lengthTipDescription:
            'Sebaiknya {{minLength}} sampai {{maxLength}} karakter. Untuk tips menulis deskripsi meta, lihat ',
          lengthTipTitle:
            'Sebaiknya {{minLength}} sampai {{maxLength}} karakter. Untuk tips menulis judul meta, lihat ',
          missing: 'Belum diisi',
          noImage: 'Tanpa gambar',
          preview: 'Pratinjau',
          previewDescription: 'Tampilan di hasil pencarian bisa sedikit berbeda.',
          tooLong: 'Terlalu panjang',
          tooShort: 'Terlalu pendek',
        },
      },
    },
  },
  editor: lexicalEditor(),
  // The site only talks to Payload through the Local API and REST.
  graphQL: { disable: true },
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
    // Development pushes schema changes straight to the database. Production
    // never does: it runs the committed migrations in src/migrations on boot.
    prodMigrations: migrations,
  }),
  sharp,
  plugins: [
    // The SEO fields themselves are placed by hand in the Posts collection so
    // they get their own tab without pulling sidebar fields into it.
    seoPlugin({
      generateTitle: ({ doc }) => `${doc.title} — ${company.brandName}`,
      generateDescription: ({ doc }) => doc.excerpt,
      generateURL: ({ doc }) => `${siteUrl}${postPath(doc.slug)}`,
    }),
  ],
})
