import { useState } from "react";
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
        className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-transparent bg-[#171717] will-change-transform hover:border-[#6864e7] hover:shadow-[0_0_20px_rgba(104,100,231,0.4)]"
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
          <div className="absolute inset-0 z-10 translate-y-full rounded-t-2xl bg-gradient-to-t from-black/95 via-black/50 to-transparent transition-transform duration-500 ease-out group-hover:translate-y-0" />
          <p className="absolute right-4 bottom-4 z-20 text-xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:text-3xl">
            More Details
          </p>
        </div>

        <div className="relative z-10 flex flex-1 flex-col gap-4 p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <span className="ml-2 shrink-0 rounded-full border border-[#6864e7] bg-[#6864e7]/20 px-3 py-1 text-xs text-white">
              {category}
            </span>
          </div>
          <p className="flex-1 text-sm text-gray-400">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-[#2e2e2e] bg-[#1e1e1e] px-3 py-1 text-xs text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex h-10 gap-2">
            {liveDemo && (
              <a
                href={liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex-1 rounded-full bg-white px-4 py-2 text-center text-sm font-semibold text-black transition-colors duration-300 hover:bg-[#6864e7] hover:text-white"
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
                className="rounded-full border border-[#2e2e2e] bg-[#1e1e1e] px-4 py-2 text-center text-sm font-semibold text-white transition-colors duration-300 hover:border-[#6864e7]"
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
