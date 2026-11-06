import { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Grid from "./Grid";

const ProjectCardHome = ({
  image,
  heroVideo,
  title,
  category,
  description,
  card,
  tags = [],
  liveDemo,
  github,
  slug,
}) => {
  const [previewing, setPreviewing] = useState(false);

  const caseStudyPath = `/projects/${slug}`;
  const focusRing =
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)";
  const secondaryButton = `rounded-full border border-(--border) bg-(--bg-tertiary) px-4 py-2 text-center text-sm font-semibold text-(--text-primary) transition-colors duration-300 hover:border-(--accent) ${focusRing}`;

  return (
    <div className="relative grid grid-cols-1 overflow-hidden rounded-2xl bg-(--bg-secondary) md:grid-cols-5">
      <Grid />

      <Link
        to={caseStudyPath}
        aria-label={`${title} case study`}
        onMouseEnter={() => setPreviewing(true)}
        onMouseLeave={() => setPreviewing(false)}
        onFocus={() => setPreviewing(true)}
        onBlur={() => setPreviewing(false)}
        className="relative block aspect-video overflow-hidden focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-(--accent) md:col-span-3 md:aspect-auto md:min-h-90"
      >
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <AnimatePresence>
          {previewing && heroVideo && (
            <motion.video
              key="preview"
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </AnimatePresence>
      </Link>

      <div className="relative z-10 flex flex-col gap-4 p-6 md:col-span-2 md:p-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-(--text-primary)">{title}</h3>
          <span className="ml-2 shrink-0 rounded-full border border-(--accent) bg-(--accent)/20 px-3 py-1 text-xs text-(--text-primary)">
            {category}
          </span>
        </div>

        {card ? (
          <>
            <p className="text-(--text-primary)">{card.why}</p>
            <p className="text-(--text-secondary)">{card.how}</p>
          </>
        ) : (
          <p className="text-(--text-secondary)">{description}</p>
        )}

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-(--border) bg-(--bg-tertiary) px-3 py-1 text-xs whitespace-nowrap text-(--text-secondary)"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          <Link
            to={caseStudyPath}
            className={`rounded-full bg-(--accent) px-4 py-2 text-center text-sm font-semibold text-(--button-primary) transition-colors duration-300 hover:bg-(--accent-hover) ${focusRing}`}
          >
            Case study
          </Link>
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryButton}
            >
              Live
            </a>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className={secondaryButton}
            >
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardHome;
