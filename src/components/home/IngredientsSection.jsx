/**
 * IngredientsSection - Shows ingredient info on the Home page.
 * Layout matches screenshot: image LEFT, heading + text RIGHT.
 */
import food from '../../public/assets/homepage/food.png';

function IngredientsSection() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto bg-gray-50 rounded-3xl py-6 md:py-6 px-2 sm:px-6 lg:px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Image - Left */}
          <div className="overflow-hidden rounded-3xl bg-gray-900 aspect-[4/3] shadow-lg">
            <img src={food} alt="Food" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-2xl font-display font-bold text-gray-900 mb-4">
              Ingredients
            </h2>
            <p className="text-gray-600 text-sm lg:text-xl md:text-base leading-7">
              Fresh toppings, clean flavors, and a simple build that keeps the
              pizza balanced from the first bite to the last.
            </p>
          </div>
      </div>
    </section>
  );
}

export default IngredientsSection;
