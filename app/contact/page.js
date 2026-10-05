import Link from "next/link";
import {
  Phone,
  Mail,
  MessageCircle,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Contact Us | RV INNOVATE",
  description:
    "Get in touch with RV INNOVATE. Call +94 77 521 5416 or email rvinnovates@gmail.com.",
};

export default function ContactPage() {
  const contactCards = [
    {
      icon: <Phone size={24} className="c-icon" />,
      title: "Phone Number",
      val: "+94 77 521 5416",
      sub: "Mon - Fri, 9:00 AM - 6:00 PM IST",
      href: "tel:+94775215416",
      action: "Call Now",
    },
    {
      icon: <Mail size={24} className="c-icon" />,
      title: "Email Address",
      val: "rvinnovates@gmail.com",
      sub: "We respond within 24 business hours",
      href: "mailto:rvinnovates@gmail.com",
      action: "Send Email",
    },

    {
      icon: <MessageCircle size={24} className="c-icon" />,
      title: "Instant WhatsApp",
      val: "+94 77 521 5416",
      sub: "Direct chat with our strategy team",
      href: "https://wa.me/94775215416?text=Hello%20RV%20INNOVATE",
      action: "Chat Now",
    },
  ];

  return (
    <>
      {/* Contact Hero */}
      <section className="page-hero">
        <div className="hero-glow-blob hero-glow-1"></div>
        <div className="container">
          <div className="page-hero-content center">
            <div className="hero-pill-badge">
              <Sparkles size={14} />
              <span>GET IN TOUCH WITH US</span>
            </div>
            <h1 className="page-title">
              Let’s Talk About Your <span className="highlight-text">Next Big Move</span>
            </h1>
            <p className="page-subtitle max-width-md">
              Have questions or ready to transform your marketing into a high-performing acquisition system?
              Get in touch with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="section contact-cards-section">
        <div className="container">
          <div className="contact-cards-grid">
            {contactCards.map((c, idx) => (
              <a
                key={idx}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="contact-card"
              >
                <div className="contact-card-icon-wrap">{c.icon}</div>
                <h3 className="contact-card-title">{c.title}</h3>
                <div className="contact-card-val">{c.val}</div>
                <p className="contact-card-sub">{c.sub}</p>
                <div className="contact-card-action">
                  <span>{c.action}</span>
                  <ArrowRight size={14} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Form & Fast Strategy Fit Call Booking */}
      <section className="section section-dark contact-form-section">
        <div className="container">
          <div className="contact-split-grid">
            {/* Left side: Guidance */}
            <div className="contact-info-panel">
              <div className="section-eyebrow">
                <Clock size={14} />
                <span>30-MINUTE DISCOVERY</span>
              </div>
              <h2 className="contact-panel-title">
                Prefer a direct conversation? <br />
                <span className="highlight-text">Book a free strategy call.</span>
              </h2>
              <p className="contact-panel-desc">
                We'll spend 30 minutes evaluating your current sales funnel, discussing where marketing
                is getting stuck, and identifying actionable levers for growth.
              </p>

              <div className="call-benefits-list">
                <div className="benefit-item">
                  <CheckCircle size={18} className="benefit-check" />
                  <span>No hard pitch. Honest, commercial guidance only.</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={18} className="benefit-check" />
                  <span>Actionable review of your website & ad setup.</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle size={18} className="benefit-check" />
                  <span>Clear next steps whether we work together or not.</span>
                </div>
              </div>

              <div className="whatsapp-box-highlight">
                <div className="wa-title">Need faster answers?</div>
                <p className="wa-desc">
                  Chat directly with our client strategy desk on WhatsApp for instant assistance.
                </p>
                <a
                  href="https://wa.me/94775215416?text=Hello%20RV%20INNOVATE%2C%20I%20have%20an%20inquiry%20regarding%20digital%20marketing%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary wa-btn"
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp (+94 77 521 5416)</span>
                </a>
              </div>
            </div>

            {/* Right side: Recommendation Form */}
            <div className="contact-form-wrap">
              <ContactForm
                title="Send Us a Message"
                subtitle="Fill out the form below and we'll get back to you within 24 hours with tailored insights."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
