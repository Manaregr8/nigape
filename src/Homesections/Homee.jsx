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

      {/* ================= BACKGROUND ================= */}
      <Image
        src="/.jpg"
        alt="AI Background"
        fill
        priority
        className="object-cover object-left object-top scale-110 brightness-110 contrast-125"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-l from-black/100 " />

      {/* AI Glow */}
      <div className="absolute right-[5%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-purple-500/35 blur-[140px]" />
      <div className="absolute right-[15%] top-[35%] h-[280px] w-[280px] rounded-full bg-cyan-400/25 blur-[120px]" />

      {/* AI Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px] opacity-20" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 min-h-screen flex flex-col">

        {/* ================= NAVBAR ================= */}
        <nav className="mx-auto mt-6 w-full max-w-2xl px-4">
          <div className="flex items-center justify-between rounded-full bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 shadow-xl">
            <a
              href="/"
              className="flex items-center gap-2 rounded-full px-5 py-2 text-white font-semibold bg-[#7d3c4d]"
            >
              <Home className="h-5 w-5" />
              <span>Home</span>
            </a>

            <div className="flex items-center gap-5">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white hover:scale-110 transition"
                >
                  <item.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </nav>

        {/* ================= HERO ================= */}
        <section className="flex-1 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-4 grid lg:grid-cols-2 items-center">

            {/* EMPTY LEFT SPACE */}
            <div className="hidden lg:block" />

            {/* ===== RIGHT SIDE TEXT ===== */}
            <div
              className="
    space-y-6
    text-center
    lg:text-right
    max-w-2xl
    ml-auto
  "
            >
              {/* Heading */}
              <h1
                className="
      font-extrabold
      tracking-tight
      leading-tight

      text-3xl
      sm:text-4xl
      md:text-5xl
      lg:text-[3.2rem]
      xl:text-[3.6rem]

      bg-gradient-to-l
      from-cyan-300
      via-purple-400
      to-pink-400
      bg-clip-text
      text-transparent
    "
              >
                Unlock Your AI Career <br />
                with India’s First <br />
                <span className="text-white block mt-2">
                  Premium Generative AI Institute
                </span>
              </h1>

              {/* Description */}
              <p
                className="
      text-sm
      sm:text-base
      lg:text-lg
      text-white/80
      leading-relaxed
      max-w-xl
      mx-auto
      lg:ml-auto
    "
              >
                Master Generative AI & Prompt Engineering with real-world projects,
                expert mentorship and a job-ready portfolio built for tomorrow’s roles.
              </p>

              {/* Feature Cards */}
              <div
                className="
      grid
      sm:grid-cols-2
      gap-4
      max-w-xl
      mx-auto
      lg:ml-auto
      pt-2
    "
              >
                <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4">
                  <p className="font-semibold text-white text-sm">
                    Industry-Driven Curriculum
                  </p>
                  <p className="text-xs text-white/70 mt-1">
                    Built to close India’s AI talent gap
                  </p>
                </div>

                <div className="rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-4">
                  <p className="font-semibold text-white text-sm">
                    Future-Focused Learning
                  </p>
                  <p className="text-xs text-white/70 mt-1">
                    Join 3.6M+ GenAI learners
                  </p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className="
      flex
      flex-col
      sm:flex-row
      justify-center
      lg:justify-end
      gap-4
      pt-4
    "
              >
                <button className="rounded-full bg-white px-8 py-3 font-bold text-gray-900 hover:scale-105 transition">
                  Join NIGAPE Now
                </button>

                <button className="rounded-full border border-white/60 px-8 py-3 font-bold text-white hover:bg-white/10 transition">
                  Talk to a Counselor
                </button>
              </div>
            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
