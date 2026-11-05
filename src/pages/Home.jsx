// Third-party Libs
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import { useState, lazy, Suspense } from "react";
import { HashLink } from "react-router-hash-link";
import { FaGamepad, FaTv } from "react-icons/fa";
import useMeasure from "react-use-measure";

// CSS
import "./Home.css";

// Components
import AwardItem from "../components/AwardItem.jsx";
import EducationItem from "../components/EducationItem.jsx";
import Grid from "../components/Grid";
import { LocationIcon, GitHubIcon, LinkedInIcon } from "../components/Icons";
import SectionHeader from "../components/SectionHeader.jsx";
import SkillCard from "../components/SkillCard.jsx";

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

const focusTiles = [
  {
    title: "Work",
    stat: "1,600+",
    statLabel: "queries tuned at NCS",
    text: "At NCS I designed the key front-end components of a full-stack Angular app, alongside legacy Java modernisation.",
    links: [{ label: "Experience", to: "/#experience" }],
  },
  {
    title: "Side Projects",
    stat: "3",
    statLabel: "apps live",
    text: "React and Next.js apps I built because I wanted to use them.",
    links: [
      { label: "Urara", to: "/projects/urara" },
      { label: "Kiroku", to: "/projects/kiroku" },
      { label: "Oshiwatch", to: "/projects/oshiwatch" },
    ],
  },
];

const hobbies = [
  { icon: <FaGamepad size={28} />, label: "Ranked games" },
  { icon: <FaTv size={28} />, label: "Anime" },
];

const Home = () => {
  const introButton ="bg-transparent hover:bg-[var(--accent)] text-[var(--text-primary)] font-bold py-2 px-4 border border-[var(--text-primary)] hover:border-[var(--accent)] rounded transition-colors duration-300 ease-in-out text-center cursor-pointer rounded-full";

  const [showAll, setShowAll] = useState(false);
  const defaultTechs = ["frontend", "backend"].flatMap((group) =>
    techs.filter((t) => t.group === group).slice(0, 4),
  );
  const visibleTechs = showAll
    ? [...defaultTechs, ...techs.filter((t) => !defaultTechs.includes(t))]
    : defaultTechs;
  const [ref, { height }] = useMeasure();
  // While Technologies is open (or still closing), the right column keeps its
  // own height instead of stretching to match
  const [rightColumnFree, setRightColumnFree] = useState(false);

  const { resume } = personalLinks;

  const iconMap = {
    GitHub: <GitHubIcon className="w-8 h-8" />,
    LinkedIn: <LinkedInIcon className="w-8 h-8" />,
  };

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
              Dean Cruz
            </h2>
            <div className="flex items-center justify-center gap-1 text-xs text-(--text-secondary) lg:justify-start md:-mt-1 lg:-mt-2">
              <LocationIcon className="w-3 h-3 transition-colors duration-300 ease-in-out" />
              <span>Singapore</span>
            </div>
          </div>

          <div className="description-container my-2 mt-4 flex flex-col gap-2 sm:gap-0">
            <p className="max-w-md text-base text-(--text-secondary) md:max-w-xl md:text-base lg:text-lg">
              Frontend-focused{" "}
              <span className="hidden text-(--accent) sm:inline">|</span>
              <br className="sm:hidden" /> React, TypeScript, Next.js
            </p>
            <p className="max-w-md text-base text-(--text-secondary) md:max-w-xl md:text-base lg:text-lg">
              I build React apps,
              <br className="sm:hidden" /> and write Angular and Java at NCS
            </p>
            <p className="max-w-md text-base text-(--text-secondary) md:max-w-xl md:text-base lg:text-lg">
              IMDA Gold Medal <span className="hidden sm:inline">·</span>
              <br className="sm:hidden" /> 3.97 GPA, Republic Polytechnic
            </p>
          </div>

          <div className="mt-2 flex flex-wrap justify-center gap-3 lg:justify-start">
            <HashLink
              smooth
              to="/#projects"
              className={`${introButton} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)`}
            >
              View projects
            </HashLink>
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className={`${introButton} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)`}
            >
              Resume
            </a>
          </div>

          <div className="buttons-container my-4 flex w-full max-w-md flex-wrap justify-center gap-6 md:max-w-xl lg:justify-start">
            {socialButtons
              .filter(({ label }) => label !== "Resume")
              .map(({ label, href }) => (
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
          {focusTiles.map((tile) => (
            <div
              key={tile.title}
              className="relative flex flex-col overflow-hidden rounded-2xl bg-(--bg-secondary) p-6"
            >
              <Grid />
              <p className="relative z-10 pb-4 text-2xl font-bold text-(--text-primary)">
                {tile.title}
              </p>
              <div className="relative z-10 flex flex-1 flex-col gap-4">
                <div className="flex items-baseline gap-3">
                  <span className="shrink-0 text-5xl font-bold text-(--accent)">
                    {tile.stat}
                  </span>
                  <span className="text-sm text-(--text-secondary)">
                    {tile.statLabel}
                  </span>
                </div>
                <p className="text-(--text-secondary)">{tile.text}</p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {tile.links.map(({ label, to }) => (
                    <HashLink
                      key={label}
                      smooth
                      to={to}
                      className="rounded-full border border-(--border) bg-(--bg-tertiary) px-4 py-2 text-sm font-semibold text-(--text-primary) transition-colors duration-300 hover:border-(--accent) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--accent)"
                    >
                      {label}
                    </HashLink>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="contents md:flex md:flex-col md:gap-6">
            {/* Technologies */}
            <div className="relative overflow-hidden rounded-2xl bg-(--bg-secondary) p-6">
              <Grid />
              <p className="pb-4 text-2xl font-bold text-(--text-primary)">
                Technologies
              </p>

              <motion.div
                animate={{ height }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                onAnimationComplete={() => {
                  if (!showAll) setRightColumnFree(false);
                }}
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
                  onClick={() => {
                    if (!showAll) setRightColumnFree(true);
                    setShowAll(!showAll);
                  }}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-sm transition-colors duration-300 ${
                    showAll
                      ? "border-(--accent) bg-(--accent) text-(--button-primary)"
                      : "border-(--border) bg-(--bg-tertiary) text-(--text-secondary) hover:border-(--accent)"
                  }`}
                >
                  {showAll ? "Show less" : "Show more"}
                </button>
              </div>
            </div>

            {/* Hobbies - last on mobile, under Technologies on desktop */}
            <div className="relative order-1 flex-1 overflow-hidden rounded-2xl bg-(--bg-secondary) p-6 md:order-none">
              <Grid />
              <p className="relative z-10 pb-4 text-2xl font-bold text-(--text-primary)">
                Hobbies
              </p>
              <div className="relative z-10 flex flex-col gap-4">
                <div className="grid grid-cols-2 gap-3">
                  {hobbies.map(({ icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 rounded-xl bg-(--bg-tertiary) p-4"
                    >
                      <span className="shrink-0 text-(--accent)">{icon}</span>
                      <span className="text-sm text-(--text-primary)">{label}</span>
                    </div>
                  ))}
                </div>
                <p className="text-(--text-secondary)">
                  Losing ranked games and falling behind on my anime backlog.
                </p>
              </div>
            </div>
          </div>

          <div
            className={`contents md:flex md:flex-col md:gap-6 ${rightColumnFree ? "md:self-start" : ""}`}
          >
            {/* Education */}
            <div className="relative overflow-hidden rounded-2xl bg-(--bg-secondary) p-6">
              <Grid />
              <p className="relative z-10 pb-4 text-2xl font-bold text-(--text-primary)">
                Education
              </p>
              <EducationItem />
            </div>

            {/* Awards & Honors */}
            <div className="relative flex-1 overflow-hidden rounded-2xl bg-(--bg-secondary) p-6">
              <Grid />
              <p className="relative z-10 pb-4 text-2xl font-bold text-(--text-primary)">
                Awards & Honors
              </p>
              <AwardItem />
            </div>
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
