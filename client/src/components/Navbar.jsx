import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DhanleelaLogo from '../assets/images/dhanleela-logo.png'; // Adjust path if necessary

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center relative z-50">
      {/* Logo/Title - Always visible, links to Home */}
      <Link to="/" className="flex flex-col items-center hover:opacity-80 transition-opacity duration-200">
        <img
          src={DhanleelaLogo}
          alt="Dhanleela Foundation Logo"
          className="h-16 sm:h-20 w-auto" // Adjust height as needed, w-auto maintains aspect ratio
        />
        {/* Added the "DHANLEELA FOUNDATION" text in bold red */}
        <p className="text-red-600 text-lg sm:text-xl font-bold mt-2">
          DHANLEELA FOUNDATION
        </p>
        <p className="text-red-600 text-xs sm:text-sm font-semibold mt-1 tracking-wider">
          "YOUR SMALL HELP, THEIR HAPPINESS"
        </p>
      </Link>

      {/* Hamburger Icon for Mobile - Visible only on small screens */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-700 hover:text-green-700 focus:outline-none focus:text-green-700"
          aria-label="Toggle navigation menu"
        >
          <svg className="h-8 w-8 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              // Close icon (X) when menu is open
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414L12 13.414l-4.864 4.864a1 1 0 01-1.414-1.414L10.586 12 5.722 7.136a1 1 0 011.414-1.414L12 10.586l4.864-4.864a1 1 0 011.414 1.414L13.414 12l4.864 4.864z"
              />
            ) : (
              // Hamburger icon when menu is closed
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Primary Navigation Links - Hidden on small, flex on medium and up */}
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-gray-700 hover:text-green-700 text-lg font-medium transition-colors duration-200">
          Home
        </Link>
        <Link to="/about" className="text-gray-700 hover:text-green-700 text-lg font-medium transition-colors duration-200">
          About Us
        </Link>
        <Link to="/contact" className="text-gray-700 hover:text-green-700 text-lg font-medium transition-colors duration-200">
          Contact
        </Link>
        <Link to="/privacy-policy" className="text-gray-700 hover:text-green-700 text-lg font-medium transition-colors duration-200">
          Privacy Policy
        </Link>
        <Link to="/terms" className="text-gray-700 hover:text-green-700 text-lg font-medium transition-colors duration-200">
          Terms & Conditions
        </Link>
        {/* Donate Button - Can be styled differently */}
        <Link
          to="/donate" // Assuming you'll have a /donate page or external link
          className="bg-green-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg"
        >
          Donate
        </Link>
      </div>

      {/* Mobile Menu - Appears when isOpen is true, hidden on medium and up */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
        }`}
      >
        <div className="flex flex-col items-center space-y-4">
          <Link onClick={() => setIsOpen(false)} to="/" className="text-gray-700 hover:text-green-700 text-lg font-medium">Home</Link>
          <Link onClick={() => setIsOpen(false)} to="/about" className="text-gray-700 hover:text-green-700 text-lg font-medium">About Us</Link>
          <Link onClick={() => setIsOpen(false)} to="/contact" className="text-gray-700 hover:text-green-700 text-lg font-medium">Contact</Link>
          <Link onClick={() => setIsOpen(false)} to="/privacy-policy" className="text-gray-700 hover:text-green-700 text-lg font-medium">Privacy Policy</Link>
          <Link onClick={() => setIsOpen(false)} to="/terms" className="text-gray-700 hover:text-green-700 text-lg font-medium">Terms & Conditions</Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/donate"
            className="bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors duration-200 shadow-lg mt-2"
          >
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
}