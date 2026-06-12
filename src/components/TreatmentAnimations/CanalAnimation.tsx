import styles from './CanalAnimation.module.css';

export function CanalAnimation() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.canalScene}>

        {/* Ícone de dor — aparece na fase inicial */}
        <div className={styles.painFace}>
          {/* Sobrancelha franzida */}
          <div className={styles.browLeft} />
          <div className={styles.browRight} />
          {/* Olhos fechados de dor */}
          <div className={styles.eyeLeft} />
          <div className={styles.eyeRight} />
          {/* Boca tensa */}
          <div className={styles.mouthPain} />
        </div>

        {/* Ícone de alívio — aparece na fase final */}
        <div className={styles.reliefFace}>
          {/* Olhos relaxados */}
          <div className={styles.eyeRelaxLeft} />
          <div className={styles.eyeRelaxRight} />
          {/* Sorriso suave */}
          <div className={styles.mouthRelief} />
        </div>

        {/* Ondas de dor — desaparecem com a animação */}
        <div className={styles.painWave} />
        <div className={styles.painWave} />
        <div className={styles.painWave} />

        {/* Dente 3D */}
        <div className={styles.toothWrap}>
          <div className={styles.tooth3d}>
            <div className={styles.toothTop} />
            <div className={styles.toothFace}>
              <div className={styles.inflammation} />
              <div className={styles.cleanLight} />
            </div>
            <div className={styles.toothSide} />

            {/* Raízes */}
            <div className={styles.roots}>
              <div className={styles.root}>
                <div className={styles.rootCanal} />
              </div>
              <div className={styles.root}>
                <div className={styles.rootCanal} />
              </div>
            </div>
          </div>

          {/* Glow de cura */}
          <div className={styles.healGlow} />

          {/* Estrelinhas de alívio */}
          <div className={`${styles.reliefStar} ${styles.rs1}`} />
          <div className={`${styles.reliefStar} ${styles.rs2}`} />
          <div className={`${styles.reliefStar} ${styles.rs3}`} />
        </div>

        {/* Gengiva */}
        <div className={styles.canalGum} />

      </div>
    </div>
  );
}
