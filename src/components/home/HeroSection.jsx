/**
 * HeroSection - Top section of the Home page.
 * Banner with Pizzeria branding, then "Our story" 2-column section below.
 * Layout matches screenshot: text LEFT, image RIGHT.
 */
import food from '../../public/assets/homepage/food.png';

function HeroSection() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto">


      {/* Our Story */}
      <div className="w-full px-4 sm:px-6 lg:px-6 py-3 md:py-3">
        <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2 text-center">
          Our story
        </h2>
          {/* Text Content - Left */}
          <div className="space-y-4 text-gray-600 text-xl py-4 lg:text-xl text-center md:text-base leading-6">
            <p>
              An artisan kitchen, a slow bake, and ingredients chosen with
              care. We keep the process simple so the flavor can lead.
            </p>
            <p>
              From dough to toppings, every pizza is built for balance, texture,
              and a clean finish that feels made to order.
            </p>
          </div>

        </div>
      
    </section>
  );
}

export default HeroSection;
