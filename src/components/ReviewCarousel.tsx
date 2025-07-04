import React from "react";
import styles from "./ReviewCarousel.module.scss";
import { Review } from "../data/reviews";

interface ReviewCarouselProps {
  reviews: Review[];
}

export const ReviewCarousel: React.FC<ReviewCarouselProps> = ({ reviews }) => (
  <div className={styles.carouselContainer}>
    <div className={styles.carousel}>
      {reviews.map((review, index) => {
        const initial = review.author.trim()[0].toUpperCase();
        return (
          <div className={styles.card} key={index}>
            <div className={styles.avatar}>{initial}</div>
            <div className={styles.content}>
              <div className={styles.author}>{review.author}</div>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>{i < review.rating ? "⭐" : "☆"}</span>
                ))}
              </div>
              <p className={styles.text}>“{review.text}”</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
