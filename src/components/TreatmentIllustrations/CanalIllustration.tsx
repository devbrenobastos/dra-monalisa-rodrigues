import { motion } from 'framer-motion';

export function CanalIllustration() {
  return (
    <svg
      viewBox="0 0 400 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: '100%', height: '100%' }}
      aria-hidden="true"
    >
      {/* Fundo com gradiente horizontal: tensão → calma */}
      <defs>
        <linearGradient id="canalBg" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#F0E0E2" stopOpacity="1" />
          <stop offset="50%"  stopColor="#F6F1EA" stopOpacity="1" />
          <stop offset="100%" stopColor="#EEE9E3" stopOpacity="1" />
        </linearGradient>

        {/* Gradiente da linha principal: rose-cta → sage */}
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#97455A" />
          <stop offset="60%"  stopColor="#C68393" />
          <stop offset="100%" stopColor="#6E7A66" />
        </linearGradient>

        {/* Clip para a área esquerda */}
        <clipPath id="leftHalf">
          <rect x="0" y="0" width="200" height="200" />
        </clipPath>
        <clipPath id="rightHalf">
          <rect x="200" y="0" width="200" height="200" />
        </clipPath>
      </defs>

      <rect width="400" height="200" fill="url(#canalBg)" />

      {/* Grade de fundo — linhas horizontais finas (estética de monitor) */}
      {[40, 80, 120, 160].map((y) => (
        <line
          key={y}
          x1="0" y1={y} x2="400" y2={y}
          stroke="var(--mist)"
          strokeWidth="0.5"
          opacity="0.4"
        />
      ))}
      {/* Linhas verticais de grade */}
      {[80, 160, 240, 320].map((x) => (
        <line
          key={x}
          x1={x} y1="0" x2={x} y2="200"
          stroke="var(--mist)"
          strokeWidth="0.5"
          opacity="0.25"
        />
      ))}

      {/* Linha central de referência */}
      <line x1="0" y1="100" x2="400" y2="100"
        stroke="var(--mist)" strokeWidth="1" opacity="0.6" strokeDasharray="3 6" />

      {/* LINHA PRINCIPAL — percurso da dor ao alívio */}
      {/* Segmento esquerdo: frequência irregular (dor) */}
      <motion.path
        d="M 0 100
           L 20 100
           L 30 100
           L 35 60
           L 40 140
           L 45 50
           L 50 155
           L 55 45
           L 60 150
           L 68 100
           L 75 75
           L 80 125
           L 88 65
           L 93 135
           L 100 100
           L 110 90
           L 118 110
           L 125 85
           L 132 115
           L 140 100"
        stroke="url(#lineGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: [0.22, 1, 0.36, 1], repeat: Infinity, repeatDelay: 3 }}
      />

      {/* Segmento direito: linha cada vez mais calma */}
      <motion.path
        d="M 140 100
           C 160 100, 170 104, 185 100
           C 200 96, 210 102, 230 100
           C 250 99, 270 101, 300 100
           L 400 100"
        stroke="url(#lineGrad)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.8, delay: 2.2, ease: 'easeOut', repeat: Infinity, repeatDelay: 3.5 }}
      />

      {/* Pico de destaque no segmento de dor */}
      <motion.path
        d="M 43 100 L 45 50 L 47 100"
        stroke="#97455A"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0"
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 3, delay: 0.8, repeat: Infinity, repeatDelay: 3 }}
      />

      {/* Ponto de transição — círculo pulsante no ponto de virada */}
      <motion.circle
        cx="140" cy="100" r="5"
        fill="var(--bg-surface)"
        stroke="var(--rose-cta)"
        strokeWidth="1.5"
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.8, 0.3, 0.8],
        }}
        transition={{ duration: 2, delay: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '140px 100px' }}
      />

      {/* Labels em lowercase elegante */}
      <text x="70" y="186" textAnchor="middle"
        fontSize="9" fill="#97455A" fontFamily="var(--font-body)"
        opacity="0.6" letterSpacing="0.08em">
        FREQUÊNCIA DE DOR
      </text>
      <text x="290" y="186" textAnchor="middle"
        fontSize="9" fill="#6E7A66" fontFamily="var(--font-body)"
        opacity="0.6" letterSpacing="0.08em">
        APÓS O TRATAMENTO
      </text>

      {/* Divisor central sutil */}
      <line x1="200" y1="10" x2="200" y2="175"
        stroke="var(--mist)" strokeWidth="0.75"
        strokeDasharray="2 6" opacity="0.5" />
    </svg>
  );
}
