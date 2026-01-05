'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full relative">
      
      {/* LOGO – LEFT CORNER (OUTSIDE NAVBAR) */}
      <div className="fixed -top-8 left-20 z-50 hidden lg:block">
        <img
          src="/Nigapepic/nigape.svg"
          alt="Nigape Logo"
          className="h-[150px] w-auto"
        />
      </div>


      {/* NAVBAR – SAME AS BEFORE */}
      <nav className="fixed top-3 left-1/2 -translate-x-1/2 z-40 bg-black/20 backdrop-blur-lg rounded-full border border-white/20 shadow-lg px-4 py-2 w-[95%] max-w-md sm:max-w-lg md:max-w-xl">
        <div className="flex items-center justify-between gap-4">
          
          {/* Home Button */}
          <Link
            href="/"
            className="bg-[#FF40EB] hover:bg-purple-700 text-white font-medium px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-200 shadow-md hover:shadow-purple-500/50 text-sm sm:text-base whitespace-nowrap"
          >
            Home
          </Link>

          {/* Icons */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
            
            {/* About */}
            <Link href="/About" className="text-white hover:text-gray-300 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </Link>

            {/* Contact */}
            <Link href="/Contactus" className="text-white hover:text-gray-300 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Courses */}
            <Link href="/Courses" className="text-white hover:text-gray-300 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </Link>

          </div>
        </div>
      </nav>
    </header>
  );
}
