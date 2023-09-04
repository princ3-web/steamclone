import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import image0 from "../assets/images/0.jpg";

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
            image={image0}
            alt="Sample Image"
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
        <Box sx={{ width: 324, height: "100%" }} backgroundColor={blueGrey[600]}>
          <Typography>TITLE</Typography>
          <Box sx={{ width: "344px", height: "162px", display:"flex" }}>
            <CardMedia
              component="img"
              image={image0}
              alt="Sample Image"
              sx={{ width: "50%", height: "50%", objectFit: "cover" }}
            />
            <CardMedia
              component="img"
              image={image0}
              alt="Sample Image"
              sx={{ width: "50%", height: "50%", objectFit: "cover" }}
            />
            <CardMedia
              component="img"
              image={image0}
              alt="Sample Image"
              sx={{ width: "50%", height: "50%", objectFit: "cover" }}
            />
            <CardMedia
              component="img"
              image={image0}
              alt="Sample Image"
              sx={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainSlider;
