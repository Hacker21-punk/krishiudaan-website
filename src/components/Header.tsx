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
              <i className="fal fa-times-hexagon"></i>
            </button>
          </div>
          
          <div className="tpoffcanvas__contact">
            <span>Contact us</span>
            <ul>
              <li>
                <i className="fas fa-location"></i>
                <a 
                  href="https://goo.gl/maps/abHegV4AoiJA6Syd8" 
                  rel="noreferrer" 
                  target="_blank"
                >
                  Hanron Tech Innovations Pvt. Ltd. 
                  <br /> 
                  Plot No. 23-B, Sector - D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, Madhya Pradesh 462023, India
                </a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <a href="tel:919755675433">+91-9755675433</a>
                <br />
                <a href="tel:919755675433">+91 (0)-755-4331833</a>
                <br />
              </li>
              <li>
                <i className="fas flaticon-email"></i>
                <a href="mailto:info@krishiudaan.in">info@krishiudaan.in</a>
              </li>
              <li>
                <div className="container p-0">
                  <div className="dropdown">
                    <button 
                      className="btn btn-secondary dropdown-toggle" 
                      type="button" 
                      onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                      aria-expanded={langDropdownOpen}
                    >
                      Select Language
                    </button>
                    <ul className={`dropdown-menu ${langDropdownOpen ? 'show' : ''}`} style={{ display: langDropdownOpen ? 'block' : 'none' }}>
                      <li><span className="dropdown-item cursor-pointer">English</span></li>
                      <li><span className="dropdown-item cursor-pointer">Hindi</span></li>
                      <li><span className="dropdown-item cursor-pointer">Japanese</span></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="tpoffcanvas__input d-none d-sm-block">
            <p>Get Update</p>
            <form className="p-relative" onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Enter mail" />
              <button type="submit">
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>

          <div className="mt-4">
            <Link to="/contact" className="tp-btn-yellow cursor-pointer" onClick={() => setOffcanvasOpen(false)}>
              Send Enquiry <i className="far fa-arrow-right"></i>
            </Link>
            <a 
              href="https://wa.me/919755675433" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="tp-btn-yellow mx-1 cursor-pointer"
            >
              WhatsApp <i style={{ width: '15px' }} className="fab fa-whatsapp"></i>
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
                      style={{ fontSize: '16px', fontWeight: 600, color: '#333' }}
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
