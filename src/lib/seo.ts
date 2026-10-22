import type { Metadata } from 'next'

import { company } from '../config/company'

export type Locale = 'id' | 'en'

export interface PageMeta {
  /** Route path, exactly as registered with the router. */
  path: string
  title: string
  description: string
  lang: Locale
  /** Same document in the other language, when one exists. */
  alternate?: string
}

/**
 * Head metadata for every static route.
 *
 * Pages turn their entry into Next metadata with `pageMetadata`, and the
 * sitemap lists these paths, so a route's title, canonical URL and language
 * alternates all come from one place.
 */
export const pages: PageMeta[] = [
  {
    path: '/',
    title: `${company.brandName} — ${company.legalName}`,
    description:
      'Nuraya Digital Nusantara — Membangun produk digital yang memecahkan masalah nyata. Teknologi untuk pendidikan, pemberdayaan, dan kolaborasi sosial.',
    lang: 'id',
  },
  {
    path: '/blog',
    title: `Blog — ${company.brandName}`,
    description: `Catatan, tutorial, dan cerita di balik produk dan layanan ${company.brandName}.`,
    lang: 'id',
  },
  {
    path: '/privacy',
    title: `Kebijakan Privasi — ${company.brandName}`,
    description: `Kebijakan privasi ${company.legalName}: data yang kami kumpulkan, cara kami menggunakan data pengguna Google, dan hak Anda menurut UU No. 27 Tahun 2022.`,
    lang: 'id',
    alternate: '/en/privacy',
  },
  {
    path: '/terms',
    title: `Ketentuan Layanan — ${company.brandName}`,
    description: `Ketentuan layanan yang mengatur penggunaan situs dan aplikasi ${company.brandName}, termasuk akun yang dibuat melalui Google Sign-In.`,
    lang: 'id',
    alternate: '/en/terms',
  },
  {
    path: '/legal',
    title: `Pemberitahuan Hukum — ${company.brandName}`,
    description: `Informasi hukum ${company.legalName}: identitas badan hukum, NIB, hak cipta, kepatuhan regulasi, dan yurisdiksi.`,
    lang: 'id',
    alternate: '/en/legal',
  },
  {
    path: '/en/privacy',
    title: `Privacy Policy — ${company.brandName}`,
    description: `Privacy policy of ${company.legalName}: what we collect, how we handle Google user data, and your rights under Indonesian Law No. 27 of 2022.`,
    lang: 'en',
    alternate: '/privacy',
  },
  {
    path: '/en/terms',
    title: `Terms of Service — ${company.brandName}`,
    description: `Terms governing the use of ${company.brandName} websites and applications, including accounts created through Google Sign-In.`,
    lang: 'en',
    alternate: '/terms',
  },
  {
    path: '/en/legal',
    title: `Legal Notice — ${company.brandName}`,
    description: `Legal information for ${company.legalName}: entity details, business registration number, copyright, regulatory compliance and jurisdiction.`,
    lang: 'en',
    alternate: '/legal',
  },
]

const byPath = new Map(pages.map((p) => [p.path, p]))

export function findPageMeta(path: string): PageMeta | undefined {
  return byPath.get(path === '/' ? path : path.replace(/\/+$/, ''))
}

/** Public origin, without a trailing slash. */
export const siteUrl = (process.env.NEXT_PUBLIC_SERVER_URL || company.website).replace(/\/+$/, '')

/** Open Graph locale for a page language. */
export const ogLocale = (lang: Locale) => (lang === 'id' ? 'id_ID' : 'en_US')

/** Defaults every page inherits from its root layout. */
export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: company.brandName,
  icons: { icon: { url: '/favicon.svg', type: 'image/svg+xml' } },
  openGraph: { siteName: company.brandName, type: 'website' },
}

/** Next metadata for a route registered in `pages`. */
export function pageMetadata(path: string): Metadata {
  const page = findPageMeta(path)
  if (!page) throw new Error(`No page metadata registered for ${path}`)

  const languages: Record<string, string> = {}
  if (page.alternate) {
    const idPath = page.lang === 'id' ? page.path : page.alternate
    const enPath = page.lang === 'en' ? page.path : page.alternate
    languages.id = idPath
    languages.en = enPath
    languages['x-default'] = idPath
  }

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: page.path, languages },
    openGraph: {
      // Next replaces a parent's openGraph object instead of merging it.
      ...baseMetadata.openGraph,
      title: page.title,
      description: page.description,
      url: page.path,
      locale: ogLocale(page.lang),
    },
  }
}
