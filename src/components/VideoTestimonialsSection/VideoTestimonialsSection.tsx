import React, { useState, useRef } from 'react';
import styles from './VideoTestimonialsSection.module.css';
import { m, AnimatePresence } from 'framer-motion';
import { Play, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionLabel } from '../SectionLabel/SectionLabel';


export const VideoTestimonialsSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      type: 'image',
      src: '/depoimentos/depoimento_01.webp',
      alt: 'Depoimento de paciente 01',
      title: 'Feedback de Paciente'
    },
    {
      id: 2,
      type: 'image',
      src: '/depoimentos/depoimento_02.webp',
      alt: 'Depoimento de paciente 02',
      title: 'Agradecimento Especial'
    },
    {
      id: 3,
      type: 'video',
      src: '/depoimentos/depoimento 03.mp4',
      posterGrad: 'linear-gradient(135deg, #132952 0%, #1F3E76 100%)',
      title: 'Relato em Vídeo de Paciente',
      duration: 'Depoimento Clínico 01'
    },
    {
      id: 4,
      type: 'video',
      src: '/depoimentos/depoimento 04.mp4',
      posterGrad: 'linear-gradient(135deg, #1F3E76 0%, #C08293 100%)',
      title: 'Relato em Vídeo de Paciente',
      duration: 'Depoimento Clínico 02'
    }
  ];

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.8;
      scrollContainerRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className={styles.section} id="casos-clinicos">
      <div className={styles.container}>
        <div className={styles.header}>
          <SectionLabel>Histórias de Sorrisos</SectionLabel>
          <h2 className={styles.title}>
            Quem já tratou, <em>recomenda</em>.
          </h2>
          <p className={styles.subtitle}>
            Veja em fotos e vídeos a experiência real de quem recuperou a saúde bucal e a confiança.
          </p>
        </div>

        <div className={styles.carouselWrapper}>
          <button 
            className={`${styles.navButton} ${styles.prevButton}`} 
            onClick={() => handleScroll('left')}
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>

          <div className={styles.scrollContainer} ref={scrollContainerRef}>
            {testimonials.map((item) => (
              <m.div
                key={item.id}
                className={`${styles.card} ${item.type === 'image' ? styles.cardImage : styles.cardVideo}`}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: item.id * 0.05 }}
              >
                {item.type === 'image' ? (
                  <div 
                    className={styles.imageWrapper} 
                    onClick={() => setLightboxImage(item.src)}
                  >
                    <img 
                      src={item.src} 
                      alt={item.alt} 
                      className={styles.image} 
                      loading="lazy"
                    />
                    <div className={styles.imageOverlay}>
                      <ZoomIn className={styles.zoomIcon} size={24} />
                      <span>Ampliar Depoimento</span>
                    </div>
                  </div>
                ) : (
                  <div className={styles.videoWrapper}>
                    {activeVideo === item.id ? (
                      <video
                        src={item.src}
                        className={styles.video}
                        controls
                        autoPlay
                        playsInline
                      />
                    ) : (
                      <div 
                        className={styles.videoPlaceholder}
                        style={{ background: item.posterGrad }}
                        onClick={() => setActiveVideo(item.id)}
                      >
                        <div className={styles.playButton}>
                          <Play size={24} fill="currentColor" />
                        </div>
                        <div className={styles.videoInfo}>
                          <span className={styles.videoTitle}>{item.title}</span>
                          <span className={styles.videoMeta}>{item.duration}</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </m.div>
            ))}
          </div>

          <button 
            className={`${styles.navButton} ${styles.nextButton}`} 
            onClick={() => handleScroll('right')}
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Mobile UX Scroll Indicator */}
        <div className={styles.swipeIndicator}>
          <ChevronLeft size={16} className={styles.arrowLeft} />
          <span>Arraste para ver mais</span>
          <ChevronRight size={16} className={styles.arrowRight} />
        </div>
      </div>


      {/* Lightbox Modal for Images */}
      <AnimatePresence>
        {lightboxImage && (
          <m.div 
            className={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
          >
            <m.div 
              className={styles.lightboxContent}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className={styles.closeButton}
                onClick={() => setLightboxImage(null)}
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
              <img src={lightboxImage} alt="Depoimento ampliado" className={styles.lightboxImage} />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
};
