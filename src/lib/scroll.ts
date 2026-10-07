/**
 * Smoothly scroll to a section by its element ID, accounting for fixed navbar height.
 */
export function scrollToSection(id: string) {
  const element = document.getElementById(id)
  if (!element) return

  // If lenis instance is available on window, use it
  const lenis = (
    window as unknown as {
      __lenis?: {
        scrollTo: (
          target: HTMLElement | string,
          options?: { offset?: number; duration?: number },
        ) => void
      }
    }
  ).__lenis

  if (lenis) {
    lenis.scrollTo(element, { offset: -80, duration: 1.2 })
    return
  }

  // Fallback: calculate offset with navbar padding
  const navbarOffset = 80
  const bodyTop = document.body.getBoundingClientRect().top
  const elementTop = element.getBoundingClientRect().top
  const offsetPosition = elementTop - bodyTop - navbarOffset

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}
