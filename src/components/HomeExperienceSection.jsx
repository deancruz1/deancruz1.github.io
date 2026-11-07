import { useEffect, useRef, useState } from "react";
import { animate, AnimatePresence, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { workExperiences } from "../data/work-experience.js";
import SectionHeader from "../components/SectionHeader.jsx";
import WorkExperienceCard from "../components/WorkExperienceCard.jsx";

// The old card fading out (0.2s), then the height change (0.3s), with slack
const ROLE_SWITCH_MS = 600;

const HomeExperienceSection = () => {
  const [activeRole, setActiveRole] = useState(0);
  const role = workExperiences[activeRole];
  // The cards differ in height. While switching, the space glides from one
  // height to the other; the rest of the time the card sizes itself.
  const [switching, setSwitching] = useState(false);
  const switchTimer = useRef(null);
  const [cardRef, { height: cardHeight }] = useMeasure();
  // Height of the space the card sits in: follows the card exactly, except
  // during a switch, when it glides to the new card. The measurement is 0
  // for a moment during a swap, which is ignored.
  const cardBox = useMotionValue("auto");

  useEffect(() => {
    if (!cardHeight) return;
    if (!switching || cardBox.get() === "auto") {
      cardBox.set(cardHeight);
      return;
    }
    const controls = animate(cardBox, cardHeight, {
      duration: 0.3,
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [cardHeight, switching, cardBox]);

  useEffect(() => () => clearTimeout(switchTimer.current), []);

  const selectRole = (i) => {
    if (i === activeRole) return;
    setActiveRole(i);
    setSwitching(true);
    clearTimeout(switchTimer.current);
    switchTimer.current = setTimeout(() => setSwitching(false), ROLE_SWITCH_MS);
  };

  return (
    <section className="my-4 px-8 py-8 md:my-6 md:py-16 home-section" id="experience">
      <SectionHeader
        number="03"
        title="Work experience"
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
            onClick={() => selectRole(i)}
            className={`flex cursor-pointer items-center gap-4 rounded-2xl border bg-(--bg-secondary) p-4 text-left transition-[border-color,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) ${
              activeRole === i
                ? "border-(--accent) shadow-[0_0_20px_var(--shadow-accent)]"
                : "border-transparent hover:border-(--accent)"
            }`}
          >
            <img
              src={exp.logo}
              alt=""
              loading="lazy"
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

      <motion.div
        style={{ height: cardBox }}
        className={switching ? "overflow-hidden" : ""}
      >
        <div ref={cardRef}>
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
        </div>
      </motion.div>
    </section>
  );
};

export default HomeExperienceSection;
