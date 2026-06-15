import React from 'react';
import styles from './FinalCtaSection.module.css';
import { m } from 'framer-motion';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { CreditCard, MapPin, Smartphone } from 'lucide-react';
import { fadeUp } from '../../animations/variants';


export const FinalCtaSection: React.FC = () => {
  return (
    <section className={styles.section}>
      {/* Elemento decorativo: blob grande em rose a 8% de opacidade no fundo */}
      <div className={styles.ambientBlob} />

      <div className={styles.container}>
        <div className={styles.content}>
          <m.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0}
          >
            <SectionLabel dark>Primeiro passo</SectionLabel>
          </m.div>
          
          <m.h2 
            className={styles.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={1}
          >
            Se você chegou até aqui, já deu o <em>primeiro passo.</em>
          </m.h2>

          <div className={styles.bodyText}>
            <m.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={2}
            >
              O Dr. Rafael e a Dra. Monalisa estão prontos para te atender.
              Sem enrolação, sem julgamento.
              Só uma conversa para entender o seu caso e traçar o melhor caminho.
            </m.p>
          </div>

          <m.div 
            className={styles.ctaWrapper}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={4}
          >
            <m.a 
              href="https://wa.me/5519984427733" 
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
              Falar com a recepção agora
            </m.a>
            
            <div className={styles.infoRow}>
              <div className={styles.microCopy}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <CreditCard size={13} style={{ opacity: 0.8 }} /> Parcelamos seu tratamento
                </span>
                <span className={styles.separator}>·</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={13} style={{ opacity: 0.8 }} /> Vinhedo e região de Campinas
                </span>
              </div>
              <span className={styles.separator + ' ' + styles.phoneSeparator}>·</span>
              <a href="tel:+5519984427733" className={styles.phoneLabel}>
                <Smartphone size={13} style={{ display: 'inline-block', verticalAlign: '-1.5px', marginRight: '4px', opacity: 0.8 }} /> (19) 98442-7733
              </a>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
};
