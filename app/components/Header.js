"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X, ArrowRight, Sparkles } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesDropdown(false);
  }, [pathname]);

  const serviceItems = [
    {
      title: "Websites & Online Stores",
      desc: "Custom high-converting e-commerce and corporate platforms",
      href: "/services#websites",
    },
    {
      title: "SEO & Online Presence",
      desc: "Organic search visibility and local rankings that bring qualified traffic",
      href: "/services#seo",
    },
    {
      title: "Social Media Growth",
      desc: "Authority-building campaigns and scroll-stopping visual content",
      href: "/services#social-media",
    },
    {
      title: "Paid Advertising & Lead Generation",
      desc: "Data-driven Meta and Google ad funnels built for immediate ROI",
      href: "/services#paid-ads",
    },
    {
      title: "Brand & Business Presentation",
      desc: "Distinct visual identities, company profiles, and premium collateral",
      href: "/services#brand-presentation",
    },
  ];

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-shell">
        <div className="header-inner">
          <Link href="/" className="brand-logo-link" aria-label="RV INNOVATE Home">
            <img
              src="/images/logo.jpeg"
              alt="RV INNOVATE - Digital Marketing Agency"
              width="48"
              height="48"
              className="brand-logo"
            />
            <span className="brand-name-text">RV INNOVATE</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav" aria-label="Primary Navigation">
            <div
              className="nav-dropdown-wrapper"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <Link
                href="/services"
                className={`nav-link with-dropdown ${pathname.startsWith("/services") ? "active" : ""}`}
              >
                Services
                <ChevronDown size={14} className={`dropdown-icon ${servicesDropdown ? "rotate" : ""}`} />
              </Link>

              {servicesDropdown && (
                <div className="nav-dropdown-menu">
                  <div className="dropdown-grid">
                    {serviceItems.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="dropdown-item"
                        onClick={() => setServicesDropdown(false)}
                      >
                        <div className="dropdown-item-title">{item.title}</div>
                        <div className="dropdown-item-desc">{item.desc}</div>
                      </Link>
                    ))}
                  </div>
                  <div className="dropdown-footer">
                    <Link
                      href="/services"
                      className="dropdown-view-all"
                      onClick={() => setServicesDropdown(false)}
                    >
                      <span>Explore the RV Acquisition System</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/portfolio"
              className={`nav-link ${pathname === "/portfolio" ? "active" : ""}`}
            >
              Work
            </Link>

            <Link
              href="/about"
              className={`nav-link ${pathname === "/about" ? "active" : ""}`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`nav-link ${pathname === "/contact" ? "active" : ""}`}
            >
              Contact
            </Link>
          </nav>

          {/* Header Action Button */}
          <div className="header-actions">
            <Link href="/#recommendation" className="btn-primary header-cta">
              <Sparkles size={15} />
              <span>Request a Growth Recommendation</span>
            </Link>

            <button
              type="button"
              className="mobile-toggle-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="mobile-drawer">
            <div className="mobile-drawer-inner">
              <div className="mobile-group">
                <div className="mobile-group-title">Services</div>
                {serviceItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="mobile-sublink"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>

              <div className="mobile-divider"></div>

              <Link
                href="/portfolio"
                className={`mobile-link ${pathname === "/portfolio" ? "active" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/about"
                className={`mobile-link ${pathname === "/about" ? "active" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className={`mobile-link ${pathname === "/contact" ? "active" : ""}`}
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>

              <div className="mobile-cta-wrap">
                <Link
                  href="/#recommendation"
                  className="btn-primary mobile-cta"
                  onClick={() => setMobileOpen(false)}
                >
                  Request a Growth Recommendation
                </Link>
                <a
                  href="https://wa.me/94775215416"
                  className="btn-secondary mobile-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a 15-Minute Fit Call
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
