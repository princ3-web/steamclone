import React, { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { blueGrey, blue, grey } from "@mui/material/colors";
import image from "../assets/i"

const ItemBrowser = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const items = ["Popularne nowości", "Bestsellery", "Popularne nadchodzące", "Oferty specjalne"];

  return (
    <Box sx={{ my: 4 }}>
      <Box sx={{ display: "flex" }}>
        {items.map((item, n) => (
          <Box
            onClick={() => setSelectedCategory(n)}
            sx={{ p: 1, backgroundColor: selectedCategory === n ? blueGrey[700] : blueGrey[800] }}
          >
            <Typography
              sx={{
                cursor: "pointer",
                userSelect: "none",
              }}
              color={selectedCategory === n ? grey[100] : blue[300]}
              variant="subtitle3"
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>
      <Box sx={{ backgroundColor: blueGrey[700], width: 940, height: 814 }}>
        <Box>
          <CardMedia
            component="img"
            image={sliderItems[selectedSlide].image}
            alt="Sample Image"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ItemBrowser;
