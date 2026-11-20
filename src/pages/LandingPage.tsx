import { useEffect } from 'react'

import { AboutSection } from '../components/AboutSection'
import { CollaborationSection } from '../components/CollaborationSection'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { MissionStatement } from '../components/MissionStatement'
import { Navbar } from '../components/Navbar'
import { ProductSection } from '../components/ProductSection'
import { SkipLink } from '../components/SkipLink'
import { findPageMeta } from '../lib/seo'

export function LandingPage() {
  useEffect(() => {
    const meta = findPageMeta('/')
    if (meta) document.title = meta.title
  }, [])

  return (
    <div className='min-h-screen bg-soft-white dark:bg-dark-bg transition-colors duration-300'>
      <SkipLink />
      <Navbar />

      <main id='main-content' tabIndex={-1} className='outline-none'>
        <Hero />
        <ProductSection />
        <MissionStatement />
        <AboutSection />
        <CollaborationSection />
      </main>

      <Footer />
    </div>
  )
}
