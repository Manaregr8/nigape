"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { courses as dataCourses } from "../../Data/data";

const courses = Array.isArray(dataCourses) ? dataCourses : [];

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

const durationFilters = [
  { id: "all", label: "All Durations" },
  { id: "1.5", label: "1.5 Months" },
  { id: "4", label: "4 Months" },
  { id: "6", label: "6 Months" },
  { id: "12", label: "12 Months" },
];

function isShortCourse(course) {
  try {
    const dur = String(course?.duration || "").toLowerCase();
    return course?.monthlyPayments === 1 || dur.includes("week") || dur.includes("1.5");
  } catch {
    return false;
  }
}

function getUiCategory(course) {
  const rawCategory = String(course?.category || "").toLowerCase();
  const title = String(course?.title || "").toLowerCase();
  const description = String(course?.description || "").toLowerCase();

  if (rawCategory === "engineering" || rawCategory === "prompt" || rawCategory === "business") {
    return rawCategory;
  }
  if (["deep-learning", "computer-vision", "nlp"].includes(rawCategory)) {
    return "engineering";
  }
  if (rawCategory === "ai-literacy") {
    return "business";
  }
  if (rawCategory === "generative-ai") {
    if (title.includes("professional") || description.includes("business")) {
      return "business";
    }
    return "prompt";
  }
  return "business";
}

function getUiCategoryLabel(course) {
  const mapped = getUiCategory(course);
  if (mapped === "engineering") return "Engineering";
  if (mapped === "prompt") return "Prompt";
  if (mapped === "business") return "Business";
  return "Short";
}

function getDurationMonths(course) {
  const dur = String(course?.duration || "").toLowerCase();
  if (dur.includes("1.5") || dur.includes("week")) return "1.5";
  if (dur.includes("4")) return "4";
  if (dur.includes("6")) return "6";
  if (dur.includes("12")) return "12";
  const mp = course?.monthlyPayments;
  if (mp === 1) return "1.5";
  if (mp === 4) return "4";
  if (mp === 6) return "6";
  if (mp === 12) return "12";
  return null;
}

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

// ✅ UPDATED: Combined Search and Filter Bar - FIXED TOGGLE
const SearchFilterBar = ({ 
  searchQuery, 
  onSearchChange, 
  selectedCategory, 
  onSelectCategory, 
  selectedDuration, 
  onSelectDuration,
  showFilters,
  setShowFilters
}) => {
  const handleToggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <div className="max-w-5xl mx-auto mb-8">
      {/* Search and Filters Button Row */}
      <div className="flex gap-3 mb-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-5 py-3 bg-gray-900/80 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/50 focus:border-transparent transition-all text-sm"
          />
          <svg
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        {/* Filters Button */}
        <button
          type="button"
          onClick={handleToggleFilters}
          className={`px-5 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 text-sm whitespace-nowrap ${
            showFilters 
              ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-purple-500/30" 
              : "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105"
          }`}
        >
          <svg 
            className="w-4 h-4 flex-shrink-0" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" 
            />
          </svg>
          Filters
        </button>
      </div>

      {/* Filter Options (shown when filters button is clicked) */}
      {showFilters && (
        <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-5 backdrop-blur-md animate-fadeIn">
          {/* Category Filters */}
          <div className="mb-5">
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Category</h3>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === cat.id
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Duration Filters */}
          <div>
            <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Duration</h3>
            <div className="flex flex-wrap gap-2">
              {durationFilters.map((dur) => (
                <button
                  key={dur.id}
                  onClick={() => onSelectDuration(dur.id)}
                  className={`px-3 py-1.5 text-xs rounded-lg font-medium transition-all duration-300 ${
                    selectedDuration === dur.id
                      ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-600"
                  }`}
                >
                  {dur.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const CourseCard = ({ course }) => {
  const courseGraphicMap = {
    "Diploma in Generative AI & Prompt Engineering": "Generative AI & Prompt Engineering (Diploma — 12 Months).png",
    "Advanced Generative AI & Prompt Engineering": "Advanced Certification in Generative AI & Prompt Engineering (6 Months).png",
    "AI Literacy for Everyone": "AI Literacy Course (1.5 Months).png",
    "Generative AI for Professionals": "Generative AI for Professionals (4 Months).png",
    "NLP Professional": "Natural Language Processing Professional (4 Months).png",
    "Computer Vision Professional": "Computer Vision Professional (4 Months).png",
    "Deep Learning Professional": "Deep Learning Professional (4 Months).png"
  };

  const courseGraphic = courseGraphicMap[course.title];
  const imageSrc = courseGraphic
    ? `/coursegraphic/${courseGraphic}`
    : (course.image || "https://via.placeholder.com/600x300?text=Course+Image");

  const cleanTitle = course.title.replace(/12/g, "");

  return (
    <Link href={`/courses/${course.slug}`} className="block">
      <div className="group relative bg-black/90 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] h-full flex flex-col border border-gray-700">
        <div className="relative h-64 bg-black flex items-start justify-center p-0">
          <img
            src={imageSrc}
            alt={cleanTitle}
            loading="lazy"
            onError={(e) => { e.currentTarget.src = 'https://via.placeholder.com/600x300?text=Course+Image'; }}
            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-105 mt-0"
            style={{ display: 'block', margin: '0 auto' }}
          />
        </div>

        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-white mb-2 leading-snug break-words">{cleanTitle}</h3>
          <p className="text-sm text-gray-300 mb-4 break-words">{course.description}</p>

          <div className="mt-auto">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-yellow-400 font-bold text-base">{course.rating?.toFixed(1)}</span>
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-xs text-gray-400">({course.students?.toLocaleString()})</span>
            </div>

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
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const allCourses = useMemo(() => {
    const seen = new Set();
    return [...courses, ...shortCourses].filter((course) => {
      const key = String(course.slug || course.id || course.title || "").toLowerCase();
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, []);

  const filteredCourses = useMemo(() => {
    let results = allCourses;

    if (selectedCategory !== "all") {
      if (selectedCategory === "short") {
        results = results.filter(isShortCourse);
      } else {
        results = results.filter((course) => getUiCategory(course) === selectedCategory);
      }
    }

    if (selectedDuration !== "all") {
      results = results.filter((course) => getDurationMonths(course) === selectedDuration);
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
  }, [allCourses, selectedCategory, selectedDuration, searchQuery]);

  const handleCategoryChange = (id) => { setSelectedCategory(id); setShowAll(false); };
  const handleDurationChange = (id) => { setSelectedDuration(id); setShowAll(false); };
  const handleSearchChange = (val) => { setSearchQuery(val); setShowAll(false); };

  return (
    <div className="min-h-screen pt-20 bg-black text-white overflow-hidden">

      <section className="relative py-6 lg:py-10 lg:pb-20 px-6 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-12 items-center">

          <div className="w-full text-center lg:text-left lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 lg:mb-8">
              <span className="bg-[#FF40EB] bg-clip-text tracking-[3px] text-transparent">
                Building India's Next Generation of GenAI &amp; Prompt Engineering Leaders
              </span>
            </h2>
            <p className="text-base lg:text-xl text-gray-400 mb-6 lg:mb-10 leading-relaxed">
              Our curriculum is industry-driven and designed to bridge real hiring needs.
              You don't just learn concepts here — you build, deploy, and improve real-world
              AI systems used by startups and business teams.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 lg:gap-5 justify-center lg:justify-start">
              <Link
                href="?enroll=1"
                className="w-full sm:w-auto px-6 py-3 text-sm md:text-base bg-gradient-to-r from-[#FF40EB] to-white text-black font-bold rounded-lg shadow-lg shadow-[#FF40EB]/30 hover:shadow-xl hover:shadow-[#FF40EB]/50 transition-all duration-300 hover:-translate-y-0.5 text-center"
              >
                Enroll Now
              </Link>
              
              <a
                href="#all-programs"
                className="w-full sm:w-auto px-6 py-3 text-sm md:text-base border-2 border-[#FF40EB] text-[#FF40EB] font-bold rounded-lg bg-transparent hover:bg-[#FF40EB]/10 transition-all duration-300 text-center"
              >
                Explore Our Courses
              </a>
            </div>
          </div>

          <div className="w-full flex justify-center lg:order-1">
            <div
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              style={{ filter: 'drop-shadow(0 0 12px #ffffff49)' }}
            >
              <img
                src="/group/group_final.png"
                alt="NIGAPE Team"
                className="w-full h-[220px] sm:h-[360px] md:h-[460px] lg:h-[80vh] object-contain object-center"
              />
            </div>
          </div>

        </div>
      </section>

      <Marquee />

      <section id="all-programs" className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              AI Programs Built for Students, Graduates, and Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose your path in Generative AI and Prompt Engineering
            </p>
          </div>

          {/* ✅ UPDATED: Combined Search and Filter Bar */}
          <SearchFilterBar
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
            selectedDuration={selectedDuration}
            onSelectDuration={handleDurationChange}
            showFilters={showFilters}
            setShowFilters={setShowFilters}
          />

          <p className="text-center text-gray-400 text-sm mb-8">
            {filteredCourses.length} program{filteredCourses.length !== 1 ? "s" : ""} found
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 items-stretch">
            {filteredCourses.length > 0 ? (
              filteredCourses
                .slice(0, showAll ? filteredCourses.length : 6)
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))
            ) : (
              <div className="col-span-3 text-center py-16 text-gray-400">
                <p className="text-xl">No programs found matching your filters.</p>
                <button
                  onClick={() => { setSelectedCategory("all"); setSelectedDuration("all"); setSearchQuery(""); }}
                  className="mt-4 px-6 py-2 border border-[#FF40EB] text-[#FF40EB] rounded-lg hover:bg-[#FF40EB]/10 transition-all"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>

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

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}   