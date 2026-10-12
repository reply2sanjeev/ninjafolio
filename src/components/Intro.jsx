import { useEffect } from "react";
import Shuriken from "./Shuriken";

// Katana slash: a blade of light cuts the screen, the two halves fall away.
export default function Intro({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1350);
    const skip = (e) => (e.key === "Escape" || e.key === "Enter" || e.key === " ") && onDone();
    window.addEventListener("keydown", skip);
    return () => {
      clearTimeout(t);
      window.removeEventListener("keydown", skip);
    };
  }, [onDone]);

  // Match the blade to the diagonal the two halves are cut along.
  const angle = Math.atan((0.24 * window.innerHeight) / window.innerWidth) * (180 / Math.PI);

  return (
    <div className="intro" onClick={onDone} role="presentation" style={{ "--slash": `-${angle}deg` }}>
      <div className="intro__half intro__half--a">
        <Shuriken size={220} className="intro__mark" />
      </div>
      <div className="intro__half intro__half--b">
        <Shuriken size={220} className="intro__mark" />
      </div>
      <div className="intro__blade" />
    </div>
  );
}
