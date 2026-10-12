export default function SectionHead({ title, lede, id }) {
  return (
    <div className="shead">
      <span className="shead__blade" aria-hidden="true" />
      <h2 id={id}>{title}</h2>
      {lede && <p className="shead__lede">{lede}</p>}
    </div>
  );
}
