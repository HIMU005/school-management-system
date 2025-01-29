"use client";
import { useState } from "react";
import { RiMenuFold3Line, RiMenuUnfold3Line } from "react-icons/ri";
import Links from "./Nav/Links";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const links = [
    {
      route: "/",
      title: "Home",
    },
    {
      route: "/about",
      title: "About",
    },
    {
      route: "/faq",
      title: "FAQ",
    },
    {
      route: "/",
      title: "Home",
    },
    {
      route: "/",
      title: "Home",
    },
  ];

  return (
    <div>
      {/* Mobile Navigation - Hidden on medium and large screens */}
      <div className="relative block md:hidden">
        {/* Toggle Button */}
        <button
          className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-2 rounded-md focus:outline-none z-50"
          onClick={() => setIsVisible(!isVisible)}
        >
          {!isVisible ? <RiMenuFold3Line /> : <RiMenuUnfold3Line />}
        </button>

        {/* Navbar with Animation */}
        <div
          className={`transform transition-transform duration-500 ease-in-out ${
            isVisible ? "translate-x-0" : "-translate-x-full"
          } w-[400px] bg-white shadow-md flex flex-col items-center p-4 fixed top-0 left-0`}
        >
          {/* Top Icon */}
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            <span className="text-gray-700 font-bold">I</span>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col justify-between w-full px-4">
            {links.map((link) => (
              <Links link={link} />
            ))}

            {/* <a href="#" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Contact
            </a> */}
          </div>
        </div>
      </div>

      {/* Desktop Navigation - Only visible on medium and large screens */}
      <nav className="hidden md:flex items-center justify-between px-4 py-2 bg-white shadow-md sticky top-0 z-50">
        {/* Left Icon */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-gray-700 font-bold">I</span>
          </div>
        </div>

        {/* Middle Navigation */}
        <div className="md:flex space-x-6">
          .
          {links.map((link) => (
            <Links link={link} />
          ))}
          {/* <a href="#" className="text-gray-700 hover:text-blue-500">
            Home
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            About
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Services
          </a>
          <a href="#" className="text-gray-700 hover:text-blue-500">
            Contact
          </a> */}
        </div>

        {/* Right Circle */}
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          U
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
