import { contact, greeting, socialMediaLinks } from "../portfolio";
import { img } from "../assets";
import Icon from "./Icon";
import SectionHead from "./SectionHead";

export default function Contact() {
  return (
    <section className="section contact" aria-labelledby="contact">
      <div className="wrap">
        <SectionHead id="contact" title="Contact" />
        <div className="contact__grid">
          <div className="contact__photo">
            <img src={img(contact.photo)} alt="" loading="lazy" />
          </div>
          <div className="contact__body">
            <p className="contact__intro">{contact.intro}</p>
            <a className="contact__email" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <ul className="contact__list">
              <li>
                <Icon name="phone" /> <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
              </li>
              <li>
                <Icon name="pin" />{" "}
                <a href={contact.mapLink} target="_blank" rel="noreferrer">{contact.address}</a>
              </li>
              {socialMediaLinks
                .filter((s) => s.icon !== "mail")
                .map((s) => (
                  <li key={s.name}>
                    <Icon name={s.icon} />{" "}
                    <a href={s.link} target="_blank" rel="noreferrer">{s.name}</a>
                  </li>
                ))}
            </ul>
            <a className="btn" href={greeting.resumeLink} target="_blank" rel="noreferrer">
              <Icon name="download" size={16} /> Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
