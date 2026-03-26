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
            "url('https://media.istockphoto.com/id/2219488890/photo/miami-florida-developing-american-megapolis-with-new-high-rise-buildings-under-construction.jpg?s=612x612&w=0&k=20&c=9Gz3wSxu03vJoVUrytID_cMgp1arJa6qCns51GguhJo=')",
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
              SUNSHINE BAY <br /> RESIDENCE
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
                src="/bedroom-08.jpg"
                alt="Modern house project"
                width={1200}
                height={800}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div className="flex flex-col gap-6">
              <Image
                src="/garden-out-04.jpg"
                alt="Garden view"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
              <Image
                src="/interior-10.jpg"
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
              At Sunshine Bay, you’ll be surrounded by green spaces. The national
              park trails start a 10-minute drive away from the compound, but
              thanks to the big gardens at every property, you feel one with
              nature the moment you sit down to enjoy your morning coffee.
            </p>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              These stylish 3 bedroom family homes come with air conditioning,
              private pool and custom-made furnishing and interior. The
              underground parking, accessible by the private elevator, helps you
              stay dry no matter the weather outside...
            </p>
          </div>

          {/* Image + Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div className="md:col-span-2">
              <Image
                src="/house-02.jpg"
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
                The property boasts three bedrooms and spans an impressive 8,250
                square feet across three floors, constructed in 2020. It also
                offers ample parking with two spaces available.
              </p>
            </div>
          </div>

          {/* Price + Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              Whether you want to play soccer with your kids in the yard, or
              invite friends and family over for a lavish barbeque, Sunshine Bay
              is the perfect place for families.
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[sofia]">
              $2,000,000
            </h2>
          </div>

          {/* Final Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            <div>
              <Image
                src="/garden-out-05.jpg"
                alt="Garden view"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <div className="md:col-span-2">
              <Image
                src="/shofa-02.jpg"
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