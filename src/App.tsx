import React from "react";
import { Routes, Route } from "react-router-dom";

import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import { Home } from "../src/pages/Home";
import { Menu } from "../src/pages/Menu";
import { About } from "../src/pages/About";
import { Contact } from "../src/pages/Contact";

import styles from "./App.module.scss";

export const App: React.FC = () => (
  <div className={styles.app}>
    <Header />
    <main className={styles.main}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/*" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
    <Footer />
  </div>
);
