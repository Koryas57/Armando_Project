import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";
import LogoBlanc from "../assets/menu/LogoBlanc.jpg";

type NavItem = { label: string; to: string };
const navItems: NavItem[] = [
  { label: "Accueil", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "À propos", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const Header: React.FC = () => (
  <header className={styles.header}>
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="tel:0603120184">06 03 12 01 84</a>
        </li>
        <li>39 avenue de la Côte Bleue, 13960 Sausset-les-Pins</li>
        <li>
          <ul>
            <li>Été : 18h30 – 22h30 (7j/7)</li>
            <li>Hiver : 18h30 – 21h00 (mar → dim)</li>
          </ul>
        </li>
      </ul>
      <Link to="/" className={styles.brand}>
        <img src={LogoBlanc} alt="Logo Armand'O" />
      </Link>
      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                isActive ? styles.active : styles.link
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);
