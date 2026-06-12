import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      {/* Footer CTA */}
      <section className="tp-footer-area relative" style={{ background: '#0a0a0a' }}>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h5 className="tp-footer-title">
                Over a Decade in Innovation, and Our Flight Has Just Begun
              </h5>
            </div>
            <Link to="/contact" className="tp-btn inline-flex items-center gap-2">
              Want some spraying? <i className="far fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Copyright */}
      <footer className="tp-copyright-area" style={{ background: '#111' }}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Link to="/">
                <img src="/assets/img/copyright/copyright-logo.png" alt="Krishi Udaan" style={{ height: '24px', opacity: 0.5 }} />
              </Link>
              <p className="text-sm" style={{ color: '#999' }}>
                © 2026 Krishi Udaan, All Right Reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex gap-4 text-sm" style={{ color: '#999' }}>
                <a href="#" className="no-underline hover:text-white transition-colors" style={{ color: '#999' }}>Support</a>
                <a href="#" className="no-underline hover:text-white transition-colors" style={{ color: '#999' }}>Privacy policy</a>
                <a href="#" className="no-underline hover:text-white transition-colors" style={{ color: '#999' }}>Terms and conditions</a>
              </div>
              <div className="flex gap-3">
                {[
                  { icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
                  { icon: 'fab fa-facebook-f', label: 'Facebook' },
                  { icon: 'fab fa-instagram', label: 'Instagram' },
                  { icon: 'fab fa-youtube', label: 'YouTube' },
                ].map((social, i) => (
                  <a key={i} href="#" aria-label={social.label} className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110" style={{ background: 'rgba(255,255,255,0.1)', color: '#999' }}>
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
