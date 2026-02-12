import { useEffect } from 'react'

import { AboutSection } from '../components/AboutSection'
import { CollaborationSection } from '../components/CollaborationSection'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { MissionStatement } from '../components/MissionStatement'
import { Navbar } from '../components/Navbar'
import { ProductSection } from '../components/ProductSection'
import { ValuesSection } from '../components/ValuesSection'

export function LandingPage() {
  useEffect(() => {
    document.title = 'Nuraya Digital Nusantara'
  }, [])

  return (
    <div className='min-h-screen bg-soft-white dark:bg-dark-bg transition-colors duration-300'>
      <Navbar />

      <main>
        <Hero />
        <MissionStatement />
        <AboutSection />
        <ValuesSection />
        <ProductSection />
        <CollaborationSection />
      </main>

      <Footer />
    </div>
  )
}
