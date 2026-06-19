import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

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

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <style>{`
        /* Custom Offcanvas Style Overrides */
        .tpoffcanvas {
          background: linear-gradient(135deg, #0a1403 0%, #081216 100%) !important;
          border-left: 1px solid rgba(255, 255, 255, 0.08) !important;
          box-shadow: -15px 0 40px rgba(0, 0, 0, 0.7) !important;
          backdrop-filter: blur(25px) !important;
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          width: 420px !important;
        }

        @media (max-width: 576px) {
          .tpoffcanvas {
            width: 320px !important;
            padding: 30px 20px !important;
          }
        }

        .tpoffcanvas__close-btn {
          position: absolute !important;
          right: 25px !important;
          top: 25px !important;
          z-index: 10 !important;
        }

        .tpoffcanvas__close-btn .close-btn {
          background: rgba(255, 255, 255, 0.05) !important;
          border: 1px solid rgba(255, 255, 255, 0.1) !important;
          color: #fff !important;
          width: 42px !important;
          height: 42px !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          cursor: pointer !important;
        }

        .tpoffcanvas__close-btn .close-btn:hover {
          background: var(--tp-theme-primary) !important;
          border-color: var(--tp-theme-primary) !important;
          color: #000 !important;
          transform: rotate(90deg) !important;
          box-shadow: 0 0 15px rgba(16, 185, 129, 0.4) !important;
        }

        .tpoffcanvas__contact {
          margin-top: 40px !important;
          clear: both !important;
        }

        .tpoffcanvas__contact span.contact-title {
          font-size: 12px !important;
          font-weight: 800 !important;
          color: var(--tp-theme-primary) !important;
          text-transform: uppercase !important;
          letter-spacing: 2px !important;
          margin-bottom: 25px !important;
          display: inline-block !important;
          position: relative !important;
          padding-bottom: 6px !important;
        }

        .tpoffcanvas__contact span.contact-title::after {
          content: "" !important;
          position: absolute !important;
          left: 0 !important;
          bottom: 0 !important;
          width: 24px !important;
          height: 2px !important;
          background: var(--tp-theme-primary) !important;
        }

        .tpoffcanvas__contact ul {
          padding-left: 0 !important;
          margin-bottom: 40px !important;
          list-style: none !important;
        }

        .tpoffcanvas__contact ul li.contact-card {
          background: rgba(255, 255, 255, 0.03) !important;
          border: 1px solid rgba(255, 255, 255, 0.07) !important;
          border-radius: 14px !important;
          padding: 16px 16px 16px 54px !important;
          margin-bottom: 16px !important;
          position: relative !important;
          transition: all 0.3s ease !important;
          text-align: left !important;
        }

        .tpoffcanvas__contact ul li.contact-card:hover {
          background: rgba(255, 255, 255, 0.05) !important;
          border-color: var(--tp-theme-primary) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.08) !important;
        }

        .tpoffcanvas__contact ul li.contact-card > i {
          position: absolute !important;
          left: 14px !important;
          top: 18px !important;
          width: 28px !important;
          height: 28px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: rgba(16, 185, 129, 0.08) !important;
          color: var(--tp-theme-primary) !important;
          border-radius: 8px !important;
          font-size: 14px !important;
          transition: all 0.3s ease !important;
        }

        .tpoffcanvas__contact ul li.contact-card:hover > i {
          background: var(--tp-theme-primary) !important;
          color: #051009 !important;
        }

        .tpoffcanvas__contact ul li.contact-card a,
        .tpoffcanvas__contact ul li.contact-card span.address-text {
          font-size: 13.5px !important;
          color: rgba(255, 255, 255, 0.85) !important;
          line-height: 1.5 !important;
          font-weight: 500 !important;
          text-decoration: none !important;
          transition: color 0.2s ease !important;
          display: inline-block !important;
        }

        .tpoffcanvas__contact ul li.contact-card a:hover {
          color: var(--tp-theme-primary) !important;
        }

        .tpoffcanvas__contact span.address-text {
          text-transform: none !important;
        }

        /* Dropdown Language Overrides */
        .tpoffcanvas__contact .dropdown-menu {
          background: #0c1a14 !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-radius: 12px !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6) !important;
          padding: 6px !important;
          margin-top: 6px !important;
          width: 100% !important;
          position: absolute !important;
        }

        .tpoffcanvas__contact .dropdown-item {
          color: rgba(255, 255, 255, 0.75) !important;
          border-radius: 8px !important;
          padding: 8px 14px !important;
          font-size: 13px !important;
          font-weight: 500 !important;
          transition: all 0.2s ease !important;
          background: transparent !important;
          display: block !important;
          width: 100% !important;
          text-align: left !important;
          cursor: pointer !important;
        }

        .tpoffcanvas__contact .dropdown-item:hover {
          background: rgba(16, 185, 129, 0.1) !important;
          color: var(--tp-theme-primary) !important;
        }

        /* Newsletter Input Overrides */
        .tpoffcanvas__input {
          margin-bottom: 40px !important;
          text-align: left !important;
        }

        .tpoffcanvas__input p.input-title {
          font-size: 12px !important;
          font-weight: 800 !important;
          color: var(--tp-theme-primary) !important;
          text-transform: uppercase !important;
          letter-spacing: 2px !important;
          margin-bottom: 20px !important;
          display: inline-block !important;
          position: relative !important;
          padding-bottom: 6px !important;
        }

        .tpoffcanvas__input p.input-title::after {
          content: "" !important;
          position: absolute !important;
          left: 0 !important;
          bottom: 0 !important;
          width: 24px !important;
          height: 2px !important;
          background: var(--tp-theme-primary) !important;
        }

        .tpoffcanvas__input form {
          position: relative !important;
        }

        .tpoffcanvas__input input {
          background: rgba(255, 255, 255, 0.02) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          height: 52px !important;
          padding-left: 18px !important;
          padding-right: 60px !important;
          border-radius: 10px !important;
          color: #fff !important;
          font-size: 13.5px !important;
          width: 100% !important;
          transition: all 0.3s ease !important;
        }

        .tpoffcanvas__input input:focus {
          background: rgba(255, 255, 255, 0.04) !important;
          border-color: var(--tp-theme-primary) !important;
          box-shadow: 0 0 12px rgba(250, 166, 30, 0.15) !important;
          outline: none !important;
        }

        .tpoffcanvas__input button {
          height: 42px !important;
          width: 42px !important;
          background: var(--tp-theme-primary) !important;
          color: #000 !important;
          font-size: 14px !important;
          position: absolute !important;
          top: 5px !important;
          right: 5px !important;
          border-radius: 8px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          cursor: pointer !important;
          border: none !important;
        }

        .tpoffcanvas__input button:hover {
          background: #059669 !important;
          transform: scale(1.03) !important;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.3) !important;
        }

        /* Action Buttons Grid */
        .offcanvas-action-grid {
          display: flex !important;
          flex-direction: column !important;
          gap: 12px !important;
          margin-top: 30px !important;
        }

        .offcanvas-action-grid .btn-enquiry {
          background: linear-gradient(135deg, var(--tp-theme-secondary) 0%, #d97706 100%) !important;
          color: #0a2d21 !important;
          font-weight: 700 !important;
          font-size: 13.5px !important;
          padding: 14px 20px !important;
          border-radius: 12px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 4px 15px rgba(250, 166, 30, 0.2) !important;
          text-decoration: none !important;
        }

        .offcanvas-action-grid .btn-enquiry:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(250, 166, 30, 0.4) !important;
          color: #0a2d21 !important;
        }

        .offcanvas-action-grid .btn-whatsapp {
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%) !important;
          color: #fff !important;
          font-weight: 700 !important;
          font-size: 13.5px !important;
          padding: 14px 20px !important;
          border-radius: 12px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 8px !important;
          text-transform: uppercase !important;
          letter-spacing: 1px !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 4px 15px rgba(37, 211, 102, 0.2) !important;
          text-decoration: none !important;
          border: none !important;
          cursor: pointer !important;
        }

        .offcanvas-action-grid .btn-whatsapp:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4) !important;
          color: #fff !important;
        }

        /* Mobile Nav inside Sidebar */
        .tp-offcanvas-menu ul {
          padding-left: 0 !important;
          list-style: none !important;
          text-align: left !important;
          margin-bottom: 0 !important;
        }

        .tp-offcanvas-menu ul li {
          display: block !important;
          float: none !important;
          margin-right: 0 !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
        }

        .tp-offcanvas-menu ul li:last-child {
          border-bottom: none !important;
        }

        .tp-offcanvas-menu ul li a {
          color: rgba(255, 255, 255, 0.8) !important;
          font-size: 15px !important;
          font-weight: 600 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
          padding: 12px 14px !important;
          transition: all 0.3s ease !important;
          text-decoration: none !important;
          border-radius: 8px !important;
        }

        .tp-offcanvas-menu ul li a:hover,
        .tp-offcanvas-menu ul li a.active {
          color: var(--tp-theme-primary) !important;
          background: rgba(16, 185, 129, 0.06) !important;
          padding-left: 20px !important;
        }

        .tp-offcanvas-menu ul li a i {
          font-size: 12px !important;
          opacity: 0.5 !important;
          transition: transform 0.3s ease !important;
        }

        .tp-offcanvas-menu ul li a:hover i {
          opacity: 1 !important;
          transform: translateX(4px) !important;
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
          
          <div className="tpoffcanvas__contact">
            <span className="contact-title">{t('Contact us')}</span>
            <ul>
              <li className="contact-card">
                <i className="fas fa-crosshairs"></i>
                <a 
                  href="https://goo.gl/maps/abHegV4AoiJA6Syd8" 
                  rel="noreferrer" 
                  target="_blank"
                >
                  <strong style={{ display: 'block', color: 'var(--tp-theme-primary)', marginBottom: '4px', fontSize: '13.5px' }}>{t('Our Office')}</strong>
                  <span className="address-text">
                    Hanron Tech Innovations Pvt. Ltd.
                    <br />
                    Plot No. 23-B, Sector - D, Near CIPET
                    <br />
                    JK Road, Govindpura Industrial Area
                    <br />
                    Bhopal, Madhya Pradesh 462023, India
                  </span>
                </a>
              </li>
              <li className="contact-card">
                <i className="fas fa-phone"></i>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <strong style={{ display: 'block', color: 'var(--tp-theme-primary)', marginBottom: '4px', fontSize: '13.5px' }}>{t('Phone Numbers')}</strong>
                  <a href="tel:919755675433">+91-9755675433</a>
                  <a href="tel:+917554331833">+91 (0)-755-4331833</a>
                </div>
              </li>
              <li className="contact-card">
                <i className="fas fa-envelope"></i>
                <div>
                  <strong style={{ display: 'block', color: 'var(--tp-theme-primary)', marginBottom: '4px', fontSize: '13.5px' }}>{t('Email Address')}</strong>
                  <a href="mailto:info@krishiudaan.in">info@krishiudaan.in</a>
                </div>
              </li>
              <li 
                className="contact-card lang-selector-card cursor-pointer" 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                style={{ paddingRight: '20px' }}
              >
                <i className="fas fa-globe"></i>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                  <div style={{ textAlign: 'left' }}>
                    <strong style={{ display: 'block', color: 'var(--tp-theme-primary)', marginBottom: '4px', fontSize: '13.5px' }}>{t('Language')}</strong>
                    <span className="address-text" style={{ fontSize: '13.5px', color: 'rgba(255, 255, 255, 0.85)', fontWeight: 500 }}>
                      {language === 'English' ? 'English' : language === 'Hindi' ? 'हिंदी (Hindi)' : '日本語 (Japanese)'}
                    </span>
                  </div>
                  <i 
                    className="far fa-chevron-down" 
                    style={{ 
                      fontSize: '12px', 
                      color: 'var(--tp-theme-primary)', 
                      transition: 'transform 0.3s ease',
                      transform: langDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  ></i>
                </div>
                <ul className={`dropdown-menu ${langDropdownOpen ? 'show' : ''}`} style={{ display: langDropdownOpen ? 'block' : 'none' }}>
                  <li><span className="dropdown-item cursor-pointer" onClick={(e) => { e.stopPropagation(); setLanguage('English'); setLangDropdownOpen(false); }}>English</span></li>
                  <li><span className="dropdown-item cursor-pointer" onClick={(e) => { e.stopPropagation(); setLanguage('Hindi'); setLangDropdownOpen(false); }}>हिंदी (Hindi)</span></li>
                  <li><span className="dropdown-item cursor-pointer" onClick={(e) => { e.stopPropagation(); setLanguage('Japanese'); setLangDropdownOpen(false); }}>日本語 (Japanese)</span></li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="tpoffcanvas__input d-none d-sm-block">
            <p className="input-title">{t('Get Update')}</p>
            <form className="p-relative" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Enter mail" />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>

          <div className="offcanvas-action-grid">
            <Link to="/contact" className="btn-enquiry cursor-pointer" onClick={() => setOffcanvasOpen(false)}>
              {t('Send Enquiry')} <i className="far fa-arrow-right"></i>
            </Link>
            <a 
              href="https://wa.me/919755675433" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp cursor-pointer"
            >
              {t('WhatsApp')} <i className="fab fa-whatsapp" style={{ fontSize: '16px' }}></i>
            </a>
          </div>

          {/* Mobile links inside offcanvas */}
          <div className="mt-4 pt-4 border-top" style={{ borderTopColor: 'rgba(255, 255, 255, 0.08)' }}>
            <nav className="tp-offcanvas-menu">
              <ul>
                {navItems.map(item => (
                  <li key={item.to}>
                    <Link 
                      to={item.to} 
                      className={location.pathname === item.to ? 'active' : ''}
                      onClick={() => setOffcanvasOpen(false)}
                    >
                      <span>{t(item.label)}</span>
                      <i className="far fa-chevron-right"></i>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
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
