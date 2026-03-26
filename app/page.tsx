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
            "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3')",
          filter: "brightness(0.7)",
        }}
        aria-hidden="true"
      />

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col justify-center items-start h-screen px-6 md:px-16 lg:px-24">
        <p className="text-base sm:text-lg md:text-xl tracking-[0.3em] uppercase mb-2 font-light">
          Time to meet your
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-6 leading-tight font-[sofia]">
          NEW HOME
        </h1>
        <p className="max-w-md md:max-w-lg text-sm sm:text-base md:text-lg font-light leading-relaxed">
          Finding the perfect place to call home can be hard. Our team of
          creatives and specialists makes real estate easy.
        </p>
        <div className="w-16 h-0.5 bg-white/80 mt-8" />
      </div>

      {/* WHAT WE OFFER */}
      <section className="relative w-full min-h-screen bg-transparent text-white">
        <div className="relative z-10 container mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-24">
          <div className="mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[sofia]">
              WHAT WE <span className="text-white">OFFER</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Card 1 */}
            <div className="group">
              <div className="mb-4 overflow-hidden">
                <div className="w-16 h-1 bg-white/40 group-hover:w-24 transition-all duration-700 ease-out" />
              </div>
              <h3 className="font-[sofia] text-xl sm:text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-300 transition-colors duration-700">
                EXPERIENCED <br /> TEAM
              </h3>
              <p className="text-white text-sm sm:text-base leading-relaxed">
                Each of us is a master of our craft — we’ve worked a number of
                years in our field and each have passion and creative vision for
                every project we put our hands on.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group">
              <div className="mb-4 overflow-hidden">
                <div className="w-16 h-1 bg-white/40 group-hover:w-24 transition-all duration-700 ease-out" />
              </div>
              <h3 className="font-[sofia] text-xl sm:text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-300 transition-colors duration-700">
                QUALITY TO <br /> DIE FOR
              </h3>
              <p className="text-white text-sm sm:text-base leading-relaxed">
                We pay a lot of attention to each and every detail, because we
                know that we are in charge of creating somebody’s safe haven. We
                partner up with the best craftsmen to ensure our famed quality.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group">
              <div className="mb-4 overflow-hidden">
                <div className="w-16 h-1 bg-white/40 group-hover:w-24 transition-all duration-700 ease-out" />
              </div>
              <h3 className="font-[sofia] text-xl sm:text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-300 transition-colors duration-700">
                VISIONARIES OF <br /> THE FUTURE
              </h3>
              <p className="text-white text-sm sm:text-base leading-relaxed">
                We’re not scared to go beyond the horizon. As the visionaries of
                tomorrow, we won’t say no to experimentation, unusual materials,
                or unlikely combinations.
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
            <div className="w-20 h-20 border border-white rounded-full flex items-center justify-center">
              <div className="w-12 h-12 border border-white bg-white rounded-full" />
            </div>
          </div>
        </div>
       </section>
    






{/* LATEST PROJECT */}
<section className="relative py-12 sm:py-16 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* Title + Intro */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 pb-10 text-white">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-[sofia] leading-tight">
        LATEST <br className="hidden sm:block" /> PROJECT
      </h2>

      <p className="text-sm sm:text-base md:text-lg max-w-xl leading-relaxed text-white">
        Presson team is constantly striving for perfection. We are lucky to
        work with notable and known clients.
      </p>
    </div>

    {/* Image Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">

      {/* Large Image */}
      <div className="md:col-span-2">
        <div className="relative w-full h-64 sm:h-80 md:h-[400px] lg:h-[500px]">
          <Image
            src="/house-02.jpg"
            alt="Modern house project"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Side Images */}
      <div className="flex flex-col gap-4 sm:gap-6">
        <div className="relative w-full h-40 sm:h-52 md:h-[190px] lg:h-[240px]">
          <Image
            src="/pool-01.jpg"
            alt="Poolside seating"
            fill
            className="rounded-lg object-cover"
          />
        </div>

        <div className="relative w-full h-40 sm:h-52 md:h-[190px] lg:h-[240px]">
          <Image
            src="/interior-07.jpg"
            alt="Interior"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>
    </div>

    {/* Details */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-[sofia]">
          SUNSHINE BAY <br /> RESIDENCE
        </h2>

        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-4">
          $2,000,000
        </h3>
      </div>

      <div>
        <p className="text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
          Equipped with air conditioning, private pool, 3 bedrooms and a spacious living area.
        </p>

        <button className="w-full sm:w-auto px-6 sm:px-10 py-3 uppercase border-2 hover:bg-black transition font-semibold">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>

{/* OTHER PROJECTS */}
<section className= "relative py-12 sm:py-16 px-4 sm:px-6">
  <div className="max-w-6xl mx-auto">

    {/* Title */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-10 items-center">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-[sofia]">
        SEE OUR OTHER PROJECTS
      </h2>

      {/* Circles */}
      <div className="flex justify-center md:justify-end gap-4 sm:gap-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 border border-white rounded-full flex items-center justify-center"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 bg-white rounded-full" />
          </div>
        ))}
      </div>
    </div>

    {/* Projects */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

      <div>
        <div className="relative w-full h-64 sm:h-80 md:h-[400px]">
          <Image
            src="/house-03.jpg"
            alt="Bridgewater"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl text-center mt-4 font-bold uppercase">
          BRIDGEWATER JOY RESIDENCE
        </h3>
      </div>

      <div>
        <div className="relative w-full h-64 sm:h-80 md:h-[400px]">
          <Image
            src="/house-05.jpg"
            alt="Pleasantview"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <h3 className="text-lg sm:text-xl md:text-2xl text-center mt-4 font-bold uppercase">
          PLEASANTVIEW GEM INN
        </h3>
      </div>

    </div>

    {/* Bottom Text */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 items-center">
      <p className="text-sm sm:text-base md:text-lg leading-relaxed">
        Our years of experience makes us the ideal partner for your next project.
      </p>

      <div className="flex md:justify-end">
        <button className="w-full sm:w-auto px-6 sm:px-10 py-3 uppercase border-2 hover:bg-black transition font-semibold">
          Learn More
        </button>
      </div>
    </div>

  </div>
</section>

          {/* CLIENT FEEDBACK */}
<section className="relative w-full text-white py-16 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="mb-12 md:mb-20">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-[sofia]">
        CLIENT FEEDBACK
      </h2>
    </div>

    {/* Feedback Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
      {/* Card 1 */}
      <div className="group">
        <div className="mb-4 overflow-hidden">
          <div className="w-16 h-1 bg-white/40 group-hover:w-24 transition-all duration-700 ease-out" />
        </div>
        <h3 className="font-[sofia] text-xl sm:text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-300 transition-colors duration-700">
          Miriam Hayes
        </h3>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          We have bought and sold a handful of properties in the past with
          various different realtors, but none came close to the service we got
          at Presson’s...
        </p>
      </div>

      {/* Card 2 */}
      <div className="group">
        <div className="mb-4 overflow-hidden">
          <div className="w-16 h-1 bg-white/40 group-hover:w-24 transition-all duration-700 ease-out" />
        </div>
        <h3 className="font-[sofia] text-xl sm:text-2xl md:text-3xl font-bold mb-4 group-hover:text-gray-300 transition-colors duration-700">
          James and Susan Smith
        </h3>
        <p className="text-sm sm:text-base md:text-lg leading-relaxed">
          We had heard a lot of praise for Presson’s team, since many of our
          social circle was already using their services...
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


{/* PARTNERS */}
<section className="relative text-white w-full py-16 px-6">
  <div className="max-w-6xl mx-auto">
    {/* Title + Intro */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 font-[sofia]">
          PARTNERS
        </h2>
        <p className="text-sm sm:text-base md:text-lg max-w-xl">
          To bring our vision into reality, we need the best partners out there.
          We’ve joined hands with one of the best when it comes to materials,
          lighting and furniture to achieve sophisticated results.
        </p>
      </div>

      {/* Partner Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-6 px-0">
        <div className="relative overflow-hidden flex justify-center">
          <Image
            src="/partner-06.jpg"
            alt="Partner 06"
            className="w-full h-24 object-contain"
            width={500}
            height={100}
          />
        </div>
        <div className="relative overflow-hidden flex justify-center">
          <Image
            src="/partner-05.jpg"
            alt="Partner 05"
            className="w-full h-24 object-contain"
            width={500}
            height={100}
          />
        </div>
        <div className="relative overflow-hidden flex justify-center">
          <Image
            src="/partner-03.jpg"
            alt="Partner 03"
            className="w-full h-24 object-contain"
            width={400}
            height={100}
          />
        </div>
        <div className="relative overflow-hidden flex justify-center">
          <Image
            src="/partner-02.jpg"
            alt="Partner 02"
            className="w-full h-24 object-contain"
            width={400}
            height={100}
          />
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}