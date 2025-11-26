'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const navItems = [
  //   { name: 'About', href: 'About' },
  //   { name: 'Roadmap', href: '#roadmap' },
  //   { name: 'Tokenomics', href: '#tokenomics' },
  //   { name: 'Team', href: '#team' },
  //   { name: 'Partners', href: '#partners' }
  // ];

  return (
    <nav>
      {/* <div className="max-w-7xl mx-auto px-6 py-4"> */}
        {/* <div className="flex items-center justify-between"> */}
          {/* Logo */}
          {/* <a href="/" className="text-2xl font-bold">
            <span className="text-red-400">AIC</span>
            <span className="text-gray-900">ompanions</span>
          </a> */}

          {/* Desktop Navigation */}
          {/* <div className="hidden md:flex  items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-black hover:text-red-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div> */}

          {/* Buy AIC Button */}
          {/* <div className="hidden md:block"> */}
            {/* <button className="bg-linear-to-r from-pink-300 to-pink-200 hover:from-pink-400 hover:to-pink-300 text-gray-800 font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
              Buy AIC
            </button> */}
          {/* </div> */}
                
          {/* Mobile menu button */}
          {/* <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div> */}

        {/* Mobile Navigation */}
        {/* {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-red-400 transition-colors duration-200 font-medium px-2 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button className="bg-linear-to-r from-pink-300 to-pink-200 hover:from-pink-400 hover:to-pink-300 text-gray-800 font-semibold px-6 py-2.5 rounded-full transition-all duration-300 shadow-md mt-2">
                Buy AIC
              </button>
            </div>
          </div>
        )}
      </div> */}
    </nav>
  );
}

//  className="fixed top-3 left-3 right-3 z-50 bg-linear-to-b from-white/20 to-white/20 backdrop-blur-1 rounded-full border-2 border-white