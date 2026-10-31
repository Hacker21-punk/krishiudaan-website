import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { ArrowUp, MessageCircle } from 'lucide-react';

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      const el = document.getElementById(hash.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);
  return null;
}

function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-none">
      {/* Floating WhatsApp Quick Chat Button */}
      <a
        href="https://wa.me/919755675433"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-2 px-4 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs shadow-2xl shadow-emerald-500/40 hover:scale-105 transition-all group"
        aria-label="Chat on WhatsApp with Krishi Udaan"
      >
        <MessageCircle className="w-4 h-4 fill-current text-slate-950" />
        <span className="hidden sm:inline">WhatsApp Us</span>
      </a>

      {/* Scroll to Top Button */}
      {visible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="pointer-events-auto w-11 h-11 rounded-full bg-slate-900/90 hover:bg-amber-400 text-slate-300 hover:text-slate-950 border border-white/10 hover:border-amber-400 shadow-xl flex items-center justify-center transition-all hover:scale-110"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
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
          <Route path="services" element={<Services />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <FloatingActions />
    </>
  );
}

export default App;
