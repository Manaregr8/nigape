import { courses } from "@/Data/data";

export default function sitemap() {
  const baseUrl = "https://nigape.com";

  const staticRoutes = [
    "",
    "/About",
    "/courses",
    "/blog",
    "/contact-us",
    "/privacy-policy",
    "/terms-of-service",
    "/terms-and-conditions",
    "/disclaimer",
    "/sitemap.html",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const courseEntries = courses.map((course) => ({
    url: `${baseUrl}/courses/${course.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...courseEntries];
}
