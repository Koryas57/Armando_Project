import React from "react";
import styles from "./HeroPromo.module.scss";

export const HeroPromo: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.content}>
      <h1>3 = 4</h1>
      <p className={styles.sub}>*Offre valable hors saison</p>
      <a href="/menu" className={styles.cta}>
        Voir la carte complète
      </a>
    </div>
    {/* fond illustratif */}
    <div className={styles.bgImage}></div>
  </section>
);
