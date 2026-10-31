import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Droplet, 
  Clock, 
  ShieldCheck, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Activity, 
  Compass, 
  PhoneCall,
  Sliders
} from 'lucide-react';
import { useLang } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLang();
  const [selectedService, setSelectedService] = useState(0);

  const serviceOfferings = [
    {
      id: 'fertilizer',
      title: 'Precision Fertilizer & Nutrient Spraying',
      subtitle: 'Targeted Micron Liquid Nourishment',
      image: '/assets/images/Uniform-Spraying.png',
      badge: 'Most Popular',
      stats: '90% Water Saved • 7-8 Mins/Acre',
      desc: 'Our drones atomize liquid fertilizers and micro-nutrients into ultra-fine droplets (100–150 microns), ensuring uniform leaf surface absorption. Prevents nutrient leaching into the ground, saving costs and maximizing crop uptake.',
      benefits: [
        'Even leaf canopy coverage with zero chemical hot spots',
        'Cuts input consumption by 25% to 30% through zero runoff',
        'Custom calibrated dosage tailored to specific crop growth stages',
        'Works with all liquid micronutrients, urea, and organic bio-fertilizers'
      ]
    },
    {
      id: 'pesticide',
      title: 'Pesticide & Insecticide Pest Shield',
      subtitle: '100% Farmer Safety • Zero Direct Handling',
      image: '/assets/images/chemical_safety.png',
      badge: 'Critical Safety',
      stats: 'Zero Human Exposure • Rapid Coverage',
      desc: 'Eliminate the health hazards of carrying manual backpack pumps through dense fields. Our automated drones spray insecticides and fungicides from a controlled 2–3 meter altitude, creating a downward propeller downdraft that deposits protection deep into crop canopies.',
      benefits: [
        'Complete protection against toxic inhalation and chemical burns',
        'Deep canopy penetration via high-velocity rotor downdraft',
        'Safe treatment of poisonous insect and pest infested zones',
        'Protects nearby water bodies through drift-reduction nozzles'
      ]
    },
    {
      id: 'health',
      title: 'Aerial Crop Health & Multispectral Monitoring',
      subtitle: 'Data-Driven Precision Agriculture',
      image: '/assets/images/crop-health.jpeg',
      badge: 'Smart Data',
      stats: 'NDVI Analytics • Early Pest Detection',
      desc: 'Equipped with multispectral optical sensors, our scouting flights generate high-resolution NDVI vegetation index maps, pinpointing crop stress, irrigation deficits, fungal infections, and weed outbreaks weeks before they become visible to the naked eye.',
      benefits: [
        'Early weed and fungal infection detection',
        'Variable-rate spraying maps to treat only affected patches',
        'Accurate yield estimation and growth tracking',
        'Actionable health reports delivered straight to your smartphone'
      ]
    },
    {
      id: 'fleet',
      title: 'Commercial Fleet Dispatch (400+ Acres / Day)',
      subtitle: 'High-Volume Turnaround for Large Estates & Co-ops',
      image: '/assets/images/fleet.jpg',
      badge: 'High Capacity',
      stats: '400+ Acres Daily • Fast Turnaround',
      desc: 'For large agricultural holdings, farmer producer organizations (FPOs), seed companies, and government cooperatives, we deploy synchronized fleets of agricultural hexacopters with mobile generator refuel stations and dedicated pilot crews.',
      benefits: [
        'Massive spray volume capacity across hundreds of contiguous acres',
        'Dedicated on-site logistics, battery rapid-charging stations',
        'Certified DGCA commercial pilots and technical flight directors',
        'Guaranteed completion within optimal morning/evening spray windows'
      ]
    },
    {
      id: 'terrain',
      title: 'Hilly & Irregular Terrain Operations',
      subtitle: 'Precision Flying on Slopes, Terraces & Valleys',
      image: '/assets/images/terrain.png',
      badge: 'All Terrains',
      stats: 'Millimeter Radar Tracking • Steep Slopes',
      desc: 'Tractors and wheeled sprayers struggle on steep gradients and rocky ground. Our drones utilize millimeter-wave terrain-following radar to continuously adjust altitude above rolling hills, orchards, and terraced farmlands.',
      benefits: [
        'Safe spraying on steep hill gradients and rocky topography',
        'Ideal for fruit orchards, plantation tea/coffee, and tall sugarcane',
        'Zero machine slippage or crop trampling',
        'Maintains uniform spray distance regardless of surface elevation'
      ]
    }
  ];

  const workflowSteps = [
    {
      step: '01',
      title: 'Book & Field Survey',
      desc: 'Schedule your spraying date online or via WhatsApp. Our team maps your field boundaries via satellite GPS.'
    },
    {
      step: '02',
      title: 'Flight Path Programming',
      desc: 'Autonomous waypoint flight trajectories are calibrated to ensure 100% overlap with zero gaps or overlaps.'
    },
    {
      step: '03',
      title: 'Micron-Spray Execution',
      desc: 'Our commercial hexacopters take flight, covering 1 acre every 7 to 8 minutes with uniform atomized mist.'
    },
    {
      step: '04',
      title: 'Health & Verification Log',
      desc: 'Receive digital proof of flight, exact chemical/water volume dispensed, and a post-flight completion report.'
    }
  ];

  return (
    <div className="bg-slate-950 text-slate-100">
      
      {/* Services Hero */}
      <section className="relative pt-16 pb-20 overflow-hidden border-b border-white/5 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Industrial-Grade Agri-Drone Services</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Precision Agricultural Drone Spraying <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-400">
              Engineered for Indian Fields
            </span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From single-acre smallholdings to 500+ acre corporate estates, our fleet delivers guaranteed uniform coverage, 90% water conservation, and total operator safety.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg text-sm transition-all"
            >
              <span>Book Drone Spraying Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/919755675433"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-sm transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Direct WhatsApp Hotline</span>
            </a>
          </div>

        </div>
      </section>


      {/* Interactive Service Explorer */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              Comprehensive Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Our Primary Service Offerings
            </h2>
          </div>

          {/* Service Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {serviceOfferings.map((svc, i) => (
              <button
                key={svc.id}
                onClick={() => setSelectedService(i)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                  selectedService === i
                    ? 'bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-105'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-white/5'
                }`}
              >
                <span>{svc.title.split(' ')[0]} {svc.title.split(' ')[1]}</span>
              </button>
            ))}
          </div>

          {/* Active Service Showcase Card */}
          {(() => {
            const svc = serviceOfferings[selectedService];
            return (
              <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 to-slate-950 border border-emerald-500/30 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                  
                  {/* Visual */}
                  <div className="lg:col-span-5 rounded-2xl bg-slate-950 p-6 border border-white/10 flex items-center justify-center">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="max-h-72 w-auto object-contain filter drop-shadow-xl"
                    />
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-400 text-slate-950">
                        {svc.badge}
                      </span>
                      <span className="text-xs font-semibold text-emerald-400">
                        {svc.stats}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {svc.title}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-amber-400">
                      {svc.subtitle}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {svc.desc}
                    </p>

                    {/* Benefits List */}
                    <div className="pt-2 space-y-2">
                      {svc.benefits.map((b, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 text-xs uppercase tracking-wider shadow-md transition-all"
                      >
                        <span>Request Spraying for this Service</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            );
          })()}

        </div>
      </section>


      {/* Workflow Process */}
      <section className="py-20 bg-slate-900/60 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              Smooth Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              How Krishi Udaan Deploys to Your Field
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((wf, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-slate-900 border border-white/5 relative flex flex-col justify-between hover:border-emerald-500/40 transition-colors"
              >
                <div>
                  <span className="text-3xl font-black text-emerald-500/30 block mb-3">
                    {wf.step}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">
                    {wf.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {wf.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* Direct Booking CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-950 border-t border-emerald-500/30 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white">
            Ready to Protect Your Crops with 1-Acre in 7 Minutes?
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            Contact our operations command center in Bhopal for immediate fleet dispatch or seasonal booking.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 text-xs uppercase tracking-wider shadow-lg transition-all"
            >
              Book Drone Spraying
            </Link>
            <a
              href="tel:+919755675433"
              className="px-6 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 text-xs transition-colors"
            >
              Call +91 97556 75433
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
