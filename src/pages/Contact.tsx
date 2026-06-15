import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', msg: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) return;

    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', msg: '' });
      // Reset success status after 4 seconds
      setTimeout(() => setStatus('idle'), 4000);
    }, 1000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div className="tp-contact-area pt-200 pb-130">
        <div className="container">
          <div className="row">
            {/* Left Column: Contact details and photo */}
            <div className="col-xl-6 col-lg-6">
              <div className="tp-contct-wrapper contact-space-40">
                <div className="tp-contact-thumb mb-60">
                  <img src="/assets/img/contact/contact-1.jpg" alt="Contact Us" loading="lazy" />
                </div>
                
                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Mail Address</h4>
                  <span>
                    <i className="fas flaticon-email"></i> 
                    <a href="mailto:info@krishiudaan.in">info@krishiudaan.in</a>
                  </span>
                </div>

                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Phone Number</h4>
                  <span>
                    <i className="fas fa-phone"></i> 
                    <a href="tel:+919755675433">+91-9755675433</a>
                  </span>
                </div>

                <div className="tp-contact-info mb-40">
                  <h4 className="contact-title">Landline Number</h4>
                  <span>
                    <i className="fas fa-phone"></i> 
                    <a href="tel:+917554331833">+91 (0)-755-4331833</a>
                  </span>
                </div>

                <div className="tp-contact-info">
                  <h4 className="contact-title">Address line</h4>
                  <span>
                    <i className="fas fa-location"></i> 
                    <a 
                      href="https://www.google.com/maps/dir//Forgewell+Corporation+Plot+No.+23-B+JK+Rd,+near+CIPET,+Sector+-+D,+Govindpura+Industrial+Area+Bhopal,+Madhya+Pradesh+462023/@23.2661524,77.4554368,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x397c69e5ae9a85ff:0x7a76c61bde3cea88" 
                      target="_blank" 
                      rel="noreferrer"
                    >
                      <b>Hanron Tech Innovations Private Limited</b>
                      <br />
                      Plot No. 23-B, Sector - D, Near CIPET, JK Road, Govindpura Industrial Area, Bhopal, Madhya Pradesh 462023, India
                    </a>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact form */}
            <div className="col-xl-6 col-lg-6">
              <div className="tpcontact">
                <h4 className="tp-contact-big-title">For sales and service queries...</h4>
                <div className="tpcontact__form tpcontact__form-3">
                  <form id="contact-form" onSubmit={handleSubmit}>
                    <div className="mb-30">
                      <input 
                        name="name" 
                        type="text" 
                        placeholder="Enter your Name" 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>
                    <div className="mb-30">
                      <input 
                        name="email" 
                        type="email" 
                        placeholder="Enter your Mail" 
                        value={formData.email} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>
                    <div className="mb-30">
                      <textarea 
                        name="msg" 
                        placeholder="Enter your message" 
                        value={formData.msg} 
                        onChange={handleInputChange} 
                        required 
                      />
                    </div>
                    <div className="form-submit">
                      <button 
                        type="submit" 
                        className="tp-btn-yellow" 
                        disabled={status === 'loading'}
                      >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                </div>
                
                <p 
                  className="ajax-response" 
                  style={{ 
                    marginTop: '20px', 
                    fontWeight: 600, 
                    color: status === 'success' ? '#2e7d32' : '#d32f2f', 
                    opacity: status !== 'idle' ? 1 : 0, 
                    transition: 'opacity 0.3s ease' 
                  }}
                >
                  {status === 'success' && 'your message sent successfully'}
                  {status === 'error' && 'Failed to send message. Please try again later.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
