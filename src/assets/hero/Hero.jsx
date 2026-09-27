import { useState } from 'react';
import { useLanguage } from '../../i18n/useLanguage';
import './Hero.css';

export function Hero() {
  const { t } = useLanguage();
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section className="hero">
      <div className="hero-grain" aria-hidden="true" />

      <div className="hero-content">
        <span className="hero-eyebrow">{t.hero.eyebrow}</span>

        <h1 className="hero-name">
          <span className="hero-name__line">Sem</span>
          <span className="hero-name__line hero-name__line--light">Pater</span>
        </h1>

        <div className="hero-divider" aria-hidden="true" />

        <p className="hero-bio">{t.hero.bio}</p>

        <div className="hero-actions">
          <a href="/cv.pdf" className="hero-btn hero-btn--primary" download>
            {t.hero.downloadCv}
          </a>
          <a href="#contact" className="hero-btn hero-btn--ghost">
            {t.hero.getInTouch}
          </a>
        </div>
      </div>
      
      <div className="hero-photo">
        <div className="hero-photo__frame">
          {!photoFailed && (
            <img
              src="/profile.jpg"
              alt="Sem Pater"
              className="hero-photo__img"
              onError={() => setPhotoFailed(true)}
            />
          )}
          {photoFailed && (
            <span className="hero-photo__placeholder" aria-hidden="true"></span>
          )}
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll__label">{t.hero.scroll}</span>
        <span className="hero-scroll__line" />
      </div>
    </section>
  );
}
