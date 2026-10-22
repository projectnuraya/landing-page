import { company } from '../config/company'

/** Public contact details, as edited in the admin under Pengaturan Situs. */
export interface SiteSettings {
  email: string
  whatsappUrl: string
  github: string
  linkedin: string
}

export const whatsappLink = (number: string, message: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(message)}`

/**
 * Used before anything is saved in the admin, during the build, and whenever
 * the database cannot be reached.
 */
export const defaultSiteSettings: SiteSettings = {
  email: company.email,
  whatsappUrl: whatsappLink(company.whatsappNumber, company.whatsappMessage),
  github: company.github,
  linkedin: company.linkedin,
}
