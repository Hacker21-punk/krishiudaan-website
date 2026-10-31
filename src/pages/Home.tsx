import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { 
 ArrowRight, 
 ChevronLeft, 
 ChevronRight, 
 Play, 
 X, 
 Maximize2
} from 'lucide-react';
import { useLang } from '../context/LanguageContext';

/* ========== GALLERY IMAGES (ALL 25 ORIGINAL IMAGEKIT ASSETS INTACT) ========== */
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

/* ========== YOUTUBE VIDEOS (ALL 4 ORIGINAL EMBEDS INTACT) ========== */
const videos = [
 'https://www.youtube.com/embed/VY2PRPduOAY',
 'https://www.youtube.com/embed/ulVOvlXEi_0',
 'https://www.youtube.com/embed/opEM7jHSTX8',
 'https://www.youtube.com/embed/iLspiCQl83g',
];

/* ========== ADVANTAGES DATA (ALL 8 ORIGINAL ITEMS INTACT) ========== */
const advantages = [
 { 
 subtitle: 'Cover More, Faster', 
 title: 'Increased Efficiency', 
 img: '/assets/images/save-time.png', 
 desc: 'Fertilizer drones can cover a larger area of land in a shorter amount of time than traditional spraying methods. This leads to increased efficiency in terms of labor and time. Drones can spray 1 Acre of land in 7-8 mins' 
 },
 { 
 subtitle: 'Targeted Precision, Minimized Waste', 
 title: 'Uniform Spraying & Controlled Dosage', 
 img: '/assets/images/Uniform-Spraying.png', 
 desc: 'Fertilizer drones can precisely target specific areas of the field that require fertilization. By accurately dispensing the right amount of fertilizers and chemicals, fertilizer drones ensure that crops receive the necessary nutrients without unnecessary excess. This targeted application minimizes the wastage of fertilizers and pesticides, preventing excessive runoff and leaching. It also prevents the accumulation of harmful substances in the soil and water bodies, reducing the risk of contamination and pollution.' 
 },
 { 
 subtitle: 'Efficiency in Every Drop', 
 title: 'Save Water', 
 img: '/assets/images/save-water.png', 
 desc: 'Water conservation is no longer a challenge with drone spraying. Switching to drone spraying can lead to an impressive 90% reduction in water usage, ensuring the optimal use of water resources for your crops, promoting sustainability, and preserving this valuable resource.' 
 },
 { 
 subtitle: 'Sustainable Farming, Greener Earth', 
 title: 'Reduced Environmental Impact', 
 img: '/assets/images/environment-friendly.png', 
 desc: 'Fertilizer drones can help reduce the environmental impact of farming by reducing the amount of fertilizer and other chemicals that are needed to maintain crops. This can help prevent soil degradation, as well as reduce the amount of greenhouse gas emissions associated with traditional farming practices.' 
 },
 { 
 subtitle: 'Versatile Farming Solutions', 
 title: 'Adaptable for every type of Terrain', 
 img: '/assets/images/terrain.png', 
 desc: 'Fertilizer drones can be adapted to different types of crops and terrains, making them versatile tools for farmers. They can be used in a variety of conditions, including steep hills, uneven terrain, and hard-to-reach areas of the field.' 
 },
 { 
 subtitle: 'Safety First, Always', 
 title: 'No Chemical Exposure to farmers', 
 img: '/assets/images/chemical_safety.png', 
 desc: 'Traditional spraying methods can be dangerous for farmers who have to handle chemicals and pesticides. With fertilizer drones, the risk of exposure to these chemicals is significantly reduced, leading to improved safety for farmers.' 
 },
 { 
 subtitle: 'Preserving Soil Health, Ensuring Crop Vitality', 
 title: 'Zero Soil Compaction & Prevents Crop Damage', 
 img: '/assets/images/cropdamage.jpeg', 
 desc: "Traditional machinery, such as tractors, can cause soil compaction, which affects soil health, water absorption, and also damages the crops. Fertilizer drones, being aerial vehicles, don't impose direct weight on the soil, thereby zero soil compaction and preserving soil structure." 
 },
 { 
 subtitle: 'Data-Driven Agriculture', 
 title: 'Identify crop health with high-precision drone imagery', 
 img: '/assets/images/crop-health.jpeg', 
 desc: 'Unlock the power of precision agriculture with our cutting-edge drone cameras. Detect crop stress, diseases, and nutrient deficiencies early, maximizing yields and profits. Elevate your farming experience today!' 
 }
];

/* ========== FULL WIDTH 9TH ADVANTAGE CARD (ORIGINAL DATA INTACT) ========== */
const fullWidthAdvantage = {
 subtitle: 'Protection from Pests & Wildlife',
 title: 'Protection from Pests, Insects & Dangerous Animals',
 img: '/assets/images/pest.png',
 desc: 'Pesticide spraying is not just about safeguarding crops; it also shields farmers from potential dangers lurking in the fields. Fields can harbor disease-carrying pests and even venomous animals like snakes. Drone spraying acts as a proactive shield, drastically reducing the risk of pest bites, encounters with harmful animals, and health risks, ensuring that farmers can cultivate their lands with peace of mind.'
};

/* ========== SERVICES DATA (ALL 5 ORIGINAL ITEMS INTACT) ========== */
const services = [
 { 
 title: 'Cost-Effective Solutions', 
 subtitle: 'Smart Farming, Smart Economics', 
 img: '/assets/images/saving.png', 
 desc: 'Our fertilizer drones not only reduce labor costs but also cut down expenses associated with traditional spraying methods enhancing profitability for farmers' 
 },
 { 
 title: 'Cutting-Edge Technology', 
 subtitle: "Pioneering Tomorrow's Farming Today", 
 img: '/assets/images/tech.png', 
 desc: 'Embrace your farming experience with our advanced sensors in drone technology designed to revolutionize Indian agriculture' 
 },
 { 
 title: 'Customized Plans', 
 subtitle: 'Tailored to Your Fields, Aligned with Your Budget', 
 img: '/assets/images/plan.png', 
 desc: "Explore flexible packages that match your crop's unique requirements and budget. Our end-to-end service support ensures a comprehensive solution for your crops" 
 },
 { 
 title: 'Quick Turnaround', 
 subtitle: 'Efficiency Meets Precision', 
 img: '/assets/images/fleet.jpg', 
 desc: 'Spraying capacity of 400 Acres per day, we can spray larger fields in optimum time. We assure swift and meticulous attention to your crops, ensuring optimal care' 
 },
 { 
 title: 'Customer Satisfaction', 
 subtitle: 'Your Success, Our Priority', 
 img: '/assets/images/satisfaction.png', 
 desc: "Our dedication to quality, performance, and client satisfaction has made us the trusted drone service partner for agricultural leaders across Madhya Pradesh and India" 
 }
];

export default function Home() {
 const { t } = useLang();
 const [videoIdx, setVideoIdx] = useState(0);
 const [lightboxImg, setLightboxImg] = useState<string | null>(null);
 const galleryRef = useRef<HTMLDivElement>(null);

 const handleGalleryScroll = (direction: 'left' | 'right') => {
 if (galleryRef.current) {
 const scrollAmount = 300;
 galleryRef.current.scrollBy({ 
 left: direction === 'left' ? -scrollAmount : scrollAmount, 
 behavior: 'smooth' 
 });
 }
 };

 return (
 <div className="bg-white text-slate-900 font-sans selection:bg-emerald-600 selection:text-white transition-colors duration-200">
 
 {/* =========================================================================
 HERO SECTION: High-Grade, Crisp, World-Class AgriTech
 ========================================================================= */}
 <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-emerald-50/40 via-white to-white border-b border-slate-100 transition-colors">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
 
 {/* Left Column Content */}
 <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
 
 <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-100/80 text-emerald-800 border border-emerald-200 transition-colors">
 <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
 <span>Precision Agricultural Technology</span>
 </div>

 <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
 {t('Elevating Skies, Nurturing Fields')}
 </h1>

 <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed mx-auto lg:mx-0">
 {t('Hero Description')}
 </p>

 {/* Action Buttons */}
 <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
 <a
 href="#advantages"
 className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all text-sm shadow-md hover:shadow-lg"
 >
 <span>{t('Explore Drone Farming')}</span>
 <ArrowRight className="w-4 h-4" />
 </a>

 <Link
 to="/contact"
 className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-emerald-800 bg-white hover:bg-emerald-50 border border-emerald-300 transition-all text-sm shadow-sm"
 >
 <span>{t('Contact us')}</span>
 </Link>
 </div>

 {/* Real Operational Highlights Strip */}
 <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
 <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 transition-colors">
 <div className="text-xl sm:text-2xl font-black text-emerald-700">400+</div>
 <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-0.5">Acres / Day</div>
 </div>
 <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 transition-colors">
 <div className="text-xl sm:text-2xl font-black text-amber-600">90%</div>
 <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-0.5">Water Saved</div>
 </div>
 <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 transition-colors">
 <div className="text-xl sm:text-2xl font-black text-slate-900">7-8 Min</div>
 <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wider mt-0.5">Per Acre</div>
 </div>
 </div>

 </div>

 {/* Right Hero Image Card */}
 <div className="lg:col-span-5">
 <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
 <img
 src="https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/compressed/best_ahz3dGVwx.jpg?updatedAt=1700818274457"
 alt="Agricultural Drone Spraying Field"
 className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-500"
 />
 <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
 
 <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/50 shadow-lg flex items-center justify-between">
 <div>
 <span className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 block">
 Autonomous Flight Operations
 </span>
 <span className="text-sm font-bold text-slate-900">
 Krishi Udaan Field Fleet
 </span>
 </div>
 <Link 
 to="/contact" 
 className="px-3.5 py-1.5 rounded-lg bg-amber-400 text-slate-950 font-bold text-xs hover:bg-amber-300 transition-colors shadow-sm"
 >
 Book Spraying
 </Link>
 </div>
 </div>
 </div>

 </div>
 </div>
 </section>


 {/* =========================================================================
 VIDEO SHOWCASE SECTION (All 4 Original Videos Intact)
 ========================================================================= */}
 <section className="py-20 bg-slate-50 border-b border-slate-200 transition-colors">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 <div className="text-center max-w-3xl mx-auto mb-12">
 <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
 Field Demonstrations
 </span>
 <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
 Unleash the Power of Modern Farming with precision <br />
 <b className="text-emerald-700 font-extrabold">Drone Spraying Services</b> on demand.
 </h2>
 </div>

 <div className="max-w-4xl mx-auto">
 {/* Video Player Frame */}
 <div className="rounded-2xl overflow-hidden bg-slate-900 border border-slate-300 shadow-xl aspect-video relative">
 <iframe 
 src={videos[videoIdx]} 
 title="Krishi Udaan Drone Spraying Demonstration"
 className="w-full h-full border-none"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowFullScreen
 />
 </div>

 {/* Video Playlist Controls */}
 <div className="mt-5 flex items-center justify-between gap-4">
 <button 
 onClick={() => setVideoIdx(prev => prev > 0 ? prev - 1 : videos.length - 1)}
 className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-xs font-bold text-slate-800 transition-colors shadow-sm"
 aria-label="Previous video"
 >
 <ChevronLeft className="w-4 h-4 text-emerald-600" />
 <span>Previous Video</span>
 </button>

 <div className="flex items-center gap-2">
 {videos.map((_, idx) => (
 <button
 key={idx}
 onClick={() => setVideoIdx(idx)}
 className={`h-2.5 rounded-full transition-all ${
 videoIdx === idx 
 ? 'bg-emerald-600 w-8' 
 : 'bg-slate-300 hover:bg-slate-400 w-2.5'
 }`}
 aria-label={`Jump to video ${idx + 1}`}
 />
 ))}
 </div>

 <button 
 onClick={() => setVideoIdx(prev => (prev + 1) % videos.length)}
 className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-xs font-bold text-slate-800 transition-colors shadow-sm"
 aria-label="Next video"
 >
 <span>Next Video</span>
 <ChevronRight className="w-4 h-4 text-emerald-600" />
 </button>
 </div>
 </div>

 </div>
 </section>


 {/* =========================================================================
 ADVANTAGES SECTION: All 8 Cards + 1 Full Width Card (Original Data Intact)
 ========================================================================= */}
 <section id="advantages" className="py-20 bg-white border-b border-slate-200 transition-colors">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
 <div>
 <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
 Unlocking Agriculture's Potential
 </span>
 <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
 Advantages of Drone Spraying
 </h2>
 </div>

 <div>
 <span className="inline-block px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-800 transition-colors">
 Crop Health &amp; Yield Protection
 </span>
 </div>
 </div>

 {/* 8 Cards Grid (2 columns on tablet/desktop) */}
 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 {advantages.map((adv, i) => (
 <div 
 key={i}
 className="rounded-2xl p-6 sm:p-7 bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-center sm:items-start gap-6"
 >
 {/* Image Frame */}
 <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-xl bg-emerald-50/50 p-3 flex-shrink-0 flex items-center justify-center border border-emerald-100 transition-colors">
 <img 
 src={adv.img} 
 alt={adv.title}
 className="max-h-32 max-w-full object-contain"
 loading="lazy"
 />
 </div>

 {/* Content */}
 <div className="flex-1 space-y-1.5 text-center sm:text-left">
 <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block">
 {adv.subtitle}
 </span>
 <h3 className="text-lg font-bold text-slate-900">
 {adv.title}
 </h3>
 <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
 {adv.desc}
 </p>
 </div>
 </div>
 ))}
 </div>

 {/* Full Width 9th Card: Protection from Pests & Dangerous Wildlife */}
 <div className="mt-6 rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-emerald-50/70 via-white to-amber-50/40 border border-slate-200 flex flex-col md:flex-row items-center gap-6 shadow-sm transition-colors">
 <div className="w-36 h-36 md:w-48 md:h-40 rounded-xl bg-white p-3 flex-shrink-0 flex items-center justify-center border border-emerald-100 shadow-sm transition-colors">
 <img 
 src={fullWidthAdvantage.img} onError={(e) => { (e.target as HTMLImageElement).src = '/assets/images/pest.png'; }} 
 alt={fullWidthAdvantage.title}
 className="max-h-32 max-w-full object-contain"
 loading="lazy"
 />
 </div>
 <div className="flex-1 space-y-1.5 text-center md:text-left">
 <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block">
 {fullWidthAdvantage.subtitle}
 </span>
 <h3 className="text-xl font-bold text-slate-900">
 {fullWidthAdvantage.title}
 </h3>
 <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-justify">
 {fullWidthAdvantage.desc}
 </p>
 </div>
 </div>

 </div>
 </section>


 {/* =========================================================================
 SERVICES / WHY CHOOSE US (All 5 Original Services Intact)
 ========================================================================= */}
 <section id="services" className="py-20 bg-slate-50 border-b border-slate-200 transition-colors">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 <div className="max-w-3xl mb-12">
 <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
 Why Choose us?
 </span>
 <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
 Experts in Every Aspect of Crop Lifecycle
 </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
 {services.map((svc, i) => (
 <div 
 key={i}
 className="rounded-2xl p-6 bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col justify-between"
 >
 <div>
 <div className="w-16 h-16 rounded-xl bg-emerald-50/70 p-3 flex items-center justify-center mb-5 border border-emerald-100 transition-colors">
 <img 
 src={svc.img} onError={(e) => { (e.target as HTMLImageElement).src = '/assets/images/expertize.png'; }} 
 alt={svc.title}
 className="max-h-full max-w-full object-contain"
 loading="lazy"
 />
 </div>
 <h3 className="text-lg font-bold text-slate-900 mb-1">
 {svc.title}
 </h3>
 <span className="text-[11px] font-bold text-amber-600 block mb-2">
 {svc.subtitle}
 </span>
 <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
 {svc.desc}
 </p>
 </div>

 <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
 <span className="text-slate-500 font-medium">Krishi Udaan Fleet</span>
 <Link to="/contact" className="text-emerald-700 hover:text-emerald-800 font-bold flex items-center gap-1">
 <span>Enquire</span>
 <ArrowRight className="w-3 h-3" />
 </Link>
 </div>
 </div>
 ))}
 </div>

 </div>
 </section>


 {/* =========================================================================
 SERVICE AREA TWO: Taking Flight (All 3 Original Cards Intact)
 ========================================================================= */}
 <section className="py-20 bg-white border-b border-slate-200 transition-colors">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 <div className="text-center max-w-3xl mx-auto mb-14">
 <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
 Taking Flight
 </span>
 <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
 Elevate Your Farm Operations with Our Drones &amp; Expert Support
 </h2>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 
 {/* Card 1 */}
 <div className="rounded-2xl p-7 bg-slate-50 border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
 <div>
 <div className="w-14 h-14 rounded-xl bg-white p-2.5 flex items-center justify-center mb-5 border border-slate-200 shadow-sm transition-colors">
 <img src="/assets/images/messaging.png" alt="" className="max-h-full max-w-full object-contain" loading="lazy" />
 </div>
 <h3 className="text-base font-bold text-slate-900 mb-2">
 Comprehensive After-Sales Support
 </h3>
 <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
 Our commitment doesn't end with a sale. We provide unmatched support, training, and maintenance to ensure your success.
 </p>
 </div>
 <div className="pt-6 mt-4 border-t border-slate-200">
 <Link to="/contact" className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800">
 <span>Contact Support</span>
 <ArrowRight className="w-3.5 h-3.5" />
 </Link>
 </div>
 </div>

 {/* Card 2 */}
 <div className="rounded-2xl p-7 bg-slate-50 border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
 <div>
 <div className="w-14 h-14 rounded-xl bg-amber-50 p-2.5 flex items-center justify-center mb-5 border border-amber-200 shadow-sm text-amber-600 transition-colors">
 <Play className="w-6 h-6 fill-current" />
 </div>
 <h3 className="text-base font-bold text-slate-900 mb-2">
 Taking Business to New Heights
 </h3>
 <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
 Experience business transformation like never before. Our state-of-the-art drones and expert support will elevate your operations and insights to extraordinary levels.
 </p>
 </div>
 <div className="pt-6 mt-4 border-t border-slate-200">
 <Link to="/contact" className="inline-flex items-center gap-1 text-xs font-bold text-amber-700 hover:text-amber-800">
 <span>Get Started</span>
 <ArrowRight className="w-3.5 h-3.5" />
 </Link>
 </div>
 </div>

 {/* Card 3 */}
 <div className="rounded-2xl p-7 bg-slate-50 border border-slate-200 hover:shadow-md transition-all flex flex-col justify-between">
 <div>
 <div className="w-14 h-14 rounded-xl bg-white p-2.5 flex items-center justify-center mb-5 border border-slate-200 shadow-sm transition-colors">
 <img src="/assets/img/service/service-5.png" alt="" className="max-h-full max-w-full object-contain" loading="lazy" />
 </div>
 <h3 className="text-base font-bold text-slate-900 mb-2">
 Achieve the Extraordinary
 </h3>
 <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
 Reach new heights and achieve extraordinary business outcomes with our advanced drones and expert support. Elevate your business to limitless potential.
 </p>
 </div>
 <div className="pt-6 mt-4 border-t border-slate-200">
 <Link to="/contact" className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800">
 <span>Discover Solutions</span>
 <ArrowRight className="w-3.5 h-3.5" />
 </Link>
 </div>
 </div>

 </div>

 </div>
 </section>


 {/* =========================================================================
 PAN-INDIA OPERATIONS (Original india.png Asset - Scaled & Elevated)
 ========================================================================= */}
 <section className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50 to-white border-b border-slate-200 overflow-hidden relative transition-colors">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 {/* Section Header */}
 <div className="text-center max-w-3xl mx-auto mb-14">
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3 transition-colors">
 <span>{t('Bringing Drones to')}</span>
 </div>
 <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
 {t('Every Corner of India')}
 </h2>
 <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
 Deploying industrial drone fleets across agricultural belts. Certified pilots, rapid charging stations, and high-capacity spraying brought directly to farm gates.
 </p>
 </div>

 {/* Interactive Layout: Cards & Large Scaled Map */}
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
 
 {/* Left Operational Highlights */}
 <div className="lg:col-span-3 space-y-4 order-2 lg:order-1">
 
 <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all">
 <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3 font-bold">
 📍
 </div>
 <h4 className="text-sm font-bold text-slate-900 mb-1">
 Central Hub: Bhopal, MP
 </h4>
 <p className="text-xs text-slate-600 leading-relaxed">
 Headquartered in Govindpura Industrial Area, dispatching rapid multi-drone teams across central Indian crop belts.
 </p>
 </div>

 <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all">
 <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 font-bold">
 ⚡
 </div>
 <h4 className="text-sm font-bold text-slate-900 mb-1">
 7-8 Min / Acre Speed
 </h4>
 <p className="text-xs text-slate-600 leading-relaxed">
 Fast turnaround ensures critical fungicide and pesticide application in narrow morning and evening windows.
 </p>
 </div>

 </div>

 {/* Center: Large, Prominent India Map */}
 <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2 py-4">
 <div className="relative w-full flex justify-center">
 <img 
 src="/assets/images/india.png" 
 alt="Every Corner of India" 
 className="w-auto h-[480px] sm:h-[620px] lg:h-[740px] xl:h-[780px] max-w-full object-contain filter drop-shadow-2xl hover:scale-[1.03] transition-transform duration-500 cursor-pointer"
 loading="lazy"
 />
 </div>
 
 {/* Map Caption Pill */}
 <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs text-slate-700 font-semibold transition-colors">
 <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
 <span>Active Commercial Flight Operations Across India</span>
 </div>
 </div>

 {/* Right Operational Highlights */}
 <div className="lg:col-span-3 space-y-4 order-3">
 
 <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all">
 <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3 font-bold">
 🚜
 </div>
 <h4 className="text-sm font-bold text-slate-900 mb-1">
 400+ Acres / Day Fleet
 </h4>
 <p className="text-xs text-slate-600 leading-relaxed">
 Synchronized commercial multi-hexacopter units supported by mobile generator charging vehicles.
 </p>
 </div>

 <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all">
 <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-3 font-bold">
 🌾
 </div>
 <h4 className="text-sm font-bold text-slate-900 mb-1">
 All Terrains &amp; Slopes
 </h4>
 <p className="text-xs text-slate-600 leading-relaxed">
 Terrain-following radar maintains precise uniform spray height over valleys, terraces, and tall orchards.
 </p>
 </div>

 </div>

 </div>

 {/* Bottom Dispatch Inquiry Strip */}
 <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto transition-colors">
 <div className="text-center sm:text-left">
 <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-0.5">
 Ready to Deploy in Your Region
 </span>
 <h3 className="text-lg sm:text-xl font-bold text-slate-900">
 Want spraying scheduled for your acreage or farmer collective?
 </h3>
 </div>
 <div className="flex items-center gap-3 flex-shrink-0">
 <Link
 to="/contact"
 className="px-5 py-2.5 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 text-xs uppercase tracking-wider transition-colors shadow-sm"
 >
 Book Dispatch
 </Link>
 <a
 href="https://wa.me/919755675433"
 target="_blank"
 rel="noopener noreferrer"
 className="px-5 py-2.5 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-700 text-xs uppercase tracking-wider transition-colors shadow-sm"
 >
 WhatsApp Us
 </a>
 </div>
 </div>

 </div>
 </section>


 {/* =========================================================================
 GALLERY SECTION (All 25 Original ImageKit Assets with Lightbox)
 ========================================================================= */}
 <section id="gallery" className="py-20 bg-white border-b border-slate-200 transition-colors">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 <div className="flex items-center justify-between mb-8">
 <div>
 <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">
 Visual Proof
 </span>
 <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
 Field Operations Gallery
 </h2>
 <p className="text-xs sm:text-sm text-slate-600 mt-1">
 Real operational drone flights across Indian farmlands.
 </p>
 </div>

 <div className="flex items-center gap-2">
 <button
 onClick={() => handleGalleryScroll('left')}
 className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 flex items-center justify-center transition-colors shadow-sm"
 aria-label="Previous gallery image"
 >
 <ChevronLeft className="w-5 h-5" />
 </button>
 <button
 onClick={() => handleGalleryScroll('right')}
 className="w-10 h-10 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 flex items-center justify-center transition-colors shadow-sm"
 aria-label="Next gallery image"
 >
 <ChevronRight className="w-5 h-5" />
 </button>
 </div>
 </div>

 {/* Smooth Carousel Strip */}
 <div 
 ref={galleryRef}
 className="flex gap-4 overflow-x-auto pb-4 scrollbar-none snap-x"
 style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
 >
 {galleryImages.map((img, i) => (
 <div
 key={i}
 className="flex-shrink-0 w-64 h-64 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer group relative snap-start shadow-sm hover:shadow-md transition-colors"
 onClick={() => setLightboxImg(img)}
 >
 <img
 src={img}
 alt={`Krishi Udaan Gallery ${i + 1}`}
 className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
 loading="lazy"
 />
 <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
 <div className="p-2.5 rounded-full bg-amber-400 text-slate-950 shadow-md">
 <Maximize2 className="w-4 h-4" />
 </div>
 </div>
 </div>
 ))}
 </div>

 </div>
 </section>


 {/* =========================================================================
 NEWSLETTER SECTION (Original marketing.png Asset Intact)
 ========================================================================= */}
 <section className="py-20 bg-slate-50 transition-colors">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 
 <div className="rounded-2xl p-8 sm:p-12 bg-white border border-slate-200 shadow-lg transition-colors">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
 
 <div className="lg:col-span-7 space-y-3 text-center lg:text-left">
 <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
 Subscribe now
 </span>
 <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
 Stay in the drone world loop with our latest updates
 </h2>
 <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto lg:mx-0">
 Get seasonal spraying schedules, crop care tips, and drone agricultural insights.
 </p>

 <form 
 onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }}
 className="pt-2 flex flex-col sm:flex-row gap-2 max-w-md mx-auto lg:mx-0"
 >
 <input
 type="email"
 required
 placeholder="Enter your email"
 className="flex-1 px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition-colors"
 />
 <button
 type="submit"
 className="px-6 py-3 rounded-xl font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 text-xs uppercase tracking-wider transition-colors shadow-sm flex items-center justify-center gap-1.5"
 >
 <span>Subscribe</span>
 <ArrowRight className="w-3.5 h-3.5" />
 </button>
 </form>
 </div>

 <div className="lg:col-span-5 flex justify-center lg:justify-end">
 <img
 src="/assets/images/marketing.png"
 alt="Marketing"
 className="max-h-64 w-auto object-contain"
 loading="lazy"
 />
 </div>

 </div>
 </div>

 </div>
 </section>


 {/* Lightbox Modal */}
 {lightboxImg && (
 <div 
 className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-sm flex items-center justify-center p-4"
 onClick={() => setLightboxImg(null)}
 >
 <div 
 className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden border border-slate-300 p-2 shadow-2xl transition-colors"
 onClick={(e) => e.stopPropagation()}
 >
 <button
 onClick={() => setLightboxImg(null)}
 className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-900/80 text-white hover:bg-red-600 transition-colors"
 aria-label="Close modal"
 >
 <X className="w-5 h-5" />
 </button>
 <img
 src={lightboxImg}
 alt="Krishi Udaan Field Gallery Zoom"
 className="max-h-[80vh] w-auto object-contain rounded-xl mx-auto"
 />
 </div>
 </div>
 )}

 </div>
 );
}
