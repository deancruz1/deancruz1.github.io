// Third-party Libs
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, lazy, Suspense } from "react";
import useMeasure from "react-use-measure";

// CSS
import "./Home.css";

// Assets
import aboutMeImgDark from "../assets/img/about-me-bg.webp";
import aboutMeImgLight from "../assets/img/about-me-bg-light.webp";
import frontendVideo from "../assets/videos/urara.mp4";
import fullstackVideo from "../assets/videos/kiroku.mp4";

// Components
import AwardItem from "../components/AwardItem.jsx";
import EducationItem from "../components/EducationItem.jsx";
import Grid from "../components/Grid";
import { EmailIcon, LocationIcon, GitHubIcon, LinkedInIcon, ResumeIcon } from "../components/Icons";
import SectionHeader from "../components/SectionHeader.jsx";
import SkillCard from "../components/SkillCard.jsx";
import { useTheme } from "../hooks/useTheme";

// Data
import { techs } from "../data/tech-icons.jsx";
import personalLinks, { socialButtons } from "../data/personal-links.js";

// Lazy‑loaded sections – only fetched when they enter the viewport
const HomeExperienceSection = lazy(
  () => import("../components/HomeExperienceSection"),
);
const HomeProjectsSection = lazy(
  () => import("../components/HomeProjectsSection"),
);

const Home = () => {
  // const introButton = "bg-transparent hover:bg-[var(--accent)] text-[var(--text-primary)] font-bold py-2 px-4 border border-[var(--text-primary)] hover:border-[var(--accent)] rounded transition-colors duration-300 ease-in-out text-center cursor-pointer rounded-full";

  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeSkill, setActiveSkill] = useState(null);
  const fadeTimeout = useRef(null);
  const [showAll, setShowAll] = useState(false);
  const visibleTechs = showAll ? techs : techs.filter((t) => t.featured);
  const [ref, { height }] = useMeasure();

  const { email, github, linkedin, resume } = personalLinks;

  const iconMap = {
    GitHub: <GitHubIcon className="w-8 h-8 md:w-10 md:h-10 md:w-12 md:h-12" />,
    LinkedIn: <LinkedInIcon className="w-8 h-8 md:w-10 md:h-10 md:w-12 md:h-12" />,
    Resume: <ResumeIcon className="w-8 h-8 md:w-10 md:h-10 md:w-12 md:h-12" />,
  };

  const { theme } = useTheme();
  const aboutMeImg = theme === "light" ? aboutMeImgLight : aboutMeImgDark;

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
            <h1 className="text-2xl text-(--text-primary) md:text-3xl lg:text-4xl">
              Software Engineer
            </h1>
            <h2 className="text-5xl font-bold text-(--text-primary) sm:text-6xl md:py-1 md:text-7xl lg:py-2 lg:text-8xl">
              <span className="hover-target relative inline-block">
                Dean Cruz
              </span>
            </h2>
            <div className="flex items-center justify-center gap-1 text-xs text-(--text-secondary) lg:justify-start md:-mt-1 lg:-mt-2">
              <LocationIcon className="w-3 h-3 transition-colors duration-300 ease-in-out" />
              <span>Singapore</span>
            </div>
          </div>

          <div className="description-container my-2 mt-4">
            <p className="max-w-md text-base text-(--text-secondary) md:max-w-xl md:text-base lg:text-lg">
              Frontend-focused <span className="text-(--accent)">|</span> React,
              TypeScript, Next.js
            </p>
            <p className="max-w-md text-base text-(--text-secondary) md:max-w-xl md:text-base lg:text-lg">
              I build for users, starting with myself
            </p>
            <p className="max-w-md text-base text-(--text-secondary) md:max-w-xl md:text-base lg:text-lg">
              IMDA Gold Medal · Republic Polytechnic
            </p>
          </div>

          <div className="buttons-container my-4 flex w-full max-w-md flex-wrap justify-center gap-8 md:max-w-xl lg:justify-start">
            {socialButtons.map(({ label, href }) => (
              <a
                key={label}
                aria-label={label}
                className="text-(--text-secondary) hover:text-(--accent) hover:scale-125 transition-all duration-300 ease-in-out cursor-pointer"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {iconMap[label]}
              </a>
            ))}
          </div>

        </div>

        <div className="intro-container-right hidden w-full flex-1 lg:block"></div>
      </main>

      <section className="my-4 px-8 py-8 md:my-6 md:py-16 home-section" id="about">
        <SectionHeader title="Short Profile" subtitle="Background and focus" />

        <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:mt-5">
          <div className="relative flex h-full items-center justify-center overflow-hidden rounded-2xl bg-(--bg-secondary) md:order-0 aspect-square md:aspect-auto">

            <img
              src={aboutMeImg}
              alt="Dean Cruz"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
              style={{ filter: theme === "dark" ? "saturate(0.6)" : "none" }}
            />

            <div className="absolute right-0 bottom-0 left-0 bg-linear-to-t from-black/80 to-transparent p-4 md:p-6">
              <p className="w-70 text-2xl font-bold text-white md:w-80 lg:w-90 md:text-3xl">
                I build interfaces that feel right, and everything behind them that makes that possible
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            {/* Focused on roles - mobile only, above Specialising */}
            <div className="relative order-1 overflow-hidden rounded-2xl bg-(--bg-secondary) p-6 md:hidden">
              <Grid />
              <p className="relative z-10 text-2xl font-bold text-(--text-primary)">Frontend dev by day, losing ranked games and falling behind on my anime backlog by night</p>
            </div>

            {/* Technologies - first on tablet/desktop */}
            <div className="relative order-3 overflow-hidden rounded-2xl bg-(--bg-secondary) p-6 md:order-0">
              <Grid />
              <p className="pb-4 text-2xl font-bold text-(--text-primary)">
                Technologies
              </p>

              <motion.div
                animate={{ height }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div ref={ref} className="relative z-10 grid grid-cols-3 gap-3 md:grid-cols-4">
                  <AnimatePresence mode="popLayout">
                    {visibleTechs.map((tech) => (
                      <SkillCard key={tech.label} {...tech} />
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>

              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                    showAll
                      ? "border-(--accent) bg-(--accent) text-(--button-primary)"
                      : "border-(--border) bg-transparent text-(--text-secondary) hover:border-(--accent)"
                  }`}
                >
                  {showAll ? "Show less" : "Show more"}
                </button>
              </div>
            </div>

            {/* Specialising - second on tablet/desktop */}
            <div className="relative order-2 flex-1 overflow-hidden rounded-2xl bg-(--bg-secondary) p-6 md:order-1 min-h-75 md:min-h-0">
              <Grid />

              <p className="relative z-10 text-2xl font-bold text-(--text-primary) ">
                Specialising in{" "}
                <span
                  className="hover-target relative inline-block text-(--accent)"
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
                  className="hover-target relative inline-block text-(--accent)"
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
              </p>

              {activeSkill === "frontend" && (
                <>
                  <video
                    src={frontendVideo}
                    autoPlay
                    loop
                    muted
                    preload="none"
                    className={`absolute inset-0 z-0 h-full w-full rounded-2xl object-cover ${hoveredSkill === "frontend" ? "fade-in" : "fade-out"}`}
                  />
                  <div className="slide-up absolute inset-0 z-5 rounded-2xl bg-linear-to-t from-black/95 via-black/50 to-transparent" />
                </>
              )}

              {activeSkill === "fullstack" && (
                <>
                  <video
                    src={fullstackVideo}
                    autoPlay
                    loop
                    muted
                    preload="none"
                    className={`absolute inset-0 z-0 h-full w-full rounded-2xl object-cover ${hoveredSkill === "fullstack" ? "fade-in" : "fade-out"}`}
                  />
                  <div className="slide-up absolute inset-0 z-5 rounded-2xl bg-linear-to-t from-black/95 via-black/50 to-transparent" />
                </>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Education */}
          <div className="relative order-1 overflow-hidden rounded-2xl bg-(--bg-secondary) p-6 md:order-0 md:col-start-1 md:row-start-1">
            <Grid />
            <p className="relative z-10 pb-4 text-2xl font-bold text-(--text-primary)">
              Education
            </p>
            <EducationItem />
          </div>

          {/* Awards & Honors */}
          <div className="relative order-2 overflow-hidden rounded-2xl bg-(--bg-secondary) p-6 md:order-0 md:col-start-2 md:row-span-2 md:row-start-1">
            <Grid />
            <p className="relative z-10 pb-4 text-2xl font-bold text-(--text-primary)">
              Awards & Honors
            </p>
            <AwardItem />
          </div>

          {/* Focused on roles - desktop only */}
          <div className="relative order-3 hidden overflow-hidden rounded-2xl bg-(--bg-secondary) p-6 md:order-0 md:col-start-1 md:row-start-2 md:block">
            <Grid />
            <p className="relative z-10 text-2xl font-bold text-(--text-primary)">Frontend dev by day, losing ranked games and falling behind on my anime backlog by night</p>
          </div>
        </div>
      </section>

      {/* Below‑the‑fold sections are lazy‑loaded */}
      <Suspense fallback={null}>
        <HomeExperienceSection />
      </Suspense>

      <Suspense fallback={null}>
        <HomeProjectsSection />
      </Suspense>
    </>
  );
};

export default Home;
