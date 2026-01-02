// components/CourseCard.jsx
import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <Link href={`/Courses/${course.id}`} className="block group">
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full">
        {/* Optional: Course Image */}
        <div className="h-40 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
          <span className="text-white text-lg font-bold text-center px-4">{course.title}</span>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-start mb-3">
            <span
              className={`text-xs px-2.5 py-1 rounded-full ${
                course.level === "Beginner"
                  ? "bg-green-100 text-green-800"
                  : course.level === "Intermediate"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-purple-100 text-purple-800"
              }`}
            >
              {course.level}
            </span>
            <span className="text-lg font-bold text-indigo-700">${course.price}</span>
          </div>

          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{course.description}</p>

          <div className="flex justify-between text-sm text-gray-500">
            <span>📚 {course.duration}</span>
            <span>⭐ {course.rating} ({course.students} students)</span>
          </div>

          <div className="mt-4">
            <span className="text-indigo-600 font-medium group-hover:underline">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}