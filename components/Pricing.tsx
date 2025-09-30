import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CheckIcon: React.FC = () => (
  <svg className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
  </svg>
);

const Pricing: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <section id="pricing" className="py-20 bg-pink-50/50">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-pink-800 mb-4">{translations.pricingTitle}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">{translations.pricingSubtitle}</p>
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8">
          {/* Standard Package */}
          <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md border-t-4 border-pink-500">
            <h3 className="text-2xl font-bold text-gray-800">{translations.standardPackage}</h3>
            <p className="text-5xl font-extrabold text-pink-600 my-6">{translations.standardPackagePrice}</p>
            <ul className="text-left space-y-4 text-gray-600">
              <li className="flex items-center"><CheckIcon /> {translations.feature1}</li>
              <li className="flex items-center"><CheckIcon /> {translations.feature2}</li>
              <li className="flex items-center"><CheckIcon /> {translations.feature3}</li>
              <li className="flex items-center"><CheckIcon /> {translations.feature4}</li>
            </ul>
            <button className="mt-8 bg-pink-500 text-white font-bold w-full py-3 rounded-full text-lg hover:bg-pink-600 transition-transform transform hover:scale-105 duration-300 shadow-lg">
              {translations.getStarted}
            </button>
          </div>

          {/* Add-ons */}
          <div className="w-full max-w-md lg:max-w-sm space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-left">
              <h4 className="text-xl font-bold text-gray-800">{translations.addon1Title}</h4>
              <p className="text-3xl font-bold text-pink-600 my-3">{translations.addon1Price}</p>
              <p className="text-gray-600">{translations.addon1Desc}</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-left">
              <h4 className="text-xl font-bold text-gray-800">{translations.addon2Title}</h4>
              <p className="text-3xl font-bold text-pink-600 my-3">{translations.addon2Price}</p>
              <p className="text-gray-600">{translations.addon2Desc}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;