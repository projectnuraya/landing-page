/** @type {import('tailwindcss').Config} */
export const darkMode = 'class'
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
export const theme = {
  extend: {
    colors: {
      // Primary colors with tint/shade system
      'nuraya-gold': {
        50: '#FBF8EE',
        100: '#F6EFD6',
        200: '#EEDD9F',
        300: '#E3C874',
        400: '#D4B24D', // brandbook primary gold
        500: '#BF9A38',
        600: '#A6852D',
        700: '#8F7125',
        800: '#765C1D',
        900: '#5A4515',
      },
      'nuraya-blue': {
        50: '#EEF6FD',
        100: '#D9EAFA',
        200: '#B7D8F5',
        300: '#8DC0F0',
        400: '#61ABEB', // brandbook primary blue
        500: '#3F8FD6',
        600: '#2F74B8',
        700: '#265C94',
        800: '#1E4772',
        900: '#17344F',
      },
      // Bridge hue for the brand gradient only (gold -> teal -> blue). Not a brandbook color:
      // it is what gold and blue produce between them, kept chromatic instead of gray.
      'nuraya-teal': {
        300: '#5FD3C8',
        400: '#3DBDB3',
        600: '#0B8F8B',
      },
      accent: {
        50: '#E8EEF2',
        100: '#D0DCE3',
        200: '#A3B9C6',
        300: '#6D8CA0',
        400: '#3D5E73',
        500: '#1D3341', // brandbook navy
        600: '#172A35',
        700: '#11202A',
        800: '#0C161D',
        900: '#070E12',
      },
      // Semantic colors
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#3B82F6',
      // Legacy/secondary
      'sky-blue': '#61ABEB',
      'sky-blue-light': '#8DC0F0',
      'soft-white': '#FAFAFA',
      'deep-navy': '#1D3341',
      'warm-gray': '#5F6672',
      'light-sand': '#F2EFEA',
      'dark-bg': '#0D1A22',
      'dark-surface': '#15262F',
      'dark-elevated': '#1D3341',
      // Muted palette
      muted: '#D4D4D8',
      'muted-foreground': '#71717A',
      'muted-dark': '#52525B',
      // CSS variables for theming
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
    },
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'Poppins', 'system-ui', 'sans-serif'],
      jakarta: ['Plus Jakarta Sans', 'sans-serif'],
    },
    animation: {
      'gentle-glide': 'gentleGlide 3.6s ease-in-out infinite',
      'hero-rise': 'heroRiseUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
    },
    keyframes: {
      heroRiseUp: {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      gentleGlide: {
        '0%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
        '50%': { transform: 'translateY(8px)', opacity: '1' },
      },
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    },
  },
}

export const plugins = []
