import { useEffect, useState } from "react";
import "./Navigation.css";

const links = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Work", "projects"],
  ["Stack", "skills"],
  ["Contact", "contact"],
];

function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)),
      { rootMargin: "-35% 0px -55% 0px" },
    );
    links.forEach(([, id]) => document.getElementById(id) && observer.observe(document.getElementById(id)));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="nav-wrap">
      <a className="nav-brand" href="#top" aria-label="Maida Syed home">MS<span>.</span></a>
      <button className={`nav-toggle ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
        <span /><span />
      </button>
      <nav className={`nav-links ${open ? "is-open" : ""}`} aria-label="Primary navigation">
        {links.map(([label, id]) => (
          <a className={active === id ? "is-active" : ""} href={`#${id}`} key={id} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
      <a className="nav-cta" href="mailto:your.email@example.com">Let&apos;s talk <span>↗</span></a>
    </header>
  );
}

export default Navigation;
