import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader.jsx";
import ProjectCard from "../components/ProjectCardHome.jsx";
import { projects } from "../data/project-info-home.jsx";

const categories = ["All", "Frontend", "Full-Stack", "Design"];

const HomeProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const introButton =
    "bg-transparent hover:bg-[var(--accent)] text-[var(--text-primary)] font-bold py-2 px-4 border border-[var(--text-primary)] hover:border-[var(--accent)] rounded transition-colors duration-300 ease-in-out text-center cursor-pointer rounded-full";

  return (
    <motion.section
      layout
      className="my-4 px-8 py-8 md:my-6 md:flex md:flex-col md:justify-between md:py-16"
      id="projects"
    >
      <div>
        <SectionHeader
          title="Featured Projects"
          subtitle="Recent work"
          className="mb-6 md:mb-10"
        />
        <div className="mb-6 flex items-center justify-center gap-3 md:mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`cursor-pointer rounded-full border px-4 py-2 text-sm whitespace-nowrap transition-colors duration-300 md:whitespace-normal ${
                activeFilter === cat
                  ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--text-primary)]"
                  : "border-[var(--border)] bg-transparent text-[var(--text-secondary)] hover:border-[var(--accent)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 items-stretch gap-6 md:min-h-[520px] md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects
              .filter((_, index) => [0, 3, 5].includes(index))
              .map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProjectCard {...project} />
                </motion.div>
              ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <motion.div className="mt-8 text-center md:mt-10 md:mt-12 md:flex-shrink-0">
        <Link className={introButton} to="/projects">
          View All Projects
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default HomeProjectsSection;
