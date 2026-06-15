import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <footer className="p-relative">
      {/* Scroll to Top button handled globally or statically here */}
      <button 
        className="scrollTop d-none d-md-block" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <div className="tp-backto-top">
          <svg width="16" height="58" viewBox="0 0 16 58" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M8.70711 0.292892C8.31659 -0.0976295 7.68342 -0.0976296 7.2929 0.292892L0.928934 6.65685C0.53841 7.04738 0.53841 7.68054 0.928934 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41422L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM9 58L9 1L7 1L7 58L9 58Z" 
              fill="#292930"
            ></path>
          </svg>
        </div>
      </button>

      <div className="footer-clip-shape">
        <svg width="1918" height="98" viewBox="0 0 1918 98" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path 
            d="M435.5 54L0 1V0L1917.5 1L1309 75.5C1263 82 1178.75 88.6471 1176.5 89C1116 98.5 958.667 98.3333 885.5 97C874.167 96.5 856.5 95.5 850.5 95.5C793.5 95.5 554.667 69.3333 435.5 54Z" 
            fill="white"
          ></path>
        </svg>
      </div>

      <div className="tp-clip-height-one"></div>
      <div className="tp-clip-height-two"></div>

      <div className="tp-footer-area tp-footer-space black-bg p-relative fix pt-0">
        <div className="tp-footer-border-shape d-none"></div>
        <div className="tp-footer-border-shape-two"></div>
        <div className="circle-animation footer-animation d-none d-md-block">
          <span className="tp-circle-3"></span>
        </div>

        <div className="container">
          <div className="tp-footer-widget wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".5s">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7 col-md-7 col-12">
                <div className="tp-footer-top">
                  <h5 className="tp-footer-title">
                    Over a Decade in Innovation, and Our Flight Has Just Begun
                  </h5>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 col-12">
                <div className="tp-footer-button text-start text-md-end">
                  <Link className="tp-btn" to="/contact">
                    Want some spraying?<i className="far fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tp-copyright-area pb-90 wow tpfadeUp" data-wow-duration=".5s" data-wow-delay=".7s">
          <div className="container">
            <div className="tp-copyright-box align-items-center">
              <div className="row align-items-center">
                <div className="col-xl-5 col-lg-5 col-md-5 col-12">
                  <div className="tp-copyright-text z-index-1">
                    <p className="m-0">
                      © 2026 Krishi Udaan, All Right Reserved.
                    </p>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-12">
                  <div className="tp-copyright-right text-md-end text-start">
                    <a href="#">Support</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">Terms and conditions</a>
                  </div>
                  
                  <div className="container p-0">
                    <div className="dropdown">
                      <button 
                        className="btn btn-secondary dropdown-toggle" 
                        type="button"
                        onClick={() => setLangOpen(!langOpen)}
                        aria-expanded={langOpen}
                      >
                        Select Language
                      </button>
                      <ul 
                        className={`dropdown-menu ${langOpen ? 'show' : ''}`} 
                        style={{ display: langOpen ? 'block' : 'none' }}
                      >
                        <li><span className="dropdown-item cursor-pointer">English</span></li>
                        <li><span className="dropdown-item cursor-pointer">Hindi</span></li>
                        <li><span className="dropdown-item cursor-pointer">Japanese</span></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="tp-copyright-logo-box">
              <div className="row align-items-center">
                <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                  <div className="tp-copyright-logo mt-35">
                    <Link to="/">
                      <img src="/assets/img/copyright/copyright-logo.png" alt="Krishi Udaan" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-12">
                  <div className="tp-copyright-social text-md-end mt-25">
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-instagram"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
