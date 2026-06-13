import React from 'react';
import styles from './AboutSection.module.css';
import { motion } from 'framer-motion';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { slideLeft, slideRight } from '../../animations/variants';

export const AboutSection: React.FC = () => {

  return (
    <section className={styles.section} id="sobre-nos">
      {/* Decorative large watermark text "2.000+" at a very subtle max opacity */}
      <motion.div 
        className={styles.watermark}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0.007 }
        }}
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
            Dois especialistas. Um consultório. Cuidado do início ao fim.
          </h2>
          
          <div className={styles.bodyText}>
            <p>
              O Dr. Rafael cuida do seu implante e da sua gengiva.
              A Dra. Monalisa cuida do seu canal e do seu dente.
              Juntos, cuidam de você — do primeiro contato ao fim do tratamento,
              sem rotatividade, sem surpresas.
            </p>
            <p>
              Construímos nosso atendimento em Vinhedo com um propósito simples:
              oferecer o cuidado que gostaríamos de receber.
              Com tempo, escuta e respeito pelo que você sente.
            </p>
          </div>

          <div className={styles.doctorsGrid}>
            <div className={styles.doctorBlock}>
              <p className={styles.doctorName}>Dr. Rafael Cidral</p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <span className={styles.bulletDot} />
                  Periodontista e Implantodontista
                </li>
                <li className={styles.bulletItem}>
                  <span className={styles.bulletDot} />
                  Professor Assistente de Cirurgia e Implante — Instituto Mestris
                </li>
              </ul>
            </div>

            <div className={styles.doctorBlock}>
              <p className={styles.doctorName}>Dra. Monalisa Rodrigues</p>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <span className={styles.bulletDot} />
                  Endodontista — mais de 2.000 casos realizados
                </li>
                <li className={styles.bulletItem}>
                  <span className={styles.bulletDot} />
                  Mais de 12 anos de experiência clínica
                </li>
              </ul>
            </div>
          </div>

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
                  <stop offset="0%" stopColor="#1E1B3A" />
                  <stop offset="50%" stopColor="#7A3D72" />
                  <stop offset="100%" stopColor="#C090B8" />
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
              Dra. Monalisa Rodrigues & Dr. Rafael Cidral
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
