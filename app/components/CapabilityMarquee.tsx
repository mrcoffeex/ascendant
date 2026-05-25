const capabilities = [
  "Software Development",
  "SaaS Platforms",
  "Websites",
  "Ecommerce",
  "APIs",
  "Design Systems",
  "Internal Tools",
  "Headless Commerce",
];

export function CapabilityMarquee() {
  return (
    <div className="capability-marquee" aria-hidden="true">
      <div className="capability-track">
        <ul className="capability-group">
          {capabilities.map((item) => (
            <li key={`cap-a-${item}`} className="capability-item">
              {item}
            </li>
          ))}
        </ul>
        <ul className="capability-group" aria-hidden="true">
          {capabilities.map((item) => (
            <li key={`cap-b-${item}`} className="capability-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
