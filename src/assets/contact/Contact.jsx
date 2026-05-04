import { useInView } from '../../hooks/useInView';
import './Contact.css';

export function Contact() {
  const [headerRef, headerVisible] = useInView();
  const [bodyRef,   bodyVisible]   = useInView();
  const [footerRef, footerVisible] = useInView();

  return (
    <section className="contact" id="contact">

      <div ref={headerRef} className={`contact-header${headerVisible ? ' is-visible' : ''}`}>
        <span className="contact-eyebrow">contact</span>
        <h2 className="contact-heading">Let's work<br />
          <span className="contact-heading--light">together.</span>
        </h2>
      </div>

      <div ref={bodyRef} className={`contact-body${bodyVisible ? ' is-visible' : ''}`}>
        <a href="mailto:sempaterbusiness@gmail.com" className="contact-email">
          sempaterbusiness@gmail.com
        </a>
        <div className="contact-links">
          <a href="https://github.com/L1lmastersem" className="contact-link" target="_blank" rel="noopener noreferrer">
            GitHub
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="https://www.instagram.com/ssemm.p/" className="contact-link" target="_blank" rel="noopener noreferrer">
            Instagram
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
              <path d="M1 10L10 1M10 1H3M10 1V8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>

      <div ref={footerRef} className={`contact-footer${footerVisible ? ' is-visible' : ''}`}>
        <span>© {new Date().getFullYear()} Sem Pater</span>
        <span>Amsterdam, NL</span>
      </div>

    </section>
  );
}
