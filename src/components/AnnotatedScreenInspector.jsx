import { Fragment, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import "../styles/uf-explorer.css";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

function renderInlineCode(text) {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, idx) => {
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={idx}>{part.slice(1, -1)}</code>;
    }
    return <Fragment key={idx}>{part}</Fragment>;
  });
}

function rectToStyle(rect, view) {
  return {
    left: `${((rect[0] - view[0]) / view[2]) * 100}%`,
    top: `${((rect[1] - view[1]) / view[3]) * 100}%`,
    width: `${(rect[2] / view[2]) * 100}%`,
    height: `${(rect[3] / view[3]) * 100}%`,
  };
}

export default function AnnotatedScreenInspector({ project }) {
  const screen = project.annotatedScreen;
  const [activeIndex, setActiveIndex] = useState(0);
  const [instantSpot, setInstantSpot] = useState(true);
  const [barStyle, setBarStyle] = useState({ height: 0, transform: "translateY(0px)" });

  const notesRef = useRef(null);
  const noteRefs = useRef([]);

  const notesWithPins = useMemo(() => {
    const result = [];
    let count = 0;
    for (const note of screen.notes) {
      if (note.rect) {
        count += 1;
        result.push({ ...note, pin: count });
      } else {
        result.push({ ...note, pin: 0 });
      }
    }
    return result;
  }, [screen.notes]);

  useEffect(() => {
    let raf2 = null;
    const raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(() => setInstantSpot(false));
    });
    return () => {
      window.cancelAnimationFrame(raf1);
      if (raf2 !== null) window.cancelAnimationFrame(raf2);
    };
  }, []);

  useIsomorphicLayoutEffect(() => {
    const updateBar = () => {
      const el = noteRefs.current[activeIndex];
      if (!el || !el.offsetHeight) return;
      setBarStyle({
        height: `${Math.max(0, el.offsetHeight - 24)}px`,
        transform: `translateY(${el.offsetTop + 12}px)`,
      });
    };

    updateBar();
    const container = notesRef.current;
    if (!container || typeof ResizeObserver === "undefined") return undefined;
    const observer = new ResizeObserver(updateBar);
    observer.observe(container);
    return () => observer.disconnect();
  }, [activeIndex, project.slug]);

  const activeNote = notesWithPins[activeIndex] || notesWithPins[0];
  const spotStyle = rectToStyle(activeNote?.rect || screen.view, screen.view);
  const panStyle = {
    width: `${(screen.baseWidth / screen.view[2]) * 100}%`,
    left: `${(-screen.view[0] / screen.view[2]) * 100}%`,
    top: `${(-screen.view[1] / screen.view[3]) * 100}%`,
  };

  return (
    <section className="uf-section pd-inspector-section" aria-labelledby="inspector-heading">
      <div className="xp-head">
        <h2 className="xp-title" id="inspector-heading">
          Under the interface
        </h2>
      </div>

      <div className="uf">
        <div>
          <div
            className={`uf-frame${screen.portrait ? " portrait" : ""}`}
            style={{ aspectRatio: `${screen.view[2]} / ${screen.view[3]}` }}
          >
            <img
              className="pan-fit"
              src={screen.image}
              alt={`Screenshot: ${screen.caption}`}
              style={panStyle}
            />
            <div
              className={`uf-spot${activeNote?.rect ? "" : " whole"}${instantSpot ? " instant" : ""}`}
              style={spotStyle}
              aria-hidden="true"
            />
            {notesWithPins.map((note, idx) => {
              if (!note.rect) return null;
              return (
                <button
                  key={note.title}
                  type="button"
                  className={`uf-hit tag-${note.tag}${activeIndex === idx ? " active" : ""}`}
                  style={rectToStyle(note.rect, screen.view)}
                  aria-label={`${note.pin}: ${note.title}`}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onFocus={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                >
                  <span className="uf-tag">{note.pin}</span>
                </button>
              );
            })}
          </div>

          <div className="uf-cap">
            <span>
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noreferrer">
                  Live ↗
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  Code ↗
                </a>
              )}
            </span>
          </div>
        </div>

        <div className="uf-notes" ref={notesRef}>
          <div className="uf-bar" style={barStyle} aria-hidden="true" />
          {notesWithPins.map((note, idx) => (
            <button
              key={note.title}
              ref={(el) => {
                noteRefs.current[idx] = el;
              }}
              type="button"
              className={`uf-note${activeIndex === idx ? " active" : ""}`}
              aria-pressed={activeIndex === idx}
              onMouseEnter={() => setActiveIndex(idx)}
              onFocus={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
            >
              <span className={`m${note.pin ? "" : " whole"}`}>{note.pin || ""}</span>
              <span className="t">{note.title}</span>
              <p>{renderInlineCode(note.body)}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
