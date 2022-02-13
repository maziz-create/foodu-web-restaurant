import React from "react";
import "./App.css";

import Box from "@mui/material/Box";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Download from "./components/Download";
import Contact from "./components/Contact";
import DeliveryZones from "./components/DeliveryZones";

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Slider />
      </Box>
      <Download />
      <Contact />
      <DeliveryZones />
    </>
  );
}

export default App;
