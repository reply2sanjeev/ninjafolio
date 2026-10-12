import { useRef, useState } from "react";
import { skills } from "../portfolio";
import SectionHead from "./SectionHead";

export default function Skills() {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);
  const s = skills[active];

  const onKey = (e) => {
    const dir = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!dir) return;
    e.preventDefault();
    const next = (active + dir + skills.length) % skills.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section className="section" aria-labelledby="skills">
      <div className="wrap">
        <SectionHead
          id="skills"
          title="Skills"
          lede="Five disciplines, one job: keep cloud estates fast, compliant and hard to break into."
        />
        <div className="arsenal">
          <div className="arsenal__tabs" role="tablist" aria-orientation="vertical" onKeyDown={onKey}>
            {skills.map((sk, i) => (
              <button
                key={sk.title}
                ref={(el) => (tabs.current[i] = el)}
                role="tab"
                id={`skill-tab-${i}`}
                aria-selected={i === active}
                aria-controls="skill-panel"
                tabIndex={i === active ? 0 : -1}
                className="arsenal__tab"
                onClick={() => setActive(i)}
              >
                <span className="arsenal__count">{sk.points.length}</span>
                {sk.title}
              </button>
            ))}
          </div>
          <div
            className="arsenal__panel"
            role="tabpanel"
            id="skill-panel"
            aria-labelledby={`skill-tab-${active}`}
            key={active}
          >
            <h3>{s.title}</h3>
            <ul className="tags" aria-label="Tools">
              {s.tools.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <ul className="ticks">
              {s.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
