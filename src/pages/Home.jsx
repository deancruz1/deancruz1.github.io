import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import WindowBar from "../components/WindowBar";
import { getArchiveProjects, getFeaturedProjects } from "../data/project-info-home.jsx";
import "./Home.css";

export default function Home() {
  const featured = getFeaturedProjects();
  const archive = getArchiveProjects();

  return (
    <>
      <Helmet>
        <title>Dean Cruz - Software Engineer</title>
      </Helmet>

      <main className="site-container view-fade">
        <section className="hero-section">
          <div className="bezel-outer hero-bezel">
            <div className="bezel-inner">
              <WindowBar />

              <div className="hero-stage">
                <p className="hero-overline">Dean Cruz — Software Engineer</p>
                <h1 className="hero-headline">
                  I craft fast <span className="hi-accent">interfaces</span>
                  <br />
                  &amp; modernise <span className="hi-accent">systems</span>
                  <span className="accent-dot">.</span>
                </h1>

                <div className="hero-bio-right">
                  <strong>Engineer at NCS Group. Based in Singapore.</strong>
                  <span>Formerly at OCBC Bank &amp; Republic Polytechnic.</span>
                </div>
              </div>
            </div>
          </div>

          <a
            href="#selected-work"
            className="hero-down-arrow"
            aria-label="Scroll to projects"
          >
            ↓
          </a>

          <a href="#selected-work" className="hero-scroll-row">
            <span aria-hidden="true">↓</span> Selected Work
          </a>
        </section>

        <section className="work-stack" id="selected-work" aria-label="Selected projects">
          {featured.map((project, index) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="bezel-outer stage-card"
            >
              <div className="bezel-inner">
                <div className={`stage-wash ${project.stageMeta.glow}`} aria-hidden="true" />
                <div className="stage-card-head">
                  <div>
                    <h2 className="stage-title">{project.title}</h2>
                    <p className="stage-subline">
                      <b>{project.stageMeta.stack}</b> — {project.stageMeta.summary}
                    </p>
                  </div>
                  <span className="stage-arrow" aria-hidden="true">
                    →
                  </span>
                </div>

                <div className="stage-viewport">
                  <div className="stage-browser">
                    <WindowBar />
                    <img
                      className="stage-shot"
                      src={project.image}
                      alt={project.stageMeta.alt}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </section>

        <section className="archive-section" aria-label="Project archive">
          <div className="archive-list">
            {archive.map((project) => (
              <Link
                key={project.slug}
                to={`/projects/${project.slug}`}
                className="archive-row"
              >
                <span className="archive-row-name">{project.title}</span>
                <span className="archive-row-desc">{project.archiveMeta.desc}</span>
                <span className="archive-row-stack">{project.archiveMeta.stack} →</span>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
