import { Route, Routes } from 'react-router-dom'

import { LandingPage } from './pages/LandingPage'
import { LegalNoticePage } from './pages/LegalNoticePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { TermsPage } from './pages/TermsPage'

/**
 * Route tree only — the router itself is supplied by the entry point, so the
 * same tree can render under `BrowserRouter` in the browser and `StaticRouter`
 * during prerendering.
 */
export default function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/privacy' element={<PrivacyPage locale='id' />} />
      <Route path='/terms' element={<TermsPage locale='id' />} />
      <Route path='/legal' element={<LegalNoticePage locale='id' />} />
      <Route path='/en/privacy' element={<PrivacyPage locale='en' />} />
      <Route path='/en/terms' element={<TermsPage locale='en' />} />
      <Route path='/en/legal' element={<LegalNoticePage locale='en' />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}
