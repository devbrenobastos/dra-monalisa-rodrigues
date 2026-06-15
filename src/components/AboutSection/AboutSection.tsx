import styles from './AboutSection.module.css';
import { SectionLabel } from '../SectionLabel/SectionLabel';

export function AboutSection() {
  return (
    <section className={styles.section} id="sobre-nos">
      <div className={styles.inner}>

        {/* Cabeçalho centralizado */}
        <div className={styles.header}>
          <SectionLabel dark>Quem somos</SectionLabel>
          <h2 className={styles.headline}>
            Dois especialistas. Um consultório.<br />
            <em>Cuidado do início ao fim.</em>
          </h2>
          <p className={styles.intro}>
            O Dr. Rafael cuida do seu implante e da sua gengiva.
            A Dra. Monalisa cuida do seu canal e do seu dente.
            Juntos, cuidam de você — sem rotatividade, sem surpresas.
          </p>
        </div>

        {/* Grid dos dois doutores */}
        <div className={styles.doctorsGrid}>

          {/* Dr. Rafael Cidral */}
          <div className={styles.doctorCard}>
            <div className={styles.cardTop}>
              <div>
                <p className={styles.doctorName}>Dr. Rafael R. M. Cidral</p>
                <p className={styles.doctorRole}>Periodontista & Implantodontista</p>
                <p className={styles.doctorCro}>CRO-SP 94.767</p>
              </div>
            </div>
            <ul className={styles.credentials}>
              <li>
                <span className={styles.dot} />
                Formado pela São Leopoldo Mandic
              </li>
              <li>
                <span className={styles.dot} />
                Atua com Implantodontia, Periodontia e Cirurgia Geral
              </li>
              <li>
                <span className={styles.dot} />
                Professor Assistente de Cirurgia e Implante — Instituto Mestris
              </li>
              <li>
                <span className={styles.dot} />
                Atua com reabilitação oral
              </li>
            </ul>
            <div className={styles.cardFocus}>
              <span className={styles.focusLabel}>Foco</span>
              <span className={styles.focusValue}>Implante Dentário</span>
            </div>
          </div>

          {/* Dra. Monalisa Rodrigues */}
          <div className={styles.doctorCard}>
            <div className={styles.cardTop}>
              <div>
                <p className={styles.doctorName}>Dra. Monalisa Rodrigues</p>
                <p className={styles.doctorRole}>Endodontista & Clínica Geral</p>
                <p className={styles.doctorCro}>CRO-SP 105.267</p>
              </div>
            </div>
            <ul className={styles.credentials}>
              <li>
                <span className={styles.dot} />
                Formada pela UNIP
              </li>
              <li>
                <span className={styles.dot} />
                Atua com Endodontia e Clínica Geral
              </li>
              <li>
                <span className={styles.dot} />
                Endodontista com mais de 2.000 atendimentos realizados
              </li>
              <li>
                <span className={styles.dot} />
                Mais de 12 anos de experiência clínica
              </li>
              <li>
                <span className={styles.dot} />
                Especialista em tratamento de canal sem dor
              </li>
            </ul>
            <div className={styles.cardFocus}>
              <span className={styles.focusLabel}>Foco</span>
              <span className={styles.focusValue}>Tratamento de Canal</span>
            </div>
          </div>

        </div>

        {/* Parágrafo de missão */}
        <p className={styles.mission}>
          Construímos nosso atendimento em Vinhedo com um propósito simples:
          oferecer o cuidado que gostaríamos de receber.
          Com tempo, escuta e respeito pelo que você sente.
        </p>

        {/* CTA */}
        <div className={styles.ctaWrap}>
          <button className={styles.ctaBtn}>Conhecer o consultório</button>
        </div>

      </div>
    </section>
  );
}
