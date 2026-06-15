import { useState } from 'react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    id: 8,
    img: "/assets/img/team/team-1.jpg",
    name: "Alextina Derexine",
    title: "UI/UX Designer",
    facebook: "http://facebook.com",
    twitter: "http://twitter.com",
    youtube: "https://www.youtube.com/",
    skype: "https://www.skype.com/en/"
  },
  {
    id: 9,
    img: "/assets/img/team/team-5.1.jpg",
    name: "Darrell Steward",
    title: "Web Designer",
    facebook: "http://facebook.com",
    twitter: "http://twitter.com",
    youtube: "https://www.youtube.com/",
    skype: "https://www.skype.com/en/"
  },
  {
    id: 10,
    img: "/assets/img/team/team-5.2.jpg",
    name: "Floyd Miles",
    title: "Graphic Designer",
    facebook: "http://facebook.com",
    twitter: "http://twitter.com",
    youtube: "https://www.youtube.com/",
    skype: "https://www.skype.com/en/"
  },
  {
    id: 11,
    img: "/assets/img/team/team-5.3.jpg",
    name: "Robert Fox",
    title: "Web Developer",
    facebook: "http://facebook.com",
    twitter: "http://twitter.com",
    youtube: "https://www.youtube.com/",
    skype: "https://www.skype.com/en/"
  },
  {
    id: 12,
    img: "/assets/img/team/team-7.jpg",
    name: "Albert Flores",
    title: "App Designer",
    facebook: "http://facebook.com",
    twitter: "http://twitter.com",
    youtube: "https://www.youtube.com/",
    skype: "https://www.skype.com/en/"
  },
  {
    id: 13,
    img: "/assets/img/team/team-2.jpg",
    name: "Dianne Russell",
    title: "Graphic Designer",
    facebook: "http://facebook.com",
    twitter: "http://twitter.com",
    youtube: "https://www.youtube.com/",
    skype: "https://www.skype.com/en/"
  },
  {
    id: 14,
    img: "/assets/img/team/team-3.jpg",
    name: "Jerome Bell",
    title: "React Developer",
    facebook: "http://facebook.com",
    twitter: "http://twitter.com",
    youtube: "https://www.youtube.com/",
    skype: "https://www.skype.com/en/"
  },
  {
    id: 15,
    img: "/assets/img/team/team-5.jpg",
    name: "Farhan Firoz",
    title: "Web Designer",
    facebook: "http://facebook.com",
    twitter: "http://twitter.com",
    youtube: "https://www.youtube.com/",
    skype: "https://www.skype.com/en/"
  }
];

export default function About() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      {/* Breadcrumb */}
      <section 
        className="breadcrumb__area breadcrumb__pt-310 include-bg p-relative" 
        style={{ backgroundImage: 'url(/assets/img/breadcrum/ab-1.1.jpg)' }}
      >
        <div className="ac-about-shape-img z-index-1">
          <img src="/assets/img/breadcrum/ab-shape-1.1.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="breadcrumb__content p-relative z-index-1">
                <h3 className="breadcrumb__title">About KrishiUdaan</h3>
                <Link className="tp-btn-white-border" to="/">
                  Know More <i className="far fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content Area */}
      <div className="ac-about-content-area pt-130">
        <div className="container">
          <div className="ac-border-bottom ac-bottom-space">
            <div className="row">
              <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
                <div className="ac-about-left">
                  <h3 className="ac-ab-title">
                    <a href="#">Building software for world changers</a>
                  </h3>
                  <div className="ac-play-button">
                    <button className="popup-video" onClick={() => setVideoOpen(true)}>
                      <i className="far fa-play"></i>
                    </button>
                    <span>See Demo Video</span>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
                <div className="ac-about-right">
                  <p className="pb-25">
                    KrishiUdaan builds digital products that let people do things differently. Share your challenge with our team, and we’ll work with you to deliver a revolutionary digital product. Our clients have changed the way people do banking, listen to music.
                  </p>
                  <p>
                    learn languages, and rent bikes. Their products have been featured in TechCrunch, Business Insider, and Product Hunt.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Area */}
          <div className="row ac-testimonial-space">
            <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".3s" data-wow-delay=".5s">
              <div className="ac-testimonial-info">
                <div className="actestimonial">
                  <div className="actestimonial__icon">
                    <img src="/assets/img/about/testi-7.png" alt="" />
                  </div>
                  <div className="actestimonial__position">
                    <h4 className="ac-client-name"><a href="#">Wiktor Schmidt</a></h4>
                    <span>Executive Chairman (orix)</span>
                  </div>
                  <div className="actestimonial__paragraph">
                    <p>
                      <span><i className="fas fa-quote-right"></i></span>
                      Wow. What a great experience with this copywriter. KrishiUdaan is a very talented digital agnecy. yesterday.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
              <div className="ac-testimonial-right">
                <img src="/assets/img/breadcrum/ab-1.2.jpg" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Area */}
      <div className="ac-chose-area mb-130">
        <div className="container ac-chose-bg">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
              <div className="tp-chose-item mb-30">
                <div className="tpchosebox undefined">
                  <div className="tpchosebox__icon undefined mb-30">
                    <a href="#"><i className="flaticon-group"></i></a>
                  </div>
                  <div className="tpchosebox__content">
                    <h4>
                      <Link to="/services">Professional <br /> Team</Link>
                    </h4>
                    <p>24+ Team Member</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
              <div className="tp-chose-item mb-30">
                <div className="tpchosebox tpchosebox-three">
                  <div className="tpchosebox__icon fea-color-5 mb-30">
                    <a href="#"><i className="fas fa-star"></i></a>
                  </div>
                  <div className="tpchosebox__content">
                    <h4>
                      <Link to="/services">Competitive <br /> Rate</Link>
                    </h4>
                    <p>100% Client Satisfied</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".7s" data-wow-delay=".9s">
              <div className="tp-chose-item mb-30">
                <div className="tpchosebox tpchosebox-two">
                  <div className="tpchosebox__icon fea-color-4 mb-30">
                    <a href="#"><i className="flaticon-web"></i></a>
                  </div>
                  <div className="tpchosebox__content">
                    <h4>
                      <Link to="/services">Certified <br /> Globally</Link>
                    </h4>
                    <p>65.04 k Reach</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-12 wow tpfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
              <div className="tp-chose-item mb-30">
                <div className="tpchosebox undefined">
                  <div className="tpchosebox__icon undefined mb-30">
                    <a href="#"><i className="fas fa-star"></i></a>
                  </div>
                  <div className="tpchosebox__content">
                    <h4>
                      <Link to="/services">Competitive <br /> Rate</Link>
                    </h4>
                    <p>100% Client Satisfied</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Area */}
      <div className="ac-feature-area">
        <div className="container">
          <div className="row ac-feature-space">
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-left">
                <h3 className="ac-feature-title">Creating world class experiences</h3>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="ac-feature-right">
                <p className="pb-25">
                  KrishiUdaan builds digital products that let people do things differently. Share your challenge with our team, and we’ll work with you to deliver a revolutionary digital product. Our clients have changed the way people do banking, listen to music.
                </p>
                <p>
                  learn languages, and rent bikes. Their products have been featured in TechCrunch, Business Insider, and Product Hunt.
                </p>
              </div>
            </div>
          </div>
          <div className="ac-feature-border-top">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="acfeature mb-50">
                  <div className="ac-circle"></div>
                  <div className="acfeature__item">
                    <h3 className="ac-feature-sm-title">
                      <Link to="/about">Project kickoff</Link>
                    </h3>
                    <p>At KrishiUdaan we specialize designing building, shipping...</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="acfeature mb-50">
                  <div className="ac-circle ac-cirle-color-2"></div>
                  <div className="acfeature__item">
                    <h3 className="ac-feature-sm-title">
                      <Link to="/about">PIdeation</Link>
                    </h3>
                    <p>At KrishiUdaan we specialize designing building, shipping...</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="acfeature mb-50">
                  <div className="ac-circle ac-cirle-color-3"></div>
                  <div className="acfeature__item">
                    <h3 className="ac-feature-sm-title">
                      <Link to="/about">Design Process</Link>
                    </h3>
                    <p>At KrishiUdaan we specialize designing building, shipping...</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6">
                <div className="acfeature mb-50">
                  <div className="ac-circle ac-cirle-color-4"></div>
                  <div className="acfeature__item">
                    <h3 className="ac-feature-sm-title">
                      <Link to="/about">Development</Link>
                    </h3>
                    <p>At KrishiUdaan we specialize designing building, shipping...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Area */}
      <div className="ac-team-area pt-130 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="ac-team-title-section text-center mb-60">
                <h3 className="ac-team-title">People are the key to success</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {teamMembers.map((member) => (
              <div key={member.id} className="col-xl-3 col-lg-3 col-md-6 wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".5s">
                <div className="tpteam mb-30">
                  <div className="tpteam__shape-1">
                    <img src="/assets/img/team/team-shape-5.1.png" alt="" />
                  </div>
                  <div className="tpteam__shape-2">
                    <img src="/assets/img/team/team-shape-5.2.png" alt="" />
                  </div>
                  <div className="tpteam__thumb">
                    <img className="w-100" src={member.img} alt={member.name} loading="lazy" />
                  </div>
                  <div className="tpteam__content">
                    <h4 className="tp-team-sm-title">
                      <Link to="/about">{member.name}</Link>
                    </h4>
                    <h5 className="tp-team-sm-subtitle">
                      <a href="#">{member.title}</a>
                    </h5>
                    <a href={member.facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a href={member.twitter} target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href={member.youtube} target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
                    <a href={member.skype} target="_blank" rel="noreferrer"><i className="fab fa-skype"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Area */}
      <div 
        className="tp-news-letter-area tp-news-letter-bg pt-65 pb-60" 
        style={{ backgroundImage: 'url(/assets/img/news/news-bg.jpg)' }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-7 col-lg-7 col-md-12">
              <div className="tp-news-sub-wrapper pr-50">
                <div className="tp-news-letter-section-box">
                  <h5 className="tp-subtitle subtitle-secondary-color wow tpfadeUp" data-wow-duration=".3s" data-wow-delay=".6s">
                    Get every update
                  </h5>
                  <h2 className="tp-title-sm tp-white-text pb-25 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".8s">
                    A recognizable &amp; awarded partner.. become our partner
                  </h2>
                </div>
                <div className="tp-news-button wow tpfadeUp" data-wow-duration=".7s" data-wow-delay="1s">
                  <Link className="tp-btn-lg-yellow mr-20" to="/contact">Become a Partner</Link>
                  <Link className="tp-btn-sky" to="/about">Press Office</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".8s">
              <div className="tp-news-letter-img text-md-start text-lg-end pr-45">
                <img src="/assets/img/news/news-7.1.png" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video Modal */}
      {videoOpen && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/85 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setVideoOpen(false)}
        >
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 text-white hover:text-gray-300 w-10 h-10 rounded-full flex items-center justify-center transition-all bg-black/50 hover:bg-black/75 z-10"
              onClick={() => setVideoOpen(false)}
              aria-label="Close video"
            >
              <i className="fal fa-times text-xl"></i>
            </button>
            <iframe
              src="https://www.youtube.com/embed/8D6b3McyhhU?autoplay=1"
              title="Demo Video"
              className="w-full h-full border-none"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
}
