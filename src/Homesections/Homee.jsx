// app/page.jsx

import { Home, Info, Contact, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Homee() {
  const navItems = [
    { name: "About", icon: Info, href: "/About" },
    { name: "Contact", icon: Contact, href: "/Contactus" },
    { name: "Courses", icon: BookOpen, href: "/Courses" },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* Background Image */}
      <Image
        src="/backfinal.jpg"
        alt="AI Institute Background"
        fill
        priority
        className="object-cover object-center sm:object-bottom"
        quality={100}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex min-h-screen flex-col items-center px-4 sm:px-6 lg:px-8">

        {/* ================= NAVBAR ================= */}
        <nav className="mt-5 w-full max-w-6xl">
          <div className="flex items-center justify-between rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-2 sm:px-6 sm:py-3 shadow-xl">

            {/* Home */}
            <a
              href="/"
              className="flex items-center gap-2 rounded-full px-4 py-2 text-white font-semibold transition hover:scale-105"
              style={{ backgroundColor: "rgb(125, 60, 77)" }}
            >
              <Home className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Home</span>
            </a>

            {/* Nav Icons */}
            <div className="flex items-center gap-3 sm:gap-5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  title={item.name}
                  className="relative p-2 text-white transition hover:scale-110"
                >
                  <span className="absolute inset-0 rounded-full bg-white/0 hover:bg-white/20 transition" />
                  <item.icon className="relative h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* ================= HERO ================= */}
     <section className="min-h-[85vh] flex flex-col items-center justify-center text-center px-4">

  {/* Gradient Heading */}
  <h1
    className="
      max-w-4xl
      text-3xl
      sm:text-4xl
      md:text-5xl
      lg:text-6xl
      font-extrabold
      leading-tight
      bg-gradient-to-r
      from-cyan-300
      via-purple-400
      to-pink-400
      bg-clip-text
      text-transparent
    "
  >
    Unlock Your AI Career with India&apos;s First Premium Generative AI Institute
  </h1>

  {/* Description */}
  <p
    className="
      mt-6
      max-w-2xl
      text-base
      sm:text-lg
      text-white/85
      leading-relaxed
    "
  >
    Get hands-on Generative AI and Prompt Engineering skills through
    industry-driven projects — graduate with the portfolio, confidence
    and connections employers demand.
  </p>

  {/* Feature Pills */}
  <div className="mt-8 space-y-4 w-full max-w-2xl">
    <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm sm:text-base text-white/90">
      <span className="font-semibold text-white">Industry-driven:</span>{" "}
      Curriculum built to bridge India’s 1M+ AI talent gap
    </div>

    <div className="rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-sm sm:text-base text-white/90">
      <span className="font-semibold text-white">Future-focused:</span>{" "}
      Join India’s GenAI wave — 3.6M learners already upskilling
    </div>
  </div>

  {/* CTA Buttons */}
  <div className="mt-10 flex flex-col sm:flex-row gap-4">
    <button className="
      rounded-full
      bg-white
      px-8 py-4
      text-base sm:text-lg
      font-bold
      text-gray-900
      transition
      hover:scale-105
    ">
      Join NIGAPE Now
    </button>

    <button className="
      rounded-full
      border border-white/60
      px-8 py-4
      text-base sm:text-lg
      font-bold
      text-white
      transition
      hover:bg-white/10
    ">
      Talk to a Counselor
    </button>
  </div>

</section>


      </div>
    </div>
  );
}
