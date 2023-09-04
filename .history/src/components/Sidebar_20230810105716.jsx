import React from "react";
import { Box, Typography } from "@mui/material";
import { blueGrey, blue } from "@mui/material/colors";
import { sidebarItems } from "../data/data";

const Sidebar = () => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "287px",
        alignItems: "space-between",
        border: "1px solid red",
        width: ""
      }}
    >
      {sidebarItems.map((item) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mb: 2,
            mt: 3,
            boxSizing: "border-box",
            paddingLeft: "50px",
          }}
        >
          <Typography
            sx={{ textTransform: "uppercase", mb: 1 }}
            variant="subtitle2"
            color={blueGrey[400]}
          >
            {item.name}
          </Typography>
          {item.elements.map((i) => (
            <Typography
              variant="subtitle4"
              fontWeight={"Bold"}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: blue[200],
                },
              }}
              color={blueGrey[300]}
            >
              {i}
            </Typography>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
