import React from 'react';
// import Image from 'next/image';


export default function HomePage() {
  return (
    <main className="relative w-full min-h-screen bg-gray-900 text-white">
      
        {/* WHAT WE OFFER  */}



          <section className="relative w-full min-h-screen bg-gray-900 text-white">
            {/* Background Image with Overlay */}
            <div className="absolute">
              
              <div className="absolute inset-0 from-black/70 via-black/50 to-black/80" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32">
              {/* Header Section */}
              
              {/* Three Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8 lg:gap-12">
                {/* Card 1: Experienced Team */}
                <div className="group grid grid-cols-1 md:grid-cols-3">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-[sofia]">
                  PROCESS <br /> OF BUYING
                </h2>
                  <h3 className="text-3xl md:text-9xl font-bold mb-4  transition-colors duration-700 ml-40 font-[sofia]">
                    1
                  </h3>
                  <div className="text-white leading-relaxed">
                    <h3 className='text-2xl md:text-3xl font-bold mb-4 font-[sofia]'>HOUSE VIEWING</h3>
                    <p>
                  We are here to help you find the perfect place for your family. Depending on your needs, we’ll suggest properties to view and book you in for your viewing. 
                    </p>
                  </div>
                </div>

                {/* Card 2: Quality To Die For */}
                <div className="group group grid grid-cols-1 md:grid-cols-3">
                  <h2></h2>
                  <h3 className="text-3xl md:text-9xl font-bold mb-4  transition-colors duration-700 ml-40 font-[sofia]">
                    2
                  </h3>
                  <div className="text-white leading-relaxed">
                    <h3 className='text-2xl md:text-3xl font-bold mb-4 font-[sofia]'>NEGOTIATING TERMS</h3>
                    <p>
                   Once you’ve found the property of your dreams and are ready to place an offer, we will contact the seller and negotiate the best terms to suit your budget and needs. 
                    </p>
                  </div>
                </div>

                {/* Card 3: Visionaries of The Future */}
                <div className="group group grid grid-cols-1 md:grid-cols-3">
                  <h2></h2>
                  <h3 className="text-3xl md:text-9xl font-bold mb-4  transition-colors duration-700 ml-40 font-[sofia]">
                    3
                  </h3>
                  <div className="text-white leading-relaxed">
                    <h3 className='text-2xl md:text-3xl font-bold mb-4 font-[sofia]'>CLOSE CARE-FREE</h3>
                    <p>
                   We don’t play around – that means that our bold and confident approach to closing results in you walking away with the keys to your new dream property. 
                    </p>
                  </div>
                </div>
              </div>

              {/* Optional decorative element */}
              <div className="mt-16 flex justify-start gap-x-70">
                <div className="w-24 h-24 border border-white rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 border border-white bg-white rounded-full" />
                </div>
                <div className="w-24 h-24 border border-white rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 border border-white bg-white rounded-full" />
                </div>
                <div className="w-24 h-24 border border-white rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 border border-white bg-white rounded-full" />
                </div>
              </div>
            </div>
          </section>
      
    </main>
  );
}