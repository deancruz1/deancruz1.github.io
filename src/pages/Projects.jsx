import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCardGrid from "../components/ProjectCardGrid";
import { projects } from "../data/project-info-home.jsx";
import { useLayoutEffect, useState } from "react";

const featuredFirst = [...projects].sort(
  (a, b) => Number(b.featured) - Number(a.featured),
);
const categories = ["All", "Full-Stack", "Frontend", "Design"].filter(
  (cat) => cat === "All" || projects.some((p) => p.category === cat),
);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const visibleProjects =
    activeFilter === "All"
      ? featuredFirst
      : featuredFirst.filter((p) => p.category === activeFilter);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Dean Cruz - Projects</title>
        <meta name="description" content="A collection of projects by Dean Cruz — full-stack, frontend, and design." />
        <meta property="og:title" content="Dean Cruz - Projects" />
        <meta property="og:description" content="A collection of projects by Dean Cruz — full-stack, frontend, and design." />
        <meta property="og:image" content="https://deancruz1.github.io/preview.webp" />
        <meta property="og:url" content="https://deancruz1.github.io/projects" />
        <meta name="twitter:title" content="Dean Cruz - Projects" />
        <meta name="twitter:description" content="A collection of projects by Dean Cruz — full-stack, frontend, and design." />
        <meta name="twitter:image" content="https://deancruz1.github.io/preview.webp" />
      </Helmet>

      <main id="main-content">
        <section className="min-h-screen pt-24 pb-12 px-5 lg:pt-32 lg:pb-16 relative">
          <div className="mt-3 mb-8">
            <p className="text-xs font-bold tracking-[0.18em] text-(--accent) uppercase md:text-sm">
              05 · Frontend, full-stack, design
            </p>
            <h1 className="mt-2 text-5xl font-bold tracking-tight text-(--text-primary) md:text-7xl">
              All Projects
            </h1>
          </div>

          <div
            role="group"
            aria-label="Filter by category"
            className="mb-8 flex flex-wrap items-center gap-2 sm:gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={activeFilter === cat}
                onClick={() => setActiveFilter(cat)}
                className={`cursor-pointer rounded-full border px-3 py-2 text-sm whitespace-nowrap sm:px-4 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) ${
                  activeFilter === cat
                    ? "border-(--accent) bg-(--accent) text-(--button-primary)"
                    : "border-(--border) bg-(--bg-secondary) text-(--text-secondary) hover:border-(--accent)"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleProjects.map((project) => (
                <motion.div
                  key={project.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                >
                  <ProjectCardGrid {...project} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
