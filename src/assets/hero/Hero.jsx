import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-grain" aria-hidden="true" />

      <div className="hero-content">
        <span className="hero-eyebrow">software developer</span>

        <h1 className="hero-name">
          <span className="hero-name__line">Sem</span>
          <span className="hero-name__line hero-name__line--light">Pater</span>
        </h1>

        <div className="hero-divider" aria-hidden="true" />

        <p className="hero-bio">
          Tweedejaars student aan het Mediacollege Amsterdam.
          Ik bouw gebruiksvriendelijke webapplicaties met React,
          JavaScript en PHP — van pixel-perfecte UI tot solide back-end logica.
        </p>

        <div className="hero-actions">
          <a href="/cv.pdf" className="hero-btn hero-btn--primary" download>
            Download CV
          </a>
          <a href="#contact" className="hero-btn hero-btn--ghost">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll__label">scroll</span>
        <span className="hero-scroll__line" />
      </div>
    </section>
  );
}
