// TestimonialsSection.tsx
import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "Before <span style='color:#9234eb; font-weight:600'>NIGAPE</span>, I had just finished school and had zero coding experience. Within weeks of joining, I was building my first AI chatbot project. Today I’m leading an AI project at a startup. The career clarity and confidence I gained here is unbelievable.",
      name: "Rahul",
      role: "Class 12 graduate",
      avatarUrl: "https://i.pravatar.cc/40?img=1",
      linkedinUrl: "#",
    },
    {
      quote:
        "I was an engineer stuck in a non-tech role. <span style='color:#9234eb; font-weight:600'>NIGAPE</span>’s program turned my career around: I now work as a Data Scientist, creating NLP solutions. The real projects and corporate-style learning made all the difference.",
      name: "Priya",
      role: "Working Professional",
      avatarUrl: "https://i.pravatar.cc/40?img=2",
      linkedinUrl: "#",
    },
    {
      quote:
        "<span style='color:#9234eb; font-weight:600'>NIGAPE</span>’s mentorship gave me clarity. I went from being confused about AI jobs to having a portfolio of completed AI projects and a clear path: now I’m happily placed at a tech company working on Computer Vision.",
      name: "Ankit",
      role: "College Student",
      avatarUrl: "https://i.pravatar.cc/40?img=3",
      linkedinUrl: "#",
    },
  ];

  return (
    <section className="py-16 h-screen px-4 bg-black">
      <div className="max-w-6xl mx-auto my-10 ">
        <h2 className="text-3xl md:text-5xl font-bold text-[#FF40EB] text-center pb-20">
          Testimonials 
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="relative w-full max-w-md mx-auto">
              {/* Background layers for depth */}
              <div className="absolute inset-0 bg-white rounded-xl shadow-lg opacity-30 transform translate-x-2 translate-y-2"></div>
              <div className="absolute inset-0 bg-white rounded-xl shadow-lg opacity-50 transform translate-x-1 translate-y-1"></div>

              {/* Main card */}
              <div className="relative bg-white rounded-xl shadow-xl p-6 z-10">
                {/* Top tab */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-white rounded-t-lg border border-gray-200 flex items-center justify-center">
                  <span className="text-lg font-bold text-[#9234eb]">NIGAPE</span>
                </div>

                {/* Quote mark in purple */}
                <div className="text-3xl text-[#9234eb] mb-4">“</div>

                {/* Quote text with highlighted NIGAPE */}
                <p
                  className="text-gray-700 leading-relaxed mb-6"
                  dangerouslySetInnerHTML={{ __html: t.quote }}
                />

                {/* Footer with avatar & LinkedIn */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-3">
                    <img
                      src={t.avatarUrl.trim()} // Fixed extra spaces in URL
                      alt={t.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      <p className="text-sm text-gray-500">{t.role}</p>
                    </div>
                  </div>

                  {/* LinkedIn icon */}
                  <a
                    href={t.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-[#9234eb] transition-colors"
                    aria-label={`${t.name} on LinkedIn`}
                  >
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.55v-5.895c0-1.405-.027-3.199-1.95-3.199-1.95 0-2.256 1.514-2.256 3.089v6.005H5.59V8.91h3.49v1.664h.05c1.128-1.91 3.089-2.89 5.02-2.89 5.338 0 6.33 3.526 6.33 8.124v7.644zM2.59 0h3.55v11.49H2.59V0z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;