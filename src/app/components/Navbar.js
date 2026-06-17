'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { company, categories } from '../data/siteContent';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsExpanded, setProductsExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
    setProductsExpanded(false);
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    setMenuOpen((open) => {
      const nextOpen = !open;
      document.body.style.overflow = nextOpen ? 'hidden' : '';
      if (!nextOpen) setProductsExpanded(false);
      return nextOpen;
    });
  };

  const handleProductsKey = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleProducts();
    }
  };

  const toggleProducts = () => {
    setProductsExpanded((expanded) => !expanded);
  };

  const handleProductsClick = (e) => {
    if (window.innerWidth <= 1024) {
      e.preventDefault();
      setProductsExpanded((expanded) => !expanded);
    }
  };

  const isHome = pathname === '/';

  return (
    <>
      <nav className={`navbar${scrolled ? ' scrolled' : ''}${!isHome ? ' navbar-inner' : ''}${menuOpen ? ' menu-open' : ''}`} id="navbar">
        <div className="container">
          <Link href="/" className="navbar-brand" onClick={closeMenu}>
            <div className="navbar-logo">US</div>
            <div className="navbar-brand-text">
              <span className="navbar-brand-name">{company.name}</span>
              <span className="navbar-brand-tagline">Agriculture Product Solutions</span>
            </div>
          </Link>

          <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
            <div className="sidebar-header">
              <div className="navbar-logo">US</div>
              <div className="sidebar-brand-text">
                <span className="sidebar-brand-name">{company.name}</span>
                <span className="sidebar-tagline">Agriculture Product Solutions</span>
              </div>
            </div>

            <Link href="/" className={`navbar-link${pathname === '/' ? ' active' : ''}`} onClick={closeMenu}>
              Home
            </Link>
            <Link href="/why-us" className={`navbar-link${pathname === '/why-us' ? ' active' : ''}`} onClick={closeMenu}>
              About Us
            </Link>

            <div
              className={`navbar-dropdown-wrapper${productsExpanded ? ' expanded' : ''}`}
              onMouseEnter={() => { if (window.innerWidth > 1024) setProductsExpanded(true); }}
              onMouseLeave={() => { if (window.innerWidth > 1024) setProductsExpanded(false); }}
            >
              <div
                className="navbar-dropdown-trigger"
                onClick={handleProductsClick}
                onKeyDown={handleProductsKey}
                role="button"
                tabIndex={0}
                aria-expanded={productsExpanded}
                aria-label="Products menu"
              >
                <span className={`navbar-link${pathname.startsWith('/products') ? ' active' : ''}`}>
                  Products
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`dropdown-arrow-icon ${productsExpanded ? 'rotated' : ''}`}>
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </div>

              <div className={`navbar-dropdown-menu${productsExpanded ? ' navbar-dropdown-menu-visible' : ''}`}>
                <Link href="/products" className="dropdown-item dropdown-item-all" onClick={closeMenu}>
                  All Products
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/products/${category.slug}`}
                    className="dropdown-item"
                    onClick={closeMenu}
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="navbar-cta" onClick={closeMenu}>
              Contact Us
            </Link>
          </div>

          <button
            className={`menu-toggle${menuOpen ? ' active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {menuOpen && <div className="navbar-overlay" onClick={closeMenu} />}
    </>
  );
}
