import { useInView } from '../../hooks/useInView';
import { useLanguage } from '../../i18n/useLanguage';
import './Contact.css';

export function Contact() {
  const [headerRef, headerVisible] = useInView();
  const [bodyRef,   bodyVisible]   = useInView();
  const [footerRef, footerVisible] = useInView();
  const { t } = useLanguage();

  return (
    <section className="contact" id="contact">

      <div ref={headerRef} className={`contact-header${headerVisible ? ' is-visible' : ''}`}>
        <span className="contact-eyebrow">{t.contact.eyebrow}</span>
        <h2 className="contact-heading">{t.contact.headingLine1}<br />
          <span className="contact-heading--light">{t.contact.headingLine2}</span>
        </h2>
      </div>

      <div ref={bodyRef} className={`contact-body${bodyVisible ? ' is-visible' : ''}`}>
        <a href="mailto:sempater2005@gmail.com" className="contact-email">
          sempater2005@gmail.com
        </a>
        <div className="contact-links">
          <a href="https://github.com/L1lmastersem" className="contact-link" target="_blank" rel="noopener noreferrer">
            {t.contact.github}
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <div ref={footerRef} className={`contact-footer${footerVisible ? ' is-visible' : ''}`}>
        <span>© {new Date().getFullYear()} Sem Pater</span>
        <span>{t.contact.location}</span>
      </div>

    </section>
  );
}
