import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { SiteDocument } from '@/components/site/SiteDocument'
import { baseMetadata } from '@/lib/seo'

export const metadata: Metadata = baseMetadata

// Pages are static but re-rendered at most once a minute, so edits to
// Pengaturan Situs show up even after a redeploy. Saving the global also
// refreshes them right away.
export const revalidate = 60

export default function IndonesianLayout({ children }: { children: ReactNode }) {
  return <SiteDocument lang='id'>{children}</SiteDocument>
}
