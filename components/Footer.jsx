import React from "react";
import Image from "next/image";

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <main className="  bg-amber-100 text-gray-800">

    <section className="bg-cyan-950 text-white py-16 px-6 lg:px-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left side - Text */}
        <div className="space-y-12 py-20">
          <h2 className="text-5xl font-bold font-[sofia]">CONTACT <br /> US</h2>
          <p className="text-lg leading-relaxed pr-40">
            If you’re interested in hearing more about the way we work, have a business proposal, or are interested in making a purchase, we’d love to hear from you.
          </p>
          {/* <h2 className="text-4xl font-bold">CONTACTS</h2> */}
          <div className="space-y-3">
          {/* <p>email@example.com</p> */}
          {/* <p>880123456789</p> */}
          
        </div>
        </div>

        {/* Right side - Form */}
        <form className="space-y-6 p-8 rounded-lg">
          <div>
            <label htmlFor="name" className="block mb-2 font-semibold">
              Name<span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded border bg-amber-100 border-gray-300 text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="lastname" className="block mb-2 font-semibold">
              Last name
            </label>
            <input
              type="text"
              id="lastname"
              placeholder="Your last name"
              className="w-full px-4 py-2 rounded border bg-amber-100 border-gray-300 text-black"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-semibold">
              Your email<span className="text-red-400">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 rounded border bg-amber-100 border-gray-300 text-black"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-semibold">
              Message<span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows={4}
              className="w-full px-4 py-2 rounded border bg-amber-100 border-gray-300 text-black"
              required
              ></textarea>
          </div>
            

          <a href="#">
              <button className="px-20 mt-0 mr-0 py-3 uppercase text-white  border-solid border-2 hover:bg-black font-semibold font-[Montserrat]">
                  LEARN MORE
                </button>
          </a>
        </form>
      </div>


        </section>
     {/* SECOND XECTIONS  */}
      <section className="bg-white w-full pt-15">

            

              {/* Three Cards Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                
                {/* Card 2: Quality To Die For */}
                <div className="group">
                  
                  <h3 className="text-5xl font-bold mb-4 ml-10 font-[sofia]">
                    PRESSON
                  </h3>
                  
                </div>
                <div className="group">
                  
                  <h3 className="text-normal font-bold mb-4 ml-10 font-[sofia]">
                    CONTACTS
                  </h3>
                  <div className="text-black leading-relaxed ml-10">
                   <p>email@example.com</p>
                    <p>880123456789</p>

                  </div>
                  
                </div>

                {/* Card 3: Visionaries of The Future */}
                <div className="group">
                  
                  <h3 className="text-normal  font-bold mb-4 font-[sofia]">
                    ADDRESS
                  </h3>
                  <div className="text-black leading-relaxed">
                   <p>123 your street name, </p>
                    <p>City name, Country, post code </p>
                    
                  </div>
                  
                </div>
              </div>

             
            {/* </div> */}






        <footer className="w-full pt-10 text-center text-black pb-10 font-[sofia]">
          <p><b>

            <span className="nowrap">Copyright &copy; {year}</span>{" "}
            <span className="nowrap">PRESSON</span>
          </b>
          </p>
        </footer>
    </section>


</main>
  );
}

