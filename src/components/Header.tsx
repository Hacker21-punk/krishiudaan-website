import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang, type Language } from '../context/LanguageContext';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOffcanvasOpen(false);
    setLangDropdownOpen(false);
  }, [location]);

  const langOptions: { key: Language; label: string; flag: string }[] = [
    { key: 'English', label: 'English', flag: '🇺🇸' },
    { key: 'Hindi', label: 'हिंदी', flag: '🇮🇳' },
    { key: 'Japanese', label: '日本語', flag: '🇯🇵' },
  ];

  return (
    <>
      <style>{`
        /* =============================================
           OFFCANVAS SIDEBAR — Premium Dark Theme
           ============================================= */
        .tpoffcanvas {
          background: linear-gradient(165deg, #0a1a0f 0%, #06111a 50%, #0a0e14 100%) !important;
          border-left: 1px solid rgba(16, 185, 129, 0.08) !important;
          box-shadow: -20px 0 60px rgba(0, 0, 0, 0.8) !important;
          backdrop-filter: blur(30px) !important;
          font-family: 'Plus Jakarta Sans', 'Inter', sans-serif !important;
          width: 400px !important;
          overflow-y: auto !important;
          overflow-x: hidden !important;
          padding: 0 !important;
        }

        @media (max-width: 576px) {
          .tpoffcanvas {
            width: 100vw !important;
            max-width: 360px !important;
          }
        }

        .sidebar-inner {
          padding: 32px 28px 40px !important;
        }

        @media (max-width: 576px) {
          .sidebar-inner {
            padding: 28px 20px 36px !important;
          }
        }

        /* Close Button */
        .tpoffcanvas__close-btn {
          position: absolute !important;
          right: 20px !important;
          top: 20px !important;
          z-index: 10 !important;
        }

        .tpoffcanvas__close-btn .close-btn {
          background: rgba(255, 255, 255, 0.04) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          color: rgba(255, 255, 255, 0.7) !important;
          width: 40px !important;
          height: 40px !important;
          border-radius: 10px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.25s ease !important;
          cursor: pointer !important;
          font-size: 16px !important;
        }

        .tpoffcanvas__close-btn .close-btn:hover {
          background: rgba(239, 68, 68, 0.12) !important;
          border-color: rgba(239, 68, 68, 0.3) !important;
          color: #ef4444 !important;
          transform: rotate(90deg) !important;
        }

        /* Section Label */
        .sidebar-section-label {
          font-size: 10px !important;
          font-weight: 700 !important;
          color: rgba(255, 255, 255, 0.35) !important;
          text-transform: uppercase !important;
          letter-spacing: 2.5px !important;
          margin-bottom: 16px !important;
          display: block !important;
        }

        /* Contact Cards Container */
        .sidebar-contact-list {
          padding: 0 !important;
          margin: 0 0 28px 0 !important;
          list-style: none !important;
          display: flex !important;
          flex-direction: column !important;
          gap: 10px !important;
        }

        /* Individual Contact Card */
        .sidebar-contact-card {
          background: rgba(255, 255, 255, 0.025) !important;
          border: 1px solid rgba(255, 255, 255, 0.06) !important;
          border-radius: 12px !important;
          padding: 14px 16px !important;
          display: flex !important;
          align-items: flex-start !important;
          gap: 14px !important;
          transition: all 0.25s ease !important;
          text-align: left !important;
        }

        .sidebar-contact-card:hover {
          background: rgba(16, 185, 129, 0.04) !important;
          border-color: rgba(16, 185, 129, 0.15) !important;
          transform: translateX(2px) !important;
        }

        .sidebar-contact-icon {
          width: 36px !important;
          height: 36px !important;
          min-width: 36px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: rgba(16, 185, 129, 0.08) !important;
          color: var(--tp-theme-primary) !important;
          border-radius: 10px !important;
          font-size: 14px !important;
          transition: all 0.25s ease !important;
        }

        .sidebar-contact-card:hover .sidebar-contact-icon {
          background: var(--tp-theme-primary) !important;
          color: #000 !important;
        }

        .sidebar-contact-body {
          flex: 1 !important;
          min-width: 0 !important;
        }

        .sidebar-contact-label {
          display: block !important;
          font-size: 11px !important;
          font-weight: 700 !important;
          color: var(--tp-theme-primary) !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
          margin-bottom: 4px !important;
        }

        .sidebar-contact-body a,
        .sidebar-contact-body span.sidebar-contact-value {
          font-size: 13px !important;
          color: rgba(255, 255, 255, 0.8) !important;
          line-height: 1.55 !important;
          font-weight: 400 !important;
          text-decoration: none !important;
          display: block !important;
          word-break: break-word !important;
        }

        .sidebar-contact-body a:hover {
          color: var(--tp-theme-primary) !important;
        }

        /* Language Selector */
        .sidebar-lang-section {
          margin-bottom: 28px !important;
          position: relative !important;
        }

        .sidebar-lang-toggle {
          background: rgba(255, 255, 255, 0.025) !important;
          border: 1px solid rgba(255, 255, 255, 0.06) !important;
          border-radius: 12px !important;
          padding: 12px 16px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          cursor: pointer !important;
          transition: all 0.25s ease !important;
          width: 100% !important;
          color: #fff !important;
          font-family: inherit !important;
          font-size: 13px !important;
        }

        .sidebar-lang-toggle:hover {
          background: rgba(16, 185, 129, 0.04) !important;
          border-color: rgba(16, 185, 129, 0.15) !important;
        }

        .sidebar-lang-toggle-left {
          display: flex !important;
          align-items: center !important;
          gap: 12px !important;
        }

        .sidebar-lang-toggle-icon {
          width: 36px !important;
          height: 36px !important;
          min-width: 36px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: rgba(16, 185, 129, 0.08) !important;
          color: var(--tp-theme-primary) !important;
          border-radius: 10px !important;
          font-size: 14px !important;
        }

        .sidebar-lang-current {
          font-size: 13px !important;
          color: rgba(255, 255, 255, 0.8) !important;
          font-weight: 400 !important;
        }

        .sidebar-lang-chevron {
          font-size: 11px !important;
          color: rgba(255, 255, 255, 0.3) !important;
          transition: transform 0.3s ease !important;
        }

        .sidebar-lang-chevron.open {
          transform: rotate(180deg) !important;
        }

        .sidebar-lang-dropdown {
          margin-top: 6px !important;
          background: rgba(10, 20, 14, 0.95) !important;
          border: 1px solid rgba(16, 185, 129, 0.1) !important;
          border-radius: 10px !important;
          overflow: hidden !important;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5) !important;
        }

        .sidebar-lang-option {
          display: flex !important;
          align-items: center !important;
          gap: 10px !important;
          padding: 10px 16px !important;
          font-size: 13px !important;
          font-weight: 500 !important;
          color: rgba(255, 255, 255, 0.7) !important;
          cursor: pointer !important;
          transition: all 0.2s ease !important;
          border: none !important;
          background: transparent !important;
          width: 100% !important;
          text-align: left !important;
          font-family: inherit !important;
        }

        .sidebar-lang-option:hover {
          background: rgba(16, 185, 129, 0.08) !important;
          color: var(--tp-theme-primary) !important;
        }

        .sidebar-lang-option.active {
          color: var(--tp-theme-primary) !important;
          background: rgba(16, 185, 129, 0.06) !important;
        }

        .sidebar-lang-option .lang-check {
          margin-left: auto !important;
          font-size: 11px !important;
          color: var(--tp-theme-primary) !important;
        }

        /* Divider */
        .sidebar-divider {
          height: 1px !important;
          background: rgba(255, 255, 255, 0.05) !important;
          margin: 24px 0 !important;
          border: none !important;
        }

        /* Newsletter Input */
        .sidebar-newsletter {
          margin-bottom: 28px !important;
          text-align: left !important;
        }

        .sidebar-newsletter form {
          position: relative !important;
        }

        .sidebar-newsletter input {
          background: rgba(255, 255, 255, 0.025) !important;
          border: 1px solid rgba(255, 255, 255, 0.06) !important;
          height: 48px !important;
          padding: 0 54px 0 16px !important;
          border-radius: 10px !important;
          color: #fff !important;
          font-size: 13px !important;
          width: 100% !important;
          transition: all 0.25s ease !important;
          font-family: inherit !important;
        }

        .sidebar-newsletter input::placeholder {
          color: rgba(255, 255, 255, 0.25) !important;
        }

        .sidebar-newsletter input:focus {
          background: rgba(255, 255, 255, 0.04) !important;
          border-color: var(--tp-theme-primary) !important;
          outline: none !important;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.08) !important;
        }

        .sidebar-newsletter button {
          height: 38px !important;
          width: 38px !important;
          background: var(--tp-theme-primary) !important;
          color: #000 !important;
          font-size: 13px !important;
          position: absolute !important;
          top: 5px !important;
          right: 5px !important;
          border-radius: 8px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.25s ease !important;
          cursor: pointer !important;
          border: none !important;
        }

        .sidebar-newsletter button:hover {
          background: #059669 !important;
          transform: scale(1.05) !important;
        }

        /* Action Buttons */
        .sidebar-actions {
          display: flex !important;
          flex-direction: column !important;
          gap: 10px !important;
        }

        .sidebar-btn {
          font-weight: 700 !important;
          font-size: 12.5px !important;
          padding: 13px 20px !important;
          border-radius: 10px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;
          text-transform: uppercase !important;
          letter-spacing: 1.2px !important;
          transition: all 0.25s ease !important;
          text-decoration: none !important;
          border: none !important;
          cursor: pointer !important;
        }

        .sidebar-btn-enquiry {
          background: linear-gradient(135deg, #faa61e 0%, #e8930a 100%) !important;
          color: #1a0a00 !important;
          box-shadow: 0 4px 16px rgba(250, 166, 30, 0.15) !important;
        }

        .sidebar-btn-enquiry:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 6px 20px rgba(250, 166, 30, 0.3) !important;
          color: #1a0a00 !important;
        }

        .sidebar-btn-whatsapp {
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%) !important;
          color: #fff !important;
          box-shadow: 0 4px 16px rgba(37, 211, 102, 0.15) !important;
        }

        .sidebar-btn-whatsapp:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.3) !important;
          color: #fff !important;
        }
      `}</style>

      {/* Desktop Header */}
      <header className="d-none d-lg-block">
        <div 
          id="header-sticky" 
          className={`tp-header-area header-transparent pl-165 pr-165 pt-35 ${scrolled ? 'header-sticky' : ''}`}
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xl-3 col-lg-3">
                <div className="tp-logo">
                  <Link to="/">
                    <img src="/assets/img/logo/logo-blue.png" alt="Krishi Udaan" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="tp-main-menu">
                  <nav id="mobile-menu"></nav>
                </div>
              </div>
              <div className="col-xl-2 col-lg-2">
                <div className="tp-menu-bar text-end d-flex align-items-center justify-content-end">
                  <button onClick={() => setOffcanvasOpen(true)} aria-label="Open menu">
                    <i className="fal fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <div 
        id="header-sticky-mobile" 
        className={`tp-md-menu header-transparent d-lg-none pt-40 pb-40 ${scrolled ? 'header-sticky' : ''}`}
      >
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="tp-logo">
                <Link to="/">
                  <img src="/assets/img/logo/logo.png" alt="Krishi Udaan" />
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className="bar text-end d-flex align-items-center justify-content-end">
                <button 
                  className="tp-menu-bar" 
                  type="button" 
                  onClick={() => setOffcanvasOpen(true)}
                  aria-label="Open menu"
                >
                  <i className="fal fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offcanvas Drawer */}
      <div className={`tp-offcanvas-area ${offcanvasOpen ? 'opened' : ''}`}>
        <div className={`tpoffcanvas ${offcanvasOpen ? 'opened' : ''}`}>
          <div className="tpoffcanvas__close-btn">
            <button className="close-btn" onClick={() => setOffcanvasOpen(false)} aria-label="Close menu">
              <i className="fal fa-times"></i>
            </button>
          </div>

          <div className="sidebar-inner">
            {/* Logo */}
            <div style={{ marginBottom: '32px', paddingTop: '8px' }}>
              <Link to="/" onClick={() => setOffcanvasOpen(false)}>
                <img 
                  src="/assets/img/logo/logo-blue.png" 
                  alt="Krishi Udaan" 
                  style={{ height: '40px', filter: 'brightness(1.2)' }} 
                />
              </Link>
            </div>

            {/* Contact Section */}
            <span className="sidebar-section-label">{t('Contact us')}</span>
            <ul className="sidebar-contact-list">
              {/* Office */}
              <li className="sidebar-contact-card">
                <div className="sidebar-contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="sidebar-contact-body">
                  <span className="sidebar-contact-label">{t('Our Office')}</span>
                  <a 
                    href="https://goo.gl/maps/abHegV4AoiJA6Syd8" 
                    rel="noreferrer" 
                    target="_blank"
                  >
                    Hanron Tech Innovations Pvt. Ltd., Plot No. 23-B, Sector&nbsp;-&nbsp;D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, MP 462023
                  </a>
                </div>
              </li>

              {/* Phone */}
              <li className="sidebar-contact-card">
                <div className="sidebar-contact-icon">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div className="sidebar-contact-body">
                  <span className="sidebar-contact-label">{t('Phone Numbers')}</span>
                  <a href="tel:919755675433">+91 97556 75433</a>
                  <a href="tel:+917554331833">+91 755 4331833</a>
                </div>
              </li>

              {/* Email */}
              <li className="sidebar-contact-card">
                <div className="sidebar-contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="sidebar-contact-body">
                  <span className="sidebar-contact-label">{t('Email Address')}</span>
                  <a href="mailto:info@krishiudaan.in">info@krishiudaan.in</a>
                </div>
              </li>
            </ul>

            {/* Language Selector */}
            <span className="sidebar-section-label">{t('Language')}</span>
            <div className="sidebar-lang-section">
              <button 
                className="sidebar-lang-toggle" 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                type="button"
              >
                <div className="sidebar-lang-toggle-left">
                  <div className="sidebar-lang-toggle-icon">
                    <i className="fas fa-globe"></i>
                  </div>
                  <div className="sidebar-lang-toggle-text">
                    <span className="sidebar-lang-current">
                      {langOptions.find(l => l.key === language)?.flag}{' '}
                      {langOptions.find(l => l.key === language)?.label || 'English'}
                    </span>
                  </div>
                </div>
                <i className={`far fa-chevron-down sidebar-lang-chevron ${langDropdownOpen ? 'open' : ''}`}></i>
              </button>

              {langDropdownOpen && (
                <div className="sidebar-lang-dropdown">
                  {langOptions.map(opt => (
                    <button
                      key={opt.key}
                      className={`sidebar-lang-option ${language === opt.key ? 'active' : ''}`}
                      onClick={() => { setLanguage(opt.key); setLangDropdownOpen(false); }}
                      type="button"
                    >
                      <span>{opt.flag}</span>
                      <span>{opt.label}</span>
                      {language === opt.key && <i className="fas fa-check lang-check"></i>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <hr className="sidebar-divider" />

            {/* Newsletter */}
            <span className="sidebar-section-label">{t('Get Update')}</span>
            <div className="sidebar-newsletter">
              <form onSubmit={e => e.preventDefault()}>
                <input type="email" placeholder="Enter your email" />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>

            {/* Action Buttons */}
            <div className="sidebar-actions">
              <Link 
                to="/contact" 
                className="sidebar-btn sidebar-btn-enquiry" 
                onClick={() => setOffcanvasOpen(false)}
              >
                {t('Send Enquiry')} <i className="far fa-arrow-right"></i>
              </Link>
              <a 
                href="https://wa.me/919755675433" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="sidebar-btn sidebar-btn-whatsapp"
              >
                {t('WhatsApp')} <i className="fab fa-whatsapp" style={{ fontSize: '15px' }}></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Body Overlay */}
      <div 
        className={`body-overlay ${offcanvasOpen ? 'apply' : ''}`} 
        onClick={() => setOffcanvasOpen(false)} 
      />
    </>
  );
}
