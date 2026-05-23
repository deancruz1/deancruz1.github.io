import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";

const ProjectCardHome = ({
  image,
  title,
  category,
  description,
  tags = [],
  liveDemo,
  github,
  slug,
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Refs and state for dynamic tag truncation
  const containerRef = useRef(null);
  const measureRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(tags.length);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -7;
    const tiltY = ((x - centerX) / centerX) * 7;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Dynamically calculate how many tags fit in the container
  useEffect(() => {
    if (!containerRef.current || !measureRef.current) return;

    const measureTags = () => {
      const maxWidth = containerRef.current.clientWidth;
      const tagElements = Array.from(measureRef.current.children);

      let currentWidth = 0;
      let newVisibleCount = tags.length;
      const gap = 8; // 8px for Tailwind's gap-2
      const plusTagWidth = 45; // Estimated width for the "+X" tag

      for (let i = 0; i < tagElements.length; i++) {
        const tagWidth = tagElements[i].offsetWidth;
        const isLastTag = i === tagElements.length - 1;

        const widthWithCurrentTag = currentWidth + tagWidth;
        const widthWithCurrentAndPlus =
          widthWithCurrentTag + gap + plusTagWidth;

        // Check if the tag fits. If it's the last tag, we don't need room for "+X"
        if (isLastTag) {
          if (widthWithCurrentTag > maxWidth) {
            newVisibleCount = i;
            break;
          }
        } else {
          if (widthWithCurrentAndPlus > maxWidth) {
            newVisibleCount = i;
            break;
          }
        }
        currentWidth += tagWidth + gap;
      }

      // Always show at least 1 tag (it will truncate text if the screen is microscopic)
      setVisibleCount(tags.length === 0 ? 0 : Math.max(1, newVisibleCount));
    };

    const resizeObserver = new ResizeObserver(() => {
      measureTags();
    });

    resizeObserver.observe(containerRef.current);
    measureTags(); // Run immediately on mount

    return () => resizeObserver.disconnect();
  }, [tags]);

  return (
    <Link to={slug ? `/projects/${slug}` : "#"} className="block h-full">
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition:
            "transform 0.1s ease, box-shadow 0.3s ease, border-color 0.3s ease",
          transformStyle: "preserve-3d",
        }}
        className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-transparent bg-(--bg-secondary) will-change-transform hover:border-(--accent) hover:shadow-[0_0_20px_var(--shadow-accent)] lg:min-h-137.5"
      >
        <Grid />

        <div
          className="relative h-48 shrink-0 overflow-hidden rounded-t-2xl"
          style={{
            transform: "translateZ(30px)",
            transformStyle: "preserve-3d",
          }}
        >
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 z-10 translate-y-full rounded-t-2xl bg-linear-to-t from-black/95 via-black/50 to-transparent transition-transform duration-500 ease-out group-hover:translate-y-0" />
          <p className="absolute right-4 bottom-4 z-20 text-xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:text-3xl">
            More Details
          </p>
        </div>

        <div className="relative z-10 flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-(--text-primary)">{title}</h3>
            <span className="ml-2 shrink-0 rounded-full border border-(--accent) bg-(--accent)/20 px-3 py-1 text-xs text-(--text-primary)">
              {category}
            </span>
          </div>
          <p className="flex-1 text-sm text-(--text-secondary)">
            {description}
          </p>

          {/* --- UPDATED TAGS SECTION --- */}
          <div className="relative flex w-full items-center" ref={containerRef}>
            {/* Invisible Measurement Container */}
            <div
              ref={measureRef}
              aria-hidden="true"
              className="pointer-events-none invisible absolute top-0 left-0 flex gap-2 whitespace-nowrap"
            >
              {tags.map((tag, i) => (
                <span
                  key={`measure-${i}`}
                  className="rounded-full border px-3 py-1 text-xs" // Padding and borders match the visible tags for accurate measuring
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Visible Tags Container */}
            <div className="flex w-full items-center gap-2 overflow-hidden">
              {tags.slice(0, visibleCount).map((tag, i) => (
                <span
                  key={i}
                  className="max-w-full min-w-0 truncate rounded-full border border-(--border) bg-(--bg-tertiary) px-3 py-1 text-xs whitespace-nowrap text-(--text-secondary)"
                >
                  {tag}
                </span>
              ))}
              {visibleCount < tags.length && (
                <span className="shrink-0 rounded-full border border-(--border) bg-(--bg-tertiary) px-3 py-1 text-xs whitespace-nowrap text-(--text-secondary)">
                  +{tags.length - visibleCount}
                </span>
              )}
            </div>
          </div>
          {/* --- END UPDATED TAGS SECTION --- */}

          <div className="flex h-10 gap-2">
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 rounded-full bg-(--text-primary) px-4 py-2 text-center text-sm font-semibold text-(--bg-primary) transition-colors duration-300 hover:bg-(--accent) hover:text-(--text-primary)"
              >
                Live Demo
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="rounded-full border border-(--border) bg-(--bg-tertiary) px-4 py-2 text-center text-sm font-semibold text-(--text-primary) transition-colors duration-300 hover:border-(--accent)"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCardHome;
