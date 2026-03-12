import React from 'react';
import Image from 'next/image';
import Footer from "@/components/Footer";
import ProcessSection from '@/components/ProcessSection';


export default function HomePage() {
  return (
    <main className="text-white h-full w-full bg-cover pt-52 z-0 absolute">
      {/* Full-screen image background */}

      <section
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          filter: 'brightness(0.7)'
        }}
        aria-hidden="true"
        />

      {/* Dark overlay for better text readability (optional, but matches the mood) */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content container */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-24 text-white">
        {/* First line: "TIME TO MEET YOUR" */}
        <p className="text-2xl md:text-base tracking-[0.3em] uppercase mb-2 font-light">
          Time to meet your
        </p>

        {/* Main heading: "NEW HOME" */}
        <h1 className="text-9xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-6 leading-tight font-[sofia]">
          NEW HOME
        </h1>

        {/* Description paragraph */}
        <p className="max-w-md md:max-w-lg text-base md:text-lg font-light leading-relaxed">
          Finding the perfect place to call home can be hard. Our team of
          creatives and specialists makes real estate easy.
        </p>

        {/* Optional subtle divider or accent (adds a modern touch) */}
        <div className="w-16 h-0.5 bg-white/80 mt-8" />

        </div>



        {/* WHAT WE OFFER  */}



          <section className="relative w-full min-h-screen bg-gray-900 text-white">
            {/* Background Image with Overlay */}
            <div className="absolute">
              
              <div className="absolute inset-0 from-black/70 via-black/50 to-black/80" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32">
              {/* Header Section */}
              <div className="mb-16 md:mb-20 gap-y-10">
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-[sofia]">
                  WHAT WE  <span className="text-white pt-10">OFFER</span>
                </h2>
                
              </div>

              {/* Three Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {/* Card 1: Experienced Team */}
                <div className="group">
                  <div className="mb-4 overflow-hidden">
                    <div className="w-16 h-1 bg-white/40 group-hover:w-24 transition-all duration-700 ease-out" />
                  </div>
                  <h3 className="font-[sofia] text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-300 transition-colors duration-700">
                    EXPERIENCED <br />TEAM
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Each of us is a master of our craft — we’ve worked a number of years in our field 
                    and each have passion and creative vision for every project we put our hands on.
                  </p>
                </div>

                {/* Card 2: Quality To Die For */}
                <div className="group">
                  <div className="mb-4 overflow-hidden">
                    <div className="w-16 h-1 bg-white/40 group-hover:w-24 transition-all duration-700 ease-out" />
                  </div>
                  <h3 className="font-[sofia] text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-300 transition-colors duration-700">
                    QUALITY TO <br />DIE FOR
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    We pay a lot of attention to each and every detail, because we know that we are in 
                    charge of creating somebody’s safe haven. We partner up with the best craftsmen to 
                    ensure our famed quality.
                  </p>
                </div>

                {/* Card 3: Visionaries of The Future */}
                <div className="group">
                  <div className="mb-4 overflow-hidden">
                    <div className="w-16 h-1 bg-white/40 group-hover:w-24 transition-all duration-700 ease-out" />
                  </div>
                  <h3 className="font-[sofia] text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-300 transition-colors duration-700">
                    VISIONARIES OF <br />THE FUTURE
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    We’re not scared to go beyond the horizon. As the visionaries of tomorrow, we won’t 
                    say no to experimentation, unusual materials, or unlikely combinations.
                  </p>
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






            {/* LATEST PROJECT  */}
                
                <section className="bg-[#4d5e6c] py-16 px-6">
                  <div className="max-w-6xl mx-auto">
                    {/* Title */}
                    <div className='grid grid-cols-2 pb-20'>

                    <h2 className="text-5xl font-bold mb-4 font-[sofia]">LATEST <br /> PROJECT</h2>
                    <p className="text-white mb-10 max-w-2xl">
                      Presson team is constantly striving for perfection. We are lucky to
                      work with notable and known clients, who trust us and let us guide
                      them with our creative vision, making their real estate dreams true.
                    </p>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Main large image */}
                      <div className="md:col-span-2">
                        <Image
                          src="/house-02.jpg" // replace with your uploaded image path
                          alt="Modern house project"
                          width={1200}
                          height={800}
                          className="rounded-lg object-cover"
                        />
                      </div>

                      {/* Two smaller images stacked */}
                      <div className="flex flex-col gap-6 pt-5">
                        <Image
                          src="/pool-01.jpg"
                          alt="Poolside seating"
                          width={600}
                          height={400}
                          className="rounded-lg object-cover"
                        />
                        <Image
                          src="/interior-07.jpg"
                          alt="Minimalist interior"
                          width={600}
                          height={400}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    </div>

                    <div className='grid grid-cols-2 pt-20'>
                      <div className='grid grid-rows-2'>

                    <h2 className="text-3xl font-bold mb-4 font-[sofia]">SUNSHINE BAY <br /> RESIDENCE</h2>
                    <h2 className="text-5xl font-bold mt-30 font-[sofia]">$2,000,00</h2>
                      </div>
                      <div className='grid grid-rows-2'>
                    <p className="text-white mb-0 max-w-2xl">
                      Equipped with air conditioning, private pool, 3 on-suite bedrooms and a spacious open living room kitchen area, Sunshine Bay Residences are an excellent choice for anyone dreaming of their own safe haven. Located in a peaceful, child-friendly neighborhood, Sunshine Bay has all the amenities that you could expect from a suburb voted ’best in the state’ for 3 running years. Whether you want to play soccer with your kids on the lawn, or invite friends over for dinner, there’s space for it at Sunshine Bay.
                    </p>
                    <a href="/explore">
              <button className="px-20 mt-25  py-3 uppercase text-white  border-solid border-2 hover:bg-black font-semibold font-[Montserrat]">
                LEARN MORE
              </button>
            </a>
                    </div>
                    </div>
                  </div>
                </section>






          {/* SEE OUR OTHER PROJECTS */}
              
              <section className="bg-gray-900 py-16 px-6">
                <div className="max-w-6xl mx-auto">
                  {/* Title */}
                  <div className='grid grid-cols-2 pb-20'>

                  <h2 className="text-5xl font-bold mb-4 font-[sofia]">SEE OUR OTHER PROJECTS</h2>
                  <div className='place-items-end grid grid-cols-3'>

                  <div className="w-24 h-24 border border-white rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 border  border-white bg-white rounded-full" />
                    </div>
                  <div className="w-24 h-24 border border-white rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 border  border-white bg-white rounded-full" />
                    </div>
                  <div className="w-24 h-24 border border-white rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 border  border-white bg-white rounded-full" />
                    </div>
                  </div>
                  </div>

                  {/* Image Grid */}
                  <div className="grid grid-col-1 md:grid-cols-2 gap-6">
                    {/* Main large image */}
                    <div className="md:col-span-1">
                      <a href="#" className='appearance-none forced-colors:appearance-auto'>

                      <Image
                        src="/house-03.jpg" // replace with your uploaded image path
                        alt="Modern house project"
                        width={800}
                        height={700}
                        className="rounded-lg object-cover"
                        />
                        </a>
                        <div className="p-6 text-center">
              <h3 className="text-2xl uppercase font-bold text-white mb-4 font-[sofia]">BRIDGEWATER JOY RESIDENCE</h3>
              </div>
                    </div>
                  
                    <div className="md:col-span-1">

                      <a href="#">

                      <Image
                        src="/house-05.jpg" // replace with your uploaded image path
                        alt="Modern house project"
                        width={600}
                        height={700}
                        className="rounded-lg object-cover"
                        />
                        </a>
                      <div className="p-6 text-center">
              <h3 className="text-2xl uppercase font-bold text-white mb-4 font-[sofia]">
          PLEASANTVIEW GEM INN</h3>
              </div>
                    </div>
                    </div>
                  </div>

                  <div className='grid grid-cols-2 pt-20'>
                    
                    <div className='grid grid-rows-2'>
                  <p className="text-white ml-5 max-w-2xl">
                    Our years of experience makes us the ideal partner for your next project. We won’t shy away from a challenge, but also know how to manage risks. 
                  </p>
                  
                  </div>
                    <div className='grid grid-rows-2'>
                  
                      <a href="/explore">
                        <button className="px-20 mt-10 ml-40 py-3 uppercase text-white  border-solid border-2 hover:bg-black font-semibold font-[Montserrat]">
                          LEARN MORE
                        </button>
                      </a>
                    </div>
                  </div>
                {/* </div> */}
              </section>



              

          {/* CLIENT FEEDBACK  */}



              <section className="relative w-full min-h-screen bg-[#4d5e6c] text-white">
                {/* Background Image with Overlay */}
                

                {/* Content Container */}
                <div className="relative z-10 container mx-auto px-6 md:px-16 lg:px-24 py-24 md:py-32">
                  {/* Header Section */}
                  <div className="mb-16 md:mb-20 gap-y-10">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-[sofia]">
                      CLIENT FEEDBACK
                    </h2>
                    
                  </div>

                  {/* Three Cards Section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Card 1: Experienced Team */}
                    <div className="group">
                      <div className="mb-4 overflow-hidden">
                        <div className="w-16 h-1 bg-white/40 group-hover:w-24 transition-all duration-700 ease-out" />
                      </div>
                      
                      <h3 className="font-[sofia] text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-300 transition-colors duration-700">
                        Miriam Hayes
                      </h3>
                      <p className="text-white leading-relaxed">
                        We have bought and sold a handful of properties in the past with various different realtors, but none came close to the service we got at Presson’s. Not only is the team full of experts who know what they’re talking about, but they are also always willing to go that extra mile to ensure customer happiness and satisfaction. We were never left hanging and waiting for an answer – everyone got back to us promptly and we never felt like we weren’t in the loop of what was going on. The whole process was smooth and we never felt rushed or pushed to make a decision. Instead, we could take the time to decide on everything, and ended up signing the papers within weeks. 
                      </p>
                    </div>

                    {/* Card 2: Quality To Die For */}
                    <div className="group">
                      <div className="mb-4 overflow-hidden">
                        <div className="w-16 h-1 bg-white/40 group-hover:w-24 transition-all duration-700 ease-out" />
                      </div>
                      <h3 className="font-[sofia] text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-300 transition-colors duration-700">
                      James and Susan Smith
                      </h3>
                      <p className="text-white leading-relaxed">
                        We had heard a lot of praise for Presson’s team, since many of our social circle was already using their services to purchase their own homes. We had pretty high expectations, and were pleasantly surprised when they were not just met, but surpassed by a mile. The team was accommodating at all stages – from viewing the properties, to providing extra information on some of the interior materials, to explaining in detail all the clauses in the contracts. Even our children could join the house viewing process, something which we were eternally grateful. Now, we are happy homeowners in a nice neighborhood, and we couldn’t be happier. 
                      </p>
                    </div>

                    
                  </div>

                  {/* Optional decorative element */}
                  <div className="mt-16 flex justify-start gap-x-120">
                    <div className="w-24 h-24 border border-white rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 border border-white bg-white rounded-full" />
                    </div>
                    
                    <div className="w-24 h-24 border border-white rounded-full flex items-center justify-center">
                      <div className="w-16 h-16 border border-white bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              </section>



          <ProcessSection />



                {/* MEAT OUR TEAM  */}

                <section className="relative w-full min-h-screen bg-[#4d5e6c] text-white pt-20">
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
                              <h4 className="text-2xl uppercase font-semibold text-white mb-4 ">JESSICA KIM</h4>
                              <p className="text-normal text-white mb-4 font-[sofia]">Photographer</p>
                            </div>
                        </div>

                      </div>
                    </div>
                    
                    </div>
                  </div>
                </section>







                {/* PARTNERS  */}

                <section className="bg-gray-900 text-white h-full w-full bg-cover pt-10 z-0 absolute">
                  <div className="max-w-6xl mx-auto pt-10">
                    {/* Title */}
                    <div className='grid grid-cols-2 pb-0'>
                    <div className='grid md:grid-cols-1 gap-2 px-0'>

                    <h2 className="text-5xl font-bold mb-4 font-[sofia]">PARTNERS</h2>
                    <p className="text-white mb-10 w-100 mt-0">
                      To bring our vision into reality, we need the best partners out there. We’ve joined hands with one of the best when it comes to materials, lightning and furniture to achieve sophisticated results.
                    </p>
                    </div>


                    <div className="text-white mb-10 max-w-2xl">
                     

                      {/* Two smaller images stacked */}
                      <div className="grid md:grid-rows-2 gap-2 px-10">
                     
                        <div className="relative overflow-hidden">
                            <Image
                              src="/partner-06.jpg"
                              alt="Adventure"
                              className="w-3/4 h-30 object-cover"
                              width={500}
                              height={100}
                            />
                            
                        </div>
                        <div className="relative overflow-hidden">
                            <Image
                              src="/partner-05.jpg"
                              alt="Adventure"
                              className="w-3/4 h-30 object-cover"
                              width={500}
                              height={100}
                            />
                            
                        </div>
                        <div className="relative overflow-hidden">
                            <Image
                              src="/partner-03.jpg"
                              alt="Adventure"
                              className="w-3/4 h-30 object-cover"
                              width={400}
                              height={100}
                            />
                            
                        </div>
                        <div className="relative overflow-hidden">
                            <Image
                              src="/partner-02.jpg"
                              alt="Adventure"
                              className="w-3/4 h-30 object-cover"
                              width={400}
                              height={100}
                            />
                            
                        </div>

                      </div>
                    </div>
                    
                    </div>
                  </div>
<Footer/>
                </section>

    








       

    </main>
  );
}