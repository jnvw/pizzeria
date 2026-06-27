/**
 * IngredientsSection - Shows ingredient info on the Home page.
 * Layout matches screenshot: image LEFT, heading + text RIGHT.
 */
function IngredientsSection() {
  return (
    <section className="bg-gray-50 py-12 w-full">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image - Left */}
          <div className="bg-gray-700 rounded-lg h-56 flex items-center justify-center">
            <span className="text-gray-400 text-sm">🧑‍🍳 Chef Image</span>
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Ingredients
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              We at Crafters good products. We have to explore Avant-gardening
              as a key art. whether to be changed from the family, In creating a
              taste, served, Low fat, Corn, Herbs, Basil, Red onion and More.
              Each hand-Made is better than the last.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IngredientsSection;
