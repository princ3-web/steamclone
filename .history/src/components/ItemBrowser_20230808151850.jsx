import React from "react";
import { Box, Typography } from "@mui/material";
import { blueGrey, blue } from "@mui/material/colors";

const ItemBrowser = () => {
  const items = ["Popularne nowości", "Bestsellery", "Popularne nadchodzące", "Oferty specjalne"];

  return (
    <Box sx={{ my: 4 }}>
      <Box>
        {items.map((item) => (
          <Typography sx={{ px: 1 }} color={blue[500]} variant="subtitle3">
            {item}
          </Typography>
        ))}
        <Box sx={{ backgroundColor: blueGrey[700], width: 940, height: 814, mt:  }}></Box>
      </Box>
    </Box>
  );
};

export default ItemBrowser;
