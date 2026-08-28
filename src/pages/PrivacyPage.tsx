import { Shield } from 'lucide-react'

import { legalAccents } from '../components/legal/accents'
import { LegalPageLayout } from '../components/legal/LegalPageLayout'
import { legalDocuments } from '../content/legal'
import type { Locale } from '../lib/seo'

export function PrivacyPage({ locale }: { locale: Locale }) {
  return (
    <LegalPageLayout
      doc={legalDocuments.privacy[locale]}
      icon={Shield}
      accent={legalAccents.gold}
      path={locale === 'id' ? '/privacy' : '/en/privacy'}
    />
  )
}
