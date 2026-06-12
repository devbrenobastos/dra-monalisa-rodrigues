import React from 'react';
import styles from './SectionLabel.module.css';

interface SectionLabelProps {
  children: React.ReactNode;
  dark?: boolean;
}

export function SectionLabel({ children, dark = false }: SectionLabelProps) {
  return (
    <div className={`${styles.label} ${dark ? styles.dark : ''}`}>
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.text}>{children}</span>
    </div>
  );
}
