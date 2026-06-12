import { Link } from 'react-router-dom';

const allServices = [
  { icon: '🛩️', title: 'Drone Spraying', desc: 'Our advanced fertilizer drones can spray 1 acre of land in just 7-8 minutes, covering up to 400 acres per day.', features: ['Precision spraying', 'GPS-guided navigation', 'Real-time monitoring', '400 acres/day capacity'] },
  { icon: '📊', title: 'Crop Health Monitoring', desc: 'Advanced sensors and cameras provide real-time data on crop health and growth.', features: ['NDVI imaging', 'Real-time data', 'Growth tracking', 'Disease detection'] },
  { icon: '🎯', title: 'Precision Agriculture', desc: 'Targeted application ensures crops receive necessary nutrients without waste.', features: ['Variable rate application', 'Targeted spraying', 'Minimal waste', 'Eco-friendly'] },
  { icon: '🗺️', title: 'Aerial Survey & Mapping', desc: 'Comprehensive field mapping and aerial surveys for better planning.', features: ['Field mapping', 'Topographic surveys', '3D terrain models', 'Resource planning'] },
  { icon: '🛡️', title: 'Safety Solutions', desc: 'Eliminate direct chemical exposure with remote drone operations.', features: ['Zero chemical exposure', 'Remote operation', 'Safety protocols', 'Training support'] },
  { icon: '🎓', title: 'Training & Support', desc: 'Comprehensive training and ongoing support for farmers.', features: ['Hands-on training', '24/7 support', 'Maintenance services', 'Technical guidance'] },
];

export default function Services() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)' }}>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">Our Services</h1>
          <p className="text-lg text-white/60 max-w-xl">Comprehensive Drone Solutions for Modern Agriculture</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allServices.map((s, i) => (
              <div key={i} className="service-card h-full p-8">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#1a1a2e' }}>{s.title}</h3>
                <p className="text-sm leading-relaxed mb-5" style={{ color: '#666' }}>{s.desc}</p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm" style={{ color: '#555' }}>
                      <i className="fas fa-check text-xs" style={{ color: '#faa61e' }}></i>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-semibold transition-all hover:gap-3" style={{ color: '#faa61e' }}>
                  Get Started <i className="far fa-arrow-right"></i>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">Ready to Transform Your Farming?</h2>
          <p className="text-white/60 mb-10 text-lg max-w-2xl mx-auto">Experience the future of agriculture with our cutting-edge drone spraying technology.</p>
          <Link to="/contact" className="tp-btn-yellow text-base px-10 py-4">
            Contact Us Today <i className="far fa-arrow-right"></i>
          </Link>
        </div>
      </section>
    </>
  );
}
