import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import ScrollAnimations from "../components/ScrollAnimations";
import Footer from "../components/Footer";
import { categories, company, products, whyChooseUs } from "../data/siteContent";

export default function WhyUs() {
  return (
    <>
      <Navbar />
      <ScrollAnimations />

      <section className="whyus-hero">
          <div className="whyus-hero-bg">
          <Image
            src="/hero-bg.jpeg"
            alt="About US Agrishield"
            fill
            priority
            className="whyus-hero-image"
          />
        </div>
        <div className="whyus-hero-overlay" />
        <div className="whyus-hero-pattern" />

        <div className="whyus-hero-content">
          <h1 className="whyus-hero-title">
            {company.name} <br />
            <span className="whyus-hero-accent">Your Trusted Crop Care Partner</span>
          </h1>
          <p className="whyus-hero-description">
          {company.name} is an Ahmedabad-based agrochemical company committed to providing high-quality crop protection solutions, including fungicides, insecticides, herbicides, and plant growth regulators (PGRs).
          </p>
        </div>
      </section>

      <section className="about-section" id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-content scroll-animate">
              <div className="section-label">Company Details</div>
              <h2 className="section-title"> Leading the Future of Crop Protection</h2>
              <p className="section-subtitle">
                US Agrishield is an Ahmedabad-based agrochemical company dedicated to delivering high-quality crop protection solutions. We focus on helping farmers improve crop health, productivity, and sustainable agricultural growth.</p>

              <div className="about-story">
                <p>
                  Our product portfolio includes fungicides, insecticides, herbicides, and plant growth regulators (PGRs). Every product is developed with a commitment to quality, reliability, and field performance.
                </p>
                <p>
                  We believe in building long-term relationships with farmers, dealers, and distributors by providing trusted products, professional support, and value-driven agricultural solutions across India.
                </p>
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

      <section className="values-section">
        <div className="container">
          <div className="values-header scroll-animate">
            <div className="section-label">Our STRENGTHS</div>
            <h2 className="section-title">Why Farmers Trust US Agrishield</h2>
            <p className="section-subtitle">
              Combining premium quality, fast support, and farmer-focused solutions for better agriculture.
            </p>
          </div>

          <div className="values-grid">
            {whyChooseUs.map((value, index) => (
              <div key={value} className="value-card scroll-animate">
                <div className="value-card-top">
                  <div className="value-icon">{String(index + 1).padStart(2, "0")}</div>
                  <h3>{value.heading}</h3>
                </div>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="advantages-section">
        <div className="container">
          <div className="advantages-header scroll-animate">
            <div className="section-label">Our Crop Care Product Range</div>
            <h2 className="section-title">The {company.name} Range</h2>
            <p className="section-subtitle">
              Explore our range of fungicides, insecticides, herbicides, and plant growth regulators (PGRs), developed to support healthier crops and better yields.
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
          <h2>Ready to Contact <br/> {company.name}?</h2>
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
