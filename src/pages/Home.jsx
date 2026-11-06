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
import { GitHubIcon, LinkedInIcon } from "../components/Icons";
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
    stat: "9",
    statLabel: "projects built",
    text: "My three favourites are React and Next.js apps I built because I wanted to use them.",
    links: [
      { label: "Urara", to: "/projects/urara" },
      { label: "Kiroku", to: "/projects/kiroku" },
      { label: "Oshiwatch", to: "/projects/oshiwatch" },
    ],
  },
];

const heroStack = ["React", "TypeScript", "Next.js"];

const heroStats = [
  { value: "Gold", label: "IMDA Medal" },
  { value: "3.97", label: "GPA, Republic Poly" },
  { value: "3", label: "apps shipped" },
];

const hobbies = [
  { icon: <FaGamepad size={28} />, label: "JRPGs" },
  { icon: <FaTv size={28} />, label: "Anime" },
];

const Home = () => {
  const introButton ="bg-transparent hover:bg-[var(--accent)] text-[var(--text-primary)] font-bold py-2 px-4 border border-[var(--text-primary)] hover:border-[var(--accent)] rounded transition-colors duration-300 ease-in-out text-center cursor-pointer rounded-full";
  const introButtonPrimary ="bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-[var(--button-primary)] font-bold py-2 px-4 border border-[var(--accent)] hover:border-[var(--accent-hover)] transition-colors duration-300 ease-in-out text-center cursor-pointer rounded-full";

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
        className="intro-container flex min-h-svh flex-col items-center justify-center px-8 pt-24 pb-10 lg:flex-row lg:justify-between lg:py-0"
        id="hero"
      >
        <Grid />
        <div className="intro-container-left flex w-full flex-1 flex-col items-start justify-center text-left">
          <div className="title-container">
            <div className="flex items-center gap-2 text-xs font-bold tracking-[0.18em] whitespace-nowrap text-(--accent) uppercase max-[359px]:text-[0.625rem] max-[359px]:tracking-[0.12em] md:text-sm">
              <h1>Software Engineer</h1>
              <span aria-hidden="true">·</span>
              <span>Singapore</span>
            </div>
            <h2 className="mt-2 text-[5.5rem] leading-[0.92] font-bold tracking-tight whitespace-nowrap text-(--text-primary) sm:text-8xl md:text-[7.5rem] lg:text-8xl xl:text-[6.5rem]">
              Dean
              <br className="sm:hidden" /> Cruz
              <span className="text-(--accent)">.</span>
            </h2>
          </div>

          <p className="mt-6 max-w-md text-lg text-(--text-secondary) md:mt-7 md:text-xl">
            <span className="font-bold text-(--text-primary)">
              Frontend-focused.
            </span>{" "}
            I build React apps, and write Angular and Java at NCS.
          </p>

          <ul className="mt-4 flex flex-wrap gap-2">
            {heroStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-(--border) bg-(--bg-secondary) px-3 py-1 text-sm font-semibold text-(--text-primary)"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex w-full max-w-md gap-5 border-t border-(--border) pt-5 sm:gap-7 md:gap-11">
            {heroStats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl leading-tight font-bold text-(--accent) md:text-3xl">
                  {value}
                </p>
                <p className="text-xs text-(--text-secondary) md:text-sm">
                  {label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-5">
            <div className="flex gap-3">
              <HashLink
                smooth
                to="/#projects"
                className={`${introButtonPrimary} focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)`}
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

            <div className="buttons-container flex gap-5">
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
        </div>

        <div className="intro-container-right hidden w-full flex-1 lg:block"></div>
      </main>

      <section className="my-4 px-8 py-8 md:my-6 md:py-16 home-section" id="about">
        <SectionHeader
          number="02"
          title="Short Profile"
          subtitle="Background and focus"
        />

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
                  Sinking 100 hours into a JRPG while my anime backlog keeps growing.
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
