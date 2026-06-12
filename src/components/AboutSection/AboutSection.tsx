import React from 'react';
import styles from './AboutSection.module.css';
import { motion } from 'framer-motion';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { slideLeft, slideRight, fadeIn, staggerContainer } from '../../animations/variants';

export const AboutSection: React.FC = () => {
  const bulletItems = [
    "Especialização em Implante (Dr. Rafael)",
    "Especialização em Endodontia (Dra. Monalisa)",
    "Vinhedo, atendendo toda a região de Campinas"
  ];

  const bulletItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className={styles.section} id="sobre-nos">
      {/* Decorative large watermark text "2.000+" at 15% opacity */}
      <motion.div 
        className={styles.watermark}
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        2.000+
      </motion.div>

      <div className={styles.container}>
        <motion.div 
          className={styles.copyCol}
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <SectionLabel dark>Quem somos</SectionLabel>
          <h2 className={styles.title}>
            Uma família cuidando da&nbsp;sua.
          </h2>
          
          <div className={styles.bodyText}>
            <p>
              Somos um casal de dentistas especializados, e isso muda tudo.
            </p>
            <p>
              Aqui não tem rotatividade de profissionais. Você sabe exatamente
              quem vai te atender do primeiro contato até o final do tratamento.
            </p>
            <p>
              Construímos nosso consultório em Vinhedo com um propósito simples:
              oferecer o cuidado que gostaríamos de receber, com tempo, escuta
              e respeito pelo que você sente.
            </p>
          </div>

          <motion.ul 
            className={styles.bullets}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {bulletItems.map((bullet, idx) => (
              <motion.li 
                key={idx}
                variants={bulletItemVariants}
              >
                <span className={styles.bulletIcon} />
                <span>{bullet}</span>
              </motion.li>
            ))}
          </motion.ul>

          <a href="https://wa.me/5519999999999" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
            Conhecer o consultório
          </a>
        </motion.div>

        <motion.div 
          className={styles.imageCol}
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className={styles.photoContainer}>
            {/* SVG Illustration representing the doctors as a family boutique office */}
            <svg viewBox="0 0 400 500" className={styles.doctorsPhoto} role="img" aria-label="Foto do casal de dentistas especializados no consultório em Vinhedo">
              <defs>
                <linearGradient id="warmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2A2426" />
                  <stop offset="50%" stopColor="#7A3447" />
                  <stop offset="100%" stopColor="#C68393" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#warmGrad)" />
              <g fill="#F6F1EA" opacity="0.9" transform="translate(80, 160)">
                {/* Dr. Rafael */}
                <circle cx="80" cy="80" r="45" />
                <path d="M20 180 C 20 130, 140 130, 140 180 Z" />
              </g>
              <g fill="#F0E0E2" opacity="0.9" transform="translate(180, 200)">
                {/* Dra. Monalisa */}
                <circle cx="70" cy="70" r="40" />
                <path d="M15 160 C 15 110, 125 110, 125 160 Z" />
              </g>
              <circle cx="200" cy="300" r="100" stroke="#F6F1EA" strokeWidth="1" fill="none" opacity="0.15" />
            </svg>
            <div className={styles.photoLabel}>
              Dra. Monalisa & Dr. Rafael
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
