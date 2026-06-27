import React from 'react';
import pizzaData from '../../data/pizzaData';
import PizzaCard from './PizzaCard';

function PizzaGrid() {
  return (
    <div className="max-w-[1500px] mx-auto px-8 py-8">
      <div className="grid grid-cols-2 gap-6">
        {pizzaData.map((pizza) => (
          <PizzaCard
            key={pizza.id}
            pizza={pizza}
          />
        ))}
      </div>
    </div>
  );
}

export default PizzaGrid;