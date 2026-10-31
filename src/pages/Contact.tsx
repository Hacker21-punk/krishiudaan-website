import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  ExternalLink,
  ChevronDown,
  HelpCircle,
  Building2
} from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function Contact() {
  const { t } = useLang();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    acreage: '',
    serviceType: 'Drone Spraying (Fertilizer/Pesticide)',
    msg: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        acreage: '',
        serviceType: 'Drone Spraying (Fertilizer/Pesticide)',
        msg: ''
      });
      setTimeout(() => setStatus('idle'), 6000);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const faqs = [
    {
      q: 'How fast can a Krishi Udaan drone spray 1 acre of land?',
      a: 'Our smart agricultural hexacopters cover 1 acre in approximately 7 to 8 minutes. A single flight team can spray between 30 to 40 acres in a single day, while our commercial multi-drone fleet can cover 400+ acres per day.'
    },
    {
      q: 'How much water is saved compared to traditional spraying?',
      a: 'Switching to Krishi Udaan drone spraying reduces water consumption by up to 90%. Traditional tractor or manual backpack spraying requires 150 to 200 litres of water per acre, whereas our high-pressure atomizing nozzles achieve superior leaf coverage with only 8 to 12 litres of water per acre.'
    },
    {
      q: 'Are your drone pilots certified by the DGCA?',
      a: 'Yes. All Krishi Udaan flight operations are conducted by certified commercial drone pilots complying with Directorate General of Civil Aviation (DGCA) safety guidelines and Standard Operating Procedures.'
    },
    {
      q: 'Which crops can be sprayed with Krishi Udaan drones?',
      a: 'Our drones are calibrated for almost all Indian field crops, row crops, and plantations: Wheat, Soyabean, Paddy/Rice, Cotton, Gram/Chana, Sugarcane, Maize, Mustard, as well as citrus, mango, tea, and vegetable orchards.'
    },
    {
      q: 'How do I book a spraying session for my farmland?',
      a: 'You can submit the enquiry form on this page, send a WhatsApp message to +91 97556 75433, or call our Bhopal office at +91 (0)-755-4331833. We will map your location and assign the nearest drone dispatch unit.'
    }
  ];

  return (
    <div className="bg-[#0a1118] text-slate-100 min-h-screen font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Header */}
      <section className="relative pt-16 pb-20 border-b border-white/[0.06] bg-[#0c141d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 mb-4">
            Operations &amp; Dispatch Office
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Connect with Krishi Udaan
          </h1>

          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Reach out for agricultural spraying bookings, fleet inquiries, farmer demonstrations, or corporate partnerships.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-[#0a1118]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Contact Info & Headquarters */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="p-8 rounded-2xl bg-[#0e1722] border border-white/[0.06] shadow-xl space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    Direct Contact Channels
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    Operations &amp; Support HQ
                  </h3>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#080e15] border border-white/[0.04]">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Our Office</h4>
                    <a 
                      href="https://goo.gl/maps/abHegV4AoiJA6Syd8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-slate-200 mt-1 block leading-relaxed hover:text-amber-400 transition-colors"
                    >
                      <b className="text-white">Hanron Tech Innovations Pvt. Ltd.</b><br />
                      Plot No. 23-B, Sector - D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, MP 462023, India
                    </a>
                  </div>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#080e15] border border-white/[0.04]">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Phone Numbers</h4>
                    <div className="mt-1 space-y-1 text-xs">
                      <div>
                        <a href="tel:+919755675433" className="text-slate-200 hover:text-amber-400 font-medium">
                          +91 97556 75433 (Direct Mobile)
                        </a>
                      </div>
                      <div>
                        <a href="tel:+917554331833" className="text-slate-200 hover:text-amber-400 font-medium">
                          +91 (0)-755-4331833 (Office Landline)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-[#080e15] border border-white/[0.04]">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold uppercase text-slate-400 tracking-wider">Email Address</h4>
                    <a href="mailto:info@krishiudaan.in" className="text-xs text-slate-200 hover:text-amber-400 font-medium mt-1 block">
                      info@krishiudaan.in
                    </a>
                  </div>
                </div>

                {/* WhatsApp Quick Action */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/919755675433"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 text-xs uppercase tracking-wider shadow-md transition-all"
                  >
                    <span>Instant WhatsApp Chat</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

              </div>

            </div>

            {/* Right Column: Interactive Booking & Enquiry Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-[#0e1722] border border-white/[0.06] shadow-xl">
                
                <div className="mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Book Spraying or Ask Questions
                  </span>
                  <h3 className="text-2xl font-bold text-white">
                    Send Us an Official Enquiry
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Fill out your field details below and our operations lead will get in touch with you.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Ramesh Patel"
                        className="w-full px-4 py-3 rounded-xl bg-[#080e15] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. farmer@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#080e15] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#080e15] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Estimated Farm Acreage
                      </label>
                      <input
                        type="text"
                        name="acreage"
                        value={formData.acreage}
                        onChange={handleInputChange}
                        placeholder="e.g. 25 Acres"
                        className="w-full px-4 py-3 rounded-xl bg-[#080e15] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Service Requirement
                    </label>
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#080e15] border border-white/10 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors"
                    >
                      <option value="Drone Spraying (Fertilizer/Pesticide)">Precision Drone Spraying (Fertilizer/Pesticide)</option>
                      <option value="Crop Health & NDVI Aerial Scouting">Crop Health &amp; NDVI Aerial Scouting</option>
                      <option value="Commercial High-Volume Fleet (400+ Acres)">Commercial High-Volume Fleet (400+ Acres)</option>
                      <option value="Custom Farm Seasonal Package">Custom Farm Seasonal Package</option>
                      <option value="Pilot Training & Demonstrations">Pilot Training &amp; Demonstrations</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                      Message / Field Details *
                    </label>
                    <textarea
                      name="msg"
                      rows={4}
                      value={formData.msg}
                      onChange={handleInputChange}
                      required
                      placeholder="Tell us about your crop type, location/district, and preferred spraying date..."
                      className="w-full px-4 py-3 rounded-xl bg-[#080e15] border border-white/10 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 text-xs uppercase tracking-wider shadow-md transition-all disabled:opacity-50"
                    >
                      <span>{status === 'loading' ? 'Transmitting Details...' : 'Submit Spraying Enquiry'}</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {status === 'success' && (
                    <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-emerald-400" />
                      <span>Thank you! Your message has been sent successfully. Our team will contact you shortly.</span>
                    </div>
                  )}
                </form>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="py-20 bg-[#070d14] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Common Questions
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Everything you need to know about Krishi Udaan agricultural drone services.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div 
                key={idx}
                className="rounded-2xl bg-[#0e1722] border border-white/[0.06] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 text-sm font-bold text-white hover:text-amber-400 transition-colors"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 flex-shrink-0 ${openFaq === idx ? 'rotate-180 text-amber-400' : ''}`} />
                </button>

                {openFaq === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs text-slate-300 leading-relaxed border-t border-white/[0.04]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
