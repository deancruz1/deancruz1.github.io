import { Helmet } from "react-helmet-async";
import ProjectCarousel from "../components/ProjectCarousel";
import { projects } from "../data/project-info-home.jsx";
import { useLayoutEffect } from "react";

const Projects = () => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Dean Cruz - Projects</title>
      </Helmet>

      <main id="main-content">
        <section className="min-h-screen pt-24 pb-12 lg:pt-32 lg:pb-16">
          <div className="mt-[6vh] mb-12 px-8 text-center">
            <h1 className="mb-4 text-5xl font-bold text-[var(--text-primary)] md:text-7xl">
              All Projects
            </h1>
            <p className="hidden text-lg text-[var(--text-secondary)] lg:block">
              Hold and drag on carousel to navigate
            </p>
          </div>

          <div className="w-full">
            <ProjectCarousel projects={projects} />
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
