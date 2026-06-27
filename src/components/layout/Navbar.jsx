import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartItemCount } from '../../store/cartSlice';

function Navbar() {
  const cartItemCount = useSelector(selectCartItemCount);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1b1b1b] border-b border-gray-700">
      <div className="max-w-7xl mx-auto h-16 px-6 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 flex-shrink-0"
        >
          <h1 className="text-3xl font-bold italic text-amber-500">
            Pizzeria
          </h1>

          <span className="text-2xl">
            🍕
          </span>
        </Link>

        {/* Navigation */}
        <div className="flex text-white items-center gap-10">
          <NavLink
            to="/order"
            className={({ isActive }) =>
              `font-semibold transition-colors ${
                isActive
                  ? 'text-amber-500'
                  : 'text-white hover:text-amber-400'
              }`
            }
          >
            Order Pizza
          </NavLink>

          <NavLink
            to="/build"
            className={({ isActive }) =>
              `font-semibold transition-colors ${
                isActive
                  ? 'text-amber-500'
                  : 'text-white hover:text-amber-400'
              }`
            }
          >
            Build Ur Pizza
          </NavLink>
        </div>

        {/* Cart */}
<Link
  to="/cart"
  className="relative inline-flex items-center justify-center gap-2
             h-11 px-5 w-50
             bg-amber-500 hover:bg-amber-600
             text-white font-semibold text-xl
             rounded-md transition-all duration-200"
>
  {/* <span className="text-lg">🛒</span> */}

  <span>Shopping Cart</span>

  {cartItemCount > 0 && (
    <span className="absolute -top-2 -right-2 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-600 px-1 text-xs font-bold text-white">
      {cartItemCount}
    </span>
  )}
</Link>

      </div>
    </nav>
  );
}

export default Navbar;