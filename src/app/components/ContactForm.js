'use client';

import { useState } from 'react';
import { categories, products } from '../data/siteContent';

// Slugs that are NOT product categories (no product dropdown needed)
const NON_PRODUCT_SLUGS = ['dealership', 'other'];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    farm: '',
    subject: '',
    product: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  // Products filtered by selected category
  const categoryProducts = form.subject && !NON_PRODUCT_SLUGS.includes(form.subject)
    ? products.filter((p) => p.slug === form.subject)
    : [];

  const showProductDropdown = categoryProducts.length > 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
      // Reset product selection when category changes
      ...(name === 'subject' ? { product: '' } : {}),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', farm: '', subject: '', product: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required value={form.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="your@email.com" required value={form.email} onChange={handleChange} />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="+91" value={form.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="farm">Farm / Company Name</label>
          <input type="text" id="farm" name="farm" placeholder="Farm or company" value={form.farm} onChange={handleChange} />
        </div>
      </div>

      {/* Step 1: Category / Inquiry Type */}
      <div className="form-group">
        <label htmlFor="subject">Inquiry Type</label>
        <select id="subject" name="subject" required value={form.subject} onChange={handleChange}>
          <option value="">Select inquiry type...</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.name}
            </option>
          ))}
          <option value="dealership">Dealership / Business Enquiry</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Step 2: Specific Product — only visible when a product category is selected */}
      {showProductDropdown && (
        <div className="form-group contact-product-dropdown">
          <label htmlFor="product">
            Select Product
            <span className="form-label-hint"> — optional</span>
          </label>
          <select id="product" name="product" value={form.product} onChange={handleChange}>
            <option value="">All products in this category</option>
            {categoryProducts.map((p) => (
              <option key={p.name} value={p.name}>
                {p.name} — {p.composition}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder={
            form.subject === 'dealership'
              ? 'Tell us about your business and dealership interest...'
              : form.subject === 'other'
              ? 'Describe your query...'
              : form.product
              ? `Tell us about your enquiry for ${form.product}...`
              : 'Tell us which crop, problem, or product you need information about...'
          }
          required
          value={form.message}
          onChange={handleChange}
        />
      </div>

      {status === 'success' && (
        <div className="form-message form-message-success">
          Your message has been sent successfully! We will get back to you soon.
        </div>
      )}
      {status === 'error' && (
        <div className="form-message form-message-error">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <button type="submit" className="btn-primary form-submit" disabled={loading}>
        {loading ? 'Sending...' : 'Send Message'}
        {!loading && <span>→</span>}
      </button>
    </form>
  );
}
