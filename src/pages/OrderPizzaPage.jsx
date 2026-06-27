import React from 'react';
import PizzaGrid from '../components/order/PizzaGrid';

function OrderPizzaPage() {
  return (
    <section className="w-full bg-gray-100 py-4 lg:py-1 px-2 lg:px-2 max-w-screen-2xl mx-auto">
      <div className=" mx-auto px-2 lg:px-8 py-1 max-w-screen-2xl">
        {/* Heading */}
        <div className="text-center mb-10 mt-6 lg:mt-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Order Your Favorite Pizza
          </h1>

          <p className="mt-3 text-lg text-gray-600">
            Freshly baked pizzas made with premium ingredients.
          </p>
        </div>

        {/* Pizza Grid */}
        <div className="mb-10 lg:mb-16 px-4 lg:px-0 py-6 lg:py-10 bg-white rounded-3xl shadow-lg pt-6 lg:pt-10">
        <PizzaGrid />
        </div>
      </div>
    </section>
  );
}

export default OrderPizzaPage;