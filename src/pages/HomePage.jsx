import React from 'react';
import HeroSection from '../components/home/HeroSection';
import IngredientsSection from '../components/home/IngredientsSection';
import ChefsSection from '../components/home/ChefsSection';
import DeliverySection from '../components/home/DeliverySection';

const HomePage = () => {
  return (
    <main className="w-full flex flex-col items-center px-8 md:px-12 lg:px-16 pt-24 pb-12">
      <HeroSection />
      <IngredientsSection />
      <ChefsSection />
      <DeliverySection />
    </main>
  );
};


export default HomePage;
