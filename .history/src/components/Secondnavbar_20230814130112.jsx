import React, { useRef } from "react";
import { Box, Typography, Button, TextField, IconButton } from "@mui/material";
import { blue, blueGrey, grey } from "@mui/material/colors";
import video from "../assets/videos/0.webm";
import SearchIcon from "@mui/icons-material/Search";

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
              px: 0,
              "&:hover": {
                background:
                  "linear-gradient(to right," + blueGrey[400] + "," + blueGrey[600] + "00" + ")",
              },
            }}
          >
            <Typography variant="subtitle3" fontWeight={600} color={grey[100]} mr={4}>
              {item}
            </Typography>
          </Button>
        ))}

        <Box
          sx={{
            position: "absolute",
            display: "flex",
            height: "26px",
            width: "199px",
            backgroundColor: blueGrey[500],
            right: 2,
          }}
        >
          <TextField
          placeholder="szukaj"
          sx={{ input: { color: "yellow" }, "label": {color: "blue"} }} 
            inputProps={{
              style: {
                height: "26px",
                width: "173px",
                padding: 0,
                pl: 10,
                fontSize: 12,
                color: grey[100],
                borderRadius: 4,
                border: "none",
                outline: "none",
              },
            }}
          />
          <IconButton
            sx={{
              width: "26px",
              height: "26px",
              zIndex: 2,
              backgroundColor: blueGrey[300],
              borderRadius: 0,
            }}
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Secondnavbar;
