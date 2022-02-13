import React from "react";
import "./App.css";

import Box from "@mui/material/Box";

import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Download from "./components/Download";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Box>
        <Navbar />
        <Slider />
      </Box>
      <Box>
        <Download />
        <Contact />
      </Box>
    </>
  );
}

export default App;
