import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";

const MainSlider = () => {
  return (
    <Box sx={{ width: "940px", mt: 3 }}>
      <Typography color={grey[100]} textTransform={"uppercase"} mb={1}>
        Title
      </Typography>
      <Box display={"flex"} sx={{ height: "353px" }} backgroundColor={blueGrey[400]}>
        <Box sx={{ width: 616, height: "100%" }} backgroundColor={blueGrey[500]}>
        <CardMedia
        component="img"
        image="url_to_your_image.jpg"
        alt="Sample Image"
      />
        </Box>
        <Box sx={{ width: 324, height: "100%" }} backgroundColor={blueGrey[600]}>image</Box>
      </Box>
    </Box>
  );
};

export default MainSlider;
