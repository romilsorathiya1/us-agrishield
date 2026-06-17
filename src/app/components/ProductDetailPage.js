import Link from "next/link";
import Navbar from "./Navbar";
import ScrollAnimations from "./ScrollAnimations";
import Footer from "./Footer";
import { categories, company, products } from "../data/siteContent";

export default function ProductDetailPage({ categorySlug }) {
  const category = categories.find((item) => item.slug === categorySlug);
  const categoryProducts = products.filter((item) => item.slug === categorySlug);

  return (
    <>
      <Navbar />
      <ScrollAnimations />

      <section className="pd-hero">
        <div className="pd-hero-bg" />
        <div className="pd-hero-overlay" />
        <div className="pd-hero-content">
          <Link href="/products" className="pd-hero-back">← All Products</Link>
          <div className="pd-hero-icon">{category.icon}</div>
          <h1 className="pd-hero-title">{category.name}</h1>
          <p className="pd-hero-subtitle">{category.tagline}</p>
          <p className="pd-hero-desc">{category.description}</p>
        </div>
      </section>

      <section className="pd-overview">
        <div className="container">
          <div className="pd-overview-grid">
            <div className="pd-overview-text scroll-animate">
              <div className="section-label">Overview</div>
              <h2 className="section-title">{category.name} by {company.name}</h2>
              <p>
                Explore the {category.name.toLowerCase()} range from {company.name}.
                Each product is presented with clear product type, dosage guidance,
                pack information, and a direct enquiry option.
              </p>
              <p>
                For exact crop-wise recommendation, dosage, and availability,
                connect with our team before application.
              </p>
              <div className="pd-overview-highlights">
                <div className="pd-overview-highlight">
                  <span className="pd-highlight-num">{categoryProducts.length}</span>
                  <span className="pd-highlight-label">Products</span>
                </div>
                <div className="pd-overview-highlight">
                  <span className="pd-highlight-num">+91</span>
                  <span className="pd-highlight-label">Call Support</span>
                </div>
                <div className="pd-overview-highlight">
                  <span className="pd-highlight-num">IN</span>
                  <span className="pd-highlight-label">India Supply</span>
                </div>
              </div>
            </div>
            <div className="pd-overview-image scroll-animate">
              <div className="pd-overview-image-placeholder">
                <span>{category.icon}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pd-variants">
        <div className="container">
          <div className="pd-variants-header scroll-animate">
            <div className="section-label">Product Details</div>
            <h2 className="section-title">{category.name} Product Range</h2>
            <p className="section-subtitle">
              Simple product information with a quick enquiry option.
            </p>
          </div>

          <div className="pd-variants-list">
            {categoryProducts.map((product) => (
              <div key={product.name} className="pd-variant-card scroll-animate">
                <div className="pd-variant-top">
                  <h3>{product.name}</h3>
                  <span className="pd-variant-type">{product.category}</span>
                </div>
                <p>{product.summary}</p>
                <div className="pd-variant-details">
                  <div className="pd-variant-detail">
                    <span className="pd-variant-detail-label">Composition</span>
                    <span className="pd-variant-detail-value">{product.composition}</span>
                  </div>
                  <div className="pd-variant-detail">
                    <span className="pd-variant-detail-label">Dosage</span>
                    <span className="pd-variant-detail-value">{product.dosage}</span>
                  </div>
                  <div className="pd-variant-detail">
                    <span className="pd-variant-detail-label">Pack Size</span>
                    <span className="pd-variant-detail-value">{product.pack}</span>
                  </div>
                </div>
                <div className="pd-feature-card" style={{ marginTop: "1rem" }}>
                  <h3>Key Benefits</h3>
                  <p>{product.benefits.join(" • ")}</p>
                </div>
                <a
                  href={`https://wa.me/91${company.phone}?text=I%20want%20to%20enquire%20about%20${encodeURIComponent(product.name)}`}
                  className="pd-variant-cta"
                >
                  Inquire Now →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pd-application">
        <div className="container">
          <div className="pd-app-grid">
            <div className="pd-app-content scroll-animate">
              <div className="section-label">How to Enquire</div>
              <h2 className="section-title">Get Product Guidance Before Use</h2>
              <div className="pd-app-steps">
                <div className="pd-app-step">
                  <div className="pd-app-step-num">1</div>
                  <div><h4>Share Crop Details</h4><p>Tell us your crop, issue, and current crop stage.</p></div>
                </div>
                <div className="pd-app-step">
                  <div className="pd-app-step-num">2</div>
                  <div><h4>Confirm Product</h4><p>Our team helps you confirm the suitable product and usage direction.</p></div>
                </div>
                <div className="pd-app-step">
                  <div className="pd-app-step-num">3</div>
                  <div><h4>Check Availability</h4><p>Ask for pack size, pricing, and delivery details.</p></div>
                </div>
              </div>
            </div>
            <div className="pd-app-side scroll-animate">
              <div className="pd-app-tip">
                <div className="pd-app-tip-icon">US</div>
                <h4>Call Now</h4>
                <p>{company.phoneDisplay}</p>
                <p>{company.email}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pd-cta">
        <div className="pd-cta-content">
          <h2>Need Details for {category.name}?</h2>
          <p>Contact {company.name} for product guidance, pack sizes, and purchase enquiry.</p>
          <div className="pd-cta-actions">
            <Link href="/contact" className="btn-primary btn-primary-light-alt">Enquire Now →</Link>
            <a href={`tel:+91${company.phone}`} className="btn-outline-light">Call {company.phoneDisplay}</a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
