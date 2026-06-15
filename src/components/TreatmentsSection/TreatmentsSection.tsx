import React from 'react';
import styles from './TreatmentsSection.module.css';
import { m } from 'framer-motion';
import { Check } from 'lucide-react';
import { SectionLabel } from '../SectionLabel/SectionLabel';
import { slideLeft, slideRight } from '../../animations/variants';

export const TreatmentsSection: React.FC = () => {
  // Configuração para acelerar a reprodução do vídeo para 5-6 segundos (se a duração original for um pouco maior)
  const handleVideoMount = (el: HTMLVideoElement | null) => {
    if (el) {
      el.playbackRate = 1.5; // acelera a reprodução
    }
  };

  return (
    <section className={styles.section} id="tratamentos">
      <div className={styles.container}>
        <div className={styles.header}>
          <SectionLabel>O que fazemos</SectionLabel>
          <h2 className={styles.title}>
            O que fazemos e o que isso <em>muda</em> na sua vida.
          </h2>
        </div>

        <div className={styles.grid}>
          {/* Card 1: Implante Dentário */}
          <m.div 
            className={styles.card}
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={styles.cardImageWrapper}>
              <div className={styles.videoStage}>
                <video
                  ref={handleVideoMount}
                  src="/videos/implante_video.mp4"
                  className={styles.treatmentVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              </div>
              <p className={styles.animTag}>✦ Encaixe perfeito</p>
              <span className={styles.imageBadge}>Para quem perdeu um dente</span>
            </div>
            
            <div className={styles.content}>
              <span className={styles.cardEyebrow}>DR. RAFAEL CIDRAL · IMPLANTE</span>
              <h3 className={styles.cardTitle}>Volte a comer, sorrir e conversar com <em>confiança.</em></h3>
              <p className={styles.cardDescription}>
                O tratamento de implante é uma cirurgia que terá seu sucesso desde que estudada, planejada, realizada com conhecimento e manutenção. Assim pode durar décadas.
              </p>
              
              <ul className={styles.outcomesList}>
                <li>
                  <Check className={styles.checkIcon} size={18} />
                  <span>Volte a se alimentar sem medo</span>
                </li>
                <li>
                  <Check className={styles.checkIcon} size={18} />
                  <span>Sorria nas fotos de família de novo</span>
                </li>
                <li>
                  <Check className={styles.checkIcon} size={18} />
                  <span>Sem próteses soltas ou pastas fixadoras</span>
                </li>
                <li>
                  <Check className={styles.checkIcon} size={18} />
                  <span>Preserva os dentes vizinhos</span>
                </li>
              </ul>
              
              <a href="https://wa.me/5519984427733" target="_blank" rel="noopener noreferrer" className={styles.cardCta}>
                Quero saber mais sobre implante
              </a>
            </div>
          </m.div>

          {/* Card 2: Tratamento de Canal */}
          <m.div 
            className={styles.card}
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className={styles.cardImageWrapper}>
              <div className={styles.videoStage}>
                <video
                  ref={handleVideoMount}
                  src="/videos/canal_video.mp4"
                  className={styles.treatmentVideo}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                />
              </div>
              <div className={styles.canalTagWrap}>
                <p className={styles.canalTagDor}>✦ Você tem dor agora.</p>
                <p className={styles.canalTagAlivio}>✦ Vai sair aliviado.</p>
                <p className={styles.canalTagSemPerder}>✦ Sem perder o dente.</p>
              </div>
              <span className={styles.imageBadge}>Para quem tem medo ou dor agora</span>
            </div>
            
            <div className={styles.content}>
              <span className={styles.cardEyebrow}>DRA. MONALISA · ENDODONTIA</span>
              <h3 className={styles.cardTitle}>Acabe com a dor sem precisar <em>perder o dente.</em></h3>
              <p className={styles.cardDescription}>
                A anestesia moderna elimina a dor. O procedimento é
                silencioso e controlado. Você está no comando: se levantar a mão,
                a gente para.
              </p>
              
              <ul className={styles.outcomesList}>
                <li>
                  <Check className={styles.checkIcon} size={18} />
                  <span>Elimina a dor que não deixa dormir</span>
                </li>
                <li>
                  <Check className={styles.checkIcon} size={18} />
                  <span>Salva o dente, sem precisar extrair</span>
                </li>
                <li>
                  <Check className={styles.checkIcon} size={18} />
                  <span>Retoma sua rotina sem aquela sensação constante</span>
                </li>
                <li>
                  <Check className={styles.checkIcon} size={18} />
                  <span>No seu ritmo, sem julgamento</span>
                </li>
              </ul>
              
              <a href="https://wa.me/5519984427733" target="_blank" rel="noopener noreferrer" className={styles.cardCta}>
                Quero saber mais sobre canal
              </a>
            </div>
          </m.div>
        </div>

        {/* Technical Procedures Grid */}
        <div className={styles.proceduresBlock}>
          <h3 className={styles.proceduresTitle}>Nossos Procedimentos</h3>
          
          <div className={styles.proceduresGrid}>
            {/* Category 1: Implante */}
            <div className={`${styles.proceduresCol} ${styles.proceduresColLarge}`}>
              <h4 className={styles.proceduresColTitle}>Implante</h4>
              <ul className={styles.proceduresList}>
                <li>Implante simples/múltiplos</li>
                <li>Protocolo</li>
                <li>Manutenção de Protocolo</li>
              </ul>
            </div>

            {/* Category 2: Prótese */}
            <div className={styles.proceduresCol}>
              <h4 className={styles.proceduresColTitle}>Prótese</h4>
              <ul className={styles.proceduresList}>
                <li>Facetas</li>
                <li>Sobre implante</li>
                <li>Sobre dente</li>
              </ul>
            </div>

            {/* Category 3: Cirurgia */}
            <div className={styles.proceduresCol}>
              <h4 className={styles.proceduresColTitle}>Cirurgia</h4>
              <ul className={styles.proceduresList}>
                <li>Cirurgia de 3º Molar</li>
                <li>Cirurgia geral</li>
              </ul>
            </div>

            {/* Category 4: Periodontia */}
            <div className={styles.proceduresCol}>
              <h4 className={styles.proceduresColTitle}>Periodontia</h4>
              <ul className={styles.proceduresList}>
                <li>Cirurgia plástica periodontal</li>
                <li>Raspagem/ limpeza</li>
                <li>Restaurações</li>
              </ul>
            </div>

            {/* Category 5: Endodontia */}
            <div className={styles.proceduresCol}>
              <h4 className={styles.proceduresColTitle}>Endodontia</h4>
              <ul className={styles.proceduresList}>
                <li>Tratamento de canal (mecanizado)</li>
                <li>Retratamento de canal (mecanizado)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
