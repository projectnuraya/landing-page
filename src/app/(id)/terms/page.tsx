import { FileText } from 'lucide-react'

import { legalAccents } from '@/components/legal/accents'
import { LegalPageLayout } from '@/components/legal/LegalPageLayout'
import { legalDocuments } from '@/content/legal'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata('/terms')

export default function Page() {
  return <LegalPageLayout doc={legalDocuments.terms.id} icon={FileText} accent={legalAccents.sky} />
}
