import Head from 'next/head';
import Image from 'next/image';
import { FiClock, FiUser, FiStar } from 'react-icons/fi';

const CoursePage = ({ course }) => {
  if (!course) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Course not found
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{course.title} | NIGAPE</title>
        <meta name="description" content={course.description} />
      </Head>

      <div className="min-h-screen bg-black text-white font-pixel">
        <main className="pt-24 pb-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content — Left 2/3 */}
            <div className="lg:col-span-2 space-y-12">
              {/* Hero Section */}
              <div>
                <div className="relative rounded-2xl overflow-hidden border border-[#FF40EB]/50 bg-gradient-to-br from-gray-900 to-black">
                  <Image
                    src={course.image}
                    alt={course.title}
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
                <div className="mt-6 space-y-2">
                  <span className="inline-block px-3 py-1 bg-[#FF40EB]/20 text-[#FF40EB] rounded-full text-sm">
                    {course.level.charAt(0).toUpperCase() + course.level.slice(1)} • {course.mode}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FF40EB] to-pink-300 text-transparent bg-clip-text">
                    {course.title}
                  </h1>
                  <p className="text-gray-300 mt-2">{course.description}</p>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1">
                  <FiClock /> <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiUser /> <span>{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center gap-1">
                  <FiStar className="text-yellow-400" /> <span>{course.rating} rating</span>
                </div>
              </div>

              {/* What You’ll Learn */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-[#FF40EB]">What You’ll Learn</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.whatYouWillLearn.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#FF40EB] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* CURRICULUM — UPDATED TO MATCH REFERENCE IMAGE */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-[#FF40EB]">Curriculum</h2>
                <div className="space-y-4">
                  {course.modulesByMonth.map((mod, i) => (
                    <div
                      key={i}
                      className="group relative border-t border-gray-700 pt-4 first:border-t-0"
                    >
                      {/* Numbered Label */}
                      <div className="absolute left-0 top-0 w-10 h-10 flex items-center justify-center text-sm text-gray-400 group-hover:text-[#FF40EB] transition-colors">
                        {String(i + 1).padStart(2, '0')}
                      </div>

                      {/* Content Area */}
                      <div className="ml-14 pl-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              Month {mod.month}: {mod.title}
                            </h3>
                            <p className="text-sm text-gray-400 mt-1">{mod.hours} hrs</p>
                          </div>
                        </div>

                        {/* Topics List */}
                        <ul className="mt-3 text-sm text-gray-300 space-y-1 pl-2">
                          {mod.topics.map((topic, j) => (
                            <li key={j} className="flex items-start gap-2">
                              <span className="text-[#FF40EB] mt-1">•</span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Instructor */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-[#FF40EB]">Instructor</h2>
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#FF40EB]">
                    <Image
                      src={course.instructor.image}
                      alt={course.instructor.name}
                      width={80}
                      height={80}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{course.instructor.name}</h3>
                    <p className="text-[#FF40EB] text-sm">{course.instructor.title}</p>
                    <p className="text-gray-400 text-sm mt-1">{course.instructor.bio}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {course.instructor.credentials.map((cred, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-[#FF40EB]/20 rounded"
                        >
                          {cred}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* Includes */}
              <section>
                <h2 className="text-2xl font-bold mb-4 text-[#FF40EB]">This Course Includes</h2>
                <div className="flex flex-wrap gap-2">
                  {course.includes.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-[#FF40EB]/20 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Sticky Sidebar Card — Right 1/3 (Desktop only) */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 hidden lg:block">
                <div className="bg-gray-900/70 backdrop-blur-sm border border-[#FF40EB]/40 rounded-2xl p-6 space-y-5">
                  {/* Small Course Image */}
                  <div className="relative rounded-xl overflow-hidden border border-[#FF40EB]/50">
                    <Image
                      src={course.image}
                      alt={course.title}
                      width={300}
                      height={180}
                      className="w-full h-auto object-cover"
                    />
                  </div>

                  <h3 className="text-xl font-bold text-[#FF40EB]">Course Info</h3>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Level</span>
                      <span className="text-white capitalize">{course.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Mode</span>
                      <span className="text-white">{course.mode}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Duration</span>
                      <span className="text-white">{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Students</span>
                      <span className="text-white">{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Rating</span>
                      <div className="flex items-center gap-1">
                        <FiStar className="text-yellow-400" />
                        <span className="text-white">{course.rating}</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full py-3 mt-2 bg-gradient-to-r from-[#FF40EB] to-pink-500 rounded-lg font-bold text-black hover:opacity-90 transition-opacity">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CoursePage;