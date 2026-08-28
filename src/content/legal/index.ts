import type { Locale } from '../../lib/seo'

import { legalNoticeEn } from './legal-notice.en'
import { legalNoticeId } from './legal-notice.id'
import { privacyEn } from './privacy.en'
import { privacyId } from './privacy.id'
import { termsEn } from './terms.en'
import { termsId } from './terms.id'
import type { LegalDocument } from './types'

export const legalDocuments = {
  privacy: { id: privacyId, en: privacyEn },
  terms: { id: termsId, en: termsEn },
  'legal-notice': { id: legalNoticeId, en: legalNoticeEn },
} satisfies Record<string, Record<Locale, LegalDocument>>

export type LegalDocumentKey = keyof typeof legalDocuments
