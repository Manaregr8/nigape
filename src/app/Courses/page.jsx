'use client';

import { useState, useMemo, useEffect } from "react";

// Mock data for courses
const courses = [
  {
    id: 1,
    title: "LLM Engineering Bootcamp",
    category: "engineering",
    description: "Build production-ready AI applications with GPT-4, Claude, and LangChain",
    duration: "12 weeks",
    level: "Intermediate",
    students: 2340,
    price: "$499"
  },
  {
    id: 2,
    title: "Prompt Engineering Mastery",
    category: "prompt",
    description: "Master the art of crafting effective prompts for any AI model",
    duration: "4 weeks",
    level: "Beginner",
    students: 4521,
    price: "$199"
  },
  {
    id: 3,
    title: "RAG Systems from Scratch",
    category: "engineering",
    description: "Build retrieval-augmented generation systems for enterprise",
    duration: "8 weeks",
    level: "Advanced",
    students: 1234,
    price: "$599"
  },
  {
    id: 4,
    title: "AI Product Management",
    category: "business",
    description: "Ship AI products that users love and investors fund",
    duration: "6 weeks",
    level: "Intermediate",
    students: 892,
    price: "$399"
  }
];

const categories = [
  { id: "all", label: "All Courses" },
  { id: "engineering", label: "Engineering" },
  { id: "prompt", label: "Prompt Engineering" },
  { id: "business", label: "Business & Product" }
];

// Marquee Component
const Marquee = () => {
  const aiTech = [
    "TensorFlow", "PyTorch", "LangChain", "Llama 3", "Claude 3", "Gemini", 
    "OpenAI GPT-4", "Hugging Face", "AWS SageMaker", "Vector DBs", "RAG", 
    "Fine-tuning", "Agents", "Prompt Engineering", "MLOps", "LLM APIs"
  ];

  return (
    <div className="relative overflow-hidden py-4 bg-gray-900">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...aiTech, ...aiTech].map((tech, i) => (
          <span
            key={i}
            className="mx-6 text-indigo-300 font-mono text-sm md:text-base"
          >
            {tech} •
          </span>
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-gray-900 via-transparent to-gray-900 pointer-events-none"></div>
    </div>
  );
};

// Filter Bar Component
const FilterBar = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`px-6 py-2 rounded-full font-medium transition-all ${
            selectedCategory === cat.id
              ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

// Course Card Component
const CourseCard = ({ course }) => {
  return (
    <div className="bg-gray-800/40 backdrop-blur border border-gray-700 rounded-xl p-6 hover:border-indigo-500/50 transition-all hover:transform hover:scale-105">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
          <p className="text-gray-400 text-sm">{course.description}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
        <span>📚 {course.duration}</span>
        <span>📊 {course.level}</span>
        <span>👥 {course.students.toLocaleString()} students</span>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-indigo-400">{course.price}</span>
        <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-2 px-6 rounded-full transition-all">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCourses = useMemo(() => {
    if (selectedCategory === "all") return courses;
    return courses.filter((course) => course.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100">
      {/* AI Tech Marquee */}
      <Marquee />

      {/* Hero + Offer Section with Floating Mentor */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            {/* Left Side - Text and Offer Card */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 mb-6">
                Master the Future of AI
              </h1>
              <p className="text-xl text-gray-300 mb-10">
                Learn from industry pioneers. Build real AI systems. Launch your career in 2025.
              </p>

              {/* Offer Card */}
              <div className="bg-gray-800/60 backdrop-blur-md border border-indigo-500/30 rounded-2xl p-6">
                <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  EXCLUSIVE OFFER
                </div>
                <h2 className="text-2xl font-bold mb-4 text-white">✨ 7-Day Free Trial + AI Starter Kit</h2>
                <ul className="text-left space-y-2 mb-6">
                  {[
                    "Full access to all AI courses",
                    "4 Prompt Engineering Playbooks (PDF)",
                    "1:1 Session with Dr. Mehta",
                    "Private Discord AI Community",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2 mt-1">✓</span>
                      <span className="text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/signup"
                  className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-indigo-500/30"
                >
                  Start Free Trial →
                </a>
                <p className="text-xs text-gray-400 mt-3">
                  No credit card • Only 50 spots left • Expires Dec 31, 2025
                </p>
              </div>
            </div>

            {/* Right Side - Mentor Photo */}
            <div className="hidden lg:block flex-shrink-0 w-80 h-96 animate-float">
              {/* Soft glow behind */}
              <div className="absolute -inset-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-[2rem] blur-2xl"></div>
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-2 border-white/10">
                <img
                  src="/shagun.jpeg"
                  alt="Dr. Mehta - AI Mentor"
                  className="w-full h-full object-cover object-center scale-110"
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-transparent"></div>
              </div>
              
              {/* Name badge below */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gray-800/90 backdrop-blur-md border border-indigo-500/30 rounded-full px-6 py-2 whitespace-nowrap">
                <p className="text-sm font-semibold text-white">Dr. Shagun Mehta</p>
                <p className="text-xs text-indigo-300">AI Research Lead</p>
              </div>
            </div>
          </div>
      </div>

      {/* Marquee again (bottom) */}
      <Marquee />

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
            AI Programs Built for Builders
          </h2>
          <p className="text-gray-400 mt-4">Choose your path in the age of intelligence</p>
        </div>

        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-pink-300">
            Trusted by the Next Generation of AI Engineers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Priya S.",
                role: "AI Engineer @ TechNova",
                text: "This course got me hired. The projects mirror real LLM engineering tasks.",
              },
              {
                name: "Raj M.",
                role: "Product Lead",
                text: "Finally understand how to ship AI features that users love.",
              },
              {
                name: "James L.",
                role: "Founder, AutoFlow",
                text: "Saved $20k/month in dev costs using techniques from Week 3.",
              },
            ].map((t, i) => (
              <div key={i} className="bg-gray-800/40 backdrop-blur border border-gray-700 rounded-xl p-6">
                <div className="text-yellow-400 mb-3">{"★".repeat(5)}</div>
                <p className="italic text-gray-200 mb-4">"{t.text}"</p>
                <p className="font-semibold text-white">{t.name}</p>
                <p className="text-sm text-indigo-300">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
      </div>
  );


}
