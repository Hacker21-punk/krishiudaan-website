import { Link } from 'react-router-dom';

export default function About() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)' }}>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">About Us</h1>
          <p className="text-lg text-white/60 max-w-xl">Transforming Indian Agriculture with Drone Technology — One Field at a Time</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img src="/assets/img/creative/creative-hand.png" alt="About Krishi Udaan" loading="lazy" className="rounded-2xl shadow-xl" />
            </div>
            <div>
              <h5 className="tp-subtitle">About Krishi Udaan</h5>
              <h2 className="tp-title mb-6">Transforming Indian Agriculture</h2>
              <div className="space-y-4 mb-8">
                <p className="leading-relaxed" style={{ color: '#666' }}>Krishi Udaan is a pioneering initiative by Hanron Tech Innovations Pvt. Ltd., dedicated to revolutionizing Indian agriculture through advanced drone spraying technology.</p>
                <p className="leading-relaxed" style={{ color: '#666' }}>Our fleet of state-of-the-art fertilizer drones is equipped with precision spraying systems, advanced sensors, and GPS navigation to ensure optimal crop health and maximum yield.</p>
                <p className="leading-relaxed" style={{ color: '#666' }}>With a spraying capacity of 400 acres per day and the ability to cover 1 acre in just 7-8 minutes, we are transforming the way Indian farmers cultivate their crops.</p>
              </div>
              <Link to="/contact" className="tp-btn-yellow">
                Get in Touch <i className="far fa-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24" style={{ background: '#f5f5f5' }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h5 className="tp-subtitle">Our Foundation</h5>
            <h2 className="tp-title">Mission, Vision & Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🎯', title: 'Our Mission', desc: 'To empower Indian farmers with cutting-edge drone technology that enhances productivity, reduces costs, and promotes sustainable agricultural practices.' },
              { icon: '👁️', title: 'Our Vision', desc: "To become India's leading agricultural drone service provider, making precision farming accessible to every farmer." },
              { icon: '❤️', title: 'Our Values', desc: 'Innovation, sustainability, and farmer-first approach. We believe in leveraging technology to solve real agricultural challenges.' },
            ].map((item, i) => (
              <div key={i} className="service-card text-center p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a2e' }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: '400+', l: 'Acres/Day' },
              { n: '90%', l: 'Water Saved' },
              { n: '1000+', l: 'Farmers' },
              { n: '15+', l: 'States' },
            ].map((s, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-extrabold mb-2" style={{ color: '#faa61e' }}>{s.n}</div>
                <div className="text-white/60 font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
