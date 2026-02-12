import { Moon, Sun } from 'lucide-react'

import { useDarkMode } from '../hooks/useDarkMode'

import { Button } from './ui/Button'

export function DarkModeToggle() {
  const { isDark, toggleTheme } = useDarkMode()

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={toggleTheme}
      className='rounded-full w-10 h-10 transition-transform duration-500 hover:rotate-12'
      aria-label='Toggle dark mode'>
      {isDark ? (
        <Sun className='h-5 w-5 text-nuraya-gold-200' />
      ) : (
        <Moon className='h-5 w-5 text-deep-navy' />
      )}
    </Button>
  )
}
