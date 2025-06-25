import React from "react";
import styles from "./Footer.module.scss";
import { Link } from "react-router-dom";

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.brand}>ARMANDO PIZZA</div>
      <nav className={styles.nav}>
        <Link to="/">Accueil</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">À propos</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <div className={styles.copy}>
        © 2025 Armando Pizza. Tous droits réservés.
      </div>
    </div>
  </footer>
);
