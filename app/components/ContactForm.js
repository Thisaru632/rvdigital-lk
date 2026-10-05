"use client";

import { useState } from "react";
import { Send, CheckCircle, Sparkles, ArrowRight } from "lucide-react";

export default function ContactForm({ title = "Request a Growth Recommendation?", subtitle = "Get a practical recommendation based on your business goals, current digital presence, and target market." }) {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    contact: "",
    website: "",
    service: "Websites & Online Stores",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  if (submitted) {
    return (
      <div className="form-card submitted-card">
        <div className="success-icon-wrap">
          <CheckCircle size={48} className="success-check" />
        </div>
        <h3 className="success-title">Recommendation Request Received!</h3>
        <p className="success-desc">
          Thank you, <strong>{formData.name}</strong>. Our strategic team is reviewing your details for{" "}
          <strong>{formData.company || "your business"}</strong>. We will get back to you via{" "}
          <strong>{formData.contact}</strong> within 24 hours with practical, tailored growth steps.
        </p>
        <button
          type="button"
          className="btn-secondary"
          onClick={() => {
            setSubmitted(false);
            setFormData({
              name: "",
              company: "",
              contact: "",
              website: "",
              service: "Websites & Online Stores",
              message: "",
            });
          }}
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="form-card" id="recommendation">
      <div className="form-card-header">
        <div className="form-badge">
          <Sparkles size={14} />
          <span>Tailored Strategic Plan</span>
        </div>
        <h3 className="form-title">
          Request a <span className="highlight-text">Growth</span> Recommendation?
        </h3>
        {subtitle && <p className="form-subtitle">{subtitle}</p>}
      </div>

      <form onSubmit={handleSubmit} className="recommendation-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name <span className="req">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Your full name"
            value={formData.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="company" className="form-label">
            Business / Company Name <span className="req">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            placeholder="e.g. Acme Lanka (Pvt) Ltd"
            value={formData.company}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact" className="form-label">
            Email / WhatsApp number <span className="req">*</span>
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            required
            placeholder="hello@example.com or +94 7X XXX XXXX"
            value={formData.contact}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="website" className="form-label">
            Website or social media link <span className="opt">(Optional)</span>
          </label>
          <input
            type="text"
            id="website"
            name="website"
            placeholder="https://yourwebsite.com or @instagram"
            value={formData.website}
            onChange={handleChange}
            className="form-input"
          />
        </div>

        <div className="form-group">
          <label htmlFor="service" className="form-label">
            What do you need help with?
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="form-select"
          >
            <option value="The RV Acquisition System (Full Overhaul)">
              The RV Acquisition System (Full Overhaul)
            </option>
            <option value="Websites & Online Stores">Websites & Online Stores</option>
            <option value="Paid Advertising & Lead Generation">
              Paid Advertising & Lead Generation
            </option>
            <option value="Social Media Growth">Social Media Growth</option>
            <option value="SEO & Online Presence">SEO & Online Presence</option>
            <option value="Brand & Business Presentation">
              Brand & Business Presentation
            </option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Tell us briefly about your business
          </label>
          <textarea
            id="message"
            name="message"
            rows="3"
            placeholder="Current challenges, primary target customers, or immediate goals..."
            value={formData.message}
            onChange={handleChange}
            className="form-textarea"
          ></textarea>
        </div>

        <button type="submit" disabled={loading} className="btn-primary form-submit-btn">
          <span>{loading ? "Processing..." : "Get My Recommendation"}</span>
          <ArrowRight size={16} />
        </button>

        <p className="form-disclaimer">No pressure. Just practical guidance.</p>
      </form>
    </div>
  );
}
