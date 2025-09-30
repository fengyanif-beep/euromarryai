import React, { createContext, useState, useContext, ReactNode } from 'react';
import { translations, TranslationSet } from '../lib/translations';

interface LanguageContextType {
  language: string;
  setLanguage: (language: string) => void;
  translations: TranslationSet;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const currentTranslations = translations[language] || translations.en;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations: currentTranslations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
