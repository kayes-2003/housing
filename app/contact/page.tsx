import React from 'react';
import Footer from "@/components/Footer";


export default function HomePage() {
  return (
    <main className="text-white h-full w-full bg-cover pt-52 z-0 absolute">

      <section
        className="absolute inset-0 w-full h-full bg-cover bg-center z-0"
        style={{
    backgroundImage: "url('/interior-11.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
        }}
        />

      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content container */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full px-6 md:px-16 lg:px-24 text-white gap-15 text-center">
        
        

        <h1 className="text-9xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-tight text-center font-[sofia]">
          CONTACT US
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 ml-100">
                

                {/* Card 2: Quality To Die For */}
                <div className="group">
                  
                  <h3 className="text-normal font-bold mb-4 ml-10 font-[sofia]">
                    CONTACTS
                  </h3>
                  <div className="text-white leading-relaxed ml-10">
                   <p>email@example.com</p>
                    <p>880123456789</p>

                  </div>
                  
                </div>

                {/* Card 3: Visionaries of The Future */}
                <div className="group">
                  
                  <h3 className="text-normal  font-bold mb-4 font-[sofia]">
                    ADDRESS
                  </h3>
                  <div className="text-white leading-relaxed">
                   <p>123 your street name, </p>
                    <p>City name, Country, post code </p>
                    
                  </div>
                  
                </div>
              </div>
        

        {/* Optional subtle divider or accent (adds a modern touch) */}
        <div className="w-16 h-2 bg-white/80 mb-8" />

        </div>

              


<Footer/>





       

    </main>
  );
}