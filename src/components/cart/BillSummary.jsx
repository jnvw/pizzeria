import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCartPizzaTotal,
  selectCartIngredientsTotal,
  selectCartTotal,
  clearCart,
} from '../../store/cartSlice';

function BillSummary() {
  const dispatch = useDispatch();

  const pizzaTotal = useSelector(selectCartPizzaTotal);
  const ingredientsTotal = useSelector(selectCartIngredientsTotal);
  const total = useSelector(selectCartTotal);

  const handlePay = () => {
    alert('Payment Successful! Thank you for your order.');
    dispatch(clearCart());
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="border border-gray-300 bg-white">
      {/* Heading */}
      <div className="border-b border-gray-300 px-5 py-3">
        <h2 className="text-lg font-medium text-gray-700">
          The total amount of
        </h2>
      </div>

      {/* Body */}
      <div className="px-5 py-4">
        <div className="flex justify-between mb-4 text-gray-700">
          <span>Pizza</span>
          <span>₹{pizzaTotal}.00</span>
        </div>

        <div className="flex justify-between mb-4 text-gray-700">
          <span>Ingredients</span>
          <span>₹{ingredientsTotal}.00</span>
        </div>

        <hr className="border-gray-300 mb-4" />

        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">
            Total :
          </span>

          <span className="font-bold text-xl text-gray-800">
            ₹{total}.00
          </span>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={handlePay}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-2 text-sm"
          >
            Pay
          </button>

          <button
            onClick={handleClear}
            className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-2 text-sm"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default BillSummary;