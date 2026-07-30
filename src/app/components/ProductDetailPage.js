import Image from "next/image";
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
          <div className="pd-hero-icon">
            {category.image ? (
              <Image src={category.image} alt={category.name} width={64} height={64} style={{ borderRadius: "8px" }} />
            ) : (
              category.icon
            )}
          </div>
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

            </div>
            <div className="pd-overview-image scroll-animate">
              <div className="pd-overview-image-placeholder">
                {category.image ? (
                  <Image
                    src={category.image2}
                    alt={category.name}
                    fill
                    className="pd-overview-image"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <span>{category.icon}</span>
                )}
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
                <div className="pd-variant-card-body">
                  {/* Left Column: Product Image */}
                  <div className="pd-variant-image-col">
                    <div className="pd-variant-image-wrapper">
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="pd-variant-image"
                          // sizes="(max-width: 768px) 100vw, 350px"
                        />
                      ) : (
                        <div className="pd-variant-no-img">{category.icon}</div>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Name, Technical Formulation & Details */}
                  <div className="pd-variant-info-col">
                    <div className="pd-variant-header">
                      <span className="pd-variant-type-badge">{product.category}</span>
                      <h3 className="pd-variant-title">{product.name}</h3>
                      <div className="pd-variant-tech-badge">
                        <span className="pd-tech-label">Technical Formulation:</span> {product.composition}
                      </div>
                    </div>

                    <p className="pd-variant-summary">{product.summary}</p>

                    <div className="pd-variant-specs">
                      <div className="pd-variant-spec-item">
                        <span className="pd-spec-label">Dosage</span>
                        <span className="pd-spec-val">{product.dosage}</span>
                      </div>
                      <div className="pd-variant-spec-item">
                        <span className="pd-spec-label">Pack Size</span>
                        <span className="pd-spec-val">{product.pack}</span>
                      </div>
                    </div>

                    {product.benefits && product.benefits.length > 0 && (
                      <div className="pd-variant-benefits-box">
                        <span className="pd-benefits-heading">Key Benefits:</span>
                        <ul className="pd-benefits-list">
                          {product.benefits.map((benefit, bIdx) => (
                            <li key={bIdx}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pd-variant-action">
                      <a
                        href={`https://wa.me/91${company.phone}?text=I%20want%20to%20enquire%20about%20${encodeURIComponent(product.name)}`}
                        className="pd-variant-cta-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Enquire Now on WhatsApp →
                      </a>
                    </div>
                  </div>
                </div>
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
              {/* <div className="pd-app-tip">
                <div className="pd-app-tip-icon">US</div>
                <h4>Call Now</h4>
                <p>{company.phoneDisplay}</p>
                <p>{company.email}</p>
              </div> */}
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
