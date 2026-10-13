import { useEffect, useRef, useState } from "react";
import { keyClick, startDrone, whoosh, speak, blip, unlockAudio } from "./introSound";
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

// Voice lines
const BOOT_VOICE = "Initializing secure connection.";
const ENTER_VOICE = "Access granted. Welcome to the Azure Ninjas World.";

const GLYPHS = "01{}[]()<>=+-*/$#;:azvmrgkvnsgbicepkql".split("");
const FULL_TEXT = BOOT_LINES.join("\n");

export default function HackerScreen({ onEnter }) {
  const canvasRef = useRef(null);
  const [booted, setBooted] = useState(false);
  const [typed, setTyped] = useState("");
  const [leaving, setLeaving] = useState(false);
  const [muted, setMuted] = useState(false);
  const mutedRef = useRef(muted);
  const stopDroneRef = useRef(null);
  const ready = typed.length === FULL_TEXT.length;

  mutedRef.current = muted;

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

  // Typewriter with key clicks, starts after boot
  useEffect(() => {
    if (!booted) return;
    let i = 0, id;
    const tick = () => {
      i++;
      setTyped(FULL_TEXT.slice(0, i));
      const ch = FULL_TEXT[i - 1];
      const next = FULL_TEXT[i];
      if (!mutedRef.current) {
        if (next === "\n" || next === undefined) blip(next === undefined ? 1320 : 880);
        else if (ch !== " " && ch !== "\n" && ch !== ".") keyClick();
      }
      if (i < FULL_TEXT.length) id = setTimeout(tick, ch === "\n" ? 300 : 28);
    };
    id = setTimeout(tick, 700);
    return () => clearTimeout(id);
  }, [booted]);

  // Stop the hum when this screen goes away
  useEffect(() => () => stopDroneRef.current?.(), []);

  const boot = () => {
    unlockAudio(); // first click unlocks browser audio
    if (!muted) {
      stopDroneRef.current = startDrone();
      speak(BOOT_VOICE);
    }
    setBooted(true);
  };

  const enter = () => {
    if (leaving) return;
    if (!muted) {
      whoosh();
      speak(ENTER_VOICE);
    }
    stopDroneRef.current?.();
    stopDroneRef.current = null;
    setLeaving(true);
  };

  // First click boots, next click enters
  const handleAction = () => (booted ? enter() : boot());

  const toggleSound = (e) => {
    e.stopPropagation();
    unlockAudio();
    if (muted) {
      if (booted && !leaving) stopDroneRef.current = startDrone();
      setMuted(false);
    } else {
      stopDroneRef.current?.();
      stopDroneRef.current = null;
      window.speechSynthesis?.cancel();
      setMuted(true);
    }
  };

  // Keyboard + hand-off to the shuriken Intro
  useEffect(() => {
    if (leaving) {
      const id = setTimeout(onEnter, 350);
      return () => clearTimeout(id);
    }
    const onKey = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleAction();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  return (
    <div
      className={`hs ${leaving ? "hs--leaving" : ""}`}
      onClick={handleAction}
      role="button"
      tabIndex={0}
      aria-label={booted ? "Enter site" : "Start"}
    >
      <canvas ref={canvasRef} className="hs__rain" />
      <div className="hs__terminal">
        <div className="hs__bar">
          <span /><span /><span />
          <em>ninja@azureninjas: ~</em>
          <button
            type="button"
            className={`hs__sound ${!muted ? "is-on" : ""}`}
            onClick={toggleSound}
            onKeyDown={(e) => e.stopPropagation()}
            aria-pressed={!muted}
          >
            {muted ? "Sound off" : "Sound on"}
          </button>
        </div>
        <pre className="hs__body">
          {!booted ? (
            <div className="hs__log">&gt; system locked</div>
          ) : (
            typed.split("\n").map((line, i) => (
              <div
                key={i}
                className={line.startsWith("$") ? "hs__cmd" : line.startsWith(">") ? "hs__log" : "hs__out"}
              >
                {line}
              </div>
            ))
          )}
          <span className="hs__caret">█</span>
        </pre>
        <p className={`hs__enter ${!booted || ready ? "is-ready" : ""}`}>
          {booted ? "Click anywhere or press Enter to continue" : "Click anywhere or press Enter to start"}
        </p>
      </div>
    </div>
  );
}
