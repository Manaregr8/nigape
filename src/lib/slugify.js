export const slugify = (raw = "") => {
  const fallback = "post";
  const base = raw
    .toString()
    .normalize("NFKD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  return base || fallback;
};

export const generateUniqueSlug = async (input, excludeId) => {
  // import Prisma client lazily so that merely loading the slugify helper
  // in non-database contexts (like static data loading) does not trigger
  // a runtime error when the client hasn't been generated yet.
  const prisma = (await import("@/lib/prisma")).default;

  const base = slugify(input);
  let candidate = base;
  let suffix = 1;

  while (true) {
    const match = await prisma.blog.findFirst({
      where: {
        slug: candidate,
        ...(excludeId ? { NOT: { id: excludeId } } : {}),
      },
      select: { id: true },
    });

    if (!match) {
      return candidate;
    }

    candidate = `${base}-${suffix}`;
    suffix += 1;
  }
};
