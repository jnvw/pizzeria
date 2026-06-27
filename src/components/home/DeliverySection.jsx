/**
 * DeliverySection - 45 min delivery section on the Home page.
 * Layout matches screenshot: clock icon left-aligned with text beside it.
 */
function DeliverySection() {
  return (
    <section className="bg-[#1a1a1a] text-white py-12 w-full">
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-4">
        {/* Clock Icon */}
        <div className="w-28 h-28 border-4 border-red-500 rounded-full flex items-center justify-center bg-gray-800">
          <span className="text-3xl font-bold text-red-500 font-display">
            45
          </span>
        </div>

        {/* Delivery Text */}
        <h2 className="text-lg font-bold text-gray-800">45 min delivery</h2>
      </div>
    </section>
  );
}

export default DeliverySection;
