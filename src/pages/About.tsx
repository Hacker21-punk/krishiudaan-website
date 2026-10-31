import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Droplet, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  CheckCircle2, 
  Activity, 
  Compass,
  Zap,
  Building2,
  ExternalLink
} from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function About() {
  const { t } = useLang();

  const corePillars = [
    {
      icon: Droplet,
      title: '90% Water Conservation',
      desc: 'Replacing conventional flood-spraying with high-pressure micro-droplet atomization. Our systems require only 8 to 10 litres of water per acre compared to 100 to 200 litres used in manual methods.'
    },
    {
      icon: ShieldCheck,
      title: 'Zero Pesticide Exposure',
      desc: 'Eliminating the acute health hazards of agricultural laborers carrying heavy manual backpack tanks through muddy crops under intense heat and breathing toxic chemical vapor.'
    },
    {
      icon: Activity,
      title: 'Zero Soil Compaction',
      desc: 'Aerial flight preserves soil pore structure and root respiration without the soil-crushing weight of heavy tractor sprayers that damage growing roots and reduce final crop yield.'
    },
    {
      icon: Zap,
      title: 'Rapid 7-8 Min / Acre Turnaround',
      desc: 'High-payload commercial hexacopters ensure swift disease and pest intervention during critical agronomic spray windows, with fleet capacity exceeding 400 acres per day.'
    }
  ];

  const operationalHighlights = [
    { stat: '400+', label: 'Acres / Day', desc: 'Commercial fleet spraying capacity across agricultural belts' },
    { stat: '7-8', label: 'Minutes / Acre', desc: 'Rapid field turnaround compared to hours of manual spraying' },
    { stat: '90%', label: 'Water Conserved', desc: 'Micro-atomized droplet technology saves crucial water resources' },
    { stat: '100%', label: 'Operator Safety', desc: 'Zero manual contact or toxic inhalation during chemical dispersion' },
  ];

  return (
    <div className="bg-[#0a1118] text-slate-100 font-sans selection:bg-amber-400 selection:text-slate-950">
      
      {/* Hero Header */}
      <section className="relative pt-16 pb-20 border-b border-white/[0.06] bg-[#0c141d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 mb-4">
            Industrial Drone Aviation
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Precision Agricultural Drone Spraying <br className="hidden sm:inline" />
            <span className="text-amber-400">
              Engineered for Indian Agriculture
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Krishi Udaan, an initiative by Hanron Tech Innovations Pvt. Ltd., combines industrial-grade UAV technology with agronomic precision to solve India's most urgent farming challenges.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md text-sm transition-all"
            >
              <span>Schedule a Field Demonstration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919755675433"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-sm transition-all"
            >
              <span>WhatsApp Flight Director</span>
            </a>
          </div>

        </div>
      </section>

      {/* Operational Stats Strip */}
      <section className="py-12 bg-[#070d14] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {operationalHighlights.map((item, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1722] border border-white/[0.06] text-center sm:text-left"
              >
                <div className="text-3xl sm:text-4xl font-black text-amber-400">
                  {item.stat}
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider mt-1">
                  {item.label}
                </div>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Mission & Base Section */}
      <section className="py-20 bg-[#0a1118] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
                Corporate Profile &amp; Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Industrial UAV Fleet Operations Headquartered in Bhopal, MP
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Indian farmers confront intensifying structural pressures: critical groundwater depletion, acute labor shortages during tight spraying seasons, escalating fertilizer expenses, and direct toxic exposure from manual backpack spraying.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                <b className="text-white">Hanron Tech Innovations Pvt. Ltd.</b> established <b className="text-emerald-400">Krishi Udaan</b> to deliver an industrial-grade aerial spraying service. Utilizing advanced flight stabilization and precision atomizing nozzles, our drones spray 1 acre in just 7 to 8 minutes with uniform micron coverage, preserving 90% of water and completely safeguarding farmers from hazardous chemicals.
              </p>

              {/* Office Location Box */}
              <div className="p-5 rounded-2xl bg-[#0e1722] border border-white/[0.06] flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs text-slate-300 leading-relaxed">
                  <span className="font-bold text-white block uppercase tracking-wider text-[11px] mb-0.5">
                    Central Facility &amp; Flight Logistics
                  </span>
                  <span>Hanron Tech Innovations Pvt. Ltd.</span><br />
                  <span>Plot No. 23-B, Sector - D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, MP 462023</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl bg-[#121c27]">
                <img
                  src="/assets/images/fleet.jpg"
                  alt="Krishi Udaan Fleet in Bhopal"
                  className="w-full h-[420px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1118] via-transparent to-transparent opacity-80" />
                
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0a1118]/90 backdrop-blur-md border border-white/10">
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider block">
                    Pan-India Service Reach
                  </span>
                  <p className="text-xs text-slate-200 mt-0.5 font-medium">
                    Equipped for flat fields, undulating terrains, and fruit orchards across India.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Principles (4 Pillars) */}
      <section className="py-20 bg-[#070d14] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Agriculture Chooses Krishi Udaan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePillars.map((val, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-[#0e1722] border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#080e15] text-emerald-400 flex items-center justify-center mb-5 border border-white/[0.04]">
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

      {/* Contact Callout Strip */}
      <section className="py-14 bg-[#0c141d]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Ready to schedule aerial spraying for your fields?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Connect with our Bhopal operations team to confirm drone dispatch dates and acreage packages.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 text-xs uppercase tracking-wider shadow-md transition-colors flex-shrink-0"
          >
            Contact Operations
          </Link>
        </div>
      </section>

    </div>
  );
}
