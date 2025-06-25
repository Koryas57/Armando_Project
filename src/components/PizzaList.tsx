import React from "react";
import { Link } from "react-router-dom";
import { pizzas } from "../data/pizza";
import styles from "./PizzaList.module.scss";

export const PizzaList: React.FC = () => (
  <section className={styles.grid}>
    {pizzas.map((pizza) => (
      <Link to={`/menu/${pizza.id}`} key={pizza.id} className={styles.card}>
        <img src={`/assets/pizzas/${pizza.id}.jpg`} alt={pizza.name} />
        <h3>{pizza.name}</h3>
        <p>{pizza.price.toFixed(2)} €</p>
      </Link>
    ))}
  </section>
);
