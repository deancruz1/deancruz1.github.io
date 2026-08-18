import { useContext, useState, useEffect } from "react";
import ThemeContext from "./ThemeContext"; // Adjust path if needed based on your setup

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  // Only run on initial mount to set the starting theme class
  useEffect(() => {
    document.documentElement.className = theme;
  }, []);

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