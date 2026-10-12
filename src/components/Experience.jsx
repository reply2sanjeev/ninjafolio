import { useState } from "react";
import { experience } from "../portfolio";
import { img } from "../assets";
import SectionHead from "./SectionHead";

const PREVIEW = 4;

function Mission({ item }) {
  const [open, setOpen] = useState(false);
  const extra = item.points.length - PREVIEW;
  const shown = open ? item.points : item.points.slice(0, PREVIEW);
  return (
    <li className="mission">
      <div className="mission__node" aria-hidden="true" />
      <div className="mission__meta">
        <span className="mission__dates">{item.duration}</span>
        <span className="mission__loc">{item.location}</span>
      </div>
      <div className="mission__body">
        <div className="mission__head">
          {item.logo && img(item.logo) && (
            <span className="logo-chip">
              <img src={img(item.logo)} alt="" loading="lazy" />
            </span>
          )}
          <div>
            <h3>{item.role}</h3>
            <a href={item.url} target="_blank" rel="noreferrer" className="mission__company">
              {item.company}
            </a>
            {item.progression && <p className="mission__prog">{item.progression}</p>}
          </div>
        </div>
        <ul className="ticks">
          {shown.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        {extra > 0 && (
          <button className="linkbtn" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? "Show less" : `Show ${extra} more`}
          </button>
        )}
      </div>
    </li>
  );
}

function Honor({ item }) {
  return (
    <li className="honor">
      {item.logo && img(item.logo) && (
        <span className="logo-chip">
          <img src={img(item.logo)} alt="" loading="lazy" />
        </span>
      )}
      <div>
        <h3>{item.role}</h3>
        <p className="honor__by">
          <a href={item.url} target="_blank" rel="noreferrer">{item.company}</a>, {item.duration}
        </p>
        <p>{item.points.join(". ")}</p>
      </div>
    </li>
  );
}

export default function Experience() {
  return (
    <section className="section section--alt" aria-labelledby="experience">
      <div className="wrap">
        <SectionHead
          id="experience"
          title="Experience"
          lede="From racking servers in 2008 to leading a cloud operations team today."
        />
        <ol className="missions">
          {experience.work.map((item) => (
            <Mission key={item.company + item.duration} item={item} />
          ))}
        </ol>

        <h3 className="subhead">Honours and awards</h3>
        <ul className="honors">
          {experience.honors.map((item) => (
            <Honor key={item.company + item.duration} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
}
