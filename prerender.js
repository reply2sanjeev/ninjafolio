// Runs after both Vite builds: renders <App /> to HTML and injects it
// into dist/index.html so crawlers see real content without JavaScript.
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const htmlFile = path.resolve("dist/index.html");
const ssrEntry = pathToFileURL(path.resolve("dist-ssr/entry-server.js")).href;

const { render } = await import(ssrEntry);
const template = fs.readFileSync(htmlFile, "utf-8");

if (!template.includes("<!--app-html-->")) {
  throw new Error("Placeholder <!--app-html--> not found in dist/index.html");
}

fs.writeFileSync(htmlFile, template.replace("<!--app-html-->", render()));
fs.rmSync("dist-ssr", { recursive: true, force: true });
console.log("Pre-rendered dist/index.html");
