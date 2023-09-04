import React from "react";
import { Box, Typography } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";

const MainSlider = () => {
  return (
    <Box sx={{width: "940px"}} >
      <Typography color={grey[100]}>Title</Typography>
      <Box display={"flex"} sx={{ height: "353px"}} backgroundColor={blueGrey[400]}>
        <Box>image</Box>
        <Box>image</Box>
      </Box>
    </Box>
  );
};

export default MainSlider;
