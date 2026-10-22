'use client'

import { createContext, type ReactNode, useContext } from 'react'

import { defaultSiteSettings, type SiteSettings } from '../../lib/site-settings'

const SiteSettingsContext = createContext<SiteSettings>(defaultSiteSettings)

/** Hands the Pengaturan Situs values, loaded once per page, to client components. */
export function SiteSettingsProvider({
  value,
  children,
}: {
  value: SiteSettings
  children: ReactNode
}) {
  return <SiteSettingsContext.Provider value={value}>{children}</SiteSettingsContext.Provider>
}

export const useSiteSettings = () => useContext(SiteSettingsContext)
