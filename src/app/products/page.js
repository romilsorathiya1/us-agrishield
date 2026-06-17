import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import ScrollAnimations from "../components/ScrollAnimations";
import Footer from "../components/Footer";
import { categories, company, products } from "../data/siteContent";

export default function Products() {
  return (
    <>
      <Navbar />
      <ScrollAnimations />

      <section className="prod-hero">
        <div className="prod-hero-bg">
          <Image
            src="/products-showcase.png"
            alt="US AgriShield products"
            fill
            priority
            className="prod-hero-image"
          />
        </div>
        <div className="prod-hero-overlay" />
        <div className="prod-hero-pattern" />
        <div className="prod-hero-content">
          <div className="prod-hero-badge">Our Products</div>
          <h1 className="prod-hero-title">
            Agriculture Product <br />
            <span className="prod-hero-accent">Range</span>
          </h1>
          <p className="prod-hero-description">
            Explore {company.name} products across Insecticides, Fungicides,
            and PGR. Open a category, read the details, and enquire directly.
          </p>
        </div>
      </section>

      <section className="prod-categories">
        <div className="container">
          <div className="prod-categories-header scroll-animate">
            <div className="section-label">Product Categories</div>
            <h2 className="section-title">Choose a Product Family</h2>
            <p className="section-subtitle">
              A simple product structure for quick browsing and enquiry.
            </p>
          </div>

          <div className="prod-categories-grid">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="prod-cat-card scroll-animate"
              >
                <div className="prod-cat-card-bg" />
                <div className="prod-cat-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p className="prod-cat-tagline">{category.tagline}</p>
                <p className="prod-cat-desc">{category.description}</p>
                <div className="prod-cat-features">
                  {category.products.map((product) => (
                    <span key={product} className="prod-cat-feature">
                      {product}
                    </span>
                  ))}
                </div>
                <span className="prod-cat-link">
                  Explore {category.name} <span className="prod-cat-link-arrow">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="prod-stats">
        <div className="container">
          <div className="prod-stats-grid">
            <div className="prod-stat-item scroll-animate">
              <div className="prod-stat-number">4</div>
              <div className="prod-stat-label">Listed Products</div>
            </div>
            <div className="prod-stat-item scroll-animate">
              <div className="prod-stat-number">3</div>
              <div className="prod-stat-label">Product Categories</div>
            </div>
            <div className="prod-stat-item scroll-animate">
              <div className="prod-stat-number">+91</div>
              <div className="prod-stat-label">Phone Enquiry</div>
            </div>
            <div className="prod-stat-item scroll-animate">
              <div className="prod-stat-number">GJ</div>
              <div className="prod-stat-label">Ahmedabad Office</div>
            </div>
          </div>
        </div>
      </section>

      <section className="prod-why">
        <div className="container">
          <div className="prod-why-header scroll-animate">
            <div className="section-label">Featured Products</div>
            <h2 className="section-title">Product Details at a Glance</h2>
            <p className="section-subtitle">
              Enquire for final dosage, price, and available pack size before use.
            </p>
          </div>
          <div className="prod-why-grid">
            {products.map((product) => (
              <div key={product.name} className="prod-why-card scroll-animate">
                <div className="prod-why-icon">{product.category.slice(0, 2).toUpperCase()}</div>
                <h3>{product.name}</h3>
                <p>{product.category} - {product.composition}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="prod-cta">
        <div className="prod-cta-content">
          <h2>Want to Know the Right Product?</h2>
          <p>
            Share your crop and problem with our team. We will guide you with
            suitable product information and availability.
          </p>
          <div className="prod-cta-actions">
            <Link href="/contact" className="btn-primary btn-primary-light-alt">
              Get Product Enquiry
              <span>→</span>
            </Link>
            <a href={`tel:+91${company.phone}`} className="btn-outline-light">
              {company.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
