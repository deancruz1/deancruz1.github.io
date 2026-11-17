import { Fragment, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
import StoryScene from "../components/StoryScenes";
import { xpEntries } from "../data/work-experience";
import "../styles/uf-explorer.css";
import "./Info.css";

const STORY_ITEMS = [
  {
    scene: "foundations",
    title: "Where it started: Foundations ('23)",
    body: "My first portfolio, built to learn HTML, CSS and Bootstrap. Faculty later picked it as the cohort's reference for code structure.",
  },
  {
    scene: "medal",
    title: "RP, then OCBC, then NCS",
    body: "A diploma, an internship during it, then a full-time role. The details are further down.",
  },
  {
    scene: "builds",
    title: "100-hour JRPGs & anime side builds",
    body: "My first sites were fan projects. Kiroku, Urara, Oshiwatch and Cubehand came from the same habit.",
  },
  {
    scene: "flows",
    title: "Design flows to production SQL",
    body: "From a 154-screen prototype in Adobe XD to tuning 1,600+ MyBatis queries at NCS.",
  },
];

const TOOLBOX_COLUMNS = [
  {
    heading: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind", "TanStack Query"],
  },
  {
    heading: "Backend and data",
    items: ["Java", "Spring Boot", "MyBatis", "Hibernate", "MySQL", "PostgreSQL", "Prisma"],
  },
  {
    heading: "Also",
    items: ["Angular", "Vite", "Git", "Vercel", "Supabase", "Python", "PHP"],
  },
];

export default function Info() {
  const { hash } = useLocation();
  const [storyIndex, setStoryIndex] = useState(0);
  const [activeXp, setActiveXp] = useState(xpEntries[0].id);
  const [showAll, setShowAll] = useState(false);
  const [openRows, setOpenRows] = useState(() =>
    xpEntries.reduce((acc, entry) => {
      if (entry.accordions?.length) acc[entry.id] = 0;
      return acc;
    }, {}),
  );

  const storyNotesRef = useRef(null);
  const storyItemRefs = useRef([]);
  const [storyBarStyle, setStoryBarStyle] = useState({ height: 0, transform: "translateY(0px)" });

  // The story moves to the next chapter on its own, but holds while you're
  // hovering or focused on it, or while it's off screen
  const storyRef = useRef(null);
  const [storyHeld, setStoryHeld] = useState(false);
  const [storyInView, setStoryInView] = useState(false);
  const storyPaused = storyHeld || !storyInView;

  useEffect(() => {
    const el = storyRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(([entry]) => setStoryInView(entry.isIntersecting), {
      threshold: 0.4,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const xpContainerRef = useRef(null);
  const xpItemRefs = useRef({});
  const [xpIndStyle, setXpIndStyle] = useState({ width: 0, height: 0, transform: "translate(0px, 0px)" });

  const xpPanelsRef = useRef(null);
  const [xpPanelsHeight, setXpPanelsHeight] = useState(null);

  useEffect(() => {
    if (hash === "#ncs") {
      document.getElementById("ncs")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);

  useIsomorphicLayoutEffect(() => {
    const updateStoryBar = () => {
      const el = storyItemRefs.current[storyIndex];
      if (!el || !el.offsetHeight) return;
      setStoryBarStyle({
        height: `${Math.max(0, el.offsetHeight - 24)}px`,
        transform: `translateY(${el.offsetTop + 12}px)`,
      });
    };

    updateStoryBar();
    const notesEl = storyNotesRef.current;
    if (!notesEl || typeof ResizeObserver === "undefined") return undefined;
    const observer = new ResizeObserver(updateStoryBar);
    observer.observe(notesEl);
    return () => observer.disconnect();
  }, [storyIndex]);

  useIsomorphicLayoutEffect(() => {
    const updateXpInd = () => {
      if (showAll) return;
      const el = xpItemRefs.current[activeXp];
      if (!el || !el.offsetWidth) return;
      setXpIndStyle({
        width: `${el.offsetWidth}px`,
        height: `${el.offsetHeight}px`,
        transform: `translate(${el.offsetLeft}px, ${el.offsetTop}px)`,
      });
    };

    updateXpInd();
    const xpEl = xpContainerRef.current;
    if (!xpEl || typeof ResizeObserver === "undefined") return undefined;
    const observer = new ResizeObserver(updateXpInd);
    observer.observe(xpEl);
    return () => observer.disconnect();
  }, [activeXp, showAll]);

  // The outer box copies the panel height so switching tabs animates instead of snapping
  useIsomorphicLayoutEffect(() => {
    const inner = xpPanelsRef.current;
    if (!inner || typeof ResizeObserver === "undefined") return undefined;
    const updateHeight = () => setXpPanelsHeight(inner.offsetHeight);
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(inner);
    return () => observer.disconnect();
  }, []);

  const handleXpKeyDown = (index, e) => {
    const delta =
      e.key === "ArrowDown" || e.key === "ArrowRight"
        ? 1
        : e.key === "ArrowUp" || e.key === "ArrowLeft"
          ? -1
          : 0;
    if (!delta) return;
    e.preventDefault();
    const nextEntry = xpEntries[(index + delta + xpEntries.length) % xpEntries.length];
    setActiveXp(nextEntry.id);
    xpItemRefs.current[nextEntry.id]?.focus();
  };

  const toggleAccordion = (entryId, rowIndex) => {
    if (showAll) return;
    setOpenRows((prev) => ({
      ...prev,
      [entryId]: prev[entryId] === rowIndex ? -1 : rowIndex,
    }));
  };

  const activeStory = STORY_ITEMS[storyIndex];

  return (
    <>
      <Helmet>
        <title>Dean Cruz - Info</title>
        <meta
          name="description"
          content="About Dean Cruz — full-stack engineer, strongest on the frontend. Software Engineer at NCS Group, previously OCBC and Republic Polytechnic, studying Computer Science at UOW."
        />
      </Helmet>

      <main className="site-container view-fade">
        <section className="info-intro">
          <h1 className="info-headline">
            I&apos;m a full-stack engineer who&apos;s strongest on the{" "}
            <span className="hi-accent">frontend</span>. I build React and Next.js apps, and
            modernise Java systems at NCS
            <span className="accent-dot">.</span>
          </h1>
          <p className="info-sub">
            Based in Singapore, pursuing Computer Science part-time at the University of
            Wollongong, and sinking 100 hours into JRPGs while my anime backlog keeps growing.
          </p>
        </section>

        <section className="uf-section" aria-label="Story and background">
          <div
            ref={storyRef}
            className="uf uf-story"
            data-paused={storyPaused}
            onMouseEnter={() => setStoryHeld(true)}
            onMouseLeave={() => setStoryHeld(false)}
            onFocus={() => setStoryHeld(true)}
            onBlur={(e) => {
              if (!e.currentTarget.contains(e.relatedTarget)) setStoryHeld(false);
            }}
          >
            <div className="uf-frame story-frame">
              <StoryScene key={storyIndex} scene={activeStory.scene} />
            </div>

            <div className="uf-notes" ref={storyNotesRef}>
              <div className="uf-bar story-bar" style={storyBarStyle} aria-hidden="true">
                <span
                  key={storyIndex}
                  className="story-bar-fill"
                  onAnimationEnd={() => setStoryIndex((storyIndex + 1) % STORY_ITEMS.length)}
                />
              </div>
              {STORY_ITEMS.map((item, index) => (
                <button
                  key={item.title}
                  ref={(el) => {
                    storyItemRefs.current[index] = el;
                  }}
                  type="button"
                  className={`uf-note story-item${storyIndex === index ? " active" : ""}`}
                  aria-pressed={storyIndex === index}
                  onMouseEnter={() => setStoryIndex(index)}
                  onFocus={() => setStoryIndex(index)}
                  onClick={() => setStoryIndex(index)}
                >
                  <span className="t">{item.title}</span>
                  <p>{item.body}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="xp-section" id="ncs" aria-labelledby="xp-heading">
          <div className="xp-head">
            <h2 className="xp-title" id="xp-heading">
              Where I&apos;ve worked and studied
            </h2>
            <button
              type="button"
              className="xp-all"
              aria-pressed={showAll}
              onClick={(e) => {
                // Collapsing a long list would leave the page scrolled past the section
                const section = e.currentTarget.closest("section");
                if (showAll && section.getBoundingClientRect().top < 0) {
                  section.scrollIntoView();
                }
                setShowAll((prev) => !prev);
              }}
            >
              {showAll ? "Back to the list" : "Show everything"}
            </button>
          </div>

          <div ref={xpContainerRef} className={`xp${showAll ? " all" : ""}`}>
            <div className="xp-list" role="tablist" aria-orientation="vertical" aria-label="Work and study">
              <div className="xp-ind" style={xpIndStyle} aria-hidden="true" />
              {xpEntries.map((entry, index) => {
                const prevGroup = index > 0 ? xpEntries[index - 1].group : entry.group;
                const showSeparator = entry.group !== prevGroup;
                const isSelected = activeXp === entry.id;
                return (
                  <Fragment key={entry.id}>
                    {showSeparator && <div className="xp-sep" role="separator" aria-hidden="true" />}
                    <button
                      ref={(el) => {
                        xpItemRefs.current[entry.id] = el;
                      }}
                      type="button"
                      id={`xp-tab-${entry.id}`}
                      role="tab"
                      aria-selected={isSelected}
                      aria-controls={`xp-panel-${entry.id}`}
                      tabIndex={isSelected ? 0 : -1}
                      className={`xp-item${isSelected ? " active" : ""}`}
                      onClick={() => setActiveXp(entry.id)}
                      onKeyDown={(e) => handleXpKeyDown(index, e)}
                    >
                      <img src={entry.logo} alt="" />
                      <div>
                        <b>{entry.name}</b>
                        <span>{entry.navSub}</span>
                      </div>
                    </button>
                  </Fragment>
                );
              })}
            </div>

            <div
              className="xp-panels"
              style={showAll || xpPanelsHeight === null ? undefined : { height: xpPanelsHeight }}
            >
              <div ref={xpPanelsRef}>
                {xpEntries.map((entry, index) => {
                  const isActive = activeXp === entry.id;
                  const startsGroup = index === 0 || xpEntries[index - 1].group !== entry.group;
                  return (
                    <div
                      key={entry.id}
                      id={`xp-panel-${entry.id}`}
                      role="tabpanel"
                      aria-labelledby={`xp-tab-${entry.id}`}
                      className={`xp-panel${isActive ? " active" : ""}`}
                    >
                      {showAll && (
                        <div className="xp-org">
                          {startsGroup && (
                            <div className="xp-group">{entry.group === "work" ? "Work" : "Study"}</div>
                          )}
                          <div className="xp-org-card">
                            <img src={entry.logo} alt="" />
                            <div>
                              <b>{entry.name}</b>
                              <span>{entry.navSub}</span>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="xp-content">
                        <h3 className="xp-role">{entry.role}</h3>
                        <div className="xp-meta">{entry.meta}</div>
                        {entry.summary && <p className="xp-sum">{entry.summary}</p>}

                        {entry.facts && (
                          <div className="xp-facts">
                            {entry.facts.map((fact) => (
                              <div key={fact.label}>
                                <b>{fact.value}</b>
                                <span>{fact.label}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {entry.accordions?.map((row, rowIndex) => {
                          const isOpen = showAll || openRows[entry.id] === rowIndex;
                          return (
                            <div key={row.title} className={`xp-row${isOpen ? " open" : ""}`}>
                              <button
                                type="button"
                                aria-expanded={isOpen}
                                onClick={() => toggleAccordion(entry.id, rowIndex)}
                              >
                                <span className="t">{row.title}</span>
                                <span className="c" aria-hidden="true">
                                  ▶
                                </span>
                              </button>
                              <div className="xp-body">
                                <div>
                                  <p>{row.body}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}

                        {entry.lines?.map((line) => (
                          <div key={line.label} className="xp-line">
                            {line.label} <span>{line.value}</span>
                          </div>
                        ))}

                        {entry.stack && <div className="xp-stack">{entry.stack}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="tb-section" aria-label="Technical toolbox">
          <div className="tb">
            {TOOLBOX_COLUMNS.map((col) => (
              <div key={col.heading}>
                <h3>{col.heading}</h3>
                <p>
                  {col.items.map((tech, idx) => (
                    <Fragment key={tech}>
                      {idx > 0 && <br />}
                      {tech}
                    </Fragment>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
