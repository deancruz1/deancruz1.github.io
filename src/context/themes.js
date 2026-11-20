export const THEMES = [
  { id: "dean-dark", label: "Moss", swatch: "#c4e86b" },
  { id: "dean-light", label: "Daylight", swatch: "#eef0e6" },
];

const VALID_THEMES = new Set(THEMES.map((t) => t.id));

export function normalizeTheme(value) {
  if (value === "dark") return "dean-dark";
  if (value === "light") return "dean-light";
  return VALID_THEMES.has(value) ? value : "dean-dark";
}
