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
      
                          <h2 className="text-5xl font-bold mb-4 font-[sofia]">PLEASANTVIEW <br /> GEM INN</h2>

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
                                src="/house-06.jpg" // replace with your uploaded image path
                                alt="Modern house project"
                                width={1200}
                                height={800}
                                className="rounded-lg object-cover"
                              />
                            </div>
      
                            {/* Two smaller images stacked */}
                            <div className="flex flex-col gap-6 pt-5 ">
                              <Image
                                src="/dineing-02.jpg"
                                alt="Poolside seating"
                                width={600}
                                height={400}
                                className="rounded-lg object-cover"
                              />
                              <Image
                                src="/interior-01.jpg"
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
                        Looking for the true dream-come-true family home? Pleasantview Gem boasts 5 on-suite bedrooms, a garden and two separate living areas, making it easy for even a big family to relax and unwind after a busy week. Closely situated to the local Pleasantview College, this neighborhood is popular among families.       </p>                      </div>
                            <div className='grid grid-rows-2'>
                          <p className="text-white mb-0 max-w-2xl">
                            Complete with two decked patio areas and spacious open living areas, this 5 bedroom property comes with air conditioning, private garden, underground parking and fully customized interior design and furnishing. With a vast array of various materials and solutions to choose from, Pleasantview Gem is all about creating a home for you and your loved ones.  
                          </p>
                          
                          </div>
                          </div>



                          {/* Image Grid */}
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 pb-20">
                            {/* Main large image */}
                            <div className="md:col-span-2 pl-20">
                              <Image
                                src="/garden-02.jpg" // replace with your uploaded image path
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
                   <p className="text-white mb-0 w-80 pl-15 text-left">
                            The property features five bedrooms and spans approximately 8,250 square feet across three floors/stories. Additionally, it offers two parking spaces and was constructed in the year 2020.
                          </p>
                    
                  </div>
                  
                </div>
                          </div>
                        </div>



                    <div className='grid grid-cols-2 pt-5'>
                            <div className='grid grid-rows-2 pl-20 pr-10'>
      
                          <p className="text-white mb-0 max-w-2xl pl-20">
                           As all Hackney properties come with custom-made furniture, you won’t need to make compromises in your living space, ever. </p>
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
                                src="/window-01.jpg"
                                alt="Poolside seating"
                                width={600}
                                height={400}
                                className=" object-cover h-full"
                              />
                              
                            </div>
                            
      
                            {/* Two smaller images stacked */}
                            <div className="md:col-span-2 pr-40">
                              <Image
                                src="/shofa-04.jpg" // replace with your uploaded image path
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