import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import ScrollAnimations from "./components/ScrollAnimations";
import Footer from "./components/Footer";
import { categories, company, products, whyChooseUs } from "./data/siteContent";

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollAnimations />

      <section className="hero" id="hero">
        <div className="hero-bg">
          <Image
            src="/hero-bg.png"
            alt="Green agricultural field"
            fill
            priority
            className="hero-bg-image"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-pattern" />

        <div className="hero-float-1">
          <div className="float-icon">IN</div>
          <div>
            <div style={{ fontWeight: 700 }}>Insecticides</div>
            <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>US Hunter & US Blaster</div>
          </div>
        </div>
        <div className="hero-float-2">
          <div className="float-icon">PGR</div>
          <div>
            <div style={{ fontWeight: 700 }}>Crop Growth</div>
            <div style={{ fontSize: '0.7rem', opacity: 0.7 }}>US Defender</div>
          </div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-badge">
              <span className="hero-badge-dot" />
              {company.name}
            </div>
            <h1 className="hero-title">
              Agriculture Products <br />
              <span className="hero-title-accent">For Stronger Crops</span>
            </h1>
            <p className="hero-description">
              We provide practical crop care solutions including insecticides,
              fungicides, and PGR products for farmers and agriculture dealers.
              Contact our team for product guidance, pack sizes, and enquiry.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="btn-primary">
                Explore Products
                <span>→</span>
              </Link>
              <a href={`tel:+91${company.phone}`} className="btn-secondary">
                Call Now
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-image">
                <Image
                  src="/products-showcase.png"
                  alt="US AgriShield agriculture products"
                  width={600}
                  height={450}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
              <div className="hero-stats">
                <div className="hero-stat">
                  <div className="hero-stat-value">4</div>
                  <div className="hero-stat-label">Products</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">3</div>
                  <div className="hero-stat-label">Categories</div>
                </div>
                <div className="hero-stat">
                  <div className="hero-stat-value">+91</div>
                  <div className="hero-stat-label">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container">
          <div className="stat-item scroll-animate">
            <div className="stat-number">IN</div>
            <div className="stat-text">Insecticides</div>
          </div>
          <div className="stat-item scroll-animate">
            <div className="stat-number">FU</div>
            <div className="stat-text">Fungicides</div>
          </div>
          <div className="stat-item scroll-animate">
            <div className="stat-number">PGR</div>
            <div className="stat-text">Plant Growth Regulators</div>
          </div>
          <div className="stat-item scroll-animate">
            <div className="stat-number">GJ</div>
            <div className="stat-text">Ahmedabad, Gujarat</div>
          </div>
        </div>
      </section>

      <section className="products" id="products">
        <div className="container">
          <div className="products-header scroll-animate">
            <div className="section-label">Our Products</div>
            <h2 className="section-title">Simple Crop Care Range</h2>
            <p className="section-subtitle">
              Browse the main product families and enquire directly for dosage,
              pack size, and crop-wise recommendation.
            </p>
          </div>

          <div className="products-grid">
            {categories.map((category) => (
              <div key={category.slug} className="product-card scroll-animate">
                <div className="product-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <Link href={`/products/${category.slug}`} className="product-link">
                  Read More <span className="product-link-arrow">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="why-us" id="why-us">
        <div className="why-us-header">
          <div className="section-label">Why Choose Us</div>
          <h2 className="section-title">Focused Support for Agriculture Products</h2>
          <p className="section-subtitle">
            Our work is simple: give farmers and dealers clear product options
            and responsive support.
          </p>
        </div>

        <div className="container">
          <div className="why-us-grid">
            {whyChooseUs.map((item, index) => (
              <div key={item} className="why-us-card scroll-animate">
                <div className="why-us-icon">{String(index + 1).padStart(2, "0")}</div>
                <h3>{item}</h3>
                <p>
                  Contact {company.name} for product information, usage
                  guidance, and business enquiry support.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="container">
          <div className="showcase-image scroll-animate">
            <Image
              src="/products-showcase.png"
              alt="US AgriShield product range"
              width={600}
              height={450}
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="showcase-image-overlay" />
          </div>

          <div className="scroll-animate">
            <div className="section-label">What We Do</div>
            <h2 className="section-title">Crop Protection, Disease Care, and Growth Support</h2>
            <p className="section-subtitle">
              {company.name} keeps the website and enquiry flow simple so you
              can quickly find the right product family.
            </p>

            <div className="showcase-list">
              {products.slice(0, 3).map((product, index) => (
                <div key={product.name} className="showcase-item">
                  <div className="showcase-item-number">{index + 1}</div>
                  <div>
                    <h4>{product.name}</h4>
                    <p>{product.category} - {product.composition}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="cta-content">
          <h2>Need Product Details?</h2>
          <p>
            Call or message {company.name} for product enquiry, dosage guidance,
            and pack-size availability.
          </p>
          <div className="cta-actions">
            <Link href="/contact" className="btn-white">
              Contact Us Today
              <span>→</span>
            </Link>
            <a href={`tel:+91${company.phone}`} className="btn-outline-white">
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
