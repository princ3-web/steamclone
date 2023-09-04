import React from "react";
import { Box, Typography } from "@mui/material";
import { blueGrey, blue } from "@mui/material/colors";

const ItemBrowser = () => {
  const items = ["Popularne nowości", "Bestsellery", "Popularne nadchodzące", "Oferty specjalne"];

  return (
    <Box sx={{ width: 940, height: 814, my: 4 }}>
      <Box sx={{display: "flex"}}>
        {items.map((item) => (
          <Typography sx={{px: 1}} color={blue[500]} variant="subtitle3">{item}</Typography>
        ))}
        <Box>

        </Box>
      </Box>
    </Box>
  );
};

export default ItemBrowser;
