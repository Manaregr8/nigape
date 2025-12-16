import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="relative w-full py-20 sm:py-32 lg:py-40 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/.png"
          alt="AI Companions Hero"
          fill
          priority
          className="object-cover object-center"
          quality={100}
          sizes="100vw"
        />
        {/* Dark gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50" />
        {/* Scanlines — subtle */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.15) 1px, transparent 1px)`,
            backgroundSize: '100% 4px',
          }}
        />
      </div>

      <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10">

        {/* Animated Gradient Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] mb-6 sm:mb-8">
          <span className="bg-gradient-to-r from-pink-700 via-purple-700 to-blue-700 bg-clip-text text-transparent animate-gradient-x">
            Courses & Unique Advantages
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-black leading-relaxed mb-16 sm:mb-20 max-w-4xl mx-auto font-medium">
          Our programs are not your typical classroom courses. Each course is co-designed with AI industry experts to mirror real AI workflows and hiring trends. You'll work on live projects – from building LLM-based apps to NLP pipelines – exactly as teams do in tech companies. Our mentors come from top AI firms and ensure you learn the practical skills in demand today.
        </p>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {[
            { icon: 'm', title: 'Hands-on Projects', desc: 'Every student completes a capstone AI project, reviewed in sprints like in a tech company (not a textbook assignment).' },
            { icon: 'v', title: 'Corporate-style Environment', desc: 'Classes run like professional teams – with code reviews, mentorship sessions and team collaborations.' },
            { icon: 'm', title: 'Aligned with Hiring Needs', desc: 'We continuously update content based on industry feedback, so you learn the exact skills recruiters look for.' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/15 hover:border-white/30 transition-all duration-500 hover:bg-white/10 hover:shadow-xl"
              style={{ animation: `fadeInUp 0.6s ease-out ${0.2 * idx}s both` }}
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-pink-600/10 to-purple-700/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 sm:p-12 transition-all duration-500 hover:shadow-xl hover:shadow-purple-900/20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to lead in AI?
          </h2>
          <Link href="/enroll">
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105">
              Enroll Now
            </button>
          </Link>
          <p className="text-white/70 mt-5 text-sm sm:text-base">
            Secure your seat in India's most future-proof AI programs
          </p>
        </div>
      </div>
    </section>
  );
}