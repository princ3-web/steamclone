import React from "react";
import { Box, Typography } from "@mui/material";

const MainSlider = () => {
  return (
    <Box sx={{width: "940px"}} b>
      <Typography>Title</Typography>
      <Box display={"flex"}>
        <Box>image</Box>
        <Box>image</Box>
      </Box>
    </Box>
  );
};

export default MainSlider;
