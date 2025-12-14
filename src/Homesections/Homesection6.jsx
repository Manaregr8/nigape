"use client";

import { useState, useEffect } from "react";

export default function AIEditorialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const slides = [
    { name: "Alex Rivera", role: "CEO & Founder", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop&q=80", badge: "AI INSIGHT" },
    { name: "Sarah Chen", role: "CTO - AI Lead", img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&h=800&fit=crop&q=80", badge: "SMART NEWS" },
    { name: "Marcus Johnson", role: "Blockchain Architect", img: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200&h=800&fit=crop&q=80", badge: "AI UPDATE" },
    { name: "Emma Liu", role: "Head of Design", img: "https://images.unsplash.com/photo-1675557009688-45637bc8c4c8?w=1200&h=800&fit=crop&q=80", badge: "AI INSIGHT" },
    { name: "David Kim", role: "Strategy Director", img: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=1200&h=800&fit=crop&q=80", badge: "SMART NEWS" },
    { name: "Luna Voss", role: "AI Ethics Officer", img: "https://images.unsplash.com/photo-1676277791608-ac5521e44598?w=1200&h=800&fit=crop&q=80", badge: "AI UPDATE" },
    { name: "Kai Zen", role: "Lead Developer", img: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=1200&h=800&fit=crop&q=80", badge: "AI INSIGHT" },
    { name: "Nova Rex", role: "Community Lead", img: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=1200&h=800&fit=crop&q=80", badge: "SMART NEWS" },
  ];

  const SLIDE_DURATION = 5000;

  useEffect(() => {
    let interval;
    let progressInterval;

    if (isPlaying) {
      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0;
          return prev + (100 / (SLIDE_DURATION / 50));
        });
      }, 50);

      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setProgress(0);
      }, SLIDE_DURATION);
    }

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [isPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (isPlaying) setProgress(0);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 py-8 md:py-12">
      
      {/* Animated Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      {/* Neural Grid Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)`,
        backgroundSize: '40px 40px'
      }} />

      <div className="relative max-w-7xl mx-auto px-4 w-full">
        
        {/* Title */}
        <div className="text-center pt-10 mb-8 md:mb-12">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-3">
            AI Insights
          </h2>
          <p className="text-blue-300/60 text-sm md:text-base tracking-wide">
            Next-generation intelligence at your fingertips
          </p>
        </div>

        {/* Main Carousel Layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
          
          {/* Large Main Card */}
          <div className="w-full lg:w-[55%] group">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-950/40 to-purple-950/40 backdrop-blur-xl border border-blue-400/50 shadow-2xl shadow-blue-500/30 transition-all duration-700 hover:shadow-blue-500/50">
              
              <div className="relative h-[450px] md:h-[500px] overflow-hidden">
                <img
                  src={slides[currentIndex].img}
                  alt={slides[currentIndex].name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* AI Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 mix-blend-overlay" />
                
                {/* Animated Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />
                </div>

                {/* Noise Texture */}
                <div className="absolute inset-0 opacity-5 mix-blend-overlay" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`
                }} />

                {/* Badge */}
                <div className="absolute top-6 left-6">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold tracking-wider rounded-full shadow-lg shadow-pink-500/50">
                    {slides[currentIndex].badge}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-slate-900 via-slate-900/95 to-transparent">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
                    {slides[currentIndex].name}
                  </h3>
                  <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-4">
                    {slides[currentIndex].role}
                  </p>
                  <p className="text-blue-400/60 text-xs mb-4">
                    Generated by AI • 5 mins ago
                  </p>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-400/40 rounded-full text-blue-400 hover:text-blue-300 font-medium transition-all duration-300">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Read more</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Small Cards Column - Scrolling */}
          <div className="w-full lg:w-[40%] relative">
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible scrollbar-hide snap-x snap-mandatory lg:snap-none pb-4 lg:pb-0">
              {/* Show next 3 slides in loop */}
              {[1, 2, 3].map((offset) => {
                const index = (currentIndex + offset) % slides.length;
                return (
                  <div
                    key={index}
                    onClick={() => goToSlide(index)}
                    className="flex-none w-[75%] md:w-[45%] lg:w-full snap-center cursor-pointer group/small transition-all duration-500 hover:scale-105"
                  >
                    <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-950/30 to-purple-950/30 backdrop-blur-xl border border-blue-400/30 shadow-lg shadow-blue-500/10 hover:border-blue-400/50 hover:shadow-blue-500/20 transition-all duration-300">
                      
                      <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                        <img
                          src={slides[index].img}
                          alt={slides[index].name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/small:scale-110"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/15 via-purple-600/15 to-pink-600/15 mix-blend-overlay" />
                        
                        {/* Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="inline-block px-3 py-1 bg-gradient-to-r from-pink-500 to-red-500 text-white text-xs font-bold tracking-wider rounded-full">
                            {slides[index].badge}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900 via-slate-900/90 to-transparent">
                          <h4 className="text-lg md:text-xl font-bold text-white tracking-tight mb-1">
                            {slides[index].name}
                          </h4>
                          <p className="text-blue-300 text-xs font-medium uppercase tracking-wider">
                            {slides[index].role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12">
          
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="relative w-12 h-12 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-xl border border-blue-400/30 flex items-center justify-center hover:border-blue-400/60 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 group/play"
          >
            <div className="absolute inset-0 rounded-full bg-blue-500/0 group-hover/play:bg-blue-500/10 transition-colors duration-300" />
            {isPlaying ? (
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-blue-400 ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* Progress Bar */}
          <div className="flex-1 w-full md:max-w-md">
            <div className="h-1 bg-blue-950/50 rounded-full overflow-hidden backdrop-blur-xl border border-blue-500/20">
              <div
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-100 relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
              </div>
            </div>
          </div>

          {/* Dot Navigation */}
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-blue-400 w-8 h-2 rounded-full shadow-lg shadow-blue-500/50'
                    : 'bg-blue-500/30 hover:bg-blue-500/50 w-2 h-2 rounded-full'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12 max-w-3xl mx-auto px-4">
          <p className="text-blue-300/60 text-sm md:text-base leading-relaxed">
            Our AI-powered insights combine cutting-edge machine learning with human expertise 
            to deliver the most advanced intelligence solutions on the planet.
          </p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}