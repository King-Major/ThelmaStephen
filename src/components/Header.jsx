import { useState } from "react";
import "./Header.css";

const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hd">
      <a href="#top" className="hd-logo" onClick={() => setOpen(false)}>
        <span className="hd-mark">t</span>
        <span>Thelma Stephen</span>
      </a>
      <nav className={open ? "hd-nav open" : "hd-nav"} aria-label="Main">
        {nav.map((n) => (
          <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
        ))}
        <a className="hd-cta" href="#contact" onClick={() => setOpen(false)}>Hire me</a>
      </nav>
      <button
        className="hd-burger"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span /><span />
      </button>
    </header>
  );
}
