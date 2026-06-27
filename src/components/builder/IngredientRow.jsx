import React from 'react';

/**
 * IngredientRow - Single ingredient row in the Build Your Pizza page.
 * Layout: [circular image] [name] [price] ... [checkbox] [Add]
 * Matches the screenshot's horizontal table-like layout.
 */
function IngredientRow({ ingredient, isSelected, onToggle }) {
  return (
    <div
      className={`flex items-center py-3 border-b border-gray-200 px-2 ${
        isSelected ? 'bg-amber-50' : ''
      }`}
    >
      {/* Circular ingredient image */}
      <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center overflow-hidden flex-shrink-0">
        {ingredient.image && (
          <img
            src={ingredient.image}
            alt={ingredient.name}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      {/* Name and Price on same line */}
      <div className="flex items-center gap-3 ml-6 flex-1">
        <span className="font-semibold text-gray-800 min-w-[120px]">
          {ingredient.name}
        </span>
        {ingredient.price > 0 && (
          <span className="text-amber-700 font-medium">
            ₹{ingredient.price}.00
          </span>
        )}
      </div>

      {/* Checkbox + Add label */}
      <div className="flex items-center gap-2 ml-auto">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={onToggle}
          className="w-4 h-4 accent-amber-500 cursor-pointer"
        />
        <span className="text-amber-500 text-sm font-medium cursor-pointer" onClick={onToggle}>
          Add
        </span>
      </div>
    </div>
  );
}

export default IngredientRow;
