import Image from 'next/image';

export default function HomeSection2() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Gradient Background via CSS (CDN mein nahi chalta tha) */}
      <div className="absolute inset-0 bg-gradient-custom" />

      {/* Background Image */}
      <Image
        src="/4.png"
        alt="AI Companions Background"
        fill
        priority
        className="object-cover opacity-80"
        quality={100}
      />

      {/* Dark overlay for text readability */}
      {/* <div className="absolute inset-0 bg-black/50" /> */}

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">

        {/* Left Text Card - Glassmorphism */}
        <div className="glass-card p-10 lg:p-14 rounded-3xl border border-white backdrop-blur-2xl">
          <h2 className="text-4xl md:text-6xl font-black text-pink-600 mb-8 leading-tight">
            What is <span className="text-black bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">AI Virtual</span><br />
            Companions?
          </h2>
          <p className="text-black text-lg leading-relaxed mb-10">
            AI Virtual Companions offers a range of features designed to create highly personalised and immersive experiences for users.
            By leveraging cutting-edge AI, VR, AR, and blockchain technologies, and integrating our native $AIC token, we provide users with a unique and engaging virtual companionship experience.
          </p>
          <button className="px-10 py-5 glass-button text-white font-bold rounded-full hover:scale-110 transition-all duration-300 shadow-2xl">
            Learn More
          </button>
        </div>

        {/* Right Floating AI Characters */}
        <div className="relative h-96 lg:h-full min-h-96 flex items-center justify-center">

          {/* Center Main Image */}
          <div className="absolute animate-bounce-slow w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <Image
              src="/2.png"
              alt="Main AI Companion"
              fill
              sizes="(max-width: 768px) 70vw, 420px"
              className="rounded-3xl shadow-2xl border-8 border-white/30 object-cover glowing-border"
              priority
            />
          </div>

          {/* Top Right */}
          <div className="absolute top-0 right-0 animate-float delay-500 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64">
            <Image
              src="/3.png"
              alt="Companion"
              fill
              sizes="240px"
              className="rounded-3xl shadow-2xl border-4 border-purple-500/60 object-cover"
            />
          </div>

          {/* Bottom Left */}
          <div className="absolute bottom-0 left-0 animate-float delay-1000 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56">
            <Image
              src="/1.png"
              alt="Companion"
              fill
              sizes="200px"
              className="rounded-3xl shadow-2xl border-4 border-pink-500/60 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}