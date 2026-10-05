import Link from "next/link";
import {
  Sparkles,
  ShieldCheck,
  Target,
  Zap,
  Heart,
  Award,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Users,
  Compass,
  FileCheck,
} from "lucide-react";
import ContactForm from "../components/ContactForm";

export const metadata = {
  title: "About Us | RV INNOVATE",
  description:
    "Learn about RV INNOVATE's mission, values, and strategy-led philosophy. We are a premier branding and digital marketing agency in Sri Lanka helping businesses scale.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Excellence",
      icon: <Award size={28} className="value-icon" />,
      desc: "We pursue the highest standards in every project. By blending creativity, strategy, and execution, we deliver measurable results that drive real business growth.",
    },
    {
      title: "Agility",
      icon: <Zap size={28} className="value-icon" />,
      desc: "In a fast-moving digital world, we stay flexible and adapt quickly. This ensures our clients stay ahead of trends, algorithm shifts, and market competitors.",
    },
    {
      title: "Empathy",
      icon: <Heart size={28} className="value-icon" />,
      desc: "We put people first. By listening, understanding, and collaborating closely, we create meaningful solutions that align with genuine business objectives.",
    },
  ];

  const differentiators = [
    {
      title: "Full-Spectrum Digital Expertise",
      desc: "From SEO to social media, PPC to high-converting web design — we deliver comprehensive RV digital solutions under one roof.",
      icon: "/images/Full-Spectrum-Digital-Expertise.svg",
    },
    {
      title: "Data-Driven Strategies",
      desc: "We don’t guess. Every campaign and redesign is powered by real customer data, analytics, and performance insights.",
      icon: "/images/Data-Driven-Strategies.svg",
    },
    {
      title: "Transparent Communication",
      desc: "You’re always in the loop. Clear reporting, regular performance syncs, and honest advice come standard.",
      icon: "/images/Transparent-Communication.svg",
    },
    {
      title: "Custom-Tailored Solutions",
      desc: "No one-size-fits-all strategies here. We design every system around your specific target audience and revenue model.",
      icon: "/images/Custome-Tailored-Solutions.svg",
    },
    {
      title: "Proven Results",
      desc: "We’ve helped over 250+ brands scale their traffic, qualified leads, and online sales with predictable growth.",
      icon: "/images/Proven-Results.svg",
    },
    {
      title: "Dedicated Account Managers",
      desc: "One point of contact. Total accountability. Complete focus on your ongoing business success and peace of mind.",
      icon: "/images/Website-Design-Optimization.svg",
    },
  ];

  const faqs = [
    {
      q: "How does RV INNOVATE differ from typical marketing agencies?",
      a: "Most agencies sell isolated services (just ads, just posts, or just a website) with no connection between them. RV INNOVATE builds connected customer acquisition systems — tying together demand generation, conversion web design, CRM follow-up, and clear measurement so every marketing dollar works toward acquiring real customers.",
    },
    {
      q: "Who is the RV Acquisition System best suited for?",
      a: "We work best with B2B companies, service-based businesses, premium retail brands, and established companies who already have an offer that converts, but whose current marketing feels fragmented, inconsistent, or reliant on word-of-mouth.",
    },
    {
      q: "What does the onboarding process look like?",
      a: "We begin with our Diagnose phase — assessing your current traffic, offer, positioning, and conversion leaks. We then present a comprehensive Blueprint outlining channel roles, conversion funnels, and KPIs before executing anything.",
    },
    {
      q: "How soon can we expect to see results?",
      a: "Paid advertising and landing page overhauls typically generate qualified leads within the first 14 to 30 days. Organic channels like SEO, brand positioning, and content authority compound strongly over 3 to 6 months.",
    },
  ];

  return (
    <>
      {/* About Hero */}
      <section className="page-hero">
        <div className="hero-glow-blob hero-glow-1"></div>
        <div className="container">
          <div className="page-hero-content center">
            <div className="hero-pill-badge">
              <Sparkles size={14} />
              <span>WHO WE ARE</span>
            </div>
            <h1 className="page-title">
              Create Value. <span className="highlight-text">Build Trust.</span> Drive Results.
            </h1>
            <p className="page-subtitle max-width-md">
              Your Reliable Partner in Driving Digital Success and Business Growth in Sri Lanka and Worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section about-narrative-section">
        <div className="container">
          <div className="narrative-grid">
            <div className="narrative-main">
              <div className="section-eyebrow">
                <Compass size={14} />
                <span>OUR PHILOSOPHY</span>
              </div>
              <h2 className="narrative-heading">
                A Forward-Thinking Digital Agency Built on Clarity and Strategy
              </h2>
              <div className="narrative-body">
                <p>
                  RV INNOVATE is a forward-thinking branding and digital marketing agency, committed to
                  delivering modern, tech-enabled solutions that drive meaningful business growth. We blend
                  creativity with strategy to help brands build stronger connections, stand out in competitive
                  markets, and achieve sustainable success.
                </p>
                <p>
                  Our goal is to create unique, results-driven experiences that are both cost-effective and deeply
                  impactful. At RV INNOVATE, we value transparency, long-term partnerships, and customer
                  satisfaction. Every idea we bring to life is designed to move your business forward with the power
                  of full-circle digital innovation.
                </p>
              </div>
            </div>

            <div className="narrative-side">
              <div className="mission-card">
                <div className="mission-icon-wrap">
                  <Target size={24} />
                </div>
                <h3 className="mission-title">Our Mission</h3>
                <p className="mission-text">
                  “We turn business ideas into purposeful digital journeys by bringing together technology, commerce, and marketing—creating digital experiences that help businesses find their people, earn their trust, and grow beyond expectations.”
                </p>
              </div>

              <div className="vision-card">
                <div className="vision-icon-wrap">
                  <TrendingUp size={24} />
                </div>
                <h3 className="vision-title">Our Vision</h3>
                <p className="vision-text">
                  “To shape a future where every business idea has the digital strength to be seen, chosen, and remembered.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section values-section section-dark">
        <div className="container">
          <div className="section-header center">
            <div className="section-eyebrow">
              <ShieldCheck size={14} />
              <span>GUIDING PRINCIPLES</span>
            </div>
            <h2 className="section-title">
              Our <span className="highlight-text">Core Values</span>
            </h2>
            <p className="section-desc max-width-md">
              Our values guide us in delivering innovative, transparent, and results-driven digital solutions
              for lasting success.
            </p>
          </div>

          <div className="values-grid">
            {values.map((v, idx) => (
              <div key={idx} className="value-card">
                <div className="value-card-top">{v.icon}</div>
                <h3 className="value-title">{v.title}</h3>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Leading Brands Choose RV */}
      <section className="section differentiators-section">
        <div className="container">
          <div className="section-header center">
            <div className="section-eyebrow">
              <Award size={14} />
              <span>THE RV ADVANTAGE</span>
            </div>
            <h2 className="section-title">
              Why Leading Brands Choose <span className="highlight-text">RV INNOVATE</span>
            </h2>
            <p className="section-desc max-width-md">
              We help your brand grow with proven, data-led strategies and relentless focus on commercial
              outcomes.
            </p>
          </div>

          <div className="differentiators-grid">
            {differentiators.map((d, idx) => (
              <div key={idx} className="diff-card">
                <div className="diff-icon-wrap">
                  <img
                    src={d.icon}
                    alt={d.title}
                    width="44"
                    height="44"
                    className="diff-icon-img"
                  />
                </div>
                <h3 className="diff-title">{d.title}</h3>
                <p className="diff-desc">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section faq-section section-dark">
        <div className="container">
          <div className="section-header center">
            <div className="section-eyebrow">
              <Sparkles size={14} />
              <span>FAQ</span>
            </div>
            <h2 className="section-title">
              What You <span className="highlight-text">Need to Know</span>
            </h2>
            <p className="section-desc max-width-md">
              Learn more about how we work, what we offer, and how we can support your business goals.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <h3 className="faq-question">{faq.q}</h3>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section" id="recommendation">
        <div className="container">
          <ContactForm
            title="Let’s Discuss Your Growth Strategy"
            subtitle="Request a complimentary RV growth recommendation or book a 15-minute introductory call."
          />
        </div>
      </section>
    </>
  );
}
