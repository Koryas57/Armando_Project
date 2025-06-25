import React from "react";
import styles from "./Contact.module.scss";

export const Contact: React.FC = () => (
  <div className={styles.contact}>
    <h1>Contact</h1>
    <p>Pour commander ou réserver, contactez-nous :</p>
    <ul>
      <li>
        Téléphone : <a href="tel:0603120184">06 03 12 01 84</a>
      </li>
      <li>
        Email : <a href="mailto:info@armandopizza.fr">info@armandopizza.fr</a>
      </li>
      <li>Adresse : 39 avenue de la Côte Bleue, 13960 Sausset-les-Pins</li>
      <li>
        Horaires :
        <ul>
          <li>Été : 18h30 – 22h30 (7j/7)</li>
          <li>Hiver : 18h30 – 21h00 (mar → dim)</li>
        </ul>
      </li>
    </ul>
    <div className={styles.mapWrapper}>
      <iframe
        src="https://maps.google.com/maps?q=39%20avenue%20de%20la%20C%C3%B4te%20Bleue%2C%2013960%20Sausset-les-Pins&output=embed"
        title="Plan Armando Pizza"
        width="100%"
        height="300"
        allowFullScreen
      ></iframe>
    </div>
  </div>
);
