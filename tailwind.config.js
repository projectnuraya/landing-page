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
      'fade-in': 'fadeIn 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      'tab-fade': 'fadeIn 0.28s ease-out forwards',
      'fade-up': 'fadeUp 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      glow: 'glow 5s ease-in-out infinite',
      float: 'float 7s ease-in-out infinite',
      'pulse-slow': 'pulseSlow 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'gentle-glide': 'gentleGlide 3.6s ease-in-out infinite',
      'shimmer-subtle': 'shimmerSubtle 8s ease-in-out infinite',
      'fade-in-scale': 'fadeInScale 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      'hero-rise': 'heroRiseUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both',
    },
    keyframes: {
      heroRiseUp: {
        '0%': { opacity: '0', transform: 'translateY(10px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      fadeIn: {
        '0%': { opacity: '0' },
        '100%': { opacity: '1' },
      },
      fadeUp: {
        '0%': { opacity: '0', transform: 'translateY(24px)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
      glow: {
        '0%, 100%': { opacity: '0.6' },
        '50%': { opacity: '1' },
      },
      float: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-20px)' },
      },
      pulseSlow: {
        '0%, 100%': { transform: 'scale(1)', opacity: '1' },
        '50%': { transform: 'scale(1.15)', opacity: '0.6' },
      },
      gentleGlide: {
        '0%, 100%': { transform: 'translateY(0)', opacity: '0.5' },
        '50%': { transform: 'translateY(8px)', opacity: '1' },
      },
      shimmerSubtle: {
        '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
        '50%': { opacity: '0.9', transform: 'scale(1.02)' },
      },
      fadeInScale: {
        '0%': { opacity: '0', transform: 'scale(0.98) translateY(10px)' },
        '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
      },
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    },
  },
}

export const plugins = []
