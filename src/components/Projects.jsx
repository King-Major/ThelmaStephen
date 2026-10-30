import "./Projects.css";

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
        <p className="avail"><span /> Available for freelance and full-time work</p>
        <h1>Thelma Stephen</h1>
        <p className="sub">
          Product designer in Port Harcourt, Nigeria. I research, wireframe and design apps and websites,
          currently leading design on DoorGrab, a four-platform food delivery product.
        </p>
        <div className="hero-cta">
          <a className="btn-lime" href="#work">See my work</a>
          <a className="btn-ghost" href="#contact">Get in touch</a>
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
