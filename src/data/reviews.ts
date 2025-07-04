// src/data/reviews.ts

export interface Review {
  author: string;
  rating: number;
  text: string;
}

export const reviews: Review[] = [
  {
    author: "Flam",
    rating: 5,
    text: "C'est l'une des meilleures pizzas que j'ai mangées ! La pâte parfaitement cuite, les saveurs au top. En plus de ça, l'accueil était vraiment excellent. Je reviendrai sans hésiter !",
  },
  {
    author: "Cassandra Orfanides",
    rating: 5,
    text: "Super accueil, ambiance conviviale et une équipe vraiment aux petits soins. Les pizzas sont délicieuses, généreuses et préparées avec des produits de qualité. C'est toujours un plaisir d'y revenir, en famille ou entre amis. Je recommande les yeux fermés !",
  },
  {
    author: "Charlotte C",
    rating: 5,
    text: "Nouveaux arrivants à Sausset, nous avons découvert cette enseigne familiale et on se régale à chaque fois. Les pizzas sont très bonnes, les livraisons soignées et rapides. Mention spéciale au tiramisu maison, un délice ! Merci à l'équipe et à très bientôt !",
  },
  {
    author: "Xav Phx",
    rating: 5,
    text: "Les meilleures pizzas que j'ai mangées, de nouvelles recettes régulièrement, le patron donne tout pour satisfaire au mieux ses clients. Bravo, je vous conseille fortement ces pizzas !",
  },
  {
    author: "Enzo Deligny",
    rating: 5,
    text: "Accueil très sympathique, ambiance bonne, pizzas délicieuses avec des prix très abordables, le patron est très gentil. Je fais le chemin de Saint-Victoret jusqu'à Sausset rien que pour leurs pizzas. Je conseille vivement.",
  },
];
