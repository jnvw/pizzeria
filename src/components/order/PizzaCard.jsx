import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

function PizzaCard({ pizza }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        pizzaId: pizza.id,
        name: pizza.name,
        price: pizza.price,
        image: pizza.image,
        type: pizza.type,
      })
    );
  };

  return (
    <div className="flex border border-gray-300 bg-white p-4 h-[290px]">
      {/* Left */}
      <div className="w-[22%] flex flex-col">
        <h2 className="text-[18px] font-bold leading-7 text-gray-900">
          {pizza.name}
        </h2>

        <div
          className={`w-5 h-5 mt-4 ${
            pizza.type === 'veg'
              ? 'bg-green-600'
              : 'bg-red-600'
          }`}
        />

        <p className="mt-auto text-xl font-bold text-gray-800">
          ₹{pizza.price}.00
        </p>
      </div>

      {/* Middle */}
      <div className="w-[48%] px-4 text-gray-700">
        <p className="text-sm leading-6 mb-3">
          {pizza.description}
        </p>

        {pizza.ingredients?.length > 0 && (
          <div className="mb-3">
            <span className="font-bold text-sm">
              Ingredients :
            </span>

            <p className="text-sm leading-6">
              {pizza.ingredients.join(', ')}
            </p>
          </div>
        )}

        {pizza.toppings?.length > 0 && (
          <div>
            <span className="font-bold text-sm">
              Toppings :
            </span>

            <p className="text-sm leading-6">
              {pizza.toppings.join(', ')}
            </p>
          </div>
        )}
      </div>

      {/* Right */}
      <div className="w-[30%] flex flex-col items-center justify-between">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-44 h-44 object-cover"
        />

        <button
          onClick={handleAddToCart}
          className="w-40 bg-yellow-500 hover:bg-yellow-600 text-white py-2 text-sm font-medium"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default PizzaCard;