import type { ReactNode } from 'react'

import { Footer } from '../Footer'
import { Navbar } from '../Navbar'

/** Page frame shared by the blog index and article pages. */
export function BlogLayout({ children }: { children: ReactNode }) {
  return (
    <div className='min-h-screen bg-soft-white dark:bg-dark-bg transition-colors duration-300'>
      <Navbar />
      <main className='pt-24'>{children}</main>
      <Footer />
    </div>
  )
}
