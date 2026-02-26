"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import CoursePage from "@/Courses/dynamicpage";
import { getCourseById } from "@/Data/data";

export default function ClientCourseLoader({ availableCourses = [] }) {
  const params = useParams();
  const router = useRouter();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const slug = params?.slug;
    if (!slug) return;
    const found = getCourseById(slug);
    if (found) {
      setCourse(found);
      return;
    }

    // If not found maybe the slug was actually a number string
    const maybeNum = parseInt(slug, 10);
    if (!Number.isNaN(maybeNum)) {
      const foundNum = getCourseById(maybeNum);
      if (foundNum) setCourse(foundNum);
    }
  }, [params]);

  if (!params?.slug) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="max-w-3xl bg-gray-900/60 rounded-lg p-6 border border-yellow-500">
          <h2 className="text-2xl font-bold mb-2">Missing course slug</h2>
          <p className="text-sm text-gray-300">No slug in route params. Try navigating directly or check the link.</p>
          <div className="mt-4">
            <button className="px-4 py-2 bg-purple-600 rounded" onClick={() => router.push('/Courses')}>Back to Courses</button>
          </div>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="max-w-3xl bg-gray-900/60 rounded-lg p-6 border border-red-500">
          <h2 className="text-2xl font-bold mb-2">Course not found</h2>
          <p className="text-sm text-gray-300">Tried slug: {String(params.slug)}</p>
          <div className="mt-4 text-sm text-gray-300">
            <p className="font-semibold mb-2">Available slugs (first 10):</p>
            <ul className="list-disc list-inside">
              {availableCourses.slice(0,10).map((c) => (
                <li key={c.slug}>{c.slug} — {c.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return <CoursePage course={course} />;
}
