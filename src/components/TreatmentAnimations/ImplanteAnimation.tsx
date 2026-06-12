import styles from './ImplanteAnimation.module.css';

export function ImplanteAnimation() {
  return (
    <div className={styles.stage} aria-hidden="true">
      <div className={styles.archScene}>
        <div className={styles.archGroup}>

          {/* Fileira de dentes */}
          <div className={styles.teethRow}>
            <div className={`${styles.tooth} ${styles.tMolar}`} />
            <div className={`${styles.tooth} ${styles.tMolar}`} />
            <div className={`${styles.tooth} ${styles.tPre}`} />
            <div className={`${styles.tooth} ${styles.tCanine}`} />

            {/* Espaço vazio — alvéolo */}
            <div className={styles.toothGap}>
              <div className={styles.socket} />
              {/* Implante descendo */}
              <div className={styles.implantAnim}>
                <div className={styles.implantCrown} />
                <div className={styles.implantRoot} />
              </div>
              {/* Halo de encaixe */}
              <div className={styles.implantHalo} />
            </div>

            <div className={`${styles.tooth} ${styles.tCanine}`} />
            <div className={`${styles.tooth} ${styles.tPre}`} />
            <div className={`${styles.tooth} ${styles.tMolar}`} />
            <div className={`${styles.tooth} ${styles.tMolar}`} />
          </div>

          {/* Gengiva */}
          <div className={styles.gum}>
            <div className={styles.gumShape} />
          </div>
        </div>

        {/* Partículas de brilho no encaixe */}
        <div className={`${styles.sparkle} ${styles.sparkle1}`} />
        <div className={`${styles.sparkle} ${styles.sparkle2}`} />
        <div className={`${styles.sparkle} ${styles.sparkle3}`} />
      </div>
    </div>
  );
}
