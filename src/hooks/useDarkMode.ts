import { useEffect, useState } from 'react'

function getInitialDark(): boolean {
  const storedTheme = localStorage.getItem('theme')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return storedTheme === 'dark' || (!storedTheme && systemPrefersDark)
}

/**
 * Shared hook for dark mode state.
 * - Reads initial value from localStorage / system preference
 * - Syncs the `dark` class on `<html>` and persists to localStorage
 * - Listens for external changes (e.g. another component toggling the class)
 */
export function useDarkMode() {
  const [isDark, setIsDark] = useState(getInitialDark)

  // Apply the class on mount and whenever isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  // Listen for external changes to the `dark` class (e.g. from DevTools or other tabs)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'))
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    const newValue = !isDark
    setIsDark(newValue)
    localStorage.setItem('theme', newValue ? 'dark' : 'light')
  }

  return { isDark, toggleTheme }
}
