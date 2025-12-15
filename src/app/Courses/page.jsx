'use client';

import { useState, useMemo } from "react";

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
    description: "Master the art effective prompts for any AI model",
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
    "GPT-4", "Hugging Face", "SageMaker", "Vector DBs", "RAG", 
    "Fine-tuning", "AI Agents", "Prompt Engineering", "MLOps", "LLM APIs"
  ];

  return (
    <div className="relative overflow-hidden py-3 bg-gray-900">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...aiTech, ...aiTech].map((tech, i) => (
          <span
            key={i}
            className="mx-5 text-indigo-400 font-mono text-sm"
          >
            {tech} •
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none"></div>
    </div>
  );
};

// Filter Bar Component
const FilterBar = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`px-5 py-2.5 rounded-full font-medium transition-colors whitespace-nowrap ${
            selectedCategory === cat.id
              ? "bg-indigo-600 text-white"
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
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-indigo-500/40 transition-colors">
      <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{course.description}</p>
      
      <div className="flex flex-wrap gap-3 text-xs text-gray-400 mb-5">
        <span>📚 {course.duration}</span>
        <span>📊 {course.level}</span>
        <span>👥 {course.students.toLocaleString()} students</span>
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-indigo-400">{course.price}</span>
        <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-5 rounded-lg transition-colors whitespace-nowrap">
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
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Top Marquee */}
      <Marquee />

      {/* Hero Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 mb-6">
                Master the Future of AI
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0">
                Learn from industry pioneers. Build real AI systems. Launch your career in 2025.
              </p>

              {/* Offer Card */}
              <div className="bg-gray-800/60 backdrop-blur border border-gray-700 rounded-xl p-6 max-w-md mx-auto lg:mx-0">
                <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
                  EXCLUSIVE OFFER
                </div>
                <h2 className="text-xl font-bold text-white mb-3">✨ 7-Day Free Trial + AI Starter Kit</h2>
                <ul className="text-left space-y-2 mb-5 text-gray-200">
                  {[
                    "Full access to all AI courses",
                    "4 Prompt Engineering Playbooks (PDF)",
                    "1:1 Session with Dr. Mehta",
                    "Private Discord AI Community",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-green-400 mr-2 mt-0.5">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/signup"
                  className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-2.5 px-6 rounded-lg transition-all w-full text-center"
                >
                  Start Free Trial →
                </a>
                <p className="text-xs text-gray-400 mt-3 text-center">
                  No credit card • Only 50 spots left • Expires Dec 31, 2025
                </p>
              </div>
            </div>

            {/* Mentor Photo — No float, no glow */}
            <div className="flex-shrink-0 w-64 h-72 lg:w-72 lg:h-80">
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-700 shadow-xl">
                <img
                  src="/shagun.jpeg"
                  alt="Dr. Shagun Mehta – AI Mentor"
                  className="w-full h-full object-cover"
                />
                {/* Optional: subtle overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-white">Dr. Shagun Mehta</p>
                <p className="text-sm text-indigo-300">AI Research Lead</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <Marquee />

      {/* Courses Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
            AI Programs Built for Builders
          </h2>
          <p className="text-gray-400 mt-3">Choose your path in the age of intelligence</p>
        </div>

        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-900/40">
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
              <div key={i} className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-6">
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
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}