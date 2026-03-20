// components/Footer.tsx
"use client";
import Link from 'next/link';
import { Ghost, Twitter, MessageCircle, Globe, Shield, Copyright } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* Pure CSS replacements for broken Tailwind gradients */}
      <style jsx global>{`
        .bg-footer-main {
          background: #000000;
        }
        .bg-top-glow {
          background: linear-gradient(to top, rgba(255, 64, 235, 0.15), transparent);
        }
        .logo-glow-bg {
          background: linear-gradient(to bottom right, #FF40EB, #c026d3);
        }
        .underline-pink::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 32px;
          height: 2px;
          background: #FF40EB;
          border-radius: 2px;
          box-shadow: 0 0 12px #FF40EB;
        }
        .particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #FF40EB;
          border-radius: 50%;
          opacity: 0.35;
          animation: floatUp 6s infinite ease-in-out;
        }
        @keyframes floatUp {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.3; }
          50% { transform: translateY(-50px) translateX(15px); opacity: 0.7; }
        }
      `}</style>

      <footer className="relative w-full bg-footer-main border-t border-[#FF40EB]/20 overflow-hidden">
        
        {/* Top subtle glow */}
        <div className="absolute inset-0 bg-top-glow pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 md:py-16 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
            
            {/* Brand */}
            <div className="space-y-6 md:space-y-2">
              <div className="flex  items-left space-x-3">
                <div className="relative">
                  <img className='w-[100px]  scale-105' src="/Nigapepic/nigape.svg" alt="NIGAPE" />
                </div>
                
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                India-first institute dedicated to Generative AI and Prompt Engineering outcomes.
              </p>
              
              <div className="flex space-x-4 pt-2">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-[#FF40EB]/10 border border-[#FF40EB]/30 flex items-center justify-center hover:bg-[#FF40EB]/20 hover:border-[#FF40EB] transition-all duration-300 group">
                  <Twitter className="w-5 h-5 text-[#FF40EB] group-hover:scale-110 transition" />
                </a>
                <a href="https://t.me" target="_blank" rel="noopener noreferrer"
                   className="w-10 h-10 rounded-full bg-[#FF40EB]/10 border border-[#FF40EB]/30 flex items-center justify-center hover:bg-[#FF40EB]/20 hover:border-[#FF40EB] transition-all duration-300 group">
                  <MessageCircle className="w-5 h-5 text-[#FF40EB] group-hover:scale-110 transition" />
                </a>
                <a href="/contact-us" className="w-10 h-10 rounded-full bg-[#FF40EB]/10 border border-[#FF40EB]/30 flex items-center justify-center hover:bg-[#FF40EB]/20 hover:border-[#FF40EB] transition-all duration-300 group">
                  <Globe className="w-10 h-10 text-[#FF40EB] group-hover:scale-110 transition" />
                </a>
              </div>

              {/* Contact Details */}
              <div className="pt-4 border-t border-[#FF40EB]/20">
                <div className="text-gray-300 text-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF40EB]">✉</span>
                    <a href="mailto:info@nigape.com" className="hover:text-[#FF40EB] transition">info@nigape.com</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#FF40EB]">☎</span>
                    <a href="tel:+917428114918" className="hover:text-[#FF40EB] transition">+91 74281 14918</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Programs */}
            <div className="mt-4 md:mt-0">
              <h3 className="text-white font-semibold mb-5 relative inline-block underline-pink">
                Programs
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/courses/diploma-in-generative-ai-prompt-engineering" className="text-gray-400 hover:text-[#FF40EB] transition-all duration-300 hover:translate-x-0.5 inline-block">
                    Diploma in GenAI
                  </Link>
                </li>
                <li>
                  <Link href="/courses/advanced-generative-ai-prompt-engineering" className="text-gray-400 hover:text-[#FF40EB] transition-all duration-300 hover:translate-x-0.5 inline-block">
                    Advanced GenAI
                  </Link>
                </li>
                <li>
                  <Link href="/courses/generative-ai-for-professionals" className="text-gray-400 hover:text-[#FF40EB] transition-all duration-300 hover:translate-x-0.5 inline-block">
                    GenAI for Professionals
                  </Link>
                </li>
                <li>
                  <Link href="/courses/ai-literacy-for-everyone" className="text-gray-400 hover:text-[#FF40EB] transition-all duration-300 hover:translate-x-0.5 inline-block">
                    AI Literacy
                  </Link>
                </li>
                <li>
                  <Link href="/courses/deep-learning-professional" className="text-gray-400 hover:text-[#FF40EB] transition-all duration-300 hover:translate-x-0.5 inline-block">
                    Deep Learning Professional
                  </Link>
                </li>
              </ul>
            </div>

            {/* Community */}
            <div className="mt-4 md:mt-0">
              <h3 className="text-white font-semibold mb-5 relative inline-block underline-pink">
                Community
              </h3>
              <ul className="space-y-3">
                <li className="group">
                  <a href="https://www.linkedin.com/in/national-institute-genai-and-prompt-engineering-116711381/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF40EB] transition-all duration-300 hover:translate-x-0.5 inline-block">
                    LinkedIn
                  </a>
                </li>
                <li className="group">
                  <a href="https://www.instagram.com/nigape.official/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF40EB] transition-all duration-300 hover:translate-x-0.5 inline-block">
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="mt-4 md:mt-0">
              <h3 className="text-white font-semibold mb-5 relative inline-block underline-pink">
                Legal
              </h3>
              <ul className="space-y-3">
                <li className="group">
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-[#FF40EB] transition-all duration-300 hover:translate-x-0.5 inline-block">
                    Privacy Policy
                  </Link>
                </li>
                <li className="group">
                  <Link href="/terms-of-service" className="text-gray-400 hover:text-[#FF40EB] transition-all duration-300 hover:translate-x-0.5 inline-block">
                    Terms of Service
                  </Link>
                </li>
                <li className="group">
                  <Link href="/terms-and-conditions" className="text-gray-400 hover:text-[#FF40EB] transition-all duration-300 hover:translate-x-0.5 inline-block">
                    Terms and Conditions
                  </Link>
                </li>
                <li className="group">
                  <Link href="/disclaimer" className="text-gray-400 hover:text-[#FF40EB] transition-all duration-300 hover:translate-x-0.5 inline-block">
                    Disclaimer
                  </Link>
                </li>
                <li className="group">
                  <a href="/sitemap.xml" className="text-gray-400 hover:text-[#FF40EB] transition-all duration-300 hover:translate-x-0.5 inline-block">
                    Sitemap XML
                  </a>
                </li>
                <li className="group">
                  <Link href="/sitemap.html" className="text-gray-400 hover:text-[#FF40EB] transition-all duration-300 hover:translate-x-0.5 inline-block">
                    Sitemap HTML
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 md:mt-16 pt-6 border-t border-[#FF40EB]/20 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-500">
              <Copyright className="w-4 h-4" />
              <span>2025 NIGAPE. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-6 text-gray-500">
              <span className="hover:text-[#FF40EB] cursor-default transition">Empowering India&apos;s AI Workforce</span>
              <span className="text-[#FF40EB] font-semibold flex items-center gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF40EB] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF40EB]"></span>
                </span>
                Online
              </span>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                top: `${20 + i * 15}%`,
                right: `${10 + i * 15}%`,
                animationDelay: `${i * 0.6}s`,
              }}
            />
          ))}
        </div>
      </footer>
    </>
  );
}