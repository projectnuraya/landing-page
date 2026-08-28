import { Scale } from 'lucide-react'

import { legalAccents } from '../components/legal/accents'
import { LegalPageLayout } from '../components/legal/LegalPageLayout'
import { legalDocuments } from '../content/legal'
import type { Locale } from '../lib/seo'

export function LegalNoticePage({ locale }: { locale: Locale }) {
  return (
    <LegalPageLayout
      doc={legalDocuments['legal-notice'][locale]}
      icon={Scale}
      accent={legalAccents.green}
      path={locale === 'id' ? '/legal' : '/en/legal'}
    />
  )
}
