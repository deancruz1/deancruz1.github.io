import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "../src/context/ThemeProvider";
import HydrationGate from "../src/components/HydrationGate.jsx";
import App from "../src/App.jsx";

// The same tree as src/main.jsx, so the browser can hydrate the result
export const renderPage = (path) => {
  globalThis.__prerenderPath = path;
  return renderToString(
    <StrictMode>
      <HelmetProvider>
        <ThemeProvider>
          <HydrationGate>
            <App />
          </HydrationGate>
        </ThemeProvider>
      </HelmetProvider>
    </StrictMode>,
  );
};
