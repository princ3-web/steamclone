import React from "react";
import { Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const ItemBrowser = () => {
  const items = ["Popularne nowości", "Bestsellery", "Popularne nadchodzące", "Oferty specjalne"];

  return <Box sx={{ width: 940, height: 814, backgroundColor: blueGrey[600], my: 4 }}>
    <Box>
      <Typography></Typography>
    </Box>
  </Box>;
};

export default ItemBrowser;
