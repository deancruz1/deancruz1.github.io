import { useEffect } from "react";
import "./Background.css";

export default function Background() {
  useEffect(() => {
    const root = document.documentElement;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (motionQuery.matches) {
      root.style.setProperty("--mx", "-999px");
      root.style.setProperty("--my", "-999px");
      return;
    }

    let rafId = null;
    let latestX = -999;
    let latestY = -999;

    const commit = () => {
      rafId = null;
      root.style.setProperty("--mx", `${latestX}px`);
      root.style.setProperty("--my", `${latestY}px`);
    };

    const handlePointerMove = (e) => {
      if (e.pointerType && e.pointerType !== "mouse") return;
      latestX = e.clientX;
      latestY = e.clientY;
      if (rafId === null) {
        rafId = window.requestAnimationFrame(commit);
      }
    };

    const handlePointerLeave = () => {
      latestX = -999;
      latestY = -999;
      if (rafId === null) {
        rafId = window.requestAnimationFrame(commit);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div aria-hidden="true">
      <div className="dean-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <div className="dean-grid-static" />
      <div className="dean-grid-cursor" />
    </div>
  );
}
