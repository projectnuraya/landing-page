import { postgresAdapter } from '@payloadcms/db-postgres'
import { seoPlugin } from '@payloadcms/plugin-seo'
import { FixedToolbarFeature, HeadingFeature, lexicalEditor } from '@payloadcms/richtext-lexical'
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
import { idTranslations } from './i18n/id'
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
    translations: { id: idTranslations },
  },
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures.filter((feature) => feature.key !== 'heading'),
      // Word-style toolbar pinned above the editor, on top of the default
      // selection popup and "/" command menu.
      FixedToolbarFeature(),
      // The article title is already the page's <h1>.
      HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
    ],
  }),
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
