import { useState } from 'react';
import StarIcon from './StarIcon.jsx';

export default function ContactSection() {
  const [form, setForm] = useState({ Name: '', Company: '', Email: '', Phone: '', Message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('https://formspree.io/f/mvzwaezp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          Name:    form.Name,
          Company: form.Company || 'N/A',
          Email:   form.Email,
          Phone:   form.Phone,
          Message: form.Message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setForm({ Name: '', Company: '', Email: '', Phone: '', Message: '' });
        }, 5000);
      } else {
        const data = await res.json();
        setError(data?.errors?.[0]?.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="inner contact">

      <div className="content__block section-title">
        <p className="h2__subtitle animate-in-up">
          <StarIcon />
          <span>Contact</span>
        </p>
        <br />
        <h2 className="h2__title animate-in-up">Ping Me!</h2>
      </div>

      <div className="content__block grid-block block-grid-large">
        <div className="form-container">

          {/* Success Message */}
          {submitted && (
            <div className="form__reply centered text-center is-visible" style={{ display: 'block' }}>
              <i className="ph-bold ph-smiley reply__icon"></i>
              <p className="reply__title">Done!</p>
              <span className="reply__text">Thanks for your message. I'll get back as soon as possible.</span>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div style={{
              background: 'rgba(255,80,80,0.12)',
              border: '1px solid rgba(255,80,80,0.35)',
              borderRadius: '1rem',
              padding: '1rem 1.4rem',
              marginBottom: '1.2rem',
              color: '#ff6b6b',
              fontSize: '0.95rem'
            }}>
              <i className="ph-bold ph-warning" style={{ marginRight: '0.5rem' }}></i>
              {error}
            </div>
          )}

          {/* Contact Form */}
          {!submitted && (
            <form className="form contact-form" onSubmit={handleSubmit}>
              <div className="container-fluid p-0">
                <div className="row gx-0">
                  <div className="col-12 col-md-6 form__item animate-in-up">
                    <input type="text" name="Name" placeholder="Your Name*" value={form.Name} onChange={handleChange} required />
                  </div>
                  <div className="col-12 col-md-6 form__item animate-in-up">
                    <input type="text" name="Company" placeholder="Company Name" value={form.Company} onChange={handleChange} />
                  </div>
                  <div className="col-12 col-md-6 form__item animate-in-up">
                    <input type="email" name="Email" placeholder="Email Address*" value={form.Email} onChange={handleChange} required />
                  </div>
                  <div className="col-12 col-md-6 form__item animate-in-up">
                    <input type="tel" name="Phone" placeholder="Phone Number*" value={form.Phone} onChange={handleChange} required />
                  </div>
                  <div className="col-12 form__item animate-in-up">
                    <textarea name="Message" placeholder="A Few Words*" value={form.Message} onChange={handleChange} required></textarea>
                  </div>
                  <div className="col-12 form__item animate-in-up">
                    <button className="btn btn-default btn-hover btn-hover-accent" type="submit" disabled={loading}>
                      <span className="btn-caption">{loading ? 'Sending...' : 'Send Message'}</span>
                      <i className={`ph-bold ${loading ? 'ph-circle-notch' : 'ph-paper-plane-tilt'}`}
                         style={loading ? { animation: 'spin 1s linear infinite' } : {}}></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          )}

        </div>
      </div>

      {/* Socials Cards */}
      <div className="content__block grid-block">
        <div className="socials-cards d-flex justify-content-start flex-wrap">
          <div className="socials-cards__item d-flex grid-item-s animate-card-5">
            <div className="socials-cards__card">
              <i className="fa-brands fa-facebook-f"></i>
              <a className="socials-cards__link" href="https://www.facebook.com/share/16YhaneJTu/" target="_blank" rel="noreferrer"></a>
            </div>
          </div>
          <div className="socials-cards__item d-flex grid-item-s animate-card-5">
            <div className="socials-cards__card">
              <i className="ph-bold ph-instagram-logo"></i>
              <a className="socials-cards__link" href="https://www.instagram.com/__hx.rsh404?igsh=MWx0aTZldGFqNGU1Yw==" target="_blank" rel="noreferrer"></a>
            </div>
          </div>
          <div className="socials-cards__item d-flex grid-item-s animate-card-5">
            <div className="socials-cards__card">
              <i className="fa-brands fa-linkedin-in"></i>
              <a className="socials-cards__link" href="https://www.linkedin.com/in/anany-shriwani-04g65/" target="_blank" rel="noreferrer"></a>
            </div>
          </div>
          <div className="socials-cards__item d-flex grid-item-s animate-card-5">
            <div className="socials-cards__card">
              <i className="fa-brands fa-github"></i>
              <a className="socials-cards__link" href="https://github.com/anany404" target="_blank" rel="noreferrer"></a>
            </div>
          </div>
        </div>
      </div>

      <div className="content__block">
        <div className="teaser">
          <p className="teaser__text animate-in-up">Want to connect or say hi? Drop me a message — I'll get back to you soon!</p>
        </div>
      </div>

      <div className="content__block">
        <div className="container-fluid p-0 contact-lines animate-in-up">
          <div className="row g-0 contact-lines__item">
            <div className="col-12 col-md-4 contact-lines__data">
              <p className="contact-lines__title animate-in-up">Location</p>
              <p className="contact-lines__text animate-in-up">
                <a className="text-link-bold" href="https://maps.app.goo.gl/bkZuict7U9Qa7xEz5" target="_blank" rel="noreferrer">Naubasta, Kanpur</a>
              </p>
            </div>
            <div className="col-12 col-md-4 contact-lines__data">
              <p className="contact-lines__title animate-in-up">Phone</p>
              <p className="contact-lines__text animate-in-up">
                <a className="text-link-bold" href="tel:+919129927358">+91 912-992-7358</a>
              </p>
            </div>
            <div className="col-12 col-md-4 contact-lines__data">
              <p className="contact-lines__title animate-in-up">Email</p>
              <p className="contact-lines__text animate-in-up">
                <a className="text-link-bold" href="mailto:abhirajgupta9129@gmail.com?subject=Hello, Contacting via Your Portfolio">abhirajgupta9129@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

    </section>
  );
}