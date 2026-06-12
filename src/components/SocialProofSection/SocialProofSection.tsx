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
          <SectionLabel>O que nossos pacientes viveram</SectionLabel>
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
          {' '}pessoas chegaram
          <br />aqui com medo.
          <br />E saíram <em>aliviadas</em>.
        </motion.h2>

        {/* Sub */}
        <p className={styles.sub}>
          Mais de 2.000 tratamentos de canal realizados com sucesso.
          Pacientes que adiaram por anos e descobriram que era muito
          mais tranquilo do que imaginavam.
        </p>

        {/* Grid de 3 depoimentos compactos */}
        <div className={styles.testimonialGrid}>
          {[
            {
              initials: 'JS',
              name: 'Juliana Santos',
              city: 'Vinhedo',
              stars: 5,
              quote: 'Passei três noites sem dormir de dor. Achei que o tratamento seria pior ainda. Foi justamente o contrário.',
            },
            {
              initials: 'CA',
              name: 'Carlos Alberto',
              city: 'Campinas',
              stars: 5,
              quote: 'Tinha pavor de dentista há 15 anos. Fui tratado com tanta calma que voltou para fazer o implante também.',
            },
            {
              initials: 'MC',
              name: 'Mariana Costa',
              city: 'Vinhedo',
              stars: 5,
              quote: 'O casal de doutores é incrível. Senti que me conheciam de longa data já na primeira consulta.',
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
          Avaliações verificadas no{' '}
          <span className={styles.googleBadge}>Google</span>
        </p>

      </div>
    </section>
  );
};
