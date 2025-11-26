import Image from 'next/image';

export default function HomeSection3() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-light">

      {/* Animated Background Blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-0 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-400/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE – Why AI Virtual Companions? */}
        <div className="space-y-12">

          {/* Top Image Card with Glow */}
          <div className="relative group">
            <div className="absolute -inset-2 glow-bg-pink-purple rounded-3xl blur-xl opacity-50 group-hover:opacity-80 transition"></div>
            <div className="relative glass-card-dark rounded-3xl p-6 md:p-8 border border-white/10">
              <Image
                src="/m.png"
                alt="Why AI Companions"
                width={600}
                height={400}
                className="rounded-[5vw] rounded-br-[11vw] w-full object-cover shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Why <span className="gradient-text-pink-cyan">AI Virtual</span><br />
              Companions?
            </h2>
            <p className="text-gray-800 text-lg leading-relaxed mb-6">
              The market for digital companions is growing, with users increasingly seeking personalized and interactive experiences. 
              This trend underscores the growing acceptance and integration of these technologies into everyday life.
            </p>
            <p className="text-gray-700">
              Discover a new era of personalized companionship with AI Companions — powered by advanced AI, VR, AR, and blockchain.
            </p>
          </div>

          {/* Feature Tags */}
          <div className="flex flex-wrap gap-4">
            {[
              { label: "Community Rewards", icon: "trophy" },
              { label: "AI Personalization", icon: "brain" },
              { label: "Blockchain", icon: "cube" },
              { label: "Emotional AI", icon: "heart" },
              { label: "VR Ready", icon: "vr" },
              { label: "AR Enhanced", icon: "ar" },
            ].map((item, i) => (
              <div key={i} className="glass-tag px-6 py-3 rounded-full flex items-center gap-3 border border-white/20 hover:scale-105 transition">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-white font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE – Monetization */}
        <div className="space-y-12 ">

          <div >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
              Monetization<br />
              <span className="gradient-text-purple-pink">Strategies</span>
            </h2>
            <p className="text-gray-800 text-lg max-w-lg">
              Our platform uses multiple revenue streams built around the $AIC token to create sustainable growth.
            </p>
          </div>

          {/* Features List */}
          <div className="space-y-6">
            {[
              "Free tier with limited features",
              "Stake $AIC → Unlock Premium",
              "Subscription cashback in tokens",
              "In-app purchases & NFTs",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full glow-dot"></div>
                <p className="text-gray-800 text-lg font-medium">{text}</p>
              </div>
            ))}
          </div>

          {/* Robot Hand Image with Glow */}
          <div className="relative group mt-10 ">
            <div className="absolute -inset-4 glow-bg-cyan-pink blur-2xl opacity-40 group-hover:opacity-70 transition"></div>
            <div className="relative ">
              <Image
                src="/x.png"
                alt="AI & Blockchain"
                width={550}
                height={400}
                className="rounded-[7vw] shadow-2xl border-4 border-white/20 rounded-bl-[19vw]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}