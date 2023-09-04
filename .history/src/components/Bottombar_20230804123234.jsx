import { Box, Button, Typography } from "@mui/material";
import { blueGrey, grey, indigo, cyan, blue } from "@mui/material/colors";
import React, { useState } from "react";

const Bottombar = () => {
  const links = ["sklep", "społeczność", "informacje", "pomoc techniczna"];

  const [selectedLink, setSelectedLink] = useState(0);

  console.log(selectedLink);

  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100vw"}
      height={"104}
      backgroundColor={blueGrey[900]}
    >

    </Box>
  );
};

export default Bottombar;
