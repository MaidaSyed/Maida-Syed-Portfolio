import { useState } from "react";
import Intro from "./components/Intro";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <Intro onComplete={() => setShowIntro(false)} />
      )}
      <div id="top">
        <Navigation />
        <main className="site-main">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;