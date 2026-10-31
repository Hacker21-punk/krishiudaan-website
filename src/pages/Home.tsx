import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowRight, 
  Droplet, 
  Clock, 
  Shield, 
  Zap, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles, 
  Layers, 
  Activity, 
  Sliders, 
  Maximize2, 
  X,
  PhoneCall
} from 'lucide-react';
import { useLang } from '../context/LanguageContext';

/* ========== GALLERY IMAGES (25 ORIGINAL ASSETS INTACT) ========== */
const galleryImages = [
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0036_NCZWUNJZFi.jpg?updatedAt=1718452077512',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0035_oWx0tLDi9z.jpg?updatedAt=1718452077410',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0034_LUDMXXNQK.jpg?updatedAt=1718452077073',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0033_XjdjjAJzC7.jpg?updatedAt=1718452075331',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0032_XbhDnEPylE.jpg?updatedAt=1718452075138',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/20240528_134410_yQTBmcLUD6.jpg?updatedAt=1718452074678',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/20240529_135449_9mgJU5-plK.jpg?updatedAt=1718452074666',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/20240522_101145_QtCPcjNRiW.jpg?updatedAt=1718452074660',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/20240523_082837_Rdk3CrtqdY.jpg?updatedAt=1718452074434',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/20240607_135827_DIZ1_utabk.jpg?updatedAt=1718452074419',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0028_f2Ov4Gdvsm.jpg?updatedAt=1718452074172',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0029_JdRLACdWhn.jpg?updatedAt=1718452074177',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/20240524_100726_Q6rEzti03.jpg?updatedAt=1718452073611',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/20240521_162750_xtlRbnvrT.jpg?updatedAt=1718452072416',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0037_jmAe8jysj.jpg?updatedAt=1718452072167',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0033__66GSS_U2w.jpg?updatedAt=1718449296567',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0028_EjVS-TgXLH.jpg?updatedAt=1718449296480',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0032_UwGPmklJ6q.jpg?updatedAt=1718449296211',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0037_JV3f3RtIvx.jpg?updatedAt=1718449296216',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0036_rnrmT85R5r.jpg?updatedAt=1718449296132',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/IMG-20240615-WA0035_kkpoIiiFYT.jpg?updatedAt=1718449296186',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/WhatsApp%20Image%202024-05-18%20at%2009.40.59_KyKVB65cnm.jpeg?updatedAt=1718448115896',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/WhatsApp%20Image%202024-05-18%20at%2011.12.17_V-G7rejyP.jpeg?updatedAt=1718448115891',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/WhatsApp%20Image%202024-06-10%20at%2009.52.54_Of0HpHvvqA.jpeg?updatedAt=1718448115777',
  'https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/Gallery/WhatsApp%20Image%202024-06-05%20at%2013.50.35_ze2e21IQs.jpeg?updatedAt=1718448115704',
];

/* ========== YOUTUBE VIDEOS (ORIGINAL PLAYLIST INTACT) ========== */
const videoItems = [
  {
    title: 'High-Efficiency Agricultural Field Spraying',
    subtitle: 'Demonstration of rapid 1-acre coverage in 7-8 minutes',
    url: 'https://www.youtube.com/embed/VY2PRPduOAY',
  },
  {
    title: 'Precision Micro-Droplet Atomization',
    subtitle: 'Targeted uniform dosage minimizing chemical runoff',
    url: 'https://www.youtube.com/embed/ulVOvlXEi_0',
  },
  {
    title: 'Complex Terrain & Canopy Penetration',
    subtitle: 'Radar-guided altitude tracking over uneven farmlands',
    url: 'https://www.youtube.com/embed/opEM7jHSTX8',
  },
  {
    title: 'Farmer Safety & Zero Soil Compaction',
    subtitle: 'Eliminating direct hazardous handling with aerial autonomy',
    url: 'https://www.youtube.com/embed/iLspiCQl83g',
  },
];

/* ========== ADVANTAGES DATA (ORIGINAL 8+1 ITEMS INTACT) ========== */
const advantages = [
  { 
    id: 'eff',
    category: 'speed',
    subtitle: 'Cover More, Faster', 
    title: 'Increased Efficiency', 
    img: '/assets/images/save-time.png', 
    highlight: '1 Acre in 7-8 mins',
    desc: 'Fertilizer drones can cover a larger area of land in a shorter amount of time than traditional spraying methods. This leads to increased efficiency in terms of labor and time. Drones can spray 1 Acre of land in 7-8 mins.' 
  },
  { 
    id: 'dosage',
    category: 'precision',
    subtitle: 'Targeted Precision, Minimized Waste', 
    title: 'Uniform Spraying & Controlled Dosage', 
    img: '/assets/images/Uniform-Spraying.png', 
    highlight: 'Zero Excess Runoff',
    desc: 'Fertilizer drones can precisely target specific areas of the field that require fertilization. By accurately dispensing the right amount of fertilizers and chemicals, fertilizer drones ensure that crops receive the necessary nutrients without unnecessary excess. This targeted application minimizes the wastage of fertilizers and pesticides, preventing excessive runoff and leaching. It also prevents the accumulation of harmful substances in the soil and water bodies, reducing the risk of contamination and pollution.' 
  },
  { 
    id: 'water',
    category: 'eco',
    subtitle: 'Efficiency in Every Drop', 
    title: 'Save Water', 
    img: '/assets/images/save-water.png', 
    highlight: '90% Water Conserved',
    desc: 'Water conservation is no longer a challenge with drone spraying. Switching to drone spraying can lead to an impressive 90% reduction in water usage, ensuring the optimal use of water resources for your crops, promoting sustainability, and preserving this valuable resource.' 
  },
  { 
    id: 'env',
    category: 'eco',
    subtitle: 'Sustainable Farming, Greener Earth', 
    title: 'Reduced Environmental Impact', 
    img: '/assets/images/environment-friendly.png', 
    highlight: 'Eco-Friendly Farming',
    desc: 'Fertilizer drones can help reduce the environmental impact of farming by reducing the amount of fertilizer and other chemicals that are needed to maintain crops. This can help prevent soil degradation, as well as reduce the amount of greenhouse gas emissions associated with traditional farming practices.' 
  },
  { 
    id: 'terrain',
    category: 'speed',
    subtitle: 'Versatile Farming Solutions', 
    title: 'Adaptable for every type of Terrain', 
    img: '/assets/images/terrain.png', 
    highlight: 'All Terrains & Hills',
    desc: 'Fertilizer drones can be adapted to different types of crops and terrains, making them versatile tools for farmers. They can be used in a variety of conditions, including steep hills, uneven terrain, and hard-to-reach areas of the field.' 
  },
  { 
    id: 'safety',
    category: 'safety',
    subtitle: 'Safety First, Always', 
    title: 'No Chemical Exposure to farmers', 
    img: '/assets/images/chemical_safety.png', 
    highlight: '100% Farmer Safety',
    desc: 'Traditional spraying methods can be dangerous for farmers who have to handle chemicals and pesticides. With fertilizer drones, the risk of exposure to these chemicals is significantly reduced, leading to improved safety for farmers.' 
  },
  { 
    id: 'soil',
    category: 'safety',
    subtitle: 'Preserving Soil Health, Ensuring Crop Vitality', 
    title: 'Zero Soil Compaction & Prevents Crop Damage', 
    img: '/assets/images/cropdamage.jpeg', 
    highlight: 'Preserves Soil Vitality',
    desc: "Traditional machinery, such as tractors, can cause soil compaction, which affects soil health, water absorption, and also damages the crops. Fertilizer drones, being aerial vehicles, don't impose direct weight on the soil, thereby zero soil compaction and preserving soil structure." 
  },
  { 
    id: 'data',
    category: 'precision',
    subtitle: 'Data-Driven Agriculture', 
    title: 'Monitor Health with Real-time Data', 
    img: '/assets/images/crop-health.jpeg', 
    highlight: 'Real-time Health Data',
    desc: 'Our Fertilizer drones are equipped with advanced sensors and cameras that can provide real-time data on crop health and growth. Farmers can use this data to make informed decisions about when and where to apply fertilizer, as well as other inputs like water and pesticides.' 
  },
];

const fullWidthAdvantage = {
  subtitle: 'Securing Harvests, Shielding Farmers',
  title: 'Protection from Pests & Dangerous Wildlife',
  img: '/assets/images/pest.png',
  highlight: 'Total Field Shield',
  desc: 'In traditional farming, the threat of poisonous insect bites, pests is a constant concern for farmers. By using spraying drones, the risk and chances of harmful bites and related health hazards can be significantly minimized thereby safeguarding farmers from potential threats.'
};

/* ========== SERVICES DATA (ORIGINAL 5 ITEMS INTACT) ========== */
const services = [
  { 
    title: 'Expertise', 
    subtitle: 'Harnessing Years of Drone Industry Mastery', 
    img: '/assets/images/expertize.png', 
    desc: 'Our seasoned experience in the drone industry uniquely positions us to understand and cater to the distinctive needs of Indian agriculture.' 
  },
  { 
    title: 'Affordable', 
    subtitle: 'Smart Farming, Smart Economics', 
    img: '/assets/images/saving.png', 
    desc: 'Our fertilizer drones not only reduce labor costs but also cut down expenses associated with traditional spraying methods enhancing profitability for farmers.' 
  },
  { 
    title: 'Cutting-Edge Technology', 
    subtitle: "Pioneering Tomorrow's Farming Today", 
    img: '/assets/images/tech.png', 
    desc: 'Embrace your farming experience with our advanced sensors in drone technology designed to revolutionize Indian agriculture.' 
  },
  { 
    title: 'Customized Plans', 
    subtitle: 'Tailored to Your Fields, Aligned with Your Budget', 
    img: '/assets/images/plan.png', 
    desc: "Explore flexible packages that match your crop's unique requirements and budget. Our end-to-end service support ensures a comprehensive solution for your crops." 
  },
  { 
    title: 'Quick Turnaround', 
    subtitle: 'Efficiency Meets Precision', 
    img: '/assets/images/fleet.jpg', 
    desc: 'Spraying capacity of 400 Acres per day, we can spray larger fields in optimum time. We assure swift and meticulous attention to your crops, ensuring optimal care.' 
  }
];

export default function Home() {
  const { t } = useLang();
  const [activeVideo, setActiveVideo] = useState(0);
  const [advFilter, setAdvFilter] = useState<'all' | 'speed' | 'precision' | 'eco' | 'safety'>('all');
  const [farmAcres, setFarmAcres] = useState(25);
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);
  const galleryScrollRef = useRef<HTMLDivElement>(null);

  // Filter advantages
  const filteredAdvantages = advFilter === 'all' 
    ? advantages 
    : advantages.filter(a => a.category === advFilter);

  // Calculator stats
  const hoursSaved = Math.round(farmAcres * 2.8);
  const waterSavedLitres = Math.round(farmAcres * 180 * 0.90);
  const costReductionPct = 35;

  const handleGalleryScroll = (direction: 'left' | 'right') => {
    if (galleryScrollRef.current) {
      const scrollAmount = 320;
      galleryScrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 overflow-hidden">
      
      {/* =========================================================================
          HERO SECTION: High-Tech AgriTech Drone Atmosphere
          ========================================================================= */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
        {/* Subtle glowing mesh gradients in brand emerald & gold */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[650px] bg-gradient-to-b from-emerald-900/20 via-emerald-950/10 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute top-20 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Core Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Next-Gen Agricultural Drone Technology</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                {t('Elevating Skies, Nurturing Fields')}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
                {t('Hero Description')}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl shadow-amber-500/25 transition-all text-sm hover:-translate-y-0.5"
                >
                  <span>{t('Book Spraying')}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="#advantages"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm hover:border-emerald-500/30"
                >
                  <span>{t('Explore Drone Farming')}</span>
                  <ChevronRight className="w-4 h-4 text-emerald-400" />
                </a>

                <a
                  href="https://wa.me/919755675433"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl font-medium text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-xs transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call: +91 97556 75433</span>
                </a>
              </div>

              {/* Trust Micro-Badges */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>100% Uniform Micron Coverage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Certified Commercial Pilots</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Zero Soil Damage Guarantee</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Impact Drone Visual with Live Telemetry Badges */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Visual Frame */}
                <div className="relative rounded-3xl overflow-hidden border border-emerald-500/30 shadow-2xl shadow-black/80 bg-slate-900 group">
                  <img
                    src="https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/compressed/best_ahz3dGVwx.jpg?updatedAt=1700818274457"
                    alt="Agricultural Drone Spraying Indian Farmlands"
                    className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  
                  {/* Overlay Specs Card (Bottom) */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        Live Field Deployment
                      </div>
                      <div className="text-sm font-bold text-white mt-0.5">
                        Krishi Udaan Smart Hexacopter
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-extrabold text-amber-400 block">
                        400 Acres / Day
                      </span>
                      <span className="text-[10px] text-slate-400">Peak Fleet Rating</span>
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badge 1 (Top Left) */}
                <div className="absolute -top-4 -left-4 sm:-left-6 p-3.5 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-emerald-500/30 shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                    <Droplet className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">90% Less Water</div>
                    <div className="text-[10px] text-slate-400">vs. Manual Spraying</div>
                  </div>
                </div>

                {/* Floating Metric Badge 2 (Right Mid) */}
                <div className="absolute -bottom-4 -right-4 sm:-right-6 p-3.5 rounded-2xl bg-slate-900/95 backdrop-blur-md border border-amber-500/30 shadow-xl flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                    <Clock className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">7-8 Mins</div>
                    <div className="text-[10px] text-slate-400">Per Acre Coverage</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Key Metrics Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-slate-900/60 backdrop-blur-md border border-emerald-500/20 shadow-xl">
            <div className="text-center p-3 border-r border-white/5 last:border-none">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">400+</div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1">Acres / Day Capacity</div>
              <div className="text-[11px] text-slate-400 mt-0.5">High-Speed Fleet Delivery</div>
            </div>
            <div className="text-center p-3 border-r border-white/5 last:border-none">
              <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400">90%</div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1">Water Reduction</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Eco-Friendly Micron Droplets</div>
            </div>
            <div className="text-center p-3 border-r border-white/5 last:border-none">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">7-8</div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1">Minutes Per Acre</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Quick Field Turnaround</div>
            </div>
            <div className="text-center p-3">
              <div className="text-3xl sm:text-4xl font-extrabold text-amber-400">10+</div>
              <div className="text-xs sm:text-sm font-semibold text-white mt-1">Years of Innovation</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Hanron Tech Engineering</div>
            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          INTERACTIVE SAVINGS & ROI CALCULATOR (Farmer-Centric Utility)
          ========================================================================= */}
      <section className="py-16 bg-slate-900/40 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 to-emerald-950/40 border border-emerald-500/20 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-5 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Sliders className="w-3.5 h-3.5 text-emerald-400" />
                  Farm Impact Calculator
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Calculate Your Farm’s Water &amp; Time Savings
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  See how much water, labor hours, and input expense Krishi Udaan smart drones save compared to conventional tractor or manual knapsack spraying.
                </p>

                {/* Acreage Slider */}
                <div className="pt-4 space-y-2">
                  <div className="flex justify-between items-center text-sm font-bold">
                    <span className="text-slate-300">Your Land Area:</span>
                    <span className="text-amber-400 text-lg">{farmAcres} Acres</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="300"
                    step="1"
                    value={farmAcres}
                    onChange={(e) => setFarmAcres(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400">
                    <span>2 Acres (Smallholding)</span>
                    <span>150 Acres</span>
                    <span>300+ Acres (Commercial)</span>
                  </div>
                </div>
              </div>

              {/* Real-time Calculated Outcomes */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  
                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 text-center space-y-1 shadow-lg">
                    <Droplet className="w-7 h-7 text-sky-400 mx-auto" />
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                      {waterSavedLitres.toLocaleString()} L
                    </div>
                    <div className="text-xs font-bold text-emerald-400">Freshwater Conserved</div>
                    <p className="text-[10px] text-slate-400">90% reduction vs traditional 200L/acre floods</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-amber-500/30 text-center space-y-1 shadow-lg">
                    <Clock className="w-7 h-7 text-amber-400 mx-auto" />
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                      {hoursSaved} Hours
                    </div>
                    <div className="text-xs font-bold text-amber-400">Time / Labor Saved</div>
                    <p className="text-[10px] text-slate-400">Completed in ~{(farmAcres * 8 / 60).toFixed(1)} flight hours</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-slate-900/90 border border-emerald-500/30 text-center space-y-1 shadow-lg">
                    <Shield className="w-7 h-7 text-emerald-400 mx-auto" />
                    <div className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                      {costReductionPct}%
                    </div>
                    <div className="text-xs font-bold text-emerald-400">Chemical Efficiency</div>
                    <p className="text-[10px] text-slate-400">Zero wastage due to targeted micron droplets</p>
                  </div>

                </div>

                <div className="mt-6 text-center sm:text-right">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors"
                  >
                    <span>Request custom quote for your acreage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =========================================================================
          VIDEO SHOWCASE & FLIGHT CINEMA (Original 4 YouTube Embeds Intact)
          ========================================================================= */}
      <section className="py-20 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
              <Play className="w-3 h-3 text-emerald-400" />
              Live Flight Demonstrations
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Unleash the Power of Modern Farming with precision <br className="hidden sm:inline" />
              <span className="text-amber-400 font-extrabold">Drone Spraying Services</span> on demand.
            </h2>
            <p className="mt-3 text-sm text-slate-300">
              Watch Krishi Udaan advanced aerial hexacopters in real operational action across Indian farmlands.
            </p>
          </div>

          {/* Interactive Cinema Player */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Main Video Frame */}
            <div className="lg:col-span-8 rounded-3xl overflow-hidden bg-slate-900 border border-emerald-500/30 shadow-2xl shadow-black/80 aspect-video relative">
              <iframe
                src={videoItems[activeVideo].url}
                title={videoItems[activeVideo].title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Selector Playlist */}
            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Select Field Demonstration ({activeVideo + 1} of {videoItems.length}):
              </span>
              
              {videoItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveVideo(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 ${
                    activeVideo === idx
                      ? 'bg-emerald-950/60 border-emerald-500/60 shadow-lg text-white'
                      : 'bg-slate-900/70 border-white/5 text-slate-300 hover:bg-slate-900 hover:border-white/10'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold ${
                    activeVideo === idx 
                      ? 'bg-amber-400 text-slate-950' 
                      : 'bg-white/10 text-slate-300'
                  }`}>
                    {activeVideo === idx ? <Play className="w-3.5 h-3.5 fill-current" /> : (idx + 1)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold leading-snug">{item.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-1">{item.subtitle}</p>
                  </div>
                </button>
              ))}

              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300/90 flex items-center gap-2 mt-4">
                <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Want an on-field demo on your farm? We deploy across MP &amp; India.</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          ADVANTAGES SECTION: All 8 + 1 Items with Filtering & Rich Visual Cards
          ========================================================================= */}
      <section id="advantages" className="py-20 bg-slate-900/60 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                {t("Unlocking Agriculture's Potential")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {t('Advantages of Drone Spraying')}
              </h2>
              <p className="text-sm text-slate-300 mt-2 max-w-xl">
                Every drop counted. Every acre protected. Explore the transformative advantages engineered specifically for Indian farmers and varied terrains.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setAdvFilter('all')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  advFilter === 'all'
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                All (9)
              </button>
              <button
                onClick={() => setAdvFilter('speed')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  advFilter === 'speed'
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Speed &amp; Terrain
              </button>
              <button
                onClick={() => setAdvFilter('precision')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  advFilter === 'precision'
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Precision &amp; Data
              </button>
              <button
                onClick={() => setAdvFilter('eco')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  advFilter === 'eco'
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Water &amp; Eco
              </button>
              <button
                onClick={() => setAdvFilter('safety')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                  advFilter === 'safety'
                    ? 'bg-emerald-500 text-slate-950 font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                Farmer Safety &amp; Soil
              </button>
            </div>
          </div>

          {/* Advantages Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {filteredAdvantages.map((adv) => (
              <div 
                key={adv.id}
                className="rounded-3xl p-6 sm:p-8 bg-slate-900/90 border border-white/5 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-emerald-950/50 flex flex-col sm:flex-row items-start gap-6 group"
              >
                {/* Visual Image */}
                <div className="w-full sm:w-44 h-44 rounded-2xl overflow-hidden bg-slate-950/60 p-3 flex-shrink-0 flex items-center justify-center border border-white/5 group-hover:border-emerald-500/20 transition-colors">
                  <img
                    src={adv.img}
                    alt={adv.title}
                    className="max-h-36 max-w-full object-contain filter drop-shadow group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      {adv.subtitle}
                    </span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {adv.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {adv.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed text-justify">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Full-Width 9th Advantage Card: Pest & Dangerous Wildlife */}
          {(advFilter === 'all' || advFilter === 'safety') && (
            <div className="mt-6 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-emerald-950/40 to-slate-900 border border-emerald-500/30 shadow-xl flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-56 h-48 rounded-2xl bg-slate-950/70 p-4 flex-shrink-0 flex items-center justify-center border border-white/10">
                <img
                  src={fullWidthAdvantage.img}
                  alt={fullWidthAdvantage.title}
                  className="max-h-40 max-w-full object-contain filter drop-shadow"
                  loading="lazy"
                />
              </div>

              <div className="flex-1 space-y-2 text-center md:text-left">
                <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-amber-400">
                  {fullWidthAdvantage.subtitle}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {fullWidthAdvantage.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {fullWidthAdvantage.desc}
                </p>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                  >
                    <span>Schedule agricultural pest &amp; field protection</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>


      {/* =========================================================================
          SERVICES / WHY CHOOSE US (Original 5 Services Intact)
          ========================================================================= */}
      <section id="services" className="py-20 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              {t('Why Choose us?')}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Experts in Every Aspect of the Agricultural Drone Lifecycle
            </h2>
            <p className="text-sm text-slate-300 mt-2">
              From individual plots to massive 400+ acre corporate farming operations, our end-to-end support guarantees peak crop care.
            </p>
          </div>

          {/* 5 Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div 
                key={i}
                className="rounded-3xl p-6 sm:p-7 bg-slate-900/80 border border-white/5 hover:border-amber-400/40 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-2xl flex flex-col justify-between group"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-slate-800/80 p-2.5 flex items-center justify-center mb-5 border border-white/10 group-hover:scale-110 transition-transform">
                    <img 
                      src={svc.img} 
                      alt={svc.title} 
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block mb-1">
                    {svc.subtitle}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-white/5 flex items-center justify-between text-xs">
                  <span className="text-emerald-400 font-semibold">Krishi Udaan Standard</span>
                  <Link to="/contact" className="text-slate-400 hover:text-white flex items-center gap-1 font-bold">
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}

            {/* 6th Card: Call to Action Card to complete the grid */}
            <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-slate-950 shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-900/80 block mb-1">
                  Custom Fleet Deployment
                </span>
                <h3 className="text-2xl font-black text-slate-950 mb-2 leading-snug">
                  Need Rapid Spraying for Large Acreage?
                </h3>
                <p className="text-xs font-medium text-slate-900/90 leading-relaxed">
                  Our fleet of 400 Acres/day spraying drones can be mobilized anywhere in central India within hours of booking.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-950 text-white font-bold text-xs hover:bg-slate-900 shadow-lg transition-colors"
                >
                  <span>Book Immediate Spraying Slot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          TAKING FLIGHT: Business & Ecosystem Support (Original 3 Cards)
          ========================================================================= */}
      <section className="py-20 bg-slate-900/40 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              Taking Flight
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Elevate Your Agricultural Business with Our Drones &amp; Expert Support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="rounded-3xl p-7 bg-slate-900/80 border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-sky-500/10 p-2.5 flex items-center justify-center mb-5 border border-sky-500/20">
                  <img src="/assets/images/messaging.png" alt="Support" className="max-h-full max-w-full object-contain" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Comprehensive After-Sales Support
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our commitment doesn't end with a sale. We provide unmatched support, training, and maintenance to ensure your success.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-white/5">
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-400 hover:text-sky-300">
                  <span>Connect with Support</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-3xl p-7 bg-slate-900/80 border border-white/5 hover:border-amber-500/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 p-2.5 flex items-center justify-center mb-5 border border-amber-500/20 text-amber-400 font-bold">
                  <Zap className="w-8 h-8 text-amber-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Taking Business to New Heights
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Experience business transformation like never before. Our state-of-the-art drones and expert support will elevate your operations and insights to extraordinary levels.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-white/5">
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300">
                  <span>Explore Growth</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-3xl p-7 bg-slate-900/80 border border-white/5 hover:border-emerald-500/30 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 p-2.5 flex items-center justify-center mb-5 border border-emerald-500/20">
                  <img src="/assets/img/service/service-5.png" alt="Excellence" className="max-h-full max-w-full object-contain" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  Achieve the Extraordinary
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Reach new heights and achieve extraordinary business outcomes with our advanced drones and expert support. Elevate your business to limitless potential.
                </p>
              </div>
              <div className="pt-6 mt-4 border-t border-white/5">
                <Link to="/contact" className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300">
                  <span>Start Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          PAN-INDIA COVERAGE MAP (Original india.png Asset Intact)
          ========================================================================= */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
              {t('Bringing Drones to')}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {t('Every Corner of India')}
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-xl mx-auto">
              Headquartered in Bhopal, Madhya Pradesh with rapid drone deployment hubs reaching farming clusters across all agricultural zones.
            </p>
          </div>

          <div className="relative rounded-3xl p-6 sm:p-12 bg-gradient-to-b from-slate-900 to-slate-950 border border-emerald-500/20 shadow-2xl overflow-hidden flex flex-col items-center">
            
            {/* Map Image */}
            <div className="relative max-w-3xl w-full flex justify-center py-4">
              <img
                src="/assets/images/india.png"
                alt="Krishi Udaan Operations Across India"
                className="max-h-[500px] w-auto object-contain filter drop-shadow-[0_10px_30px_rgba(16,185,129,0.15)]"
                loading="lazy"
              />
            </div>

            {/* Quick Regional Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl pt-8 border-t border-white/10 text-center">
              <div>
                <span className="text-lg font-bold text-white block">Madhya Pradesh Hub</span>
                <span className="text-xs text-slate-400">Headquarters &amp; Training Center, Bhopal</span>
              </div>
              <div>
                <span className="text-lg font-bold text-amber-400 block">Fast Dispatch</span>
                <span className="text-xs text-slate-400">Deployable Fleets for Seasonal Spraying</span>
              </div>
              <div>
                <span className="text-lg font-bold text-emerald-400 block">All Crop Types</span>
                <span className="text-xs text-slate-400">Wheat, Soyabean, Cotton, Paddy, Horticulture</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          FIELD GALLERY SHOWCASE: All 25 Real Field Assets with Lightbox Modal
          ========================================================================= */}
      <section id="gallery" className="py-20 bg-slate-900/60 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                Field Evidence &amp; Operations
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {t('Gallery')} — Real Farmlands in Action
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Browse high-resolution photographs of our drones operating across Indian fields, orchards, and village farms.
              </p>
            </div>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleGalleryScroll('left')}
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Previous gallery image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleGalleryScroll('right')}
                className="w-10 h-10 rounded-xl bg-slate-800 hover:bg-emerald-500 hover:text-slate-950 text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Next gallery image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <Link
                to="/gallery"
                className="ml-2 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-200"
              >
                View All (25)
              </Link>
            </div>
          </div>

          {/* Horizontal Smooth Scroll Strip */}
          <div
            ref={galleryScrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {galleryImages.map((imgUrl, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-72 h-72 rounded-2xl overflow-hidden relative group cursor-pointer border border-white/10 bg-slate-900 snap-start"
                onClick={() => setLightboxImg(imgUrl)}
              >
                <img
                  src={imgUrl}
                  alt={`Krishi Udaan Field Spraying ${i + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <div className="flex items-center justify-between w-full text-xs font-semibold text-white">
                    <span>Field Operation #{i + 1}</span>
                    <Maximize2 className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          NEWSLETTER & CTA BANNER (Original marketing.png Asset Intact)
          ========================================================================= */}
      <section className="py-20 bg-slate-950 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-emerald-950 via-slate-900 to-slate-900 border border-emerald-500/30 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                  {t('Get Update')}
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                  Stay in the drone world loop with our latest updates
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Receive expert advisories on seasonal spray timing, crop protection recommendations, and government drone subsidies directly to your inbox.
                </p>

                <form 
                  onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to Krishi Udaan updates!'); }}
                  className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto lg:mx-0 pt-2"
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 rounded-xl bg-slate-950/80 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-emerald-400"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-xs uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

              {/* Marketing Visual */}
              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <img
                  src="/assets/images/marketing.png"
                  alt="Krishi Udaan Agricultural Drone Updates"
                  className="max-h-72 w-auto object-contain filter drop-shadow-xl"
                  loading="lazy"
                />
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================================
          LIGHTBOX MODAL FOR GALLERY
          ========================================================================= */}
      {lightboxImg && (
        <div 
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-950/80 text-white hover:bg-red-500 transition-colors"
              aria-label="Close image modal"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxImg}
              alt="Krishi Udaan Drone Full Resolution"
              className="max-h-[82vh] w-auto object-contain rounded-2xl mx-auto"
            />
          </div>
        </div>
      )}

    </div>
  );
}
