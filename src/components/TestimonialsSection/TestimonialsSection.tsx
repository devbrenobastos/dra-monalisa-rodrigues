import React from 'react';
import styles from './TestimonialsSection.module.css';
import { motion } from 'framer-motion';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { scaleIn, fadeUp, staggerContainer } from '../../animations/variants';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Eu adiava o canal há três anos por pavor. A Dra. me atendeu com tanta calma que quase dormi na cadeira. Fiz o tratamento sem sentir nada. Só me arrependo de ter esperado tanto.",
      author: "Juliana Santos",
      city: "Vinhedo",
      stars: "★★★★★"
    },
    {
      quote: "Perdi um dente há dois anos e me sentia mais velho do que sou. Achava que implante era coisa de rico. Em poucos meses, com parcelas que caberam no meu orçamento, recuperei meu sorriso.",
      author: "Carlos Alberto",
      city: "Campinas",
      stars: "★★★★★"
    },
    {
      quote: "Uso Uniodonto e tinha medo de ser tratado como paciente de segunda. Fui surpreendido: o atendimento foi exatamente igual ao particular. Profissionais atenciosos, ambiente impecável.",
      author: "Mariana Costa",
      city: "Vinhedo",
      stars: "★★★★★"
    }
  ];

  return (
    <section className={styles.section} id="depoimentos">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionLabel>O que dizem nossos pacientes</SectionLabel>
          </motion.div>
          <motion.h2 
            className={styles.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
          >
            Em palavras <em>deles</em>.
          </motion.h2>
        </div>

        <motion.div 
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx} 
              className={styles.card}
              variants={scaleIn}
            >
              {/* Floating large quote sign */}
              <span className={styles.quoteMark}>“</span>
              
              <div className={styles.content}>
                <div className={styles.stars}>{item.stars}</div>
                <p className={styles.text}>{item.quote}</p>
                <div className={styles.authorInfo}>
                  <span className={styles.name}>{item.author}</span>
                  <span className={styles.city}>{item.city}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
