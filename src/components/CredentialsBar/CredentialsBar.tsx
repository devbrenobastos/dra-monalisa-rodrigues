import React from 'react';
import styles from './CredentialsBar.module.css';
import { motion } from 'framer-motion';
import { Award, Star, CheckCircle, Heart } from 'lucide-react';
import { fadeUp, staggerContainer } from '../../animations/variants';

export const CredentialsBar: React.FC = () => {
  const items = [
    {
      icon: <Award className={styles.icon} size={20} />,
      number: '2.000+',
      label: 'Casos de canal'
    },
    {
      icon: <Star className={styles.icon} size={20} />,
      number: 'Nota 5,0 ★',
      label: 'no Google',
      isGoogle: true
    },
    {
      icon: <CheckCircle className={styles.icon} size={20} />,
      number: 'Dr. Rafael R. M. Cidral',
      label: 'Implante & Periodontia'
    },
    {
      icon: <Heart className={styles.icon} size={20} />,
      number: 'Dra. Monalisa Rodrigues',
      label: 'Endodontia'
    }
  ];

  return (
    <section className={styles.bar}>
      <motion.div 
        className={styles.container}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        {items.map((item, idx) => (
          <motion.div 
            key={idx} 
            className={styles.item}
            variants={fadeUp}
            custom={idx}
          >
            <div className={styles.iconContainer}>
              {item.icon}
            </div>
            <div className={styles.textContainer}>
              <span className={styles.number}>
                {item.isGoogle ? (
                  <>
                    Nota 5,0 <span className={styles.coloredStar}>★</span>
                  </>
                ) : (
                  item.number
                )}
              </span>
              <span className={styles.label}>{item.label}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
