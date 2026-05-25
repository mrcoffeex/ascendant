import Image from "next/image";
import brandIcon from "./icon.png";
import { CapabilityMarquee } from "./components/CapabilityMarquee";
import { ContactForm } from "./components/ContactForm";
import { HeroLiveDashboard } from "./components/HeroLiveMetrics";
import { MotionText } from "./components/MotionText";

const clientLogos = [
  { name: "Northline Health", logo: "/logos/northline-health.svg" },
  { name: "Mercury Retail", logo: "/logos/mercury-retail.svg" },
  { name: "Atlas Logistics", logo: "/logos/atlas-logistics.svg" },
  { name: "Summit Finance", logo: "/logos/summit-finance.svg" },
  { name: "Orbit Learning", logo: "/logos/orbit-learning.svg" },
  { name: "Peak Mobility", logo: "/logos/peak-mobility.svg" },
];

const heroStats = [
  {
    value: "6 wks",
    label: "Avg. launch to production",
    detail: "Concept to live deployment",
    tone: "neutral" as const,
  },
  {
    value: "40%",
    label: "Avg. conversion lift",
    detail: "Measured after relaunch",
    tone: "up" as const,
  },
  {
    value: "99.9%",
    label: "Uptime on managed systems",
    detail: "Production-grade SLA",
    tone: "good" as const,
  },
];

const services = [
  {
    id: "software",
    tag: "01 — Software Development",
    title: "Custom apps that run your business",
    description:
      "Replace spreadsheets and duct-taped tools with web apps built around how your team actually works — faster ops, fewer errors, real visibility.",
    outcomes: [
      "Internal dashboards & admin panels",
      "APIs and third-party integrations",
      "Workflow automation that saves hours weekly",
    ],
    cta: "Scope your app",
    demo: "software" as const,
  },
  {
    id: "saas",
    tag: "02 — SaaS Platforms",
    title: "Launch a product customers pay for",
    description:
      "From signup to subscription billing, we ship multi-tenant SaaS with the infrastructure investors and customers expect on day one.",
    outcomes: [
      "Auth, roles, and tenant isolation",
      "Stripe billing & usage metering",
      "Analytics and admin tooling built in",
    ],
    cta: "Plan your SaaS",
    demo: "saas" as const,
  },
  {
    id: "websites",
    tag: "03 — Websites",
    title: "Sites that turn visitors into leads",
    description:
      "Editorial-grade marketing sites engineered for speed, SEO, and conversion — so every visit has a clear path to action.",
    outcomes: [
      "Sub-2s load times on mobile",
      "Conversion-optimized layouts",
      "CMS you can update without a developer",
    ],
    cta: "Get a site audit",
    demo: "websites" as const,
  },
  {
    id: "ecommerce",
    tag: "04 — Ecommerce",
    title: "Stores built to close the sale",
    description:
      "Headless commerce, custom checkouts, and integrations that remove friction — so traffic becomes revenue, not bounce rate.",
    outcomes: [
      "Custom checkout flows",
      "Inventory & fulfillment sync",
      "Upsells, bundles, and cart recovery",
    ],
    cta: "Boost your store",
    demo: "ecommerce" as const,
  },
];

function ServiceDemo({ type }: { type: (typeof services)[number]["demo"] }) {
  switch (type) {
    case "software":
      return (
        <div className="demo demo-software" aria-hidden="true">
          <div className="demo-chrome">
            <span className="demo-dot" />
            <span className="demo-dot" />
            <span className="demo-dot" />
            <span className="demo-chrome-title">Ops Dashboard</span>
          </div>
          <div className="demo-body">
            <div className="demo-kanban">
              <div className="demo-kanban-col">
                <span className="demo-kanban-label">Backlog</span>
                <div className="demo-kanban-card">Invoice sync</div>
                <div className="demo-kanban-card demo-kanban-card--muted">
                  User export
                </div>
              </div>
              <div className="demo-kanban-col">
                <span className="demo-kanban-label">In Progress</span>
                <div className="demo-kanban-card demo-kanban-card--active">
                  API v2 rollout
                </div>
              </div>
              <div className="demo-kanban-col">
                <span className="demo-kanban-label">Done</span>
                <div className="demo-kanban-card demo-kanban-card--done">
                  Auth module
                </div>
                <div className="demo-kanban-card demo-kanban-card--done">
                  Reports
                </div>
              </div>
            </div>
            <div className="demo-stat-row">
              <div className="demo-stat">
                <span className="demo-stat-value">847</span>
                <span className="demo-stat-label">Tasks automated</span>
              </div>
              <div className="demo-stat">
                <span className="demo-stat-value demo-stat-value--accent">
                  -62%
                </span>
                <span className="demo-stat-label">Manual work</span>
              </div>
            </div>
          </div>
        </div>
      );

    case "saas":
      return (
        <div className="demo demo-saas" aria-hidden="true">
          <div className="demo-chrome">
            <span className="demo-dot" />
            <span className="demo-dot" />
            <span className="demo-dot" />
            <span className="demo-chrome-title">SaaS Console</span>
          </div>
          <div className="demo-body">
            <div className="demo-mrr">
              <div className="demo-mrr-header">
                <span>Monthly Recurring Revenue</span>
                <span className="demo-badge demo-badge--live">Live</span>
              </div>
              <div className="demo-mrr-value">$124,580</div>
              <div className="demo-mrr-delta">+18.4% vs last month</div>
            </div>
            <div className="demo-chart">
              {[42, 58, 51, 72, 68, 85, 91].map((h, i) => (
                <div
                  key={i}
                  className="demo-chart-bar"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
            <div className="demo-saas-metrics">
              <div className="demo-saas-metric">
                <span>2,418</span>
                <small>Active users</small>
              </div>
              <div className="demo-saas-metric">
                <span>94%</span>
                <small>Retention</small>
              </div>
              <div className="demo-saas-metric">
                <span>312</span>
                <small>Subscriptions</small>
              </div>
            </div>
          </div>
        </div>
      );

    case "websites":
      return (
        <div className="demo demo-websites" aria-hidden="true">
          <div className="demo-browser">
            <div className="demo-browser-bar">
              <span className="demo-dot" />
              <span className="demo-dot" />
              <span className="demo-dot" />
              <span className="demo-browser-url">yourbrand.com</span>
            </div>
            <div className="demo-browser-page">
              <div className="demo-site-nav">
                <span className="demo-site-logo" />
                <span className="demo-site-link" />
                <span className="demo-site-link" />
                <span className="demo-site-cta">Get Started</span>
              </div>
              <div className="demo-site-hero">
                <div className="demo-site-headline" />
                <div className="demo-site-sub" />
                <div className="demo-site-sub demo-site-sub--short" />
                <div className="demo-site-btn-row">
                  <span className="demo-site-btn demo-site-btn--primary">
                    Book a Demo
                  </span>
                  <span className="demo-site-btn">Learn More</span>
                </div>
              </div>
              <div className="demo-site-proof">
                <span>Trusted by 500+ teams</span>
                <div className="demo-site-logos">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    case "ecommerce":
      return (
        <div className="demo demo-ecommerce" aria-hidden="true">
          <div className="demo-chrome">
            <span className="demo-dot" />
            <span className="demo-dot" />
            <span className="demo-dot" />
            <span className="demo-chrome-title">Storefront</span>
          </div>
          <div className="demo-body demo-body--split">
            <div className="demo-products">
              <div className="demo-product">
                <div className="demo-product-img" />
                <div className="demo-product-info">
                  <span className="demo-product-name">Pro Kit</span>
                  <span className="demo-product-price">$89</span>
                </div>
              </div>
              <div className="demo-product">
                <div className="demo-product-img demo-product-img--alt" />
                <div className="demo-product-info">
                  <span className="demo-product-name">Starter Pack</span>
                  <span className="demo-product-price">$49</span>
                </div>
              </div>
            </div>
            <div className="demo-cart">
              <span className="demo-cart-title">Cart (2)</span>
              <div className="demo-cart-line">
                <span>Pro Kit × 1</span>
                <span>$89</span>
              </div>
              <div className="demo-cart-line">
                <span>Starter Pack × 1</span>
                <span>$49</span>
              </div>
              <div className="demo-cart-total">
                <span>Total</span>
                <span>$138</span>
              </div>
              <span className="demo-cart-checkout">Checkout →</span>
            </div>
          </div>
        </div>
      );
  }
}

export default function Home() {
  return (
    <div className="site-shell">
      <header className="top-nav">
        <div className="container nav-inner">
          <a href="#hero" className="brand-mark" aria-label="Ascendant home">
            <span className="brand-badge" aria-hidden="true">
              <Image
                src={brandIcon}
                alt=""
                width={32}
                height={32}
                priority
                className="brand-badge-icon"
              />
            </span>
            Ascendant
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
          </nav>
          <a href="#contact" className="btn btn-primary">
            Start Project
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="hero section hero-scroll-stage">
          <div className="hero-scroll-inner">
            <div className="container">
              <div className="hero-grid">
                <div className="hero-copy">
                  <p className="kicker">Ascendant Software Development</p>
                  <MotionText
                    as="h1"
                    lines={[
                      [{ text: "Ascend your business" }],
                      [
                        { text: "to the " },
                        { text: "next level", highlight: true },
                      ],
                    ]}
                  />
                  <p className="lead">
                    We design, build, and launch digital products for founders
                    and teams who need results — faster launches, higher
                    conversion, and systems that scale without breaking.
                  </p>
                  <div className="hero-cta-row">
                    <a href="#contact" className="btn btn-primary">
                      Contact Us
                    </a>
                  </div>
                  <CapabilityMarquee />
                </div>

                <div className="hero-panel" aria-hidden="true">
                  <div className="hero-dashboard">
                    <div className="hero-dashboard__chrome">
                      <span className="demo-dot" />
                      <span className="demo-dot" />
                      <span className="demo-dot" />
                      <span className="hero-dashboard__title">
                        Launch Console
                      </span>
                      <span className="demo-badge demo-badge--live">Live</span>
                    </div>
                    <div className="hero-dashboard__body">
                      <HeroLiveDashboard />
                      <div className="hero-dashboard__chart">
                        <span className="hero-chart-label">Weekly signups</span>
                        <div className="hero-chart-bars">
                          {[38, 52, 45, 68, 61, 78, 92].map((h, i) => (
                            <div
                              key={i}
                              className="hero-chart-bar"
                              style={{ height: `${h}%` }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="hero-dashboard__deploy">
                        <span className="hero-deploy-dot" />
                        <span>v2.4 deployed — all systems operational</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container motion-reveal">
            <p className="kicker">About</p>
            <h2>Engineering discipline. Editorial-level execution.</h2>
            <p>
              Ascendant partners with founders and teams that need outcomes, not
              noise. We run lean squads, move from concept to production fast,
              and build codebases designed to evolve under real business
              pressure.
            </p>

            <div className="hero-proof">
              <p className="hero-proof__kicker">Results at a glance</p>
              <ul className="hero-stats" aria-label="Key results">
                {heroStats.map((stat) => (
                  <li
                    key={stat.label}
                    className={`hero-stat-card hero-stat-card--${stat.tone}`}
                  >
                    <strong className="hero-stat-card__value">
                      {stat.value}
                    </strong>
                    <div className="hero-stat-card__body">
                      <span className="hero-stat-card__label">
                        {stat.label}
                      </span>
                      <span className="hero-stat-card__detail">
                        {stat.detail}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <div className="services-header motion-reveal">
              <p className="kicker">Services</p>
              <h2>See what we build — before you buy</h2>
              <p className="services-lead">
                Every service below is a real deliverable category we ship for
                clients. Explore the live-style previews, then tell us which
                outcome you need.
              </p>
            </div>
            <div className="services-showcases">
              {services.map((service, index) => (
                <article
                  key={service.id}
                  id={service.id}
                  className={`service-showcase motion-reveal delay-${Math.min(index + 1, 4)}`}
                >
                  <div className="service-showcase__content">
                    <p className="service-tag">{service.tag}</p>
                    <h3>{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <ul className="service-outcomes">
                      {service.outcomes.map((outcome) => (
                        <li key={outcome}>{outcome}</li>
                      ))}
                    </ul>
                    <a href="#contact" className="btn btn-primary">
                      {service.cta}
                    </a>
                  </div>
                  <div className="service-showcase__demo">
                    <ServiceDemo type={service.demo} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="clients" className="section clients">
          <div className="container">
            <div className="motion-reveal">
              <p className="kicker">Clients</p>
              <h2>Trusted by teams building next-level products</h2>
            </div>
            <div
              className="logo-marquee motion-reveal delay-1"
              aria-label="Client logos"
            >
              <div className="logo-track">
                <ul className="logo-group">
                  {clientLogos.map((client) => (
                    <li className="logo-item" key={`logo-a-${client.name}`}>
                      <Image
                        src={client.logo}
                        alt={`${client.name} logo`}
                        width={180}
                        height={60}
                        className="logo-image"
                      />
                    </li>
                  ))}
                </ul>
                <ul className="logo-group" aria-hidden="true">
                  {clientLogos.map((client) => (
                    <li className="logo-item" key={`logo-b-${client.name}`}>
                      <Image
                        src={client.logo}
                        alt=""
                        width={180}
                        height={60}
                        className="logo-image"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container contact-grid">
            <div className="motion-reveal">
              <p className="kicker">Contact</p>
              <h2>Ready to launch your next product?</h2>
              <p>
                Tell us what you are building. We will map scope, timeline, and
                delivery approach in a focused kickoff — no sales pressure, just
                a clear path forward.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </div>
  );
}
