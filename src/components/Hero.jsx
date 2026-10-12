import { useEffect, useState } from "react";
import { greeting, heroCards, socialMediaLinks } from "../portfolio";
import { img } from "../assets";
import { useReducedMotion } from "../hooks";
import Icon from "./Icon";
import Shuriken from "./Shuriken";
import Tagline from "./Tagline";

// Light highlighting shared by KQL, YAML and Python: comments, strings, pipes, keywords.
const TOKENS = /(#.*$|"[^"]*"?|\|(?= )|==|\b(?:where|project|summarize|by|extend|trigger|stages|stage)\b)/;

function Code({ text }) {
  return text.split("\n").map((line, i) => (
    <div key={i} className="kql__line">
      {line.split(TOKENS).map((tok, j) => {
        if (!tok) return null;
        let c = "";
        if (tok.startsWith("#")) c = "kql__cmt";
        else if (tok === "|") c = "kql__pipe";
        else if (tok === "==") c = "kql__op";
        else if (tok.startsWith('"')) c = "kql__str";
        else if (/^[a-z]+$/.test(tok)) c = "kql__kw";
        return <span key={j} className={c}>{tok}</span>;
      })}
    </div>
  ));
}

// One query card. Hero gives it a new key per role, so typing restarts on every switch.
function QueryCard({ card, ready }) {
  const reduced = useReducedMotion();
  const text = card.lines.join("\n");
  // Always start at 0 so build-time HTML matches the browser's first render.
  const [typed, setTyped] = useState(0);
  const done = typed >= text.length;

  useEffect(() => {
    if (done) return;
    // Reduced motion: show the full query at once instead of typing it.
    if (reduced) {
      setTyped(text.length);
      return;
    }
    if (!ready) return;
    const t = setTimeout(() => setTyped((n) => n + 1), typed === 0 ? 300 : 18);
    return () => clearTimeout(t);
  }, [ready, reduced, typed, done, text.length]);

  return (
    <div className="kql" aria-label={card.label}>
      <div className="kql__head">
        <span>{card.head}</span>
        <span>{card.tool}</span>
      </div>
      <pre className="kql__body">
        <Code text={text.slice(0, typed)} />
        {!done && <span className="kql__caret" aria-hidden="true" />}
      </pre>
      <div className={`kql__result ${done ? "is-shown" : ""}`}>
        <dl className="kql__record">
          {card.record.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <p className="kql__meta">{card.meta}</p>
      </div>
    </div>
  );
}

export default function Hero({ ready }) {
  // Which role is selected — drives both the tagline chips and the query card.
  const [active, setActive] = useState(0);
  const card = heroCards[active] ?? heroCards[0];

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
          <Tagline items={greeting.taglines} ready={ready} index={active} onIndexChange={setActive} />
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
              <span><span className="live-dot" aria-hidden="true" /> {card.feed}</span>
              <span>IST · UTC+5:30</span>
            </div>
            <div className="feed__frame">
              {/* All role photos are stacked; only the active one is visible, so switching crossfades. */}
              {heroCards.map((c, i) => (
                <img
                  key={c.head}
                  className={`feed__photo ${i === active ? "is-active" : ""}`}
                  src={img(c.image) ?? img("creator.webp")}
                  alt={i === active ? c.alt : ""}
                  aria-hidden={i !== active}
                  width="1000"
                  height="1000"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}
              <span className="feed__scan" aria-hidden="true" />
              <span className="feed__corner feed__corner--tl" aria-hidden="true" />
              <span className="feed__corner feed__corner--tr" aria-hidden="true" />
              <span className="feed__corner feed__corner--bl" aria-hidden="true" />
              <span className="feed__corner feed__corner--br" aria-hidden="true" />
            </div>
          </figure>

          <QueryCard key={active} card={card} ready={ready} />
        </div>
      </div>
    </section>
  );
}
