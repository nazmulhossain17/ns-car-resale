import React, { useState } from 'react';
import logo from '../../../../assets/logos.png'
import ferrari from '../../../../assets/slider_1.png'

const Navbar = () => {
   
        const [showSidebar, setShowSidebar] = useState(false);

          const toggleSidebar = () => setShowSidebar(!showSidebar);
        
          return (
            <header className="bg-white shadow-lg">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-20">
      <div className="flex-shrink-4">
        <img className="h-20 w-auto" src={logo} alt="Logo" />
      </div>
      <div className="hidden md:block">
        <div className="ml-10 flex items-baseline space-x-4">
          <a
            href="#"
            className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium"
          >
            Home
          </a>

          <a
            href="#"
            className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium"
          >
            About
          </a>

          <a
            href="#"
            className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium"
          >
            Why Choose Us
          </a>

          <a
            href="#"
            className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium"
          >
            Testimonial
          </a>

          <a
            href="#"
            className="text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-xl font-medium"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="flex items-center">
        <button className="text-gray-800 hover:text-gray-900 px-5 py-2  text-xl font-medium bg-green-600 rounded-full">
          Sign In
        </button>
        <div className="-mr-2 flex md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            onClick={toggleSidebar}
          >
            <span className="sr-only">Open main menu</span>
            {showSidebar ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  </div>
</header>

        )

   }


export default Navbar;