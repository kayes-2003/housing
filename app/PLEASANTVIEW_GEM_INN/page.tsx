import React from 'react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="text-white w-full bg-cover relative">

      {/* Hero Section */}
      <section
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/2233394353/photo/silhouetted-crane.jpg?s=612x612&w=0&k=20&c=7ZqHRfHlGe8fAupSutprZsOqwsLu3LZ1GPyxUA3eh4Q=')",
          filter: "brightness(0.7)",
        }}
        aria-hidden="true"
      />
      {/* LATEST PROJECT */}
      <section className="relative py-22 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title + Decorative Circles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[sofia]">
             PLEASANTVIEW <br /> GEM INN
            </h2>
            <div className="flex justify-center md:justify-end gap-6">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-20 h-20 border border-white rounded-full flex items-center justify-center"
                >
                  <div className="w-12 h-12 border border-white bg-white rounded-full" />
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Image
                src="/house-06.jpg"
                alt="Modern house project"
                width={1200}
                height={800}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div className="flex flex-col gap-6">
              <Image
                src="/dineing-02.jpg"
                alt="Garden view"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
              <Image
                src="/interior-01.jpg"
                alt="Interior design"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>

          {/* Text Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
               Looking for the true dream-come-true family home? Pleasantview Gem boasts 5 on-suite bedrooms, a garden and two separate living areas, making it easy for even a big family to relax and unwind after a busy week. Closely situated to the local Pleasantview College, this neighborhood is popular among families. 
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              Complete with two decked patio areas and spacious open living areas, this 5 bedroom property comes with air conditioning, private garden, underground parking and fully customized interior design and furnishing. With a vast array of various materials and solutions to choose from, Pleasantview Gem is all about creating a home for you and your loved ones.
            </p>
          </div>

          {/* Image + Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="md:col-span-2">
              <Image
                src="/garden-02.jpg"
                alt="House exterior"
                width={1200}
                height={800}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 font-[sofia]">
                DETAILS
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-white">
               The property features five bedrooms and spans approximately 8,250 square feet across three floors/stories. Additionally, it offers two parking spaces and was constructed in the year 2020.
              </p>
            </div>
          </div>

          {/* Price + Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              As all Hackney properties come with custom-made furniture, you won’t need to make compromises in your living space, ever.
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[sofia]">
              $2,000,000
            </h2>
          </div>

          {/* Final Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div>
              <Image
                src="/window-01.jpg"
                alt="Garden view"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div className="md:col-span-2">
              <Image
                src="/shofa-04.jpg"
                alt="Living room"
                width={1200}
                height={800}
                className="rounded-lg object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>


      {/* PROCESS OF BUYING */}
      <section className="relative w-full min-h-screen text-white">
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