import { useState, useEffect } from "react";
import ThemeContext from "./ThemeContext"; // Adjust path if needed based on your setup

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  // Sets the starting theme class; toggleTheme also sets it synchronously
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const nextTheme = prev === "dark" ? "light" : "dark";
      
      // Synchronously update the DOM before React state finishes updating
      // so the View Transitions API takes an accurate snapshot
      document.documentElement.className = nextTheme;
      localStorage.setItem("theme", nextTheme);
      
      return nextTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};