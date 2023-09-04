import React, { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { blueGrey, blue, grey } from "@mui/material/colors";
import image from "../assets/images/0.jpg";
import { itemBrowserItems } from "../data/data";

const ItemBrowser = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedGame, setSelectedGame] = use

  const items = ["Popularne nowości", "Bestsellery", "Popularne nadchodzące", "Oferty specjalne"];

  const renderTags = (tags) => (
    <Box sx={{ display: "flex" }}>
      {tags.map((tag, index) => (
        <Typography key={index} variant="subtitle3" color={grey[600]}>
          {index !== 0 && ", "}
          {tag}
        </Typography>
      ))}
    </Box>
  );

  const renderItemList = () =>
    itemBrowserItems.slice(0, 10).map((item, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          height: "69px",
          width: "618px",
          mb: 1,
          backgroundColor: blueGrey[900],
          cursor: "pointer",
          "&:hover": {
            backgroundColor: blueGrey[200],
            width: "634px",
            pr: "16px",
            "& .MuiTypography-root": {
              color: blueGrey[900],
            },
          },
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
            {item.name}
          </Typography>
          {renderTags(item.tags)}
        </Box>
        <Box sx={{ alignSelf: "center", whiteSpace: "nowrap", mr: 2 }}>
          <Typography color={grey[100]}>89,99zł</Typography>
        </Box>
      </Box>
    ));

  return (
    <Box sx={{ mt: 4 }}>
      <Box sx={{ display: "flex", ml: "287px" }}>
        {items.map((item, index) => (
          <Box
            key={index}
            onClick={() => setSelectedCategory(index)}
            sx={{
              p: 1,
              backgroundColor: selectedCategory === index ? blueGrey[700] : blueGrey[800],
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
            }}
          >
            <Typography
              sx={{
                cursor: "pointer",
                userSelect: "none",
              }}
              color={selectedCategory === index ? grey[100] : blue[300]}
              variant="subtitle3"
            >
              {item}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          background: `linear-gradient(to bottom, ${blueGrey[700]}, ${blueGrey[900]})`,
          width: "100vw",
          height: 814,
          pt: 1,
          px: "287px",
        }}
      >
        <Box>
          <Box
            sx={{
              backgroundColor: blueGrey[900],
              width: "618px",
              py: 1,
              textAlign: "end",
            }}
          >
            <Typography variant="subtitle4" color={grey[200]}>
              Zobacz więcej:
            </Typography>
            <Typography
              variant="subtitle4"
              color={grey[200]}
              sx={{
                px: 2,
                py: 0.5,
                my: 0.5,
                mx: 0.5,
                border: `1px solid ${grey[600]}`,
                cursor: "pointer",
                "&:hover": {
                  border: `1px solid ${grey[100]}`,
                },
              }}
            >
              Nowe tytuły
            </Typography>
          </Box>
          {renderItemList()}
        </Box>
        <Box
          sx={{
            position: "absolute",
            backgroundColor: blueGrey[200],
            width: "307px",
            height: "814px",
            ml: "13px",
            right:"286px"
          }}
        ></Box>
      </Box>
    </Box>
  );
};

export default ItemBrowser;
