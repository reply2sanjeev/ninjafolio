import { useEffect, useRef, useState, useCallback } from "react";
import "./IntroSequence.css";

// Lines typed out on the hacker terminal. Edit freely.
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

const GLYPHS = "01{}[]()<>=+-*/$#;:azvmrgkvnsgbicepkql".split("");

export default function IntroSequence({ onFinish, oncePerSession = false }) {
  const canvasRef = useRef(null);
  const [stage, setStage] = useState("terminal"); // terminal -> shuriken -> exit
  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const fullText = BOOT_LINES.join("\n");
  const [typed, setTyped] = useState(reduceMotion ? fullText : "");
  const ready = typed.length === fullText.length;

  // Skip the intro if already seen this session (optional)
  useEffect(() => {
    if (oncePerSession && sessionStorage.getItem("ninjaIntroSeen")) onFinish?.();
  }, [oncePerSession, onFinish]);

  // Code rain background
  useEffect(() => {
    if (reduceMotion) return;
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
  }, [reduceMotion]);

  // Typewriter
  useEffect(() => {
    if (reduceMotion) return;
    let i = 0, id;
    const tick = () => {
      i++;
      setTyped(fullText.slice(0, i));
      if (i < fullText.length) id = setTimeout(tick, fullText[i - 1] === "\n" ? 260 : 16);
    };
    id = setTimeout(tick, 500);
    return () => clearTimeout(id);
  }, [fullText, reduceMotion]);

  // Click / Enter -> shuriken splash -> profile
  const enter = useCallback(() => {
    if (stage !== "terminal") return;
    setStage("shuriken");
    const splash = reduceMotion ? 200 : 2000;
    setTimeout(() => setStage("exit"), splash);
    setTimeout(() => {
      if (oncePerSession) sessionStorage.setItem("ninjaIntroSeen", "1");
      onFinish?.();
    }, splash + 500);
  }, [stage, reduceMotion, onFinish, oncePerSession]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        enter();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [enter]);

  return (
    <div
      className={`ni-overlay ni-${stage}`}
      onClick={enter}
      role="button"
      tabIndex={0}
      aria-label="Enter site"
    >
      {/* Stage 1: hacker terminal */}
      <div className="ni-terminal-stage" aria-hidden={stage !== "terminal"}>
        <canvas ref={canvasRef} className="ni-rain" />
        <div className="ni-terminal">
          <div className="ni-terminal-bar">
            <span /><span /><span />
            <em>ninja@azureninjas: ~</em>
          </div>
          <pre className="ni-terminal-body">
            {typed.split("\n").map((line, i) => (
              <div key={i} className={line.startsWith("$") ? "ni-cmd" : line.startsWith(">") ? "ni-log" : "ni-out"}>
                {line}
              </div>
            ))}
            <span className="ni-caret">█</span>
          </pre>
          <p className={`ni-enter ${ready ? "is-ready" : ""}`}>Click anywhere or press Enter to continue</p>
        </div>
      </div>

      {/* Stage 2: shuriken splash */}
      {stage !== "terminal" && (
        <div className="ni-splash">
          <div className="ni-trail" />
          <svg className="ni-shuriken" viewBox="0 0 100 100" aria-hidden="true">
            <defs>
              <mask id="ni-hole">
                <rect width="100" height="100" fill="#fff" />
                <circle cx="50" cy="50" r="9" fill="#000" />
              </mask>
            </defs>
            <path
              d="M50 2 L61 41 L98 50 L59 61 L50 98 L39 59 L2 50 L41 39 Z"
              fill="#4b5263"
              mask="url(#ni-hole)"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
