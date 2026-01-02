"use client";
import { useState } from "react";

export default function Accordion({ modules }) {
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <div className="space-y-6">
      {modules.map((mod, i) => {
        const isOpen = openIdx === i;
        return (
          <div
            key={i}
            className={`relative rounded-2xl border border-transparent bg-gradient-to-br from-black/80 via-black/60 to-[#FF40EB]/10 backdrop-blur-md transition-shadow duration-300 ${isOpen ? "shadow-2xl shadow-[#FF40EB]/30 border-[#FF40EB]" : "hover:shadow-lg hover:shadow-[#FF40EB]/20 border-[#FF40EB]/40"}`}
            style={{
              boxShadow: isOpen ? "0 4px 32px 0 #FF40EB33" : undefined,
            }}
          >
            <button
              className="w-full flex items-center justify-between px-8 py-6 focus:outline-none group"
              onClick={() => setOpenIdx(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`module-panel-${i}`}
            >
              <div className="flex items-center gap-5">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#FF40EB] to-pink-400 text-white font-bold text-lg border-2 border-[#FF40EB]/60 shadow-md">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-left">
                  <span className="block text-xl font-semibold text-white tracking-tight">
                    Month {mod.month}: {mod.title}
                  </span>
                  <span className="block text-sm text-gray-300 mt-1 font-mono">{mod.hours} hrs</span>
                </span>
              </div>
              <span className={`ml-4 flex items-center transition-transform duration-300 ${isOpen ? "rotate-90 text-[#FF40EB]" : "text-gray-400 group-hover:text-[#FF40EB]"}`}>
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </span>
            </button>
            <div
              id={`module-panel-${i}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 py-4 px-10" : "max-h-0 py-0 px-10"}`}
              style={{
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? 'auto' : 'none',
                background: isOpen ? "linear-gradient(90deg, #FF40EB22 0%, #000 100%)" : undefined,
                borderRadius: "1rem",
              }}
            >
              <ul className="text-base text-white space-y-2">
                {mod.topics.map((topic, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="text-[#FF40EB] mt-1 font-bold">•</span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
