import { useCallback, useEffect, useState } from "react";
import { settings, seo, greeting } from "./portfolio";
import { useReducedMotion } from "./hooks";
import HackerScreen from "./components/HackerScreen";
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
  // "hacker" -> "splash" -> "done". Same starting value at build time and in the browser.
  const [stage, setStage] = useState(settings.showIntro ? "hacker" : "done");
  const toSplash = useCallback(() => setStage("splash"), []);
  const finish = useCallback(() => setStage("done"), []);

  // Skip both screens once we know the visitor prefers reduced motion.
  useEffect(() => {
    if (reduced) setStage("done");
  }, [reduced]);

  useEffect(() => {
    document.title = seo.title;
  }, []);

  const intro = stage !== "done";

  return (
    <>
      {stage === "hacker" && <HackerScreen onEnter={toSplash} />}
      {stage === "splash" && <Intro onDone={finish} />}
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
