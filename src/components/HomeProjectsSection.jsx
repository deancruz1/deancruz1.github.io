import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader.jsx";
import ProjectCard from "../components/ProjectCardHome.jsx";
import { projects } from "../data/project-info-home.jsx";

const featuredProjects = projects.filter((project) => project.featured);

const HomeProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(0);
  const project = featuredProjects[activeProject];

  const introButton =
    "bg-transparent hover:bg-[var(--accent)] text-[var(--text-primary)] font-bold py-2 px-4 border border-[var(--text-primary)] hover:border-[var(--accent)] rounded transition-colors duration-300 ease-in-out text-center cursor-pointer rounded-full hover:text-(--button-primary)";

  return (
    <section
      className="my-4 px-8 py-8 md:my-6 md:flex md:flex-col md:justify-between md:py-16 home-section"
      id="projects"
    >
      <div>
        <SectionHeader
          number="04"
          title="Featured Projects"
          subtitle="Three apps I built"
          className="mb-6 md:mb-10"
        />

        <div
          role="group"
          aria-label="Projects"
          className="mb-6 grid grid-cols-3 gap-3 md:gap-6"
        >
          {featuredProjects.map((project, i) => (
            <button
              key={project.title}
              type="button"
              aria-pressed={activeProject === i}
              onClick={() => setActiveProject(i)}
              className={`cursor-pointer rounded-2xl border bg-(--bg-secondary) p-3 text-left transition-[border-color,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) md:p-4 ${
                activeProject === i
                  ? "border-(--accent) shadow-[0_0_20px_var(--shadow-accent)]"
                  : "border-transparent hover:border-(--accent)"
              }`}
            >
              <span className="block font-bold text-(--text-primary) md:text-lg">
                {project.title}
              </span>
              <span className="block text-xs text-(--text-secondary) md:text-sm">
                {project.category}
              </span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 text-center md:mt-12 md:shrink-0">
        <Link className={introButton} to="/projects">
          View All Projects
        </Link>
      </div>
    </section>
  );
};

export default HomeProjectsSection;
