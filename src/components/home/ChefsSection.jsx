/**
 * ChefsSection - Our Chefs section on the Home page.
 * Layout matches screenshot: text LEFT, chef image RIGHT.
 */
function ChefsSection() {
  return (
    <section className="px-4 py-12 w-full">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content - Left */}
          <div>
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
              Our Chefs
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              Pizza Make delicious and classic pizzas. They create magic with
              our ingredients. dessert, and bring pure joy! getting other
              things.. They make the best in all we'll hold; the art through the
              process.
            </p>
          </div>

          {/* Chef Image - Right */}
          <div className="bg-gray-700 rounded-lg h-56 flex items-center justify-center">
            <span className="text-gray-400 text-sm">🧑‍🍳 Chef Image</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChefsSection;
