'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const normalizedPath = (pathname || "").toLowerCase();
  const [menuOpen, setMenuOpen] = useState(false);

  const baseBtn =
    "text-white font-medium px-3 py-2 rounded-full transition-all duration-200 shadow-md text-base whitespace-nowrap";

  const activeBtn = "bg-[#FF40EB] shadow-pink-500/50";
  const inactiveBtn = "hover:text-[#FF40EB] hover:shadow-pink-500/50";

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about-us" },
    { label: "Courses", href: "/courses" },
    { label: "Blogs", href: "/blog" },
    { label: "Contact", href: "/contact-us" },
  ];

  return (
    <header className="relative">

      {/* LOGO */}
      <div className="fixed -top-8 left-20 z-50 hidden lg:block">
        <Link href="/">
          <img
            src="/Nigapepic/nigape.svg"
            alt="Nigape Logo"
            className="h-[150px] w-auto"
          />
        </Link>
      </div>

      {/* NAVBAR */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-40
        bg-black/20 backdrop-blur-lg rounded-full border border-white/20
        shadow-xl px-6 py-2 w-[88%] max-w-3xl">

        <div className="flex items-center justify-between">

          {/* LOGO — mobile only */}
          <div className="sm:hidden flex items-center">
            <img
              src="/Nigapepic/nigape.svg"
              alt="Nigape Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden sm:flex items-center justify-between w-full">

            <Link
              href="/"
              className={`${baseBtn} ${pathname === '/' ? activeBtn : inactiveBtn}`}
            >
              Home
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/about-us"
                className={`${baseBtn} ${normalizedPath === '/about-us' ? activeBtn : inactiveBtn}`}
              >
                About
              </Link>
              <Link
                href="/courses"
                className={`${baseBtn} ${normalizedPath === '/courses' ? activeBtn : inactiveBtn}`}
              >
                Courses
              </Link>
              <Link
                href="/blog"
                className={`${baseBtn} ${normalizedPath.startsWith('/blog') ? activeBtn : inactiveBtn}`}
              >
                Blogs
              </Link>
              <Link
                href="/contact-us"
                className={`${baseBtn} ${normalizedPath === '/contact-us' ? activeBtn : inactiveBtn}`}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* HAMBURGER BUTTON — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="sm:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-[2px] w-6 bg-white rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>

        </div>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`fixed top-[72px] left-1/2 -translate-x-1/2 z-30 w-[88%] max-w-3xl
          bg-black/80 backdrop-blur-lg border border-white/20 rounded-2xl
          overflow-hidden transition-all duration-300 sm:hidden
          ${menuOpen ? "max-h-[300px] opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}
      >
        <div className="flex flex-col items-start gap-1 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`w-full text-white font-medium px-4 py-3 rounded-xl transition-all duration-200 text-sm
                ${normalizedPath === link.href.toLowerCase()
                  ? "bg-[#FF40EB] text-white"
                  : "hover:bg-white/10"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* BACKDROP (closes menu on outside click) */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-20 sm:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

    </header>
  );
}