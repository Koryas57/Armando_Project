import React from "react";
import styles from "./ReviewCarousel.module.scss";

interface ReviewCarouselProps {
  reviews: string[];
}
export const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ reviews }) => (
  <div className={styles.carousel}>{/* Implémentation du carrousel ici */}</div>
);
