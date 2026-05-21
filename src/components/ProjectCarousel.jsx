import { lazy, Suspense, useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

const DesktopCarousel = lazy(() => import("./DesktopCarousel"));

const ProjectCarousel = ({ projects }) => {
  const [isTouchOrMobile, setIsTouchOrMobile] = useState(false);

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

  if (isTouchOrMobile) {
    return (
      <section aria-labelledby="projects-heading">
        <h2 id="projects-heading" className="sr-only">
          Projects
        </h2>
        <ul
          className="mx-auto grid w-full list-none grid-cols-1 gap-8 p-0 md:max-w-5xl md:grid-cols-2 md:px-6"
          role="list"
        >
          {projects.map((project) => (
            <li key={project.slug}>
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                tags={project.tags}
                category={project.category}
                link={project.link}
                isCarousel={false}
                slug={project.slug}
                headingLevel="h3"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <Suspense fallback={null}>
      <DesktopCarousel projects={projects} />
    </Suspense>
  );
};

export default ProjectCarousel;
