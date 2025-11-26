import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/@.png"
          alt="AI Companions Hero"
          fill
          priority
          className="object-cover object-center"
          quality={100}
          sizes="100vw"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/20" /> 
        
      </div>

      {/* Scanlines Effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-scanlines" />

      {/* Main Content */}
      <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 w-full">

        {/* Main Heading - Ab mobile pe bhi perfect fit */}
        <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tighter leading-none">
          <span className="block text-white">Experience the</span>
          <span className="block hero-gradient-text-1 mt-1 sm:mt-2">Future of</span>
          <span className="block hero-gradient-text-2 mt-1 sm:mt-2">Companionship</span>
        </h1>

        {/* Floating Glass Button - Mobile pe bhi balanced */}
        <div className="flex justify-center mt-12 sm:mt-16 lg:mt-20">
          <Link href="/presentation" className="group">
            <div className="glass-button-hero relative p-8 sm:p-10 md:p-12 lg:p-14 rounded-full transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/40">
              
              {/* Play Icon */}
              <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl play-glow group-hover:animate-pulse">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white ml-1 sm:ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7L8 5z"/>
                  </svg>
                </div>
              </div>

              {/* Button Text */}
              <p className="text-white font-bold text-lg sm:text-xl md:text-2xl tracking-widest mt-6 sm:mt-8">
                PRESENTATION
              </p>
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}