// Used only at build time by prerender.js — never shipped to the browser.
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

export function render() {
  return renderToString(<App />);
}
