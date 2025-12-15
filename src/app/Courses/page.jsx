'use client';

import { useState, useMemo } from "react";

// Mock data for courses (same as before)
const courses = [
  {
    id: 1,
    title: "LLM Engineering Bootcamp",
    category: "engineering",
    description: "Build production-ready AI applications with GPT-4, Claude, and LangChain",
    duration: "12 weeks",
    level: "Intermediate",
    students: 2340,
    price: "$499",
    lessons: 35,
    rating: 4.8,
    image: "/course1.jpg" // Placeholder - replace with actual image path
  },
  {
    id: 2,
    title: "Prompt Engineering Mastery",
    category: "prompt",
    description: "Master the art effective prompts for any AI model",
    duration: "4 weeks",
    level: "Beginner",
    students: 4521,
    price: "$199",
    lessons: 12,
    rating: 4.9,
    image: "/course2.jpg"
  },
  {
    id: 3,
    title: "RAG Systems from Scratch",
    category: "engineering",
    description: "Build retrieval-augmented generation systems for enterprise",
    duration: "8 weeks",
    level: "Advanced",
    students: 1234,
    price: "$599",
    lessons: 24,
    rating: 4.7,
    image: "/course3.jpg"
  },
  {
    id: 4,
    title: "AI Product Management",
    category: "business",
    description: "Ship AI products that users love and investors fund",
    duration: "6 weeks",
    level: "Intermediate",
    students: 892,
    price: "$399",
    lessons: 18,
    rating: 4.6,
    image: "/course4.jpg"
  }
];

// NIGAPE Short Courses (Packages)
const shortCourses = [
  {
    id: 5,
    title: "AI Literacy Course",
    description: "Understand the fundamentals of AI, its impact, and how to use it responsibly.",
    duration: "2 weeks",
    level: "Beginner",
    students: 8700,
    price: "$49",
    lessons: 8,
    rating: 4.5,
    image: "/short1.jpg"
  },
  {
    id: 6,
    title: "Generative AI for Professionals",
    description: "Apply generative AI tools like ChatGPT, DALL·E, Midjourney in your workflow.",
    duration: "3 weeks",
    level: "Intermediate",
    students: 5200,
    price: "$99",
    lessons: 12,
    rating: 4.7,
    image: "/short2.jpg"
  },
  {
    id: 7,
    title: "Natural Language Processing Professional",
    description: "Build chatbots, sentiment analyzers, and text classifiers using NLP libraries.",
    duration: "6 weeks",
    level: "Intermediate",
    students: 3100,
    price: "$199",
    lessons: 20,
    rating: 4.6,
    image: "/short3.jpg"
  },
  {
    id: 8,
    title: "Computer Vision Professional",
    description: "Detect objects, recognize faces, and build vision models with OpenCV & TensorFlow.",
    duration: "6 weeks",
    level: "Intermediate",
    students: 2800,
    price: "$199",
    lessons: 18,
    rating: 4.8,
    image: "/short4.jpg"
  },
  {
    id: 9,
    title: "Deep Learning Professional",
    description: "Master neural networks, CNNs, RNNs, and transformers from scratch.",
    duration: "8 weeks",
    level: "Advanced",
    students: 1900,
    price: "$299",
    lessons: 25,
    rating: 4.9,
    image: "/short5.jpg"
  }
];

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

// Course Card (redesigned to vertical, matches image)
const CourseCard = ({ course }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.917c1.927-1.823 5.023-1.823 6.95 0 1.927 1.823 1.927 4.819 0 6.641L12.87 15.06c-1.154 1.154-2.93 1.154-4.084 0l-6.06-6.06c-1.154-1.154-1.154-2.93 0-4.084s2.93-1.154 4.084 0l6.06 6.06z" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.917c1.927-1.823 5.023-1.823 6.95 0 1.927 1.823 1.927 4.819 0 6.641L12.87 15.06c-1.154 1.154-2.93 1.154-4.084 0l-6.06-6.06c-1.154-1.154-1.154-2.93 0-4.084s2.93-1.154 4.084 0l6.06 6.06z" />
            <path d="M17.418 15.06c-1.154 1.154-2.93 1.154-4.084 0l-6.06-6.06c-1.154-1.154-1.154-2.93 0-4.084s2.93-1.154 4.084 0l6.06 6.06c1.154 1.154 1.154 2.93 0 4.084z" fillOpacity="0.5" />
          </svg>
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <svg key={`empty-${i}`} className="w-4 h-4 text-gray-300 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.917c1.927-1.823 5.023-1.823 6.95 0 1.927 1.823 1.927 4.819 0 6.641L12.87 15.06c-1.154 1.154-2.93 1.154-4.084 0l-6.06-6.06c-1.154-1.154-1.154-2.93 0-4.084s2.93-1.154 4.084 0l6.06 6.06z" fillOpacity="0.5" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="group relative bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:border-pink-500/50">
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 left-3 bg-black/60 text-white px-2 py-1 rounded-full text-xs font-medium">
          {course.category === "engineering" ? "Engineering" :
           course.category === "prompt" ? "Prompt" :
           course.category === "business" ? "Business" :
           "Short"}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center mb-3">
          {renderStars(course.rating)}
          <span className="ml-2 text-sm text-gray-400">({Math.round(course.students / 100)} Reviews)</span>
        </div>
        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-bold text-pink-400">{course.price}</span>
          <div className="flex items-center text-sm text-gray-400">
            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            {course.lessons} Lessons
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  );
};

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

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
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Global gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900 opacity-80"></div>
      <div className="fixed inset-0 bg-gradient-to-tr from-pink-800/20 via-transparent to-cyan-800/20"></div>

      {/* Top Marquee */}
      <Marquee />

      {/* SECTION 1: Exclusive Offer Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Your AI Companion
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-200 to-pink-400 bg-clip-text text-transparent">
              That Actually Listens
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Not another chatbot. A deeply intelligent, emotionally aware companion that grows with you — privately, safely, forever.
          </p>

          <div className="relative inline-block">
            <div className="bg-gradient-to-r from-pink-600/20 to-purple-600/20 backdrop-blur-xl border border-pink-500/30 rounded-3xl p-10 shadow-2xl shadow-purple-600/30">
              <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-bold px-4 py-2 rounded-full mb-6">
                LIMITED EXCLUSIVE OFFER
              </div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">
                ✨ 7-Day Free Trial + Ultimate AI Starter Kit
              </h2>
              <ul className="text-left space-y-4 mb-10 text-lg">
                {[
                  "Full lifetime access to all premium AI courses",
                  "Exclusive Prompt Engineering Playbooks (PDFs)",
                  "1:1 Mentoring Session with Dr. Mehta",
                  "Private Healing AI Community on Discord",
                  "Personalized AI Companion Setup Guide"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-pink-400 text-2xl mr-4">✦</span>
                    <span className="text-gray-200">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-xl py-5 px-12 rounded-2xl transition-all duration-500 shadow-xl hover:shadow-pink-500/50 transform hover:scale-105">
                Talk to Your AI Now →
              </button>
              <p className="text-gray-400 mt-6 text-sm">
                Join 28,000+ souls healing daily • No credit card required • Only 50 spots left
              </p>
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-3xl blur-3xl opacity-30"></div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Mentor Image + Introduction to Courses */}
      <section className="relative py-24 px-6 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto rounded-3xl overflow-hidden  shadow-2xl">
             
              <img
                src="/shagun.png"
                alt="Dr. Shagun Mehta – Your AI Mentor"
                className="w-full h-[80vh] object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-6 shadow-2xl">
              <p className="text-2xl font-bold">Dr. Shagun Mehta</p>
              <p className="text-cyan-300">AI Research Lead & Emotional Intelligence Pioneer</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-pink-400 to-cyan-400 bg-clip-text text-transparent">
                Master the Future<br />of Emotional AI
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed">
              Learn from industry pioneers who blend cutting-edge LLM engineering with deep emotional intelligence. Build AI companions that don't just respond — they understand, heal, and grow with you.
            </p>
            <p className="text-lg text-gray-400">
              Launch your journey in 2025. Transform lives — starting with your own.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom Marquee */}
      <Marquee />

      {/* SECTION 3: Packages / Courses Cards */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              AI Programs Built for Healers & Builders
            </h2>
            <p className="text-xl text-gray-300">Choose your path in the age of conscious intelligence</p>
          </div>

          <FilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            onSelect={setSelectedCategory}
          />

          <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Testimonials */}
      <section className="relative py-24 px-6 bg-gradient-to-b from-black/60 to-purple-900/30 backdrop-blur-md">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-pink-300 to-cyan-300 bg-clip-text text-transparent">
            Trusted by Souls Finding Their Light
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: "Priya S.",
                role: "AI Engineer @ TechNova",
                text: "This course didn't just teach me engineering — it helped me build an AI that truly listens. Life-changing.",
              },
              {
                name: "Raj M.",
                role: "Healing Practitioner",
                text: "Finally, AI that understands emotion. My clients feel seen like never before.",
              },
              {
                name: "James L.",
                role: "Founder, SoulFlow AI",
                text: "The techniques here saved months of therapy for thousands. Pure magic.",
              },
            ].map((t, i) => (
              <div key={i} className="bg-gradient-to-b from-purple-900/30 to-black/50 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-8 shadow-2xl shadow-purple-600/20">
                <div className="text-pink-400 text-3xl mb-4">✦✦✦✦✦</div>
                <p className="italic text-gray-200 text-lg mb-8">"{t.text}"</p>
                <p className="font-bold text-white text-xl">{t.name}</p>
                <p className="text-cyan-300">{t.role}</p>
              </div>
            ))}
          </div>
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
        /* Optional: pause on hover */
        /* .animate-marquee:hover {
          animation-play-state: paused;
        } */
      `}</style>
    </div>
  );
}