import "./About.css";

const skills = [
  { h: "UI", t: "Interactive design, design systems and style guides" },
  { h: "UX", t: "User interviews, surveys, usability testing, wireframing and prototyping" },
  { h: "Front-end", t: "HTML and CSS, so designs hand over cleanly to developers" },
  { h: "Tools", t: "Figma, FigJam, Miro, Canva, Google tools" },
];

const jobs = [
  { role: "Lead Product Designer", co: "DoorGrab Technologies, Sokoto", when: "Aug 2026 – now", note: "Designing a food delivery product across four connected apps: customer, rider, restaurant and admin. 1,000+ screens and the shared design system." },
  { role: "User Interface Designer", co: "Code Warriors Tech, Kaduna", when: "Aug 2025 – now", note: "Worked in the company design system on an e-commerce app and a university portal." },
  { role: "User Interface Designer", co: "Beestrix Technologies, Ghana", when: "Jan – Feb 2026", note: "Helped ship a point-of-sale system for businesses with multiple locations and terminals." },
  { role: "UI/UX Designer", co: "ProjectX, Kaduna", when: "Feb 2025 – Jan 2026", note: "Designed the PQ App for students. Engagement rose 50% across about 3 institutions." },
  { role: "UI/UX Designer", co: "Xander Limited, Port Harcourt", when: "May – Jun 2025", note: "Led the website design and improved its user experience." },
  { role: "UI/UX Designer", co: "Phibest Global Service, Port Harcourt", when: "Mar – May 2025", note: "Led a website design that increased traffic and conversions." },
];

const services = [
  { h: "Product design", t: "Mobile apps and web products, from first idea to developer-ready screens." },
  { h: "UX research", t: "Interviews, surveys and usability tests that show what users need." },
  { h: "Wireframes and prototypes", t: "Clickable flows you can test before anything is built." },
  { h: "Design systems", t: "Reusable components and style guides that keep a product consistent." },
];

export default function About() {
  return (
    <>
      <section className="ab" id="about">
        <h2>About</h2>
        <div className="ab-grid">
          <p className="ab-lead">
            I design apps and websites people find easy to use. I start with research, map the flows in wireframes,
            then build the visuals and a design system developers can work from.
          </p>
          <dl className="skills">
            {skills.map((s) => (
              <div key={s.h}><dt>{s.h}</dt><dd>{s.t}</dd></div>
            ))}
          </dl>
        </div>

        <h3 className="ab-sub">Experience</h3>
        <ol className="jobs">
          {jobs.map((j) => (
            <li key={j.co + j.when}>
              <span className="when">{j.when}</span>
              <div>
                <strong>{j.role}</strong>
                <span className="co">{j.co}</span>
                <p>{j.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="sv" id="services">
        <h2>How I can help</h2>
        <div className="sv-grid">
          {services.map((s) => (
            <div key={s.h} className="sv-item">
              <h3>{s.h}</h3>
              <p>{s.t}</p>
            </div>
          ))}
        </div>
        <a className="sv-cta" href="mailto:thelmastephen0@gmail.com">Email Thelma</a>
      </section>
    </>
  );
}
