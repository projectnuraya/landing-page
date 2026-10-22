import type { Metadata } from 'next'

import { NotFoundView } from '@/components/site/NotFoundView'

export const metadata: Metadata = {
  title: 'Halaman Tidak Ditemukan — Nuraya Digital Nusantara',
}

export default function NotFound() {
  return <NotFoundView />
}
