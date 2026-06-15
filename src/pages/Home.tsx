import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

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

/* ========== ADVANTAGES DATA ========== */
const advantages = [
  { subtitle: 'Cover More, Faster', title: 'Increased Efficiency', img: '/assets/images/save-time.png', desc: 'Fertilizer drones can cover a larger area of land in a shorter amount of time than traditional spraying methods. This leads to increased efficiency in terms of labor and time. Drones can spray 1 Acre of land in 7-8 mins' },
  { subtitle: 'Targeted Precision, Minimized Waste', title: 'Uniform Spraying & Controlled Dosage', img: '/assets/images/Uniform-Spraying.png', desc: 'Fertilizer drones can precisely target specific areas of the field that require fertilization. By accurately dispensing the right amount of fertilizers and chemicals, fertilizer drones ensure that crops receive the necessary nutrients without unnecessary excess. This targeted application minimizes the wastage of fertilizers and pesticides, preventing excessive runoff and leaching. It also prevents the accumulation of harmful substances in the soil and water bodies, reducing the risk of contamination and pollution.' },
  { subtitle: 'Efficiency in Every Drop', title: 'Save Water', img: '/assets/images/save-water.png', desc: 'Water conservation is no longer a challenge with drone spraying. Switching to drone spraying can lead to an impressive 90% reduction in water usage, ensuring the optimal use of water resources for your crops, promoting sustainability, and preserving this valuable resource.' },
  { subtitle: 'Sustainable Farming, Greener Earth', title: 'Reduced Environmental Impact', img: '/assets/images/environment-friendly.png', desc: 'Fertilizer drones can help reduce the environmental impact of farming by reducing the amount of fertilizer and other chemicals that are needed to maintain crops. This can help prevent soil degradation, as well as reduce the amount of greenhouse gas emissions associated with traditional farming practices.' },
  { subtitle: 'Versatile Farming Solutions', title: 'Adaptable for every type of Terrain', img: '/assets/images/terrain.png', desc: 'Fertilizer drones can be adapted to different types of crops and terrains, making them versatile tools for farmers. They can be used in a variety of conditions, including steep hills, uneven terrain, and hard-to-reach areas of the field.' },
  { subtitle: 'Safety First, Always', title: 'No Chemical Exposure to farmers', img: '/assets/images/chemical_safety.png', desc: 'Traditional spraying methods can be dangerous for farmers who have to handle chemicals and pesticides. With fertilizer drones, the risk of exposure to these chemicals is significantly reduced, leading to improved safety for farmers.' },
  { subtitle: 'Preserving Soil Health, Ensuring Crop Vitality', title: 'Zero Soil Compaction & Prevents Crop Damage', img: '/assets/images/cropdamage.jpeg', desc: "Traditional machinery, such as tractors, can cause soil compaction, which affects soil health, water absorption, and also damages the crops. Fertilizer drones, being aerial vehicles, don't impose direct weight on the soil, thereby zero soil compaction and preserving soil structure." },
  { subtitle: 'Data-Driven Agriculture', title: 'Monitor Health with Real-time Data', img: '/assets/images/crop-health.jpeg', desc: 'Our Fertilizer drones are equipped with advanced sensors and cameras that can provide real-time data on crop health and growth. Farmers can use this data to make informed decisions about when and where to apply fertilizer, as well as other inputs like water and pesticides.' },
];

const fullWidthAdvantage = {
  subtitle: 'Securing Harvests, Shielding Farmers',
  title: 'Protection from Pests & Dangerous Wildlife',
  img: '/assets/images/pest.png',
  desc: 'In traditional farming, the threat of poisonous insect bites, pests is a constant concern for farmers. By using spraying drones, the risk and chances of harmful bites and related health hazards can be significantly minimized thereby safeguarding farmers from potential threats'
};

/* ========== SERVICES DATA ========== */
const services = [
  { title: 'Expertise', subtitle: 'Harnessing Years of Drone Industry Mastery', img: '/assets/images/expertize.png', desc: 'Our seasoned experience in the drone industry uniquely positions us to understand and cater to the distinctive needs of Indian agriculture' },
  { title: 'Affordable', subtitle: 'Smart Farming, Smart Economics', img: '/assets/images/saving.png', desc: 'Our fertilizer drones not only reduce labor costs but also cut down expenses associated with traditional spraying methods enhancing profitability for farmers' },
  { title: 'Cutting-Edge Technology', subtitle: "Pioneering Tomorrow's Farming Today", img: '/assets/images/tech.png', desc: 'Embrace your farming experience with our advanced sensors in drone technology designed to revolutionize Indian agriculture' },
  { title: 'Customized Plans', subtitle: 'Tailored to Your Fields, Aligned with Your Budget', img: '/assets/images/plan.png', desc: "Explore flexible packages that match your crop's unique requirements and budget. Our end-to-end service support ensures a comprehensive solution for your crops" },
  { title: 'Quick Turnaround', subtitle: 'Efficiency Meets Precision', img: '/assets/images/fleet.jpg', desc: 'Spraying capacity of 400 Acres per day, we can spray larger fields in optimum time. We assure swift and meticulous attention to your crops, ensuring optimal care' }
];

export default function Home() {
  const [videoIdx, setVideoIdx] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  const handleGalleryScroll = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = 270; // Width of slide (250px) + gap (20px)
      if (direction === 'left') {
        galleryRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        galleryRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Hero Section */}
      <div className="tp-hero-area tp-hero-space p-relative z-index-1 fix">
        <div className="tp-hero-shape">
          <div className="shape-circle-yellow d-none"></div>
          <div className="shape-circle-blue">
            <img 
              alt="Drone Spraying Hero Background" 
              src="https://ik.imagekit.io/ob62ttt1o/HANRON%20AGRI/compressed/best_ahz3dGVwx.jpg?updatedAt=1700818274457"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="tp-hero-wapper">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7">
                <div className="tp-hero-content">
                  <div className="tp-hero-text">
                    <h1 className="tp-hero-title wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                      Elevating Skies, Nurturing Fields
                    </h1>
                    <p className="wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                      Transforming <b>Indian Agriculture</b> with <b>Drone Spraying</b>. Embark on a journey into the future of agriculture with us. Our smart spraying drones will transform the way you cultivate
                    </p>
                    <div className="tp-hero-button mb-140 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                      <a className="tp-btn-grey" href="#creative">
                        Explore Drone Farming <i className="far fa-arrow-right"></i>
                      </a>
                    </div>
                    <div className="tp-hero-social pb-30 wow tpfadeIn" data-wow-duration=".7s" data-wow-delay="1.2s">
                      <div id="creative" className="tp-hero-social bp-hero-social"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5">
                <div className="tp-hero-big-img wow fadeInRight" data-wow-duration=".7s" data-wow-delay="1.2s">
                  <div className="tada"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-relative">
        <div className="shape-two z-index-1">
          <img src="/assets/img/hero/shape-2.png" alt="" />
        </div>

        {/* Video Slider Section */}
        <div className="tp-creative-area p-relative black-bg pt-140 pb-135 fix">
          <div className="circle-animation testimonial">
            <span className="tp-circle-1"></span>
            <span className="tp-circle-2"></span>
          </div>
          <div className="creative-shape-img">
            <img alt="Creative Hand Decor" src="/assets/img/creative/creative-hand.png" loading="lazy" />
          </div>
          <div className="creative-shape-img-2">
            <img alt="Creative Circle Decor" src="/assets/img/creative/creative-circle-img.png" loading="lazy" />
          </div>

          <div className="container creative-z-index">
            <div className="row">
              <div className="col-lg-12">
                <div className="tp-creative-box text-center">
                  <div className="tp-creative-content mb-110">
                    <h4 className="tp-creative-title">
                      Unleash the Power of Modern Farming with precision
                      <br /> <b>Drone Spraying Services</b> on demand.
                    </h4>
                  </div>

                  <div className="swiper p-relative" style={{ overflow: 'hidden' }}>
                    <div 
                      className="swiper-wrapper" 
                      style={{
                        display: 'flex',
                        transition: 'transform 0.4s ease-in-out',
                        transform: `translate3d(-${videoIdx * 100}%, 0, 0)`
                      }}
                    >
                      {videos.map((vidUrl, index) => (
                        <div key={index} className="swiper-slide w-100 flex-shrink-0" style={{ width: '100%' }}>
                          <iframe 
                            style={{ height: '100%', width: '65%', minHeight: '500px', borderRadius: '1.5%', border: 'none' }} 
                            src={vidUrl} 
                            title="YouTube video player" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      className="swiper-button-prev" 
                      onClick={() => setVideoIdx(prev => prev > 0 ? prev - 1 : videos.length - 1)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', zIndex: 10 }}
                      aria-label="Previous video"
                    />
                    <button 
                      className="swiper-button-next" 
                      onClick={() => setVideoIdx(prev => (prev + 1) % videos.length)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', zIndex: 10 }}
                      aria-label="Next video"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="custom-div"></div>

      {/* Advantages Section */}
      <div className="tp-project-area p-relative pt-130 pb-100">
        <div className="tp-project-shape">
          <img src="/assets/img/project/project-shape.png" alt="" />
        </div>
        <div className="container">
          <div className="row align-items-center mb-15">
            <div className="col-xl-5 col-lg-12 col-md-12">
              <div className="tp-project-section-box">
                <h5 className="tp-subtitle">Unlocking Agriculture's Potential</h5>
                <h2 className="tp-title">Advantages of Drone Spraying</h2>
              </div>
            </div>
            <div className="col-xl-7 col-lg-12 col-md-12">
              <div className="tp-service-tab-button">
                <nav>
                  <div className="nav tp-servicwhye-tab justify-content-xl-end justify-content-lg-center" id="nav-tab" role="tablist">
                    <button className="nav-links active mb-10" type="button">
                      Crop Health and Protection
                    </button>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div className="project-tab-main">
            <div className="row gx-1">
              {advantages.map((adv, i) => (
                <div key={i} className="col-lg-6">
                  <div className="tp-project-box mb-20">
                    <div className="tp-project-img fix mb-45">
                      <img style={{ maxHeight: '200px', backgroundSize: 'contain' }} src={adv.img} alt={adv.title} loading="lazy" />
                    </div>
                    <div className="tp-project-content ml-20">
                      <h5>{adv.subtitle}</h5>
                      <h2 className="pro-lg-title">{adv.title}</h2>
                      <p style={{ textAlign: 'justify' }}>{adv.desc}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Full Width 9th Card */}
              <div className="col-lg-12">
                <div className="tp-project-box mb-20">
                  <div className="tp-project-img fix mb-45">
                    <img 
                      style={{ maxHeight: '200px', backgroundSize: 'contain' }} 
                      src={fullWidthAdvantage.img} 
                      alt={fullWidthAdvantage.title} 
                      loading="lazy" 
                    />
                  </div>
                  <div className="tp-project-content ml-20">
                    <h5>{fullWidthAdvantage.subtitle}</h5>
                    <h2 className="pro-lg-title">{fullWidthAdvantage.title}</h2>
                    <p style={{ textAlign: 'justify' }}>{fullWidthAdvantage.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Area (Why Choose Us) */}
      <div className="tp-service-area pt-190 pb-100 grey-bg p-relative fix">
        <div className="tp-sv-shape-img z-index-1">
          <img src="/assets/img/service/service-shape.png" alt="" />
        </div>
        <div className="circle-animation service">
          <span className="tp-circle-1"></span>
          <span className="tp-circle-2"></span>
        </div>
        <div className="circle-animation service-two">
          <span className="tp-circle-skye"></span>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="tp-service-section-box mb-30 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                <h5 className="tp-subtitle pb-10">Why Choose us?</h5>
                <h2 className="tp-title">Experts in every aspect lifecycle</h2>
              </div>
            </div>

            {services.map((svc, i) => (
              <div key={i} className="col-lg-6 col-md-12 col-12">
                <div className="tp-sv-box wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                  <div className="tp-service-item d-flex mb-30">
                    <div className="tp-sv-img">
                      <img width="100px" src={svc.img} alt={svc.title} loading="lazy" />
                    </div>
                    <div className="tp-sv-content pl-60">
                      <h3 className="tp-sv-title">{svc.title}</h3>
                      <p style={{ color: '#153a46' }}>{svc.subtitle}</p>
                      <p>{svc.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Area Two (Taking Flight) */}
      <div className="tp-service-area-two p-relative black-bg pt-125 pb-145 z-index-1">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-service-section-box-two text-center">
                <h5 className="tp-subtitle pb-10">Taking Flight</h5>
                <h2 className="tp-title tp-white-text pb-35">
                  Elevate Your Business with Our Drones and Expert Support
                </h2>
              </div>
            </div>
          </div>

          <div className="row gx-12">
            <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
              <div className="tp-sv-item-two tp-sv-sky-color mb-30">
                <div className="tp-sv-img mb-40">
                  <img width="100px" src="/assets/images/messaging.png" alt="" loading="lazy" />
                </div>
                <div className="tp-sv-content-tow">
                  <h3 className="tp-sv-product-design">Comprehensive After-Sales Support</h3>
                  <p>Our commitment doesn't end with a sale. We provide unmatched support, training, and maintenance to ensure your success</p>
                </div>
                <div className="tp-sv-icon-two">
                  <Link to="/contact"><i className="fas fa-long-arrow-up"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
              <div className="tp-sv-item-two tp-sv-pink-color mb-30">
                <div className="tp-sv-img mb-40">
                  <img width="100px" alt="" />
                </div>
                <div className="tp-sv-content-tow">
                  <h3 className="tp-sv-product-design">Taking Business to New Heights</h3>
                  <p>Experience business transformation like never before. Our state-of-the-art drones and expert support will elevate your operations and insights to extraordinary levels</p>
                </div>
                <div className="tp-sv-icon-two">
                  <Link to="/contact"><i className="fas fa-long-arrow-up"></i></Link>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 wow tpfadeUp" data-wow-duration="1s" data-wow-delay=".3s">
              <div className="tp-sv-item-two tp-sv-blue-color mb-30">
                <div className="tp-sv-img mb-40">
                  <img width="100px" src="/assets/img/service/service-5.png" alt="" loading="lazy" />
                </div>
                <div className="tp-sv-content-tow">
                  <h3 className="tp-sv-product-design">Achieve the Extraordinary</h3>
                  <p>Reach new heights and achieve extraordinary business outcomes with our advanced drones and expert support. Elevate your business to limitless potential</p>
                </div>
                <div className="tp-sv-icon-two">
                  <Link to="/contact"><i className="fas fa-long-arrow-up"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* India Map Section */}
      <div className="tp-country-area pt-125 fix">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-country-sectiontitle-box text-center">
                <h5 className="tp-subtitle">Bringing Drones to</h5>
                <h2 className="tp-title">
                  Every Corner of{' '}
                  <span className="tp-section-highlight">
                    India
                    <svg width="205" height="11" viewBox="0 0 205 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0L205 11H0V0Z" fill="#faa61e"></path>
                    </svg>
                  </span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-country-img text-center">
                <img style={{ marginTop: '-100px' }} height="700px" src="/assets/images/india.png" alt="India Map" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section with Swiper Scrolling */}
      <div className="container creative-z-index">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-creative-box text-center">
              <h4 className="tp-title">Gallery</h4>
              <div className="swiper p-relative" style={{ overflow: 'hidden' }}>
                <div 
                  ref={galleryRef}
                  className="swiper-wrapper" 
                  style={{ 
                    display: 'flex', 
                    gap: '20px', 
                    overflowX: 'auto', 
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                  }}
                >
                  {galleryImages.map((img, i) => (
                    <div key={i} className="swiper-slide flex-shrink-0" style={{ width: '250px' }}>
                      <div className="fit-image mb-40">
                        <div className="fit-image mb-40">
                          <img 
                            width="100%" 
                            src={img} 
                            alt={`Gallery ${i + 1}`} 
                            loading="lazy" 
                            style={{ height: '250px', objectFit: 'cover', borderRadius: '10px' }} 
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <button 
                  className="swiper-button-prev" 
                  onClick={() => handleGalleryScroll('left')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', zIndex: 10, top: '40%' }}
                  aria-label="Previous gallery image"
                />
                <button 
                  className="swiper-button-next" 
                  onClick={() => handleGalleryScroll('right')}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', zIndex: 10, top: '40%' }}
                  aria-label="Next gallery image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="tp-news-letter-area pb-140 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".4s">
        <div className="container">
          <div 
            className="tp-news-letter-box p-relative" 
            style={{ 
              backgroundImage: 'url(/assets/img/news/news-shape.png)', 
              backgroundRepeat: 'no-repeat', 
              backgroundPosition: 'right', 
              backgroundSize: 'contain' 
            }}
          >
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-8 col-12">
                <div className="tp-news-wrapper pl-90 z-index-1">
                  <div className="tp-news-letter-section-box">
                    <h5 className="tp-subtitle subtitle-secondary-color">Subscribe now</h5>
                    <h2 className="tp-title tp-white-text">
                      Stay in the drone world loop with our latest updates
                    </h2>
                  </div>
                  <div className="tp-news-button p-relative">
                    <form onSubmit={e => e.preventDefault()}>
                      <input type="text" placeholder="Enter your mail" />
                      <button className="tp-submit-button tp-btn-yellow-semilar" type="submit">
                        Subscribe <i className="far fa-arrow-right"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 text-lg-end col-md-4">
                <div className="tp-news-letter-img">
                  <img style={{ maxHeight: '400px' }} src="/assets/images/marketing.png" alt="Marketing" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="tp-news-shape-img">
              <img src="/assets/img/news/news-shape-2.png" alt="" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
