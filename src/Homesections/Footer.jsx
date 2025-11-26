export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 backdrop-blur-xl border-t border-white/5 py-5 mt-0">
      <div className="max-w-7xl mx-auto px-8">

        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* Left - Logo + Small Text */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-black tracking-tighter mb-2">
              <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-500">
                AI
              </span>
              <span className="text-white">Companions</span>
            </h1>
            <p className="text-gray-500 text-sm">
              Revolutionizing companionship with AI
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-gray-400">
            {["About", "Roadmap", "Tokenomics", "Team", "Partners", "Whitepaper"].map((link) => (
              <a
                key={link}
                href="#"
                className="hover:text-white transition text-sm font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right - Social Icons + Copyright */}
          <div className="text-center lg:text-right">
            <div className="flex justify-center lg:justify-end items-center space-x-4 mb-4">
              <a href="#" className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <img src="/twitter.png" alt="X" className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <img src="/discord.png" alt="Discord" className="w-5 h-5" />
              </a>
              <a href="#" className="w-11 h-11 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition">
                <img src="/telegram.png" alt="Telegram" className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-600 text-xs">
              © 2025 AICompanions. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}