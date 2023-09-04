import { Box } from "@mui/material";
import React from "react";
import { blueGrey } from "@mui/material/colors";
import Sidebar from "../components/Sidebar";
import CenterContent from "../components/CenterContent";
import Secondnavbar from "../components/Secondnavbar";

const Home = () => {
  return (
    <Box minHeight={"100vh"} backgroundColor={blueGrey[700]}>
      <Secondnavbar />
      <Box display={"flex"}>
        <Sidebar />
        <CenterContent> <MainS</CenterContent>
      </Box>
    </Box>
  );
};

export default Home;