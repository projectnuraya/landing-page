import { AboutSection } from '../components/AboutSection'
import { CollaborationSection } from '../components/CollaborationSection'
import { DarkModeToggle } from '../components/DarkModeToggle'
import { Footer } from '../components/Footer'
import { Hero } from '../components/Hero'
import { MissionStatement } from '../components/MissionStatement'
import { ValuesSection } from '../components/ValuesSection'
export function LandingPage() {
  return (
    <div className='min-h-screen bg-soft-white dark:bg-dark-bg transition-colors duration-300'>
      {/* Navigation / Header */}
      <header className='fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-100 dark:border-white/5'>
        <div className='font-bold text-xl tracking-tight text-deep-navy dark:text-white'>
          NURAYA
        </div>
        <nav className='hidden md:flex space-x-8'>
          <a
            href='#hero'
            className='text-deep-navy hover:text-nuraya-gold dark:text-white dark:hover:text-nuraya-gold transition-colors'>
            Home
          </a>
          <a
            href='#mission'
            className='text-deep-navy hover:text-nuraya-gold dark:text-white dark:hover:text-nuraya-gold transition-colors'>
            Mission
          </a>
          <a
            href='#about'
            className='text-deep-navy hover:text-nuraya-gold dark:text-white dark:hover:text-nuraya-gold transition-colors'>
            About
          </a>
          <a
            href='#values'
            className='text-deep-navy hover:text-nuraya-gold dark:text-white dark:hover:text-nuraya-gold transition-colors'>
            Values
          </a>
          <a
            href='#collaboration'
            className='text-deep-navy hover:text-nuraya-gold dark:text-white dark:hover:text-nuraya-gold transition-colors'>
            Collaboration
          </a>
        </nav>
        <DarkModeToggle />
      </header>

      <main>
        <Hero />
        <MissionStatement />
        <AboutSection />
        <ValuesSection />
        {/* <ImpactAreas /> */}
        <CollaborationSection />
        {/* <Newsletter /> */}
      </main>

      <Footer />
    </div>
  )
}
