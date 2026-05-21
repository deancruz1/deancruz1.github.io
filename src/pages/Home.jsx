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
import ocbcBuilding from "../assets/img/ocbc-building.webp";
import frontendVideo from "../assets/videos/landing-page.mp4";
import fullstackVideo from "../assets/videos/movietopia.mp4";
import uiuxVideo from "../assets/videos/wireframe.mp4";

const Home = () => {
  const introButton =
    "bg-transparent hover:bg-[#6864e7] text-white font-bold py-2 px-4 border border-white hover:border-[#6864e7] rounded transition-colors duration-300 ease-in-out text-center cursor-pointer rounded-full";

  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);
  const fadeTimeout = useRef(null);

  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Front-End", "Full-Stack", "Design"];

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
          {/* Title Row */}
          <div className="title-container">
            {/* Desktop locked back to 4xl */}
            <h1 className="text-2xl text-white md:text-3xl lg:text-4xl">
              Software Engineer
            </h1>
            {/* Desktop locked back to 8xl */}
            <h2 className="text-5xl font-semibold text-white sm:text-6xl md:py-1 md:text-7xl lg:py-2 lg:text-8xl">
              <span className="hover-target relative inline-block">
                Dean Cruz
              </span>
            </h2>
          </div>

          {/* Description Row */}
          <div className="description-container my-2 lg:my-4">
            {/* Desktop locked back to text-lg */}
            <p className="max-w-md text-base text-gray-400 md:max-w-xl md:text-base lg:text-lg">
              Front-end Developer | React, JavaScript, Python | Enterprise
              Banking Applications Experience
            </p>
          </div>

          {/* Buttons Row */}
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
            <a
              className={introButton}
              href="https://deancruz1.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </div>

          {/* Email / Location Row */}
          <div className="contacts-container my-2 flex w-full max-w-md flex-col items-center justify-center gap-4 text-base text-gray-400 sm:flex-row sm:gap-6 md:max-w-xl lg:my-4 lg:justify-start lg:text-lg">
            <a
              href="mailto:deancruzgg@gmail.com"
              className="flex items-center gap-2 text-gray-400 transition-colors duration-300 hover:text-[#6864e7]"
            >
              <EmailIcon />
              <span>deancruzgg@gmail.com</span>
            </a>
            <div className="flex items-center gap-2 text-gray-400">
              <LocationIcon className="text-gray-500" />
              <span>Singapore, SG</span>
            </div>
          </div>
        </div>

        {/* Empty Column */}
        <div className="intro-container-right hidden w-full flex-1 lg:block"></div>
      </main>

      {/* About Me Section */}
      <section className="my-4 px-8 py-8 md:my-6 md:py-16" id="about">
        <SectionHeader title="Short Profile" subtitle="A little about me" />

        <div className="grid grid-cols-1 gap-6 py-4 md:grid-cols-2 md:py-8">
          {/* Left - Big Image Card (Circle) – REMOVED order-1 so it appears first on mobile */}
          <div className="relative flex h-full min-h-[360px] items-center justify-center overflow-hidden rounded-2xl bg-[#171717] md:order-none md:min-h-[600px]">
            <Grid />

            <img
              src={aboutMeImg}
              alt="Dean Cruz"
              className="absolute -top-25 -right-30 w-[500px] object-contain opacity-90 md:-top-0 md:-right-0 md:w-[800px] lg:-top-30 lg:-right-40"
              style={{ filter: "hue-rotate(50deg) saturate(1.2)" }}
            />

            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-4 md:p-6">
              <p className="w-70 text-2xl font-bold text-white md:w-80 md:text-3xl">
                Software engineer building clean, reliable, user-friendly web
                applications
              </p>
            </div>
          </div>

          {/* Right - Two Stacked Cards */}
          <div className="flex flex-col gap-6">
            {/* Tech Stack Card — MOBILE ORDER 3 (unchanged) */}
            <div className="relative order-3 overflow-hidden rounded-2xl bg-[#171717] p-6 md:order-none">
              <Grid />
              <p className="pb-4 text-2xl font-bold text-white">Technologies</p>

              <div className="relative z-10 grid grid-cols-3 gap-3 md:grid-cols-4">
                {techs.map((tech) => (
                  <div
                    key={tech.label}
                    className="flex aspect-square flex-col items-center justify-center gap-2 rounded-xl bg-[#1e1e1e] p-4 transition-transform duration-300 hover:scale-110"
                  >
                    <span className="text-[#6864e7]">{tech.icon}</span>
                    <span className="text-sm text-white">{tech.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bio Card — MOBILE ORDER 2 (unchanged, full hover/video logic) */}
            <div className="relative order-2 flex-1 overflow-hidden rounded-2xl bg-[#171717] p-6 md:order-none">
              <Grid />

              <p className="relative z-10 text-xl font-bold text-white md:text-2xl">
                Specialising in{" "}
                <span
                  className="hover-target relative inline-block text-[#6864e7]"
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
                  front-end
                </span>
                ,{" "}
                <span
                  className="hover-target relative inline-block text-[#6864e7]"
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
                , and{" "}
                <span
                  className="hover-target relative inline-block text-[#6864e7]"
                  onMouseEnter={() => {
                    clearTimeout(fadeTimeout.current);
                    setHoveredSkill("uiux");
                    setActiveSkill("uiux");
                  }}
                  onMouseLeave={() => {
                    setHoveredSkill(null);
                    fadeTimeout.current = setTimeout(() => {
                      setActiveSkill(null);
                    }, 400);
                  }}
                >
                  UI/UX design
                </span>
              </p>

              {/* YOUR VIDEO LOGIC UNTOUCHED */}
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

              {activeSkill === "uiux" && (
                <>
                  <video
                    src={uiuxVideo}
                    autoPlay
                    loop
                    muted
                    className={`absolute inset-0 z-0 h-full w-full rounded-2xl object-cover ${hoveredSkill === "uiux" ? "fade-in" : "fade-out"}`}
                  />
                  <div className="slide-up absolute inset-0 z-[5] rounded-2xl bg-gradient-to-t from-black/95 via-black/50 to-transparent" />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Second Row – RESTRUCTURED for correct mobile order */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Education – now a direct grid child, order 1 on mobile */}
          <div className="relative order-1 overflow-hidden rounded-2xl bg-[#171717] p-6 md:order-none md:col-start-1 md:row-start-1">
            <Grid />
            <p className="relative z-10 pb-4 text-2xl font-bold text-white">
              Education
            </p>
            <EducationItem />
          </div>

          {/* Awards – now a direct grid child, order 2 on mobile, spans full height on desktop */}
          <div className="relative order-2 min-h-[350px] overflow-hidden rounded-2xl bg-[#171717] p-6 md:order-none md:col-start-2 md:row-span-2 md:row-start-1">
            <Grid />
            <p className="relative z-10 pb-4 text-2xl font-bold text-white">
              Awards & Honors
            </p>
            <AwardItem />
          </div>

          {/* OCBC – now a direct grid child, order 3 on mobile, placed below Education on desktop */}
          <div className="relative order-3 overflow-hidden rounded-2xl bg-[#171717] p-6 md:order-none md:col-start-1 md:row-start-2">
            <img
              src={ocbcBuilding}
              alt="OCBC"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 bg-gradient-to-t from-black/80 to-transparent" />
            <p className="relative z-10 text-2xl font-bold text-white">
              Interned as a Software Test Engineer at OCBC
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
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

      {/* Projects Section */}
      <motion.section
        layout
        className="my-4 px-8 py-8 md:my-6 md:flex md:flex-col md:justify-between md:py-16"
        id="projects"
      >
        {/* This wrapper holds everything except the button */}
        <div>
          <SectionHeader
            title="Featured Projects"
            subtitle="Some of my work"
            className="mb-6 md:mb-10"
          />
          {/* Filter Buttons */}
          <div className="mb-6 flex items-center justify-center gap-3 md:mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`cursor-pointer rounded-full border px-4 py-2 text-sm whitespace-nowrap transition-colors duration-300 md:whitespace-normal ${
                  activeFilter === cat
                    ? "border-[#6864e7] bg-[#6864e7] text-white"
                    : "border-[#2e2e2e] bg-transparent text-gray-400 hover:border-[#6864e7]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Project Cards */}
          <motion.div
            layout
            className="grid grid-cols-1 items-stretch gap-6 md:min-h-[520px] md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence>
              {filteredProjects
                .filter((_, index) => [0, 3, 5].includes(index))
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

        {/* Button container – no layout prop to prevent animation glitches */}
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
