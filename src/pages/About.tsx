import React from "react";
import styles from "./About.module.scss";
import { ReviewCarousel } from "../components/ReviewCarousel";

export const About: React.FC = () => (
  <div className={styles.about}>
    <h1>Qui sommes-nous ?</h1>
    <p>
      Armando Pizza est une pizzeria artisanale située à Sausset-les-Pins. Nous
      préparons toutes nos pizzas avec des ingrédients frais et un savoir-faire
      traditionnel.
    </p>
    <p>
      Notre mission : vous offrir une expérience culinaire conviviale,
      savoureuse et toujours faite maison.
    </p>

    <section className={styles.reviews}>
      <h2>Ils nous recommandent</h2>
      <ReviewCarousel reviews={[]} />
    </section>
  </div>
);
