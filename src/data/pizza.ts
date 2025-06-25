export interface Pizza {
  id: string;
  name: string;
  ingredients: string;
  price: number;
  category: "tomate" | "crème" | "premium";
}

export const pizzas: Pizza[] = [
  // —— Base Tomate ——
  {
    id: "anchois",
    name: "Anchois",
    ingredients: "Mozzarella, filets d’anchois, olives",
    price: 11,
    category: "tomate",
  },
  {
    id: "moitie",
    name: "Moitié/Moitié",
    ingredients: "Mozzarella, moitié chèvre",
    price: 11,
    category: "tomate",
  },
  {
    id: "fraiche",
    name: "Fraîche",
    ingredients: "Emmental",
    price: 11,
    category: "tomate",
  },
  {
    id: "margherita",
    name: "Margherita",
    ingredients: "Mozzarella, basilic, olives",
    price: 12,
    category: "tomate",
  },
  {
    id: "jambon-mozza",
    name: "Jambon Mozza",
    ingredients: "Mozzarella, jambon",
    price: 12.5,
    category: "tomate",
  },
  {
    id: "chorizo",
    name: "Chorizo",
    ingredients: "Mozzarella, chorizo, olives",
    price: 13,
    category: "tomate",
  },
  {
    id: "corse",
    name: "Corse",
    ingredients: "Mozzarella, fregola, ricotta",
    price: 13,
    category: "tomate",
  },
  {
    id: "royale-tomate",
    name: "Royale",
    ingredients: "Mozzarella, jambon, champignons, olives",
    price: 13,
    category: "tomate",
  },
  {
    id: "4-fromages-t",
    name: "4 Fromages",
    ingredients: "Mozzarella, emmental, chèvre, roquefort",
    price: 13.5,
    category: "tomate",
  },
  {
    id: "fermiere-t",
    name: "Fermière",
    ingredients: "Mozzarella, lardons, champignons, oignons conf.",
    price: 13.5,
    category: "tomate",
  },
  {
    id: "savoyarde-t",
    name: "Savoyarde",
    ingredients: "Mozzarella, lardons, reblochon, oignons conf.",
    price: 14,
    category: "tomate",
  },

  // —— Base Crème ——
  {
    id: "chevre-miel",
    name: "Chèvre Miel",
    ingredients: "Mozzarella, chèvre, miel, olives",
    price: 13,
    category: "crème",
  },
  {
    id: "royale-creme",
    name: "Royale",
    ingredients: "Mozzarella, jambon, champignons, olives",
    price: 13,
    category: "crème",
  },
  {
    id: "4-fromages-c",
    name: "4 Fromages",
    ingredients: "Mozzarella, emmental, chèvre, roquefort",
    price: 13.5,
    category: "crème",
  },
  {
    id: "fermiere-c",
    name: "Fermière",
    ingredients: "Mozzarella, lardons, champignons, oignons conf.",
    price: 13.5,
    category: "crème",
  },
  {
    id: "savoyarde-c",
    name: "Savoyarde",
    ingredients: "Mozzarella, lardons, reblochon, oignons conf.",
    price: 14,
    category: "crème",
  },

  // —— Premium ——
  {
    id: "armand'o",
    name: "Armand’o",
    ingredients: "Base tomate, anchois, câpres",
    price: 13,
    category: "premium",
  },
  {
    id: "esperienza",
    name: "Sperienza",
    ingredients: "Base tomate, jambon, œuf",
    price: 14,
    category: "premium",
  },
  {
    id: "litalienne",
    name: "L’Italienne",
    ingredients: "Base crème, jambon, champignons",
    price: 15,
    category: "premium",
  },
  {
    id: "merveilleuse",
    name: "La Merveilleuse",
    ingredients: "Base crème, saumon, mozzarella",
    price: 15,
    category: "premium",
  },
  {
    id: "asiatique",
    name: "L’Asiatique",
    ingredients: "Base crème, poulet, champignons, oignons, sauce soja",
    price: 15,
    category: "premium",
  },
];
