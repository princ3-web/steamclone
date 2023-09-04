import React, {useState} from "react";
import { Box, Typography } from "@mui/material";
import { blueGrey, blue } from "@mui/material/colors";

const ItemBrowser = () => {

  const [selectedCategory, setSelectedCategory] = useState(0)

  const items = ["Popularne nowości", "Bestsellery", "Popularne nadchodzące", "Oferty specjalne"];

  return (
    <Box sx={{ my: 4 }}>
      <Box>
        {items.map((item, n) => (
          <Typography sx={{ px: 1 }} color={selectedCategory === n ?  : blue[300]} variant="subtitle3">
            {item}
          </Typography>
        ))}
        <Box sx={{ backgroundColor: blueGrey[700], width: 940, height: 814, mt: 1 }}></Box>
      </Box>
    </Box>
  );
};

export default ItemBrowser;
