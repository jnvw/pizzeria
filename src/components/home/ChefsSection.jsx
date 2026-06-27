/**
 * ChefsSection - Our Chefs section on the Home page.
 * Layout matches screenshot: text LEFT, chef image RIGHT.
 */
import cook from '../../public/assets/homepage/cook.png';
function ChefsSection() {
  return (
    <section className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-6 py-4 md:py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content - Left */}
          <div className="max-w-xl order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
              Our Chefs
            </h2>
            <p className="text-gray-600 lg:text-xl text-sm md:text-base leading-7">
              Our team keeps every pizza steady, hot, and consistent. No fuss,
              just good technique and a clear finish.
            </p>
          </div>

          {/* Chef Image - Right */}
          <div className="overflow-hidden rounded-2xl bg-gray-900 aspect-[4/3] shadow-lg order-1 md:order-2">
            <img src={cook} alt="Chef" className="w-full h-full object-cover" />
          </div>
      </div>
    </section>
  );
}

export default ChefsSection;
