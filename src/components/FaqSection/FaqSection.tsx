import React, { useState } from 'react';
import styles from './FaqSection.module.css';
import { m, AnimatePresence } from 'framer-motion';
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
    <m.div 
      className={styles.faqItem}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      custom={index * 0.05}
    >
      <button 
        className={styles.faqTrigger} 
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <m.span 
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={styles.iconWrapper}
        >
          <Plus size={18} />
        </m.span>
      </button>
 
      <AnimatePresence initial={false}>
        {isOpen && (
          <m.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className={styles.answerWrapper}
          >
            <div className={styles.faqContent}>
              {answer}
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </m.div>
  );
};

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      q: "Tratamento de canal dói?",
      a: "Com anestesia moderna, não. A sensação mais comum é alívio, porque a dor que existia antes desaparece. Se sentir qualquer desconforto, sinaliza e a gente adapta."
    },
    {
      q: "Implante é caro? Tem parcelamento?",
      a: "Oferecemos parcelamento para que o implante caiba no seu orçamento. Na consulta você recebe um orçamento claro, sem surpresas."
    },
    {
      q: "Quanto tempo leva o tratamento?",
      a: "Canal costuma ser resolvido em 1 a 2 sessões. Implante tem um processo mais longo, mas planejado com você, sem pressa, com dente provisório quando necessário."
    },
    {
      q: "Tenho muito medo. Vocês conseguem lidar com isso?",
      a: "Nosso atendimento é humanizado, explicamos tudo do início ao fim sempre priorizando o seu bem estar e conforto."
    },
    {
      q: "Vocês atendem em Campinas?",
      a: "Sim, atendemos tanto em Vinhedo quanto em Campinas. Você pode escolher a unidade que for mais conveniente para o seu atendimento."
    },
    {
      q: "Vocês atendem por plano odontológico?",
      a: "Atendemos exclusivamente pelo plano Uniodonto. Para demais convênios, fornecemos toda a documentação necessária para você solicitar a cobertura do tratamento ou reembolso."
    }
  ];

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <m.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <SectionLabel>Dúvidas frequentes</SectionLabel>
          </m.div>
          <m.h2 
            className={styles.title}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
          >
            Respondidas com <em>honestidade.</em>
          </m.h2>
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
