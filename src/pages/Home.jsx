import { Helmet } from "react-helmet-async";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import "./Home.css";
import Grid from "../components/Grid";
import SectionHeader from "../components/SectionHeader.jsx";
import WorkExperienceCard from "../components/WorkExperienceCard.jsx";
import ProjectCard from "../components/ProjectCardHome.jsx";
import AwardItem from "../components/AwardItem.jsx";
import EducationItem from "../components/EducationItem.jsx";
import { EmailIcon, LocationIcon } from "../components/Icons";
import { workExperiences } from "../data/work-experience.js";
import { techs } from "../data/tech-icons.jsx";
import { projects } from "../data/project-info-home.jsx";
import aboutMeImg from "../assets/img/about-me-bg.webp";
import frontendVideo from "../assets/videos/landing-page.mp4";
import fullstackVideo from "../assets/videos/movietopia.mp4";

const Home = () => {
  const introButton =
    "bg-transparent hover:bg-[var(--accent)] text-[var(--text-primary)] font-bold py-2 px-4 border border-[var(--text-primary)] hover:border-[var(--accent)] rounded transition-colors duration-300 ease-in-out text-center cursor-pointer rounded-full";

  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);
  const fadeTimeout = useRef(null);

  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Frontend", "Full-Stack", "Design"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Dean Cruz - Software Engineer</title>
      </Helmet>
      <main
        className="intro-container flex min-h-screen flex-col items-center justify-center px-8 lg:flex-row lg:justify-between"
        id="hero"
      >
        <Grid />
        <div className="intro-container-left flex w-full flex-1 flex-col items-center justify-center text-center lg:items-start lg:justify-start lg:text-left">
          <div className="title-container">
            <h1 className="text-2xl text-[var(--text-primary)] md:text-3xl lg:text-4xl">
              Software Engineer
            </h1>
            <h2 className="text-5xl font-semibold text-[var(--text-primary)] sm:text-6xl md:py-1 md:text-7xl lg:py-2 lg:text-8xl">
              <span className="hover-target relative inline-block">
                Dean Cruz
              </span>
            </h2>
          </div>

          <div className="description-container my-2 lg:my-4">
            <p className="max-w-md text-base text-[var(--text-secondary)] md:max-w-xl md:text-base lg:text-lg">
              Frontend-focused <span class="text-[var(--accent)]">|</span>{" "}
              React, JavaScript, Python
            </p>
            <p className="max-w-md text-base text-[var(--text-secondary)] md:max-w-xl md:text-base lg:text-lg">
              IMDA Gold Medalist
            </p>
            <p className="max-w-md text-base text-[var(--text-secondary)] md:max-w-xl md:text-base lg:text-lg">
              Enterprise banking experience at OCBC
            </p>
          </div>

          <div className="buttons-container my-6 flex w-full max-w-md flex-wrap justify-center gap-3 md:max-w-xl lg:justify-start">
            <a
              className={introButton}
              href="https://github.com/deancruz1"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className={introButton}
              href="https://www.linkedin.com/in/dean-cruz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className={introButton}
              href="/Dean Cruz Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>

          <div className="contacts-container my-2 flex w-full max-w-md flex-col items-center justify-center gap-4 text-base sm:flex-row sm:gap-6 md:max-w-xl lg:my-4 lg:justify-start lg:text-lg">
            <a
              href="mailto:deancruzgg@gmail.com"
              className="flex items-center gap-2 text-[var(--text-secondary)] transition-colors duration-300 hover:text-[var(--accent)]"
            >
              <EmailIcon />
              <span>deancruzgg@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-[var(--text-secondary)]">
              <LocationIcon className="text-[var(--text-muted)]" />
              <span>Singapore, SG</span>
            </div>
          </div>
        </div>

        <div className="intro-container-right hidden w-full flex-1 lg:block"></div>
      </main>

      <section className="my-4 px-8 py-8 md:my-6 md:py-16" id="about">
        <SectionHeader title="Short Profile" subtitle="A little about me" />

        <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2 md:py-8">
          <div className="relative flex h-full min-h-[360px] items-center justify-center overflow-hidden rounded-2xl bg-[var(--bg-secondary)] md:order-none md:min-h-[600px]">
            <Grid />

            <img
              src={aboutMeImg}
              alt="Dean Cruz"
              className="absolute -top-25 -right-30 w-[500px] object-contain opacity-90 md:-top-0 md:-right-0 md:w-[800px] lg:-top-30 lg:-right-40"
              style={{ filter: "hue-rotate(50deg) saturate(1.2)" }}
            />

            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
              <p className="w-70 text-2xl font-bold text-white md:w-80 md:text-3xl">
                Building frontend systems that work in the real world. Shaped by
                enterprise.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="relative order-3 overflow-hidden rounded-2xl bg-[var(--bg-secondary)] p-6 md:order-none">
              <Grid />
              <p className="pb-4 text-2xl font-bold text-[var(--text-primary)]">
                Technologies
              </p>

              <div className="relative z-10 grid grid-cols-3 gap-3 md:grid-cols-4">
                {techs.map((tech) => (
                  <div
                    key={tech.label}
                    className="flex aspect-square flex-col items-center justify-center gap-2 rounded-xl bg-[var(--bg-tertiary)] p-4 transition-transform duration-300 hover:scale-110"
                  >
                    <span className="text-[var(--accent)]">{tech.icon}</span>
                    <span className="text-sm text-[var(--text-primary)]">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative order-2 flex-1 overflow-hidden rounded-2xl bg-[var(--bg-secondary)] p-6 md:order-none">
              <Grid />

              <p className="relative z-10 text-xl font-bold text-[var(--text-primary)] md:text-2xl">
                Specialising in{" "}
                <span
                  className="hover-target relative inline-block text-[var(--accent)]"
                  onMouseEnter={() => {
                    clearTimeout(fadeTimeout.current);
                    setHoveredSkill("frontend");
                    setActiveSkill("frontend");
                  }}
                  onMouseLeave={() => {
                    setHoveredSkill(null);
                    fadeTimeout.current = setTimeout(() => {
                      setActiveSkill(null);
                    }, 400);
                  }}
                >
                  frontend engineering
                </span>{" "}
                and{" "}
                <span
                  className="hover-target relative inline-block text-[var(--accent)]"
                  onMouseEnter={() => {
                    clearTimeout(fadeTimeout.current);
                    setHoveredSkill("fullstack");
                    setActiveSkill("fullstack");
                  }}
                  onMouseLeave={() => {
                    setHoveredSkill(null);
                    fadeTimeout.current = setTimeout(() => {
                      setActiveSkill(null);
                    }, 400);
                  }}
                >
                  full-stack development
                </span>
                .
              </p>

              {activeSkill === "frontend" && (
                <>
                  <video
                    src={frontendVideo}
                    autoPlay
                    loop
                    muted
                    className={`absolute inset-0 z-0 h-full w-full rounded-2xl object-cover ${hoveredSkill === "frontend" ? "fade-in" : "fade-out"}`}
                  />
                  <div className="slide-up absolute inset-0 z-[5] rounded-2xl bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                </>
              )}

              {activeSkill === "fullstack" && (
                <>
                  <video
                    src={fullstackVideo}
                    autoPlay
                    loop
                    muted
                    className={`absolute inset-0 z-0 h-full w-full rounded-2xl object-cover ${hoveredSkill === "fullstack" ? "fade-in" : "fade-out"}`}
                  />
                  <div className="slide-up absolute inset-0 z-[5] rounded-2xl bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                </>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative order-1 overflow-hidden rounded-2xl bg-[var(--bg-secondary)] p-6 md:order-none md:col-start-1 md:row-start-1">
            <Grid />
            <p className="relative z-10 pb-4 text-2xl font-bold text-[var(--text-primary)]">
              Education
            </p>
            <EducationItem />
          </div>

          <div className="relative order-2 min-h-[350px] overflow-hidden rounded-2xl bg-[var(--bg-secondary)] p-6 md:order-none md:col-start-2 md:row-span-2 md:row-start-1">
            <Grid />
            <p className="relative z-10 pb-4 text-2xl font-bold text-[var(--text-primary)]">
              Awards & Honors
            </p>
            <AwardItem />
          </div>

          <div className="relative order-3 overflow-hidden rounded-2xl bg-[var(--bg-secondary)] p-6 md:order-none md:col-start-1 md:row-start-2">
            <Grid />
            <p className="relative z-10 text-lg font-bold text-[var(--text-primary)]">
              Experienced working with stakeholders to deliver on requirements.
              Comfortable translating business needs into technical solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="my-4 px-8 py-8 md:my-6 md:py-16" id="experience">
        <SectionHeader
          title="Work Experience"
          subtitle="My professional journey"
          className="mb-6 md:mb-10"
        />
        <div>
          {workExperiences.map((exp, i) => (
            <WorkExperienceCard key={i} {...exp} />
          ))}
        </div>
      </section>

      <motion.section
        layout
        className="my-4 px-8 py-8 md:my-6 md:flex md:flex-col md:justify-between md:py-16"
        id="projects"
      >
        <div>
          <SectionHeader
            title="Featured Projects"
            subtitle="Some of my work"
            className="mb-6 md:mb-10"
          />
          <div className="mb-6 flex items-center justify-center gap-3 md:mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm whitespace-nowrap transition-colors duration-300 md:whitespace-normal ${
                  activeFilter === cat
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--text-primary)]"
                    : "border-[var(--border)] bg-transparent text-[var(--text-secondary)] hover:border-[var(--accent)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <motion.div
            layout
            className="grid grid-cols-1 items-stretch gap-6 md:min-h-[520px] md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence>
              {filteredProjects
                .filter((_, index) => [0, 3, 4].includes(index))
                .map((project) => (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div className="mt-8 text-center md:mt-10 md:mt-12 md:flex-shrink-0">
          <Link className={introButton} to="/projects">
            View All Projects
          </Link>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Home;
