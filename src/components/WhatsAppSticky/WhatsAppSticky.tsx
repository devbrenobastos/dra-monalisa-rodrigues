import React, { useState, useEffect } from 'react';
import styles from './WhatsAppSticky.module.css';
import { motion, AnimatePresence } from 'framer-motion';

export const WhatsAppSticky: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show after 3 seconds anyway
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    // Show after scrolling 300px
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="https://wa.me/5519999999999"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.stickyBtn}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: 1, 
            opacity: 1,
            boxShadow: [
              "0 8px 32px rgba(37,211,102,0.35)",
              "0 8px 48px rgba(37,211,102,0.55)",
              "0 8px 32px rgba(37,211,102,0.35)"
            ]
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ 
            scale: { type: "spring", stiffness: 300, damping: 20 },
            opacity: { duration: 0.2 },
            boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }}
          aria-label="Falar no WhatsApp"
        >
          {/* Pulsing visual outline */}
          <span className={styles.pulseRing}></span>
          
          <svg viewBox="0 0 24 24" className={styles.icon} fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.794-4.382 9.797-9.782.002-2.617-1.01-5.078-2.853-6.921-1.844-1.844-4.298-2.86-6.913-2.861-5.409 0-9.802 4.385-9.804 9.787 0 1.554.434 3.078 1.258 4.416l-.978 3.57 3.65-.956.22.13zm11.387-5.464c-.3-.149-1.774-.874-2.049-.974-.276-.101-.476-.149-.676.149-.2.3-.775.974-.95 1.174-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.793-1.49-1.773-1.665-2.073-.175-.3-.019-.463.13-.612.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-.925-2.23-.242-.58-.49-.5-.676-.51-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.309 1.272.494 1.707.633.717.228 1.37.196 1.885.119.574-.085 1.774-.725 2.024-1.424.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
          </svg>
          
          <span className={styles.btnText}>Agendar consulta</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
};
