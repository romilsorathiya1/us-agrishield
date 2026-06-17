import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import ScrollAnimations from "../components/ScrollAnimations";
import Footer from "../components/Footer";
import { categories, company, whyChooseUs } from "../data/siteContent";

export default function WhyUs() {
  return (
    <>
      <Navbar />
      <ScrollAnimations />

      <section className="whyus-hero">
        <div className="whyus-hero-bg">
          <Image
            src="/hero-bg.png"
            alt="About US AgriShield"
            fill
            priority
            className="whyus-hero-image"
          />
        </div>
        <div className="whyus-hero-overlay" />
        <div className="whyus-hero-pattern" />

        <div className="whyus-hero-content">
          <div className="whyus-hero-badge">About Us</div>
          <h1 className="whyus-hero-title">
            {company.name} <br />
            <span className="whyus-hero-accent">Agriculture Products</span>
          </h1>
          <p className="whyus-hero-description">
            {company.name} is an agriculture product business based in
            Ahmedabad, Gujarat. We provide focused crop care products across
            insecticides, fungicides, and plant growth regulator categories.
          </p>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content scroll-animate">
              <div className="section-label">Company Details</div>
              <h2 className="section-title">Crop Care Products with Simple Support</h2>
              <p className="section-subtitle">
                We keep our product information and enquiry process direct so
                farmers, dealers, and partners can get the details they need.
              </p>

              <div className="about-story">
                <p>
                  Our product range includes insecticide, fungicide, and PGR
                  solutions such as US Hunter, US Blaster, US Master, and US
                  Defender. Product-specific dosage, pack size, and crop-wise
                  recommendation can be confirmed through our team.
                </p>
                <p>
                  Visit or contact us at our Ahmedabad office for product
                  enquiry, dealership discussion, and business communication.
                </p>
              </div>

              <div className="about-mission-box">
                <div className="about-mission-icon">US</div>
                <div>
                  <h4>Our Purpose</h4>
                  <p>
                    To supply reliable agriculture products and practical
                    guidance that help farmers protect crops and improve crop
                    performance.
                  </p>
                </div>
              </div>
            </div>

            <div className="about-visual scroll-animate">
              <div className="about-image-frame">
                <Image
                  src="/about-farm.png"
                  alt="Agriculture field"
                  width="600"
                  height="480"
                  className="about-farm-image"
                />
                <div className="about-image-accent-green" />
              </div>
              <div className="about-experience-card">
                <div className="about-exp-number">GJ</div>
                <div className="about-exp-text">
                  Ahmedabad <br /> Gujarat
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-strip">
        <div className="container">
          <div className="impact-grid">
            <div className="impact-item scroll-animate">
              <div className="impact-number">4</div>
              <div className="impact-label">Products</div>
              <div className="impact-desc">US Hunter, US Blaster, US Master, US Defender</div>
            </div>
            <div className="impact-item scroll-animate">
              <div className="impact-number">3</div>
              <div className="impact-label">Categories</div>
              <div className="impact-desc">Insecticide, Fungicide, PGR</div>
            </div>
            <div className="impact-item scroll-animate">
              <div className="impact-number">+91</div>
              <div className="impact-label">Phone</div>
              <div className="impact-desc">{company.phoneDisplay}</div>
            </div>
            <div className="impact-item scroll-animate">
              <div className="impact-number">@</div>
              <div className="impact-label">Email</div>
              <div className="impact-desc">{company.email}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <div className="values-header scroll-animate">
            <div className="section-label">Our Values</div>
            <h2 className="section-title">What Drives Us Every Day</h2>
            <p className="section-subtitle">
              Practical agriculture support, clear product information, and
              dependable communication.
            </p>
          </div>

          <div className="values-grid">
            {whyChooseUs.map((value, index) => (
              <div key={value} className="value-card scroll-animate">
                <div className="value-card-top">
                  <div className="value-icon">{String(index + 1).padStart(2, "0")}</div>
                  <h3>{value}</h3>
                </div>
                <p>
                  We focus on making product selection and enquiry easy for
                  farmers, dealers, and agriculture partners.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="advantages-section">
        <div className="container">
          <div className="advantages-header scroll-animate">
            <div className="section-label">Product Focus</div>
            <h2 className="section-title">The {company.name} Range</h2>
            <p className="section-subtitle">
              The website now follows the simple product structure from your
              content plan.
            </p>
          </div>

          <div className="advantages-grid">
            {categories.map((category, index) => (
              <div key={category.slug} className="advantage-card scroll-animate">
                <div className="advantage-number">{String(index + 1).padStart(2, "0")}</div>
                <div className="advantage-content">
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="whyus-cta">
        <div className="whyus-cta-bg-pattern" />
        <div className="whyus-cta-content">
          <h2>Ready to Contact {company.name}?</h2>
          <p>{company.address}</p>
          <div className="whyus-cta-actions">
            <Link href="/contact" className="btn-primary btn-primary-light">
              Get in Touch
              <span>→</span>
            </Link>
            <a href={`tel:+91${company.phone}`} className="btn-outline btn-outline-light">
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
