import React from "react";
import { Box, Typography } from "@mui/material";
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

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "287px", height: "100vh", justifyContent:"" }}>
      {items.map((item) => (
        <Box sx={{ display: "flex", flexDirection: "column", mb: 2}}>
          <Typography sx={{textTransform:"uppercase"}} variant="subtitle2" color={blueGrey[400]}>{item.name}</Typography>
          {item.elements.map(i => <Typography variant="subtitle3" color={blueGrey[300]}>{i}</Typography>)}
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
