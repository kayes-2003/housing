import React from 'react';
import Image from 'next/image';
import Footer from "@/components/Footer";


export default function HomePage() {
  return (
    <main className="text-white h-full w-full bg-cover pt-40 z-0 absolute">
      {/* Full-screen image background */}

      <section
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
    backgroundImage: "url('/working-01.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
        }}
        />
        
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content container */}
      <div className="relative z-20 flex flex-col ml-120 items-start justify-center h-full px-6 md:px-16 lg:px-24 text-white gap-10">
        
        

        <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-8xl ml-40 font-bold leading-tight text-right font-[sofia]">
          ABOUT US 
        </h1>

        {/* Description paragraph */}
        <p className="max-w-md md:max-w-lg text-base md:text-lg ml-40 font-light leading-relaxed pb-20 ">
          Hackney started as a small interior design firm in downtown Michigan, aiming to help home buyers to make do with the new space that they had acquired. It soon became obvious that it would make sense to help our clients see beyond the walls and floor plans, and be there with them from the get-go.

Currently, we offer house realtor, interior design, and architecture services in order to help our customers find their forever homes as seamlessly and painlessly as possible. We value our customers above everything else, meaning that we won’t take ’OK’ as an answer. 
        </p>
        

        {/* Optional subtle divider or accent (adds a modern touch) */}
        <div className="w-16 h-0.5 bg-white/80 mt-8" />

        </div>

              

  {/* OUR MISSION-VISION */}



              <section className="relative w-full h-120 bg-gray-900 text-white">
                {/* Background Image with Overlay */}
                

                {/* Content Container */}
                <div className="relative z-10 container mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-20">
                  

                  {/* Three Cards Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-20">
                    {/* Card 1: Experienced Team */}
                    <div className="group">
                      
                      
                      <h1 className="text-2xl md:text-5xl font-bold mb-4 font-[sofia]">
                        OUR MISSION
                      </h1>
                      <p className="text-white leading-relaxed">
                        We’re on a mission to change the way the housing market works. Rather than offering one service or another, we want to combine as many and make our clients’ lives easy and carefree. Our goal is to match our clients with the perfect properties that fit their tastes, needs, and budgets. 
                      </p>
                    </div>

                    {/* Card 2: Quality To Die For */}
                    <div className="group">
                      <h1 className="text-2xl md:text-5xl font-bold mb-4 font-[sofia]">
                      OUR VISION
                      </h1>
                      <p className="text-white leading-relaxed">
                        We want to live in a world where people can buy homes that match their needs, rather than having to find a compromise and settle on the second-best option. That’s why we take a lot of time and care in getting to know our clients from the moment they reach out to us and ask for our help. 
                      </p>
                    </div>

                    
                  </div>

                  {/* Optional decorative element */}
                  <div className="mt-10 flex justify-start gap-x-120">
                    <div className="w-24 h-24 border border-white rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 border border-white bg-white rounded-full" />
                    </div>
                    
                    <div className="w-24 h-24 border border-white rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 border border-white bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              </section>



         



                {/* MEAT OUR TEAM  */}

                <section className="bg-[#4d5e6c] py-16 px-6">
                  <div className="max-w-6xl mx-auto pt-10">
                    {/* Title */}
                    <div className='grid grid-cols-2 pb-0'>
                    <div className='grid md:grid-cols-1 gap-2 px-0'>

                    <h2 className="text-5xl font-bold mb-4 font-[sofia]">MEAT OUR <br /> TEAM</h2>
                    
                    <p className="text-white mb-10 w-100 mt-0">
                      Presson team is constantly striving for perfection. We are lucky to
                      work with notable and known clients, who trust us and let us guide
                      them with our creative vision, making their real estate dreams true.
                    </p>
                    <div className="w-24 h-24 border border-white rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 border border-white bg-white rounded-full" />
                </div><div className="w-24 h-24 border border-white rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 border border-white bg-white rounded-full" />
                </div>
                    </div>


                    <div className="text-white mb-10 max-w-2xl">
                     

                      {/* Two smaller images stacked */}
                      <div className="grid md:grid-cols-2 gap-2 px-10">
                     
                        <div className="relative overflow-hidden">
                            <Image
                              src="/person-01.jpg"
                              alt="Adventure"
                              className="w-full h-64 object-cover"
                              width={400}
                              height={256}
                            />
                            <div className="p-2 text-center">
                              <h4 className="text-2xl uppercase font-semibold text-white mb-4 font-[sofia]">ESTHER BRYCE</h4>
                              <p className="text-normal text-white mb-4 font-[sofia]">Founder • Interior designer</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden">
                            <Image
                              src="/person-04.jpg"
                              alt="Adventure"
                              className="w-full h-64 object-cover"
                              width={400}
                              height={256}
                            />
                            <div className="p-2 text-center">
                              <h4 className="text-2xl uppercase font-semibold text-white mb-4 font-[sofia]">LIANNE WILSON</h4>
                              <p className="text-normal text-white mb-4 font-[sofia]">Broker</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden">
                            <Image
                              src="/person-03.jpg"
                              alt="Adventure"
                              className="w-full h-64 object-cover"
                              width={400}
                              height={256}
                            />
                            <div className="p-2 text-center">
                              <h4 className="text-2xl uppercase font-semibold text-white mb-4 font-[sofia]">JADEN SMITH</h4>
                              <p className="text-normal text-white mb-4 font-[sofia]">Architect</p>
                            </div>
                        </div>
                        <div className="relative overflow-hidden">
                            <Image
                              src="/person-02.jpg"
                              alt="Adventure"
                              className="w-full h-64 object-cover"
                              width={400}
                              height={256}
                            />
                            <div className="p-2 text-center">
                              <h4 className="text-2xl uppercase font-semibold text-white mb-4 font-[sofia]">JESSICA KIM</h4>
                              <p className="text-normal text-white mb-4 font-[sofia]">Photographer</p>
                            </div>
                        </div>

                      </div>
                    </div>
                    
                    </div>
                  </div>
                </section>








<Footer/>





       

    </main>
  );
}