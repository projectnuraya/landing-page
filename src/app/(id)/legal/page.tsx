import { Scale } from 'lucide-react'

import { legalAccents } from '@/components/legal/accents'
import { LegalPageLayout } from '@/components/legal/LegalPageLayout'
import { legalDocuments } from '@/content/legal'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata('/legal')

export default function Page() {
  return (
    <LegalPageLayout
      doc={legalDocuments['legal-notice'].id}
      icon={Scale}
      accent={legalAccents.green}
    />
  )
}
