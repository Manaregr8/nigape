import React from 'react';

export default function NigapeGallery() {
  const galleryItems = [
    { id: 1, src: "/Nigapepic/1.webp", alt: "AI Lab with students collaborating" },
    { id: 2, src: "/Nigapepic/2.webp", alt: "Mentor-led workshop session" },
    { id: 3, src: "/Nigapepic/3.webp", alt: "Modern classroom setup" },
    { id: 4, src: "/Nigapepic/4.webp", alt: "Students presenting AI projects" },
    { id: 5, src: "/Nigapepic/5.webp", alt: "Hackathon event" },
    { id: 6, src: "/Nigapepic/6.webp", alt: "Dedicated AI workspace" },
    { id: 7, src: "/Nigapepic/7.webp", alt: "One-on-one mentorship" },
    { id: 8, src: "/Nigapepic/8.webp", alt: "Group coding session" },
    { id: 9, src: "/Nigapepic/9.webp", alt: "AI infrastructure server room" },
  ];

  return (
    <div className="min-h-screen bg-black py-12 sm:py-16 px-4 sm:px-6 font-['Geist', sans-serif]">
      <div className="max-w-[1200px] mx-auto">
        {/* First Row: Bento Grid Layout - Left Large + Right Two Stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
          {/* LEFT: Large Hero Card (spans 2 columns) */}
          <div className="lg:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl border border-[#9234eb]/30 group bg-gradient-to-br from-[#1a1a2e] to-[#16213e] h-[350px] sm:h-[450px] lg:h-[500px]">
            <img
              src={galleryItems[0].src}
              alt={galleryItems[0].alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
           
            {/* Bottom Headline */}
            <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-xl rounded-2xl border border-[#9234eb]/50 shadow-2xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Own a Piece <br />of the Digital Future
              </h2>
            </div>
          </div>

          {/* RIGHT: Two Stacked Cards */}
          <div className="lg:col-span-1 flex flex-col gap-4 sm:gap-5">
            {/* TOP CARD */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#9234eb]/30 group bg-gradient-to-br from-[#1a1a2e] to-[#16213e] h-[200px] sm:h-[220px] lg:h-[245px]">
              <img
                src={galleryItems[1].src}
                alt={galleryItems[1].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Top-right Arrow Button */}
              <div className="absolute top-5 right-5">
                <a href="">
                  <button className="bg-black/80 backdrop-blur-sm text-white text-xl font-bold w-10 h-10 rounded-full shadow-lg hover:bg-black hover:scale-110 transition-all duration-300 flex items-center justify-center border border-white/20">
                    ↗
                  </button>
                </a>
              </div>
            </div>

            {/* BOTTOM CARD */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#9234eb]/30 group bg-gradient-to-br from-[#1a1a2e] to-[#16213e] h-[200px] sm:h-[220px] lg:h-[245px]">
              <img
                src={galleryItems[2].src}
                alt={galleryItems[2].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Bottom-right CTA Button */}
              <div className="absolute top-5 right-5">
                <button className="bg-[#FF40EB] backdrop-blur-sm border-2 border-[#FF40EB] text-black text-xs sm:text-sm font-bold px-4 py-2 rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg">
                 <a href="/About"> About us →</a>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: 3 Equal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 mt-4 sm:mt-5">
          {galleryItems.slice(3, 6).map((item) => (
            <div key={item.id} className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#9234eb]/30 group bg-gradient-to-br from-[#1a1a2e] to-[#16213e] h-[220px] sm:h-[280px]">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

       

        {/* Footer CTAs */}
        <div className="text-center mt-10 sm:mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-transparent border-2 border-[#9234eb] text-white font-bold text-sm sm:text-base hover:bg-[#9234eb]/20 hover:scale-105 transition-all duration-300 shadow-lg">
              Schedule a Campus Tour
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-gradient-to-r from-[#9234eb] to-[#7b2cbf] text-white font-bold text-sm sm:text-base hover:from-[#8a2edc] hover:to-[#6a1fa8] hover:scale-105 transition-all duration-300 shadow-xl">
              Explore Our Programs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}