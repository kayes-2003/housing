import React from 'react';
import Image from 'next/image';
import Footer from "@/components/Footer";
import ProcessSection from '@/components/ProcessSection';


export default function HomePage() {
  return (
    <main className="text-white h-full w-full bg-cover pt-0 z-0 absolute">
      
                  {/* LATEST PROJECT  */}
                      
                      <section className="bg-[#4d5e6c] py-0 px-0 pt-40">
                        <div className="max-w-6xl mx-auto">
                          {/* Title */}
                          <div className='grid grid-cols-2 pb-20'>
      
                          <h2 className="text-5xl font-bold mb-4 font-[sofia]">BRIDGEWATER JOY <br /> RESIDENCE</h2>

                          <div className='grid grid-cols-3 gap-2'>

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
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Main large image */}
                            <div className="md:col-span-2">
                              <Image
                                src="/house-04.jpg" // replace with your uploaded image path
                                alt="Modern house project"
                                width={1200}
                                height={800}
                                className="rounded-lg object-cover"
                              />
                            </div>
      
                            {/* Two smaller images stacked */}
                            <div className="flex flex-col gap-6 pt-5">
                              <Image
                                src="/garden-07.jpg"
                                alt="Poolside seating"
                                width={600}
                                height={400}
                                className="rounded-lg object-cover"
                              />
                              <Image
                                src="/interior-04.jpg"
                                alt="Minimalist interior"
                                width={600}
                                height={400}
                                className="rounded-lg object-cover"
                              />
                            </div>
                          </div>
      
                          <div className='grid grid-cols-2 pt-20'>
                            <div className='grid grid-rows-2 pr-20'>
      
                          <p className="text-white mb-0 max-w-2xl ">
                            With top views of the nearby lake Michigan, these multi-story townhouses look sleek and modern and suit a small family or a working couple perfectly. Situated at close proximity to nearby highways, Bridgewater Joy is both secluded and well-connected at the same time.    </p>                         </div>
                            <div className='grid grid-rows-2'>
                          <p className="text-white mb-0 max-w-2xl">
                            Each property comes with a garden, modern fully-equipped kitchen and custom-made furnishing and interior. You can choose from a variety of custom-made lighting solutions for most living spaces, and have access to residential gardening and cleaning services. The calm neighborhood has a true tight-knit feel to it, making you feel at home in an instant.
                          </p>
                          
                          </div>
                          </div>



                          {/* Image Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 pb-20">
                            {/* Main large image */}
                            <div className="md:col-span-2 pl-20">
                              <Image
                                src="/garden-05.jpg" // replace with your uploaded image path
                                alt="Modern house project"
                                width={1200}
                                height={800}
                                className="object-cover"
                              />
                            </div>
      
                            {/* Two smaller images stacked */}
                            <div className="group">
                  
                   <h2 className="text-2xl font-bold pb-10 pl-30 font-[sofia]">DETAILS</h2>
                  <div className="text-black leading-relaxed">
                   <p className="text-white mb-0 w-80 pl-10 text-left">
                            The property features two bedrooms and spans across 8,250 square feet. It comprises three floors/stories and includes parking space for two vehicles. The house was constructed in the year 2020.
                          </p>
                    
                  </div>
                  
                </div>
                          </div>
                        </div>



                    <div className='grid grid-cols-2 pt-5'>
                            <div className='grid grid-rows-2 pl-20 pr-10'>
      
                          <p className="text-white mb-0 max-w-2xl pl-20">
                            With 2 generously-sized on-suite bedrooms, these properties are perfect for a small family, or a professional couple looking for a space to call their own. </p>
                            </div>
                            <div className='grid grid-rows-2 pl-20 pr-20'>
                          <h2 className="text-5xl font-bold mt-0 pl-50 font-[sofia]">$2,000,00</h2>
                          
                          </div>
                          </div>




                           {/* Image Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pb-20">
                            {/* Main large image */}
                            <div className="flex flex-col gap-6 pl-40">
                              <Image
                                src="/bedroom-04.jpg"
                                alt="Poolside seating"
                                width={600}
                                height={400}
                                className=" object-cover h-full"
                              />
                              
                            </div>
                            
      
                            {/* Two smaller images stacked */}
                            <div className="md:col-span-2 pr-40">
                              <Image
                                src="/dineing-03.jpg" // replace with your uploaded image path
                                alt="Modern house project"
                                width={1200}
                                height={800}
                                className="object-cover"
                              />
                            </div>
                          </div>


                      <ProcessSection />

                      </section>
      
      
      







<Footer/>





       

    </main>
  );
}