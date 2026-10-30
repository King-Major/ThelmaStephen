import "./Projects.css";
import portrait from "../images/thelma potrait.jpeg";

const B = "https://mir-s3-cdn-cf.behance.net/projects/404/";
const G = "https://www.behance.net/gallery/";

const projects = [
  { title: "Diabetes food delivery app", tag: "Mobile app", img: B + "02bf78228662001.Y3JvcCwxMjczLDk5Niw2Myww.png", href: G + "228662001/Diabetes-Food-delivery-App" },
  { title: "Mental health app", tag: "Mobile app", img: B + "85220c234751889.Y3JvcCwxMjI5Myw5NjE2LDAsMzM0.jpg", href: G + "234751889/Mental-health" },
  { title: "Construction website", tag: "Website", img: B + "714335233060847.Y3JvcCw3MTAxLDU1NTQsMCwzOTM3.png", href: G + "233060847/Construction-website-ui-design" },
  { title: "Building UI design", tag: "Web UI", img: B + "f62ae5233062451.Y3JvcCw4MjgwLDY0NzYsMCw0MzI0.png", href: G + "233062451/Building-UI-design" },
  { title: "E-commerce app", tag: "E-commerce", img: B + "fcc861234711171.Y3JvcCw1Mjk1LDQxNDEsMCwxMDc0.png", href: G + "234711171/E-commerce" },
  { title: "E-commerce store", tag: "E-commerce", img: B + "d75610234711601.Y3JvcCw4NzcyLDY4NjEsMCw1MjE.png", href: G + "234711601/E-commerce" },
];

export default function Projects() {
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="avail"><span /> Available for freelance and full-time work</p>
          <p className="hero-role">Product designer</p>
          <h1>Thelma Stephen</h1>
          <div className="sub">
            <p>
              If your company is still struggling to make a statement in the marketplace, or you’re a startup
              building your audience and chasing visibility, I’m the right person for you.
            </p>
            <p>
              I’m your design therapist. I listen first, then I get to the root of what’s holding your product
              back. Whether it’s a muddled user experience, a brand that doesn’t connect, or an idea that hasn’t
              found its shape yet, I help you work through it and come out clearer and stronger.
            </p>
            <p>
              I bring your ideas to life through design. I start with research to understand your users and your
              market, then move through wireframes, design systems, and high-fidelity mockups, so what you end up
              with is not just good-looking but purposeful, consistent, and built to scale.
            </p>
            <p>
              Good design does more than decorate. It helps your business stand out, builds trust with your
              audience, and makes a lasting first impression. That’s what I do for the businesses I work with.
            </p>
          </div>
          <div className="hero-cta">
            <a className="btn-lime" href="#work">See my work</a>
            <a className="btn-ghost" href="#contact">Get in touch</a>
          </div>
        </div>
        <div className="hero-portrait">
          <img src={portrait} alt="Thelma Stephen, product designer" />
        </div>
      </section>
      <section className="work" id="work">
        <h2>Selected work</h2>
        <div className="cards">
          {projects.map((p) => (
            <a key={p.href} className="card" href={p.href} target="_blank" rel="noreferrer">
              <div className="thumb"><img src={p.img} alt={p.title} loading="lazy" /></div>
              <div className="meta"><h3>{p.title}</h3><span>{p.tag}</span></div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
