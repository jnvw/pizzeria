import { createSlice } from '@reduxjs/toolkit';

/**
 * Cart slice for managing shopping cart state.
 *
 * Each cart item has:
 *   - id: unique identifier (generated via Date.now())
 *   - pizzaId: the pizza's id from the menu (or 'custom' for builder pizzas)
 *   - name: display name
 *   - price: base price of the pizza (INR)
 *   - quantity: number of this item in the cart
 *   - image: image path
 *   - type: 'menu' (from menu) or 'custom' (from builder)
 *   - ingredients: array of selected ingredients (only for custom pizzas)
 *   - ingredientsTotal: total price of added ingredients (only for custom pizzas)
 */

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    /**
     * Add a new item to the cart with quantity 1.
     * Payload should contain: pizzaId, name, price, image, type, and
     * optionally ingredients and ingredientsTotal (for custom pizzas).
     */
    addToCart: (state, action) => {
      const newItem = {
        id: Date.now(),
        pizzaId: action.payload.pizzaId,
        name: action.payload.name,
        price: action.payload.price,
        image: action.payload.image,
        type: action.payload.type,
        ingredients: action.payload.ingredients || [],
        ingredientsTotal: action.payload.ingredientsTotal || 0,
        quantity: 1,
      };
      state.items.push(newItem);
    },

    /**
     * Remove an item from the cart by its unique cart item id.
     */
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    /**
     * Increment the quantity of a cart item by 1.
     */
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },

    /**
     * Decrement the quantity of a cart item by 1.
     * If quantity reaches 0, the item is removed from the cart.
     */
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
      }
    },

    /**
     * Clear all items from the cart.
     */
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Export actions
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

// ----- Selectors -----

/** Select all cart items */
export const selectCartItems = (state) => state.cart.items;

/** Select the total number of items in the cart (accounting for quantity) */
export const selectCartItemCount = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);

/** Select the total price of all pizzas (base price × quantity) */
export const selectCartPizzaTotal = (state) =>
  state.cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

/** Select the total price of all custom pizza ingredients */
export const selectCartIngredientsTotal = (state) =>
  state.cart.items.reduce((sum, item) => {
    if (item.type === 'custom' && item.ingredientsTotal) {
      return sum + item.ingredientsTotal * item.quantity;
    }
    return sum;
  }, 0);

/** Select the grand total (pizza total + ingredients total) */
export const selectCartTotal = (state) =>
  selectCartPizzaTotal(state) + selectCartIngredientsTotal(state);

export default cartSlice.reducer;
