import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" />
    </svg>
);

const ChevronDownIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ml-1.5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
);

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const { language, setLanguage, translations } = useLanguage();
  const langMenuRef = useRef<HTMLDivElement>(null);

  const languages: { [key: string]: string } = {
    en: 'English',
    zh: '中文',
    ja: '日本語',
    fr: 'Français',
  };

  const handleSetLanguage = (lang: string) => {
    setLanguage(lang);
    setIsLangMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = (
    <>
      <a onClick={() => scrollToSection('portfolio')} className="cursor-pointer text-gray-600 hover:text-pink-600 transition duration-300">{translations.navPortfolio}</a>
      <a onClick={() => scrollToSection('pricing')} className="cursor-pointer text-gray-600 hover:text-pink-600 transition duration-300">{translations.navPricing}</a>
      <a onClick={() => scrollToSection('faq')} className="cursor-pointer text-gray-600 hover:text-pink-600 transition duration-300">{translations.navFaq}</a>
    </>
  );

  const languageSwitcher = (
     <div className="relative">
        <button onClick={() => setIsLangMenuOpen(!isLangMenuOpen)} className="flex items-center text-gray-700 bg-white hover:bg-pink-50 px-3 py-2 rounded-full border border-pink-100/80 transition-colors duration-300">
          <LanguageIcon />
          <span className="ml-2 font-medium text-sm">{languages[language]}</span>
          <ChevronDownIcon isOpen={isLangMenuOpen} />
        </button>
        <div className={`absolute right-0 mt-2 w-40 origin-top-right bg-white rounded-lg shadow-lg py-1 transition-all duration-200 ease-out transform ${isLangMenuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
          {Object.keys(languages).map((lang) => (
            <a
              key={lang}
              onClick={() => handleSetLanguage(lang)}
              className={`cursor-pointer flex items-center justify-between px-4 py-2 text-sm ${language === lang ? 'font-semibold text-pink-600' : 'text-gray-700'} hover:bg-pink-50`}
            >
              {languages[lang]}
              {language === lang && <CheckIcon />}
            </a>
          ))}
        </div>
      </div>
  )

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-800">Euro Marry AI</h1>
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks}
          <div ref={langMenuRef}>{languageSwitcher}</div>
          <button onClick={() => scrollToSection('pricing')} className="bg-pink-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-pink-600 transition duration-300 shadow-md hover:shadow-lg">
            {translations.orderNow}
          </button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white py-4 shadow-inner">
          <nav className="flex flex-col items-center space-y-4">
            {navLinks}
            <div className="pt-2" ref={langMenuRef}>{languageSwitcher}</div>
            <button onClick={() => scrollToSection('pricing')} className="bg-pink-500 text-white font-semibold px-6 py-2 rounded-full hover:bg-pink-600 transition duration-300 shadow-md hover:shadow-lg w-1/2">
              {translations.orderNow}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;