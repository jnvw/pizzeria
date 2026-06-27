import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import builderReducer from './builderSlice';

/**
 * Redux store configuration for the Pizzeria app.
 *
 * Combines two slices:
 *   - cart: manages the shopping cart (items, quantities, totals)
 *   - builder: manages the custom pizza builder (selected ingredients)
 */
const store = configureStore({
  reducer: {
    cart: cartReducer,
    builder: builderReducer,
  },
});

export default store;
