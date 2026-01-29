/** @type {import('tailwindcss').Config} */
export const darkMode = 'class'
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
export const theme = {
  extend: {
    colors: {
      // Primary colors with tint/shade system
      'nuraya-gold': {
        50: '#FBF8F1',
        100: '#F7F0E2',
        200: '#F0D384',
        300: '#E8C570',
        400: '#E2B442',
        500: '#D9A830',
        600: '#C89B2E',
        700: '#A67D23',
        800: '#845F1A',
        900: '#624510',
      },
      'nuraya-blue': {
        50: '#E0F9FF',
        100: '#B3F0FF',
        200: '#80E8FF',
        300: '#4DDAFF',
        400: '#00AEEF',
        500: '#0099D4',
        600: '#0088BB',
        700: '#0066CC',
        800: '#004D99',
        900: '#003366',
      },
      accent: {
        50: '#E8F3F8',
        100: '#D1E7F1',
        200: '#A3D5E6',
        300: '#6BB8D4',
        400: '#1A5A75',
        500: '#00303F',
        600: '#002735',
        700: '#001E27',
        800: '#00161B',
        900: '#000E11',
      },
      // Semantic colors
      success: '#10B981',
      warning: '#F59E0B',
      error: '#EF4444',
      info: '#3B82F6',
      // Legacy/secondary
      'sky-blue': '#6FAFD9',
      'sky-blue-light': '#7EC0E8',
      'soft-white': '#FAFAFA',
      'deep-navy': '#1F2A44',
      'warm-gray': '#8A8A8A',
      'light-sand': '#F2EFEA',
      'dark-bg': '#0F1419',
      'dark-surface': '#1A2332',
      'dark-elevated': '#243447',
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
      'fade-up': 'fadeUp 0.8s ease-out forwards',
      glow: 'glow 3s ease-in-out infinite',
      float: 'float 6s ease-in-out infinite',
    },
    keyframes: {
      fadeUp: {
        '0%': { opacity: '0', transform: 'translateY(30px)' },
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
    },
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
    },
  },
}

export const plugins = []
