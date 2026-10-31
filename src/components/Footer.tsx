import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowRight, 
  Globe, 
  ShieldCheck, 
  Droplet, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { useLang, type Language } from '../context/LanguageContext';

export default function Footer() {
  const { language, setLanguage, t } = useLang();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  const langOptions: { key: Language; label: string; flag: string }[] = [
    { key: 'English', label: 'English', flag: '🇺🇸' },
    { key: 'Hindi', label: 'हिंदी', flag: '🇮🇳' },
    { key: 'Japanese', label: '日本語', flag: '🇯🇵' },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300 pt-16 pb-12 overflow-hidden border-t border-emerald-900/40">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Pre-Footer Callout Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-900/70 border border-emerald-500/30 shadow-2xl shadow-black/60 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                {t('Over a Decade in Innovation, and Our Flight Has Just Begun')}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {t('Want some spraying?')} Let’s modernize your fields with precision drones today.
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Experience uniform micron spraying, 90% water savings, and 400+ acres daily deployment capacity anywhere across India.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 transition-all text-sm hover:-translate-y-0.5"
              >
                <span>{t('Contact us')}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/919755675433"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-emerald-400 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 transition-all text-sm"
              >
                <span>{t('WhatsApp')} Support</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Company Profile */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img 
                src="/assets/img/logo/logo-blue.png" 
                alt="Krishi Udaan" 
                className="h-10 w-auto brightness-110"
              />
            </Link>
            <p className="text-xs font-semibold text-emerald-400 uppercase tracking-widest">
              Hanron Tech Innovations Pvt. Ltd.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pioneering agricultural drone technologies in India. Our mission is to protect crops, empower farmers with smart aerial dosage, and conserve precious water resources.
            </p>
            
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>DGCA Standard Compliant</span>
              </div>
              <span className="text-slate-700">•</span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400">
                <Droplet className="w-4 h-4 text-sky-400" />
                <span>90% Water Saved</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-4 pb-1 border-b border-white/5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link to="/" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> {t('Home')}
                </Link>
              </li>
              <li>
                <Link to="/#advantages" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> {t('Advantages')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> {t('Services')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> {t('Gallery')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> {t('About Us')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-emerald-400 transition-colors flex items-center gap-1.5">
                  <span className="text-emerald-500">›</span> {t('Contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Agricultural Solutions */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-4 pb-1 border-b border-white/5">
              Our Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>Uniform Micron Drone Spraying</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>Crop Health & NDVI Aerial Analytics</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>Zero Soil Compaction Technology</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>400 Acres / Day High-Volume Fleet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>Hilly & Uneven Terrain Adaptation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-400 font-bold">•</span>
                <span>Custom Crop & Budget Packages</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-4 pb-1 border-b border-white/5">
              {t('Our Office')}
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <a 
                  href="https://goo.gl/maps/abHegV4AoiJA6Syd8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-slate-200 transition-colors leading-relaxed"
                >
                  Plot No. 23-B, Sector - D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, MP 462023
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919755675433" className="hover:text-emerald-400 transition-colors">+91 97556 75433</a>
                  <a href="tel:+917554331833" className="hover:text-emerald-400 transition-colors">+91 755 4331833</a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href="mailto:info@krishiudaan.in" className="hover:text-emerald-400 transition-colors">info@krishiudaan.in</a>
              </div>
            </div>

            {/* Language Switcher in Footer */}
            <div className="pt-2">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                {t('Select Language')}:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {langOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => setLanguage(opt.key)}
                    className={`px-2.5 py-1 rounded text-xs transition-colors flex items-center gap-1 ${
                      language === opt.key
                        ? 'bg-emerald-500/30 text-emerald-300 font-bold border border-emerald-500/50'
                        : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    <span>{opt.flag}</span>
                    <span>{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Krishi Udaan • Hanron Tech Innovations Private Limited. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-slate-300 transition-colors">About Us</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Support</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Terms &amp; Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
