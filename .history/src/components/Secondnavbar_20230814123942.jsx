import React, { useRef } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
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
    <Box sx={{ display: "block", position: "relative", height: "450px" }}>
      <video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </video>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          left: "1079px",
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
          position: "absolute",
          top: "30px",
          mx: "287px",
          height: "35px",
          width: "940px",
          alignItems: "center",
          pl: 4,
          backgroundColor: blueGrey[600] + "BF",
        }}
      >
        {links.map((item) => (
          <Button
            sx={{
              textTransform: "none",
              borderRadius: 0,
              "&:hover": {
                background:
                  "linear-gradient(to right," + blueGrey[400] + "," + blueGrey[600] + "00" + ")",
              },
            }}
          >
            <Typography variant="subtitle3" fontWeight={600} color={grey[100]} mr={2}>
              {item}
            </Typography>
          </Button>
        ))}
        <TextField
          inputProps={{
            style: {
              height: "35px",
              padding: 0,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Secondnavbar;
