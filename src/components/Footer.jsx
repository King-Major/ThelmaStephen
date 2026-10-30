import "./Footer.css";

// TODO: replace "#" with her real LinkedIn and Twitter links
const LINKS = {
  behance: "https://www.behance.net/thelmastephen21",
  linkedin: "#",
  twitter: "#",
  email: "mailto:thelmastephen0@gmail.com",
  phone: "tel:+2348102609737",
};

const columns = [
  {
    title: "Work",
    links: [
      { label: "Diabetes food delivery app", href: "https://www.behance.net/gallery/228662001/Diabetes-Food-delivery-App" },
      { label: "Mental health app", href: "https://www.behance.net/gallery/234751889/Mental-health" },
      { label: "Construction website", href: "https://www.behance.net/gallery/233060847/Construction-website-ui-design" },
      { label: "All projects on Behance", href: LINKS.behance },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Product design", href: "#services" },
      { label: "UX research", href: "#services" },
      { label: "Wireframing & prototyping", href: "#services" },
      { label: "Design systems", href: "#services" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Behance", href: LINKS.behance },
      { label: "LinkedIn", href: LINKS.linkedin },
      { label: "Twitter", href: LINKS.twitter },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "thelmastephen0@gmail.com", href: LINKS.email },
      { label: "+234 810 260 9737", href: LINKS.phone },
      { label: "Port Harcourt, Nigeria", href: null },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="ft" id="footer">
      <div className="ft-banner">
        <p>Have a product idea? Let's design it together.</p>
        <a className="ft-banner-btn" href={LINKS.email}>
          Start a project <span aria-hidden="true">→</span>
        </a>
      </div>

      <div className="ft-bar">
        <a href="#" className="ft-logo" aria-label="Thelma Stephen home">
          <span className="ft-mark">t</span>
          <span>Thelma Stephen</span>
        </a>
        <a className="ft-cta" href={LINKS.email}>
          <span>Hire me</span>
          <i aria-hidden="true">→</i>
        </a>
      </div>

      <div className="ft-grid">
        {columns.map((col) => (
          <nav key={col.title} className="ft-col" aria-label={col.title}>
            <h3>{col.title}</h3>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  {l.href ? (
                    <a
                      href={l.href}
                      {...(l.href.startsWith("http")
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                    >
                      {l.label}
                    </a>
                  ) : (
                    <span>{l.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="ft-word" aria-hidden="true">thelma stephen</div>

      <div className="ft-legal">
        <span>© {new Date().getFullYear()} Thelma Stephen</span>
        <span>Designing products people enjoy using.</span>
      </div>
    </footer>
  );
}
