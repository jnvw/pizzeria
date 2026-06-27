import React from 'react';
import CartItemList from '../components/cart/CartItemList';
import BillSummary from '../components/cart/BillSummary';

/**
 * CartPage - Shopping Cart
 */
const CartPage = () => {
  return (
    <main className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Your Shopping Cart
          </h1>
          <p className="text-gray-500 mt-2">
            Review your items before placing your order.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-lg p-6">
              <CartItemList />
            </div>
          </div>

          {/* Bill Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-lg p-6 lg:sticky lg:top-24">
              <BillSummary />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default CartPage;