import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setOffcanvasOpen(false); }, [location]);

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/gallery', label: 'Gallery' },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className={`tp-header-area ${scrolled ? 'scrolled' : ''}`} style={{ background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent' }}>
        <div className="container-fluid">
          <div className="row align-items-center" style={{ padding: '0 40px' }}>
            <div className="col-xl-3 col-lg-3">
              <div className="tp-logo">
                <Link to="/">
                  <img src="/assets/img/logo/logo-blue.png" alt="Krishi Udaan" />
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7">
              <div className="tp-main-menu hidden lg:block">
                <nav>
                  <ul>
                    {navItems.map(item => (
                      <li key={item.to}>
                        <Link to={item.to} className={location.pathname === item.to ? 'active' : ''}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2">
              <div className="tp-menu-bar text-end">
                <button onClick={() => setOffcanvasOpen(true)}>
                  <i className="fal fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <div className={`tp-md-menu lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'scrolled' : ''}`} style={{ background: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent', padding: '15px 20px' }}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="tp-logo">
                <Link to="/">
                  <img src="/assets/img/logo/logo.png" alt="Krishi Udaan" style={{ height: '35px' }} />
                </Link>
              </div>
            </div>
            <div className="col-6">
              <div className="text-end">
                <button className="tp-menu-bar" onClick={() => setOffcanvasOpen(true)}>
                  <i className="fal fa-bars" style={{ fontSize: '24px' }}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Offcanvas Menu */}
      <div className={`tp-offcanvas-area ${offcanvasOpen ? 'open' : ''}`}>
        <div className="tpoffcanvas">
          <div className="tpoffcanvas__close-btn">
            <button onClick={() => setOffcanvasOpen(false)}>
              <i className="fal fa-times-hexagon"></i>
            </button>
          </div>
          <div className="tpoffcanvas__contact mt-16">
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#faa61e' }}>Contact us</span>
            <ul className="mt-4">
              <li>
                <i className="fas fa-location" style={{ color: '#faa61e' }}></i>
                <a href="https://goo.gl/maps/abHegV4AoiJA6Syd8" target="_blank" rel="noreferrer">
                  Hanron Tech Innovations Pvt. Ltd.<br />
                  Plot No. 23-B, Sector - D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, Madhya Pradesh 462023, India
                </a>
              </li>
              <li>
                <i className="fas fa-phone" style={{ color: '#faa61e' }}></i>
                <div>
                  <a href="tel:919755675433">+91-9755675433</a><br />
                  <a href="tel:919755675433">+91 (0)-755-4331833</a>
                </div>
              </li>
              <li>
                <i className="fas flaticon-email" style={{ color: '#faa61e' }}></i>
                <a href="mailto:KrishiUdaanmail@gmail.com">info@krishiudaan.in</a>
              </li>
              <li>
                <div className="mt-2">
                  <select className="w-full p-2 rounded border border-gray-200 text-sm" style={{ background: '#f9f9f9' }}>
                    <option>Select Language</option>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Japanese</option>
                  </select>
                </div>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold mb-2" style={{ color: '#333' }}>Get Update</p>
            <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
              <input type="email" placeholder="Enter mail" className="flex-1 px-4 py-2 rounded-lg border border-gray-200 text-sm" />
              <button type="submit" className="px-4 py-2 rounded-lg" style={{ background: '#faa61e', color: '#fff' }}>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
          <div className="flex gap-3 mt-6">
            <Link to="/contact" className="tp-btn-yellow flex-1 text-center" onClick={() => setOffcanvasOpen(false)}>
              Send Enquiry <i className="far fa-arrow-right"></i>
            </Link>
            <a href="https://wa.me/919755675433" target="_blank" rel="noopener noreferrer" className="tp-btn-yellow flex-1 text-center">
              WhatsApp <i className="fab fa-whatsapp" style={{ width: '15px' }}></i>
            </a>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-100">
            <nav className="flex flex-col gap-2">
              {navItems.map(item => (
                <Link key={item.to} to={item.to} className="py-2 px-3 text-sm font-semibold no-underline rounded-lg transition-colors hover:bg-gray-50" style={{ color: '#333' }} onClick={() => setOffcanvasOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Link to="/contact" className="py-2 px-3 text-sm font-semibold no-underline rounded-lg transition-colors hover:bg-gray-50" style={{ color: '#333' }} onClick={() => setOffcanvasOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>

        </div>
      </div>

      {/* Body Overlay */}
      <div className={`body-overlay ${offcanvasOpen ? 'active' : ''}`} onClick={() => setOffcanvasOpen(false)} />
    </>
  );
}
