import { useState } from "react";
import { certifications } from "../portfolio";
import { img } from "../assets";
import Icon from "./Icon";
import SectionHead from "./SectionHead";

const groups = [
  ["all", "All"],
  ["microsoft", "Microsoft exams"],
  ["ninja", "Ninja trainings"],
  ["security", "Security and network"],
  ["other", "Cloud and agile"],
];

function split(title) {
  const m = title.match(/^([A-Z]{2,3}-\d{3}):\s*(.*)$/);
  return m ? { code: m[1], name: m[2].replace(/^Microsoft Certified:?\s*/, "") } : { code: null, name: title };
}

export default function Certifications() {
  const [g, setG] = useState("all");
  const list = certifications.filter((c) => g === "all" || c.group === g);
  const count = (k) => (k === "all" ? certifications.length : certifications.filter((c) => c.group === k).length);

  return (
    <section className="section" aria-labelledby="certifications">
      <div className="wrap">
        <SectionHead
          id="certifications"
          title="Certifications"
          lede={`${certifications.length} credentials, each linked to its verification page.`}
        />
        <div className="filters" role="group" aria-label="Filter certifications">
          {groups.map(([k, label]) => (
            <button key={k} aria-pressed={g === k} onClick={() => setG(k)} className="filter">
              {label} <span>{count(k)}</span>
            </button>
          ))}
        </div>
        <ul className="certs">
          {list.map((c) => {
            const { code, name } = split(c.title);
            return (
              <li key={c.title} className="cert">
                <span className="logo-chip logo-chip--sm">
                  {img(c.logo) && <img src={img(c.logo)} alt="" loading="lazy" />}
                </span>
                <span className={`cert__code ${code ? "" : "is-empty"}`}>{code || "—"}</span>
                <span className="cert__name">
                  {name}
                  <span className="cert__issuer">{c.issuer}</span>
                </span>
                <a className="cert__verify" href={c.link} target="_blank" rel="noreferrer">
                  Verify <Icon name="external" size={14} />
                  <span className="sr-only"> {name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
