'use client';

import { useState } from 'react';
import { categories } from '../data/siteContent';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    farm: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
        setForm({ name: '', email: '', phone: '', farm: '', subject: '', message: '' });
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
      <div className="form-group">
        <label htmlFor="subject">Product Interest</label>
        <select id="subject" name="subject" required value={form.subject} onChange={handleChange}>
          <option value="">Select a product category...</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>{category.name}</option>
          ))}
          <option value="dealership">Dealership / Business Enquiry</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Tell us which product you need information about..."
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
