import React from 'react';
import styles from './Hero.module.css';
import { motion } from 'framer-motion';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { Lock, CreditCard } from 'lucide-react';
import { fadeUp, scaleIn } from '../../animations/variants';
import heroBoutique from '../../assets/hero-boutique.webp';

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
            <SectionLabel>Implante e endodontia em Vinhedo</SectionLabel>
          </motion.div>

          <h1 className={styles.headline}>
            <motion.span
              style={{ display: 'inline-block' }}
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              Talvez você tenha adiado essa consulta por meses. Ou até por <em>anos.</em>
            </motion.span>
          </h1>

          <motion.p 
            className={styles.subheadline}
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <strong className={styles.subheroStrong}>
              Tudo bem. O importante é que você chegou até aqui.
            </strong>
            {" "}
            Dois especialistas. Um cuida do seu canal, outro do seu implante.
            Mais de 2.000 casos realizados e atendimento que respeita o seu tempo.
          </motion.p>

          <motion.div 
            className={styles.ctaWrapper}
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <a href="https://wa.me/5519984427733" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Agendar minha consulta
            </a>
            <div className={styles.microCopy}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Lock size={13} style={{ opacity: 0.8 }} /> Conversa direta com a recepção
              </span>
              <span className={styles.separator}>·</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <CreditCard size={13} style={{ opacity: 0.8 }} /> Parcelamos seu tratamento
              </span>
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
              <img 
                src={heroBoutique} 
                alt="Casal de Doutores no consultório boutique em Vinhedo" 
                className={styles.heroImage} 
                width="900" 
                height="1125" 
                fetchPriority="high" 
                decoding="async" 
              />
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
              <motion.div
                animate={{ 
                  y: [0, -6, 0],
                  x: [0, 4, 0] 
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center', textAlign: 'center' }}
              >
                <span className={styles.stars}>★★★★★</span>
                <span className={styles.badgeText}>"Mais de 2.000 atendimentos realizados"</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};
