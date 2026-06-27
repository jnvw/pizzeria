/**
 * HeroSection - Top section of the Home page.
 * Banner with Pizzeria branding, then "Our story" 2-column section below.
 * Layout matches screenshot: text LEFT, image RIGHT.
 */
function HeroSection() {
  return (
    <section>
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-[#1a1a1a] to-gray-800 py-16 w-full">
        <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold font-display text-[#f59e0b] mb-2">
            Pizzeria
          </h1>
          <p className="text-gray-300 text-base">
            Crafting the finest artisan pizzas since 1963
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-6 text-center">
          Our story
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Text Content - Left */}
          <div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              An artisan is in form; the biscuit's from Pizza And Cuisine
              kitchen. The pizzeria lies at one main old city, a small and quiet
              streets where they bake in a little old way and the kitchen. The
              word of fire reminds some Pizzeria Cuisine Italian bakeries.
              They's wholesome Creations attract Pizzeria culture. This
              wholesome business of bakery has been founded in 1963.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              And let's not forget the flavors that Pizza and cuisine bring over
              from some best in the market. Because I wouldn't believe in
              success if I have to just say, This artisan is working day by day
              to become a master baker on a bigger scale.
            </p>
          </div>

          {/* Image - Right */}
          <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
            <span className="text-gray-400 text-sm">🍕 Ingredients Image</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
