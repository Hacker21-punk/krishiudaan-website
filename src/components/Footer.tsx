import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ChevronUp, Check, ExternalLink } from 'lucide-react';
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
    <footer className="relative bg-[#061a12] text-slate-300 border-t border-emerald-900/60 pt-16 pb-12 font-sans">
      
      {/* Top Banner Callout Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="rounded-2xl p-8 sm:p-10 bg-[#0c281d] border border-emerald-800/60 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Precision Drone Spraying
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {t('Over a Decade in Innovation, and Our Flight Has Just Begun')}
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-emerald-100/80 leading-relaxed">
              Transforming agricultural crop protection with precision drones, 90% water conservation, and rapid farm turnaround.
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md"
            >
              <span>{t('Want some spraying?')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Structured 4-Column Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-emerald-900/50">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-3">
            <Link to="/" className="inline-block bg-white/95 p-1.5 rounded-lg">
              <img 
                src="/assets/img/logo/logo-blue.png" 
                alt="Krishi Udaan" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
              Hanron Tech Innovations Pvt. Ltd.
            </p>
            <p className="text-xs text-slate-300 leading-relaxed">
              Empowering Indian agriculture with smart spraying drones, autonomous radar tracking, and industrial fleet reliability.
            </p>

            {/* Official Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a 
                href="https://www.instagram.com/krishi_udaan/" 
                target="_blank" 
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-xs font-semibold text-emerald-200 transition-colors"
                aria-label="Krishi Udaan on Instagram"
              >
                Instagram
              </a>
              <a 
                href="https://www.youtube.com/@krishi_udaan/" 
                target="_blank" 
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 text-xs font-semibold text-emerald-200 transition-colors"
                aria-label="Krishi Udaan on YouTube"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Navigation
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><a href="/#advantages" className="hover:text-amber-400 transition-colors">Advantages of Drone Spraying</a></li>
              <li><a href="/#services" className="hover:text-amber-400 transition-colors">Services &amp; Why Choose Us</a></li>
              <li><a href="/#gallery" className="hover:text-amber-400 transition-colors">Field Gallery</a></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact &amp; Enquiry</Link></li>
            </ul>
          </div>

          {/* Col 3: Key Operations */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Operational Highlights
            </h5>
            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Uniform Spraying &amp; Controlled Dosage</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>1 Acre in 7-8 Minutes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>90% Water Usage Reduction</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Zero Chemical Exposure to Farmers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Adaptable for Every Terrain &amp; Slope</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>400 Acres / Day Spraying Capacity</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              {t('Our Office')}
            </h5>
            <div className="space-y-2.5 text-xs text-slate-300 leading-relaxed">
              <p>
                <b className="text-white">Hanron Tech Innovations Pvt. Ltd.</b><br />
                Plot No. 23-B, Sector - D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, MP 462023
              </p>
              <div className="pt-1 space-y-1">
                <div><a href="tel:919755675433" className="hover:text-amber-400 text-white font-semibold">+91 97556 75433</a></div>
                <div><a href="tel:+917554331833" className="hover:text-amber-400 text-slate-200">+91 755 4331833</a></div>
                <div><a href="mailto:info@krishiudaan.in" className="hover:text-amber-400 text-slate-200">info@krishiudaan.in</a></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright, Support Links, Language Dropdown */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <Link to="/" className="inline-block bg-white/90 p-1 rounded">
              <img 
                src="/assets/img/copyright/copyright-logo.png" 
                alt="Krishi Udaan" 
                className="h-6 w-auto object-contain" 
              />
            </Link>
            <span className="text-xs text-slate-400">
              © 2026 Krishi Udaan, All Rights Reserved.
            </span>
          </div>

          {/* Center Links & Language Selector */}
          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400">
            <Link to="/contact" className="hover:text-white transition-colors">Support</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms and Conditions</Link>

            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-900/60 hover:bg-emerald-800 border border-emerald-700/50 text-xs font-medium text-emerald-200 transition-colors"
              >
                <span>{language === 'English' ? 'English' : language === 'Hindi' ? 'हिंदी (Hindi)' : '日本語 (Japanese)'}</span>
                <ChevronUp className={`w-3 h-3 text-amber-400 transition-transform ${langOpen ? 'rotate-180' : ''}`} />
              </button>

              {langOpen && (
                <div className="absolute bottom-full mb-2 right-0 w-36 rounded-xl bg-[#0c281d] border border-emerald-700 shadow-2xl p-1 z-50">
                  {langOptions.map((opt) => (
                    <button
                      key={opt.key}
                      onClick={() => {
                        setLanguage(opt.key);
                        setLangOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                        language === opt.key 
                          ? 'bg-emerald-700 text-white font-bold' 
                          : 'text-slate-300 hover:bg-emerald-800/80 hover:text-white'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span>{opt.flag}</span>
                        <span>{opt.label}</span>
                      </span>
                      {language === opt.key && <Check className="w-3.5 h-3.5 text-amber-400" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
}
