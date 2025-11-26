// app/page.jsx  (tera original code – sirf yeh part change kiya hai)

import { Home, Info, Contact, BookOpen } from 'lucide-react';
import Image from 'next/image';
import localFont from 'next/font/local';

export default function Homee() {
  const navItems = [
    { name: 'About', icon: Info, href: 'About' },
    { name: 'Contact us', icon: Contact, href: 'Contactus' },
    { name: 'Courses', icon: BookOpen, href: 'Courses' },
  ];
  const nigapefont = ({src:"../font/Chainbox.otf"});


  return (
    <>
      <div
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat pb-32"

      >
        <Image
          src="/d.png"
          alt="AI Companions Hero"
          fill
          priority
          className="object-cover object-bottom h-48 w-96"
          quality={100}
        />
        <div className="absolute inset-0 " />

        <div className="relative z-10 md:max-w-6xl mx-auto px-6 pt-10 flex flex-col items-start">

          {/* Bottom navbar – bilkul same */}
          <nav className="mt-0 w-[80%]  max-w-2xl mx-auto pb-10">
            <div
              className="
      flex 
      items-center 
      justify-center md:justify-between     /* Center on mobile, spread on big screen */
      gap-6 md:gap-10 
      px-6 md:px-10 
      py-5 
      bg-black/40
      rounded-full 
      shadow-2xl 
      overflow-x-auto 
      scrollbar-hide
      backdrop-blur
      
    
    "
            >
              {/* Home Button */}
              <div
                className="flex items-center  gap-3 px-2 md:px-7 py-3 rounded-full shadow-lg whitespace-nowrap shrink-0"
                style={{ backgroundColor: 'rgb(125, 60, 77)' }}
              >
                <Home size={24} className="text-white shrink-0" strokeWidth={2.8} />
                <span className="text-white font-bold text-sm tracking-wide">Home</span>
              </div>
             
              {/* Icons */}
              <div className="flex items-center gap-6 md:gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="p-3 text-white hover:text-white transition-all duration-200 hover:scale-110 shrink-0"
                  >
                    <item.icon size={26} strokeWidth={2.2} />
                  </a>
                ))}
              </div>
            </div>
          </nav>


          {/* Tera original card – bilkul same */}
          <div className="w-full max-w-2xl bg-white/30 backdrop-blur-2xl p-8 sm:p-10 lg:p-12 rounded-3xl shadow-2xl shadow-pink-700/50 border-2 border-white/40">
            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              AI Companions
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-black/90 leading-relaxed">
              Our vision is to revolutionize companionship with AI Companions —
              highly customizable, interactive, and immersive virtual partners
              designed to meet your unique desires.
            </p>
            <button className="mt-10 px-8 py-4 rounded-full bg-gray-900 text-white text-lg font-bold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
              Learn More
            </button>
          </div>




        </div>
      </div>
    </>
  );
}