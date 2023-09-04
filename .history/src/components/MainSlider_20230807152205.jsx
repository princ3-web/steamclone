import React, { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import image0 from "../assets/images/0.jpg";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MainSlider = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  const items = [
    {
      image: image0,
      gallery: [image0, image1, image2, image3],
      name: "Dota 2",
      text: "Polecane, ponieważ grasz w gry z tagami",
      tags: ["MOBA", "Zespołowe", "Rywalizacja", "Free to Play"],
      price: "Free to play",
    },
    {
      image: image0,
      gallery: [image0, image1, image2, image3],
      name: "Dota 3",
      text: "Polecane, ponieważ grasz w gry z tagami",
      tags: ["MOBA", "Zespołowe", "Rywalizacja", "Free to Play"],
      price: "Free to play",
    },
    {
      image: image0,
      gallery: [image0, image1, image2, image3],
      name: "Dota 4",
      text: "Polecane, ponieważ grasz w gry z tagami",
      tags: ["MOBA", "Zespołowe", "Rywalizacja", "Free to Play"],
      price: "Free to play",
    },
  ];

  return (
    <Box sx={{ position: "relative", width: "940px", mt: 3 }}>
      <Typography color={grey[100]} textTransform={"uppercase"} mb={1}>
        WYRÓŻNIONE I POLECANE
      </Typography>
      <Box display={"flex"} sx={{ height: "353px" }} backgroundColor={blueGrey[400]}>
        <Box
          sx={{ width: 616, height: "100%", zIndex: 2 }}
          backgroundColor={blueGrey[500]}
          boxShadow={"0 0 10px 0px #000"}
        >
          <CardMedia
            component="img"
            image={image0}
            alt="Sample Image"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 324,
            height: "100%",
            zIndex: 1,
          }}
          boxShadow={"0 0 10px 0px #000"}
          backgroundColor={blueGrey[900]}
        >
          <Typography variant="h5" color={grey[100]} mx={2} my={2}>
            {items[selectedSlide].name}
          </Typography>
          <Box
            sx={{
              width: "300px",
              height: "162px",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              alignItems: "stretch",
            }}
          >
            {items[selectedSlide].gallery.map((item) => (
              <CardMedia
                component="img"
                image={item}
                alt="Sample Image"
                sx={{ width: "48%", height: "42%", objectFit: "cover" }}
              />
            ))}
          </Box>
          <Typography color={grey[100]} mx={2}>
            {items[selectedSlide].text}
          </Typography>
          <Box color={grey[100]} mx={2} sx={{ display: "flex", flexWrap: "wrap" }}>
            {items[selectedSlide].tags.map((item) => (
              <Typography
                variant="subtitle3"
                sx={{ px: 1, backgroundColor: blueGrey[600], mr: 0.25, mb: 0.5, borderRadius: 1 }}
              >
                {item}
              </Typography>
            ))}
          </Box>
          <Typography variant="subtitle4" color={grey[100]} mx={2} my={1}>
            {items[selectedSlide].price}
          </Typography>
        </Box>
      </Box>
      <Box
      onClick={console.log("afeafe")}
      
        sx={{
          display: "flex",
          position: "absolute",
          alignItems: "center",
          color: grey[100],
          left: "-45px",
          top: "50%",
          transform: "translate(0%, -50% )",
          height: "108px",
          width: "45px",
          cursor: "pointer",
          background: "linear-gradient(to right," + blueGrey[900] + "," + blueGrey[800] + ")",
          "&:hover": {
            background: "linear-gradient(to right," + blueGrey[500] + "," + blueGrey[800] + ")",
          },
        }}
      >
        <ArrowBackIosNewIcon sx={{ fontSize: 45 }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          alignItems: "center",
          color: grey[100],
          right: "-45px",
          top: "50%",
          transform: "translate(0%, -50% )",
          height: "108px",
          width: "45px",
          cursor: "pointer",
          background: "linear-gradient(to left," + blueGrey[900] + "," + blueGrey[800] + ")",
          "&:hover": {
            background: "linear-gradient(to left," + blueGrey[500] + "," + blueGrey[800] + ")",
          },
        }}
      >
        <ArrowForwardIosIcon sx={{ fontSize: 45 }} />
      </Box>
    </Box>
  );
};

export default MainSlider;
