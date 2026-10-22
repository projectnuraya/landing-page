import 'lenis/dist/lenis.css'
import Script from 'next/script'
import type { ReactNode } from 'react'

import '../../app/globals.css'
import type { Locale } from '../../lib/seo'
import { themeBootstrapScript } from '../../lib/theme'

import { SmoothScroll } from './SmoothScroll'

/**
 * The `<html>` shell shared by the Indonesian and English root layouts.
 *
 * Each language has its own root layout so the server can send the right
 * `lang` attribute; a single layout cannot see the URL it is rendering.
 */
export function SiteDocument({ lang, children }: { lang: Locale; children: ReactNode }) {
  return (
    // The bootstrap script adds `dark` to <html> before hydration, which React
    // would otherwise report as a mismatch.
    <html lang={lang} suppressHydrationWarning>
      <head>
        {/* Applies the stored theme before first paint. Without it the page
            would flash light, because the server always renders light. */}
        <Script id='theme-bootstrap' strategy='beforeInteractive'>
          {themeBootstrapScript}
        </Script>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
        {/* Loaded from Google on purpose: the privacy policy lists Google Fonts
            as a sub-processor. Self-hosting the font would need that page
            updated too. */}
        <link
          href='https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
      </head>
      <body>
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}
