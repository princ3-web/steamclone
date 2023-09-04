import { useState } from "react";
import "./App.css";
import { Box, Typography } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./subpages/Home";
import Games from "./subpages/Games";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import GlobalStyles from "./components/GlobalStyles";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Motiva Sans, Twemoji, Noto Sans, Helvetica, sans-serif",
      subtitle3: {
        fontFamily: "Motiva Sans, Twemoji, Noto Sans, Helvetica, sans-serif",
        fontSize: "0.8rem",
      },
      subtitle4: {
        fontFamily: "Motiva Sans, Twemoji, Noto Sans, Helvetica, sans-serif",
        fontSize: "0.7rem",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <GlobalStyles />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
        </Routes>
        <Bottombar />
      </Box>
    </ThemeProvider>
  );
};

export default App;
