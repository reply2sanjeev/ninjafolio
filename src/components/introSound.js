// All sounds are generated in the browser: no audio files to host.
let ctx;
function getCtx() {
  if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
}

function noiseBuffer(c, seconds, shape) {
  const len = Math.floor(c.sampleRate * seconds);
  const buf = c.createBuffer(1, len, c.sampleRate);
  const d = buf.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * shape(i / len);
  return buf;
}

// Short mechanical key tick for the typewriter
export function keyClick() {
  const c = getCtx();
  const src = c.createBufferSource();
  src.buffer = noiseBuffer(c, 0.02, (p) => (1 - p) ** 4);
  const hp = c.createBiquadFilter();
  hp.type = "highpass";
  hp.frequency.value = 1800 + Math.random() * 800;
  const g = c.createGain();
  g.gain.value = 0.12;
  src.connect(hp).connect(g).connect(c.destination);
  src.start();
}

// Low cyber hum under the terminal. Returns a stop() function.
export function startDrone() {
  const c = getCtx();
  const t = c.currentTime;
  const g = c.createGain();
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(0.05, t + 1.5);
  const lp = c.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 380;
  const oscs = [55, 55.4, 82.5].map((f) => {
    const o = c.createOscillator();
    o.type = "sawtooth";
    o.frequency.value = f;
    o.connect(lp);
    o.start();
    return o;
  });
  lp.connect(g).connect(c.destination);

  return () => {
    const now = c.currentTime;
    g.gain.cancelScheduledValues(now);
    g.gain.setValueAtTime(g.gain.value, now);
    g.gain.linearRampToValueAtTime(0, now + 0.6);
    oscs.forEach((o) => o.stop(now + 0.7));
  };
}

// Blade-through-air whoosh for the shuriken
export function whoosh() {
  const c = getCtx();
  const t = c.currentTime;
  const src = c.createBufferSource();
  src.buffer = noiseBuffer(c, 1.1, (p) => Math.sin(Math.PI * p) ** 2);
  const bp = c.createBiquadFilter();
  bp.type = "bandpass";
  bp.Q.value = 1.2;
  bp.frequency.setValueAtTime(300, t);
  bp.frequency.exponentialRampToValueAtTime(3200, t + 0.5);
  bp.frequency.exponentialRampToValueAtTime(500, t + 1.1);
  const g = c.createGain();
  g.gain.value = 0.5;
  src.connect(bp).connect(g).connect(c.destination);
  src.start(t);
}

// Robotic "hacker" voice using the browser's built-in speech
export function speak(text) {
  if (!("speechSynthesis" in window)) return;
  const u = new SpeechSynthesisUtterance(text);
  u.rate = 0.85;
  u.pitch = 0.2;
  u.volume = 1;
  const voices = window.speechSynthesis.getVoices();
  const pick =
    voices.find((v) => /david|daniel|uk english male|guy|ravi/i.test(v.name)) ||
    voices.find((v) => v.lang.startsWith("en"));
  if (pick) u.voice = pick;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(u);
}
