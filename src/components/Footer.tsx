import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const [langOpen, setLangOpen] = useState(false);
  const { language, setLanguage, t } = useLang();

  return (
    <footer className="p-relative">
      <style>{`
        /* Footer Dropdown Styles */
        .footer-dropdown-wrapper {
          margin-top: 15px;
          display: inline-block;
          position: relative;
          text-align: left;
        }
        .footer-dropdown-toggle {
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: rgba(255, 255, 255, 0.9) !important;
          border-radius: 8px !important;
          padding: 8px 16px !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
          display: inline-flex !important;
          align-items: center !important;
          gap: 8px !important;
        }
        .footer-dropdown-toggle:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
        }
        .footer-dropdown-menu {
          background: #0f1c07 !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-radius: 8px !important;
          box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.6) !important;
          padding: 6px !important;
          position: absolute !important;
          bottom: 100% !important;
          left: 0 !important;
          margin-bottom: 8px !important;
          min-width: 160px !important;
          z-index: 1000 !important;
          display: none;
          list-style: none !important;
          margin-left: 0;
          padding-left: 0;
        }
        .footer-dropdown-menu.show {
          display: block !important;
        }
        .footer-dropdown-item {
          color: rgba(255, 255, 255, 0.75) !important;
          border-radius: 6px !important;
          padding: 8px 12px !important;
          font-size: 13px !important;
          font-weight: 500 !important;
          transition: all 0.2s ease !important;
          display: block !important;
          width: 100% !important;
          text-align: left !important;
          background: transparent !important;
          border: none !important;
          cursor: pointer !important;
        }
        .footer-dropdown-item:hover {
          background: rgba(250, 166, 30, 0.12) !important;
          color: var(--tp-theme-primary) !important;
        }
      `}</style>
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
                    {t('Over a Decade in Innovation, and Our Flight Has Just Begun')}
                  </h5>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-5 col-12">
                <div className="tp-footer-button text-start text-md-end">
                  <Link className="tp-btn" to="/contact">
                    {t('Want some spraying?')}<i className="far fa-arrow-right"></i>
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
                  
                  <div className="footer-dropdown-wrapper">
                    <button 
                      className="footer-dropdown-toggle" 
                      type="button"
                      onClick={() => setLangOpen(!langOpen)}
                      aria-expanded={langOpen}
                    >
                      {language === 'English' ? 'English' : language === 'Hindi' ? 'हिंदी (Hindi)' : '日本語 (Japanese)'}
                      <i className="far fa-chevron-up" style={{ fontSize: '10px', color: 'var(--tp-theme-primary)' }}></i>
                    </button>
                    <ul className={`footer-dropdown-menu ${langOpen ? 'show' : ''}`}>
                      <li><button type="button" className="footer-dropdown-item" onClick={() => { setLanguage('English'); setLangOpen(false); }}>English</button></li>
                      <li><button type="button" className="footer-dropdown-item" onClick={() => { setLanguage('Hindi'); setLangOpen(false); }}>हिंदी (Hindi)</button></li>
                      <li><button type="button" className="footer-dropdown-item" onClick={() => { setLanguage('Japanese'); setLangOpen(false); }}>日本語 (Japanese)</button></li>
                    </ul>
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
                    <a href="https://www.instagram.com/krishi_udaan/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.youtube.com/@krishi_udaan" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
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
