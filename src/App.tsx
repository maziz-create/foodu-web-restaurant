import React from "react";
import "./App.css";

import Box from "@mui/material/Box";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Download from "./components/Download";
import Contact from "./components/Contact";
import DeliveryZones from "./components/DeliveryZones";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Slider />
        <Download />
        <Contact />
        <DeliveryZones />
        <Footer />
      </Box>
    </>
  );
}

export default App;
