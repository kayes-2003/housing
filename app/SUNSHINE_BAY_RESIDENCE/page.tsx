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
      
                          <h2 className="text-5xl font-bold mb-4 font-[sofia]">SUNSHINE BAY <br /> RESIDENCE</h2>

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
                                src="/bedroom-08.jpg" // replace with your uploaded image path
                                alt="Modern house project"
                                width={1200}
                                height={800}
                                className="rounded-lg object-cover"
                              />
                            </div>
      
                            {/* Two smaller images stacked */}
                            <div className="flex flex-col gap-6 pt-5">
                              <Image
                                src="/garden-out-04.jpg"
                                alt="Poolside seating"
                                width={600}
                                height={400}
                                className="rounded-lg object-cover"
                              />
                              <Image
                                src="/interior-10.jpg"
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
                            At Sunshine Bay, youll be surrounded by green spaces. The national park trails start a 10-minute drive away from the compound, but thanks to the big gardens at every property, you feel one with the nature the moment you sit down to enjoy your morning coffee in your yard.</p>
                            </div>
                            <div className='grid grid-rows-2'>
                          <p className="text-white mb-0 max-w-2xl">
                            These stylish 3 bedroom family homes come with air conditioning, private pool and custom-made furnishing and interior. The underground parking, accessible by the private elevator, helps you stay dry no matter the weather outside. With all local amenities, from the local kindergarden and school to a small shopping mall, a mere 5-minute walk away, Sunshine Bay has a distinct small town feel to it that families love. 
                          </p>
                          
                          </div>
                          </div>

                          {/* Image Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 pb-20 ">
                            {/* Main large image */}
                            <div className="md:col-span-2 pl-20">
                              <Image
                                src="/house-02.jpg" // replace with your uploaded image path
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
                   <p className="text-white mb-0 w-100 pl-20 text-left">
                            The property boasts three bedrooms and spans an impressive 8,250 square feet across three floors/stories, constructed in the year 2020. It also offers ample parking with two parking spaces available.
                          </p>
                    
                  </div>
                  
                </div>
                          </div>
                        </div>



                    <div className='grid grid-cols-2 pt-5'>
                            <div className='grid grid-rows-2 pl-20 pr-10'>
      
                          <p className="text-white mb-0 max-w-2xl pl-20">
                            Whether you want to play soccer with your kids in the yard, or invite friends and family over for a lavish barbeque, Sunshine Bay is the perfect place for families. </p>
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
                                src="/garden-out-05.jpg"
                                alt="Poolside seating"
                                width={600}
                                height={400}
                                className=" object-cover h-full"
                              />
                              
                            </div>
                            
      
                            {/* Two smaller images stacked */}
                            <div className="md:col-span-2 pr-40">
                              <Image
                                src="/shofa-02.jpg" // replace with your uploaded image path
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