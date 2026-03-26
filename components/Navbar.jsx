"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ProjectOpen, setProjectOpen] = useState(false);
  const [mobileProjectOpen, setMobileProjectOpen] = useState(false);

  const pathname = usePathname();

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full fixed z-50 bg-transparent  shadow-xl h-20 flex items-center px-6">
      <div className="flex items-center justify-between w-full">

        {/* Logo */}
        <Link href="/">
        <h1 className="text-3xl font-bold tracking-wider">
        <Link href="/" className="hover:text-gray-600 font-[sofia] uppercase transition-colors duration-200 text-white">
         Propel
        </Link>
      </h1>
          
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-10 text-lg font-medium  items-center">



          {/* Project Dropdown */}
          <li className="relative">
            <button
              onClick={() => setProjectOpen(!ProjectOpen)}
              className="flex items-center gap-1 px-3 py-2"
            >
              Our Projects
              <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21L10 10.94l3.71-3.71 1.06 1.06-4.24 4.24-4.24-4.24z" />
              </svg>
            </button>

            {ProjectOpen && (
              <div className="absolute left-0 mt-2 w-80 rounded-md border-2 bg-transparent shadow-lg">
                <Link
                  href="/SUNSHINE_BAY_RESIDENCE"
                  onClick={() => setProjectOpen(false)}
                  className={`block px-4 py-2 hover:bg-gray-500 ${
                    pathname === "/SUNSHINE_BAY_RESIDENCE" ? "underline underline-offset-4" : ""
                  }`}
                >
                  SUNSHINE BAY RESIDENCE
                </Link>

                <Link
                  href="/BRIDGEWATER_JOY_RESIDANCE"
                  onClick={() => setProjectOpen(false)}
                  className={`block px-4 py-2 hover:bg-gray-500 ${
                    pathname === "/BRIDGEWATER_JOY_RESIDANCE" ? "underline underline-offset-4" : ""
                  }`}
                >
                  BRIDGEWATER JOY RESIDENCE
                </Link>

                <Link
                  href="/PLEASANTVIEW_GEM_INN"
                  onClick={() => setProjectOpen(false)}
                  className={`block px-4 py-2 hover:bg-gray-500 ${
                    pathname === "/PLEASANTVIEW_GEM_INN" ? "underline underline-offset-4" : ""
                  }`}
                >
                  PLEASANTVIEW GEM INN
                </Link>
              </div>
            )}
          </li>

          {/* Other Links */}
          
          <Link href="/knowUs">
            <li className={`cursor-pointer hover:text-blue-600 ${
              pathname === "/knowUs" ? "underline underline-offset-4" : ""
            }`}>
          About Us
          </li>
        </Link>
        
          <Link href="/contact">
            <li className={`cursor-pointer hover:text-blue-600 ${
              pathname === "/contact" ? "underline underline-offset-4" : ""
            }`}>
              Contact
            </li>
          </Link>
        </ul>





        {/* Mobile Hamburger Icon */}
        <div className="sm:hidden">
          <AiOutlineMenu
            onClick={handleMenu}
            className="text-2xl cursor-pointer text-white"
          />
        </div>
      </div>

      {/* Mobile Menu */}
<div
  className={
    menuOpen
      ? "fixed left-0 top-0 w-[65%] h-screen bg-white ease-in duration-500 flex flex-col z-50"
      : "hidden"
  }
>
  <div className="flex justify-end items-center p-6">
    <AiOutlineClose
      onClick={handleMenu}
      className="text-2xl text-black cursor-pointer"
    />
  </div>

  <ul className="flex flex-col justify-center items-start mt-10 gap-6 px-6">
    {/* Project with dropdown */}
    <li className="w-full">
      <button
        onClick={() => setMobileProjectOpen(!mobileProjectOpen)}
        className="flex justify-between items-center w-full text-xl text-black"
      >
        Our Projects
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.23 7.21L10 10.94l3.71-3.71 1.06 1.06-4.24 4.24-4.24-4.24z" />
              </svg>
        {/* <span>{mobileProjectOpen ? "▲" : "▼"}</span> */}
      </button>
      {mobileProjectOpen && (
        <div className="mt-2 flex flex-col  rounded-md shadow-lg">
          <Link
            href="/SUNSHINE_BAY_RESIDENCE"
            onClick={handleMenu}
            className={`px-4 py-2 text-black hover:text-black hover:underline hover:bg-amber-100 ${
              pathname === "/SUNSHINE_BAY_RESIDENCE" ? "" : ""
            }`}
          >
            SUNSHINE BAY RESIDENCE
          </Link>
          <Link
            href="/bridgrwater_joy_residance"
            onClick={handleMenu}
            className={`px-4 py-2 text-black hover:text-black hover:underline hover:bg-amber-100 ${
              pathname === "/bridgrwater_joy_residance" ? "underline underline-offset-4" : ""
            }`}
          >
            BRIDGEWATER JOY RESIDENCE
          </Link>
          
          <Link
            href="/PLEASANTVIEW_GEM_INN"
            onClick={handleMenu}
            className={`px-4 py-2 text-black hover:text-black hover:underline hover:bg-amber-100 ${
              pathname === "/PLEASANTVIEW_GEM_INN" ? "underline underline-offset-4" : ""
            }`}
          >
            PLEASANTVIEW GEM INN
          </Link>
        </div>
      )}
    </li>

    
    <Link href="/knowUs" onClick={handleMenu}>
      <li className="text-xl text-black hover:underline">About</li>
    </Link>
    <Link href="/contact" onClick={handleMenu}>
      <li className="text-xl text-black hover:underline">Contact</li>
    </Link>
    
  </ul>
</div>



    </nav>
  )
;
};

export default Navbar;