import { useEffect, useRef } from "react";
import "./About.css";

function About() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => entry.isIntersecting && entry.target.classList.add("is-visible"), { threshold: 0.15 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="about section-shell" id="about">
      <div className="about-copy reveal" ref={ref}>
        <span className="section-kicker">01 / About me</span>
        <h2 className="section-title">I build <em>digital places</em> people remember.</h2>
      </div>
      <div className="about-card">
        <div className="about-orbit"><span>MS</span></div>
        <div>
          <p>I am a Computer Science student and software developer interested in building practical web applications and AI-powered solutions.</p>
          <p className="about-muted">I enjoy working across frontend and backend development, exploring technology to solve real-world problems, and teaching Data Structures and Programming alongside my technical work.</p>
        </div>
        <div className="about-highlights">
          <span><strong>BSCS</strong><small>Student</small></span>
          <span><strong>DSA</strong><small>Teaching experience</small></span>
        </div>
      </div>
    </section>
  );
}
export default About;
