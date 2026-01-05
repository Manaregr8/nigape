// app/page.jsx
"use client";
import { Home, Info, Contact, BookOpen } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Iridescence from "@/Homesections/bits/Iridescence.js";
import { useState } from "react";


// Load Playfair Display with variable weights (includes Black 900)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"], // Include 900 for Black
  variable: "--font-playfair",
  display: "swap",
});

export default function Homee() {
  const [popupOpen, setPopupOpen] = useState(false);
  const openPopup = (e) => {
    e.preventDefault();
    setPopupOpen(true);
  };
  const closePopup = () => setPopupOpen(false);
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


              {/* Delivery Modes
              <div className="flex justify-center gap-4 mt-2 mb-1">
                <span className="inline-block px-4 py-1 rounded-full bg-linear-r  to-black/20 text-black text-xs sm:text-sm font-semibold shadow-md border border-blue-400/60">Online</span>
                <span className="inline-block px-4 py-1 rounded-full bg-linear-r  to-black/20 text-black text-xs sm:text-sm font-semibold shadow-md border border-green-400/60">Offline</span>
              </div> */}
              
              <p className="text-sm sm:text-base lg:text-lg text-white/90 max-w-xl mx-auto leading-relaxed">
                Get hands-on Generative AI and Prompt Engineering skills through industry-driven projects – graduate with the portfolio, confidence and connections employers demand.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-5 pt-6">
                <button
                  onClick={openPopup}
                  className="rounded-full bg-[#FF40EB] px-10 py-3 font-bold text-white shadow-[0_0_35px_rgba(147,51,234,0.6)] hover:shadow-[0_0_55px_rgba(147,51,234,0.8)] hover:scale-105 transition flex items-center justify-center"
                >
                  Join NIGAPE Now
                </button>
                <a href="/Contactus" className="rounded-full border-2 border-[#FF40EB] px-10 py-3 font-bold hover:bg-purple-600/15 transition backdrop-blur-sm flex items-center justify-center">
                  Talk to a Counselor
                </a>
              </div>

            {/* Modal Form Popup */}
            {popupOpen && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={closePopup}>
                <div
                  className="relative bg-black rounded-2xl shadow-2xl w-[95vw] max-w-2xl md:max-w-3xl lg:max-w-4xl flex flex-col md:flex-row landscape-form border border-[#FF40EB]/30"
                  style={{ aspectRatio: '16/7', minHeight: '340px' }}
                  onClick={e => e.stopPropagation()}
                >
                  {/* Close Button */}
                  <button
                    className="absolute top-3 right-3 text-gray-400 hover:text-[#FF40EB] text-2xl font-bold z-10"
                    onClick={closePopup}
                    aria-label="Close"
                  >
                    ×
                  </button>
                  {/* Form Content */}
                  <div className="flex-1 flex flex-col justify-center items-center p-6 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#FF40EB]">Join NIGAPE Now</h2>
                    <form className="w-full max-w-md space-y-5">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        className="w-full px-4 py-3 border border-[#FF40EB]/30 rounded-lg focus:outline-none focus:border-[#FF40EB] bg-black/80 text-white placeholder-gray-400"
                      />
                      <input
                        type="email"
                        placeholder="Your Email"
                        required
                        className="w-full px-4 py-3 border border-[#FF40EB]/30 rounded-lg focus:outline-none focus:border-[#FF40EB] bg-black/80 text-white placeholder-gray-400"
                      />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full px-4 py-3 border border-[#FF40EB]/30 rounded-lg focus:outline-none focus:border-[#FF40EB] bg-black/80 text-white placeholder-gray-400"
                      />
                     
                      <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-[#FF40EB] text-white font-bold text-lg shadow-md hover:bg-[#c026d3] transition"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                  {/* Message Box on the right column, always visible */}
                  <div className="flex-1 flex items-center justify-center p-4 md:p-10 bg-black rounded-b-2xl md:rounded-b-none md:rounded-r-2xl min-h-[180px]">
                    <textarea
                        rows={3}
                        placeholder="Your Message"
                        className="w-full px-4 py-3 h-[220px] border border-[#FF40EB]/30 rounded-lg focus:outline-none focus:border-[#FF40EB] bg-black/80 text-white placeholder-gray-400 resize-none"
                      />
                  </div>
                </div>
              </div>
            )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
