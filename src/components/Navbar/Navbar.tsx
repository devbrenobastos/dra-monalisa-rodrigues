import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { m, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const links = [
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Sobre nós', href: '#sobre-nos' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <>
      <m.nav 
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        initial={{ y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className={styles.container}>
          <a href="#" className={styles.logo}>
            <span className={styles.desktopLogo}>Dra. Monalisa Rodrigues & Dr. Rafael R. M. Cidral</span>
            <span className={styles.mobileLogo}>
              Dra. Monalisa Rodrigues
              <br />
              & Dr. Rafael R. M. Cidral
            </span>
          </a>

          <div className={styles.desktopLinks}>
            {links.map((link) => (
              <a key={link.href} href={link.href} className={styles.link}>
                {link.label}
              </a>
            ))}
          </div>

          <div className={styles.desktopCta}>
            <a href="https://wa.me/5519984427733" target="_blank" rel="noopener noreferrer" className={styles.ctaButton}>
              Agendar Consulta
            </a>
          </div>

          <button 
            className={`${styles.hamburger} ${isOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Abrir menu"
            aria-expanded={isOpen}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
      </m.nav>

      <AnimatePresence>
        {isOpen && (
          <m.div 
            className={styles.drawer}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <div className={styles.drawerContent}>
              <div className={styles.drawerLinks}>
                {links.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    className={styles.drawerLink}
                    onClick={closeMenu}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className={styles.drawerCta}>
                <a 
                  href="https://wa.me/5519984427733" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.drawerCtaButton}
                  onClick={closeMenu}
                >
                  Agendar Consulta
                </a>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};
