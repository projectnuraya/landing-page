/**
 * Adds the `dark` class to <html> when the visitor chose dark mode, or never
 * chose and their OS prefers it.
 *
 * Self-contained (no imports, no outer variables) because its source is also
 * serialised into an inline script that runs before first paint.
 */
export function applyStoredTheme() {
  try {
    const stored = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark')
    }
  } catch {
    /* private mode or storage disabled — fall back to light */
  }
}

/** Source of the pre-paint inline script. */
export const themeBootstrapScript = `(${applyStoredTheme.toString()})()`
