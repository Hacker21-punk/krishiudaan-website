import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* Page Hero */}
      <section className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0a0a0a 100%)' }}>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-lg text-white/60 max-w-xl">Get in Touch with Our Team — We're Here to Help</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24" style={{ background: '#fff' }}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Info */}
            <div>
              <h5 className="tp-subtitle">Contact Information</h5>
              <h2 className="tp-title mb-6">Get in Touch</h2>
              <p className="mb-10 text-lg leading-relaxed" style={{ color: '#666' }}>Have questions about our drone spraying services? We'd love to hear from you.</p>

              <div className="space-y-6">
                {[
                  { icon: '📍', title: 'Address', lines: ['Hanron Tech Innovations Pvt. Ltd., Plot No. 23-B, Sector - D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, MP 462023, India'] },
                  { icon: '📞', title: 'Phone', lines: ['+91-9755675433', '+91 (0)-755-4331833'] },
                  { icon: '✉️', title: 'Email', lines: ['info@krishiudaan.in', 'KrishiUdaanmail@gmail.com'] },
                  { icon: '🕐', title: 'Working Hours', lines: ['Monday - Saturday: 9:00 AM - 6:00 PM', 'Sunday: Closed'] },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="text-2xl shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h3 className="font-bold mb-1" style={{ color: '#1a1a2e' }}>{item.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: '#666' }}>{item.lines.join(', ')}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.5!2d77.45!3d23.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDEzJzQ4LjAiTiA3N8KwMjcnMDAuMCJF!5e0!3m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Krishi Udaan Location"
                />
              </div>
            </div>

            {/* Right - Form */}
            <div className="service-card p-8 lg:p-10 rounded-2xl">
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#1a1a2e' }}>Send us a Message</h3>
              <p className="text-sm mb-8" style={{ color: '#888' }}>Fill out the form below and we'll get back to you shortly.</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h4 className="text-2xl font-bold mb-2" style={{ color: '#1a1a2e' }}>Thank You!</h4>
                  <p style={{ color: '#666' }}>We'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#333' }}>First Name</label>
                      <input type="text" required className="w-full px-5 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all focus:border-amber-400" placeholder="John" style={{ background: '#f9f9f9' }} />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2" style={{ color: '#333' }}>Last Name</label>
                      <input type="text" required className="w-full px-5 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all focus:border-amber-400" placeholder="Doe" style={{ background: '#f9f9f9' }} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#333' }}>Email Address</label>
                    <input type="email" required className="w-full px-5 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all focus:border-amber-400" placeholder="john@example.com" style={{ background: '#f9f9f9' }} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#333' }}>Phone Number</label>
                    <input type="tel" className="w-full px-5 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all focus:border-amber-400" placeholder="+91 98765 43210" style={{ background: '#f9f9f9' }} />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: '#333' }}>Message</label>
                    <textarea required rows={4} className="w-full px-5 py-3 rounded-xl border border-gray-200 text-sm outline-none transition-all focus:border-amber-400 resize-none" placeholder="How can we help you?" style={{ background: '#f9f9f9' }} />
                  </div>
                  <button type="submit" className="tp-btn-yellow w-full py-4 justify-center text-base">
                    Send Message <i className="fas fa-paper-plane"></i>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
