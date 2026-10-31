import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  ChevronDown, 
  Menu, 
  X, 
  Send, 
  Check, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useLang, type Language } from '../context/LanguageContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setLangDropdownOpen(false);
  }, [location]);

  const langOptions: { key: Language; label: string; flag: string }[] = [
    { key: 'English', label: 'English', flag: '🇺🇸' },
    { key: 'Hindi', label: 'हिंदी', flag: '🇮🇳' },
    { key: 'Japanese', label: '日本語', flag: '🇯🇵' },
  ];

  const navLinks = [
    { name: t('Home'), path: '/' },
    { name: t('Advantages'), path: '/#advantages' },
    { name: t('Services'), path: '/services' },
    { name: t('Gallery'), path: '/gallery' },
    { name: t('About Us'), path: '/about' },
    { name: t('Contact'), path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('/#')) return location.pathname === '/' && location.hash === path.substring(1);
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Notification / Hotline Strip */}
      <div className="bg-slate-950 text-slate-300 text-xs border-b border-white/5 py-2 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Sparkles className="w-3 h-3 text-emerald-400" />
              Pan-India Spraying Operations
            </span>
            <span className="text-slate-400">
              Over a Decade in Drone Innovation • 400+ Acres Daily Spraying Capacity
            </span>
          </div>

          <div className="flex items-center gap-5 text-slate-300">
            <a 
              href="tel:+919755675433" 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 97556 75433</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href="mailto:info@krishiudaan.in" 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>info@krishiudaan.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled 
            ? 'bg-slate-950/95 backdrop-blur-md shadow-xl shadow-black/30 border-b border-emerald-500/10 py-3' 
            : 'bg-slate-950/80 backdrop-blur-sm border-b border-white/5 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src="/assets/img/logo/logo-blue.png" 
                  alt="Krishi Udaan" 
                  className="h-10 sm:h-11 w-auto object-contain filter drop-shadow brightness-110 group-hover:scale-105 transition-transform duration-200"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                  Agri-Tech Flight
                </span>
                <span className="text-[10px] text-slate-400">
                  Precision Farming
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-white bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  aria-expanded={langDropdownOpen}
                >
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{langOptions.find(l => l.key === language)?.flag} {language}</span>
                  <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${langDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 rounded-xl bg-slate-900 border border-emerald-500/20 shadow-2xl p-1.5 z-50 animate-in fade-in zoom-in-95">
                    {langOptions.map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => {
                          setLanguage(opt.key);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg text-left transition-colors ${
                          language === opt.key 
                            ? 'bg-emerald-500/20 text-emerald-300 font-semibold' 
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{opt.flag}</span>
                          <span>{opt.label}</span>
                        </span>
                        {language === opt.key && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Book Spraying CTA Button */}
              <Link
                to="/contact"
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>{t('Book Spraying')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                to="/contact"
                className="inline-flex sm:hidden items-center px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300"
              >
                {t('Book')}
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 border border-white/10"
                aria-label="Open Navigation Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Slide-Over Panel) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative ml-auto w-full max-w-sm bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 border-l border-emerald-500/20 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img 
                    src="/assets/img/logo/logo-blue.png" 
                    alt="Krishi Udaan" 
                    className="h-9 w-auto brightness-110"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="py-6 flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-colors flex items-center justify-between ${
                      isActive(link.path)
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        : 'text-slate-200 hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </Link>
                ))}
              </div>

              {/* Language Choice */}
              <div className="pt-2 pb-6 border-t border-white/10">
                <span className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  {t('Language')}
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {langOptions.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setLanguage(opt.key)}
                      className={`px-2 py-2 rounded-lg text-xs font-medium text-center border transition-all ${
                        language === opt.key
                          ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold'
                          : 'bg-white/5 border-white/5 text-slate-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="text-base mb-0.5">{opt.flag}</div>
                      <div>{opt.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions & Contact Info */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-sm shadow-lg shadow-amber-500/20"
              >
                <span>{t('Book Spraying')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/919755675433"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs"
              >
                <span>WhatsApp Instant Help (+91 97556 75433)</span>
              </a>

              <div className="pt-2 text-slate-400 text-xs space-y-1.5">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>Hanron Tech Innovations Pvt. Ltd., Bhopal, MP 462023</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <a href="tel:+919755675433" className="hover:text-emerald-400">+91 97556 75433</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
