import { useState } from "react";
import "./Contact.css";

const EMAIL = "thelmastephen0@gmail.com";

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project enquiry from ${f.name}`);
    const body = encodeURIComponent(`${f.message}\n\nFrom: ${f.name} (${f.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section className="ct" id="contact">
      <div>
        <h2>Let's work together</h2>
        <p>
          Tell me about your product, what stage it's at and when you need it. I usually reply within a day or two.
        </p>
        <ul>
          <li><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          <li><a href="tel:+2348102609737">+234 810 260 9737</a></li>
          <li><a href="https://www.behance.net/thelmastephen21" target="_blank" rel="noreferrer">Behance profile</a></li>
        </ul>
      </div>
      <form onSubmit={submit}>
        <label>Your name
          <input required value={f.name} onChange={set("name")} autoComplete="name" />
        </label>
        <label>Your email
          <input required type="email" value={f.email} onChange={set("email")} autoComplete="email" />
        </label>
        <label>What do you need designed?
          <textarea required rows="5" value={f.message} onChange={set("message")} />
        </label>
        <button type="submit">Send message</button>
      </form>
    </section>
  );
}
