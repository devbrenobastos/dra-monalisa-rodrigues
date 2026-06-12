import React from 'react';
import styles from './ProblemSection.module.css';
import { motion } from 'framer-motion';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { fadeUp, scaleIn } from '../../animations/variants';

export const ProblemSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={0}
        >
          <SectionLabel>Sabemos o que você está sentindo</SectionLabel>
        </motion.div>

        <motion.h2 
          className={styles.title}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          custom={1}
        >
          Você já adiou essa consulta<br />
          <em>mais de uma vez</em>.
        </motion.h2>

        <div className={styles.bodyWrapper}>
          <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={2}
          >
            Talvez pela agenda cheia. Pelo custo que parece alto demais. Pela última
            vez que foi ao dentista e não foi uma boa experiência, e o corpo ainda
            guarda essa memória.
          </motion.p>

          <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={3}
          >
            Ou porque perdeu um dente e não sabe por onde começar. Prefere não
            sorrir em fotos. Evita certos alimentos.
          </motion.p>

          <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={4}
          >
            Tudo isso é real. E nós não vamos minimizar.
          </motion.p>

          <motion.p 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={5}
          >
            Em mais de 2.000 atendimentos, a frase que mais ouvimos foi:
          </motion.p>
        </div>

        <div className={styles.blockquoteWrapper}>
          {/* Animated border left */}
          <motion.div 
            className={styles.blockquoteBorder}
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.blockquote 
            className={styles.quote}
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            "Eu não sabia que ia ser assim tão tranquilo."
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
};
