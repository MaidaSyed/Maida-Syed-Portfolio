import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  { number: "01", title: "NextHire AI", type: "AI / Career platform", description: "An AI-powered career platform focused on ATS and resume analysis with AI-assisted interview preparation.", tags: ["AI", "Resume analysis", "Interview prep"], color: "project-gold" },
  { number: "02", title: "Smart Skill Exchange", type: "Full-stack platform", description: "A platform that allows users to exchange and share skills, built with a React frontend and Node.js backend.", tags: ["React", "Node.js", "PostgreSQL / Neon"], color: "project-olive" },
  { number: "03", title: "Plagiarism Detector", type: "C++ / DSA project", description: "A C++ desktop project for document and text processing, using algorithmic techniques for plagiarism detection.", tags: ["C++", "KMP / string matching", "Hashing"], color: "project-cream" },
];
function Projects() {
  return <section className="projects" id="projects"><div className="section-shell"><span className="section-kicker">03 / Selected work</span><h2 className="section-title">Built to solve<br /><em>real problems.</em></h2><div className="project-stack">{projects.map((project, index) => <motion.article className={`project-card ${project.color}`} key={project.title} initial={{ opacity: 0, scale: .96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: .25 }} transition={{ duration: .7, delay: index * .1 }}><div className="project-top"><span>{project.number}</span><span>{project.type}</span></div><div className="project-body"><div><h3>{project.title}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-links"><a href="#" aria-label={`GitHub placeholder for ${project.title}`}>GitHub <span>↗</span></a><a href="#" aria-label={`Live demo placeholder for ${project.title}`}>Live Demo <span>↗</span></a></div></div><div className="project-shape" /></motion.article>)}</div></div></section>;
}
export default Projects;
