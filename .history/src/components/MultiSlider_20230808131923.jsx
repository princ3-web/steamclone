import React, { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { blueGrey, green, grey, lightGreen } from "@mui/material/colors";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { sliderItems, multiSliderItems } from "../data/data";
import background from "../assets/images/background0.jpg";
import DiscountIcon from "@mui/icons-material/Discount";

const MultiSlider = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);

  return (
    <Box sx={{ position: "relative", width: "940px", mt: 3 }}>
      <Typography color={grey[100]} textTransform={"uppercase"} mb={1}>
        WYRÓŻNIONE I POLECANE
      </Typography>
      <Box
  sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
    flexWrap: "wrap",
    height: "390px",
    backgroundC
  }}
>
  {multiSliderItems.map((item) => (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: 306,
        height: "188px",
        zIndex: 1,
        boxShadow: "0 0 10px 0px #000",
        backgroundColor: blueGrey[900],
      }}
    >
      <CardMedia
        component="img"
        image={item.image}
        alt="Sample Image"
        sx={{ width: "100%", objectFit: "cover" }}
      />
      <CardMedia
        component="img"
        image={background}
        alt="Sample Image"
        sx={{
          position: "absolute",
          width: "100%",
          height: "45px",
          objectFit: "cover",
          bottom: 0,
          zIndex: 1,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          bottom: 5,
          right: 5,
          zIndex: 2,
          backgroundColor: blueGrey[900],
          height: "36px",
          minWidth: "63px",
          pr: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: green[800],
            height: "36px",
            width: "36px",
            mr: 1,
          }}
        >
          <DiscountIcon sx={{ color: lightGreen[400] }} />
        </Box>
        <Typography variant="subtitle2" color={lightGreen["A400"]}>
          {item.price}
        </Typography>
      </Box>
    </Box>
  ))}
</Box>

      <Box
        onClick={() =>
          setSelectedSlide((state) => (state > 0 ? state - 1 : sliderItems.length - 1))
        }
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
        onClick={() =>
          setSelectedSlide((state) => (state < sliderItems.length - 1 ? state + 1 : 0))
        }
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
