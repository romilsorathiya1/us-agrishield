import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import ScrollAnimations from "./components/ScrollAnimations";
import Footer from "./components/Footer";
import { categories, company, whyChooseUs } from "./data/siteContent";

export default function Home() {

  const whyChoseBottomLine=[
    "Our premium agrochemical solutions deliver reliable protection against weeds, pests, and diseases for healthier crops and higher productivity.",
    "Professional technical guidance to help farmers and dealers select the most suitable agricultural solutions.",
    "Operating from Ahmedabad, we combine local expertise with premium agricultural solutions to support sustainable farming.",
    "We make it easy to connect with us for product enquiries, technical support, and business opportunities."
  ]
  return (
    <>
      <Navbar />
      <ScrollAnimations />

      <section className="hero" id="hero">
        <div className="hero-bg">
          <Image
            src="/hero-bg.jpeg"
            alt="Green agricultural field"
            fill
            priority
            className="hero-bg-image"
          />
        </div>
        <div className="hero-overlay" />
        <div className="hero-pattern" />

        <div className="hero-content">
          <div className="hero-text">
            
            <h1 className="hero-title">
              Advanced Crop<br />
              <span className="hero-title-accent">Protection Solution</span>
            </h1>
            <p className="hero-description">
              We provide practical crop care solutions including fungicides, insecticides,
             herbicides, and PGR products for farmers and agriculture dealers.
              Contact our team for product guidance, pack sizes, and enquiry.
            </p>
            <div className="hero-actions">
              <Link href="/products" className="btn-primary">
                Explore Products
                <span>→</span>
              </Link>
              {/* <a href="/Catalogue.pdf" className="btn-secondary" download target="_blank" rel="noopener noreferrer">
                Catalogue
              </a> */}
              <a href={`tel:+91${company.phone}`} className="btn-secondary">
                Call Now
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-card-image">
                <Image
                  src="/products-showcase.jpeg"
                  alt="US Agrishield agriculture products"
                  width={600}
                  height={450}
                  style={{ width: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="products" id="products">
        <div className="container">
          <div className="products-header scroll-animate">
            <div className="section-label">Our Products </div>
            <h2 className="section-title">Simple Crop Care Range</h2>
            <p className="section-subtitle">
              Browse the main product families and enquire directly for dosage,
              pack size, and category-wise recommendation.
            </p>
          </div>

          <div className="products-grid">
            {categories.map((category) => (
              <div key={category.slug} className="product-card scroll-animate">
                <div className="product-icon">
                  {category.image ? (
                    <Image
                      src={category.image}
                      alt={category.name}
                      width={56}
                      height={56}
                      style={{ objectFit: "cover", borderRadius: "8px" }}
                    />
                  ) : (
                    category.icon
                  )}
                </div>
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
          <h2 className="section-title">Focused Support for Agrochemicals Products</h2>
          <p className="section-subtitle">
           Empowering Agriculture with Quality, Innovation & Trust
          </p>
        </div>

        <div className="container">
          <div className="why-us-grid">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="why-us-card scroll-animate">
                <div className="why-us-icon">{String(index + 1).padStart(2, "0")}</div>
                <h3>{item.heading}</h3>
                <p>{item.description}</p>
              </div>
            ))}
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
