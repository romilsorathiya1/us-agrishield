import Link from "next/link";
import Navbar from "../components/Navbar";
import ScrollAnimations from "../components/ScrollAnimations";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { categories, company } from "../data/siteContent";

export default function Contact() {
  return (
    <>
      <Navbar />
      <ScrollAnimations />

      <section className="contact-hero">
        <div className="contact-hero-bg" />
        <div className="contact-hero-overlay" />
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">Contact Us</h1>
          <p className="contact-hero-desc">
            Reach {company.name} for product enquiry, dosage guidance, pack
            sizes, and business communication.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-wrapper scroll-animate">
              <div className="section-label">Enquiry Form</div>
              <h2 className="section-title">Send Us a Message</h2>
              <p className="section-subtitle">
                Share your crop, product interest, and contact details. Our
                team will get back to you.
              </p>
              <ContactForm />
            </div>

            <div className="contact-info-wrapper scroll-animate">
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <p className="contact-info-sub">
                  Call, email, or visit our Ahmedabad office.
                </p>

                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Address</h4>
                      <p>{company.address}</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Phone</h4>
                      <a href={`tel:+91${company.phone}`}>{company.phoneDisplay}</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4>Email</h4>
                      <a href={`mailto:${company.email}`}>{company.email}</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                      </svg>
                    </div>
                    <div>
                      <h4>WhatsApp</h4>
                      <a href={`https://wa.me/91${company.phone}`}>Message on WhatsApp</a>
                    </div>
                  </div>
                </div>

                <div className="contact-social">
                  <h4>Quick Links</h4>
                  <div className="contact-social-links">
                    <a href="#" className="contact-social-link" aria-label="Facebook">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                      </svg>
                    </a>
                    <a href="#" className="contact-social-link" aria-label="Instagram">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                      </svg>
                    </a>
                    <a href={`https://wa.me/91${company.phone}`} className="contact-social-link" aria-label="WhatsApp">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="contact-regions-card">
                <h4>Product Categories</h4>
                <div className="contact-regions-list">
                  {categories.map((category) => (
                    <div key={category.slug} className="contact-region">
                      <span className="contact-region-name">{category.name}</span>
                      <span className="contact-region-desc">{category.products.join(", ")}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-cta">
        <div className="contact-cta-content">
          <h2>Prefer to Call Directly?</h2>
          <p>
            Speak with {company.name} for product availability and enquiry.
          </p>
          <div className="contact-cta-actions">
            <a href={`tel:+91${company.phone}`} className="btn-primary btn-primary-light-alt">
              Call {company.phoneDisplay}
            </a>
            <Link href="/products" className="btn-outline-light">
              Browse Products →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
