import React from 'react';
import { ArrowRight, Briefcase, TrendingUp, Clock, Users } from 'lucide-react';

// Ensure Geist is loaded globally or via next/font
// Example in _app.tsx: import { Geist } from 'next/font/google';

export default function NigapePlacements() {
  const metrics = [
    {
      icon: TrendingUp,
      stat: "95%+",
      title: "Career Outcomes",
      desc: "Learners report new roles, promotions, or AI career transitions."
    },
    {
      icon: Briefcase,
      stat: "Industry-Ready",
      title: "AI Portfolios",
      desc: "GenAI, NLP, Computer Vision & LLM-based capstone projects."
    },
    {
      icon: Clock,
      stat: "30–90 Days",
      title: "to Interviews",
      desc: "Typical timeline after portfolio completion."
    },
    {
      icon: Users,
      stat: "Mentor-Led",
      title: "Career Support",
      desc: "Resume reviews, mock interviews & role clarity."
    }
  ];

  const successStories = [
    {
      name: "Rahul",
      background: "Class 12 Graduate",
      transformation: "Zero coding experience → Leading AI projects at a startup",
      quote: "Within weeks I was building my first AI chatbot. The career clarity and confidence I gained is unbelievable.",
      role: "AI Project Lead",
      color: "#FF40EB"
    },
    {
      name: "Priya",
      background: "Working Professional",
      transformation: "Non-tech role → Data Scientist creating NLP solutions",
      quote: "NIGAPE's program turned my career around. The real projects and corporate-style learning made all the difference.",
      role: "Data Scientist",
      color: "#FF40EB"
    },
    {
      name: "Ankit",
      background: "College Student",
      transformation: "Confused about AI → Portfolio + Clear career path",
      quote: "From confusion to clarity. Now I'm placed at a tech company working on Computer Vision.",
      role: "Computer Vision Engineer",
     color: "#FF40EB"
    }
  ];

  const careerStats = [
    { label: "Career Transitions", value: "95%", desc: "AI learners report new roles or promotions" },
    { label: "AI Skills Gap", value: "1M+", desc: "Skilled AI professionals needed in India" },
    { label: "GenAI Surge", value: "3.6M", desc: "Learners already upskilling in AI" }
  ];

  return (
    <div className="min-h-screen bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-[1350px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">
          
          {/* LEFT SIDE - Content & Outcomes */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="inline-block">
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wider uppercase px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#9234eb]/20 to-[#9234eb]/10 border border-[#9234eb]/40">
                Placements & Career Outcomes
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white">
              See Where Our Learners Are Building Their{' '}
              <span className="text-[#FF40EB]">AI Careers</span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl">
              We focus on outcomes — not just course completion. With corporate-style AI training, real-world GenAI projects, and mentorship, our learners convert skills into real opportunities.
            </p>

            {/* Metrics Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="group relative bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-[#FF40EB]/30 hover:border-[#FF40EB]/70 transition-all duration-300"
                >
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-[#FF40EB]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <metric.icon className="w-6 h-6 text-[#FF40EB]" />
                    </div>
                    
                    <div className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {metric.stat}
                    </div>
                    
                    <div className="text-[#FF40EB] font-semibold mb-2">
                      {metric.title}
                    </div>
                    
                    <p className="text-white/70 text-sm leading-relaxed">
                      {metric.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-[#FF40EB] to-[#a045eb] text-white font-semibold text-base sm:text-lg overflow-hidden transition-all duration-300 hover:scale-[1.03]">
                <span className="flex items-center justify-center gap-2">
                  Book Free Career Counseling
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>

              <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl bg-transparent border-2 border-[#FF40EB] text-white font-semibold text-base sm:text-lg hover:bg-[#9234eb]/10 transition-all duration-300">
                Explore Our Programs
              </button>
            </div>
          </div>

          {/* RIGHT SIDE - Alumni Outcomes */}
          <div className="relative">
            <div className="bg-black/60 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-[#FF40EB]/40">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  REAL SUCCESS STORIES
                </h2>
                <p className="text-white/80 mb-4">
                  How our learners transformed their AI careers
                </p>
                <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#FF40EB]/10 border border-[#FF40EB]/30">
                  <span className="text-white text-xs sm:text-sm font-medium">
                    ✓ Verified transformations | 2024–25
                  </span>
                </div>
              </div>

              {/* Career Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {careerStats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-black/80 backdrop-blur-sm rounded-lg p-3 border border-[#FF40EB]/30 text-center"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-[#FF40EB] mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/70 text-xs leading-tight">
                      {stat.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Success Stories */}
              <div className="space-y-4">
                {successStories.map((story, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-black/80 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-[#FF40EB]/30 hover:border-[#FF40EB]/70 transition-all duration-300"
                  >
                    <div className="flex items-start gap-3 sm:gap-4 mb-3">
                      <div 
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${story.color}, ${story.color}80)`,
                          border: `2px solid ${story.color}`,
                        }}
                      >
                        {story.name.charAt(0)}
                      </div>
                      
                      <div className="flex-1">
                        <div className="text-white font-semibold text-sm sm:text-base mb-1">
                          {story.name}
                        </div>
                        <div className="text-[#FF40EB] text-xs mb-2">
                          {story.background}
                        </div>
                        <div className="text-white/90 text-xs sm:text-sm font-medium mb-2">
                          {story.transformation}
                        </div>
                        <p className="text-white/70 text-xs sm:text-sm italic leading-relaxed">
                          "{story.quote}"
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-[#FF40EB]/20">
                      <span className="text-[#FF40EB] text-xs font-semibold">
                        Now: {story.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}