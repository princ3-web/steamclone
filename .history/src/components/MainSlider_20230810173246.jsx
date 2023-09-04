import React, { useState } from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { sliderItems } from "../data/data";

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
        <Box sx={{ width: 616, height: "100%", zIndex: 2, boxShadow: "0 0 10px 0px #000" }}>
          <CardMedia
            component="img"
            image={sliderItems[selectedSlide].image}
            alt="Sample Image"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: 1,
              transition: "opacity 0.5s ease-in-out",
              ...(previousSlide === selectedSlide ? { opacity: 0.5 } : null),
            }}
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
            sx={{
              width: "15px",
              height: "10px",
              margin: "0.25rem",
              cursor: "pointer",
              transition: "opacity 0.25s",
              backgroundColor: selectedSlide === n ? blueGrey[200] : blueGrey[600],
              opacity: selectedSlide === n ? 1 : 0.5,
              "&:hover": {
                backgroundColor: blueGrey[400],
                opacity: 1,
              },
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
};

export default MainSlider;
