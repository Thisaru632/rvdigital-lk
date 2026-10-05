import Link from "next/link";
import { Phone, Mail, MessageCircle, ExternalLink, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const services = [
    { label: "Websites & Online Stores", href: "/services#websites" },
    { label: "Paid Advertising & Lead Generation", href: "/services#paid-ads" },
    { label: "Social Media Growth", href: "/services#social-media" },
    { label: "SEO & Online Presence", href: "/services#seo" },
    { label: "Brand & Business Presentation", href: "/services#brand-presentation" },
  ];

  const company = [
    { label: "About Us", href: "/about" },
    { label: "Our Work", href: "/portfolio" },
    { label: "Case Studies", href: "/portfolio" },
    { label: "Blog & Insights", href: "/#insights" },
    { label: "Schedule a Call", href: "/contact" },
  ];

  return (
    <footer className="site-footer">
      <div className="container footer-container">
        {/* Top footer row with columns */}
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <Link href="/" className="footer-logo-link" aria-label="RV INNOVATE Home">
              <img
                src="/images/logo.jpeg"
                alt="RV INNOVATE"
                width="48"
                height="48"
                className="footer-logo"
              />
              <span className="footer-brand-name">RV INNOVATE</span>
            </Link>
            <p className="footer-desc">
              Strategy-led digital marketing for businesses that value clarity and results. We strengthen your digital presence, generate better inquiries, and drive measurable growth.
            </p>

            <div className="footer-socials">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="Facebook"
              >
                Facebook
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-pill"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Services</h4>
            <ul className="footer-links">
              {services.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-col">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              {company.map((item, idx) => (
                <li key={idx}>
                  <Link href={item.href} className="footer-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Contact</h4>
            <div className="footer-contact-list">
              <a href="tel:+94775215416" className="footer-contact-item">
                <Phone size={16} className="contact-icon" />
                <span>+94 77 521 5416</span>
              </a>

              <a href="mailto:rvinnovates@gmail.com" className="footer-contact-item">
                <Mail size={16} className="contact-icon" />
                <span>rvinnovates@gmail.com</span>
              </a>


              <a
                href="https://wa.me/94775215416?text=Hello%20RV%20INNOVATE"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-inline-cta"
              >
                <MessageCircle size={16} />
                <span>Speak on WhatsApp</span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-bottom-divider"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © 2026 All Rights Reserved | RV INNOVATE | Company Reg No. PV 00233348
          </div>
          <div className="footer-legal-links">
            <Link href="/privacy-policy" className="legal-link">
              Privacy Policy
            </Link>
            <span className="separator">•</span>
            <Link href="/terms-and-conditions" className="legal-link">
              Terms & Conditions
            </Link>
            <span className="separator">•</span>
            <Link href="/quality-policy" className="legal-link">
              Quality Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
