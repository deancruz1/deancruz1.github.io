import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import App from "./App.jsx";

const params = new URLSearchParams(window.location.search);
const redirect = params.get("p");

if (redirect) {
  window.history.replaceState(
    null,
    "",
    import.meta.env.BASE_URL.replace(/\/$/, "") + redirect,
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
);
