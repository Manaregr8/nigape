import { Calendar, GraduationCap, Briefcase } from "lucide-react";

const years = [
  {
    title: "Year 1: Foundation + Core Skills",
    points: [
      "Build strong fundamentals in AI, prompt engineering, and workflows.",
      "Hands-on mini projects to turn concepts into practical skills.",
      "Weekly mentor support to build confidence from day one.",
    ],
  },
  {
    title: "Year 2: Specialization + Real Projects",
    points: [
      "Choose focused tracks based on your goals and strengths.",
      "Work on industry-style projects with portfolios and reviews.",
      "Improve communication, collaboration, and problem-solving skills.",
    ],
  },
  {
    title: "Year 3: Internship + Career Launch",
    points: [
      "Capstone implementation with deployment-ready outcomes.",
      "Interview preparation, resume building, and job-readiness coaching.",
      "Career guidance to transition confidently into AI-first roles.",
    ],
  },
];

export default function HomesectionPGP() {
  return (
    <section className="bg-black py-16 px-4 sm:px-6" id="post-graduation-program">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#FF40EB]/40 bg-[#FF40EB]/10 px-4 py-2 text-sm font-semibold text-[#FF40EB]">
            <Calendar className="h-4 w-4" />
            3-Year Program Highlight
          </span>
          <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Post-Graduation Program Designed for Long-Term Career Growth
          </h2>
          <p className="mt-4 text-gray-300 text-base sm:text-lg">
            A structured roadmap that takes learners from foundation to specialization to placement support in 3 focused years.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {years.map((year, index) => (
            <article
              key={year.title}
              className="rounded-2xl border border-[#FF40EB]/25 bg-gradient-to-b from-[#FF40EB]/15 to-black p-6 hover:border-[#FF40EB]/60 transition-colors duration-300"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-widest text-[#FF40EB]">Phase {index + 1}</span>
                {index === 0 ? (
                  <GraduationCap className="h-5 w-5 text-[#FF40EB]" />
                ) : (
                  <Briefcase className="h-5 w-5 text-[#FF40EB]" />
                )}
              </div>

              <h3 className="text-xl font-semibold text-white mb-4">{year.title}</h3>

              <ul className="space-y-3">
                {year.points.map((point) => (
                  <li key={point} className="text-gray-300 text-sm leading-relaxed flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#FF40EB] shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
