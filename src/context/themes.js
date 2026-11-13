export const THEMES = [
  { id: "dean-dark", label: "Midnight Slate", swatch: "#6d5dfc" },
  { id: "foundations", label: "Foundations Sage", swatch: "#68b096" },
  { id: "dean-light", label: "Daylight", swatch: "#eff1f5" },
];

const VALID_THEMES = new Set(THEMES.map((t) => t.id));

export function normalizeTheme(value) {
  if (value === "dark") return "dean-dark";
  if (value === "light") return "dean-light";
  return VALID_THEMES.has(value) ? value : "dean-dark";
}
