import { StrictMode } from "react";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeProvider";
import "./index.css";
import App from "./App.jsx";

// Import the single-page SSG wrapper instead of react-dom/client
import { ViteReactSSG } from "vite-react-ssg/single-page";

// CRITICAL: Guard window/browser-only logic so it doesn't crash the Node build process
if (typeof window !== "undefined") {
  const params = new URLSearchParams(window.location.search);
  const redirect = params.get("p");

  if (redirect) {
    window.history.replaceState(
      null,
      "",
      import.meta.env.BASE_URL.replace(/\/$/, "") + redirect,
    );
  }
}

// Export createRoot using ViteReactSSG, wrapping all your existing providers
export const createRoot = ViteReactSSG(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>
);