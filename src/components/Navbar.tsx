import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { DarkModeToggle } from './DarkModeToggle'

export function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Intersection Observer for active section detection
  useEffect(() => {
    const sections = ['hero', 'mission', 'about', 'values', 'products', 'collaboration']
    const observers: IntersectionObserver[] = []

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(sectionId)
              }
            })
          },
          {
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0.1,
          },
        )
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [location.pathname])

  const handleSectionClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setIsMobileMenuOpen(false) // Close mobile menu on click

    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const navLinks = [
    { id: 'hero', label: 'Beranda' },
    { id: 'mission', label: 'Misi' },
    { id: 'about', label: 'Tentang' },
    { id: 'values', label: 'Nilai-nilai' },
    { id: 'products', label: 'Produk' },
    { id: 'collaboration', label: 'Kolaborasi', isButton: true },
  ]

  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-100 dark:border-white/5'>
        {/* Logo */}
        <div className='font-bold text-xl tracking-tight text-deep-navy dark:text-white'>
          <Link to='/' aria-label='Project Nuraya Logo' onClick={() => window.scrollTo(0, 0)}>
            NURAYA
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-6 lg:space-x-8 items-center'>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleSectionClick(link.id)}
              className={
                link.isButton
                  ? 'px-3 py-1.5 border-2 border-nuraya-gold-400 text-nuraya-gold-400 hover:bg-nuraya-gold-400 hover:text-white dark:border-nuraya-gold-300 dark:text-nuraya-gold-300 dark:hover:bg-nuraya-gold-300 dark:hover:text-deep-navy rounded-md transition-all'
                  : `text-sm lg:text-base transition-colors ${
                      activeSection === link.id
                        ? 'text-nuraya-gold-500 dark:text-nuraya-gold-300 font-semibold'
                        : 'text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-400 dark:hover:text-nuraya-gold-300'
                    }`
              }>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side: Dark mode toggle + Mobile menu button */}
        <div className='flex items-center gap-3'>
          <DarkModeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className='md:hidden p-2 text-deep-navy dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-md transition-colors'
            aria-label='Toggle mobile menu'>
            {isMobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </header>

      {/* Mobile Side Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className='fixed inset-0 bg-black/50 z-40 md:hidden'
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden='true'
          />

          {/* Drawer */}
          <div className='fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-dark-bg shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out'>
            <div className='flex flex-col h-full'>
              {/* Drawer Header */}
              <div className='flex items-center justify-between p-6 border-b border-gray-100 dark:border-white/5'>
                <span className='font-bold text-xl text-deep-navy dark:text-white'>Menu</span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-md transition-colors'
                  aria-label='Close menu'>
                  <X className='w-5 h-5 text-deep-navy dark:text-white' />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className='flex-1 overflow-y-auto py-6 px-4'>
                <ul className='space-y-2'>
                  {navLinks.map((link) => (
                    <li key={link.id}>
                      <a
                        href={`#${link.id}`}
                        onClick={handleSectionClick(link.id)}
                        className={
                          link.isButton
                            ? 'block w-full px-4 py-3 text-center border-2 border-nuraya-gold-400 text-nuraya-gold-400 hover:bg-nuraya-gold-400 hover:text-white dark:border-nuraya-gold-300 dark:text-nuraya-gold-300 dark:hover:bg-nuraya-gold-300 dark:hover:text-deep-navy rounded-lg transition-all font-medium'
                            : `block px-4 py-3 rounded-lg transition-all ${
                                activeSection === link.id
                                  ? 'bg-nuraya-gold-50 text-nuraya-gold-500 dark:bg-nuraya-gold-400/10 dark:text-nuraya-gold-300 font-semibold'
                                  : 'text-warm-gray dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-deep-navy dark:hover:text-white'
                              }`
                        }>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Drawer Footer */}
              <div className='p-6 border-t border-gray-100 dark:border-white/5'>
                <p className='text-sm text-gray-500 dark:text-gray-400 text-center'>
                  © {new Date().getFullYear()} Project Nuraya
                </p>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
