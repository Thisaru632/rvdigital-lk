import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  CheckCircle2,
  TrendingUp,
  Target,
  Compass,
  Layers,
  BarChart3,
  Calendar,
  Clock,
  PhoneCall,
  ExternalLink,
  ShieldCheck,
  ChevronRight,
  AlertCircle,
} from "lucide-react";
import ContactForm from "./components/ContactForm";

export default function HomePage() {
  const painPoints = [
    "We're doing a lot of marketing, but nothing feels connected.",
    "We're spending, but results are inconsistent.",
    "Our ads generate leads, but too many are the wrong ones.",
    "Our website gets traffic, but too few people enquire.",
    "Our marketing team is busy, but priorities keep changing.",
    "We have data, but don't know what to act on.",
    "Growth still depends too much on referrals and one-off campaigns.",
    "We know what needs to happen, but execution keeps falling behind.",
  ];

  const systemPillars = [
    {
      num: "01",
      title: "Strategy & Direction",
      desc: "Get clear on who you serve best, why they should choose you and where to focus first.",
      deliverables: ["Customer & Offer", "Positioning", "Priorities & Budget"],
    },
    {
      num: "02",
      title: "Demand & Discovery",
      desc: "Help the right customers find, notice and engage with your business.",
      deliverables: ["Search & Paid Media", "Content & Social", "Retargeting"],
    },
    {
      num: "03",
      title: "Conversion & Follow-Up",
      desc: "Turn interest into qualified enquiries, then make sure every good lead is followed up properly.",
      deliverables: ["Website & Landing Pages", "Lead Capture & CRM", "Follow-Up & Sales Handoff"],
    },
    {
      num: "04",
      title: "Measurement & Improvement",
      desc: "See what is working, where performance drops and what to improve next.",
      deliverables: ["Tracking & KPIs", "Lead Quality & Conversion", "Testing & Optimisation"],
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Diagnose",
      subtitle: "Find what’s actually holding your marketing back.",
      desc: "We assess the business, customer, offer, current marketing, performance and gaps before recommending more activity.",
    },
    {
      step: "02",
      title: "Blueprint",
      subtitle: "Build the right customer acquisition plan.",
      desc: "We define the priorities, customer journey, channel roles, conversion path, measurement and investment direction.",
    },
    {
      step: "03",
      title: "Direction",
      subtitle: "Keep marketing aligned and moving.",
      desc: "We guide priorities, campaigns, teams, budgets and decisions so execution stays focused on the business objective.",
    },
    {
      step: "04",
      title: "Execute",
      subtitle: "Build and run what the plan requires.",
      desc: "Your team, existing partners or RV INNOVATE can execute the websites, campaigns, content, tracking and other required work.",
    },
  ];

  const credentials = [
    {
      metric: "6+ Months",
      title: "Hands-On Experience",
      desc: "Across websites, campaigns, strategy and digital execution.",
    },
    {
      metric: "10+",
      title: "Projects Delivered",
      desc: "Work spanning websites, campaigns, brand projects and digital growth initiatives.",
    },
    {
      metric: "Multi-Channel",
      title: "Cross-Channel Experience",
      desc: "Across web, search, paid media, social, content and conversion journeys.",
    },
    {
      metric: "Integrated",
      title: "Strategy + Execution",
      desc: "Strategic thinking shaped by actually building, launching and managing digital work.",
    },
    {
      metric: "Results First",
      title: "Business-First Decisions",
      desc: "Focused on what improves enquiries, leads, customers and marketing efficiency.",
    },
  ];

  const featuredProjects = [
    {
      name: "Gafe Galle",
      country: "Galle, Sri Lanka",
      industry: "Café & Dining",
      type: "Social Media Growth",
      desc: "Aesthetic feed curation, artisan coffee & brunch showcase, and community engagement driving foot traffic in Galle Fort.",
      image: "/images/gafe-galle-smm.jpg",
      link: "https://www.instagram.com/gafegalle?igsh=MWxiZWR1YzcxZjd2Ng==",
    },
    {
      name: "The Ivy by Frangipani",
      country: "Sri Lanka",
      industry: "Hospitality & Luxury Dining",
      type: "Social Media Growth",
      desc: "Luxury tropical villa architecture, serene pool ambiance, and fine dining lifestyle storytelling attracting international guests.",
      image: "/images/the-ivy-frangipani-smm.jpg",
      link: "https://www.instagram.com/theivybyfrangipani_?igsh=Nm1jNzVhazluY3A3",
    },
    {
      name: "Soul of Seafood",
      country: "Kabalana, Sri Lanka",
      industry: "Beachfront Dining & Seafood",
      type: "Social Media Growth",
      desc: "Vibrant beach club atmosphere, fresh catch culinary reels, and sunset beach dining promotions in Kabalana.",
      image: "/images/soul-of-seafood-smm.jpg",
      link: "https://www.instagram.com/soulofseafood_kabalana?igsh=MWpqbnd0aTY2YnpnNw==",
    },
    {
      name: "Clearpoint Hiriketiya",
      country: "Hiriketiya, Sri Lanka",
      industry: "Resort & Surf Stay",
      type: "Social Media Growth",
      desc: "Tropical coastal lifestyle reels, surf villa storytelling, and consistent visual identity driving direct guest bookings in Hiriketiya.",
      image: "/images/clearpoint-hiriketiya-smm.jpg",
      link: "https://www.instagram.com/clearpoint.hiriketiya?igsh=cXc4OGF2NGE3NGo0",
    },
  ];

  const articles = [
    {
      date: "April 18, 2026",
      tag: "Website Strategy",
      title: "Why Most Sri Lankan Business Websites Don’t Generate Inquiries",
      image: "/images/why-sri-lankan-websites-miss.png",
      href: "/services#websites",
    },
    {
      date: "April 5, 2025",
      tag: "Paid Advertising",
      title: "Paid Advertising vs. Organic Marketing: Where Should You Invest First?",
      image: "/images/19128.jpg",
      href: "/services#paid-ads",
    },
    {
      date: "April 5, 2025",
      tag: "Local SEO",
      title: "The Power of Local SEO for Small & Growing Businesses",
      image: "/images/pexels-lara-jameson-8828387-scaled.jpg",
      href: "/services#seo",
    },
  ];

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        {/* Background Video behind Hero Banner */}
        <div className="hero-video-wrapper">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="hero-video"
          >
            <source src="/Videoes/gemini_generated_video_058d9979.mp4" type="video/mp4" />
          </video>
          <div className="hero-video-overlay"></div>
        </div>

        <div className="hero-glow-blob hero-glow-1"></div>
        <div className="hero-glow-blob hero-glow-2"></div>
        <div className="hero-radial-grid"></div>

        <div className="container hero-container">
          <div className="hero-content">
            {/* Pill Eyebrow */}
            <div className="hero-pill-badge">
              <span className="hero-pill-dot"></span>
              <span className="hero-pill-text">STRATEGY. SYSTEMS. GROWTH.</span>
            </div>

            {/* Main Headline */}
            <h1 className="hero-title">
              Turn Disconnected Marketing Into a System That{" "}
              <span className="highlight-text">Acquires Customers.</span>
            </h1>

            {/* Description */}
            <p className="hero-lead">
              RV INNOVATE is a strategy-led digital marketing agency in Sri Lanka. We help B2B
              companies, service businesses and selected premium brands connect their marketing,
              conversion and measurement into one clear path to customers.
            </p>

            <p className="hero-sublead">
              Most businesses do not need another isolated marketing service. They need the right
              pieces working together.
            </p>

            {/* CTAs */}
            <div className="hero-cta-group">
              <a
                href="https://wa.me/94775215416?text=Hello%20RV%20INNOVATE%2C%20I%20would%20like%20to%20book%20a%2015-minute%20fit%20call."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary hero-btn"
              >
                <span>Book a 15-Minute Fit Call</span>
                <ArrowRight size={13} />
              </a>

              <a href="#system" className="btn-secondary hero-btn">
                <span>See How the System Works</span>
              </a>
            </div>

            {/* 4 Feature Pillars under Hero */}
            <div className="hero-pillars-grid">
              <div className="hero-pillar-card">
                <span className="pillar-num">01</span>
                <div className="pillar-info">
                  <h4 className="pillar-title">Strategy First</h4>
                  <p className="pillar-sub">Before channels</p>
                </div>
              </div>

              <div className="hero-pillar-card">
                <span className="pillar-num">02</span>
                <div className="pillar-info">
                  <h4 className="pillar-title">Customer Journey</h4>
                  <p className="pillar-sub">Discovery to enquiry</p>
                </div>
              </div>

              <div className="hero-pillar-card">
                <span className="pillar-num">03</span>
                <div className="pillar-info">
                  <h4 className="pillar-title">Measured Decisions</h4>
                  <p className="pillar-sub">Based on data</p>
                </div>
              </div>

              <div className="hero-pillar-card">
                <span className="pillar-num">04</span>
                <div className="pillar-info">
                  <h4 className="pillar-title">Focused Execution</h4>
                  <p className="pillar-sub">Only what matters</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHERE MARKETING GETS STUCK / DOES THIS SOUND FAMILIAR? */}
      <section className="section section-dark stuck-section" id="pain-points">
        <div className="container">
          <div className="section-header center">
            <div className="section-eyebrow">
              <AlertCircle size={14} />
              <span>WHERE MARKETING GETS STUCK</span>
            </div>
            <h2 className="section-title">
              Does This <span className="highlight-text">Sound Familiar?</span>
            </h2>
            <p className="section-desc">
              Which one sounds closest to what your business is dealing with right now?
            </p>
          </div>

          <div className="pain-points-grid">
            {painPoints.map((item, idx) => (
              <div key={idx} className="pain-card">
                <div className="pain-card-icon">✕</div>
                <p className="pain-card-text">{item}</p>
              </div>
            ))}
          </div>

          {/* Callout Card */}
          <div className="stuck-callout-card">
            <div className="callout-content">
              <h3 className="callout-heading">Not sure what’s really holding things back?</h3>
              <p className="callout-text">
                We’ll help you identify the right starting point without pushing unnecessary services.
              </p>
            </div>
            <a
              href="https://wa.me/94775215416?text=Hello%20RV%20INNOVATE%2C%20I%20would%20like%20to%20book%20a%20fit%20call."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary callout-btn"
            >
              <span>Book a 15-Minute Fit Call</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* 3. THE RV ACQUISITION SYSTEM */}
      <section className="section system-section" id="system">
        <div className="container">
          <div className="section-header center">
            <div className="section-eyebrow">
              <Layers size={14} />
              <span>THE RV ACQUISITION SYSTEM</span>
            </div>
            <h2 className="section-title">
              Build the System <span className="highlight-text">Before You Scale</span> the Spend.
            </h2>
            <p className="section-desc max-width-md">
              Those problems often share one root: the parts of customer acquisition are working
              separately.
              <br />
              The RV Acquisition System connects them into one clear journey from attention to
              enquiry or sale, then uses real performance data to show what should improve next.
            </p>
          </div>

          <div className="system-grid">
            {systemPillars.map((pillar, idx) => (
              <div key={idx} className="system-card">
                <div className="system-card-top">
                  <span className="system-number">{pillar.num}</span>
                  <h3 className="system-title">{pillar.title}</h3>
                </div>
                <p className="system-desc">{pillar.desc}</p>
                <div className="system-deliverables">
                  {pillar.deliverables.map((d, dIdx) => (
                    <span key={dIdx} className="deliverable-tag">
                      <CheckCircle2 size={12} />
                      <span>{d}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="system-footer-box">
            <p className="system-tagline">
              One customer journey. Four connected jobs. Improved over time.
            </p>
            <Link href="/services" className="btn-secondary">
              <span>Explore the RV Acquisition System</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH */}
      <section className="section approach-section" id="approach">
        <div className="container">
          <div className="section-header">
            <div className="section-eyebrow">
              <Compass size={14} />
              <span>OUR APPROACH</span>
            </div>
            <h2 className="section-title">
              The Right <span className="highlight-text">Direction</span> Before Every Execution
            </h2>
            <p className="section-desc">
              We don’t begin by recommending a website, running ads, or creating content. We first
              understand the business, the customer, the current marketing setup and what is
              actually preventing growth.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="process-step-card">
                <div className="process-header">
                  <span className="step-badge">{step.step}</span>
                  <h3 className="step-name">{step.title}</h3>
                </div>
                <h4 className="step-subtitle">{step.subtitle}</h4>
                <p className="step-text">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REAL EXPERIENCE. BETTER DECISIONS. */}
      <section className="section credentials-section">
        <div className="container">
          <div className="credentials-wrapper">
            <div className="credentials-intro">
              <div className="section-eyebrow">
                <ShieldCheck size={14} />
                <span>PROVEN TRACK RECORD</span>
              </div>
              <h2 className="section-title">
                Real Experience. <br />
                <span className="highlight-text">Better Decisions.</span>
              </h2>
              <p className="credentials-lead">
                Years of hands-on digital execution have shown us that good marketing is not about
                doing more.
              </p>
              <p className="credentials-sub">
                It is about making better decisions, connecting the right activities and measuring
                what actually contributes to growth.
              </p>
              <div className="credential-note">
                * Performance varies by industry, market, offer, budget and execution.
              </div>
            </div>

            <div className="credentials-grid">
              {credentials.map((c, idx) => (
                <div key={idx} className="cred-card">
                  <div className="cred-metric">{c.metric}</div>
                  <h4 className="cred-title">{c.title}</h4>
                  <p className="cred-desc">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. REAL BUSINESSES. REAL PROBLEMS. REAL WORK. */}
      <section className="section work-section" id="work">
        <div className="container">
          <div className="section-header between">
            <div>
              <div className="section-eyebrow">
                <Target size={14} />
                <span>CASE STUDIES</span>
              </div>
              <h2 className="section-title">
                Real Businesses. <span className="highlight-text">Real Problems. Real Work.</span>
              </h2>
              <p className="section-desc">
                Selected websites, brand systems and campaigns built around real business
                objectives.
              </p>
            </div>
            <Link href="/portfolio" className="btn-secondary desktop-only">
              <span>View All Work</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="portfolio-preview-grid">
            {featuredProjects.map((proj, idx) => {
              const CardTag = proj.link ? "a" : "div";
              const cardProps = proj.link
                ? {
                  href: proj.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "project-card project-card-clickable",
                }
                : { className: "project-card" };

              return (
                <CardTag key={idx} {...cardProps}>
                  <div className="project-image-wrap">
                    <img
                      src={proj.image}
                      alt={proj.name}
                      width="1024"
                      height="576"
                      className="project-img"
                    />
                    <div className="project-meta-badge">
                      <span className="proj-country">{proj.country}</span>
                      <span className="proj-type">{proj.type}</span>
                    </div>
                    {proj.link && (
                      <div className="project-ext-badge">
                        <span>View Instagram</span>
                        <ExternalLink size={12} />
                      </div>
                    )}
                  </div>
                  <div className="project-body">
                    <div className="project-industry">{proj.industry}</div>
                    <h3 className="project-name">{proj.name}</h3>
                    <p className="project-tagline">{proj.desc}</p>
                  </div>
                </CardTag>
              );
            })}
          </div>

          <div className="center-btn-wrap mobile-only">
            <Link href="/portfolio" className="btn-secondary">
              <span>View All Work</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. LATEST RESOURCES / INSIGHTS */}
      <section className="section insights-section" id="insights">
        <div className="container">
          <div className="section-header between">
            <div>
              <div className="section-eyebrow">
                <Sparkles size={14} />
                <span>LATEST RESOURCES</span>
              </div>
              <h2 className="section-title">
                Insights for <span className="highlight-text">Better Digital Decisions</span>
              </h2>
              <p className="section-desc">
                Practical articles to help business owners understand websites, campaigns,
                visibility, and digital growth before investing.
              </p>
            </div>
            <Link href="/services" className="btn-secondary desktop-only">
              <span>View All Insights</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="articles-grid">
            {articles.map((art, idx) => (
              <Link key={idx} href={art.href} className="article-card">
                <div className="article-image-wrap">
                  <img
                    src={art.image}
                    alt={art.title}
                    width="600"
                    height="340"
                    className="article-img"
                  />
                  <span className="article-tag">{art.tag}</span>
                </div>
                <div className="article-content">
                  <span className="article-date">{art.date}</span>
                  <h3 className="article-title">{art.title}</h3>
                  <div className="article-read-more">
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. LET'S FIND THE RIGHT GROWTH PATH FOR YOUR BUSINESS */}
      <section className="section conversion-section" id="contact-growth">
        <div className="container">
          <div className="conversion-grid">
            {/* Left: Strategy Call & Info */}
            <div className="conversion-left">
              <div className="section-eyebrow">
                <Sparkles size={14} />
                <span>LET'S TALK GROWTH</span>
              </div>
              <h2 className="conversion-heading">
                Let's Find the <span className="highlight-text">Right</span> Growth Path for Your
                Business
              </h2>
              <p className="conversion-lead">
                Get a practical recommendation based on your business goals, current digital
                presence, and target market.
              </p>

              {/* Consultation Highlights */}
              <div className="call-benefits-list" style={{ marginBottom: "2rem" }}>
                <div className="benefit-item">
                  <CheckCircle2 size={18} className="benefit-check" />
                  <span>Practical review of your current marketing channels and conversion path.</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle2 size={18} className="benefit-check" />
                  <span>Actionable recommendations focused on customer acquisition, not vanity metrics.</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle2 size={18} className="benefit-check" />
                  <span>Clear, honest next steps whether you choose to work with us or not.</span>
                </div>
              </div>

              {/* Prefer a call instead banner */}
              <div className="fit-call-box">
                <div className="fit-call-icon">
                  <PhoneCall size={24} />
                </div>
                <div className="fit-call-info">
                  <h4 className="fit-call-title">Prefer a call instead?</h4>
                  <p className="fit-call-desc">
                    Book a free strategy fit call. 30 minutes. No obligations. We’ll find a time that
                    works for you.
                  </p>
                  <a
                    href="https://wa.me/94775215416?text=Hello%20RV%20INNOVATE%2C%20I%20would%20like%20to%20book%20a%20free%20strategy%20fit%20call."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fit-call-link"
                  >
                    <span>Schedule Free Fit Call</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Recommendation Form */}
            <div className="conversion-right">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
