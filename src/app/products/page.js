import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import ScrollAnimations from "../components/ScrollAnimations";
import Footer from "../components/Footer";
import ProductSlider from "../components/ProductSlider";
import { categories, company } from "../data/siteContent";

export default function Products() {
  return (
    <>
      <Navbar />
      <ScrollAnimations />

      <section className="prod-hero">
          <div className="prod-hero-bg">
          <Image
            src="/products-showcase.png"
            alt="US Agrishield products"
            fill
            priority
            className="prod-hero-image"
          />
        </div>
        <div className="prod-hero-overlay" />
        <div className="prod-hero-pattern" />
        <div className="prod-hero-content">
          
          <h1 className="prod-hero-title">
            Agrochemical Product <br />
            <span className="prod-hero-accent">Range</span>
          </h1>
          <p className="prod-hero-description">
            Explore {company.name} products across Insecticides, Fungicides,
            Herbicides, and PGR. Open a category, read the details, and enquire directly.
          </p>
        </div>
      </section>

      <section className="prod-categories">
        <div className="container">
          <div className="prod-categories-header scroll-animate">
            <div className="section-label">Product Categories</div>
            <h2 className="section-title">Choose a Product Category</h2>
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
                <div className="prod-cat-icon">
                  {category.image ? (
                    <Image src={category.image} alt={category.name} width={56} height={56} style={{ objectFit: "cover", borderRadius: "8px" }} />
                  ) : (
                    category.icon
                  )}
                </div>
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

      <section className="prod-why">
        <div className="container">
          <div className="prod-why-header scroll-animate">
            <div className="section-label">Featured Products</div>
            <h2 className="section-title">Product Details at a Glance</h2>
            <p className="section-subtitle">
              Enquire for the final price, available pack size and dosage before use.
            </p>
          </div>
          <ProductSlider />
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
