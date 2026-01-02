import Head from 'next/head';
import Image from 'next/image';
import { FiClock, FiUser, FiStar } from 'react-icons/fi';

const CoursePage = ({ course }) => {
  if (!course) {
    return <div className="min-h-screen bg-black text-white flex items-center justify-center">Course not found</div>;
  }

  return (
    <>
      <Head>
        <title>{course.title} | IIDAD Academy</title>
        <meta name="description" content={course.description} />
      </Head>

      <div className="min-h-screen bg-black text-white font-pixel">
        {/* Header */}
        <header className="fixed top-0 w-full backdrop-blur-md bg-gradient-to-r from-purple-900/70 to-indigo-900/70 border-b border-purple-500/30 z-50">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">I</span>
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                IIDAD Academy
              </h1>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-24 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="mb-12">
              <div className="relative rounded-2xl overflow-hidden border border-purple-700/50 bg-gradient-to-br from-gray-900 to-black">
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
                <span className="inline-block px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full text-sm">
                  {course.level.charAt(0).toUpperCase() + course.level.slice(1)} • {course.mode}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 to-lavender text-transparent bg-clip-text">
                  {course.title}
                </h1>
                <p className="text-gray-300 mt-2">{course.description}</p>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="flex flex-wrap gap-4 mb-10 text-sm text-gray-400">
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

            {/* What You'll Learn */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">What You’ll Learn</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.whatYouWillLearn.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Curriculum */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">Curriculum</h2>
              <div className="space-y-4">
                {course.modulesByMonth.map((mod, i) => (
                  <div key={i} className="bg-gray-900/50 border border-purple-800/40 rounded-lg p-5">
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-lg text-purple-200">Month {mod.month}: {mod.title}</h3>
                      <span className="text-sm text-gray-400">{mod.hours} hrs</span>
                    </div>
                    <ul className="mt-3 text-gray-300 space-y-1">
                      {mod.topics.map((topic, j) => (
                        <li key={j} className="text-sm">• {topic}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Instructor */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">Instructor</h2>
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-purple-600">
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
                  <p className="text-purple-300 text-sm">{course.instructor.title}</p>
                  <p className="text-gray-400 text-sm mt-1">{course.instructor.bio}</p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {course.instructor.credentials.map((cred, i) => (
                      <span key={i} className="text-xs px-2 py-1 bg-purple-900/60 rounded">
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Includes */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4 text-purple-300">This Course Includes</h2>
              <div className="flex flex-wrap gap-2">
                {course.includes.map((item, i) => (
                  <span key={i} className="px-3 py-1.5 bg-gradient-to-r from-purple-800/60 to-indigo-800/60 rounded-full text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default CoursePage;