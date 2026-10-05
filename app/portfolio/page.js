"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, ExternalLink, Filter } from "lucide-react";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Websites & Software" },
    { id: "branding", label: "Brand & Company Profiles" },
    { id: "social", label: "Social Media Growth" },
  ];

  const projects = [
    {
      name: "Sellora",
      category: "web",
      country: "Sri Lanka",
      industry: "AI Commerce & WhatsApp",
      type: "AI Sales Platform & Storefront",
      desc: "24/7 AI salesperson on WhatsApp selling in Sinhala, English & Singlish with automated product recommendations, order confirmation, and online storefront.",
      image: "/images/sellora-showcase.webp",
      link: "https://sellora.nadun.me/",
    },
    {
      name: "DOODLZ",
      category: "web",
      country: "Global",
      industry: "Web3 & Digital Collectibles",
      type: "Interactive Web Application",
      desc: "Vibrant Web3 collectible experience featuring interactive character trait builders, dynamic rarity inspection, and community drop workflows.",
      image: "/images/doodlz-showcase.png",
      link: "https://demo.doodlz.nadun.me/",
    },
    {
      name: "NOVA",
      category: "web",
      country: "Global",
      industry: "Web3 & DeFi",
      type: "Token Ecosystem & Swap UI",
      desc: "Premium Solana-ready Web3 token platform with interactive wallet connection, live liquidity metrics, tokenomics charts, and swap quote preview.",
      image: "/images/nova-showcase.jpg",
      link: "https://demo.nova.nadun.me/",
    },
    {
      name: "AETHER",
      category: "web",
      country: "Global",
      industry: "Digital Identity & Membership",
      type: "Web3 Membership Platform",
      desc: "Decentralized digital membership pass architecture featuring wallet-authenticated identity, tiered access coordinates, and gated events.",
      image: "/images/aether-showcase.jpg",
      link: "https://demo.aether.nadun.me/",
    },
    {
      name: "Nexconix",
      category: "web",
      country: "Sri Lanka / Global",
      industry: "Digital Agency & Technology",
      type: "Corporate & Tech Web Platform",
      desc: "Engineered digital growth platform showcasing enterprise web development, AI automation workflows, eCommerce consultancy, and performance analytics.",
      image: "/images/nexconix-showcase.jpg",
      link: "https://nexconix.vercel.app/",
    },
    {
      name: "Gafe Galle",
      category: "social",
      country: "Galle, Sri Lanka",
      industry: "Café & Dining",
      type: "Social Media Growth",
      desc: "Aesthetic feed curation, artisan coffee & brunch showcase, and community engagement driving foot traffic in Galle Fort.",
      image: "/images/gafe-galle-smm.jpg",
      link: "https://www.instagram.com/gafegalle?igsh=MWxiZWR1YzcxZjd2Ng==",
    },
    {
      name: "The Ivy by Frangipani",
      category: "social",
      country: "Sri Lanka",
      industry: "Hospitality & Luxury Dining",
      type: "Social Media Growth",
      desc: "Luxury tropical villa architecture, serene pool ambiance, and fine dining lifestyle storytelling attracting international guests.",
      image: "/images/the-ivy-frangipani-smm.jpg",
      link: "https://www.instagram.com/theivybyfrangipani_?igsh=Nm1jNzVhazluY3A3",
    },
    {
      name: "Soul of Seafood",
      category: "social",
      country: "Kabalana, Sri Lanka",
      industry: "Beachfront Dining & Seafood",
      type: "Social Media Growth",
      desc: "Vibrant beach club atmosphere, fresh catch culinary reels, and sunset beach dining promotions in Kabalana.",
      image: "/images/soul-of-seafood-smm.jpg",
      link: "https://www.instagram.com/soulofseafood_kabalana?igsh=MWpqbnd0aTY2YnpnNw==",
    },
    {
      name: "Clearpoint Hiriketiya",
      category: "social",
      country: "Hiriketiya, Sri Lanka",
      industry: "Resort & Surf Stay",
      type: "Social Media Growth",
      desc: "Tropical coastal lifestyle reels, surf villa storytelling, and consistent visual identity driving direct guest bookings in Hiriketiya.",
      image: "/images/clearpoint-hiriketiya-smm.jpg",
      link: "https://www.instagram.com/clearpoint.hiriketiya?igsh=cXc4OGF2NGE3NGo0",
    },
  ];

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* Portfolio Hero */}
      <section className="page-hero">
        <div className="hero-glow-blob hero-glow-1"></div>
        <div className="container">
          <div className="page-hero-content center">
            <div className="hero-pill-badge">
              <Sparkles size={14} />
              <span>SELECTED CASE STUDIES & RESULTS</span>
            </div>
            <h1 className="page-title">
              Our Projects. <span className="highlight-text">Your Proof of Success.</span>
            </h1>
            <p className="page-subtitle max-width-md">
              Selected websites, brand systems, and campaigns built around real business objectives.
              Discover how we turn digital channels into profitable customer acquisition systems.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Gallery */}
      <section className="section portfolio-gallery-section">
        <div className="container">
          <div className="category-filter-bar">
            {categories.map((c) => (
              <button
                key={c.id}
                type="button"
                className={`filter-btn ${activeCategory === c.id ? "active" : ""}`}
                onClick={() => setActiveCategory(c.id)}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="portfolio-full-grid">
            {filtered.map((item, idx) => {
              const CardTag = item.link ? "a" : "div";
              const cardProps = item.link
                ? {
                    href: item.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "project-card large project-card-clickable",
                  }
                : { className: "project-card large" };

              return (
                <CardTag key={idx} {...cardProps}>
                  <div className="project-image-wrap">
                    <img
                      src={item.image}
                      alt={item.name}
                      width="1024"
                      height="576"
                      className="project-img"
                    />
                    <div className="project-meta-badge">
                      <span className="proj-country">{item.country}</span>
                      <span className="proj-type">{item.type}</span>
                    </div>
                    {item.link && (
                      <div className="project-ext-badge">
                        <span>{item.link.includes("instagram.com") ? "View Instagram" : "Visit Website"}</span>
                        <ExternalLink size={12} />
                      </div>
                    )}
                  </div>
                  <div className="project-body">
                    <div className="project-industry">{item.industry}</div>
                    <h3 className="project-name">{item.name}</h3>
                    <p className="project-tagline">{item.desc}</p>
                  </div>
                </CardTag>
              );
            })}
          </div>

          {/* Bottom Project Banner */}
          <div className="portfolio-cta-banner">
            <div className="banner-left">
              <h3 className="banner-title">Want Results Like These for Your Business?</h3>
              <p className="banner-desc">
                Let's evaluate your current digital presence and architect a tailored customer acquisition plan.
              </p>
            </div>
            <div className="banner-right">
              <Link href="/#recommendation" className="btn-primary">
                <span>Request a Growth Recommendation</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
