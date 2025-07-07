import React from "react";
import styles from "./Home.module.scss";
import { HeroPromo } from "../components/HeroPromo";
import { reviews } from "../data/reviews";
import { ReviewCarousel } from "../components/ReviewCarousel";

export const Home: React.FC = () => (
  <div className={styles.home}>
    <HeroPromo />
    <section className={styles.reviewsSection}>
      <img src="/assets/pizzas/Greviews.png" alt="Icone Avis Google" />
      <h2>Ce que nos clients en pensent</h2>
      <ReviewCarousel reviews={reviews} />
    </section>
  </div>
);
