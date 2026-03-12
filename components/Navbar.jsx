"use client";

import Link from "next/link";
// import { useState } from "react";

export default function Navbar() {
  // const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 md:px-16 lg:px-24 py-8 text-white z-50">
      
      {/* Logo */}
      <h1 className="text-3xl font-bold tracking-wider">
        <Link href="/" className="hover:text-gray-300 transition-colors duration-200">
          PRESSON
        </Link>
      </h1>

      {/* Navigation */}
      {/* <nav className="flex items-center space-x-8 text-sm tracking-wide"> */}

        <nav class=" right-0 text-balance top-0 z-50 flex items-center space-x-8 tracking-wide bg-transperant p-4 transition-colors bg-none duration-300">
        <Link
          href="/knowUs"
          className="hover:text-gray-300  focus:outline-black active:drop-shadow-mauve-950 transition-colors duration-200"
        >
          About Us
        </Link>

        {/* Services Dropdown */}

  <ul class="flex space-x-4">
    <li class="group relative">
      <a href="#" className="rounded-md px-3 py-2 text-white "> Projects </a>

      <div class="absolute z-50 hidden pt-2 group-hover:flex">
        <div class="w-80 rounded-md border border-gray-200 bg-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
          <a href="/SUNSHINE_BAY_RESIDENCE" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">SUNSHINE BAY RESIDENCE </a>
          <a href="/bridgewater_joy_residance" class="block px-4 py-2 text-gray-800 hover:bg-gray-100"> BRIDGEWATER JOY RESIDENCE </a>
          <a href="/PLEASANTVIEW_GEM_INN" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">PLEASANTVIEW GEM INN </a>
        </div>
      </div>
    </li>
  </ul>
      

        <Link
          href="/contact"
          className="hover:text-gray-300  transition-colors duration-200"
          >
          Contact
        </Link>
          </nav>
      {/* </nav> */}
    </header>
  );
}