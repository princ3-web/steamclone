import React from "react";
import { Box, Typography } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";

const MainSlider = () => {
  return (
    <Box sx={{ width: "940px" }}>
      <Typography color={grey[100]} textTransform={"uppercase"} mb={1}>
        Title
      </Typography>
      <Box display={"flex"} sx={{ height: "353px" }} backgroundColor={blueGrey[400]}>
        <Box sx={{ width: 616, height: "100%" }} backgroundColor={blueGrey[400]}>image</Box>
        <Box sx={{ width: 314, height: "100%" }}>image</Box>
      </Box>
    </Box>
  );
};

export default MainSlider;
