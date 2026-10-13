import { useEffect, useRef, useState } from "react";
import { keyClick, startDrone, whoosh, speak } from "./introSound";
import "./HackerScreen.css";

// Lines typed out on the terminal. Edit freely.
const BOOT_LINES = [
  "$ ssh ninja@azureninjas.in",
  "> establishing secure tunnel ............ ok",
  "> az login --identity .................... ok",
  "> loading modules: security, devops, ai, leadership",
  "> scanning perimeter ..................... 0 threats",
  "> access level: shadow",
  "$ whoami",
  "sanjeev rana | azure security ninja",
];

// What the voice says when someone enters
const VOICE_LINE = "Access granted. Welcome to the dojo.";

const GLYPHS = "01{}[]()<>=+-*/$#;:azvmrgkvnsgbicepkql".split("");
const FULL_TEXT = BOOT_LINES.join("\n");

export default function HackerScreen({ onEnter }) {
  const canvasRef = useRef(null);
  const [typed, setTyped] = useState("");
  const [leaving, setLeaving] = useState(false);
  // "idle" = not started yet, "on" = playing, "muted" = visitor turned it off
  const [sound, setSound] = useState("idle");
  const soundRef = useRef(sound);
  const stopDroneRef = useRef(null);
  const ready = typed.length === FULL_TEXT.length;

  soundRef.current = sound;

  // Load voices early (Chrome loads them async)
  useEffect(() => {
    if ("speechSynthesis" in window) window.speechSynthesis.getVoices();
  }, []);

  // Code rain
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const size = 16;
    let w, h, cols, drops, raf, last = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(w / size);
      drops = Array.from({ length: cols }, () => Math.random() * -(h / size));
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = (t) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 50) return;
      last = t;
      ctx.fillStyle = "rgba(5, 11, 22, 0.14)";
      ctx.fillRect(0, 0, w, h);
      ctx.font = `${size}px "JetBrains Mono", monospace`;
      for (let i = 0; i < cols; i++) {
        const y = drops[i] * size;
        ctx.fillStyle = Math.random() > 0.975 ? "#e6f6ff" : "rgba(76, 201, 255, 0.45)";
        ctx.fillText(GLYPHS[(Math.random() * GLYPHS.length) | 0], i * size, y);
        if (y > h && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };
    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Typewriter (ticks only once sound is on)
  useEffect(() => {
    let i = 0, id;
    const tick = () => {
      i++;
      setTyped(FULL_TEXT.slice(0, i));
      const ch = FULL_TEXT[i - 1];
      if (soundRef.current === "on" && ch !== " " && ch !== "\n" && ch !== ".") keyClick();
      if (i < FULL_TEXT.length) id = setTimeout(tick, ch === "\n" ? 260 : 16);
    };
    id = setTimeout(tick, 500);
    return () => clearTimeout(id);
  }, []);

  // Stop the hum when this screen goes away
  useEffect(() => () => stopDroneRef.current?.(), []);

  const toggleSound = (e) => {
    e.stopPropagation(); // don't trigger "enter"
    if (sound === "on") {
      stopDroneRef.current?.();
      stopDroneRef.current = null;
      setSound("muted");
    } else {
      stopDroneRef.current = startDrone();
      setSound("on");
    }
  };

  const enter = () => {
    if (leaving) return;
    if (sound !== "muted") {
      whoosh();
      speak(VOICE_LINE);
    }
    stopDroneRef.current?.();
    stopDroneRef.current = null;
    setLeaving(true);
  };

  // Keyboard enter + hand-off to the shuriken Intro
  useEffect(() => {
    if (leaving) {
      const id = setTimeout(onEnter, 350);
      return () => clearTimeout(id);
    }
    const onKey = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        enter();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div
      className={`hs ${leaving ? "hs--leaving" : ""}`}
      onClick={enter}
      role="button"
      tabIndex={0}
      aria-label="Enter site"
    >
      <canvas ref={canvasRef} className="hs__rain" />
      <div className="hs__terminal">
        <div className="hs__bar">
          <span /><span /><span />
          <em>ninja@azureninjas: ~</em>
          <button
            type="button"
            className={`hs__sound ${sound === "on" ? "is-on" : ""}`}
            onClick={toggleSound}
            onKeyDown={(e) => e.stopPropagation()}
            aria-pressed={sound === "on"}
          >
            {sound === "on" ? "Sound on" : "Sound off"}
          </button>
        </div>
        <pre className="hs__body">
          {typed.split("\n").map((line, i) => (
            <div
              key={i}
              className={line.startsWith("$") ? "hs__cmd" : line.startsWith(">") ? "hs__log" : "hs__out"}
            >
              {line}
            </div>
          ))}
          <span className="hs__caret">█</span>
        </pre>
        <p className={`hs__enter ${ready ? "is-ready" : ""}`}>
          Click anywhere or press Enter to continue
        </p>
      </div>
    </div>
  );
}
