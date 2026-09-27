import { useInView } from '../../hooks/useInView';
import { useLanguage } from '../../i18n/useLanguage';
import './About.css';

export function About() {
  const [headerRef, headerVisible] = useInView();
  const [bodyRef,   bodyVisible]   = useInView();
  const [stackRef,  stackVisible]  = useInView();
  const { t } = useLanguage();

  return (
    <section className="about" id="about">
      <div ref={headerRef} className={`about-header${headerVisible ? ' is-visible' : ''}`}>
        <span className="about-eyebrow">{t.about.eyebrow}</span>
        <h2 className="about-heading">{t.about.heading}</h2>
      </div>

      <div ref={bodyRef} className={`about-body${bodyVisible ? ' is-visible' : ''}`}>
        <div className="about-col">
          <p>{t.about.paragraph1}</p>
          <p>{t.about.paragraph2}</p>
        </div>
        <div className="about-col">
          <p>{t.about.paragraph3}</p>
          <p>{t.about.paragraph4}</p>
          <a href="/cv.pdf" className="about-btn" download>{t.about.downloadCv}</a>
        </div>
      </div>

      <div ref={stackRef} className={`about-stack${stackVisible ? ' is-visible' : ''}`}>
        <div className="about-stack-group">
          <span className="about-stack-label">{t.about.frontend}</span>
          <span className="about-stack-items">React · JavaScript · HTML · CSS</span>
        </div>
        <div className="about-stack-divider" />
        <div className="about-stack-group">
          <span className="about-stack-label">{t.about.backend}</span>
          <span className="about-stack-items">PHP · SQL · Node.js</span>
        </div>
      </div>
    </section>
  );
}
