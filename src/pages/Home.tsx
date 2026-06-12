import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

/* ========== WOW.JS-LIKE SCROLL ANIMATION ========== */
function useWow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('animated'); obs.unobserve(el); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function WowDiv({ children, className = '', delay = '0s', ...props }: any) {
  const ref = useWow();
  return <div ref={ref} className={`wow ${className}`} style={{ transitionDelay: delay }} {...props}>{children}</div>;
}

function FadeRight({ children, className = '', ...props }: any) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add('animated'); obs.unobserve(el); }
    }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} className={`fadeInRight ${className}`} {...props}>{children}</div>;
}

/* ========== ADVANTAGES DATA ========== */
const advantages = [
  { subtitle: 'Cover More, Faster', title: 'Increased Efficiency', img: '/assets/images/save-time.png', desc: 'Fertilizer drones can cover a larger area of land in a shorter amount of time than traditional spraying methods. This leads to increased efficiency in terms of labor and time. Drones can spray 1 Acre of land in 7-8 mins' },
  { subtitle: 'Targeted Precision, Minimized Waste', title: 'Uniform Spraying & Controlled Dosage', img: '/assets/images/Uniform-Spraying.png', desc: 'Fertilizer drones can precisely target specific areas of the field that require fertilization. By accurately dispensing the right amount of fertilizers and chemicals, fertilizer drones ensure that crops receive the necessary nutrients without unnecessary excess. This targeted application minimizes the wastage of fertilizers and pesticides, preventing excessive runoff and leaching. It also prevents the accumulation of harmful substances in the soil and water bodies, reducing the risk of contamination and pollution.' },
  { subtitle: 'Efficiency in Every Drop', title: 'Save Water', img: '/assets/images/save-water.png', desc: 'Water conservation is no longer a challenge with drone spraying. Switching to drone spraying can lead to an impressive 90% reduction in water usage, ensuring the optimal use of water resources for your crops, promoting sustainability, and preserving this valuable resource.' },
  { subtitle: 'Sustainable Farming, Greener Earth', title: 'Reduced Environmental Impact', img: '/assets/images/environment-friendly.png', desc: 'Fertilizer drones can help reduce the environmental impact of farming by reducing the amount of fertilizer and other chemicals that are needed to maintain crops. This can help prevent soil degradation, as well as reduce the amount of greenhouse gas emissions associated with traditional farming practices.' },
  { subtitle: 'Versatile Farming Solutions', title: 'Adaptable for every type of Terrain', img: '/assets/images/terrain.png', desc: 'Fertilizer drones can be adapted to different types of crops and terrains, making them versatile tools for farmers. They can be used in a variety of conditions, including steep hills, uneven terrain, and hard-to-reach areas of the field.' },
  { subtitle: 'Safety First, Always', title: 'No Chemical Exposure to farmers', img: '/assets/images/chemical_safety.png', desc: 'Traditional spraying methods can be dangerous for farmers who have to handle chemicals and pesticides. With fertilizer drones, the risk of exposure to these chemicals is significantly reduced, leading to improved safety for farmers.' },
  { subtitle: 'Preserving Soil Health, Ensuring Crop Vitality', title: 'Zero Soil Compaction & Prevents Crop Damage', img: '/assets/images/cropdamage.jpeg', desc: 'Traditional machinery, such as tractors, can cause soil compaction, which affects soil health, water absorption, and also damages the crops. Fertilizer drones, being aerial vehicles, don\'t impose direct weight on the soil, thereby zero soil compaction and preserving soil structure.' },
  { subtitle: 'Data-Driven Agriculture', title: 'Monitor Health with Real-time Data', img: '/assets/images/crop-health.jpeg', desc: 'Our Fertilizer drones are equipped with advanced sensors and cameras that can provide real-time data on crop health and growth. Farmers can use this data to make informed decisions about when and where to apply fertilizer, as well as other inputs like water and pesticides.' },
  { subtitle: 'Securing Harvests, Shielding Farmers', title: 'Protection from Pests & Dangerous Wildlife', img: '/assets/images/pest.png', desc: 'In traditional farming, the threat of poisonous insect bites, pests is a constant concern for farmers. By using spraying drones, the risk and chances of harmful bites and related health hazards can be significantly minimized thereby safeguarding farmers from potential threats' },
];

/* ========== SERVICES DATA ========== */
const services = [
  { title: 'Expertise', subtitle: 'Harnessing Years of Drone Industry Mastery', img: '/assets/images/expertize.png', desc: 'Our seasoned experience in the drone industry uniquely positions us to understand and cater to the distinctive needs of Indian agriculture' },
  { title: 'Affordable', subtitle: 'Smart Farming, Smart Economics', img: '/assets/images/saving.png', desc: 'Our fertilizer drones not only reduce labor costs but also cut down expenses associated with traditional spraying methods enhancing profitability for farmers' },
  { title: 'Cutting-Edge Technology', subtitle: "Pioneering Tomorrow's Farming Today", img: '/assets/images/tech.png', desc: 'Embrace your farming experience with our advanced sensors in drone technology designed to revolutionize Indian agriculture' },
  { title: 'Customized Plans', subtitle: 'Tailored to Your Fields, Aligned with Your Budget', img: '/assets/images/plan.png', desc: "Explore flexible packages that match your crop's unique requirements and budget. Our end-to-end service support ensures a comprehensive solution for your crops" },
  { title: 'Quick Turnaround', subtitle: 'Efficiency Meets Precision', img: '/assets/images/fleet.jpg', desc: 'Spraying capacity of 400 Acres per day, we can spray larger fields in optimum time. We assure swift and meticulous attention to your crops, ensuring optimal care' },
];

/* ========== GALLERY IMAGES ========== */
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

/* ========== YOUTUBE VIDEOS ========== */
const videos = [
  'https://www.youtube.com/embed/VY2PRPduOAY',
  'https://www.youtube.com/embed/ulVOvlXEi_0',
  'https://www.youtube.com/embed/opEM7jHSTX8',
  'https://www.youtube.com/embed/iLspiCQl83g',
];

export default function Home() {
  const [activeAdvantage, setActiveAdvantage] = useState(0);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [videoIdx, setVideoIdx] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  /* Auto-scroll gallery */
  useEffect(() => {
    const timer = setInterval(() => {
      setGalleryIdx(prev => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (galleryRef.current) {
      const width = galleryRef.current.offsetWidth;
      galleryRef.current.scrollTo({ left: galleryIdx * (width / 4 + 16), behavior: 'smooth' });
    }
  }, [galleryIdx]);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="tp-hero-area tp-hero-space p-relative z-10" style={{ background: 'linear-gradient(135deg, #f8fdf8 0%, #eef7ee 50%, #e8f5e8 100%)' }}>
        {/* Decorative blue circle */}
        <div className="hidden lg:block absolute" style={{ top: '10%', right: '5%', width: '500px', height: '500px', borderRadius: '50%', overflow: 'hidden', opacity: 0.15 }}>
          <img src="https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/compressed/best_ahz3dGVwx.jpg?updatedAt=1700818274457" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <WowDiv>
                <h1 className="tp-hero-title">
                  Elevating Skies, Nurturing Fields
                </h1>
              </WowDiv>
              <WowDiv delay="0.1s">
                <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: '#555' }}>
                  Transforming <b>Indian Agriculture</b> with <b>Drone Spraying</b>. Embark on a journey into the future of agriculture with us. Our smart spraying drones will transform the way you cultivate
                </p>
              </WowDiv>
              <WowDiv delay="0.2s">
                <a href="#creative" className="tp-btn-grey">
                  Explore Drone Farming <i className="far fa-arrow-right"></i>
                </a>
              </WowDiv>
            </div>
            <div className="lg:col-span-5 hidden lg:block">
              <FadeRight>
                <div className="relative">
                  <img src="https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/compressed/best_ahz3dGVwx.jpg?updatedAt=1700818274457" alt="Drone Spraying" className="rounded-2xl shadow-2xl" style={{ maxHeight: '450px', width: '100%', objectFit: 'cover' }} />
                </div>
              </FadeRight>
            </div>
          </div>
        </div>

        {/* Hero shape bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <img src="/assets/img/hero/shape-2.png" alt="" className="w-full" style={{ maxHeight: '120px', objectFit: 'cover' }} />
        </div>
      </section>

      {/* ===== CREATIVE / VIDEO SECTION ===== */}
      <section id="creative" className="tp-creative-area pt-24 pb-24 p-relative">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <img src="/assets/img/creative/creative-hand.png" alt="" style={{ width: '300px' }} />
        </div>
        <div className="absolute bottom-0 left-0 opacity-10 pointer-events-none">
          <img src="/assets/img/creative/creative-circle-img.png" alt="" style={{ width: '200px' }} />
        </div>

        {/* Circle animations */}
        <div className="circle-animation tp-circle-1"></div>
        <div className="circle-animation tp-circle-2"></div>

        <div className="container mx-auto px-4 relative z-10">
          <WowDiv>
            <h4 className="tp-creative-title text-center mb-12 max-w-4xl mx-auto">
              Unleash the Power of Modern Farming with precision <b>Drone Spraying Services</b> on demand.
            </h4>
          </WowDiv>

          {/* Video Carousel */}
          <div className="relative max-w-5xl mx-auto">
            <div className="flex items-center gap-4">
              <button onClick={() => setVideoIdx(prev => prev > 0 ? prev - 1 : videos.length - 1)} className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(255,255,255,0.1)', color: '#faa61e' }}>
                <i className="fas fa-chevron-left"></i>
              </button>
              <div className="flex-1 rounded-2xl overflow-hidden" style={{ background: '#111' }}>
                <iframe
                  src={videos[videoIdx]}
                  style={{ height: '500px', width: '100%', border: 'none', borderRadius: '1.5%' }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Drone Video"
                />
              </div>
              <button onClick={() => setVideoIdx(prev => (prev + 1) % videos.length)} className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110" style={{ background: 'rgba(255,255,255,0.1)', color: '#faa61e' }}>
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
            {/* Video dots */}
            <div className="flex justify-center gap-2 mt-4">
              {videos.map((_, i) => (
                <button key={i} onClick={() => setVideoIdx(i)} className={`w-3 h-3 rounded-full transition-all ${i === videoIdx ? 'scale-125' : ''}`} style={{ background: i === videoIdx ? '#faa61e' : 'rgba(255,255,255,0.3)' }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ADVANTAGES SECTION ===== */}
      <section className="tp-project-area pt-24 pb-16 p-relative">
        <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
          <img src="/assets/img/project/project-shape.png" alt="" style={{ width: '300px' }} />
        </div>

        <div className="container mx-auto px-4">
          <WowDiv>
            <div className="text-center mb-12">
              <h5 className="tp-subtitle">Unlocking Agriculture's Potential</h5>
              <h2 className="tp-title">Advantages of Drone Spraying</h2>
            </div>
          </WowDiv>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <button className="nav-links active">
              Crop Health and Protection
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((adv, i) => (
              <WowDiv key={i} delay={`${i * 0.05}s`}>
                <div className="flex gap-5 p-6 rounded-2xl transition-all duration-300 hover:shadow-lg" style={{ background: activeAdvantage === i ? '#fff' : '#fafafa', border: activeAdvantage === i ? '1px solid #eee' : '1px solid transparent' }}
                  onMouseEnter={() => setActiveAdvantage(i)}>
                  <div className="shrink-0" style={{ width: '100px' }}>
                    <img src={adv.img} alt={adv.title} loading="lazy" style={{ maxHeight: '100px', width: '100%', objectFit: 'contain' }} />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: '#faa61e' }}>{adv.subtitle}</h5>
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#1a1a2e' }}>{adv.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: '#666', textAlign: 'justify' }}>{adv.desc}</p>
                  </div>
                </div>
              </WowDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US / SERVICES ===== */}
      <section className="tp-service-area pt-24 pb-16 p-relative">
        {/* Decorative shapes */}
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <img src="/assets/img/service/service-shape.png" alt="" style={{ width: '300px' }} />
        </div>
        <div className="circle-animation tp-circle-1" style={{ borderColor: 'rgba(14,165,233,0.15)' }}></div>
        <div className="circle-animation tp-circle-2" style={{ borderColor: 'rgba(236,72,153,0.15)' }}></div>

        <div className="container mx-auto px-4 relative z-10">
          <WowDiv>
            <div className="text-center mb-12">
              <h5 className="tp-subtitle">Why Choose us?</h5>
              <h2 className="tp-title">Experts in every aspect lifecycle</h2>
            </div>
          </WowDiv>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc, i) => (
              <WowDiv key={i} delay={`${i * 0.1}s`}>
                <div className="service-card h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={svc.img} alt={svc.title} loading="lazy" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                    <div>
                      <h3 className="text-lg font-bold" style={{ color: '#1a1a2e' }}>{svc.title}</h3>
                      <p className="text-sm font-semibold" style={{ color: '#153a46' }}>{svc.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{svc.desc}</p>
                </div>
              </WowDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ELEVATE YOUR BUSINESS ===== */}
      <section className="tp-service-area-two pt-24 pb-28 p-relative z-10">
        <div className="container mx-auto px-4 relative z-10">
          <WowDiv>
            <div className="text-center mb-12">
              <h5 className="tp-subtitle">Taking Flight</h5>
              <h2 className="tp-title tp-white-text pb-8">Elevate Your Business with Our Drones and Expert Support</h2>
            </div>
          </WowDiv>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { color: 'tp-sv-sky-color', title: 'Comprehensive After-Sales Support', img: '/assets/images/messaging.png', desc: 'Our commitment doesn\'t end with a sale. We provide unmatched support, training, and maintenance to ensure your success' },
              { color: 'tp-sv-pink-color', title: 'Taking Business to New Heights', img: '', desc: 'Experience business transformation like never before. Our state-of-the-art drones and expert support will elevate your operations and insights to extraordinary levels' },
              { color: 'tp-sv-blue-color', title: 'Achieve the Extraordinary', img: '/assets/img/service/service-5.png', desc: 'Reach new heights and achieve extraordinary business outcomes with our advanced drones and expert support. Elevate your business to limitless potential' },
            ].map((item, i) => (
              <WowDiv key={i} delay={`${i * 0.15}s`}>
                <div className={`rounded-2xl p-8 h-full ${item.color}`} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  {item.img && <img src={item.img} alt={item.title} loading="lazy" style={{ width: '60px', height: '60px', objectFit: 'contain', marginBottom: '16px' }} />}
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#ccc' }}>{item.desc}</p>
                  <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3" style={{ color: '#faa61e' }}>
                    <i className="fas fa-long-arrow-up"></i>
                  </Link>
                </div>
              </WowDiv>
            ))}
          </div>
        </div>
      </section>

      {/* ===== INDIA MAP SECTION ===== */}
      <section className="tp-country-area pt-24 p-relative">
        <div className="container mx-auto px-4">
          <WowDiv>
            <div className="text-center mb-8">
              <h5 className="tp-subtitle">Bringing Drones to</h5>
              <h2 className="tp-title">
                Every Corner of <span className="tp-section-highlight">India</span>
              </h2>
            </div>
          </WowDiv>
          <WowDiv delay="0.2s">
            <div className="flex justify-center">
              <img src="/assets/images/india.png" alt="India Map" loading="lazy" style={{ maxHeight: '700px', marginTop: '-100px' }} />
            </div>
          </WowDiv>
        </div>
      </section>

      {/* ===== GALLERY SECTION ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <WowDiv>
            <div className="text-center mb-12">
              <h4 className="tp-title">Gallery</h4>
            </div>
          </WowDiv>

          <div className="relative">
            <div ref={galleryRef} className="flex gap-4 overflow-hidden" style={{ scrollBehavior: 'smooth' }}>
              {galleryImages.map((img, i) => (
                <div key={i} className="fit-image shrink-0" style={{ width: 'calc(25% - 12px)' }}>
                  <img src={img} alt={`Gallery ${i + 1}`} loading="lazy" style={{ height: '250px', width: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>
            {/* Gallery nav */}
            <button onClick={() => setGalleryIdx(prev => prev > 0 ? prev - 1 : galleryImages.length - 1)} className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all hover:scale-110" style={{ background: '#faa61e', color: '#fff', boxShadow: '0 4px 15px rgba(250,166,30,0.4)' }}>
              <i className="fas fa-chevron-left"></i>
            </button>
            <button onClick={() => setGalleryIdx(prev => (prev + 1) % galleryImages.length)} className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center z-10 transition-all hover:scale-110" style={{ background: '#faa61e', color: '#fff', boxShadow: '0 4px 15px rgba(250,166,30,0.4)' }}>
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER SECTION ===== */}
      <section className="tp-news-letter-area pb-24 wow tpfadeUp" style={{ backgroundImage: 'url(/assets/img/news/news-shape.png)', backgroundRepeat: 'no-repeat', backgroundPosition: 'right', backgroundSize: 'contain' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <WowDiv>
                <h5 className="tp-subtitle" style={{ color: '#faa61e' }}>Subscribe now</h5>
                <h2 className="tp-title tp-white-text pb-8">Stay in the drone world loop with our latest updates</h2>
              </WowDiv>
              <WowDiv delay="0.1s">
                <form className="flex gap-3" onSubmit={e => e.preventDefault()}>
                  <input type="email" placeholder="Enter your mail" className="flex-1 px-6 py-4 rounded-full border-0 text-sm" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff' }} />
                  <button type="submit" className="tp-btn-yellow-semilar">
                    Subscribe <i className="far fa-arrow-right"></i>
                  </button>
                </form>
              </WowDiv>
            </div>
            <div className="flex justify-center">
              <img src="/assets/images/marketing.png" alt="Subscribe" loading="lazy" style={{ maxHeight: '400px' }} />
            </div>
          </div>
        </div>
        {/* Decorative shape */}
        <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
          <img src="/assets/img/news/news-shape-2.png" alt="" style={{ width: '200px' }} />
        </div>
      </section>
    </>
  );
}
