
import image0 from "../assets/images/0.jpg";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";
import image7 from "../assets/images/7.jpg";
import image8 from "../assets/images/8.jpg";
import image9 from "../assets/images/9.jpg";
import context from 'require-context.macro';

const imageContext = context('./', false, /\.(png|jpe?g|svg)$/);

export const images = imageContext.keys().map(imageContext);



export const sliderItems = [
  {
    image: image0,
    gallery: [image1, image2, image3, image4],
    name: "Dota 2",
    text: "Polecane, ponieważ grasz w gry z tagami",
    tags: ["MOBA", "Zespołowe", "Rywalizacja", "Free to Play"],
    price: "Free to play",
  },
  {
    image: image5,
    gallery: [image6, image7, image8, image9],
    name: "Smite",
    text: "Polecane, ponieważ grasz w gry z tagami",
    tags: ["MOBA", "Zespołowe", "Rywalizacja", "Free to Play"],
    price: "Free to play",
  },
];

export const sidebarItems =  [
  {
    name: "ostatnio oglądane",
    elements: [
      "Dota 2",
      "American Truck Simulator",
      "NosTale - Anime MMORPG",
      "Offroad Mechanic Simulator",
      "EA SPORTS FC™ 24",
    ],
  },
  { name: "twoje tagi", elements: ["MOBA", "Nostalgia", "Mitologia", "Zespołowe", "MMORPG"] },
  { name: "polecane", elements: ["Przez znajomych", "Przez kuratorów", "Tagi"] },
  {
    name: "przeglądaj kategorie",
    elements: [
      "Bestsellery",
      "Nowości",
      "Nadchodzące",
      "Oferty specjalne",
      "Tytuły VR",
      "Przyjazne kontrolerom",
      "Świetne na Decku",
    ],
  },
  { name: "sprzęt", elements: ["Steam Deck", "Stacja dokująca Steam Decka", "Sprzęt VR"] },
  {
    name: "przeglądaj według gatunku",
    elements: [
      "Free to Play",
      "Wczesny dostęp",
      "Akcja",
      "MMO",
      "Niezależne",
      "Przygodowe",
      "Rekreacyjne",
      "RPG",
      "Sportowe",
      "Strategiczne",
      "Symulatory",
      "Wyścigowe",
    ],
  },
];