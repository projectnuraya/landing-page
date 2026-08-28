/**
 * Per-page accent classes.
 *
 * Written out in full because Tailwind resolves class names statically — a
 * template like `bg-${accent}/20` would be dropped from the build.
 */
export interface LegalAccent {
  iconWrapper: string
  callout: string
}

export const legalAccents = {
  gold: {
    iconWrapper:
      'inline-flex items-center justify-center w-16 h-16 rounded-full bg-nuraya-gold-500/20 text-nuraya-gold-500 mb-6',
    callout: 'bg-nuraya-gold-500/10 border-l-4 border-nuraya-gold-500 p-6 rounded-r-lg mt-8',
  },
  sky: {
    iconWrapper:
      'inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-blue/20 text-sky-blue mb-6',
    callout: 'bg-sky-blue/10 border-l-4 border-sky-blue p-6 rounded-r-lg mt-8',
  },
  green: {
    iconWrapper:
      'inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400 mb-6',
    callout: 'bg-green-500/10 border-l-4 border-green-500 p-6 rounded-r-lg mt-8',
  },
} satisfies Record<string, LegalAccent>
