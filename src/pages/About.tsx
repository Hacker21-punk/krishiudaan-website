import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Droplet, 
  Sparkles, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Compass, 
  Layers, 
  Activity, 
  Users
} from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function About() {
  const { t } = useLang();

  const milestones = [
    {
      year: '2014',
      title: 'Foundation & Aeronautical Research',
      desc: 'Hanron Tech Innovations was initiated with a focus on advanced UAV systems, telemetry, and automated flight controllers.'
    },
    {
      year: '2018',
      title: 'Agricultural Drone Prototyping',
      desc: 'Engineered our first high-payload hexacopters designed specifically for Indian field crop protection and uniform spray dosage.'
    },
    {
      year: '2021',
      title: 'Centrifugal Atomization & Radar Integration',
      desc: 'Pioneered terrain-following radar systems allowing autonomous flights across hilly farmlands, orchards, and uneven valleys.'
    },
    {
      year: '2024+',
      title: 'Pan-India Fleet Deployment (400+ Acres/Day)',
      desc: 'Scaled operations to large-scale spraying capacity, serving thousands of farming acres across Madhya Pradesh and central India.'
    }
  ];

  const coreValues = [
    {
      icon: Droplet,
      title: '90% Water Conservation',
      desc: 'Replacing wasteful flood-spraying with micro-droplet atomization that requires only 8-10 litres of water per acre compared to 100-200 litres traditionally.'
    },
    {
      icon: ShieldCheck,
      title: 'Farmer Safety & Zero Toxicity Exposure',
      desc: 'Eliminating the health risks of farmers carrying heavy backpack tanks and inhaling toxic chemical mist in intense heat.'
    },
    {
      icon: Activity,
      title: 'Zero Soil Compaction',
      desc: 'Aerial flight preserves soil pore structure and root aeration without crushing growing crops like heavy tractors do.'
    },
    {
      icon: Sparkles,
      title: 'Precision Micro-Dosage',
      desc: 'Uniform droplet distribution directly onto plant canopies prevents groundwater runoff and cuts fertilizer expenses by up to 30%.'
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100">
      
      {/* Hero Header */}
      <section className="relative pt-16 pb-24 overflow-hidden border-b border-white/5 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Over a Decade of Innovation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Pioneering the Skies to <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
              Transform Indian Agriculture
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Krishi Udaan, an initiative by Hanron Tech Innovations Pvt. Ltd., combines aerospace precision with deep agricultural understanding to solve India's toughest farming challenges.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 text-sm transition-all"
            >
              <span>Schedule a Field Demonstration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 text-sm transition-all"
            >
              <span>Explore Our Services</span>
            </Link>
          </div>

        </div>
      </section>


      {/* Story & Background Section */}
      <section className="py-20 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                Our Heritage &amp; Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Building Tomorrow’s Precision Agri-Tech from Bhopal to Every Corner of India
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Indian farmers face intensifying challenges: severe groundwater depletion, labor shortages during critical spraying windows, escalating chemical costs, and direct health hazards from toxic pesticide exposure.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Founded by engineers with deep aerospace expertise, <b>Hanron Tech Innovations Pvt. Ltd.</b> launched <b>Krishi Udaan</b> to provide accessible, industrial-grade aerial spraying services. Our smart drones spray 1 acre of crops in just 7 to 8 minutes with uniform micron atomization, cutting water usage by 90% and protecting farmers from hazardous contact.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900 border border-white/5">
                  <div className="text-2xl font-black text-amber-400">400+</div>
                  <div className="text-xs font-semibold text-slate-200 mt-1">Acres Daily Capacity</div>
                  <div className="text-[10px] text-slate-400">Rapid dispatch fleet</div>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900 border border-white/5">
                  <div className="text-2xl font-black text-emerald-400">100%</div>
                  <div className="text-xs font-semibold text-slate-200 mt-1">Farmer Safety</div>
                  <div className="text-[10px] text-slate-400">Zero direct exposure</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl bg-slate-900">
                <img
                  src="/assets/images/fleet.jpg"
                  alt="Krishi Udaan Drone Fleet in Bhopal"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/10">
                  <span className="text-xs font-bold text-emerald-400 block uppercase tracking-wider">
                    Operational Base: Bhopal, MP
                  </span>
                  <p className="text-xs text-slate-300 mt-1">
                    Plot No. 23-B, Sector - D, Govindpura Industrial Area. Full assembly, maintenance, and pilot training facility.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Core Values / Four Pillars */}
      <section className="py-20 bg-slate-900/60 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Krishi Udaan Leads Agri-Drone Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/90 border border-white/5 hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-5 border border-emerald-500/20">
                    <val.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Innovation Timeline */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-2">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              A Decade of Relentless Engineering
            </h2>
          </div>

          <div className="relative border-l border-emerald-500/30 ml-4 sm:ml-32 space-y-10 pl-6 sm:pl-8">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group">
                {/* Year Badge */}
                <div className="sm:absolute sm:-left-36 sm:top-0 mb-2 sm:mb-0">
                  <span className="inline-block px-3 py-1 rounded-lg text-xs font-black bg-amber-400 text-slate-950 shadow-md">
                    {m.year}
                  </span>
                </div>

                {/* Dot */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-emerald-400 group-hover:scale-125 transition-transform" />

                <div className="p-6 rounded-2xl bg-slate-900/80 border border-white/5 hover:border-emerald-500/30 transition-colors">
                  <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {m.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Callout Strip */}
      <section className="py-16 bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border-t border-emerald-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Have questions about our technology or pilots?</h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Visit our central engineering office in Bhopal or speak with our flight directors.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 text-xs uppercase tracking-wider shadow-lg transition-all"
          >
            Get In Touch
          </Link>
        </div>
      </section>

    </div>
  );
}
