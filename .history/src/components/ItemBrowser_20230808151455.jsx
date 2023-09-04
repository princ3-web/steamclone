import React from "react";
import { Box, Typography } from "@mui/material";
import { blueGrey, blue } from "@mui/material/colors";

const ItemBrowser = () => {
  const items = ["Popularne nowości", "Bestsellery", "Popularne nadchodzące", "Oferty specjalne"];

  return (
    <Box sx={{ width: 940, height: 814, backgroundColor: blueGrey[700], my: 4 }}>
      <Box sx={{display: "flex"}}>
        {items.map((item) => (
          <Typography sx={{px: 1}} color={blue[400]} variant="">{item}</Typography>
        ))}
      </Box>
    </Box>
  );
};

export default ItemBrowser;
