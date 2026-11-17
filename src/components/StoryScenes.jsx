import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import foundationsHero from "../assets/img/project-gallery/portfolio-website/01.webp";
import shrineCard from "../assets/img/project-cards/landing-page.webp";
import handlerCard from "../assets/img/project-cards/fansite.webp";
import kirokuCard from "../assets/img/project-cards/kiroku.webp";
import uraraCard from "../assets/img/project-cards/urara.webp";
import oshiwatchCard from "../assets/img/project-cards/oshiwatch.webp";
import cubehandCard from "../assets/img/project-cards/cubehand.webp";
import xdPhone from "../assets/img/project-gallery/wireframe/01.webp";
import skillforgeShot from "../assets/img/project-gallery/skillforge/02.webp";
import rpLogo from "../assets/img/rp.webp";
import ocbcLogo from "../assets/img/logo-ocbc.webp";
import ncsLogo from "../assets/img/logo-ncs.webp";
import "./StoryScenes.css";

function FoundationsScene() {
  return (
    <div className="scene scene-foundations">
      <img className="scene-zoom" src={foundationsHero} alt="Foundations (2023) moonlit mountain hero" />
      <Link to="/projects/portfolio-website" className="scene-chip">
        See Foundations →
      </Link>
    </div>
  );
}

const LEDGER = [
  {
    years: "2022–25",
    logo: rpLogo,
    place: "Republic Polytechnic",
    role: "Diploma",
    detail: (
      <>
        3.97 GPA, and the <em>IMDA Gold Medal</em> for top of the cohort.
      </>
    ),
  },
  {
    years: "2024–25",
    logo: ocbcLogo,
    place: "OCBC",
    role: "Software Test Engineer",
    detail: "Automated 800+ banking test cases across web, Android and iOS.",
  },
  {
    years: "2026–",
    logo: ncsLogo,
    place: "NCS Group",
    role: "Software Engineer",
    detail: (
      <>
        Full-time, with my degree sponsored through the Fusion{" "}
        <span className="whitespace-nowrap">Work-Study</span> Programme.
      </>
    ),
  },
];

// A plain résumé-style list: years down the side, one line on what happened
function MedalScene() {
  return (
    <div className="scene scene-ledger">
      <ol className="ledger">
        {LEDGER.map((row, i) => (
          <li key={row.place} style={{ "--d": `${0.08 + i * 0.12}s` }}>
            <span className="ledger-years">{row.years}</span>
            <div>
              <p className="ledger-place">
                <img src={row.logo} alt="" />
                {row.place}
                <span>{row.role}</span>
              </p>
              <p className="ledger-detail">{row.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

const BUILDS = [
  { slug: "landing-page", title: "Shrine of Suisei", blurb: "HTML, CSS and JS fan shrine", image: shrineCard },
  { slug: "fansite", title: "Handler One", blurb: "86 Eighty-Six fansite in React and three.js", image: handlerCard },
  { slug: "kiroku", title: "Kiroku", blurb: "Anime tracker in Next.js", image: kirokuCard },
  { slug: "urara", title: "Urara", blurb: "Umamusume guide in React", image: uraraCard },
  { slug: "oshiwatch", title: "Oshiwatch", blurb: "Hololive stream tracker in React", image: oshiwatchCard },
  { slug: "cubehand", title: "Cubehand", blurb: "Minecraft bot in Node.js", image: cubehandCard },
];

// How far a card has to be dragged before it counts as a swipe
const SWIPE_DISTANCE = 70;

// A deck of project cards: drag or swipe the top card away to see the next,
// tap it to open the project. Loops back to the start after the last card.
function BuildsScene() {
  const navigate = useNavigate();
  const [top, setTop] = useState(0);
  const [dx, setDx] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [leaving, setLeaving] = useState(0);
  const startX = useRef(0);
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const next = (dir = -1) => {
    if (leaving) return;
    setLeaving(dir);
    timer.current = setTimeout(() => {
      setTop((t) => (t + 1) % BUILDS.length);
      setLeaving(0);
      setDx(0);
    }, 260);
  };

  const prev = () => {
    if (leaving) return;
    setDx(0);
    setTop((t) => (t - 1 + BUILDS.length) % BUILDS.length);
  };

  const onPointerDown = (e) => {
    if (e.button !== 0 || leaving) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    startX.current = e.clientX;
    setDragging(true);
  };

  const onPointerMove = (e) => {
    if (dragging) setDx(e.clientX - startX.current);
  };

  const onPointerUp = () => {
    if (!dragging) return;
    setDragging(false);
    if (Math.abs(dx) > SWIPE_DISTANCE) next(Math.sign(dx));
    else if (Math.abs(dx) < 6) navigate(`/projects/${BUILDS[top].slug}`);
    else setDx(0);
  };

  // The top card plus the two waiting behind it, drawn back to front
  const stack = [2, 1, 0].map((k) => ({ k, build: BUILDS[(top + k) % BUILDS.length] }));
  const topStyle = leaving
    ? { transform: `translateX(${leaving * 130}%) rotate(${leaving * 18}deg)`, opacity: 0 }
    : { transform: `translateX(${dx}px) rotate(${dx * 0.05}deg)` };

  return (
    <div className="scene scene-builds">
      <div className="deck">
        {stack.map(({ k, build }) =>
          k === 0 ? (
            <div
              key={build.slug}
              className={`deck-card top${dragging ? " dragging" : ""}`}
              style={topStyle}
              role="link"
              tabIndex={0}
              aria-label={`${build.title}, open project`}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={() => {
                setDragging(false);
                setDx(0);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") navigate(`/projects/${build.slug}`);
                if (e.key === "ArrowRight") next(-1);
                if (e.key === "ArrowLeft") prev();
              }}
            >
              <div className="deck-card-inner">
                <img src={build.image} alt="" draggable="false" />
                <div className="deck-card-label">
                  <div>
                    <b>{build.title}</b>
                    <span>{build.blurb}</span>
                  </div>
                  <i aria-hidden="true">↗</i>
                </div>
              </div>
            </div>
          ) : (
            <div
              key={build.slug}
              className="deck-card"
              style={{ "--k": k, "--r": k === 1 ? "3deg" : "-3.5deg" }}
              aria-hidden="true"
            >
              <div className="deck-card-inner">
                <img src={build.image} alt="" draggable="false" />
              </div>
            </div>
          ),
        )}
      </div>

      <div className="deck-controls">
        <button type="button" aria-label="Previous project" onClick={prev}>
          ‹
        </button>
        <span className="deck-count">
          {top + 1} / {BUILDS.length}
        </span>
        <button type="button" aria-label="Next project" onClick={() => next(-1)}>
          ›
        </button>
      </div>
    </div>
  );
}

function FlowsScene() {
  return (
    <div className="scene scene-flows">
      <figure className="flow-phone">
        <img src={xdPhone} alt="Mobile XD prototype home screen" />
        <figcaption>Adobe XD prototype</figcaption>
      </figure>

      <div className="flow-link" aria-hidden="true">
        <span />
      </div>

      <figure className="flow-app">
        <div className="flow-browser">
          <div className="flow-dots">
            <i />
            <i />
            <i />
          </div>
          <img src={skillforgeShot} alt="SkillForge course page with quiz" />
        </div>
        <figcaption>Shipped app with a real database</figcaption>
      </figure>
    </div>
  );
}

const SCENES = {
  foundations: FoundationsScene,
  medal: MedalScene,
  builds: BuildsScene,
  flows: FlowsScene,
};

export default function StoryScene({ scene }) {
  const Scene = SCENES[scene];
  return Scene ? <Scene /> : null;
}
