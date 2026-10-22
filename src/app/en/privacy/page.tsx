import { Shield } from 'lucide-react'

import { legalAccents } from '@/components/legal/accents'
import { LegalPageLayout } from '@/components/legal/LegalPageLayout'
import { legalDocuments } from '@/content/legal'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata('/en/privacy')

export default function Page() {
  return (
    <LegalPageLayout doc={legalDocuments.privacy.en} icon={Shield} accent={legalAccents.gold} />
  )
}
