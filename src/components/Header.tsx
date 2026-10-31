import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOffcanvasOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Utility Bar - Deep Forest Green Professional Bar */}
      <div className="bg-[#064e3b] text-emerald-100 text-xs py-2 px-4 sm:px-8 hidden md:block border-b border-emerald-700/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-emerald-800 text-emerald-200 border border-emerald-600/50">
              Krishi Udaan
            </span>
            <span className="text-emerald-100/90 font-medium">
              Agricultural Drone Spraying &amp; Precision Farming Services
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <a 
              href="tel:+919755675433" 
              className="flex items-center gap-1.5 text-white hover:text-amber-300 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>+91 97556 75433</span>
            </a>
            <span className="text-emerald-700">|</span>
            <a 
              href="mailto:info@krishiudaan.in" 
              className="flex items-center gap-1.5 text-white hover:text-amber-300 transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-amber-300" />
              <span>info@krishiudaan.in</span>
            </a>
            <span className="text-emerald-700">|</span>
            <span className="flex items-center gap-1.5 text-emerald-200/90">
              <MapPin className="w-3.5 h-3.5 text-emerald-300" />
              <span>Bhopal, MP</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Clean Professional Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3' 
            : 'bg-white border-b border-slate-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="p-1 rounded-lg">
                <img 
                  src="/assets/img/logo/logo-blue.png" 
                  alt="Krishi Udaan" 
                  className="h-9 sm:h-10 w-auto object-contain" 
                />
              </div>
            </Link>

            {/* Desktop Navigation Links - Clean, High Contrast Slate */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
              <Link 
                to="/" 
                className="hover:text-emerald-700 transition-colors"
              >
                Home
              </Link>
              <a 
                href="/#advantages" 
                className="hover:text-emerald-700 transition-colors"
              >
                Advantages
              </a>
              <a 
                href="/#services" 
                className="hover:text-emerald-700 transition-colors"
              >
                Services
              </a>
              <a 
                href="/#gallery" 
                className="hover:text-emerald-700 transition-colors"
              >
                Field Gallery
              </a>
              <Link 
                to="/about" 
                className="hover:text-emerald-700 transition-colors"
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-emerald-700 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Right Controls: WhatsApp CTA + Book Spraying + Menu Hamburger */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              
              {/* WhatsApp Quick Chat */}
              <a
                href="https://wa.me/919755675433"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp</span>
              </a>

              {/* Book Spraying CTA */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs shadow-sm transition-colors"
              >
                <span>Book Spraying</span>
                <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
              </Link>

              {/* Hamburger Button for Offcanvas */}
              <button
                type="button"
                onClick={() => setOffcanvasOpen(true)}
                className="p-2 rounded-xl text-slate-700 hover:text-emerald-700 hover:bg-slate-100 border border-slate-200 transition-colors"
                aria-label="Open detailed menu"
              >
                <Menu className="w-5 h-5" />
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* =========================================================================
          OFFCANVAS SIDEBAR: Premium Professional Enterprise Drawer
          ========================================================================= */}
      {offcanvasOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => setOffcanvasOpen(false)}
          />

          {/* Offcanvas Drawer Content */}
          <div className="relative w-full max-w-sm bg-white text-slate-800 shadow-2xl p-6 sm:p-8 overflow-y-auto flex flex-col justify-between z-10 border-l border-slate-200">
            
            {/* Top Bar inside Sidebar */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div className="p-1 rounded-lg">
                  <img 
                    src="/assets/img/logo/logo-blue.png" 
                    alt="Krishi Udaan" 
                    className="h-8 w-auto object-contain" 
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setOffcanvasOpen(false)}
                  className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                  aria-label="Close sidebar"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links for Mobile Drawer */}
              <div className="py-4 border-b border-slate-200 lg:hidden">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">
                  Navigation
                </span>
                <nav className="flex flex-col space-y-2 text-sm font-semibold">
                  <Link 
                    to="/" 
                    onClick={() => setOffcanvasOpen(false)}
                    className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-800"
                  >
                    Home
                  </Link>
                  <a 
                    href="/#advantages" 
                    onClick={() => setOffcanvasOpen(false)}
                    className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-800"
                  >
                    Advantages
                  </a>
                  <a 
                    href="/#services" 
                    onClick={() => setOffcanvasOpen(false)}
                    className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-800"
                  >
                    Services
                  </a>
                  <a 
                    href="/#gallery" 
                    onClick={() => setOffcanvasOpen(false)}
                    className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-800"
                  >
                    Field Gallery
                  </a>
                  <Link 
                    to="/about" 
                    onClick={() => setOffcanvasOpen(false)}
                    className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-800"
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={() => setOffcanvasOpen(false)}
                    className="px-3 py-2 rounded-lg hover:bg-slate-100 text-slate-800"
                  >
                    Contact &amp; Booking
                  </Link>
                </nav>
              </div>

              {/* Company Introduction */}
              <div className="pt-4 pb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                  Hanron Tech Innovations Pvt. Ltd.
                </span>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  Precision Agricultural Drone Spraying &amp; Fleet Logistics
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  High-capacity drone spraying across Indian farmlands. 400+ acres daily capacity, 90% water saving, and complete farmer protection from toxic chemicals.
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-3 pt-1">
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block">
                  Operations Headquarters
                </span>

                {/* Address */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="text-xs leading-relaxed text-slate-700">
                    <b className="text-slate-900">Hanron Tech Innovations Pvt. Ltd.</b><br />
                    Plot No. 23-B, Sector - D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, MP 462023
                  </div>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-xs space-y-1">
                    <div>
                      <a href="tel:+919755675433" className="font-semibold text-slate-900 hover:text-emerald-700">
                        +91 97556 75433 (Direct Mobile)
                      </a>
                    </div>
                    <div>
                      <a href="tel:+917554331833" className="text-slate-600 hover:text-emerald-700">
                        +91 755 4331833 (Office Landline)
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <a href="mailto:info@krishiudaan.in" className="font-semibold text-slate-900 hover:text-emerald-700">
                      info@krishiudaan.in
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Actions inside Sidebar */}
            <div className="pt-6 border-t border-slate-200 space-y-2.5">
              <Link
                to="/contact"
                onClick={() => setOffcanvasOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-500 text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <span>Send Booking Enquiry</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/919755675433"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 text-xs uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}