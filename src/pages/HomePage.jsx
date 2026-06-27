import React from 'react';
import HeroSection from '../components/home/HeroSection';
import IngredientsSection from '../components/home/IngredientsSection';
import ChefsSection from '../components/home/ChefsSection';
import TimerSection from '../components/home/TimerSection';

const HomePage = () => {
  return (
    <main className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-6 pt-12 pb-12 gap-10 md:gap-14">
      <HeroSection />
      <IngredientsSection />
      <ChefsSection />
      <TimerSection />

    </main>
  );
};


export default HomePage;
