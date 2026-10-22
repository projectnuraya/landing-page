import js from '@eslint/js'
import nextPlugin from '@next/eslint-plugin-next'
import reactHooks from 'eslint-plugin-react-hooks'
import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores([
    '.next',
    'next-env.d.ts',
    'src/payload-types.ts',
    'src/migrations',
    'src/app/(payload)',
  ]),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      nextPlugin.configs['core-web-vitals'],
    ],
    languageOptions: {
      ecmaVersion: 2022,
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      // Logos and CMS images are SVGs or already resized by Payload, so
      // next/image adds nothing but config.
      '@next/next/no-img-element': 'off',
      // Pages Router rules: SiteDocument is an App Router root layout, where a
      // plain <head>, a font stylesheet and `beforeInteractive` scripts are
      // the documented approach.
      '@next/next/no-head-element': 'off',
      '@next/next/no-page-custom-font': 'off',
      '@next/next/no-before-interactive-script-outside-document': 'off',
    },
  },
])
