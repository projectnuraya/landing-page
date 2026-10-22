import config from '@payload-config'
import { getPayload } from 'payload'
import { cache } from 'react'

import { company } from '../config/company'

import { defaultSiteSettings, type SiteSettings, whatsappLink } from './site-settings'

/**
 * Contact details from the Pengaturan Situs global.
 *
 * Never throws: the landing and legal pages depend on this, and they should
 * keep working with the defaults from `config/company.ts` if the database is
 * down. The build also uses the defaults so it never touches the database;
 * pages pick up the saved values on their first revalidation.
 */
export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  if (process.env.NEXT_PHASE === 'phase-production-build') return defaultSiteSettings

  try {
    const payload = await getPayload({ config })
    const doc = await payload.findGlobal({ slug: 'site-settings', depth: 0 })
    return {
      email: doc.email || defaultSiteSettings.email,
      whatsappUrl: whatsappLink(
        doc.whatsappNumber || company.whatsappNumber,
        doc.whatsappMessage || company.whatsappMessage,
      ),
      github: doc.github || defaultSiteSettings.github,
      linkedin: doc.linkedin || defaultSiteSettings.linkedin,
    }
  } catch (error) {
    console.error(
      'Site settings unavailable, using defaults from config/company.ts:',
      error instanceof Error ? error.message : error,
    )
    return defaultSiteSettings
  }
})
