import { degrees, experience } from "../portfolio";
import { img } from "../assets";
import SectionHead from "./SectionHead";

function Item({ t }) {
  return (
    <article className="dojo__item">
      <header>
        {t.logo && img(t.logo) && (
          <span className="logo-chip">
            <img src={img(t.logo)} alt="" loading="lazy" />
          </span>
        )}
        <div>
          <h3>{t.title}</h3>
          <p className="dojo__by">
            <a href={t.link} target="_blank" rel="noreferrer">{t.by}</a>, {t.when}
          </p>
        </div>
      </header>
      {t.text && <p>{t.text}</p>}
      {t.list && (
        <ul className="ticks ticks--compact">
          {t.list.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      )}
    </article>
  );
}

export default function Training() {
  const study = degrees.map((d) => ({
    title: d.subtitle, by: d.title, link: d.link, logo: d.logo, when: d.duration, list: d.points,
  }));
  const learning = experience.learning.map((l) => ({
    title: l.role, by: l.company, link: l.url, logo: l.logo, when: l.duration, text: l.points.join(". ") + ".",
  }));
  return (
    <section className="section section--alt" aria-labelledby="training">
      <div className="wrap">
        <SectionHead
          id="training"
          title="Training"
          lede="The path so far: formal study, and the learning that never stopped."
        />
        <div className="dojo__group">
          <h3>Continuous learning</h3>
          <div className="dojo">{learning.map((t) => <Item key={t.title} t={t} />)}</div>
        </div>
        <div className="dojo__group">
          <h3>Education</h3>
          <div className="dojo">{study.map((t) => <Item key={t.title} t={t} />)}</div>
        </div>
      </div>
    </section>
  );
}
