import Image from "next/image";

export default function HomeSection5() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden ">

      {/* Background Image - AB DIKHEGI PURI! */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/h.png"
          alt="Tokenomics VR Girl"
          fill
          priority
          className="object-cover opacity-65"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" /> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-white">

        {/* Title */}
        <h2 className="text-center text-5xl md:text-8xl font-black mb-20">
          <span className="tokenomics-title-gradient">Tokenomics</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT: Token Bars */}
          <div className="space-y-8">
            {[
              { label: "Liquidity", percent: 70, color: "cyan", amount: "700M" },
              { label: "Core Team", percent: 15, color: "purple", amount: "150M" },
              { label: "Partnerships / Dev", percent: 10, color: "pink", amount: "100M" },
              { label: "Advisors", percent: 5, color: "green", amount: "50M" },
            ].map((item, i) => (
              <div key={i} className="space-y-3">
                <div className="flex justify-between text-lg font-medium">
                  <span className={`text-${item.color}-400 font-bold`}>{item.label}</span>
                  <span className="text-gray-300">{item.amount} • {item.percent}%</span>
                </div>
                <div className="w-full h-9 bg-white/10 rounded-full overflow-hidden border border-white/10">
                  <div
                    className={`h-full rounded-full progress-glow-${item.color} progress-bar`}
                    style={{ width: `${item.percent}%`, animationDelay: `${i * 0.2}s` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Donut Chart + Background Image Visible */}
          <div className="relative flex justify-center items-center">

            {/* Background Image ke upar donut lag raha hai — ab image bhi dikhegi! */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]">

              {/* Rotating Donut Ring */}
              <div className="absolute inset-4 donut-ring z-10" />

              {/* Outer Glow Effect */}
              <div className="absolute inset-0 donut-glow z-0" />

              {/* Center Glass Card (Static) */}
              <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                <div className="glass-center w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-purple-500/70 flex flex-col items-center justify-center shadow-2xl backdrop-blur-2xl">
                  <p className="text-gray-400 text-sm uppercase tracking-widest">Total Supply</p>
                  <p className="text-5xl md:text-6xl font-black text-white mt-3">1B</p>
                  <p className="text-4xl md:text-5xl font-bold text-cyan-400 tracking-widest mt-2">$AIC</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Optional Bottom Text */}
        {/* <div className="text-center mt-20">
          <h3 className="text-3xl md:text-5xl font-bold text-gray-300">
            Fair Launch • No Presale • Community First
          </h3>
        </div> */}

      </div>
    </section>
  );
}