import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Globe,
  TrendingUp,
  Share2,
  Search,
  Palette,
  Download,
  PhoneCall,
  Check,
} from "lucide-react";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "Services | RV INNOVATE",
  description:
    "Explore RV INNOVATE's full-spectrum digital marketing services: custom websites & e-commerce, paid advertising & lead generation, SEO, social media growth, and branding.",
};

export default function ServicesPage() {
  const servicesList = [
    {
      id: "websites",
      badge: "Web Development",
      icon: <Globe size={28} className="service-icon" />,
      title: "Websites & Online Stores",
      subtitle: "Get a fast, mobile-friendly & high-converting website.",
      description:
        "Stand out with a website tailored to your brand’s identity and goals. Our custom designs are modern, mobile-friendly, and built for performance—ensuring a visually stunning, user-centered experience that drives trust and conversions.",
      points: [
        "Custom UI/UX design tailored to your industry",
        "Mobile-first, lightning fast performance",
        "E-Commerce stores built for seamless buying journeys",
        "Conversion-optimized landing pages and enquiry forms",
        "SEO-friendly architecture and clean code",
      ],
      tag: "Conversion-Focused",
    },
    {
      id: "paid-ads",
      badge: "Paid Media",
      icon: <TrendingUp size={28} className="service-icon" />,
      title: "Paid Advertising & Lead Generation",
      subtitle: "Drive instant leads & sales with highly targeted ad campaigns.",
      description:
        "Stop burning money on vanity clicks. We design and execute precision-targeted paid media campaigns on Meta (Facebook, Instagram) and Google that attract genuine buyers, qualify leads, and measure real cost-per-acquisition.",
      points: [
        "Meta Ads (Facebook & Instagram) lead funnels",
        "Google Search, Performance Max & Display campaigns",
        "High-converting copy and scroll-stopping creative assets",
        "Advanced retargeting and custom lookalike audiences",
        "End-to-end conversion tracking and transparent ROI reporting",
      ],
      tag: "High ROI",
    },
    {
      id: "social-media",
      badge: "Content & Community",
      icon: <Share2 size={28} className="service-icon" />,
      title: "Social Media Growth",
      subtitle: "Build your brand’s authority with consistent, engaging content.",
      description:
        "Create a cohesive and scroll-stopping social media presence. We design visually consistent profile images, banners, highlight covers, reels, and post templates that reflect your brand’s identity and boost recognition across all platforms.",
      points: [
        "Monthly content calendar and strategic direction",
        "Custom graphic design and branded templates",
        "Short-form video and reels production direction",
        "Audience engagement and community growth",
        "Monthly performance metrics and audience insights",
      ],
      tag: "Brand Authority",
      packages: [
        {
          name: "Professional Presence",
          subtitle: "For businesses that need a consistent and credible social media presence.",
          priceFrom: "From",
          priceAmount: "LKR 65,000",
          pricePeriod: "/month",
          popular: false,
          features: [
            "6 branded posts per month",
            "5 stories / reels per month",
            "Content strategy & calendar",
            "Caption writing",
            "Basic community support",
            "Monthly performance report",
          ],
        },
        {
          name: "Social Growth System",
          subtitle: "For businesses ready to scale with content consistency and campaign support.",
          priceFrom: "From",
          priceAmount: "LKR 95,000",
          pricePeriod: "/month",
          popular: true,
          features: [
            "10 branded posts per month",
            "10 stories / reels per month",
            "Content strategy & calendar",
            "Campaign setup & management",
            "Community management",
            "Monthly report + recommendations",
          ],
        },
        {
          name: "Growth Partner",
          subtitle: "For businesses that need advanced strategy and performance focus.",
          priceFrom: "From",
          priceAmount: "LKR 150,000",
          pricePeriod: "/month",
          popular: false,
          features: [
            "15+ branded posts per month",
            "15+ stories / reels per month",
            "Advanced campaign management",
            "Lead funnel recommendations",
            "Priority support",
            "Detailed monthly growth report",
          ],
        },
      ],
    },
    {
      id: "seo",
      badge: "Organic Search",
      icon: <Search size={28} className="service-icon" />,
      title: "SEO & Online Presence",
      subtitle: "Rank higher on Google and attract quality organic traffic.",
      description:
        "Connect with high-intent customers who are actively searching for what you offer. Our data-led SEO strategies build sustained organic traffic, dominate local search in Sri Lanka and abroad, and strengthen overall digital presence.",
      points: [
        "In-depth competitor and high-intent keyword research",
        "Technical SEO, site speed, and mobile crawlability audits",
        "Google Business Profile & Local Map Pack domination",
        "Authoritative on-page content optimization",
        "Quality link building and digital PR distribution",
      ],
      tag: "Sustainable Traffic",
      packages: [
        {
          name: "SEO Foundation",
          subtitle: "For businesses that need technical indexing and basic search visibility.",
          priceFrom: "From",
          priceAmount: "LKR 45,000",
          pricePeriod: "/month",
          popular: false,
          features: [
            "Technical SEO Audit",
            "On-Page Optimisation",
            "Keyword Research (Basic)",
            "Google Search Console Setup",
            "Monthly Performance Report",
          ],
        },
        {
          name: "Local SEO Growth",
          subtitle: "For businesses that want more visibility on Google Search and Maps.",
          priceFrom: "From",
          priceAmount: "LKR 65,000",
          pricePeriod: "/month",
          popular: true,
          features: [
            "Everything in Foundation",
            "Local SEO & Google Maps Optimisation",
            "Content Strategy (1 Blog/Month)",
            "Quality Link Building",
            "Monthly Performance Report",
          ],
        },
        {
          name: "Search Growth Partner",
          subtitle: "For businesses that want stronger rankings, content and long-term growth.",
          priceFrom: "From",
          priceAmount: "LKR 95,000",
          pricePeriod: "/month",
          popular: false,
          features: [
            "Everything in Local SEO Growth",
            "Advanced Keyword Strategy",
            "Content Strategy (2 Blog/Month)",
            "Advanced Link Building",
            "Monthly Strategy Call + Report",
          ],
        },
      ],
    },
    {
      id: "brand-presentation",
      badge: "Creative & Identity",
      icon: <Palette size={28} className="service-icon" />,
      title: "Brand & Business Presentation",
      subtitle: "Develop a unique brand identity that sets you apart.",
      description:
        "Build a brand that resonates deeply with your audience. We define your brand voice, visual language, color palette, typography, company profiles, and overall personality to create a consistent identity that builds trust and loyalty.",
      points: [
        "Memorable logo design and brand identity kits",
        "Corporate company profiles and investor pitch decks",
        "Product packaging and print presentation design",
        "Social media branding kits and typography guidelines",
        "Sales collateral that equips teams to close deals faster",
      ],
      tag: "Distinct Identity",
    },
  ];

  return (
    <>
      {/* Services Hero */}
      <section className="page-hero">
        <div className="hero-glow-blob hero-glow-1"></div>
        <div className="container">
          <div className="page-hero-content center">
            <div className="hero-pill-badge">
              <Sparkles size={14} />
              <span>FULL-SPECTRUM DIGITAL EXPERTISE</span>
            </div>
            <h1 className="page-title">
              Digital Marketing Solutions That{" "}
              <span className="highlight-text">Deliver Real Growth</span>
            </h1>
            <p className="page-subtitle max-width-md">
              From lead generation to brand authority, we help B2B companies, service businesses,
              and ambitious brands thrive in competitive digital landscapes.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detailed List */}
      <section className="section services-detail-section">
        <div className="container">
          <div className="services-stacked-list">
            {servicesList.map((service, idx) => (
              <div key={service.id} id={service.id} className="service-detail-card">
                <div className="service-card-left">
                  <div className="service-card-header">
                    <div className="service-badge-row">
                      <span className="service-badge-pill">{service.badge}</span>
                      <span className="service-tag-pill">{service.tag}</span>
                    </div>
                    <div className="service-icon-wrap">{service.icon}</div>
                    <h2 className="service-main-title">{service.title}</h2>
                    <h3 className="service-sub-title">{service.subtitle}</h3>
                  </div>
                  <p className="service-full-desc">{service.description}</p>
                </div>

                <div className="service-card-right">
                  <h4 className="service-deliverables-title">What We Deliver:</h4>
                  <ul className="service-points-list">
                    {service.points.map((pt, pIdx) => (
                      <li key={pIdx} className="service-point-item">
                        <CheckCircle2 size={16} className="point-check-icon" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="service-card-action">
                    <a
                      href={`https://wa.me/94775215416?text=Hello%20RV%20INNOVATE%2C%20I%20am%20interested%20in%20${encodeURIComponent(
                        service.title
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight size={15} />
                    </a>
                  </div>
                </div>

                {service.packages && (
                  <div className="service-packages-section">
                    <div className="service-packages-header">
                      <div className="packages-eyebrow">
                        <Sparkles size={14} />
                        <span>PACKAGES & PRICING</span>
                      </div>
                      <h3 className="packages-section-title">
                        {service.title} <span className="highlight-text">Packages</span>
                      </h3>
                      <p className="packages-section-desc">
                        Predictable monthly retainers engineered for consistent performance and measurable growth.
                      </p>
                    </div>

                    <div className="pricing-packages-grid">
                      {service.packages.map((pkg, pIdx) => (
                        <div
                          key={pIdx}
                          className={`pricing-package-card ${pkg.popular ? "popular-card" : ""}`}
                        >
                          {pkg.popular && (
                            <div className="popular-badge-wrap">
                              <span className="popular-badge">MOST POPULAR</span>
                            </div>
                          )}
                          <h4 className="pkg-name">{pkg.name}</h4>
                          <p className="pkg-subtitle">{pkg.subtitle}</p>

                          <div className="pkg-price-wrap">
                            <span className="pkg-price-from">{pkg.priceFrom}</span>
                            <div className="pkg-price-amount">{pkg.priceAmount}</div>
                            <span className="pkg-price-period">{pkg.pricePeriod}</span>
                          </div>

                          <ul className="pkg-features-list">
                            {pkg.features.map((feat, fIdx) => (
                              <li key={fIdx} className="pkg-feature-item">
                                <Check size={16} className="pkg-check-icon" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>

                          <a
                            href={`https://wa.me/94775215416?text=${encodeURIComponent(
                              `Hello RV INNOVATE, I would like to request the "${pkg.name}" package (${pkg.priceAmount} ${pkg.pricePeriod}) for ${service.title}.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`btn-package-request ${pkg.popular ? "btn-popular" : ""}`}
                          >
                            <span>Request This Package</span>
                            <ArrowRight size={14} />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Website Project Planner Download Box */}
      <section className="section planner-section">
        <div className="container">
          <div className="planner-banner-card">
            <div className="planner-content">
              <div className="planner-badge">
                <Sparkles size={14} />
                <span>FREE RESOURCE</span>
              </div>
              <h2 className="planner-title">Free Website Project Planner</h2>
              <p className="planner-desc">
                Stay organized and on track with our easy-to-use project planner. Perfect for
                managing tasks, timelines, deliverables, and goals. Download now and start planning
                your website success!
              </p>
              <div className="planner-perks">
                <div className="perk-item">
                  <Check size={16} /> Scope & Architecture Checklist
                </div>
                <div className="perk-item">
                  <Check size={16} /> Content & Asset Preparation Sheet
                </div>
                <div className="perk-item">
                  <Check size={16} /> Launch Readiness Verification
                </div>
              </div>
              <a
                href="#recommendation"
                className="btn-primary planner-download-btn"
              >
                <Download size={16} />
                <span>Get Free Project Planner</span>
              </a>
            </div>

            <div className="planner-visual">
              <img
                src="/images/free-project-planner.webp"
                alt="Free Website Project Planner by RV INNOVATE"
                width="400"
                height="272"
                className="planner-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section at bottom */}
      <section className="section section-dark" id="recommendation">
        <div className="container">
          <ContactForm
            title="Ready to Build Your Growth System?"
            subtitle="Tell us about your business and we'll craft a custom recommendation for your specific goals."
          />
        </div>
      </section>
    </>
  );
}
