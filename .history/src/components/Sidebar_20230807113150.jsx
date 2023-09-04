import React from "react";
import { Box } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const Sidebar = () => {
  const items = [
    { name: "ostatnio oglądane", elements: [""] },
    { name: "twoje tagi", elements: [""] },
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

  return <Box sx={{ width: "287px", height: "100vh" }}>
    {items.map}
  </Box>;
};

export default Sidebar;
