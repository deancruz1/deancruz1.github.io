import { useState, useEffect, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import { normalizeTheme } from "./themes";

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return normalizeTheme(saved);
      return window.matchMedia("(prefers-color-scheme: light)").matches ? "dean-light" : "dean-dark";
    }
    return "dean-dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme === "dean-light" ? "light" : "dark");
  }, [theme]);

  const setTheme = useCallback((nextValue) => {
    const next = normalizeTheme(nextValue);
    setThemeState(next);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", next);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(next === "dean-light" ? "light" : "dark");
      localStorage.setItem("theme", next);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dean-light" ? "dean-dark" : "dean-light");
  }, [theme, setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
