import React from 'react';
import { useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../../store/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const isVeg =
    item.type === 'veg' ||
    item.name.toLowerCase().includes('paneer') ||
    item.name.toLowerCase().includes('veggie');

  return (
    <div className="flex items-center px-4 py-4 border-b border-gray-300">
      {/* Pizza Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
      />

      {/* Veg Indicator */}
      <div
        className={`w-4 h-4 border-2 ml-5 flex-shrink-0 ${
          isVeg
            ? 'border-green-700'
            : 'border-red-700'
        }`}
      >
        <div
          className={`w-2 h-2 rounded-full m-[2px] ${
            isVeg
              ? 'bg-green-700'
              : 'bg-red-700'
          }`}
        />
      </div>

      {/* Name */}
      <div className="ml-5 flex-1">
        <h4 className="text-sm font-semibold text-gray-800">
          {item.name}
        </h4>

        <p className="text-xs text-gray-500">
          ₹{item.price}
        </p>
      </div>

      {/* Quantity */}
      <div className="flex items-center gap-2 mr-8">
        <button
          onClick={() =>
            dispatch(decrementQuantity(item.id))
          }
          className="w-7 h-7 bg-gray-600 text-white text-lg hover:bg-gray-700"
        >
          -
        </button>

        <span className="w-5 text-center text-sm">
          {item.quantity}
        </span>

        <button
          onClick={() =>
            dispatch(incrementQuantity(item.id))
          }
          className="w-7 h-7 bg-gray-600 text-white text-lg hover:bg-gray-700"
        >
          +
        </button>
      </div>

      {/* Total */}
      <div className="w-24 text-right font-semibold text-gray-800">
        ₹{item.price * item.quantity}.00
      </div>

      {/* Delete */}
      <button
        onClick={() =>
          dispatch(removeFromCart(item.id))
        }
        className="ml-5 text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </div>
  );
}

export default CartItem;