"use client";

import Image from "next/image";

export default function TeamSectionOptimized() {
  const team = [
    { name: "Alex Rivera", role: "CEO & Founder", img: "/robot.jpg" },
    { name: "Sarah Chen", role: "CTO - AI Lead", img: "/team2.png" },
    { name: "Marcus Johnson", role: "Blockchain Architect", img: "/team3.png" },
    { name: "Emma Liu", role: "Head of Design", img: "/team4.png" },
    { name: "David Kim", role: "Strategy Director", img: "/team5.png" },
    { name: "Luna Voss", role: "AI Ethics Officer", img: "/team6.png" },
    { name: "Kai Zen", role: "Lead Developer", img: "/team7.png" },
    { name: "Nova Rex", role: "Community Lead", img: "/team8.png" },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-pink-800">
      
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/g.jpg"
          alt="Team Background"
          fill
          className="object-cover opacity-30"
          quality={80}
        />
        {/* Dark Purple-Pink Overlay */}
        <div className="absolute inset-0 team-bg-gradient" />
      </div>

      {/* Scanlines Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-scanlines" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black">
            <span className="team-title-gradient">Team & Advisors</span>
          </h2>
          <p className="text-gray-400 mt-6 text-lg md:text-xl tracking-wider">
            Elite minds shaping the future of AI companionship
          </p>
        </div>

        {/* Infinite Smooth Carousel */}
        <div className="overflow-hidden ">
          <div className="flex animate-scroll mx-10 gap-10">
            {/* First Set */}
            {team.map((member, i) => (
              <div key={`a-${i}`} className="flex-none w-80 group">
                <div className="team-card-glow relative rounded-3xl p-1 transition-all duration-500 group-hover:scale-105">
                  <div className="relative rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-purple-500/40">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Glitch Hover Overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen pointer-events-none">
                      <div className="absolute inset-0 glitch-overlay" />
                    </div>

                    {/* Name & Role */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                        {member.name}
                      </h3>
                      <p className="text-cyan-400 text-sm md:text-base font-medium uppercase tracking-widest mt-2">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Duplicate Set for Infinite Loop */}
            {team.map((member, i) => (
              <div key={`b-${i}`} className="flex-none w-80 group" aria-hidden="true">
                <div className="team-card-glow relative rounded-3xl p-1 transition-all duration-500 group-hover:scale-105">
                  <div className="relative rounded-3xl overflow-hidden bg-black/40 backdrop-blur-xl border border-purple-500/40">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={400}
                      height={500}
                      className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-screen pointer-events-none">
                      <div className="absolute inset-0 glitch-overlay" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
                      <h3 className="text-2xl md:text-3xl font-bold text-white tracking-wide">
                        {member.name}
                      </h3>
                      <p className="text-cyan-400 text-sm md:text-base font-medium uppercase tracking-widest mt-2">
                        {member.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-20 max-w-4xl mx-auto">
          <p className="text-gray-300 text-lg leading-relaxed">
            Our diverse team combines expertise in artificial intelligence, blockchain, design, and ethics 
            to build the most advanced and emotionally intelligent AI companions on the planet.
          </p>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}