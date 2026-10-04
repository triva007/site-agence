import React, { useEffect, useRef } from 'react';

/**
 * Surface d'eau animée en WebGL (reflets de fond de piscine + ondulations à la souris).
 * Légère : rendue en demi-résolution, en pause hors écran, figée si l'utilisateur
 * demande moins d'animations. Si WebGL est indisponible, le dégradé CSS du parent reste visible.
 */

const VERT = `attribute vec2 p; void main(){ gl_Position = vec4(p, 0.0, 1.0); }`;

const FRAG = `
precision mediump float;
uniform vec2 uRes;
uniform float uTime;
uniform float uIntensity;
uniform vec4 uDrops[6];   // x, y (0-1), âge (s), force

vec2 hash2(vec2 p){
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return fract(sin(p) * 43758.5453);
}

// Cellules animées : la différence F2 - F1 dessine les lignes lumineuses typiques d'un fond de piscine
float caustic(vec2 uv, float t){
  vec2 g = floor(uv), f = fract(uv);
  float f1 = 8.0, f2 = 8.0;
  for (int y = -1; y <= 1; y++)
  for (int x = -1; x <= 1; x++){
    vec2 o = vec2(float(x), float(y));
    vec2 h = hash2(g + o);
    vec2 pt = o + 0.5 + 0.42 * sin(t * (0.55 + 0.35 * h) + 6.2831 * h);
    float d = length(pt - f);
    if (d < f1) { f2 = f1; f1 = d; } else if (d < f2) { f2 = d; }
  }
  return 1.0 - smoothstep(0.0, 0.30, f2 - f1);
}

void main(){
  vec2 uv = gl_FragCoord.xy / uRes;
  float aspect = uRes.x / uRes.y;
  vec2 q = vec2(uv.x * aspect, uv.y);

  // ondulations à partir des derniers points touchés par la souris
  vec2 disp = vec2(0.0);
  float ring = 0.0;
  for (int i = 0; i < 6; i++){
    vec4 d = uDrops[i];
    if (d.w <= 0.0) continue;
    vec2 c = vec2(d.x * aspect, d.y);
    vec2 dv = q - c;
    float dist = length(dv);
    float wave = sin(dist * 46.0 - d.z * 7.5) * exp(-d.z * 1.4) * exp(-dist * 5.0) * d.w;
    disp += normalize(dv + 1e-4) * wave * 0.018;
    ring += wave;
  }

  float t = uTime * 0.6;
  vec2 w = q + disp + 0.06 * vec2(sin(q.y * 3.0 + t), cos(q.x * 2.4 - t * 0.8));
  w += 0.025 * vec2(sin(w.y * 7.0 - t * 1.3), cos(w.x * 6.0 + t));
  float c1 = caustic(w * 3.6, t);
  float c2 = caustic(w * 6.2 + 3.7, t * 1.3);
  float c = pow(c1 * 0.6 + c2 * 0.4, 3.0);

  vec3 deep = vec3(0.027, 0.114, 0.161);   // #071D29
  vec3 mid  = vec3(0.043, 0.165, 0.227);   // #0B2A3A
  vec3 teal = vec3(0.075, 0.37, 0.45);
  vec3 lite = vec3(0.50, 0.86, 0.91);      // #7FDCE8
  float grad = smoothstep(0.0, 1.0, uv.y * 0.8 + 0.1);
  vec3 col = mix(deep, mid, grad);
  col = mix(col, teal, 0.22 + 0.18 * sin(uv.x * 2.0 + t * 0.4) * 0.5);
  col += lite * c * 0.24 * uIntensity;
  col += lite * max(ring, 0.0) * 0.10;
  float vig = smoothstep(1.25, 0.25, length(uv - vec2(0.5, 0.55)));
  col *= mix(0.72, 1.0, vig);
  gl_FragColor = vec4(col, 1.0);
}`;

type Props = { className?: string; intensity?: number; interactive?: boolean };

const WaterSurface: React.FC<Props> = ({ className = '', intensity = 1, interactive = true }) => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
    if (!gl) { canvas.style.display = 'none'; return; }

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { canvas.style.display = 'none'; return; }
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'p');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'uRes');
    const uTime = gl.getUniformLocation(prog, 'uTime');
    const uInt = gl.getUniformLocation(prog, 'uIntensity');
    const uDrops = gl.getUniformLocation(prog, 'uDrops');

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const drops: { x: number; y: number; born: number; f: number }[] = [];
    let raf = 0, visible = true, last = 0;
    const start = performance.now();

    const resize = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 1.5) * 0.5;
      const w = Math.max(2, Math.floor(canvas.clientWidth * scale));
      const h = Math.max(2, Math.floor(canvas.clientHeight * scale));
      if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
      gl.viewport(0, 0, w, h);
    };

    const draw = (now: number) => {
      resize();
      const t = (now - start) / 1000;
      const arr = new Float32Array(24);
      for (let i = 0; i < 6; i++) {
        const d = drops[i];
        if (!d) continue;
        const age = t - d.born;
        if (age > 4) continue;
        arr.set([d.x, d.y, age, d.f], i * 4);
      }
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, reduced ? 12.0 : t);
      gl.uniform1f(uInt, intensity);
      gl.uniform4fv(uDrops, arr);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (!visible || now - last < 33) return; // ~30 images/s suffisent pour de l'eau
      last = now;
      draw(now);
    };

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; }, { threshold: 0 });
    io.observe(canvas);
    if (reduced) draw(performance.now()); else raf = requestAnimationFrame(loop);

    const host = canvas.parentElement;
    let lastDrop = 0;
    const onMove = (e: PointerEvent) => {
      if (!interactive || reduced) return;
      const now = performance.now();
      if (now - lastDrop < 140) return;
      lastDrop = now;
      const r = canvas.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = 1 - (e.clientY - r.top) / r.height;
      if (x < 0 || x > 1 || y < 0 || y > 1) return;
      drops.unshift({ x, y, born: (now - start) / 1000, f: e.type === 'pointerdown' ? 1.6 : 0.7 });
      drops.length = Math.min(drops.length, 6);
    };
    host?.addEventListener('pointermove', onMove, { passive: true });
    host?.addEventListener('pointerdown', onMove, { passive: true });
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      host?.removeEventListener('pointermove', onMove);
      host?.removeEventListener('pointerdown', onMove);
      window.removeEventListener('resize', resize);
    };
  }, [intensity, interactive]);

  return <canvas ref={ref} aria-hidden="true" className={`absolute inset-0 h-full w-full ${className}`} />;
};

export default WaterSurface;
