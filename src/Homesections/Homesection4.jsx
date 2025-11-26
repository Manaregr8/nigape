// components/RoadmapSection.jsx (ya jahan bhi hai)
import Image from "next/image";

export default function RoadmapSection() {
  const phases = [
    {
      phase: "Phase 1",
      time: "Q4 2024 – Q1 2025",
      title: "Foundation & Launch",
      desc: "Whitepaper Release — Website Launch — Token Launch — CMC, CG, Blockfolio, & Delta Listing — Techrate & Certik Audits — 1st Global Exchange Partnership Listing",
    },
    {
      phase: "Phase 2",
      time: "Q1 2025 – Q2 2025",
      title: "Companion Features & Growth",
      desc: "Launch customizable companion features and celebrity models, alongside community building, exchange listings, partnerships, and further marketing campaigns.",
    },
    {
      phase: "Phase 3",
      time: "Q2 2025 – Q3 2025",
      title: "Gamification & Collectibles",
      desc: "Expanding user-generated platforms, introducing gamification and play-to-earn mechanisms, and enhancing digital collectible integrations.",
    },
    {
      phase: "Phase 4",
      time: "Q3 2025 Onwards",
      title: "AI + Smart Home Integration",
      desc: "AI-driven personalization, integrate smart home devices and wearable tech, and expand the platform's reach both culturally and geographically.",
    },
  ];

  return (
    <section className="relative py-16 md:py-32 overflow-hidden ">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/g.png"
          alt="Background"
          fill
          className="object-cover object-center"
          quality={100}
          priority
          unoptimized
        />
        {/* <div className="absolute inset-0 bg-black/70" />  */}
      </div>

      {/* Scanlines Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-scanlines" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Title */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-center mb-20">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Roadmap
          </span>
        </h2>

        <div className="relative">
          {/* NEON CENTER LINE - Desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full neon-line-vertical rounded-full" aria-hidden="true" />

          {phases.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div key={index} className="relative mb-20 md:mb-32">
                {/* Desktop Layout */}
                <div className="hidden md:flex items-center justify-center gap-8">
                  {isLeft ? (
                    <>
                      {/* Left Card */}
                      <div className="w-5/12 text-right">
                        <div className="bg-white/5 backdrop-blur-xl border ring-pink-700 border-purple-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-purple-600/60 hover:scale-105 transition-all duration-500 group">
                          <h3 className="text-4xl font-bold text-pink-400 mb-3">{item.phase}</h3>
                          <p className="text-cyan-300 text-lg font-mono mt-2">{item.time}</p>
                          <h4 className="text-2xl font-bold text-white mt-6">{item.title}</h4>
                          <p className="text-gray-300 mt-4 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>

                      {/* Center Dot */}
                      <div className="relative">
                        <div className="absolute inset-0 w-12 h-12 bg-cyan-400 rounded-full animate-ping opacity-75" />
                        <div className="relative w-12 h-12 bg-gradient-to-br from-pink-500 to-cyan-400 rounded-full shadow-2xl ring-4 ring-purple-500/50" />
                      </div>

                      <div className="w-5/12" />
                    </>
                  ) : (
                    <>
                      <div className="w-5/12" />

                      {/* Center Dot */}
                      <div className="relative">
                        <div className="absolute inset-0 w-12 h-12 bg-cyan-400 rounded-full animate-ping opacity-75" />
                        <div className="relative w-12 h-12 bg-gradient-to-br from-pink-500 to-cyan-400 rounded-full shadow-2xl ring-4 ring-purple-500/50" />
                      </div>

                      {/* Right Card */}
                      <div className="w-5/12 text-left">
                        <div className="bg-white/5 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 shadow-2xl hover:shadow-purple-600/60 hover:scale-105 transition-all duration-500 group">
                          <h3 className="text-4xl font-bold text-pink-400 mb-3">{item.phase}</h3>
                          <p className="text-cyan-300 text-lg font-mono mt-2">{item.time}</p>
                          <h4 className="text-2xl font-bold text-white mt-6">{item.title}</h4>
                          <p className="text-gray-300 mt-4 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex items-start gap-6">
                  <div className="shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 w-8 h-8 bg-cyan-400 rounded-full animate-ping opacity-75" />
                      <div className="relative w-8 h-8 bg-gradient-to-br from-pink-500 to-cyan-400 rounded-full shadow-xl ring-2 ring-purple-500" />
                    </div>
                  </div>

                  <div className="flex-1 pb-12">
                    <div className="bg-white/5 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-6 shadow-xl">
                      <h3 className="text-2xl font-bold text-pink-400">{item.phase}</h3>
                      <p className="text-cyan-300 text-sm font-mono mt-1">{item.time}</p>
                      <h4 className="text-xl font-bold text-white mt-4">{item.title}</h4>
                      <p className="text-gray-300 text-sm mt-3 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Neon Line */}
                {index < phases.length - 1 && (
                  <div className="md:hidden absolute left-10 top-20 bottom-0 w-1 neon-line-mobile rounded-full" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}