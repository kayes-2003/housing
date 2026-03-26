import React from 'react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="text-white w-full bg-cover relative">
      {/* ABOUT US */}
      <section
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1511332424/photo/hands-stacked-motivation-and-team-building-on-a-blue-sky-for-trust-community-and-about-us.jpg?s=612x612&w=0&k=20&c=bK9aOPQ75XGtSVCThcFyh9tHpZ2O2vhpiboGATb7_V0=')",
          filter: "brightness(0.5)",
        }}
        aria-hidden="true"
      />
        
      

      {/* Content container */}
      <div className="relative z-20 flex flex-col items-start justify-center h-screen px-6 md:px-16 lg:px-24 gap-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold leading-tight font-[sofia]">
          ABOUT US
        </h1>

        <p className="max-w-md md:max-w-2xl text-sm sm:text-base md:text-lg font-light leading-relaxed">
          Hackney started as a small interior design firm in downtown Michigan,
          aiming to help home buyers to make do with the new space that they had
          acquired. It soon became obvious that it would make sense to help our
          clients see beyond the walls and floor plans, and be there with them
          from the get-go.
          <br />
          <br />
          Currently, we offer house realtor, interior design, and architecture
          services in order to help our customers find their forever homes as
          seamlessly and painlessly as possible. We value our customers above
          everything else, meaning that we won’t take ’OK’ as an answer.
        </p>

        {/* <div className="w-16 h-0.5 bg-white/80 mt-4" /> */}
      </div>

      {/* OUR MISSION-VISION */}
      <section className="relative w-full  text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 font-[sofia]">
                OUR MISSION
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed font-light">
                We’re on a mission to change the way the housing market works.
                Rather than offering one service or another, we want to combine
                as many and make our clients’ lives easy and carefree. Our goal
                is to match our clients with the perfect properties that fit
                their tastes, needs, and budgets.
              </p>
            </div>

            {/* Vision */}
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 font-[sofia]">
                OUR VISION
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                We want to live in a world where people can buy homes that match
                their needs, rather than having to find a compromise and settle
                on the second-best option. That’s why we take a lot of time and
                care in getting to know our clients from the moment they reach
                out to us and ask for our help.
              </p>
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
          </div>
        </div>
      </section>

          
          
                    {/* MEET OUR TEAM */}
          
          
          
          <section className="relative w-full text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">
              {/* Title + Intro */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-[sofia] mb-4">
                    MEET OUR <br /> TEAM
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg max-w-xl mb-6">
                    Presson team is constantly striving for perfection. We are lucky to
                    work with notable and known clients, who trust us and let us guide
                    them with our creative vision...
                  </p>
                  <div className="flex gap-6">
                    <div className="w-20 h-20 border border-white rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 border border-white bg-white rounded-full" />
                    </div>
                    <div className="w-20 h-20 border border-white rounded-full flex items-center justify-center">
                      <div className="w-12 h-12 border border-white bg-white rounded-full" />
                    </div>
                  </div>
                </div>
          
                {/* Team Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Member 1 */}
                  <div className="relative overflow-hidden">
                    <Image
                      src="/person-01.jpg"
                      alt="Esther Bryce"
                      className="w-full h-64 object-cover rounded-lg"
                      width={400}
                      height={256}
                    />
                    <div className="p-2 text-center">
                      <h4 className="text-lg sm:text-xl md:text-2xl uppercase font-semibold font-[sofia]">
                        ESTHER BRYCE
                      </h4>
                      <p className="text-sm sm:text-base">Founder • Interior designer</p>
                    </div>
                  </div>
          
                  {/* Member 2 */}
                  <div className="relative overflow-hidden">
                    <Image
                      src="/person-04.jpg"
                      alt="Lianne Wilson"
                      className="w-full h-64 object-cover rounded-lg"
                      width={400}
                      height={256}
                    />
                    <div className="p-2 text-center">
                      <h4 className="text-lg sm:text-xl md:text-2xl uppercase font-semibold font-[sofia]">
                        LIANNE WILSON
                      </h4>
                      <p className="text-sm sm:text-base">Broker</p>
                    </div>
                  </div>
          
                  {/* Member 3 */}
                  <div className="relative overflow-hidden">
                    <Image
                      src="/person-03.jpg"
                      alt="Jaden Smith"
                      className="w-full h-64 object-cover rounded-lg"
                      width={400}
                      height={256}
                    />
                    <div className="p-2 text-center">
                      <h4 className="text-lg sm:text-xl md:text-2xl uppercase font-semibold font-[sofia]">
                        JADEN SMITH
                      </h4>
                      <p className="text-sm sm:text-base">Architect</p>
                    </div>
                  </div>
          
                  {/* Member 4 */}
                  <div className="relative overflow-hidden">
                    <Image
                      src="/person-02.jpg"
                      alt="Jessica Kim"
                      className="w-full h-64 object-cover rounded-lg"
                      width={400}
                      height={256}
                    />
                    <div className="p-2 text-center">
                      <h4 className="text-lg sm:text-xl md:text-2xl uppercase font-semibold font-[sofia]">
                        JESSICA KIM
                      </h4>
                      <p className="text-sm sm:text-base">Photographer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



    </main>
  );
}