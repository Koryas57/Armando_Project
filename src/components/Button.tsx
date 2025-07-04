import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  onClick?: () => void;
  label: string;
}
export const Button: React.FC<ButtonProps> = ({ onClick, label }) => (
  <button className={styles.button} onClick={onClick}>
    {label}
  </button>
);
