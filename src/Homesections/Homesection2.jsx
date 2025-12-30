import Link from 'next/link';

export default function HomeSection2() {
  const benefits = [
    {
      keyword: 'Skills',
      description:
        'Master AI concepts (machine learning, deep learning, NLP, computer vision) and apply them through prompt engineering and real AI system design.',
    },
    {
      keyword: 'Confidence',
      description:
        'By solving real problems and demoing projects, you’ll know you can innovate with AI in any workplace.',
    },
    {
      keyword: 'Exposure',
      description:
        'Work on team projects that replicate actual R&D cycles. Receive feedback from AI professionals. Build an AI portfolio that stands out.',
    },
    {
      keyword: 'Clarity & Readiness',
      description:
        'With guidance from our mentors and counsellors, you’ll identify the AI roles that fit your strengths and have the resume and interview practice to land them.',
    },
  ];

  return (
    <section className="bg-black text-white py-20 sm:py-28 lg:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6 bg-gradient-to-r from-[#FF40EB] to-[#9234eb] bg-clip-text text-transparent">
            What You Will Gain
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At NIGAPE, you don't just learn theory – you get results. Graduates emerge with:
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 mb-16">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col border-l-4 border-[#FF40EB] pl-6 transition-all duration-300 hover:border-pink-700"
            >
              <h3 className="text-2xl md:text-3xl font-black mb-3 text-[#FF40EB] group-hover:text-pink-700 transition-colors">
                {item.keyword}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-gray-400 italic text-lg mb-8">
            Ready to transform? Take the first step – explore our courses and launch your AI journey.
          </p>
          <Link href="/courses" passHref>
            <button className="px-8 py-4 bg-[#FF40EB] hover:bg-pink-600 text-white font-bold rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-[#FF40EB]/30 hover:shadow-xl transform hover:-translate-y-0.5">
              Explore Courses
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}