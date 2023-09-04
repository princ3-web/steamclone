import React, { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { sliderItems } from "../data/data";


const MultiSlider = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  return (
    <Box sx={{ position: "relative", width: "940px", mt: 3 }}>
      <Typography color={grey[100]} textTransform={"uppercase"} mb={1}>
        WYRÓŻNIONE I POLECANE
      </Typography>
      <Box display={"flex"} sx={{ height: "353px" }}>
        
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 306,
            height: "100%",
            zIndex: 1,
          }}
          boxShadow={"0 0 10px 0px #000"}
          backgroundColor={blueGrey[900]}
        >
         
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 306,
            height: "100%",
            zIndex: 1,
          }}
          boxShadow={"0 0 10px 0px #000"}
          backgroundColor={blueGrey[900]}
        >
         
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 246,
            height: "100%",
            zIndex: 1,
          }}
          boxShadow={"0 0 10px 0px #000"}
          backgroundColor={blueGrey[900]}
        >
         
        </Box>
      </Box>
      <Box
        onClick={() => setSelectedSlide((state) => (state > 0 ? state - 1 : sliderItems.length - 1))}
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
        onClick={() => setSelectedSlide((state) => (state < sliderItems.length - 1 ? state + 1 : 0))}
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
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          justifyContent: "space-between",
          bottom: "-25px",
          left: "50%",
          transform: "translate(-50%, 0%)",
        }}
      >
        {sliderItems.map((item, n) => (
          <Box
            onClick={() => setSelectedSlide(n)}
            sx={{
              backgroundColor: selectedSlide === n ? blueGrey[200] : blueGrey[600],
              width: "15px",
              height: "10px",
              mx: 0.25,
              cursor: "pointer",
              transition: "0.25s",
              "&:hover": {
                backgroundColor: blueGrey[400],
              },
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
};

export default MultiSlider;
