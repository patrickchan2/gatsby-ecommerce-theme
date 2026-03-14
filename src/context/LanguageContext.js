import React, { createContext, useState, useEffect, useMemo } from 'react';

import { translate } from '../i18n';

const defaultLanguage = 'english';
const STORAGE_KEY = 'gatsby-ecommerce-language';

const detectBrowserLanguage = () => {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return defaultLanguage;
  }

  const browserLang =
    (navigator.languages && navigator.languages[0]) ||
    navigator.language ||
    '';

  const code = browserLang.toLowerCase();

  if (code.startsWith('de')) return 'german';

  // Traditional Chinese (HK, MO, TW, Hant)
  if (
    code === 'zh-hk' ||
    code === 'zh-mo' ||
    code === 'zh-tw' ||
    code.includes('hant')
  ) {
    return 'traditionalchinese';
  }

  // Generic Chinese or Simplified
  if (code.startsWith('zh')) return 'mandarin';

  return defaultLanguage;
};

export const LanguageContext = createContext({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key) => key,
});

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(defaultLanguage);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setLanguage(stored);
      } else {
        const detected = detectBrowserLanguage();
        setLanguage(detected || defaultLanguage);
      }
    } catch {
      // ignore read errors
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore write errors
    }
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: (key) => translate(language, key),
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;

