import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ingredientsData from '../../data/ingredientsData';
import {
  toggleIngredient,
  selectSelectedIngredients,
  selectBuilderTotal,
} from '../../store/builderSlice';
import IngredientRow from './IngredientRow';

/**
 * IngredientList - Full list of ingredients for Build Your Pizza page.
 * Shows header description, all ingredient rows, and running total at bottom-left.
 */
function IngredientList() {
  const dispatch = useDispatch();
  const selectedIngredients = useSelector(selectSelectedIngredients);
  const total = useSelector(selectBuilderTotal);

  const selectedIds = selectedIngredients.map((i) => i.id);

  return (
    <div className="bg-white rounded shadow-sm p-6 md:p-10 mt-6 md:mt-0 px-4 md:px-10 py-6 md:py-10">
      <p className="text-gray-600 mb-6 text-sm">
        Pizzeria now gives you options to build your own pizza. Customize your
        pizza by choosing ingredients from the list given below.
      </p>

      <div>
        {ingredientsData.map((ingredient) => (
          <IngredientRow
            key={ingredient.id}
            ingredient={ingredient}
            isSelected={selectedIds.includes(ingredient.id)}
            onToggle={() =>
              dispatch(
                toggleIngredient({
                  id: ingredient.id,
                  name: ingredient.name,
                  price: ingredient.price,
                })
              )
            }
          />
        ))}
      </div>

      {/* Total Cost - left aligned, matching screenshot */}
      <div className="mt-8 text-left">
  <span className="text-xl font-semibold text-green-600">
    Total Cost:
  </span>

  <span className="ml-3 text-3xl font-bold text-green-600">
    ₹{total}.00
  </span>
</div>
    </div>
  );
}

export default IngredientList;
