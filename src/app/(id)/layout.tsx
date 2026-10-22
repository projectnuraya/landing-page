import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import { SiteDocument } from '@/components/site/SiteDocument'
import { baseMetadata } from '@/lib/seo'

export const metadata: Metadata = baseMetadata

export default function IndonesianLayout({ children }: { children: ReactNode }) {
  return <SiteDocument lang='id'>{children}</SiteDocument>
}
