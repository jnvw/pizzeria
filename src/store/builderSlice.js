import { createSlice } from '@reduxjs/toolkit';

/**
 * Builder slice for managing the custom pizza builder state.
 *
 * Tracks which ingredients the user has selected for their custom pizza.
 * Each selected ingredient is an object with: id, name, price.
 */

const builderSlice = createSlice({
  name: 'builder',
  initialState: {
    selectedIngredients: [],
  },
  reducers: {
    /**
     * Toggle an ingredient in the selection.
     * If the ingredient (matched by id) is already selected, remove it.
     * Otherwise, add it to the selectedIngredients array.
     * Payload: { id, name, price }
     */
    toggleIngredient: (state, action) => {
      const ingredient = action.payload;
      const existingIndex = state.selectedIngredients.findIndex(
        (ing) => ing.id === ingredient.id
      );

      if (existingIndex !== -1) {
        // Already selected — remove it
        state.selectedIngredients.splice(existingIndex, 1);
      } else {
        // Not selected — add it
        state.selectedIngredients.push(ingredient);
      }
    },

    /**
     * Reset the builder by clearing all selected ingredients.
     */
    resetBuilder: (state) => {
      state.selectedIngredients = [];
    },
  },
});

// Export actions
export const { toggleIngredient, resetBuilder } = builderSlice.actions;

// ----- Selectors -----

/** Select the array of currently selected ingredients */
export const selectSelectedIngredients = (state) =>
  state.builder.selectedIngredients;

/** Select the total price of all selected ingredients */
export const selectBuilderTotal = (state) =>
  state.builder.selectedIngredients.reduce((sum, ing) => sum + ing.price, 0);

export default builderSlice.reducer;
