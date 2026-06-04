import Grid from "./Grid";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WorkExperienceCard = ({
  logo,
  title,
  company,
  type,
  duration,
  location,
  description,
  responsibilities = [],
  achievements = [],
  tags = [],
}) => {
  const [expanded, setExpanded] = useState(false);
  const [overflowCount, setOverflowCount] = useState(0);
  const containerRef = useRef(null);
  const measureRef = useRef(null);

  // Calculate how many tags overflow
  useEffect(() => {
    if (!containerRef.current || !measureRef.current || tags.length === 0)
      return;

    const calculate = () => {
      const containerWidth = containerRef.current.clientWidth;
      const tagElements = Array.from(measureRef.current.children);
      const gap = 8; // gap-2
      const plusTagWidth = 45; // estimated width of "+X" tag

      let currentWidth = 0;
      let visible = tags.length;

      for (let i = 0; i < tagElements.length; i++) {
        const tagWidth = tagElements[i].offsetWidth;
        const isLast = i === tagElements.length - 1;

        const widthWithTag = currentWidth + tagWidth;
        const widthWithTagAndPlus = widthWithTag + gap + plusTagWidth;

        if (isLast) {
          if (widthWithTag > containerWidth) {
            visible = i;
            break;
          }
        } else {
          if (widthWithTagAndPlus > containerWidth) {
            visible = i;
            break;
          }
        }
        currentWidth += tagWidth + gap;
      }

      setOverflowCount(tags.length - visible);
    };

    const resizeObserver = new ResizeObserver(calculate);
    resizeObserver.observe(containerRef.current);
    calculate();

    return () => resizeObserver.disconnect();
  }, [tags]);

  const visibleTags = expanded
    ? tags
    : tags.slice(0, tags.length - overflowCount);

  return (
    <div className="relative my-8 flex gap-4">
      {/* Vertical line - hidden on mobile */}
      <div className="relative hidden sm:block">
        <div className="absolute top-0 bottom-0 left-0 w-0.5 bg-(--accent) opacity-85" />
        <div
          className="sticky top-6 h-3.5 w-3.5 rounded-full border-2 border-(--bg-secondary) bg-(--accent)"
          style={{ marginLeft: "-7px" }}
        />
      </div>
      <div className="relative overflow-hidden rounded-2xl bg-(--bg-secondary) p-6">
        <Grid />
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-4 flex items-center gap-4">
            <img
              src={logo}
              alt={company}
              className="h-12 w-12 rounded-lg object-contain"
            />
            <div>
              <h3 className="text-xl font-bold text-(--text-primary)">
                {title}
              </h3>
              <p className="text-sm text-(--text-secondary)">
                <span className="font-semibold text-(--text-primary)">
                  {company}
                </span>{" "}
                · {type}
              </p>
              <p className="text-sm text-(--text-muted)">
                {duration} · {location}
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mb-4 text-sm text-(--text-secondary)">{description}</p>

          {/* Responsibilities */}
          {responsibilities.length > 0 && (
            <>
              <p className="py-2 text-lg font-bold text-(--text-primary)">
                Key Responsibilities:
              </p>
              <ul className="mb-4 flex list-inside list-disc flex-col gap-1 text-sm text-(--text-secondary)">
                {responsibilities.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {/* Achievements */}
          {achievements.length > 0 && (
            <>
              <p className="py-2 text-lg font-bold text-(--text-primary)">
                Achievements:
              </p>
              <ul className="mb-4 flex list-inside list-disc flex-col gap-1 text-sm text-(--text-secondary)">
                {achievements.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          )}

          {/* Tags */}
          {tags.length > 0 && (
            <div className="relative" ref={containerRef}>
              {/* Invisible measurement container */}
              <div
                ref={measureRef}
                aria-hidden="true"
                className="pointer-events-none invisible absolute top-0 left-0 flex gap-2 whitespace-nowrap"
              >
                {tags.map((tag, i) => (
                  <span
                    key={`measure-${i}`}
                    className="rounded-full border px-3 py-1 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Visible tags with animation */}
              <motion.div
                layout
                transition={{ layout: { duration: 0.3, ease: "easeOut" } }}
                className={`flex gap-2 ${expanded ? "flex-wrap" : "overflow-hidden"}`}
              >
                <AnimatePresence mode="popLayout">
                  {visibleTags.map((tag) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      layout
                      className="shrink-0 rounded-full border border-(--border) bg-(--bg-tertiary) px-3 py-1 text-xs whitespace-nowrap text-(--text-secondary)"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </AnimatePresence>

                {overflowCount > 0 && !expanded && (
                  <motion.button
                    key="expand-btn"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    layout
                    onClick={() => setExpanded(true)}
                    className="cursor-pointer rounded-full border border-(--border) bg-(--bg-tertiary) px-3 py-1 text-xs whitespace-nowrap text-(--text-secondary) transition-colors duration-300 hover:border-(--accent) md:whitespace-normal"
                  >
                    +{overflowCount}
                  </motion.button>
                )}

                {expanded && overflowCount > 0 && (
                  <motion.button
                    key="collapse-btn"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    layout
                    onClick={() => setExpanded(false)}
                    className="shrink-0 cursor-pointer rounded-full border border-(--accent) bg-(--accent) px-3 py-1 text-xs whitespace-nowrap text-(--button-primary) transition-colors duration-300 hover:border-(--accent-hover) hover:bg-(--accent-hover)"
                  >
                    Show less
                  </motion.button>
                )}
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceCard;
