import React, { useRef } from "react";
import { Box, Typography, Button, CardMedia, Zoom } from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";
import video from "../assets/videos/0.webm";
import zIndex from "@mui/material/styles/zIndex";

const Secondnavbar = () => {
  const links = [
    "Twój sklep",
    "Nowe i warte uwagi",
    "Kategorie",
    "Sklep punktów",
    "Aktualności",
    "Laboratoria",
  ];

  return (
    <Box
      sx={{ display: "block", position: "relative", height: "450px" }}
    >
      <CardMedia
        component="video"
        height="auto"
        autoPlay
        loop
        src={video}
        sx={{ position: "absolute", height: "450px", objectFit: "cover" }}
      />
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          right: "287px",
          top: "8px",
          height: "20px",
          width: "148px",
          backgroundColor: blueGrey[400],
        }}
      >
        <Typography variant="subtitle4">Lista życzeń (0)</Typography>
      </Button>
      <Box
        sx={{
          display: "flex",
          position:"absolute",
          top: "30px",
          mx: "287px",
          height: "35px",
          width: "940px",
          alignItems: "center",
          pl: 4,
          backgroundColor: blueGrey[600] + "99",
        }}
      >
        {links.map((item) => (
          <Button sx={{ textTransform: "none", border }}>
            <Typography variant="subtitle3" fontWeight={600} color={grey[100]} mr={2}>
              {item}
            </Typography>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Secondnavbar;
