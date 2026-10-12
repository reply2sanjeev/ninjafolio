import { useEffect, useState } from "react";
import { greeting } from "../portfolio";
import Icon from "./Icon";
import Shuriken from "./Shuriken";

const links = [
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["certifications", "Certifications"],
  ["training", "Training"],
  ["contact", "Contact"],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav__inner">
        <a className="brand" href="#top" aria-label="azureninjas home">
          <Shuriken size={26} className="brand__mark" />
          <span className="brand__name">azureninjas</span>
        </a>
        <button
          className="nav__toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <span className="nav__burger" />
        </button>
        <nav id="nav-links" className={`nav__links ${open ? "is-open" : ""}`}>
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="btn btn--small" href={greeting.resumeLink} target="_blank" rel="noreferrer">
            <Icon name="download" size={16} /> Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
