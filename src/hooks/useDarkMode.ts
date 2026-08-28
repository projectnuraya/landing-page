import { useEffect, useState } from 'react'

/**
 * Reads the initial theme.
 *
 * During prerendering there is no DOM, so we fall back to light. In the browser
 * we read the `dark` class that the inline bootstrap script in `index.html` has
 * already applied before first paint, which keeps this in sync with what the
 * user actually sees.
 */
function getInitialDark(): boolean {
  if (typeof document === 'undefined') return false
  return document.documentElement.classList.contains('dark')
}

/**
 * Shared hook for dark mode state.
 * - Reads initial value from the `dark` class set by the bootstrap script
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
