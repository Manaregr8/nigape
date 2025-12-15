export default function Footer() {
  return (
    <footer className="w-full bg-gray-950 py-12 mt-0 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

          {/* Left - Logo & Description */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-black tracking-tight mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
                NIGAPE
              </span>
            </h1>
            <p className="text-gray-400 text-base max-w-md">
              India’s Premium Generative AI & Prompt Engineering Institute
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Unlock hands-on Generative AI skills through industry-driven projects and corporate-style training.
            </p>
          </div>

          {/* Center - Empty space for balance (removed quick links) */}
          <div className="hidden md:block"></div>

          {/* Right - Social Media & Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-lg mb-6 font-medium">
              Connect with us
            </p>
            <div className="flex justify-center md:justify-end items-center space-x-5 mb-8">
              <a 
                href="https://twitter.com/yourhandle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-purple-600/30 transition duration-300 group"
              >
                <img src="/social/facebook.png" alt="X (Twitter)" className="w-6 h-6 opacity-80 group-hover:opacity-100" />
              </a>
              <a 
                href="https://linkedin.com/company/yourhandle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-purple-600/30 transition duration-300 group"
              >
                <img src="/social/instagram.png" alt="LinkedIn" className="w-6 h-6 opacity-80 group-hover:opacity-100" />
              </a>
              <a 
                href="https://instagram.com/yourhandle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-purple-600/30 transition duration-300 group"
              >
                <img src="/social/social.png" alt="Instagram" className="w-6 h-6 opacity-80 group-hover:opacity-100" />
              </a>
              <a 
                href="https://youtube.com/@yourhandle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/50 rounded-full flex items-center justify-center hover:bg-purple-600/30 transition duration-300 group"
              >
                <img src="/social/youtube.png" alt="YouTube" className="w-6 h-6 opacity-80 group-hover:opacity-100" />
              </a>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <p className="text-gray-600 text-sm">
                © {new Date().getFullYear()} NIGAPE. All rights reserved.
              </p>
              <p className="text-gray-700 text-xs mt-2">
                Transforming careers with premium Generative AI education in India.
              </p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}