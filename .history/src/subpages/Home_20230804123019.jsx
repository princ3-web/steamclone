import { Box } from "@mui/material";
import React from "react";
import { blueGrey, } from "@mui/material/colors";
import Sidebar from "../components/Sidebar";
import CenterContent from "../components/CenterContent";



const Home = () => {
  return <Box minHeight={"100vh"} backgroundColor={blueGrey[700]}>
    <
    <Sidebar/>
    <CenterContent/>
  </Box>;
};

export default Home;
