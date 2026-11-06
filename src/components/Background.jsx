import { useEffect, useRef } from "react";
import "./Background.css";

// Seconds each light takes to close about two thirds of the gap to the cursor.
// Order matches the orbs below: violet, blue, pink.
const CHASE_SECONDS = [1.2, 2, 3];

export default function Background() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    // Touch screens have no cursor to follow: the lights stay at their
    // resting spot (Background.css) and the grid glow stays off
    if (window.matchMedia("(hover: none)").matches) return;

    // Cursor position, or a resting spot until it first moves
    // (same spot as --orb-rest-x/y in Background.css)
    const narrow = window.innerWidth < 768;
    const light = {
      x: window.innerWidth * (narrow ? 0.8 : 0.75),
      y: window.innerHeight * (narrow ? 0.38 : 0.45),
    };

    // Grid glow: sits exactly on the cursor
    let glowFrame = 0;

    const paintGlow = () => {
      glowFrame = 0;

      // Each grid needs the position in its own coordinates
      const grids = [...document.querySelectorAll(".grid-overlay")];
      const rects = grids.map((el) => el.getBoundingClientRect());
      grids.forEach((el, i) => {
        el.style.setProperty("--glow-x", `${light.x - rects[i].left}px`);
        el.style.setProperty("--glow-y", `${light.y - rects[i].top}px`);
      });
    };

    const requestGlow = () => {
      if (!glowFrame) glowFrame = requestAnimationFrame(paintGlow);
    };

    // Coloured lights: chase the cursor, each at its own pace
    const orbEls = [...backgroundRef.current.children];
    const orbs = orbEls.map(() => ({ x: light.x, y: light.y }));
    let chaseFrame = 0;
    let lastTime = 0;

    const chase = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      let moving = false;

      orbs.forEach((orb, i) => {
        const step = 1 - Math.exp(-dt / CHASE_SECONDS[i]);
        orb.x += (light.x - orb.x) * step;
        orb.y += (light.y - orb.y) * step;
        orbEls[i].style.transform = `translate(${orb.x}px, ${orb.y}px)`;
        if (Math.abs(light.x - orb.x) > 0.5 || Math.abs(light.y - orb.y) > 0.5) {
          moving = true;
        }
      });

      chaseFrame = moving ? requestAnimationFrame(chase) : 0;
    };

    const startChase = () => {
      if (chaseFrame) return;
      lastTime = performance.now();
      chaseFrame = requestAnimationFrame(chase);
    };

    const handleMouseMove = (e) => {
      light.x = e.clientX;
      light.y = e.clientY;
      requestGlow();
      startChase();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", requestGlow, { passive: true });
    requestGlow();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", requestGlow);
      cancelAnimationFrame(glowFrame);
      cancelAnimationFrame(chaseFrame);
    };
  }, []);

  return (
    <div className="background" ref={backgroundRef}>
      <div className="orb orb-violet"></div>
      <div className="orb orb-blue"></div>
      <div className="orb orb-pink"></div>
    </div>
  );
}
