import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import image0 from "../assets/images/0.jpg";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MainSlider = () => {
  return (
    <Box sx={{ position: "relative", width: "940px", mt: 3 }}>
      <Typography color={grey[100]} textTransform={"uppercase"} mb={1}>
        Title
      </Typography>
      <Box display={"flex"} sx={{ height: "353px" }} backgroundColor={blueGrey[400]}>
        <Box
          sx={{ width: 616, height: "100%", zIndex: 1 }}
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
          }}
          backgroundColor={blueGrey[900]}
        >
          <Typography color={grey[100]} mx={2} mt={2}>
            Dota 2
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
            <CardMedia
              component="img"
              image={image0}
              alt="Sample Image"
              sx={{ width: "48%", height: "42%", objectFit: "cover" }}
            />
            <CardMedia
              component="img"
              image={image1}
              alt="Sample Image"
              sx={{ width: "48%", height: "42%", objectFit: "cover" }}
            />
            <CardMedia
              component="img"
              image={image2}
              alt="Sample Image"
              sx={{ width: "48%", height: "42%", objectFit: "cover" }}
            />
            <CardMedia
              component="img"
              image={image3}
              alt="Sample Image"
              sx={{ width: "48%", height: "42%", objectFit: "cover" }}
            />
          </Box>
          <Typography color={grey[100]} mx={2}>
            Polecane, ponieważ grasz w gry z tagami
          </Typography>
          <Typography color={grey[100]} mx={2}>
            MOBA Zespołowe Rywalizacja Free to Play
          </Typography>
          <Typography color={grey[100]} mx={2} mb={1}>
            Free to play
          </Typography>
        </Box>
      </Box>
      <Box>
        <ArrowBackIosIcon
          sx={{
            position: "absolute",
            color: grey[100],
            left: -60,
            fontSize: 50,
            top: "50%",
            border: "1px solid red",
          }}
        />
      </Box>

      <ArrowForwardIosIcon
        sx={{
          position: "absolute",
          color: grey[100],
          right: -60,
          fontSize: 50,
          top: "50%",
          border: "1px solid red",
        }}
      />
    </Box>
  );
};

export default MainSlider;
