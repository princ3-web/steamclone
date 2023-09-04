import { Box } from "@mui/material";
import React from "react";
import { blueGrey } from "@mui/material/colors";
import Sidebar from "../components/Sidebar";
import CenterContent from "../components/CenterContent";
import Secondnavbar from "../components/Secondnavbar";
import MainSlider from "../components/MainSlider";

const Home = () => {
  return (
    <Box height={"aut"} backgroundColor={blueGrey[800]}>
      <Secondnavbar />
      <Box display={"flex"}>
        <Sidebar />
        <CenterContent>
          <MainSlider />
        </CenterContent>
      </Box>
    </Box>
  );
};

export default Home;
