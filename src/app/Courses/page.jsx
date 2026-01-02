"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { courses as dataCourses } from "../../Data/data";

// Use courses from src/Data/data.js
const courses = Array.isArray(dataCourses) ? dataCourses : [];

// Derive short courses heuristically (monthlyPayments === 1 or short duration)
const shortCourses = courses.filter((c) => {
  try {
    const dur = String(c.duration || "").toLowerCase();
    return c.monthlyPayments === 1 || dur.includes("week") || dur.includes("1.5");
  } catch (e) {
    return false;
  }
});

const categories = [
  { id: "all", label: "All Courses" },
  { id: "engineering", label: "Engineering" },
  { id: "prompt", label: "Prompt Engineering" },
  { id: "business", label: "Business & Product" },
  { id: "short", label: "Short Courses" }
];

// Marquee Component (FIXED — now moves infinitely)
const Marquee = () => {
  const aiTech = [
    "TensorFlow", "PyTorch", "LangChain", "Llama 3", "Claude 3", "Gemini", 
    "GPT-4", "Hugging Face", "SageMaker", "Vector DBs", "RAG", 
    "Fine-tuning", "AI Agents", "Prompt Engineering", "MLOps", "LLM APIs"
  ];

  return (
    <div className="relative overflow-hidden py-4 bg-black/40 backdrop-blur-md">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...aiTech, ...aiTech].map((tech, i) => (
          <span key={i} className="mx-6 text-cyan-300 font-mono text-sm tracking-wider">
            {tech} •
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
    </div>
  );
};

// Filter Bar
const FilterBar = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
            selectedCategory === cat.id
              ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-purple-500/30"
              : "bg-white/10 backdrop-blur-md text-gray-300 hover:bg-white/20"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};

// Search Bar
const SearchBar = ({ searchQuery, onSearchChange }) => {
  return (
    <div className="relative max-w-md mx-auto mb-12">
      <input
        type="text"
        placeholder="Search courses..."
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full px-6 py-4 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50"
      />
      <svg
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
  );
};

// Course Card (without price)
const CourseCard = ({ course }) => {
  return (
    <Link href={`/Courses/${course.id}`} className="block">
      <div className="group relative bg-black/90 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] h-full flex flex-col border border-gray-700">
      {/* Image Header */}
      <div className="relative h-64 ">
            <img
              src={course.image || "https://via.placeholder.com/600x300?text=Course+Image"}
              alt={course.title}
              loading="lazy"
              onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/600x300?text=Course+Image'; }}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
        {/* Category Badge */}
        <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-medium">
          {course.category === "engineering" ? "Engineering" :
           course.category === "prompt" ? "Prompt" :
           course.category === "business" ? "Business" :
           "Short"} • {course.lessons ?? (course.modulesByMonth ? course.modulesByMonth.length : '-')}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2 leading-snug">{course.title}</h3>
        
        <p className="text-sm text-gray-400 mb-3">{course.instructor?.name || course.instructor || 'Team Nigape'}</p>
        
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">{course.description}</p>

        <div className="mt-auto">
          {/* Rating */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-yellow-400 font-bold text-base">{course.rating?.toFixed(1)}</span>
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-xs text-gray-400">({course.students?.toLocaleString()})</span>
          </div>

          {/* Bestseller Badge */}
          {(course.rating >= 4.7 || course.students > 1000) && (
            <div className="flex items-center justify-start">
              <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Bestseller</span>
            </div>
          )}
        </div>
      </div>
      </div>
    </Link>
  );
};

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  // Combine all courses including short ones
  const allCourses = [...courses, ...shortCourses];

  // Filtered and searched courses
  const filteredCourses = useMemo(() => {
    let results = allCourses;

    if (selectedCategory !== "all") {
      if (selectedCategory === "short") {
        results = shortCourses;
      } else {
        results = courses.filter((course) => course.category === selectedCategory);
      }
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query)
      );
    }

    return results;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen pt-20 bg-black text-white overflow-hidden">
      {/* Global gradient background */}
      {/* <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-80"></div>
      <div className="fixed inset-0 bg-gradient-to-tr from-pink-800/20 via-transparent to-cyan-800/20"></div> */}

      {/* Top Marquee */}
      <Marquee />

      {/* SECTION 2: Mentor Image + Introduction to Courses */}
      <section className="relative py-10 pb-20 px-6 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            {/* Image with drop-shadow around figure */}
            <div className="relative w-full max-w-lg mx-auto">
              <div className="relative rounded-3xl overflow-hidden">
                <div
                  className="inline-block"
                  style={{ filter: 'drop-shadow(0 0 12px #9234eb9c)' }}
                >
                  <img
                    src="/shagun.png"
                    alt="Dr. Shagun Mehta – Your AI Mentor"
                    className="w-full h-[80vh] object-cover object-center"
                  />
                </div>
              </div>
            </div>

            {/* Gradient badge */}
            <div className="absolute -bottom-10 right-21 left-10 max-w-[50vh] bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-6 shadow-2xl">
              <p className="text-2xl font-bold">Miss. Shagun</p>
              <p className="text-cyan-300 max-w-1xl">
                AI Research Lead & Emotional Intelligence Pioneer
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Master the Future<br />
                of Emotional AI
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Learn from industry pioneers who blend cutting-edge LLM engineering with deep emotional intelligence. Build AI companions that don't just respond — they understand, heal, and grow with you.
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Launch your journey in 2025. Transform lives — starting with your own.
            </p>

            {/* ✨ CTA BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              {/* Primary CTA */}
              <a
                href="/Form"
                className="px-20 py-4 bg-gradient-to-r from-[#FF40EB] to-white text-black font-bold rounded-xl shadow-lg shadow-[#FF40EB]/30 hover:shadow-xl hover:shadow-[#FF40EB]/50 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Join Now
              </a>

              {/* Secondary CTA */}
              <a
                href="/Form"
                className="px-8 py-4 border-2 border-[#FF40EB] text-[#FF40EB] font-bold rounded-xl bg-transparent hover:bg-[#FF40EB]/10 transition-all duration-300"
              >
                Meet Your Mentor
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Marquee */}
      <Marquee  />

      {/* SECTION 3: Packages / Courses Cards */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              AI Programs Built for Healers & Builders
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose your path in the age of conscious intelligence
            </p>
          </div>

          <FilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 items-stretch">
            {filteredCourses
              .slice(0, showAll ? filteredCourses.length : 6)
              .map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
          </div>

          {/* Show More / Less Button */}
          {filteredCourses.length > 6 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-8 py-3 bg-[#FF40EB] text-white font-semibold rounded-xl shadow-lg shadow-[#FF40EB]/30 hover:shadow-xl hover:shadow-[#FF40EB]/50 transition-all duration-300"
              >
                {showAll ? 'Show Less' : 'Show All Programs'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* GLOBAL ANIMATION STYLES (CRITICAL FOR MARQUEE TO WORK) */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}