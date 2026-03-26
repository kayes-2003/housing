import React from 'react';

export default function HomePage() {
  return (
    <main className="text-white w-full bg-cover relative">
      {/* Background */}
      <section
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('/interior-11.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-screen px-6 md:px-16 lg:px-24 text-white gap-8 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold leading-tight font-[sofia]">
          CONTACT US
        </h1>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full max-w-4xl bg-white/30">
          {/* Contacts */}
          <div className="group text-center text-white">
            <h3 className="text-lg md:text-xl font-bold mb-4 font-[sofia]">
              CONTACTS
            </h3>
            <div className=" leading-relaxed">
              <p>email@example.com</p>
              <p>880123456789</p>
            </div>
          </div>

          {/* Address */}
          <div className="group text-center text-white">
            <h3 className="text-lg md:text-xl font-bold mb-4 font-[sofia]">
              ADDRESS
            </h3>
            <div className=" leading-relaxed">
              <p>123 Your Street Name</p>
              <p>City Name, Country, Post Code</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-16 h-1 bg-white/80 mt-8" />
      </div>
    </main>
  );
}