import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import OrderPizzaPage from './pages/OrderPizzaPage';
import BuildPizzaPage from './pages/BuildPizzaPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <BrowserRouter>
      <div className="w-full  flex flex-col bg-gray-100">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 px-8 pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/order" element={<OrderPizzaPage />} />
            <Route path="/build" element={<BuildPizzaPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;