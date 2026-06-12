import React from 'react';
import styles from './FinalCtaSection.module.css';
import { motion } from 'framer-motion';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { fadeUp } from '../../animations/variants';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className={styles.section}>
      {/* Elemento decorativo: blob grande em rose a 8% de opacidade no fundo */}
      <div className={styles.ambientBlob} />

      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={0}
          >
            <SectionLabel dark>Primeiro passo</SectionLabel>
          </motion.div>
          
          <motion.h2 
            className={styles.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={1}
          >
            O primeiro passo é o mais&nbsp;difícil.<br />
            <em>A gente sabe disso.</em>
          </motion.h2>

          <div className={styles.bodyText}>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={2}
            >
              Ligar para um dentista depois de anos evitando não é simples.
              Mas você está aqui, e isso já diz muito.
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              custom={3}
            >
              Nossa avaliação é gratuita, sem compromisso e sem julgamento.
              Você conta o que está sentindo, a gente explica o que pode ser feito.
              O que acontece depois é decisão sua.
            </motion.p>
          </div>

          <motion.div 
            className={styles.ctaWrapper}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            custom={4}
          >
            <motion.a 
              href="https://wa.me/5519999999999" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.ctaButton}
              animate={{ 
                scale: [1, 1.025, 1]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Falar com a recepção agora, é gratuito
            </motion.a>
            
            <div className={styles.microCopy}>
              <span>💳 Uniodonto e parcelamento</span>
              <span className={styles.separator}>·</span>
              <span>📍 Vinhedo</span>
              <span className={styles.separator}>·</span>
              <span>Região de Campinas</span>
            </div>
            
            <a href="tel:+5519999999999" className={styles.phoneLabel}>
              📱 (19) 99999-9999
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
