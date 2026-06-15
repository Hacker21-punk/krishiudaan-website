import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  if (!visible) return null;
  return (
    <button className="scrollTop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Scroll to top">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<NotFound />} />
          <Route path="gallery" element={<NotFound />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ScrollToTopButton />
    </>
  )
}

export default App
