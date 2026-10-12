import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../hooks";

const GLYPHS = "01<>/\\#$%&*+=?";
const HOLD = 5200;     // ms each role stays (long enough for its query card to type out)
const DECODE = 650;    // ms to decode the next role

// Cycles through roles with a terminal "decode" effect.
// The active index lives in Hero so the query card can follow the selected role.
export default function Tagline({ items, ready, index, onIndexChange }) {
  const reduced = useReducedMotion();
  const [text, setText] = useState(items[index]);
  const [resolving, setResolving] = useState(false);
  const [paused, setPaused] = useState(false);
  const raf = useRef();

  // Decode animation whenever the index changes
  useEffect(() => {
    const target = items[index];
    if (reduced) {
      setText(target);
      return;
    }
    const start = performance.now();
    setResolving(true);
    const tick = (now) => {
      const p = Math.min(1, (now - start) / DECODE);
      const fixed = Math.floor(p * target.length);
      let out = target.slice(0, fixed);
      for (let i = fixed; i < target.length; i++) {
        out += target[i] === " " ? " " : GLYPHS[(Math.random() * GLYPHS.length) | 0];
      }
      setText(out);
      if (p < 1) raf.current = requestAnimationFrame(tick);
      else setResolving(false);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [index, items, reduced]);

  // Auto-advance
  useEffect(() => {
    if (!ready || reduced || paused || items.length < 2) return;
    const t = setTimeout(() => onIndexChange((index + 1) % items.length), HOLD + DECODE);
    return () => clearTimeout(t);
  }, [index, ready, reduced, paused, items.length, onIndexChange]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <p className="hero__tagline">
        <span className="sr-only">{items.join(", ")}</span>
        <span className={`hero__tagline-text ${resolving ? "is-resolving" : ""}`} aria-hidden="true">
          {text}
        </span>
      </p>
      <ul className="hero__roles" aria-hidden="true">
        {items.map((r, i) => (
          <li key={r} aria-current={i === index} onClick={() => onIndexChange(i)}>
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}
