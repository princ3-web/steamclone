import { Box, Button, Typography } from "@mui/material";
import { blueGrey, grey, indigo, cyan, blue } from "@mui/material/colors";
import React, { useState } from "react";
import { CardMedia } from "@mui/material";
import logo from "../assets/icons/logo.svg";
import logo0 from "../assets/icons/logo0.png";

const Navbar = () => {
  const links = ["sklep", "społeczność", "moje konto", "informacje", "pomoc techniczna"];

  const [selectedLink, setSelectedLink] = useState(0);

  console.log(selectedLink);

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      width={"100vw"}
      height={"104px"}
      paddingLeft={"287px"}
      backgroundColor={blueGrey[900]}
    >
      <Box mr={3}>
        <CardMedia
          sx={{ objectFit: "contain", width: 176, height: "100%" }}
          component="img"
          alt="Image"
          image={logo}
          title="Steam"
        />
      </Box>
      {links.map((item, n) => (
        <Box
          key={n}
          onClick={() => setSelectedLink(n)}
          sx={{ textTransform: "uppercase", cursor: "pointer" }}
          m={1}
        >
          <Typography
            color={selectedLink === n ? blue[400] : grey[200]}
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
            sx={{
              textDecoration: selectedLink === n ? "underline" : "none",
              textUnderlineOffset: 5,
              userSelect: "none",
              textShadow: 1,
              ho
            }}
            fontWeight={500}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Navbar;
