import Image from 'next/image';
import Link from 'next/link';

export default function HomeSection2() {
  return (
    <section className="relative w-full py-20 sm:py-32 lg:py-40 overflow-hidden">

      {/* Background: Gradient + Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-pink-900/30 z-0" />
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/.png"
          alt="AI Companions Background"
          fill
          priority
          className="object-cover opacity-70"
          quality={100}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 py-12 sm:py-16 lg:py-20">

        {/* Left: Glass Card */}
        <div className="glass-card p-8 sm:p-10 md:p-12 rounded-3xl border border-white/20 backdrop-blur-2xl bg-white/10 shadow-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 bg-clip-text text-transparent mb-8 leading-tight">
            What You Will Gain
          </h2>
          <p className="text-white text-lg leading-relaxed mb-8 font-medium">
            At NIGAPE, you don't just learn theory – you get results. Graduates emerge with:
          </p>

          {/* Benefits List */}
          <div className="space-y-6 mb-10">
            {[
              {
                title: "Industry-Ready Skills",
                color: "text-pink-400",
                desc: "Master AI concepts (machine learning, deep learning, NLP, computer vision) and apply them through prompt engineering and real AI system design."
              },
              {
                title: " Unshakeable Confidence",
                color: "text-purple-400",
                desc: "By solving real problems and demoing projects, you'll know you can innovate with AI in any workplace."
              },
              {
                title: " Extensive Industry Exposure",
                color: "text-cyan-400",
                desc: "Work on team projects that replicate actual R&D cycles. Receive feedback from AI professionals. Build an AI portfolio that stands out."
              },
              {
                title: " Career Clarity & Readiness",
                color: "text-pink-400",
                desc: "With guidance from our mentors and counsellors, you'll identify the AI roles that fit your strengths and have the resume and interview practice to land them."
              }
            ].map((item, idx) => (
              <div key={idx} className="fade-in-up" style={{ animationDelay: `${idx * 0.15}s` }}>
                <h3 className={`text-xl font-bold ${item.color} mb-2`}>{item.title}</h3>
                <p className="text-white/90 text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-white/80 text-base leading-relaxed mb-10 italic font-medium">
            Ready to transform? Take the first step – explore our courses and launch your AI journey.
          </p>

          <Link href="/courses">
            <button className="px-8 py-4 w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:scale-[1.04] active:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/30">
              Explore Courses
            </button>
          </Link>
        </div>

        {/* Right: Floating AI Characters */}
        <div className="relative h-96 lg:h-[80vh] flex items-center justify-center py-12">

          {/* Main Center Character */}
          <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 animate-bounce-slow">
            <Image
              src="/2.png"
              alt="Main AI Companion"
              fill
              className="object-cover rounded-3xl border-4 border-white/40 glowing-border"
              priority
            />
          </div>

          {/* Top Right */}
          <div className="absolute top-10 right-0 w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 animate-float opacity-90">
            <Image
              src="/3.png"
              alt="Companion"
              fill
              className="object-cover rounded-3xl border-4 border-purple-500/40"
            />
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-10 left-0 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 animate-float opacity-90">
            <Image
              src="/1.png"
              alt="Companion"
              fill
              className="object-cover rounded-3xl border-4 border-pink-500/40"
            />
          </div>
        </div>
      </div>
    </section>
  );
}