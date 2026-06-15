import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const location = useLocation();

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
          background: #faa61e !important;
          border-color: #faa61e !important;
          color: #000 !important;
          transform: rotate(90deg) !important;
          box-shadow: 0 0 15px rgba(250, 166, 30, 0.4) !important;
        }

        .tpoffcanvas__contact {
          margin-top: 40px !important;
          clear: both !important;
        }

        .tpoffcanvas__contact span.contact-title {
          font-size: 12px !important;
          font-weight: 800 !important;
          color: #faa61e !important;
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
          background: #faa61e !important;
        }

        .tpoffcanvas__contact ul {
          padding-left: 0 !important;
          margin-bottom: 40px !important;
          list-style: none !important;
        }

        .tpoffcanvas__contact ul li.contact-card {
          background: rgba(255, 255, 255, 0.02) !important;
          border: 1px solid rgba(255, 255, 255, 0.05) !important;
          border-radius: 12px !important;
          padding: 16px 16px 16px 54px !important;
          margin-bottom: 16px !important;
          position: relative !important;
          transition: all 0.3s ease !important;
          text-align: left !important;
        }

        .tpoffcanvas__contact ul li.contact-card:hover {
          background: rgba(255, 255, 255, 0.04) !important;
          border-color: rgba(250, 166, 30, 0.2) !important;
          transform: translateY(-2px) !important;
        }

        .tpoffcanvas__contact ul li.contact-card i {
          position: absolute !important;
          left: 14px !important;
          top: 18px !important;
          width: 28px !important;
          height: 28px !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          background: rgba(250, 166, 30, 0.1) !important;
          color: #faa61e !important;
          border-radius: 8px !important;
          font-size: 14px !important;
          transition: all 0.3s ease !important;
        }

        .tpoffcanvas__contact ul li.contact-card:hover i {
          background: #faa61e !important;
          color: #000 !important;
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
          color: #faa61e !important;
        }

        /* Dropdown Language Overrides */
        .tpoffcanvas__contact .dropdown-toggle {
          background: rgba(255, 255, 255, 0.04) !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          color: rgba(255, 255, 255, 0.9) !important;
          border-radius: 10px !important;
          padding: 10px 18px !important;
          font-size: 13px !important;
          font-weight: 600 !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
          width: 100% !important;
          text-align: left !important;
          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;
        }

        .tpoffcanvas__contact .dropdown-toggle:hover {
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(255, 255, 255, 0.15) !important;
        }

        .tpoffcanvas__contact .dropdown-menu {
          background: #0f1c07 !important;
          border: 1px solid rgba(255, 255, 255, 0.08) !important;
          border-radius: 10px !important;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6) !important;
          padding: 6px !important;
          margin-top: 6px !important;
          width: 100% !important;
        }

        .tpoffcanvas__contact .dropdown-item {
          color: rgba(255, 255, 255, 0.75) !important;
          border-radius: 8px !important;
          padding: 8px 14px !important;
          font-size: 13px !important;
          font-weight: 500 !important;
          transition: all 0.2s ease !important;
          background: transparent !important;
        }

        .tpoffcanvas__contact .dropdown-item:hover {
          background: rgba(250, 166, 30, 0.12) !important;
          color: #faa61e !important;
        }

        /* Newsletter Input Overrides */
        .tpoffcanvas__input {
          margin-bottom: 40px !important;
          text-align: left !important;
        }

        .tpoffcanvas__input p.input-title {
          font-size: 12px !important;
          font-weight: 800 !important;
          color: #faa61e !important;
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
          background: #faa61e !important;
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
          border-color: #faa61e !important;
          box-shadow: 0 0 12px rgba(250, 166, 30, 0.15) !important;
          outline: none !important;
        }

        .tpoffcanvas__input button {
          height: 42px !important;
          width: 42px !important;
          background: #faa61e !important;
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
          background: #ffb300 !important;
          transform: scale(1.03) !important;
          box-shadow: 0 0 10px rgba(250, 166, 30, 0.3) !important;
        }

        /* Action Buttons Grid */
        .offcanvas-action-grid {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 12px !important;
          margin-top: 30px !important;
        }

        @media (max-width: 576px) {
          .offcanvas-action-grid {
            grid-template-columns: 1fr !important;
          }
        }

        .offcanvas-action-grid .btn-enquiry {
          background: linear-gradient(135deg, #faa61e 0%, #ff8c00 100%) !important;
          color: #000 !important;
          font-weight: 700 !important;
          font-size: 12.5px !important;
          padding: 13px 18px !important;
          border-radius: 10px !important;
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
          color: #000 !important;
        }

        .offcanvas-action-grid .btn-whatsapp {
          background: linear-gradient(135deg, #25d366 0%, #128c7e 100%) !important;
          color: #fff !important;
          font-weight: 700 !important;
          font-size: 12.5px !important;
          padding: 13px 18px !important;
          border-radius: 10px !important;
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
        .tp-main-menu-mobile ul {
          padding-left: 0 !important;
          list-style: none !important;
          text-align: left !important;
        }

        .tp-main-menu-mobile ul li {
          border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
        }

        .tp-main-menu-mobile ul li:last-child {
          border-bottom: none !important;
        }

        .tp-main-menu-mobile ul li a {
          color: rgba(255, 255, 255, 0.8) !important;
          font-size: 14.5px !important;
          font-weight: 600 !important;
          display: block !important;
          padding: 12px 0 !important;
          transition: all 0.2s ease !important;
          text-decoration: none !important;
        }

        .tp-main-menu-mobile ul li a:hover,
        .tp-main-menu-mobile ul li a.active {
          color: #faa61e !important;
          padding-left: 6px !important;
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
                <div className="tp-menu-bar text-end">
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
              <div className="bar text-end">
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
            <span className="contact-title">Contact us</span>
            <ul>
              <li className="contact-card">
                <i className="fas fa-crosshairs"></i>
                <a 
                  href="https://goo.gl/maps/abHegV4AoiJA6Syd8" 
                  rel="noreferrer" 
                  target="_blank"
                >
                  <strong style={{ display: 'block', color: '#faa61e', marginBottom: '4px', fontSize: '13.5px' }}>Our Office</strong>
                  <span className="address-text">
                    Hanron Tech Innovations Pvt. Ltd. 
                    <br /> 
                    Plot No. 23-B, Sector - D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, Madhya Pradesh 462023, India
                  </span>
                </a>
              </li>
              <li className="contact-card">
                <i className="fas fa-phone"></i>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <strong style={{ display: 'block', color: '#faa61e', marginBottom: '4px', fontSize: '13.5px' }}>Phone Numbers</strong>
                  <a href="tel:919755675433">+91-9755675433</a>
                  <a href="tel:919755675433">+91 (0)-755-4331833</a>
                </div>
              </li>
              <li className="contact-card">
                <i className="fas fa-envelope"></i>
                <div>
                  <strong style={{ display: 'block', color: '#faa61e', marginBottom: '4px', fontSize: '13.5px' }}>Email Address</strong>
                  <a href="mailto:info@krishiudaan.in">info@krishiudaan.in</a>
                </div>
              </li>
              <li className="contact-card" style={{ paddingLeft: '16px' }}>
                <div className="container p-0">
                  <div className="dropdown">
                    <button 
                      className="btn btn-secondary dropdown-toggle" 
                      type="button" 
                      onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                      aria-expanded={langDropdownOpen}
                    >
                      Select Language
                      <i className="far fa-chevron-down" style={{ fontSize: '11px', color: '#faa61e' }}></i>
                    </button>
                    <ul className={`dropdown-menu ${langDropdownOpen ? 'show' : ''}`} style={{ display: langDropdownOpen ? 'block' : 'none' }}>
                      <li><span className="dropdown-item cursor-pointer" onClick={() => setLangDropdownOpen(false)}>English</span></li>
                      <li><span className="dropdown-item cursor-pointer" onClick={() => setLangDropdownOpen(false)}>Hindi</span></li>
                      <li><span className="dropdown-item cursor-pointer" onClick={() => setLangDropdownOpen(false)}>Japanese</span></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="tpoffcanvas__input d-none d-sm-block">
            <p className="input-title">Get Update</p>
            <form className="p-relative" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Enter mail" />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>

          <div className="offcanvas-action-grid">
            <Link to="/contact" className="btn-enquiry cursor-pointer" onClick={() => setOffcanvasOpen(false)}>
              Send Enquiry <i className="far fa-arrow-right"></i>
            </Link>
            <a 
              href="https://wa.me/919755675433" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-whatsapp cursor-pointer"
            >
              WhatsApp <i className="fab fa-whatsapp" style={{ fontSize: '16px' }}></i>
            </a>
          </div>

          {/* Mobile links inside offcanvas */}
          <div className="mt-4 pt-4 border-top">
            <nav className="tp-main-menu tp-main-menu-mobile">
              <ul style={{ display: 'block' }}>
                {navItems.map(item => (
                  <li key={item.to} className="py-2">
                    <Link 
                      to={item.to} 
                      className={location.pathname === item.to ? 'active' : ''}
                      onClick={() => setOffcanvasOpen(false)}
                    >
                      {item.label}
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
