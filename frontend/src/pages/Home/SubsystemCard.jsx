function SubsystemCard({ slide }) {
  return (
    <article className="subsystem-slide">
      <div className="subsystem-slide-copy">
        <p className="subsystem-slide-label">{slide.title}</p>
        <h3>{slide.label}</h3>
        <p>{slide.description}</p>
        <div className="subsystem-slide-footnote">{slide.note}</div>
      </div>
    </article>
  );
}

export default SubsystemCard;