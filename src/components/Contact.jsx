import "./Contact.css";

function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="section-shell">
        <span className="section-kicker">05 / Contact</span>
        <h2>Have a good idea?<br /><em>Let&apos;s make it happen.</em></h2>
        <p className="contact-tagline">Maida Syed — software developer building practical, thoughtful digital experiences.</p>
        <a className="contact-email" href="mailto:maidasyed6@gmail.com">
          maidasyed6@gmail.com <span>↗</span>
        </a>
        <div className="contact-bottom">
          <div className="contact-brand">
            <strong>MS<span>.</span></strong>
            <small>© {new Date().getFullYear()} Maida Syed</small>
          </div>
          <nav className="contact-nav" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </nav>
          <div className="contact-socials">
            <a href="https://github.com/MaidaSyed" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href="https://www.linkedin.com/in/maida-syed-99468a26b/?isSelfProfile=true" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="mailto:maidasyed6@gmail.com">Email ↗</a>
          </div>
        </div>
        <div className="contact-endline"><span>Designed &amp; built with care</span><span>Black / Soft yellow</span></div>
      </div>
    </footer>
  );
}

export default Contact;
