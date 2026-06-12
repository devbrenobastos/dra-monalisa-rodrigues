import React from 'react';
import styles from './HowItWorksSection.module.css';
import { motion } from 'framer-motion';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { fadeUp } from '../../animations/variants';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Avaliação gratuita',
      desc: 'Você conta o que está sentindo. A gente escuta, examina e explica sem julgamento e sem pressa. Você sai sabendo exatamente o que fazer.'
    },
    {
      num: '02',
      title: 'Planejamento no seu ritmo',
      desc: 'Cronograma, custo real, opções de parcelamento. Nada começa antes de você entender e concordar.'
    },
    {
      num: '03',
      title: 'Tratamento com quem você já conhece',
      desc: 'Do início ao fim, os mesmos profissionais. Sem surpresas.'
    }
  ];

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionLabel>Como funciona</SectionLabel>
          </motion.div>
          <motion.h2 
            className={styles.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
          >
            Três passos. <em>Sem complicação.</em>
          </motion.h2>
        </div>

        <div className={styles.stepsWrapper}>
          {/* Connector Line SVG for Desktop */}
          <motion.div 
            className={styles.connectorLineDesktop}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            style={{ transformOrigin: "left" }}
          >
            <svg width="100%" height="2" viewBox="0 0 800 2" fill="none" preserveAspectRatio="none">
              <line x1="0" y1="1" x2="800" y2="1" stroke="var(--mist)" strokeWidth="2" strokeDasharray="6 6" />
            </svg>
          </motion.div>

          <motion.div 
            className={styles.stepsGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {steps.map((step, idx) => (
              <motion.div 
                key={idx} 
                className={styles.stepCard}
                variants={fadeUp}
                custom={idx}
              >
                <div className={styles.numberCircle}>
                  {step.num}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
