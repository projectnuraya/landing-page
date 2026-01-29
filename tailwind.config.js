/** @type {import('tailwindcss').Config} */
export const darkMode = 'class'
export const content = ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
export const theme = {
  extend: {
    colors: {
      'nuraya-gold': '#E6B65C',
      'nuraya-gold-bright': '#F4C96B',
      'sky-blue': '#6FAFD9',
      'sky-blue-light': '#7EC0E8',
      'soft-white': '#FAFAFA',
      'deep-navy': '#1F2A44',
      'warm-gray': '#8A8A8A',
      'light-sand': '#F2EFEA',
      'dark-bg': '#0F1419',
      'dark-surface': '#1A2332',
      'dark-elevated': '#243447',
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
    },
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'Poppins', 'system-ui', 'sans-serif'],
      'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
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
