import { useEffect, useState } from "react";
import { greeting, socialMediaLinks } from "../portfolio";
import { img } from "../assets";
import { useReducedMotion } from "../hooks";
import Icon from "./Icon";
import Shuriken from "./Shuriken";
import Tagline from "./Tagline";

const query = [
  "SecurityOperators",
  `| where Alias == "${greeting.alias}"`,
  "| project Name, Role, Base, ActiveSince",
];
const fullLength = query.join("\n").length;

function Kql({ text }) {
  // Light KQL highlighting: pipes, keywords, strings.
  return text.split("\n").map((line, i) => (
    <div key={i} className="kql__line">
      {line.split(/(\|| where | project |"[^"]*"?|==)/).map((tok, j) => {
        if (!tok) return null;
        let c = "";
        if (tok === "|") c = "kql__pipe";
        else if (/^ (where|project) $/.test(tok)) c = "kql__kw";
        else if (tok.startsWith('"')) c = "kql__str";
        else if (tok === "==") c = "kql__op";
        return <span key={j} className={c}>{tok}</span>;
      })}
    </div>
  ));
}

export default function Hero({ ready }) {
  const reduced = useReducedMotion();
  // Always start at 0 so build-time HTML matches the browser's first render.
  const [typed, setTyped] = useState(0);
  const done = typed >= fullLength;

  useEffect(() => {
    if (done) return;
    // Reduced motion: show the full query at once instead of typing it.
    if (reduced) {
      setTyped(fullLength);
      return;
    }
    if (!ready) return;
    const t = setTimeout(() => setTyped((n) => n + 1), typed === 0 ? 400 : 26);
    return () => clearTimeout(t);
  }, [ready, reduced, typed, done]);

  return (
    <section className="hero" id="top">
      <div className="hero__grid" aria-hidden="true" />
      <div className="wrap hero__inner">
        <div className="hero__copy">
          <p className="hero__alias">
            <span className="live-dot" aria-hidden="true" /> {greeting.alias} is on watch
          </p>
          <h1 className="hero__name">
            {/* The space keeps the text as "Sanjeev Rana" for crawlers and screen readers */}
            {greeting.name.split(" ").map((w, i) => (
              <span key={w}>{i > 0 && " "}{w}</span>
            ))}
          </h1>
          <Tagline items={greeting.taglines} ready={ready} />
          <p className="hero__summary">{greeting.summary}</p>

          <div className="hero__actions">
            <a className="btn" href="#contact">Start a conversation</a>
            <a className="btn btn--ghost" href={greeting.resumeLink} target="_blank" rel="noreferrer">
              <Icon name="download" size={16} /> Download resume
            </a>
          </div>
          <ul className="hero__social">
            {socialMediaLinks.map((s) => (
              <li key={s.name}>
                <a href={s.link} target="_blank" rel="noreferrer" aria-label={s.name}>
                  <Icon name={s.icon} size={20} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hero__visual">
          <Shuriken size={420} className="hero__star" />
          <figure className="feed">
            <div className="feed__bar">
              <span><span className="live-dot" aria-hidden="true" /> SOC-01 / operator feed</span>
              <span>IST · UTC+5:30</span>
            </div>
            <div className="feed__frame">
              <img
                src={img("creator.webp")}
                alt="Sanjeev Rana in a hooded ninja outfit with an Azure mask, at a desk surrounded by security dashboards"
                width="1000"
                height="1000"
              />
              <span className="feed__scan" aria-hidden="true" />
              <span className="feed__corner feed__corner--tl" aria-hidden="true" />
              <span className="feed__corner feed__corner--tr" aria-hidden="true" />
              <span className="feed__corner feed__corner--bl" aria-hidden="true" />
              <span className="feed__corner feed__corner--br" aria-hidden="true" />
            </div>
          </figure>

          <div className="kql" aria-label="Sentinel-style query that returns Sanjeev's profile">
            <div className="kql__head">
              <span>Hunting query</span>
              <span>Microsoft Sentinel</span>
            </div>
            <pre className="kql__body">
              <Kql text={query.join("\n").slice(0, typed)} />
              {!done && <span className="kql__caret" aria-hidden="true" />}
            </pre>
            <div className={`kql__result ${done ? "is-shown" : ""}`}>
              <dl className="kql__record">
                {[
                  ["Name", greeting.name],
                  ["Role", greeting.role],
                  ["Base", greeting.base],
                  ["ActiveSince", greeting.activeSince],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="kql__meta">1 record · completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
