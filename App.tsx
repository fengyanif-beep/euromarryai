import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="bg-pink-50/50 text-gray-800">
        <Header />
        <main>
          <Hero />
          <Portfolio />
          <Pricing />
          <Faq />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;
