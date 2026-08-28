import { FileText } from 'lucide-react'

import { legalAccents } from '../components/legal/accents'
import { LegalPageLayout } from '../components/legal/LegalPageLayout'
import { legalDocuments } from '../content/legal'
import type { Locale } from '../lib/seo'

export function TermsPage({ locale }: { locale: Locale }) {
  return (
    <LegalPageLayout
      doc={legalDocuments.terms[locale]}
      icon={FileText}
      accent={legalAccents.sky}
      path={locale === 'id' ? '/terms' : '/en/terms'}
    />
  )
}
