import { motion } from "framer-motion";
import "./Experience.css";

const items = [
  { year: "Professional experience", role: "MERN Stack Developer", company: "Potentials Dev", text: "Professional software development experience across the MERN stack." },
  { year: "Professional experience", role: "Frontend Developer", company: "EFlex Solutions", text: "Frontend and web development experience focused on building user-facing interfaces." },
  { year: "Summer program", role: "Summer Intern / Summer Program Participant", company: "ISPR", text: "Participated in the ISPR summer internship and program experience." },
  { year: "Teaching & leadership", role: "STLA / SLA", company: "DSA Lab — FAST-NUCES", text: "Teach and assist students in Data Structures and Programming." },
];
function Experience() {
  return <section className="experience section-shell" id="experience">
    <div className="experience-heading"><span className="section-kicker">02 / Experience</span><h2 className="section-title">A few chapters<br /><em>in the making.</em></h2></div>
    <div className="experience-list">{items.map((item, index) => <motion.article className="experience-card" key={item.company} initial={{ opacity: 0, y: 45 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} transition={{ delay: index * .12, duration: .7 }}>
      <span className="experience-index">0{index + 1}</span><div className="experience-year">{item.year}</div><div><h3>{item.role}</h3><p className="experience-company">{item.company}</p><p className="experience-text">{item.text}</p></div><span className="experience-arrow">↗</span>
    </motion.article>)}</div>
  </section>;
}
export default Experience;
