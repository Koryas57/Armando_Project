import React from "react";
import { motion } from "framer-motion";
import { Pizza } from "../data/pizza";
import styles from "./PizzaCard.module.scss";

interface PizzaCardProps {
  pizza: Pizza;
}

export const PizzaCard: React.FC<PizzaCardProps> = ({ pizza }) => (
  <motion.div
    className={styles.card}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    whileHover={{ scale: 1.03, boxShadow: "0 8px 16px rgba(0,0,0,0.1)" }}
  >
    {/* image placeholder : on pourra plus tard lier une photo réelle */}
    <div className={styles.imgWrapper}>
      <img
        src={`/assets/pizzas/${pizza.id}.jpg`}
        alt={pizza.name}
        className={styles.image}
      />
    </div>
    <div className={styles.info}>
      <h3 className={styles.name}>{pizza.name}</h3>
      <p className={styles.ingredients}>{pizza.ingredients}</p>
      <span className={styles.price}>{pizza.price.toFixed(2)} €</span>
    </div>
  </motion.div>
);
