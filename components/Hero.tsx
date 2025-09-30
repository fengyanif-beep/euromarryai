import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { translations } = useLanguage();
  
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative text-center py-20 md:py-32 px-6 bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/1600/900?random=1&blur=3')" }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-pink-900 leading-tight mb-4">
          {translations.heroTitle}
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8">
          {translations.heroSubtitle}
        </p>
        <button 
          onClick={scrollToPricing}
          className="bg-pink-500 text-white font-bold px-10 py-4 rounded-full text-lg hover:bg-pink-600 transition-transform transform hover:scale-105 duration-300 shadow-xl hover:shadow-2xl"
        >
          {translations.orderNow}
        </button>
      </div>
    </section>
  );
};

export default Hero;
