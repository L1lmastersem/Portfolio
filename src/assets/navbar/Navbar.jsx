import { useState, useEffect } from 'react'
import { useLanguage } from '../../i18n/useLanguage'
import './Navbar.css';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <a href="#" className="navbar-logo">sp.</a>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><a href="#" className="nav-link">{t.nav.home}</a></li>
          <li><a href="#about" className="nav-link">{t.nav.about}</a></li>
          <li><a href="#contact" className="nav-link">{t.nav.contact}</a></li>
        </ul>
        <div className="lang-switch" role="group" aria-label="Language switcher">
          <button
            type="button"
            className={`lang-switch__btn${language === 'en' ? ' is-active' : ''}`}
            onClick={() => setLanguage('en')}
            aria-pressed={language === 'en'}
          >
            EN
          </button>
          <span className="lang-switch__divider" aria-hidden="true">/</span>
          <button
            type="button"
            className={`lang-switch__btn${language === 'nl' ? ' is-active' : ''}`}
            onClick={() => setLanguage('nl')}
            aria-pressed={language === 'nl'}
          >
            NL
          </button>
        </div>
      </div>
    </nav>
  );
}
