import "./Process.css";

const steps = [
  { h: "Research", t: "Interviews and surveys with the people who will use the product." },
  { h: "Wireframes", t: "Flows and layouts mapped out before any visual design." },
  { h: "Visual design", t: "High-fidelity screens built on a consistent design system." },
  { h: "Handoff", t: "Developer-ready files, and I stay on to answer questions during the build." },
];

export default function Process() {
  return (
    <section className="pr" id="process">
      <h2>How I work</h2>
      <ol className="pr-list">
        {steps.map((s, i) => (
          <li key={s.h}>
            <span className="pr-n">{i + 1}</span>
            <h3>{s.h}</h3>
            <p>{s.t}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
