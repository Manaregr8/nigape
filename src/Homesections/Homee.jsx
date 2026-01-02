// app/page.jsx
"use client";
import { Home, Info, Contact, BookOpen } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Iridescence from "@/Homesections/bits/Iridescence.js";

// Load Playfair Display with variable weights (includes Black 900)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Include 900 for Black
  variable: "--font-playfair",
  display: "swap",
});

export default function Homee() {
  return (
    <div
      className={`relative min-h-screen w-full overflow-hidden text-white bg-black ${playfair.variable}`}
    >
      {/* ===== LIGHT PILLAR BACKGROUND ===== */}
      <div className="absolute inset-0 z-0">
        {/* <LightPillar
          topColor="#8b5df5"
          bottomColor="#8b5df5"
          intensity={1.0}
          rotationSpeed={1.0} // slightly lower
          glowAmount={0.003} // reduced
          pillarWidth={2.5} // slightly narrower
          pillarHeight={0.5}
          noiseIntensity={0.0} // disabled
          pillarRotation={6}
          interactive={false}
          mixBlendMode="normal"
          className="w-full h-full"
        /> */}

        {/* ===== IRIDESCENT BACKGROUND ===== */}
        <div className="absolute inset-0 z-0">
          <Iridescence
            color={[1, 0.25, 0.92]}
            mouseReact={false}
            amplitude={0.03}
            speed={0.7}
            // hueShift={0.18}
            saturation={1.3}
            brightness={1.0}
          />
        </div>
      </div>


      {/* ===== VIGNETTE OVERLAY (TOP + BOTTOM SHADOW) ===== */}
<div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/90 via-transparent to-black/90" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 min-h-screen flex flex-col ">
               {/* HERO */}
        <section className="flex-1  flex items-center">
          <div className="mx-auto pt-5 md:pt-20 w-full max-w-7xl px-4">
            <div className="space-y-10 text-center max-w-8xl mx-auto">
              <h1
                className=" font-black uppercase tracking-tight leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.8rem] drop-shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
                style={{ fontWeight: 700 }} // Explicitly force Black weight
              >
                Unlock Your{" "}
                <span className="text-white drop-shadow-[0_0_35px_rgba(147,51,234,0.7)]">
                  AI
                </span>{" "}
                Career
                <br />
                with India's First
                <br />
                <span className="text-white drop-shadow-[0_0_45px_rgba(147,51,234,0.8)]">
                  Premium Generative AI
                </span>{" "}
                Institute
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
                Master Generative AI & Prompt Engineering with real-world
                projects, expert mentorship and a job-ready portfolio.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-5 pt-6">
                <a href="/Form/form" className="rounded-full bg-[#FF40EB] px-10 py-3 font-bold text-white shadow-[0_0_35px_rgba(147,51,234,0.6)] hover:shadow-[0_0_55px_rgba(147,51,234,0.8)] hover:scale-105 transition flex items-center justify-center">
                  Join NIGAPE Now
                </a>
                <a href="/Form/form" className="rounded-full border-2 border-[#FF40EB] px-10 py-3 font-bold hover:bg-purple-600/15 transition backdrop-blur-sm flex items-center justify-center">
                  Talk to a Counselor
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
