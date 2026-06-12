import React from 'react';
import styles from './TreatmentsSection.module.css';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { slideLeft, slideRight } from '../../animations/variants';
import { ImplanteAnimation, CanalAnimation } from '../TreatmentAnimations';

export const TreatmentsSection: React.FC = () => {
  return (
    <section className={styles.section} id="tratamentos">
      <div className={styles.container}>
        <div className={styles.header}>
          <SectionLabel>O que fazemos</SectionLabel>
          <h2 className={styles.title}>
            O que fazemos, e o que isso <em>muda</em> na sua vida.
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Card 1: Implante Dentário */}
          <motion.div 
            className={styles.card}
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className={styles.cardImageWrapper}>
              <ImplanteAnimation />
              <p className={styles.animTag}>✦ Encaixe perfeito</p>
              <span className={styles.imageBadge}>Para quem perdeu um dente</span>
            </div>
            
            <div className={styles.content}>
              <span className={styles.cardEyebrow}>Implante Dentário</span>
              <h3 className={styles.cardTitle}>Volte a comer, sorrir e conversar com <em>confiança.</em></h3>
              <p className={styles.cardDescription}>
                Implante não é cirurgia de risco. É um procedimento
                preciso, planejado passo a passo, com anestesia eficaz e resultado
                que dura décadas.
              </p>
              
              <ul className={styles.outcomesList}>
                <li>
                  <Check className={styles.checkIcon} size={18} />
                  <span>Coma carne, castanha e frutas sem medo</span>
                </li>
                <li>
                  <Check className={styles.checkIcon} size={18} />
                  <span>Sorria nas fotos de família de novo</span>
                </li>
                <li>
                  <Check className={styles.checkIcon} size={18} />
                  <span>Sem próteses soltas ou pastas fixadoras</span>
                </li>
                <li>
                  <Check className={styles.checkIcon} size={18} />
                  <span>Preserva os dentes vizinhos</span>
                </li>
              </ul>
              
              <a href="https://wa.me/5519999999999" target="_blank" rel="noopener noreferrer" className={styles.cardCta}>
                Quero saber mais sobre implante
              </a>
            </div>
          </motion.div>

          {/* Card 2: Tratamento de Canal */}
          <motion.div 
            className={styles.card}
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className={styles.cardImageWrapper}>
              <CanalAnimation />
              <div className={styles.canalTagWrap}>
                <p className={styles.canalTagDor}>✦ Você tem dor agora.</p>
                <p className={styles.canalTagAlivio}>✦ Vai sair aliviado.</p>
                <p className={styles.canalTagSemPerder}>✦ Sem perder o dente.</p>
              </div>
              <span className={styles.imageBadge}>Para quem tem medo ou dor agora</span>
            </div>
            
            <div className={styles.content}>
              <span className={styles.cardEyebrow}>Tratamento de Canal</span>
              <h3 className={styles.cardTitle}>Acabe com a dor sem precisar <em>perder o dente.</em></h3>
              <p className={styles.cardDescription}>
                A anestesia moderna elimina a dor. O procedimento é
                silencioso e controlado. Você está no comando: se levantar a mão,
                a gente para.
              </p>
              
              <ul className={styles.outcomesList}>
                <li>
                  <Check className={styles.checkIcon} size={18} />
                  <span>Elimina a dor que não deixa dormir</span>
                </li>
                <li>
                  <Check className={styles.checkIcon} size={18} />
                  <span>Salva o dente, sem precisar extrair</span>
                </li>
                <li>
                  <Check className={styles.checkIcon} size={18} />
                  <span>Retoma sua rotina sem aquela sensação constante</span>
                </li>
                <li>
                  <Check className={styles.checkIcon} size={18} />
                  <span>No seu ritmo, sem julgamento</span>
                </li>
              </ul>
              
              <a href="https://wa.me/5519999999999" target="_blank" rel="noopener noreferrer" className={styles.cardCta}>
                Quero saber mais sobre canal
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
