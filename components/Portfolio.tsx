import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface StyleCardProps {
  imageUrl: string;
  title: string;
  seed: number;
}

const StyleCard: React.FC<StyleCardProps> = ({ imageUrl, title, seed }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 group">
    <img src={`${imageUrl}?random=${seed}`} alt={title} className="w-full h-80 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">{title}</h3>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const { translations } = useLanguage();

  const styles = [
    { title: translations.parisStyle, seed: 2 },
    { title: translations.santoriniStyle, seed: 3 },
    { title: translations.florenceStyle, seed: 4 },
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-pink-800 mb-4">{translations.portfolioTitle}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">{translations.portfolioSubtitle}</p>
        <div className="grid md:grid-cols-3 gap-10">
          {styles.map((style) => (
             <StyleCard key={style.seed} imageUrl="https://picsum.photos/400/600" title={style.title} seed={style.seed} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
