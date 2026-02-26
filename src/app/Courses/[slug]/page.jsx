import React from "react";
import CoursePage from "@/Courses/dynamicpage";
import { getCourseById, courses as allCourses } from "@/Data/data";

export default async function Page({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  // if we have a slug (or possibly numeric id) provided by the router,
  // attempt to resolve a course.  getCourseById will also check slug
  // values thanks to the changes in data.js.
  if (slug) {
    const course = getCourseById(slug);
    if (course) return <CoursePage course={course} />;
  }

  // Fallback: render a lightweight client loader that will read the slug
  // from the client router (useful when the server param is unexpectedly undefined).
  const ClientLoader = React.lazy(() => import("../ClientCourseLoader"));

  return (
    <React.Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading…</div>}>
      <ClientLoader availableCourses={allCourses.slice(0,20)} />
    </React.Suspense>
  );
}
