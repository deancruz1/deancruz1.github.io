import { useState } from "react";
import { Link } from "react-router-dom"; // 1. Added Link import

// 2. Swapped out the 'link' prop for 'slug'
const ProjectCard = ({
  image,
  title,
  category,
  tags = [],
  slug,
  isCarousel,
  didDragRef,
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!isCarousel) return; // Disable tilt entirely on touch interfaces
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

  return (
    // 3. Changed from <a> to <Link> and updated the destination path
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
      className={`group relative block cursor-pointer overflow-hidden rounded-3xl border border-transparent hover:border-[#6864e7] hover:shadow-[0_0_40px_rgba(104,100,231,0.6)] ${isCarousel ? "h-[56vmin] w-[40vmin] shrink-0" : "aspect-[4/3] w-full"} `}
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        draggable="false"
        className="carousel-image absolute inset-0 h-full w-full transform-gpu rounded-3xl object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* 3D Context Wrapper */}
      <div
        className="absolute inset-0 overflow-hidden rounded-3xl"
        style={{ transform: isHovered ? "translateZ(30px)" : "none" }}
      >
        {/* 1. Gradient Overlay Background */}
        <div
          className={`absolute inset-0 z-10 bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-transform duration-500 ease-out ${isCarousel ? "translate-y-full group-hover:translate-y-0" : "translate-y-0"} `}
        />

        {/* 2. Text Content Layer */}
        <div
          className={`absolute inset-0 z-20 flex flex-col justify-end p-6 transition-opacity duration-300 ease-out ${isCarousel ? "opacity-0 group-hover:opacity-100" : "opacity-100"} `}
        >
          {category && (
            <span className="mb-3 inline-block w-fit shrink-0 rounded-full border border-[#6864e7] bg-[#6864e7]/20 px-3 py-1 text-xs text-white lg:text-sm">
              {category}
            </span>
          )}
          <h3 className="mb-3 text-3xl font-bold text-white lg:text-4xl">
            {title}
          </h3>

          {/* <div className="flex flex-wrap gap-2">
            {tags.map((tag, j) => (
              <span
                key={j}
                className="text-xs text-white bg-[#6864e7] px-3 py-1 rounded-full font-medium shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div> */}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
