import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "../hooks";

const GLYPHS = "01<>/\\#$%&*+=?";
const HOLD = 2600;     // ms each role stays readable
const DECODE = 650;    // ms to decode the next role

// Cycles through roles with a terminal "decode" effect.
// A row of role chips underneath shows all of them and lets people jump to one.
export default function Tagline({ items, ready }) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(items[0]);
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
    const t = setTimeout(() => setIndex((i) => (i + 1) % items.length), HOLD + DECODE);
    return () => clearTimeout(t);
  }, [index, ready, reduced, paused, items.length]);

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
          <li key={r} aria-current={i === index} onClick={() => setIndex(i)}>
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}
