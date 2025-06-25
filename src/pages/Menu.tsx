import React from "react";
import { Routes, Route } from "react-router-dom";
import { PizzaList } from "../components/PizzaList";
import { PizzaDetails } from "../components/PizzaDetails";

export const Menu: React.FC = () => (
  <Routes>
    <Route index element={<PizzaList />} />
    <Route path=":pizzaId" element={<PizzaDetails />} />
  </Routes>
);
