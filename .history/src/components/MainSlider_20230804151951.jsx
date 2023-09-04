import React from "react";
import { Box, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const MainSlider = () => {
  return (
    <Box sx={{width: "940px"}} backgroundColor={blueGrey[400]}>
      <Typography>Title</Typography>
      <Box display={"flex"} sx={}>
        <Box>image</Box>
        <Box>image</Box>
      </Box>
    </Box>
  );
};

export default MainSlider;
