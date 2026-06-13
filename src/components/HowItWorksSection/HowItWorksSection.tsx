import React from 'react';
import styles from './HowItWorksSection.module.css';
import { motion } from 'framer-motion';
import { SectionLabel } from '../SectionLabel/SectionLabel';

function AnimatedArrow() {
  return (
    <div className={styles.arrowWrapper}>
      <motion.div
        className={styles.arrowTrack}
        animate={{ x: [0, 7, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: [0.45, 0, 0.55, 1],  /* ease-in-out suave */
          repeatType: 'loop',
        }}
      >
        <svg
          width="28"
          height="16"
          viewBox="0 0 28 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.arrowSvg}
        >
          {/* Linha da seta */}
          <line
            x1="0" y1="8" x2="20" y2="8"
            stroke="var(--rose-cta)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Ponta da seta */}
          <polyline
            points="13,2 20,8 13,14"
            stroke="var(--rose-cta)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          {/* Segundo traço paralelo — detalhe editorial */}
          <line
            x1="0" y1="8" x2="6" y2="8"
            stroke="var(--rose)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </motion.div>
    </div>
  );
}

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Agende sua avaliação',
      text: 'Você conta o que está sentindo. A gente escuta, examina e explica tudo, sem julgamento e sem pressa.',
    },
    {
      number: '02',
      title: 'Entenda exatamente o que está acontecendo',
      text: 'Cronograma, custo real e opções de parcelamento. Nada começa antes de você entender e concordar.',
    },
    {
      number: '03',
      title: 'Receba o tratamento ideal para você',
      text: 'Do início ao fim, os mesmos profissionais. Sem surpresas. Com o cuidado que você merece.',
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* Cabeçalho */}
        <div className={styles.header}>
          <SectionLabel>Como funciona</SectionLabel>
          <h2 className={styles.sectionTitle}>
            Como funciona. <em>Três passos.</em>
          </h2>
        </div>

        {/* Grid steps + setas */}
        <div className={styles.stepsRow}>
          {steps.map((step, i) => (
            <React.Fragment key={step.number}>
              {/* Card */}
              <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.15,
                }}
              >
                {/* Watermark de fundo */}
                <span className={styles.cardNumber} aria-hidden="true">
                  {step.number}
                </span>

                {/* Label do step */}
                <span className={styles.stepLabel}>Passo {step.number}</span>

                {/* Título */}
                <h3 className={styles.cardTitle}>{step.title}</h3>

                {/* Texto */}
                <p className={styles.cardText}>{step.text}</p>
              </motion.div>

              {/* Seta entre cards (não após o último) */}
              {i < steps.length - 1 && <AnimatedArrow key={`arrow-${i}`} />}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};
