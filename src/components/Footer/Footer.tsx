import React from 'react';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Col 1: Brand & Tagline */}
        <div className={styles.col}>
          <span className={styles.logo}>Dra. Monalisa & Dr. Rafael</span>
          <p className={styles.tagline}>
            Especialistas em implante e endodontia em Vinhedo. 
            Cuidado humanizado e individualizado para o seu sorriso.
          </p>
        </div>

        {/* Col 2: Navigation Links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Navegação</h4>
          <ul className={styles.linksList}>
            <li><a href="#tratamentos">Tratamentos</a></li>
            <li><a href="#sobre-nos">Sobre nós</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Col 3: Contact & Location details */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contato</h4>
          <p className={styles.contactText}>
            📞 (19) 99999-9999<br />
            ✉️ contato@dramonalisa.com.br<br />
            📍 Vinhedo, SP (Centro)<br />
            Uniodonto credenciado · Atendimento particular
          </p>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.bottomContainer}>
          <span>CRO-SP 123456 (Dra. Monalisa) · CRO-SP 654321 (Dr. Rafael)</span>
          <span>© 2025 Consultório Boutique. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
};
