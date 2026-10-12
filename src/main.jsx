import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";

// hydrateRoot (not createRoot): React attaches to the pre-rendered HTML
// instead of throwing it away and re-drawing the page.
hydrateRoot(
  document.getElementById("root"),
  <StrictMode>
    <App />
  </StrictMode>
);
