import React, { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { blueGrey, blue, grey } from "@mui/material/colors";
import image from "../assets/images/0.jpg";

const ItemBrowser = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const items = ["Popularne nowości", "Bestsellery", "Popularne nadchodzące", "Oferty specjalne"];
  const elements = [0, 1, 2];

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

      <Box sx={{ backgroundColor: blueGrey[700], width: "100%", height: 814 }}>
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
        {elements.map((item) => (
          <Box
            sx={{
              display: "flex",
              height: "69px",
              width: "618px",
              mb: 1,
              backgroundColor: blueGrey[900],
            }}
          >
            <CardMedia
              component="img"
              image={image}
              alt="Sample Image"
              sx={{ height: "100%", objectFit: "cover", width: "184px" }}
            />
            <Box
              sx={{
                display: "flex",
                position: "relative",
                flexDirection: "column",
                justifyContent: "space-between",
                mx: 2,
                my: 0.25,
                width: "100%",
              }}
            >
              <Typography variant="subtitle1" color={grey[400]}>
                Baldur's Gate 3
              </Typography>
              <Typography variant="subtitle3" color={grey[600]}>
                bbb
              </Typography>
            </Box>
            <Box sx={{ alignSelf: "center", whiteSpace: "nowrap", mr: 2 }}>
              <Typography color={grey[100]}>89,99zł</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ItemBrowser;
