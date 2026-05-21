import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({
  image,
  title,
  category,
  slug,
  isCarousel,
  didDragRef,
  headingLevel: HeadingTag = "h3",
  loading = "lazy",
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!isCarousel) return;
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -7;
    const tiltY = ((x - centerX) / centerX) * 7;

    setTilt({ x: tiltX, y: tiltY });
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const imgSrc = typeof image === "string" ? image : image?.src;
  const imgSrcSet = typeof image === "object" ? image?.srcSet : undefined;

  return (
    <Link
      to={slug ? `/projects/${slug}` : "#"}
      onClick={(e) => {
        if (didDragRef?.current) {
          e.preventDefault();
          e.stopPropagation();
        }
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${isHovered ? 1.04 : 1})`,
        transition:
          "transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
        transformStyle: "preserve-3d",
      }}
      className={`group relative block cursor-pointer overflow-hidden rounded-3xl border border-b-4 border-transparent border-b-[var(--accent)] hover:border-[var(--accent)] hover:shadow-[0_0_40px_var(--shadow-accent-strong)] ${
        isCarousel ? "h-[56vmin] w-[40vmin] shrink-0" : "aspect-[4/3] w-full"
      }`}
    >
      <img
        src={imgSrc}
        srcSet={imgSrcSet}
        sizes={isCarousel ? "40vw" : "(max-width: 768px) 100vw, 40vw"}
        alt={title}
        loading={loading}
        decoding="async"
        draggable="false"
        className="carousel-image absolute inset-0 h-full w-full transform-gpu rounded-3xl object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div
        className="absolute inset-0 overflow-hidden rounded-3xl"
        style={{ transform: isHovered ? "translateZ(30px)" : "none" }}
      >
        <div
          className={`absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-transform duration-500 ease-out ${
            isCarousel
              ? "translate-y-full group-hover:translate-y-0"
              : "translate-y-0"
          }`}
        />

        <div
          className={`absolute inset-0 z-20 flex flex-col justify-end p-6 transition-opacity duration-300 ease-out ${
            isCarousel ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          {category && (
            <span className="mb-3 inline-block w-fit shrink-0 rounded-full border border-[var(--accent)] bg-[var(--accent)]/20 px-3 py-1 text-xs text-[var(--text-overlay)] lg:text-sm">
              {category}
            </span>
          )}
          <HeadingTag className="mb-3 text-3xl font-bold text-[var(--text-overlay)] lg:text-4xl">
            {title}
          </HeadingTag>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
