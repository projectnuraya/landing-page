import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from './ui/Button'

export function DarkModeToggle() {
  const getInitialDark = () => {
    const storedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return storedTheme === 'dark' || (!storedTheme && systemPrefersDark)
  }
  const [isDark, setIsDark] = useState(getInitialDark)
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])
  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }
  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={toggleTheme}
      className='rounded-full w-10 h-10 transition-transform duration-500 hover:rotate-12'
      aria-label='Toggle dark mode'>
      {isDark ? (
        <Sun className='h-5 w-5 text-nuraya-gold-bright' />
      ) : (
        <Moon className='h-5 w-5 text-deep-navy' />
      )}
    </Button>
  )
}
