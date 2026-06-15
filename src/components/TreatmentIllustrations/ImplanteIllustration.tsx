import { m } from 'framer-motion';

// Posições fixas para as partículas — geradas deterministicamente
const LEFT_PARTICLES = [
  { cx: 30,  cy: 45,  r: 3.5, delay: 0   },
  { cx: 75,  cy: 28,  r: 2,   delay: 0.1 },
  { cx: 52,  cy: 80,  r: 4,   delay: 0.2 },
  { cx: 110, cy: 55,  r: 2.5, delay: 0.15},
  { cx: 88,  cy: 110, r: 3,   delay: 0.3 },
  { cx: 20,  cy: 130, r: 2,   delay: 0.25},
  { cx: 130, cy: 90,  r: 1.5, delay: 0.05},
  { cx: 60,  cy: 150, r: 3,   delay: 0.35},
  { cx: 100, cy: 160, r: 2,   delay: 0.4 },
  { cx: 140, cy: 40,  r: 1.5, delay: 0.2 },
  { cx: 18,  cy: 88,  r: 2,   delay: 0.3 },
  { cx: 145, cy: 150, r: 2.5, delay: 0.1 },
];

// Pontos do arco final (semicírculo direito)
const RING_POINTS = Array.from({ length: 24 }, (_, i) => {
  const angle = (i / 24) * Math.PI * 2;
  return {
    cx: 290 + Math.cos(angle) * 52,
    cy: 100 + Math.sin(angle) * 52,
    delay: i * 0.04,
  };
});

export function ImplanteIllustration() {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="implanteBg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#F5DCE4" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F0EDE8" stopOpacity="1"   />
        </linearGradient>
        <radialGradient id="ringGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stopColor="#97455A" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#97455A" stopOpacity="0"    />
        </radialGradient>
      </defs>

      <rect width="400" height="200" fill="url(#implanteBg)" />

      {/* ─── LADO ESQUERDO: partículas dispersas ─── */}
      {LEFT_PARTICLES.map((p, i) => (
        <m.circle
          key={i}
          cx={p.cx} cy={p.cy} r={p.r}
          fill="var(--rose)"
          opacity="0.35"
          animate={{
            y:       [0, -6, 4, 0],
            opacity: [0.25, 0.5, 0.2, 0.35],
          }}
          transition={{
            duration: 3.5 + p.delay * 2,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Linhas de conexão fracas entre partículas dispersas */}
      {[
        [0, 2], [1, 3], [2, 4], [3, 5], [5, 7],
        [6, 9], [4, 8], [7, 10], [9, 11],
      ].map(([a, b], i) => (
        <m.line
          key={i}
          x1={LEFT_PARTICLES[a].cx} y1={LEFT_PARTICLES[a].cy}
          x2={LEFT_PARTICLES[b].cx} y2={LEFT_PARTICLES[b].cy}
          stroke="var(--rose)"
          strokeWidth="0.75"
          opacity="0.15"
          animate={{ opacity: [0.08, 0.22, 0.08] }}
          transition={{
            duration: 4,
            delay: i * 0.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Divisor */}
      <line x1="200" y1="10" x2="200" y2="190"
        stroke="var(--mist)" strokeWidth="0.75"
        strokeDasharray="2 6" opacity="0.5" />

      {/* ─── LADO DIREITO: forma circular coesa ─── */}

      {/* Glow central */}
      <circle cx="290" cy="100" r="70"
        fill="url(#ringGlow)" />

      {/* Anel externo */}
      <m.circle
        cx="290" cy="100" r="52"
        stroke="var(--rose)"
        strokeWidth="1"
        opacity="0.2"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 0.2 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Anel médio — principal */}
      <m.circle
        cx="290" cy="100" r="38"
        stroke="var(--rose-cta)"
        strokeWidth="1.75"
        fill="none"
        opacity="0.55"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Anel interno */}
      <m.circle
        cx="290" cy="100" r="22"
        stroke="var(--rose)"
        strokeWidth="1"
        fill="none"
        opacity="0.35"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Ponto central */}
      <m.circle
        cx="290" cy="100" r="5"
        fill="var(--rose-cta)"
        opacity="0.7"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.5, delay: 1.2, type: 'spring', stiffness: 300 }}
        style={{ transformOrigin: '290px 100px' }}
      />

      {/* Pontos no anel — partículas que "chegaram" */}
      {RING_POINTS.map((p, i) => (
        <m.circle
          key={i}
          cx={p.cx} cy={p.cy} r="2"
          fill="var(--rose)"
          opacity="0.45"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 0.45 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{
            duration: 0.3,
            delay: 0.5 + p.delay,
            type: 'spring',
            stiffness: 400,
          }}
          style={{ transformOrigin: `${p.cx}px ${p.cy}px` }}
        />
      ))}

      {/* Cruz de alinhamento — 4 linhas saindo do centro (estética técnica/médica) */}
      {[0, 90, 180, 270].map((deg, i) => {
        const rad = (deg * Math.PI) / 180;
        return (
          <m.line
            key={i}
            x1={290 + Math.cos(rad) * 58}
            y1={100 + Math.sin(rad) * 58}
            x2={290 + Math.cos(rad) * 68}
            y2={100 + Math.sin(rad) * 68}
            stroke="var(--rose-cta)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.4"
            initial={{ opacity: 0, pathLength: 0 }}
            whileInView={{ opacity: 0.4, pathLength: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 1.6 + i * 0.05 }}
          />
        );
      })}

      {/* Pulse no anel médio */}
      <m.circle
        cx="290" cy="100" r="38"
        stroke="var(--rose-cta)"
        strokeWidth="1"
        fill="none"
        opacity="0"
        animate={{
          scale: [1, 1.368, 1],
          opacity: [0, 0.15, 0],
        }}
        transition={{ duration: 3, delay: 2, repeat: Infinity, ease: 'easeOut' }}
        style={{ transformOrigin: '290px 100px' }}
      />

      {/* Labels */}
      <text x="80"  y="186" textAnchor="middle"
        fontSize="9" fill="#97455A" fontFamily="var(--font-body)"
        opacity="0.55" letterSpacing="0.08em">
        FRAGMENTADO
      </text>
      <text x="290" y="186" textAnchor="middle"
        fontSize="9" fill="var(--rose-cta)" fontFamily="var(--font-body)"
        opacity="0.65" letterSpacing="0.08em">
        INTEGRADO
      </text>
    </svg>
  );
}
