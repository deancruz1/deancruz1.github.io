import { useState } from "react";
import { Link } from "react-router-dom";
import Grid from "./Grid";

const MAX_TAGS = 4;

const ProjectCardGrid = ({
  image,
  title,
  category,
  description,
  tags = [],
  slug,
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [showAllTags, setShowAllTags] = useState(false);

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

  const imgSrc = typeof image === "string" ? image : image?.src;
  const imgSrcSet = typeof image === "object" ? image?.srcSet : undefined;
  const visibleTags = showAllTags ? tags : tags.slice(0, MAX_TAGS);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition:
          "transform 0.1s ease, box-shadow 0.3s ease, border-color 0.3s ease",
      }}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-transparent bg-(--bg-secondary) will-change-transform hover:border-(--accent) hover:shadow-[0_0_20px_var(--shadow-accent)] has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-(--accent)"
    >
      <Grid />

      {/* Covers the whole card; the text below lets clicks through to it */}
      <Link
        to={`/projects/${slug}`}
        aria-label={title}
        className="absolute inset-0 z-10 rounded-2xl focus-visible:outline-none"
      />

      <div className="relative aspect-video shrink-0 overflow-hidden">
        <img
          src={imgSrc}
          srcSet={imgSrcSet}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
          alt=""
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="pointer-events-none relative z-10 flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-(--text-primary)">{title}</h2>
          <span className="ml-2 shrink-0 rounded-full border border-(--accent) bg-(--accent)/20 px-3 py-1 text-xs text-(--text-primary)">
            {category}
          </span>
        </div>

        <p className="line-clamp-3 text-sm text-(--text-secondary)">
          {description}
        </p>

        <div className="mt-auto flex flex-wrap gap-2 pt-1">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-(--border) bg-(--bg-tertiary) px-3 py-1 text-xs whitespace-nowrap text-(--text-secondary)"
            >
              {tag}
            </span>
          ))}
          {tags.length > MAX_TAGS && (
            <button
              type="button"
              aria-expanded={showAllTags}
              aria-label={
                showAllTags ? "Show fewer tags" : `Show all ${tags.length} tags`
              }
              onClick={() => setShowAllTags(!showAllTags)}
              className={`pointer-events-auto relative cursor-pointer rounded-full border px-3 py-1 text-xs whitespace-nowrap transition-colors duration-300 before:absolute before:-inset-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent) ${
                showAllTags
                  ? "border-(--accent) bg-(--accent) text-(--button-primary) hover:border-(--accent-hover) hover:bg-(--accent-hover)"
                  : "border-(--border) bg-(--bg-tertiary) text-(--text-secondary) hover:border-(--accent)"
              }`}
            >
              {showAllTags ? "Show less" : `+${tags.length - MAX_TAGS}`}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCardGrid;
