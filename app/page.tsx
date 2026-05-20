import Image from "next/image";

export default function Home() {
  const clientLogos = [
    { name: "Northline Health", logo: "/logos/northline-health.svg" },
    { name: "Mercury Retail", logo: "/logos/mercury-retail.svg" },
    { name: "Atlas Logistics", logo: "/logos/atlas-logistics.svg" },
    { name: "Summit Finance", logo: "/logos/summit-finance.svg" },
    { name: "Orbit Learning", logo: "/logos/orbit-learning.svg" },
    { name: "Peak Mobility", logo: "/logos/peak-mobility.svg" },
  ];

  return (
    <div className="site-shell">
      <header className="top-nav reveal">
        <div className="container nav-inner">
          <a href="#hero" className="brand-mark" aria-label="Ascendant home">
            <span className="brand-badge" aria-hidden="true">
              <Image
                src="/ascendant-mark.svg"
                alt=""
                width={18}
                height={18}
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
        <section id="hero" className="hero section">
          <div className="container hero-grid">
            <div className="reveal">
              <p className="kicker">Ascendant Software Development Services</p>
              <h1>Build software that climbs above market noise.</h1>
              <p className="lead">
                We design, ship, and scale digital products across software
                development, SaaS platforms, conversion-focused websites, and
                ecommerce systems.
              </p>
              <div className="hero-cta-row">
                <a href="#services" className="btn btn-primary">
                  Explore Services
                </a>
                <a href="#clients" className="btn btn-secondary">
                  See Client Work
                </a>
              </div>
            </div>
            <div className="hero-panel reveal delay-1" aria-hidden="true">
              <div className="app-skeleton">
                <div className="app-skeleton__top">
                  <span className="app-dot" />
                  <span className="app-dot" />
                  <span className="app-dot" />
                </div>
                <div className="app-skeleton__body">
                  <div className="skel skel-title" />
                  <div className="skel skel-row" />
                  <div className="skel skel-row skel-row-short" />
                  <div className="skel-grid">
                    <div className="skel skel-card" />
                    <div className="skel skel-card" />
                  </div>
                  <div className="skel skel-row" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section about">
          <div className="container reveal">
            <p className="kicker">About</p>
            <h2>Engineering discipline. Editorial-level execution.</h2>
            <p>
              Ascendant partners with founders and teams that need outcomes,
              not noise. We run lean squads, move from concept to production
              fast, and build codebases designed to evolve under real business
              pressure.
            </p>
          </div>
        </section>

        <section id="services" className="section services">
          <div className="container">
            <div className="reveal">
              <p className="kicker">Services</p>
              <h2>What we build</h2>
            </div>
            <div className="services-grid">
              <article className="service-card reveal delay-1">
                <h3>Software Development</h3>
                <p>
                  Custom web applications, internal systems, and APIs built for
                  reliability, speed, and maintainability.
                </p>
              </article>
              <article className="service-card reveal delay-2">
                <h3>SaaS Platforms</h3>
                <p>
                  Multi-tenant SaaS products with billing, roles, analytics,
                  and operational tooling from day one.
                </p>
              </article>
              <article className="service-card reveal delay-3">
                <h3>Websites</h3>
                <p>
                  Brand-driven marketing websites that load fast, rank well,
                  and convert with intent.
                </p>
              </article>
              <article className="service-card reveal delay-4">
                <h3>Ecommerce</h3>
                <p>
                  Headless commerce experiences, custom checkouts, and
                  integrations that turn traffic into revenue.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="clients" className="section clients">
          <div className="container">
            <div className="reveal">
              <p className="kicker">Clients</p>
              <h2>Trusted by teams building next-level products</h2>
            </div>
            <div className="logo-marquee reveal delay-1" aria-label="Client logos">
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
            <div className="reveal">
              <p className="kicker">Contact</p>
              <h2>Ready to launch your next product?</h2>
              <p>
                Tell us what you are building. We will map scope, timeline,
                and delivery approach in a focused kickoff.
              </p>
            </div>
            <form className="contact-card reveal delay-1">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" placeholder="Your name" />
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
              />
              <label htmlFor="message">Project brief</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="What are you looking to build?"
              />
              <button type="submit" className="btn btn-primary mt-4">
                Send Inquiry
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
