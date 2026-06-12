import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { fadeUp, scaleIn } from '../../animations/variants';

export const Hero: React.FC = () => {
  return (
    <header className={styles.hero}>
      {/* Background decoration: grain texture (SVG noise inline at 3% opacity) */}
      <div className={styles.grainTexture} />
      {/* Ambient glowing blurred organic blob */}
      <div className={styles.ambientBlob} />

      <div className={styles.container}>
        {/* Left column: Copy */}
        <div className={styles.copyCol}>
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <SectionLabel>Vinhedo · Implante & Endodontia</SectionLabel>
          </motion.div>

          <h1 className={styles.headline}>
            <motion.span
              style={{ display: 'block' }}
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              Talvez você tenha adiado
            </motion.span>
            <motion.span
              style={{ display: 'block' }}
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              essa consulta por meses.
            </motion.span>
            <motion.span
              style={{ display: 'block' }}
              custom={2.5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              Ou até por <em>anos.</em>
            </motion.span>
          </h1>

          <motion.p 
            className={styles.subheadline}
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Tudo bem. O importante é que você chegou até aqui.<br /><br />
            Mais de 2.000 pacientes já passaram pelo mesmo medo
            e descobriram que o tratamento era muito mais tranquilo
            do que imaginavam.
          </motion.p>

          <motion.div 
            className={styles.ctaWrapper}
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <a href="https://wa.me/5519999999999" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Agendar minha avaliação gratuita
            </a>
            <div className={styles.microCopy}>
              <span>🔒 Conversa direta com a recepção</span>
              <span className={styles.separator}>·</span>
              <span>💳 Uniodonto e parcelamento</span>
            </div>
            <div className={styles.locationLabel}>
              Atendemos em Vinhedo e região de Campinas
            </div>
          </motion.div>
        </div>

        {/* Right column: Image placeholder */}
        <div className={styles.imageCol}>
          <motion.div 
            className={styles.imageContainer}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            {/* Editorial placeholder representing doctors' office */}
            <div className={styles.photoPlaceholder} role="img" aria-label="Casal de Doutores no consultório boutique em Vinhedo">
              <svg viewBox="0 0 400 500" className={styles.placeholderSvg}>
                <defs>
                  <linearGradient id="officeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#EADFD3" />
                    <stop offset="100%" stopColor="#C68393" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#officeGrad)" />
                <g transform="translate(100, 150)" fill="#7A3447" opacity="0.8">
                  <path d="M100 80 A 45 45 0 1 0 100 170 A 45 45 0 1 0 100 80 Z" />
                  <path d="M50 200 C 50 160, 150 160, 150 200 Z" />
                </g>
                <g transform="translate(200, 190)" fill="#6E7A66" opacity="0.8">
                  <path d="M50 40 A 35 35 0 1 0 50 110 A 35 35 0 1 0 50 40 Z" />
                  <path d="M10 140 C 10 110, 90 110, 90 140 Z" />
                </g>
              </svg>
              <div className={styles.photoCaption}>Consultório Boutique Vinhedo</div>
            </div>

            {/* Floating badge */}
            <motion.div 
              className={styles.floatingBadge}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 280, 
                damping: 22, 
                delay: 0.7 
              }}
            >
              <span className={styles.stars}>★★★★★</span>
              <span className={styles.badgeText}>"Mais de 2.000 casos realizados"</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};
