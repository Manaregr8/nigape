'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const normalizedPath = (pathname || "").toLowerCase();

  const baseBtn =
    "text-white font-medium px-3 py-2 rounded-full transition-all duration-200 shadow-md text-base whitespace-nowrap";

  const activeBtn = "bg-[#FF40EB] shadow-pink-500/50";
  const inactiveBtn = " hover:text-[#FF40EB] hover:shadow-pink-500/50";

  return (
    <header className="relative">

      {/* LOGO */}
      <div className="fixed -top-8 left-20 z-50 hidden lg:block">
        <img
          src="/Nigapepic/nigape.svg"
          alt="Nigape Logo"
          className="h-[150px] w-auto"
        />
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40
        bg-black/20 backdrop-blur-lg rounded-full border border-white/20
        shadow-xl px-8 py-2 w-[88%] max-w-3xl">

        <div className="flex items-center justify-between">

          {/* LEFT SIDE – HOME */}
          <Link
            href="/"
            className={`${baseBtn} ${pathname === '/' ? activeBtn : inactiveBtn}`}
          >
            Home
          </Link>

          {/* RIGHT SIDE – ABOUT | COURSES | CONTACT */}
          <div className="flex items-center gap-4">
            <Link
            className={ `hidden sm:inline-block ${baseBtn} ${normalizedPath === '/about' ? activeBtn : inactiveBtn}`}
              href="/About"
              
            >
              About
            </Link>

            <Link
              href="/courses"
              className={` ${baseBtn}  ${normalizedPath === '/courses' ? activeBtn : inactiveBtn}`}
            >
              Courses
            </Link>

            <Link
              href="/contact-us"
              className={` ${baseBtn}  ${normalizedPath === '/contact-us' ? activeBtn : inactiveBtn}`}
            >
              Contact
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
}
