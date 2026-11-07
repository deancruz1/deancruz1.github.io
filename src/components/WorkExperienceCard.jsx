import Grid from "./Grid";
import { useState, useRef, useEffect } from "react";
import { animate, motion, AnimatePresence, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

const WorkExperienceCard = ({
  type,
  location,
  summary,
  highlights = [],
  tags = [],
}) => {
  const [expanded, setExpanded] = useState(false);
  const [activeHighlight, setActiveHighlight] = useState(0);
  const [overflowCount, setOverflowCount] = useState(0);
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const [detailRef, { height: detailHeight }] = useMeasure();
  // Height of the detail text area: natural until first measured, then it
  // glides between the texts. The measurement is 0 for a moment during a
  // swap, which is ignored.
  const detailBox = useMotionValue("auto");

  useEffect(() => {
    if (!detailHeight) return;
    if (detailBox.get() === "auto") {
      detailBox.set(detailHeight);
      return;
    }
    const controls = animate(detailBox, detailHeight, {
      duration: 0.3,
      ease: "easeInOut",
    });
    return () => controls.stop();
  }, [detailHeight, detailBox]);

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
    <div className="relative overflow-hidden rounded-2xl bg-(--bg-secondary) p-6">
      <Grid />
      <div className="relative z-10 flex flex-col gap-4">
        {/* Summary */}
        <div>
          <p className="text-sm text-(--text-muted)">
            {type} · {location}
          </p>
          <p className="text-(--text-secondary)">{summary}</p>
        </div>

        {/* Highlights */}
        {highlights.length > 0 && (
          <>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {highlights.map((item, i) => (
                <button
                  key={item.label}
                  type="button"
                  aria-pressed={activeHighlight === i}
                  onClick={() => setActiveHighlight(i)}
                  className={`flex cursor-pointer items-baseline gap-3 rounded-xl border bg-(--bg-tertiary) p-4 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) sm:flex-col sm:gap-1 ${
                    activeHighlight === i
                      ? "border-(--accent)"
                      : "border-transparent hover:border-(--accent)"
                  }`}
                >
                  <span className="shrink-0 text-3xl font-bold text-(--accent) md:text-4xl">
                    {item.value}
                  </span>
                  <span className="text-sm text-(--text-secondary)">
                    {item.label}
                  </span>
                </button>
              ))}
            </div>
            <motion.div style={{ height: detailBox }} className="overflow-hidden">
              <div ref={detailRef} aria-live="polite" className="md:min-h-12">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.p
                    key={activeHighlight}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="text-sm text-(--text-secondary)"
                  >
                    {highlights[activeHighlight].detail}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>
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
                  className="cursor-pointer rounded-full border border-(--border) bg-(--bg-tertiary) px-3 py-1 text-xs whitespace-nowrap text-(--text-secondary) transition-colors duration-300 hover:border-(--accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) md:whitespace-normal"
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
                  className="shrink-0 cursor-pointer rounded-full border border-(--accent) bg-(--accent) px-3 py-1 text-xs whitespace-nowrap text-(--button-primary) transition-colors duration-300 hover:border-(--accent-hover) hover:bg-(--accent-hover) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
                >
                  Show less
                </motion.button>
              )}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperienceCard;
