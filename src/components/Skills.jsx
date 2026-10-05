import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const groups = [
  ["Frontend", ["HTML", "CSS", "JavaScript", "React"]],
  ["Backend", ["Node.js", "Express.js", "PHP"]],
  ["Programming", ["C++", "Python", "JavaScript"]],
  ["Databases", ["PostgreSQL", "SQL", "MongoDB", "Firebase"]],
  ["AI / ML", ["Machine Learning", "AI", "Python", "Gemini API / AI API integration"]],
  ["Tools & concepts", ["Git", "GitHub", "Docker", "REST APIs", "Vercel", "Render", "Neon / PostgreSQL", "Data Structures & Algorithms", "Object-Oriented Programming", "Database Management", "API Development"]],
];

function Skills() {
  const sectionRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setLoaded(true);
        observer.disconnect();
      }
    }, { threshold: 0.25 });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`skills section-shell ${loaded ? "skills-loaded" : ""}`} id="skills" ref={sectionRef}>
      <div className="skills-intro">
        <span className="section-kicker">04 / Toolkit</span>
        <h2 className="section-title">The tools I use to<br /><em>make things real.</em></h2>
        <div className="stack-status">
          <div className="stack-status-top"><span>{loaded ? "Tech stack ready" : "Initializing tech stack..."}</span><strong>{loaded ? "100%" : "0%"}</strong></div>
          <div className="stack-progress"><span /></div>
          <p>{loaded ? "Frontend · Backend · Data · AI · Delivery" : "Loading the systems behind the work"}</p>
        </div>
      </div>
      <div className="skill-groups">
        {groups.map(([title, skills], index) => (
          <motion.div className="skill-group" key={title} initial={{ opacity: 0, x: 25 }} animate={loaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 25 }} transition={{ delay: index * 0.1, duration: 0.5 }}>
            <div className="skill-title"><span>0{index + 1}</span><h3>{title}</h3><i>✓</i></div>
            <div className="skill-pills">{skills.map((skill) => <span className="skill-pill" key={skill}>{skill}<b>↗</b></span>)}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
