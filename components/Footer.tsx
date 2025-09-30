import React from 'react';
import { InstagramIcon, XiaohongshuIcon, TikTokIcon } from './icons/SocialIcons';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <footer className="bg-pink-100 text-pink-800 py-10">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="hover:text-pink-600 transition-colors duration-300"><InstagramIcon /></a>
          <a href="#" className="hover:text-pink-600 transition-colors duration-300"><XiaohongshuIcon /></a>
          <a href="#" className="hover:text-pink-600 transition-colors duration-300"><TikTokIcon /></a>
        </div>
        <p className="text-gray-600">{translations.footerText}</p>
      </div>
    </footer>
  );
};

export default Footer;
