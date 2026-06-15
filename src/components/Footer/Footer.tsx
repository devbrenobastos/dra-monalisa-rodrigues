import React from 'react';
import styles from './Footer.module.css';
import { Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Col 1: Brand & Tagline */}
        <div className={styles.col}>
          <span className={styles.logo}>
            Dra. Monalisa Rodrigues
            <br />& Dr. Rafael R. M. Cidral
          </span>
          <p className={styles.tagline}>
            Endodontia · Implantodontia · Periodontia em Vinhedo.
            Cuidado humanizado e individualizado para o seu sorriso.
          </p>
        </div>

        <div className={styles.navContactRow}>
          {/* Col 2: Navigation Links */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Navegação</h3>
            <ul className={styles.linksList}>
              <li><a href="#tratamentos">Tratamentos</a></li>
              <li><a href="#sobre-nos">Sobre nós</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Contact & Location details */}
          <div className={styles.col}>
            <h3 className={styles.colTitle}>Contato & Endereços</h3>
            <div className={styles.contactText}>
              <p style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: '0 0 12px 0' }}>
                <Phone size={14} style={{ opacity: 0.8 }} /> (19) 98442-7733
              </p>
              
              <div style={{ margin: '0 0 12px 0' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: '0 0 4px 0', fontWeight: 'bold' }}>
                  <MapPin size={14} style={{ opacity: 0.8 }} /> Vinhedo - SP
                </p>
                <p style={{ margin: '0 0 0 20px', fontSize: '0.875rem', opacity: 0.8 }}>
                  Av. Independência, 5464 - sala 3 - Centro<br />
                  CEP 13280-000
                </p>
              </div>

              <div style={{ margin: '0 0 12px 0' }}>
                <p style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: '0 0 4px 0', fontWeight: 'bold' }}>
                  <MapPin size={14} style={{ opacity: 0.8 }} /> Campinas - SP
                </p>
                <p style={{ margin: '0 0 0 20px', fontSize: '0.875rem', opacity: 0.8 }}>
                  R. José Guatemosin Nogueira, 26 - Cambuí<br />
                  CEP 13025-120
                </p>
              </div>

              <p style={{ display: 'flex', alignItems: 'center', gap: '6px', margin: '16px 0 0 0', opacity: 0.8, fontSize: '0.875rem' }}>
                <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', fill: 'currentColor' }} aria-hidden="true">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.794-4.382 9.797-9.782.002-2.617-1.01-5.078-2.853-6.921-1.844-1.844-4.298-2.86-6.913-2.861-5.409 0-9.802 4.385-9.804 9.787 0 1.554.434 3.078 1.258 4.416l-.978 3.57 3.65-.956.22.13zm11.387-5.464c-.3-.149-1.774-.874-2.049-.974-.276-.101-.476-.149-.676.149-.2.3-.775.974-.95 1.174-.175.2-.35.225-.65.075-.3-.15-1.265-.467-2.41-1.485-.89-.793-1.49-1.773-1.665-2.073-.175-.3-.019-.463.13-.612.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.676-1.63-.925-2.23-.242-.58-.49-.5-.676-.51-.175-.01-.375-.01-.575-.01-.2 0-.525.075-.8.375-.275.3-1.05 1.025-1.05 2.5s1.075 2.9 1.225 3.1c.15.2 2.11 3.224 5.112 4.521.714.309 1.272.494 1.707.633.717.228 1.37.196 1.885.119.574-.085 1.774-.725 2.024-1.424.25-.7.25-1.3.175-1.425-.075-.125-.275-.2-.575-.35z" />
                </svg>
                Consulte disponibilidade pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <div className={styles.bottomContainer}>
          <span>CRO-SP 105.267 (Dra. Monalisa Rodrigues) · CRO-SP 94.767 (Dr. Rafael R. M. Cidral)</span>
          <span>© {new Date().getFullYear()} Dra. Monalisa Rodrigues & Dr. Rafael R. M. Cidral. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
};
