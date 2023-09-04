import React from "react";
import { Box, CardMedia, Typography } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import image0 from "../assets/images/0.jpg";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";

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
        <Box sx={{ display:"flex", flexDirection:"column", justifyContent:"" width: 324, height: "100%" }} backgroundColor={blueGrey[600]}>
          <Typography>TITLE</Typography>
          <Box sx={{ width: "300px", height: "162px", display:"flex", flexWrap:"wrap" }}>
            <CardMedia
              component="img"
              image={image0}
              alt="Sample Image"
              sx={{ width: "50%", height: "50%", objectFit: "cover" }}
            />
            <CardMedia
              component="img"
              image={image1}
              alt="Sample Image"
              sx={{ width: "50%", height: "50%", objectFit: "cover" }}
            />
            <CardMedia
              component="img"
              image={image2}
              alt="Sample Image"
              sx={{ width: "50%", height: "50%", objectFit: "cover" }}
            />
            <CardMedia
              component="img"
              image={image3}
              alt="Sample Image"
              sx={{ width: "50%", height: "50%", objectFit: "cover" }}
            />
          </Box>
          <Typography>TITLE</Typography>
          <Typography>TAGS</Typography>
          <Typography>PRICE</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MainSlider;
