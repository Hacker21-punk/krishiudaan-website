import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ChevronUp, Check } from 'lucide-react';
import { useLang, type Language } from '../context/LanguageContext';

export default function Footer() {
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLang();

  const langOptions: { key: Language; label: string; flag: string }[] = [
    { key: 'English', label: 'English', flag: '🇺🇸' },
    { key: 'Hindi', label: 'हिंदी (Hindi)', flag: '🇮🇳' },
    { key: 'Japanese', label: '日本語 (Japanese)', flag: '🇯🇵' },
  ];

  return (
    <footer className="relative bg-[#070d14] text-slate-300 border-t border-white/[0.08] pt-14 pb-10">
      
      {/* Top Banner Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="rounded-2xl p-8 sm:p-10 bg-[#0d1722] border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {t('Over a Decade in Innovation, and Our Flight Has Just Begun')}
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-400">
              Transforming agricultural crop protection with precision drones, 90% water conservation, and rapid farm turnaround.
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md"
            >
              <span>{t('Want some spraying?')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Structured 4-Column Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-white/[0.06]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-3">
            <Link to="/" className="inline-block">
              <img 
                src="/assets/img/logo/logo-blue.png" 
                alt="Krishi Udaan" 
                className="h-9 w-auto brightness-110"
              />
            </Link>
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
              Hanron Tech Innovations Pvt. Ltd.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Empowering Indian agriculture with smart spraying drones, autonomous radar tracking, and industrial fleet reliability.
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3.5">
              Quick Links
            </h5>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
              <li><a href="/#advantages" className="hover:text-emerald-400 transition-colors">Advantages of Drone Spraying</a></li>
              <li><a href="/#services" className="hover:text-emerald-400 transition-colors">Services &amp; Why Choose Us</a></li>
              <li><a href="/#gallery" className="hover:text-emerald-400 transition-colors">Field Gallery</a></li>
              <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact &amp; Enquiry</Link></li>
            </ul>
          </div>

          {/* Col 3: Key Operations */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3.5">
              Capabilities
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Uniform Spraying &amp; Controlled Dosage</li>
              <li>• 1 Acre in 7-8 Minutes</li>
              <li>• 90% Water Usage Reduction</li>
              <li>• Zero Chemical Exposure to Farmers</li>
              <li>• Adaptable for Every Terrain &amp; Slope</li>
              <li>• 400 Acres / Day Spraying Capacity</li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-3.5">
              {t('Our Office')}
            </h5>
            <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
              <p>
                Hanron Tech Innovations Pvt. Ltd.<br />
                Plot No. 23-B, Sector - D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, MP 462023
              </p>
              <div className="pt-1 space-y-1">
                <div><a href="tel:919755675433" className="hover:text-amber-400 text-slate-300 font-medium">+91 97556 75433</a></div>
                <div><a href="tel:+917554331833" className="hover:text-amber-400 text-slate-300 font-medium">+91 755 4331833</a></div>
                <div><a href="mailto:info@krishiudaan.in" className="hover:text-amber-400 text-slate-300 font-medium">info@krishiudaan.in</a></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright, Socials, Language Dropdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <Link to="/">
              <img 
                src="/assets/img/copyright/copyright-logo.png" 
                alt="Krishi Udaan" 
                className="h-7 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" 
              />
            </Link>
            <span className="text-xs text-slate-400">
              © 2026 Krishi Udaan, All Right Reserved.
            </span>
          </div>

          {/* Center Links & Language Selector */}
          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400">
            <Link to="/contact" className="hover:text-slate-200 transition-colors">Support</Link>
            <Link to="/contact" className="hover:text-slate-200 transition-colors">Privacy policy</Link>
            <Link to="/contact" className="hover:text-slate-200 transition-colors">Terms and conditions</Link>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-xs font-medium text-slate-300 transition-colors"
              >
                <span>{language === 'English' ? 'English' : language === 'Hindi' ? 'हिंदी (Hindi)' : '日本語 (Japanese)'}</span>
                <ChevronUp className={`w-3 h-3 text-emerald-400 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>

              {langOpen && (
                <div className="absolute bottom-full mb-2 right-0 w-36 rounded-xl bg-[#0f1722] border border-white/10 shadow-2xl p-1 z-50">
                  {langOptions.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setLanguage(opt.key);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-1.5 text-xs rounded-lg text-left transition-colors ${
                        language === opt.key 
                          ? 'bg-emerald-500/20 text-emerald-400 font-bold' 
                          : 'text-slate-300 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      <span>{opt.label}</span>
                      {language === opt.key && <Check className="w-3 h-3 text-emerald-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Social Links (Instagram & YouTube) */}
          <div className="flex items-center gap-3">
            <a 
              href="https://www.instagram.com/krishi_udaan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-pink-600/20 text-slate-300 hover:text-pink-400 border border-white/[0.08] flex items-center justify-center transition-all"
              aria-label="Krishi Udaan Instagram"
            >
              <i className="fab fa-instagram text-sm"></i>
            </a>
            <a 
              href="https://www.youtube.com/@krishi_udaan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-white/[0.04] hover:bg-red-600/20 text-slate-300 hover:text-red-400 border border-white/[0.08] flex items-center justify-center transition-all"
              aria-label="Krishi Udaan YouTube"
            >
              <i className="fab fa-youtube text-sm"></i>
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}
