import React from 'react';
import styles from './SocialProofSection.module.css';
import { motion } from 'framer-motion';
import { SectionLabel } from '../SectionLabel/SectionLabel';

export const SocialProofSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        {/* SectionLabel */}
        <div className={styles.labelWrapper}>
          <SectionLabel>Todos os pacientes. Nota 5,0.</SectionLabel>
        </div>

        {/* Headline principal */}
        <motion.h2
          className={styles.headline}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Mais de{' '}
          <motion.span
            className={styles.bigNumber}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            2.000
          </motion.span>
          {' '}casos.
          <br />Nota 5,0.
          <br />Pacientes <em>reais</em>.
        </motion.h2>

        {/* Sub */}
        <p className={styles.sub}>
          O Dr. Rafael realiza implantes e cirurgias com precisão e calma.
          A Dra. Monalisa tem mais de 2.000 tratamentos de canal realizados
          em 12 anos de experiência. Cada paciente avaliou com nota máxima.
        </p>

        {/* Grid de 3 depoimentos compactos */}
        <div className={styles.testimonialGrid}>
          {[
            {
              initials: 'JR',
              name: 'Jorge R.',
              city: 'Vinhedo',
              stars: 5,
              quote: 'Super profissionais. Competência técnica e empatia incríveis. Atendimento impecável. Recomendo sem a menor dúvida.',
            },
            {
              initials: 'DV',
              name: 'Daniel Vita',
              city: 'Vinhedo',
              stars: 5,
              quote: 'Muito satisfeito com o atendimento! São excelentes profissionais e conhecem bem sobre odontologia! Recomendo nota 1.000.',
            },
            {
              initials: 'KV',
              name: 'Karina Vita',
              city: 'Vinhedo',
              stars: 5,
              quote: 'São excelentes profissionais, cuidadosos, pacientes, só elogios, gratidão por tudo.',
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              className={styles.testimonialCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.cardTop}>
                <div className={styles.avatar}>{t.initials}</div>
                <div className={styles.authorMeta}>
                  <p className={styles.authorName}>{t.name}</p>
                  <p className={styles.authorCity}>{t.city}</p>
                </div>
                <p className={styles.stars}>{'★'.repeat(t.stars)}</p>
              </div>
              <p className={styles.quoteText}>"{t.quote}"</p>
            </motion.div>
          ))}
        </div>

        {/* CTA discreto */}
        <p className={styles.ctaLine}>
          <span className={styles.googleBadge}>
            <span className={styles.googleStars}>★★★★★</span> Nota 5,0 — a maior nota possível no Google
          </span>
        </p>

      </div>
    </section>
  );
};
