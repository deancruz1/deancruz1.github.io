import { useEffect, useState, useRef } from "react";
import "./Background.css";

export default function Background() {
  const [drift, setDrift] = useState([
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]);

  const mouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const xRatio = e.clientX / window.innerWidth;
      const yRatio = e.clientY / window.innerHeight;

      mouse.current.x = xRatio;
      mouse.current.y = yRatio;

      const strength = 0.25 + xRatio * 0.75;

      document.documentElement.style.setProperty("--mouse-x", mouse.current.x);
      document.documentElement.style.setProperty("--mouse-y", mouse.current.y);
      document.documentElement.style.setProperty("--mouse-strength", strength);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const generateRandomDrift = () => {
      setDrift([
        {
          x: Math.floor(Math.random() * 300) - 150,
          y: Math.floor(Math.random() * 200) - 100,
        },
        {
          x: Math.floor(Math.random() * 400) - 200,
          y: Math.floor(Math.random() * 300) - 150,
        },
        {
          x: Math.floor(Math.random() * 300) - 150,
          y: Math.floor(Math.random() * 200) - 100,
        },
      ]);
    };

    generateRandomDrift();
    const driftInterval = setInterval(generateRandomDrift, 3500);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(driftInterval);
    };
  }, []);

  return (
    <div className="background">
      <div
        className="blob-container wrapper1"
        style={{ transform: `translate(${drift[0].x}px, ${drift[0].y}px)` }}
      >
        <div className="blob blob1"></div>
      </div>

      <div
        className="blob-container wrapper2"
        style={{ transform: `translate(${drift[1].x}px, ${drift[1].y}px)` }}
      >
        <div className="blob blob2"></div>
      </div>

      <div
        className="blob-container wrapper3"
        style={{ transform: `translate(${drift[2].x}px, ${drift[2].y}px)` }}
      >
        <div className="blob blob3"></div>
      </div>
    </div>
  );
}
