import { useSyncExternalStore } from "react";

const subscribe = () => () => {};

// Pages written by scripts/prerender-meta.mjs ship an empty root. Hydration
// expects the first render to match what is already in the page, so on those
// pages the first render is empty and the app mounts right after.
const rootHasMarkup = () =>
  typeof window === "undefined" ||
  Boolean(document.getElementById("root")?.hasChildNodes());

const HydrationGate = ({ children }) => {
  const ready = useSyncExternalStore(subscribe, () => true, rootHasMarkup);

  return ready ? children : null;
};

export default HydrationGate;
