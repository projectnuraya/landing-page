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
 * Head metadata for every prerendered route.
 *
 * This is the single source used by both the build-time prerenderer and
 * client-side navigation, so a route can never end up with a stale title in one
 * and not the other. Before this existed, titles were set from `useEffect`,
 * which never runs during prerendering — that is why every route in production
 * shipped the same `<title>`.
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
