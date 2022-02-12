import React from "react";
import "./App.css";

import Box from "@mui/material/Box";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Download from "./components/Download";
// import OpeningHours from "./components/OpeningHours";

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Slider />
      </Box>
      <Box>
        <Download />
        {/* <OpeningHours /> */}
      </Box>
    </>
  );
}

export default App;
