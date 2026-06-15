import React, { useEffect, useRef, useState } from 'react';
import styles from './ProblemSection.module.css';
import { useInView } from 'framer-motion';
import { SectionLabel } from '../SectionLabel/SectionLabel';

const DramaticTypewriter: React.FC = () => {
  const text = "Mas a dor voltou...";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!isInView) return;

    let index = isDeleting ? text.length : 0;

    const interval = setInterval(() => {
      if (!isDeleting) {
        // Typing
        setDisplayedText(text.slice(0, index + 1));
        index++;
        if (index >= text.length) {
          clearInterval(interval);
          // Wait 2.5 seconds before deleting
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        // Deleting
        setDisplayedText(text.slice(0, index - 1));
        index--;
        if (index <= 0) {
          clearInterval(interval);
          // Wait 1 second before starting to type again
          setTimeout(() => setIsDeleting(false), 1000);
        }
      }
    }, isDeleting ? 60 : 120); // delete faster than typing

    return () => clearInterval(interval);
  }, [isInView, isDeleting]);

  return (
    <p ref={ref} className={styles.storyImpact}>
      {displayedText}
      <span className={styles.cursor}>|</span>
    </p>
  );
};

export const ProblemSection: React.FC = () => {
  return (
    <section className={styles.problemSection}>
      <div className={styles.problemInner}>

        <div className={styles.labelWrapper}>
          <SectionLabel>Sabemos o que você está sentindo</SectionLabel>
        </div>

        <h2 className={styles.sectionTitle}>
          Você já tentou ignorar<br />
          <em>esse problema</em>.
        </h2>

        <p className={styles.storyParagraph}>
          Tomou remédio. Esperou passar. Prometeu para si mesmo que
          marcaria a consulta no mês seguinte.
        </p>

        <DramaticTypewriter />

        <p className={styles.storyParagraph}>
          Ou aquele espaço vazio no sorriso continuou ali. E toda vez
          que você pensa em resolver, o medo aparece junto.
        </p>

        <div className={styles.fearsBlock}>
          <div className={styles.fearItem}>
            <span className={styles.fearIcon}>♡</span>
            <p className={styles.fearText}>
              Medo de sentir dor durante o procedimento.
            </p>
          </div>
          <div className={styles.fearItem}>
            <span className={styles.fearIcon}>$</span>
            <p className={styles.fearText}>
              Medo de gastar mais do que pode pagar.
            </p>
          </div>
          <div className={styles.fearItem}>
            <span className={styles.fearIcon}>◎</span>
            <p className={styles.fearText}>
              Medo de descobrir que o problema é pior do que parece.
            </p>
          </div>
        </div>

        <p className={styles.storyParagraph}>
          Se você se identificou com pelo menos um desses medos,
          saiba que não está sozinho e que existe uma saída.
        </p>

        <blockquote className={styles.blockquote}>
          <p>
            Em mais de 2.000 atendimentos, a frase que mais ouvimos
            foi: <em>Eu não sabia que ia ser assim tão tranquilo.</em>
          </p>
        </blockquote>

      </div>
    </section>
  );
};
