import { useCallback, useEffect, useState } from "react";
import { settings, seo, greeting } from "./portfolio";
import { useReducedMotion } from "./hooks";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Training from "./components/Training";
import Contact from "./components/Contact";
import Shuriken from "./components/Shuriken";

export default function App() {
  const reduced = useReducedMotion();
  // Same starting value at build time and in the browser (no hydration mismatch).
  const [intro, setIntro] = useState(settings.showIntro);
  const finish = useCallback(() => setIntro(false), []);

  // Skip the intro once we know the visitor prefers reduced motion.
  useEffect(() => {
    if (reduced) setIntro(false);
  }, [reduced]);

  useEffect(() => {
    document.title = seo.title;
  }, []);

  return (
    <>
      {intro && <Intro onDone={finish} />}
      <a className="skip" href="#skills">Skip to content</a>
      <Nav />
      <main>
        <Hero ready={!intro} />
        <Skills />
        <Experience />
        <Certifications />
        <Training />
        <Contact />
      </main>
      <footer className="footer">
        <div className="wrap footer__inner">
          <span>
            <Shuriken size={16} className="brand__mark" /> {greeting.name}, {new Date().getFullYear()}
          </span>
          <span>Defend. Detect. Respond. Repeat.</span>
        </div>
      </footer>
    </>
  );
}
