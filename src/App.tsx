import React from "react";
import "./App.css";

import Box from "@mui/material/Box";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Order from "./pages/Order";

// import Home from "./pages/Home";

function App() {
  return (
    <>
      <Box>
        <Navbar />
        {/* <Home /> */}
        <Order />
        <Footer />
      </Box>
    </>
  );
}

export default App;
