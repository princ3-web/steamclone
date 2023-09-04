import React, { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { sliderItems } from "../data/data";
import "./MainSlider.css"; // Import your custom CSS file for styles

const MainSlider = () => {
  const [selectedSlide, setSelectedSlide] = useState(0);
  const [previousSlide, setPreviousSlide] = useState(null);

  const handleSlideChange = (newSlide) => {
    setPreviousSlide(selectedSlide);
    setSelectedSlide(newSlide);
  };

  return (
    <Box sx={{ position: "relative", width: "940px", mt: 3 }}>
      <Typography color={grey[100]} textTransform={"uppercase"} mb={1}>
        WYRÓŻNIONE I POLECANE
      </Typography>
      <Box display={"flex"} sx={{ height: "353px" }}>
        <Box sx={{ width: 616, height: "100%", zIndex: 2 }} boxShadow={"0 0 10px 0px #000"}>
          <CardMedia
            component="img"
            image={sliderItems[selectedSlide].image}
            alt="Sample Image"
            sx={{ width: "100%", height: "100%", objectFit: "cover", opacity: 1 }}
          />
        </Box>
        <Box /* ...other styles... */>
          {/* ...other content JSX... */}
        </Box>
      </Box>
      <Box /* ...styles for previous slide arrow... */>
        <ArrowBackIosNewIcon sx={{ fontSize: 45 }} />
      </Box>
      <Box /* ...styles for next slide arrow... */>
        <ArrowForwardIosIcon sx={{ fontSize: 45 }} />
      </Box>
      <Box /* ...styles for slide dots container... */>
        {sliderItems.map((item, n) => (
          <Box
            key={n}
            onClick={() => handleSlideChange(n)}
            className={`slider-dot ${selectedSlide === n ? "active" : ""} ${previousSlide === n ? "previous" : ""}`}
          ></Box>
        ))}
      </Box>
    </Box>
  );
};

export default MainSlider;
