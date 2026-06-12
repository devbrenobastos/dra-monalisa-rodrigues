import React, { useState } from 'react';
import styles from './FaqSection.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { fadeUp } from '../../animations/variants';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onToggle, index }) => {
  return (
    <motion.div 
      className={styles.item}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={index * 0.05}
    >
      <button 
        className={styles.questionBtn} 
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={styles.iconWrapper}
        >
          <Plus size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={styles.answerWrapper}
          >
            <div className={styles.answerText}>
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Atende pelo plano Uniodonto?",
      a: "Sim. Somos credenciados Uniodonto e atendemos com o mesmo cuidado e qualidade do atendimento particular. Você não abre mão de nada."
    },
    {
      q: "Tratamento de canal dói?",
      a: "Com anestesia moderna, não. A sensação mais comum é alívio, porque a dor que existia antes desaparece. Se sentir qualquer desconforto, sinaliza e a gente adapta."
    },
    {
      q: "Implante é caro? Tem parcelamento?",
      a: "Oferecemos parcelamento para que o implante caiba no seu orçamento. Na avaliação gratuita você recebe um orçamento claro, sem surpresas."
    },
    {
      q: "Quanto tempo leva o tratamento?",
      a: "Canal costuma ser resolvido em 1 a 2 sessões. Implante tem um processo mais longo, mas planejado com você, sem pressa, com dente provisório quando necessário."
    },
    {
      q: "Tenho muito medo. Vocês conseguem lidar com isso?",
      a: "É a pergunta que mais recebemos e a resposta é sim. Nosso atendimento é no seu ritmo. Você tem controle, decide quando parar, e nunca é julgado."
    },
    {
      q: "Vocês atendem em Campinas?",
      a: "Nosso consultório fica em Vinhedo, com fácil acesso à região de Campinas. Muitos pacientes vêm de cidades vizinhas e dizem que vale o deslocamento."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <SectionLabel>Dúvidas frequentes</SectionLabel>
          </motion.div>
          <motion.h2 
            className={styles.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.1 }}
          >
            Respondidas com <em>honestidade.</em>
          </motion.h2>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <FaqItem 
              key={idx}
              index={idx}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === idx}
              onToggle={() => handleToggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
