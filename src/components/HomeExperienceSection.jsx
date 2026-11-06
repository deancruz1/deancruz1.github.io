import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { workExperiences } from "../data/work-experience.js";
import SectionHeader from "../components/SectionHeader.jsx";
import WorkExperienceCard from "../components/WorkExperienceCard.jsx";

const HomeExperienceSection = () => {
  const [activeRole, setActiveRole] = useState(0);
  const role = workExperiences[activeRole];

  return (
    <section className="my-4 px-8 py-8 md:my-6 md:py-16 home-section" id="experience">
      <SectionHeader
        number="03"
        title="Work Experience"
        subtitle="Where I've worked"
        className="mb-6 md:mb-10"
      />
      <div
        role="group"
        aria-label="Roles"
        className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {workExperiences.map((exp, i) => (
          <button
            key={exp.company}
            type="button"
            aria-pressed={activeRole === i}
            onClick={() => setActiveRole(i)}
            className={`flex cursor-pointer items-center gap-4 rounded-2xl border bg-(--bg-secondary) p-4 text-left transition-[border-color,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) ${
              activeRole === i
                ? "border-(--accent) shadow-[0_0_20px_var(--shadow-accent)]"
                : "border-transparent hover:border-(--accent)"
            }`}
          >
            <img
              src={exp.logo}
              alt=""
              className="h-12 w-12 shrink-0 rounded-lg object-contain"
            />
            <span className="min-w-0">
              <span className="block text-lg font-bold text-(--text-primary)">
                {exp.title}
              </span>
              <span className="block text-sm text-(--text-secondary)">
                {exp.company}
              </span>
              <span className="block text-sm text-(--text-muted)">
                {exp.duration}
              </span>
            </span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={role.company}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
        >
          <WorkExperienceCard {...role} />
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HomeExperienceSection;
