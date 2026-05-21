import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import "./ProjectCarousel.css";

const ProjectCarousel = ({ projects }) => {
  const didDrag = useRef(false);
  const [isTouchOrMobile, setIsTouchOrMobile] = useState(false);

  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const prevX = useRef(0);
  const offset = useRef(0);
  const animationRef = useRef(null);
  const lastTime = useRef(null);

  useEffect(() => {
    const checkDevice = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      const isSmallScreen = window.innerWidth < 1024;
      setIsTouchOrMobile(isTouch || isSmallScreen);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (isTouchOrMobile) return;

    const track = trackRef.current;
    if (!track) return;

    const speed = 150;
    let halfWidth = 0;
    let cachedImages = [];
    let screenWidth = window.innerWidth;

    const updateCache = () => {
      halfWidth = track.scrollWidth / 2;
      screenWidth = window.innerWidth;

      const trackRect = track.getBoundingClientRect();
      const imageElements = Array.from(
        track.getElementsByClassName("carousel-image"),
      );

      cachedImages = imageElements.map((img) => {
        const rect = img.getBoundingClientRect();
        return {
          el: img,
          localX: rect.left - trackRect.left,
          width: rect.width,
        };
      });
    };

    const resizeObserver = new ResizeObserver(() => {
      updateCache();
    });
    resizeObserver.observe(track);

    setTimeout(updateCache, 30);

    const wrapOffset = () => {
      if (halfWidth === 0) return;
      if (offset.current <= -halfWidth) {
        offset.current += halfWidth;
        prevX.current += halfWidth;
      }
      if (offset.current >= 0) {
        offset.current -= halfWidth;
        prevX.current -= halfWidth;
      }
    };

    const updateParallax = () => {
      for (const item of cachedImages) {
        const imageScreenX = offset.current + item.localX;
        const imageCenter = imageScreenX + item.width / 2;
        const screenCenter = screenWidth / 2;
        const distance = imageCenter - screenCenter;
        const parallax = distance * 0.02;

        item.el.style.objectPosition = `${50 + parallax}% center`;
      }
    };

    const animate = (timestamp) => {
      if (!isDragging.current) {
        if (!lastTime.current) lastTime.current = timestamp;
        const delta = timestamp - lastTime.current;
        lastTime.current = timestamp;

        offset.current -= speed * (delta / 1000);
        wrapOffset();
        track.style.transform = `translateX(${offset.current}px) translateY(-50%)`;
        updateParallax();
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    const handleMouseDown = (e) => {
      isDragging.current = true;
      startX.current = e.clientX;
      prevX.current = offset.current;
      didDrag.current = false;
      lastTime.current = null;
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      const delta = e.clientX - startX.current;

      if (Math.abs(delta) > 5) {
        didDrag.current = true;
      }

      offset.current = prevX.current + delta;
      wrapOffset();
      track.style.transform = `translateX(${offset.current}px) translateY(-50%)`;
      updateParallax();
    };

    const handleMouseUp = () => {
      isDragging.current = false;

      setTimeout(() => {
        didDrag.current = false;
      }, 0);
    };

    const handleNativeDragStart = (e) => {
      e.preventDefault();
    };

    track.addEventListener("mousedown", handleMouseDown);
    track.addEventListener("dragstart", handleNativeDragStart);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
      track.removeEventListener("mousedown", handleMouseDown);
      track.removeEventListener("dragstart", handleNativeDragStart);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isTouchOrMobile]);

  if (isTouchOrMobile) {
    return (
      <div className="mx-auto grid w-full grid-cols-1 gap-8 md:max-w-5xl md:grid-cols-2 md:px-6">
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            image={project.image}
            title={project.title}
            description={project.description}
            tags={project.tags}
            category={project.category}
            link={project.link}
            isCarousel={false}
            slug={project.slug}
            didDragRef={didDrag}
          />
        ))}
      </div>
    );
  }

  const loopedProjects = [...projects, ...projects];

  return (
    <div className="relative right-1/2 left-1/2 -mr-[50vw] -ml-[50vw] h-[70vh] w-screen -translate-y-10 overflow-hidden">
      <div
        ref={trackRef}
        className="absolute top-1/2 left-0 flex gap-6 select-none"
        style={{ transform: "translateY(-50%)" }}
      >
        {loopedProjects.map((project, i) => (
          <ProjectCard
            key={i}
            image={project.image}
            title={project.title}
            description={project.description}
            tags={project.tags}
            category={project.category}
            link={project.link}
            isCarousel={true}
            slug={project.slug}
            didDragRef={didDrag}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
