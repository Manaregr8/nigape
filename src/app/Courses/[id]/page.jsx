import React from "react";
import CoursePage from "@/Courses/dynamicpage";
import { getCourseById, courses as allCourses } from "@/Data/data";

export default async function Page({ params }) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  // If params.id is available (normal server render), use it.
  if (id) {
    const course = getCourseById(id);
    if (course) return <CoursePage course={course} />;
  }

  // Fallback: render a lightweight client loader that will read the param
  // from the client router (useful when params.id is unexpectedly undefined).
  const ClientLoader = React.lazy(() => import("../ClientCourseLoader"));

  return (
    <React.Suspense fallback={<div className="min-h-screen bg-black text-white flex items-center justify-center">Loading…</div>}>
      <ClientLoader availableCourses={allCourses.slice(0,20)} />
    </React.Suspense>
  );
}
