import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { ScrollToTop } from './components/ScrollToTop'
import { About } from './pages/About'
import { CaseStudy } from './pages/CaseStudy'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Research } from './pages/Research'
import { Work } from './pages/Work'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="work/:slug" element={<CaseStudy />} />
          <Route path="research" element={<Research />} />
          <Route path="research/:slug" element={<CaseStudy />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}
