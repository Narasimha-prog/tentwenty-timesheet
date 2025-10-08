import React, { useState } from "react";

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   // Example username (replace with dynamic data)
  const username = "JohnDoe";
  return (
    <nav className="font-inter w-full flex items-center  px-4 py-3 opacity-100 bg-white shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold font-inter">
        ticktock
      </h1>

      {/* Navigation Links */}
      <ul className="flex gap-8  mx-4"> {/* gap-8 = 32px */}
        <li>
          <a href="#home" className="hover:text-blue-500 transition-colors duration-200">
            TimeSheets
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-blue-500 transition-colors duration-200">
            
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-blue-500 transition-colors duration-200">
            
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-500 transition-colors duration-200">
            
          </a>
        </li>
      </ul>

      {/* CTA Button */}
       {/* CTA Dropdown */}
      <div className="relative ml-auto">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className=" text-grey-500 px-4 py-2 rounded transition-colors duration-200 flex "
        >
          {username}
           <svg
            className={`w-4 h-4 ml-2 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-50">
            <a href="#option1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Option 1
            </a>
            <a href="#option2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Option 2
            </a>
            <a href="#option3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
              Option 3
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

