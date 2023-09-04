import React, { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { blueGrey, blue, grey } from "@mui/material/colors";
import image from "../assets/images/0.jpg";
import { itemBrowserItems } from "../data/data";

const ItemBrowser = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const items = ["Popularne nowości", "Bestsellery", "Popularne nadchodzące", "Oferty specjalne"];
  
  


  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", ml: "287px" }}>
        {items.map((item, n) => (
          <Box
            onClick={() => setSelectedCategory(n)}
            sx={{
              p: 1,
              backgroundColor: selectedCategory === n ? blueGrey[700] : blueGrey[800],
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
            }}
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

      <Box
        sx={{
          display:"flex",
          background: "linear-gradient(to bottom," + blueGrey[700] + "," + blueGrey[900] + ")",
          width: "100vw",
          height: 814,
          pt: 1,
          px: "287px",
        }}
      >
        <Box>
          <Box sx={{ backgroundColor: blueGrey[900], width: "618px", py: 1, textAlign: "end" }}>
            <Typography variant={"subtitle4"} color={grey[200]}>
              Zobacz więcej:
            </Typography>
            <Typography
              variant={"subtitle4"}
              color={grey[200]}
              sx={{
                px: 2,
                py: 0.5,
                my: 0.5,
                mx: 0.5,
                border: "1px solid " + grey[600],
                cursor: "pointer",
                "&:hover": {
                  border: "1px solid " + grey[100],
                },
              }}
            >
              Nowe tytuły
            </Typography>
          </Box>
          {renderItemList()}
        </Box>
        <Box sx={{ border: "1px solid red", width: "307px", height: "814px", ml: "13px" }}></Box>
      </Box>
    </Box>
  );
};

export default ItemBrowser;
