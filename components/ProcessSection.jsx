import React from 'react';

export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen bg-gray-900 text-white">
      {/* PROCESS OF BUYING */}
      <section className="relative w-full min-h-screen bg-gray-900 text-white">
        <div className="relative z-10 container mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24">
          {/* Cards */}
          <div className="space-y-12">
            {/* Step 1 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-[sofia]">
                PROCESS <br /> OF BUYING
              </h2>
              <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold font-[sofia] text-center md:text-left">
                1
              </h3>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 font-[sofia]">
                  HOUSE VIEWING
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  We are here to help you find the perfect place for your family.
                  Depending on your needs, we’ll suggest properties to view and
                  book you in for your viewing.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div />
              <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold font-[sofia] text-center md:text-left">
                2
              </h3>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 font-[sofia]">
                  NEGOTIATING TERMS
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  Once you’ve found the property of your dreams and are ready to
                  place an offer, we will contact the seller and negotiate the
                  best terms to suit your budget and needs.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              <div />
              <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold font-[sofia] text-center md:text-left">
                3
              </h3>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 font-[sofia]">
                  CLOSE CARE-FREE
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  We don’t play around – that means that our bold and confident
                  approach to closing results in you walking away with the keys
                  to your new dream property.
                </p>
              </div>
            </div>
          </div>

          {/* Decorative Circles */}
          <div className="mt-12 flex flex-wrap justify-center md:justify-start gap-6">
            <div className="w-20 h-20 border border-white rounded-full flex items-center justify-center">
              <div className="w-12 h-12 border border-white bg-white rounded-full" />
            </div>
            <div className="w-20 h-20 border border-white rounded-full flex items-center justify-center">
              <div className="w-12 h-12 border border-white bg-white rounded-full" />
            </div>
            <div className="w-20 h-20 border border-white rounded-full flex items-center justify-center">
              <div className="w-12 h-12 border border-white bg-white rounded-full" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}