import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

import nurayaLogoDark from '../assets/nuraya_logo_dark.svg'
import nurayaLogoLight from '../assets/nuraya_logo_light.svg'
import { scrollToSection } from '../lib/scroll'

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
            // Any overlap with the band counts: a ratio threshold never fires for tall sections,
            // because a 20%-viewport band covers only a sliver of a 2000px+ target.
            threshold: 0,
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Keyboard access for the drawer: Escape closes it, focus moves in on open and back to the
  // menu button on close, so keyboard users never land in the page behind the backdrop.
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const wasMenuOpen = useRef(false)
  useEffect(() => {
    if (isMobileMenuOpen) {
      closeButtonRef.current?.focus()
    } else if (wasMenuOpen.current) {
      menuButtonRef.current?.focus()
    }
    wasMenuOpen.current = isMobileMenuOpen
    if (!isMobileMenuOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMobileMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [isMobileMenuOpen])

  const handleSectionClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    setIsMobileMenuOpen(false) // Close mobile menu on click

    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 100)
    } else {
      scrollToSection(sectionId)
    }
  }

  const navLinks = [
    { id: 'hero', label: 'Beranda' },
    { id: 'mission', label: 'Misi' },
    { id: 'about', label: 'Tentang' },
    { id: 'values', label: 'Nilai-nilai' },
    { id: 'products', label: 'Produk' },
    { id: 'collaboration', label: 'Konsultasi', isButton: true },
  ]

  return (
    <>
      <header className='fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-100 dark:border-white/5'>
        {/* Logo */}
        <div className='font-bold text-xl tracking-tight text-deep-navy dark:text-white'>
          <Link to='/' onClick={() => window.scrollTo(0, 0)}>
            {/* Both logos ship in the markup and CSS picks one, so the
                prerendered HTML is correct in either theme and hydration has
                nothing to reconcile. */}
            <img
              src={nurayaLogoLight}
              alt='Project Nuraya Logo'
              className='h-8 w-auto dark:hidden'
            />
            <img
              src={nurayaLogoDark}
              alt=''
              aria-hidden='true'
              className='h-8 w-auto hidden dark:block'
            />
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
                  ? 'px-3 py-1.5 border-2 border-nuraya-gold-500 text-nuraya-gold-800 hover:bg-nuraya-gold-400 hover:border-nuraya-gold-400 hover:text-deep-navy dark:border-nuraya-gold-300 dark:text-nuraya-gold-300 dark:hover:bg-nuraya-gold-300 dark:hover:text-deep-navy rounded-md transition-all'
                  : `text-sm lg:text-base transition-colors ${
                      activeSection === link.id
                        ? 'text-nuraya-gold-800 dark:text-nuraya-gold-300 font-semibold'
                        : 'text-warm-gray dark:text-gray-400 hover:text-nuraya-gold-800 dark:hover:text-nuraya-gold-300'
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
            ref={menuButtonRef}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            className='md:hidden p-2.5 text-deep-navy dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 rounded-md transition-colors'
            aria-label='Toggle mobile menu'>
            {isMobileMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </header>

      {/* Mobile Side Drawer & Backdrop */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden={!isMobileMenuOpen}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-white dark:bg-dark-bg shadow-2xl z-50 md:hidden transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isMobileMenuOpen}
        inert={!isMobileMenuOpen}>
        <div className='flex flex-col h-full'>
          {/* Drawer Header */}
          <div className='flex items-center justify-between p-6 border-b border-gray-100 dark:border-white/5'>
            <span className='font-bold text-xl text-deep-navy dark:text-white'>Menu</span>
            <button
              ref={closeButtonRef}
              onClick={() => setIsMobileMenuOpen(false)}
              className='p-3 hover:bg-gray-100 dark:hover:bg-white/10 rounded-md transition-colors'
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
                        ? 'block w-full px-4 py-3 text-center border-2 border-nuraya-gold-500 text-nuraya-gold-800 hover:bg-nuraya-gold-400 hover:border-nuraya-gold-400 hover:text-deep-navy dark:border-nuraya-gold-300 dark:text-nuraya-gold-300 dark:hover:bg-nuraya-gold-300 dark:hover:text-deep-navy rounded-lg transition-all font-medium'
                        : `block px-4 py-3 rounded-lg transition-all ${
                            activeSection === link.id
                              ? 'bg-nuraya-gold-50 text-nuraya-gold-800 dark:bg-nuraya-gold-400/10 dark:text-nuraya-gold-300 font-semibold'
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
  )
}
