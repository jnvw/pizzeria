import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              About Us
            </h3>
            <p className="text-gray-600 leading-7">
              Enjoy delicious pizzas made with fresh ingredients.
              Order your favourites or build your own pizza with
              toppings of your choice.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              <Link
                to="/"
                className="text-gray-600 hover:text-amber-500 transition-colors"
              >
                Home
              </Link>

              <Link
                to="/order"
                className="text-gray-600 hover:text-amber-500 transition-colors"
              >
                Order Pizza
              </Link>

              <Link
                to="/build"
                className="text-gray-600 hover:text-amber-500 transition-colors"
              >
                Build Your Pizza
              </Link>

              <Link
                to="/cart"
                className="text-gray-600 hover:text-amber-500 transition-colors"
              >
                Shopping Cart
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Contact
            </h3>

            <div className="space-y-3 text-gray-600">
              <p>📧 support@pizzeria.com</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 Mumbai, Maharashtra</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xl">
            © {new Date().getFullYear()} Pizzeria. All rights reserved.
          </p>

          <p className="text-gray-500 text-xl mt-3 md:mt-0">
            Freshly baked pizzas • Fast delivery • Made with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;