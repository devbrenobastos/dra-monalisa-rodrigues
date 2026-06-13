import React from 'react';
import styles from './CredentialsBar.module.css';
import { motion } from 'framer-motion';
import { Award, Star, CheckCircle, Heart } from 'lucide-react';
import { fadeUp, staggerContainer } from '../../animations/variants';

export const CredentialsBar: React.FC = () => {
  const items = [
    {
      icon: <Award className={styles.icon} size={24} />,
      number: '2.000+',
      label: 'casos de canal'
    },
    {
      icon: <Star className={styles.icon} size={24} />,
      number: '★★★★★',
      label: 'Google Reviews'
    },
    {
      icon: <CheckCircle className={styles.icon} size={24} />,
      number: '+12 anos',
      label: 'de experiência'
    },
    {
      icon: <Heart className={styles.icon} size={24} />,
      number: '2 especialistas',
      label: 'no mesmo consultório'
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
              <span className={styles.number}>{item.number}</span>
              <span className={styles.label}>{item.label}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
