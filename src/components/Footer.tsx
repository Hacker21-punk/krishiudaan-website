import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Phone, Mail } from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-slate-100 text-slate-700 border-t border-slate-200 pt-16 pb-12 font-sans">
      
      {/* Top Banner Callout Strip - High Impact AgriTech Emerald Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-emerald-900 via-emerald-800 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-emerald-700/40">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Precision Drone Spraying
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              Over a Decade in Innovation, and Our Flight Has Just Begun
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Transforming agricultural crop protection with precision drones, 90% water conservation, and rapid farm turnaround.
            </p>
          </div>

          <div className="flex-shrink-0 flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 text-xs sm:text-sm uppercase tracking-wider transition-all shadow-md hover:scale-105"
            >
              <span>Want some spraying?</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Structured 4-Column Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-slate-200">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand & Identity */}
          <div className="space-y-3.5">
            <Link to="/" className="inline-block p-1 bg-white rounded-lg border border-slate-200 shadow-sm">
              <img 
                src="/assets/img/logo/logo-blue.png" 
                alt="Krishi Udaan" 
                className="h-8 w-auto" 
              />
            </Link>
            <p className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
              Hanron Tech Innovations Pvt. Ltd.
            </p>
            <p className="text-xs text-slate-600 leading-relaxed">
              Empowering Indian agriculture with smart spraying drones, autonomous radar tracking, and industrial fleet reliability.
            </p>

            {/* Official Social Links */}
            <div className="pt-2 flex items-center gap-2.5">
              <a 
                href="https://www.instagram.com/krishi_udaan/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-emerald-600 text-xs font-semibold text-slate-700 hover:text-emerald-700 shadow-sm transition-all"
                aria-label="Krishi Udaan on Instagram"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-600" />
                <span>Instagram</span>
              </a>
              <a 
                href="https://www.youtube.com/@krishi_udaan/" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-emerald-600 text-xs font-semibold text-slate-700 hover:text-emerald-700 shadow-sm transition-all"
                aria-label="Krishi Udaan on YouTube"
              >
                <YoutubeIcon className="w-3.5 h-3.5 text-red-600" />
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Quick Navigation
            </h5>
            <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
              <li><Link to="/" className="hover:text-emerald-700 transition-colors">Home</Link></li>
              <li><a href="/#advantages" className="hover:text-emerald-700 transition-colors">Advantages of Drone Spraying</a></li>
              <li><a href="/#services" className="hover:text-emerald-700 transition-colors">Services &amp; Why Choose Us</a></li>
              <li><a href="/#gallery" className="hover:text-emerald-700 transition-colors">Field Gallery</a></li>
              <li><Link to="/about" className="hover:text-emerald-700 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-700 transition-colors">Contact &amp; Enquiry</Link></li>
            </ul>
          </div>

          {/* Col 3: Key Operations */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Operational Highlights
            </h5>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                <span>Uniform Spraying &amp; Controlled Dosage</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                <span>1 Acre in 7-8 Minutes</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                <span>90% Water Usage Reduction</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                <span>Zero Chemical Exposure to Farmers</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                <span>Adaptable for Every Terrain &amp; Slope</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 flex-shrink-0" />
                <span>400 Acres / Day Spraying Capacity</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Office (Crisp, High-Contrast Typography) */}
          <div>
            <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-4">
              Our Office
            </h5>
            <div className="bg-white p-4 sm:p-5 rounded-xl border border-slate-200 shadow-sm space-y-3.5">
              <div>
                <p className="text-sm font-bold text-slate-900 leading-snug">
                  Hanron Tech Innovations Pvt. Ltd.
                </p>
                <div className="mt-2 flex items-start gap-2 text-xs text-slate-700 leading-relaxed font-normal">
                  <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>
                    Plot No. 23-B, Sector - D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, MP 462023
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 space-y-2">
                <a 
                  href="tel:+919755675433" 
                  className="flex items-center gap-2 text-xs font-semibold text-slate-900 hover:text-emerald-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>+91 97556 75433</span>
                </a>
                <a 
                  href="tel:+917554331833" 
                  className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-emerald-700 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
                  <span>+91 755 4331833</span>
                </a>
                <a 
                  href="mailto:info@krishiudaan.in" 
                  className="flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>info@krishiudaan.in</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: Copyright, Support Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <Link to="/" className="inline-block p-1 bg-white rounded border border-slate-200">
              <img 
                src="/assets/img/copyright/copyright-logo.png" 
                alt="Krishi Udaan" 
                className="h-6 w-auto object-contain" 
              />
            </Link>
            <span className="text-xs text-slate-600 font-medium">
              © 2026 Krishi Udaan, All Rights Reserved.
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-600 font-medium">
            <Link to="/contact" className="hover:text-emerald-700 transition-colors">Support</Link>
            <Link to="/contact" className="hover:text-emerald-700 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-emerald-700 transition-colors">Terms and Conditions</Link>
          </div>

        </div>
      </div>

    </footer>
  );
}