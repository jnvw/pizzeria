import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectSelectedIngredients,
  selectBuilderTotal,
  resetBuilder,
} from '../../store/builderSlice';
import { addToCart } from '../../store/cartSlice';

function BuildButton() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const selectedIngredients = useSelector(selectSelectedIngredients);
  const total = useSelector(selectBuilderTotal);

  const handleBuild = () => {
    if (selectedIngredients.length === 0) {
      alert('Please select at least one ingredient');
      return;
    }

    dispatch(
      addToCart({
        pizzaId: 'custom-' + Date.now(),
        name: 'Custom Pizza',
        price: total,
        image: null,
        type: 'custom',
        ingredients: selectedIngredients.map((i) => i.name),
        ingredientsTotal: total,
      })
    );

    dispatch(resetBuilder());
    navigate('/cart');
  };

  return (
    <button
  onClick={handleBuild}
  className="inline-flex items-center justify-center min-w-[280px] h-16 bg-[#202734] hover:bg-[#293241] text-white hover:text-[#b37a43] text-[28px] font-semibold rounded-sm border border-[#3b4350] tracking-wide transition-colors duration-200"
>
  Build Ur Pizza
</button>
  );
}

export default BuildButton;
