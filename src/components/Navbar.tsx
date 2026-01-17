import { Link, useLocation, useNavigate } from 'react-router-dom'
import { DarkModeToggle } from './DarkModeToggle'

export function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const handleSectionClick = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault()

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

  return (
    <header className='fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md border-b border-gray-100 dark:border-white/5'>
      <div className='font-bold text-xl tracking-tight text-deep-navy dark:text-white'>
        <Link to='/' aria-label='Project Nuraya Logo' onClick={() => window.scrollTo(0, 0)}>
          NURAYA
        </Link>
      </div>
      <nav className='hidden md:flex space-x-8 items-center'>
        <a
          href='#hero'
          onClick={handleSectionClick('hero')}
          className='text-warm-gray dark:text-gray-500 hover:text-nuraya-gold dark:hover:text-nuraya-gold active:text-nuraya-gold dark:active:text-nuraya-gold transition-colors'>
          Home
        </a>
        <a
          href='#mission'
          onClick={handleSectionClick('mission')}
          className='text-warm-gray dark:text-gray-500 hover:text-nuraya-gold dark:hover:text-nuraya-gold active:text-nuraya-gold dark:active:text-nuraya-gold transition-colors'>
          Mission
        </a>
        <a
          href='#about'
          onClick={handleSectionClick('about')}
          className='text-warm-gray dark:text-gray-500 hover:text-nuraya-gold dark:hover:text-nuraya-gold active:text-nuraya-gold dark:active:text-nuraya-gold transition-colors'>
          About
        </a>
        <a
          href='#values'
          onClick={handleSectionClick('values')}
          className='text-warm-gray dark:text-gray-500 hover:text-nuraya-gold dark:hover:text-nuraya-gold active:text-nuraya-gold dark:active:text-nuraya-gold transition-colors'>
          Values
        </a>
        <a
          href='#products'
          onClick={handleSectionClick('products')}
          className='text-warm-gray dark:text-gray-500 hover:text-nuraya-gold dark:hover:text-nuraya-gold active:text-nuraya-gold dark:active:text-nuraya-gold transition-colors'>
          Products
        </a>
        <a
          href='#collaboration'
          onClick={handleSectionClick('collaboration')}
          className='px-3 py-1 border-2 border-nuraya-gold text-nuraya-gold hover:bg-nuraya-gold hover:text-white dark:hover:bg-nuraya-gold dark:hover:text-white rounded-md transition-all flex items-center'>
          Collaboration
        </a>
      </nav>
      <DarkModeToggle />
    </header>
  )
}
