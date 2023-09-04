import { Box } from "@mui/material";
import React from "react";
import { blueGrey } from "@mui/material/colors";
import Sidebar from "../components/Sidebar";
import CenterContent from "../components/CenterContent";
import Secondnavbar from "../components/Secondnavbar";
import MainSlider from "../components/MainSlider";
import MultiSlider from "../components/MultiSlider";
import ItemBrowser from "../components/ItemBrowser";

const Home = () => {
  return (
    <Box backgroundColor={blueGrey[800]}>
      <Secondnavbar />
      <Box>
        <Sidebar />
        <CenterContent>
          <MainSlider />
          <MultiSlider />
        </CenterContent>
        <CenterContent>
          <ItemBrowser />
        </CenterContent>
      </Box>
    </Box>
  );
};

export default Home;
