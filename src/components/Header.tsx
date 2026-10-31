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
  MessageSquare
} from 'lucide-react';
import { useLang, type Language } from '../context/LanguageContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOffcanvasOpen(false);
    setLangDropdownOpen(false);
  }, [location]);

  const langOptions: { key: Language; label: string; flag: string }[] = [
    { key: 'English', label: 'English', flag: '🇺🇸' },
    { key: 'Hindi', label: 'हिंदी', flag: '🇮🇳' },
    { key: 'Japanese', label: '日本語', flag: '🇯🇵' },
  ];

  return (
    <>
      {/* Top Utility Bar - Solid, Clean Engineering Look */}
      <div className="bg-[#070d14] text-slate-400 text-xs border-b border-white/[0.06] py-2 px-4 sm:px-8 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              Krishi Udaan
            </span>
            <span className="text-slate-400 font-medium">
              Agricultural Drone Spraying &amp; Precision Farming Services
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a 
              href="tel:+919755675433" 
              className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>+91 97556 75433</span>
            </a>
            <span className="text-slate-700">|</span>
            <a 
              href="mailto:info@krishiudaan.in" 
              className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>info@krishiudaan.in</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Solid Navbar */}
      <header 
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled 
            ? 'bg-[#0a1118]/95 backdrop-blur-md shadow-xl border-b border-white/[0.08] py-3' 
            : 'bg-[#0a1118] border-b border-white/[0.06] py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/assets/img/logo/logo-blue.png" 
                alt="Krishi Udaan" 
                className="h-9 sm:h-10 w-auto object-contain brightness-110" 
              />
            </Link>

            {/* Solid Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-300">
              <Link 
                to="/" 
                className="hover:text-amber-400 transition-colors"
              >
                {t('Home')}
              </Link>
              <a 
                href="/#advantages" 
                className="hover:text-amber-400 transition-colors"
              >
                {t('Advantages')}
              </a>
              <a 
                href="/#services" 
                className="hover:text-amber-400 transition-colors"
              >
                {t('Services')}
              </a>
              <a 
                href="/#gallery" 
                className="hover:text-amber-400 transition-colors"
              >
                {t('Gallery')}
              </a>
              <Link 
                to="/about" 
                className="hover:text-amber-400 transition-colors"
              >
                {t('About Us')}
              </Link>
              <Link 
                to="/contact" 
                className="hover:text-amber-400 transition-colors"
              >
                {t('Contact')}
              </Link>
            </nav>

            {/* Right Controls: Language Dropdown + WhatsApp Button + Offcanvas Hamburger */}
            <div className="flex items-center gap-3">
              
              {/* Language Selector */}
              <div className="relative hidden sm:block">
                <button
                  type="button"
                  onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-300 bg-white/[0.05] hover:bg-white/[0.08] border border-white/10 transition-colors"
                >
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{langOptions.find(l => l.key === language)?.flag} {language}</span>
                  <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${langDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {langDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-36 rounded-xl bg-[#0f1722] border border-white/10 shadow-2xl p-1 z-50">
                    {langOptions.map((opt) => (
                      <button
                        key={opt.key}
                        onClick={() => {
                          setLanguage(opt.key);
                          setLangDropdownOpen(false);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 text-xs font-medium rounded-lg text-left transition-colors ${
                          language === opt.key 
                            ? 'bg-emerald-500/20 text-emerald-400 font-bold' 
                            : 'text-slate-300 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span className="flex items-center gap-2">
                          <span>{opt.flag}</span>
                          <span>{opt.label}</span>
                        </span>
                        {language === opt.key && <Check className="w-3 h-3 text-emerald-400" />}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Quick WhatsApp Action */}
              <a
                href="https://wa.me/919755675433"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 transition-all"
              >
                <span>WhatsApp</span>
              </a>

              {/* Book Spraying Primary Button */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md shadow-amber-500/10"
              >
                <span>{t('Book Spraying')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              {/* Offcanvas Drawer Hamburger */}
              <button
                type="button"
                onClick={() => setOffcanvasOpen(true)}
                className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10 transition-colors"
                aria-label="Open information sidebar"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Offcanvas Information Drawer (Original Feature Retained & Solidly Designed) */}
      {offcanvasOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
            onClick={() => setOffcanvasOpen(false)}
          />

          {/* Drawer Body */}
          <div className="relative ml-auto w-full max-w-sm bg-[#0c141d] border-l border-white/[0.08] p-6 sm:p-7 flex flex-col justify-between overflow-y-auto shadow-2xl z-10">
            <div>
              {/* Drawer Top */}
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
                <Link to="/" onClick={() => setOffcanvasOpen(false)}>
                  <img 
                    src="/assets/img/logo/logo-blue.png" 
                    alt="Krishi Udaan" 
                    className="h-8 w-auto brightness-110"
                  />
                </Link>
                <button
                  type="button"
                  onClick={() => setOffcanvasOpen(false)}
                  className="w-8 h-8 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-400 hover:text-white flex items-center justify-center transition-colors border border-white/10"
                  aria-label="Close drawer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Mobile Quick Nav */}
              <div className="py-5 border-b border-white/[0.08] lg:hidden">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Navigation
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs font-semibold">
                  <Link 
                    to="/" 
                    onClick={() => setOffcanvasOpen(false)}
                    className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-200"
                  >
                    {t('Home')}
                  </Link>
                  <a 
                    href="/#advantages" 
                    onClick={() => setOffcanvasOpen(false)}
                    className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-200"
                  >
                    {t('Advantages')}
                  </a>
                  <a 
                    href="/#services" 
                    onClick={() => setOffcanvasOpen(false)}
                    className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-200"
                  >
                    {t('Services')}
                  </a>
                  <a 
                    href="/#gallery" 
                    onClick={() => setOffcanvasOpen(false)}
                    className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-200"
                  >
                    {t('Gallery')}
                  </a>
                  <Link 
                    to="/about" 
                    onClick={() => setOffcanvasOpen(false)}
                    className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-200"
                  >
                    {t('About Us')}
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={() => setOffcanvasOpen(false)}
                    className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-slate-200"
                  >
                    {t('Contact')}
                  </Link>
                </div>
              </div>

              {/* Contact Information Cards */}
              <div className="py-6 space-y-3.5">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {t('Contact us')}
                </span>

                {/* Office */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-left">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    {t('Our Office')}
                  </span>
                  <a 
                    href="https://goo.gl/maps/abHegV4AoiJA6Syd8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-slate-300 leading-relaxed hover:text-white block"
                  >
                    Hanron Tech Innovations Pvt. Ltd., Plot No. 23-B, Sector - D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, MP 462023
                  </a>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-left">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    {t('Phone Numbers')}
                  </span>
                  <div className="space-y-0.5 text-xs text-slate-300">
                    <div><a href="tel:919755675433" className="hover:text-amber-400">+91 97556 75433</a></div>
                    <div><a href="tel:+917554331833" className="hover:text-amber-400">+91 755 4331833</a></div>
                  </div>
                </div>

                {/* Email */}
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-left">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-400 mb-1">
                    {t('Email Address')}
                  </span>
                  <a href="mailto:info@krishiudaan.in" className="text-xs text-slate-300 hover:text-amber-400 block">
                    info@krishiudaan.in
                  </a>
                </div>
              </div>

              {/* Language Selector Section */}
              <div className="pt-2 pb-6 border-t border-white/[0.08]">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                  {t('Language')}
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {langOptions.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => setLanguage(opt.key)}
                      className={`p-2 rounded-lg text-xs font-semibold border transition-all text-center ${
                        language === opt.key 
                          ? 'bg-emerald-500/20 border-emerald-500/60 text-emerald-400 font-bold' 
                          : 'bg-white/[0.03] border-white/[0.06] text-slate-300 hover:bg-white/[0.06]'
                      }`}
                    >
                      <div className="text-sm mb-0.5">{opt.flag}</div>
                      <div>{opt.label}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-white/[0.08] space-y-2.5">
              <Link
                to="/contact"
                onClick={() => setOffcanvasOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                <span>{t('Send Enquiry')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="https://wa.me/919755675433"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/25 text-xs uppercase tracking-wider transition-colors"
              >
                <span>{t('WhatsApp')}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
