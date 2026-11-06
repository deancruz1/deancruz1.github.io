import { StrictMode } from "react";
import { Buffer } from "node:buffer";
import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "../src/context/ThemeProvider";
import HydrationGate from "../src/components/HydrationGate.jsx";
import App from "../src/App.jsx";

// The same tree as src/main.jsx, so the browser can hydrate the result.
// Resolves once every lazy-loaded part of the page has rendered.
export const renderPage = (path) =>
  new Promise((resolve, reject) => {
    globalThis.__prerenderPath = path;
    const chunks = [];
    const output = new Writable({
      write(chunk, _encoding, done) {
        chunks.push(chunk);
        done();
      },
      final(done) {
        resolve(Buffer.concat(chunks).toString("utf8"));
        done();
      },
    });

    const { pipe } = renderToPipeableStream(
      <StrictMode>
        <HelmetProvider>
          <ThemeProvider>
            <HydrationGate>
              <App />
            </HydrationGate>
          </ThemeProvider>
        </HelmetProvider>
      </StrictMode>,
      {
        // Keep every section where it belongs in the HTML. By default React
        // moves large sections to the end and swaps them in with a script.
        progressiveChunkSize: Infinity,
        onAllReady() {
          pipe(output);
        },
        onShellError: reject,
        onError: reject,
      },
    );
  });
