import React from "react";
import { pizzas, Pizza } from "../data/pizza";
import { PizzaCard } from "./PizzaCard";
import styles from "./MenuGrid.module.scss";

export const MenuGrid: React.FC = () => {
  const byCategory = (cat: Pizza["category"]) =>
    pizzas.filter((p) => p.category === cat);

  return (
    <section className={styles.container}>
      {(["tomate", "crème", "premium"] as Pizza["category"][]).map((cat) => (
        <div key={cat} className={styles.categorySection}>
          <h2 className={styles.categoryTitle}>
            {cat === "tomate"
              ? "Base Tomate"
              : cat === "crème"
                ? "Base Crème"
                : "Premium"}
          </h2>
          <div className={styles.grid}>
            {byCategory(cat).map((p) => (
              <PizzaCard key={p.id} pizza={p} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
