/**
 * Smoothly scroll to a section by its element ID.
 */
export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
