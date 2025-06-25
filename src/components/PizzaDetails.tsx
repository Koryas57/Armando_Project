import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pizzas } from "../data/pizza";
import styles from "./PizzaDetails.module.scss";

export const PizzaDetails: React.FC = () => {
  const { pizzaId } = useParams();
  const navigate = useNavigate();
  const pizza = pizzas.find((p) => p.id === pizzaId);

  if (!pizza) return <p>Pizza non trouvée</p>;

  return (
    <div className={styles.details}>
      <img src={`/assets/pizzas/${pizza.id}.jpg`} alt={pizza.name} />
      <h1>{pizza.name}</h1>
      <span className={styles.price}>{pizza.price.toFixed(2)} €</span>
      <p className={styles.ingredients}>{pizza.ingredients}</p>

      <div className={styles.actions}>
        <button onClick={() => navigate(-1)}>Retour</button>
        <button className={styles.cta}>Commander</button>
      </div>
    </div>
  );
};
