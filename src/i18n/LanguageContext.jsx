import { useEffect, useState } from 'react';
import { translations } from './translations';
import { LanguageContext } from './context';

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'en';

  const stored = window.localStorage.getItem('language');
  if (stored === 'en' || stored === 'nl') return stored;

  // Fall back to the visitor's browser language, defaulting to English.
  const browserLang = window.navigator.language?.slice(0, 2);
  return browserLang === 'nl' ? 'nl' : 'en';
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
