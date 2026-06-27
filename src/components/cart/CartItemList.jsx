import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectCartItems,
  selectCartPizzaTotal,
} from '../../store/cartSlice';
import CartItem from './CartItem';

function CartItemList() {
  const items = useSelector(selectCartItems);
  const pizzaTotal = useSelector(selectCartPizzaTotal);

  return (
    <div className="border border-gray-300 bg-white">
      {/* Header */}
      <div className="px-5 py-3 border-b border-gray-300">
        <h2 className="text-2xl font-medium text-gray-700">
          My Cart
        </h2>
      </div>

      {/* Body */}
      {items.length === 0 ? (
        <div className="py-12 text-center">
          <div className="text-5xl mb-3">🛒</div>

          <p className="text-gray-600">
            Your cart is empty
          </p>

          <Link
            to="/order"
            className="inline-block mt-4 px-5 py-2 bg-yellow-500 text-white hover:bg-yellow-600"
          >
            Browse Menu
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div>
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
          </div>

          {/* Subtotal */}
          <div className="border-t border-gray-300 px-5 py-4">
            <div className="flex justify-end items-center">
              <span className="text-lg text-gray-700 mr-2">
                Sub Total :
              </span>

              <span className="text-xl font-bold text-gray-800">
                ₹{pizzaTotal}.00
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItemList;