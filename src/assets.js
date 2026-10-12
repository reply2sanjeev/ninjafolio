// Resolves "logo" file names from portfolio.js to bundled image URLs.
const files = import.meta.glob("./assets/images/*", { eager: true, import: "default" });
const byName = Object.fromEntries(
  Object.entries(files).map(([path, url]) => [path.split("/").pop(), url])
);
export const img = (name) => byName[name];
