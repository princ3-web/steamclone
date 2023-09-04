import { Box } from "@mui/material";
import React from "react";
import { blueGrey, } from "@mui/material/colors";
import Sidebar from "../components/Sidebar";
import CenterContent from "../components/CenterContent";
import Secondnavbar from "../components/Secondnavbar";
import MainSlider from "../components/MainSlider";
import MultiSlider from "../components/MultiSlider";
import ItemBrowser from "../components/ItemBrowser";

const Home = () => {
  return (
    <Box backgroundColor={grey[900]}>
      <Secondnavbar />
      <Box display={"flex"}>
        <Sidebar />
        <CenterContent>
          <MainSlider />
          <MultiSlider />
        </CenterContent>
      </Box>
      <CenterContent>
          <ItemBrowser />
        </CenterContent>
    </Box>
  );
};

export default Home;
