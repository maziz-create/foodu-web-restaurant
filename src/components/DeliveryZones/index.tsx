import React from "react";
import "./styles.css";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import Map from "./Map";
import AddressAreas from "./AddressAreas";

function DeliveryZones() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", lg: "row" },
        justifyContent: {
          xs: "space-evenly",
          lg: "space-between",
          xl: "space-evenly",
        },
        alignItems: "center",
        px: { xs: 2, md: 5 },
        pb: 15,
        backgroundColor: "#C1E7D6",
      }}
    >
      <Map />
      <Divider orientation="vertical" flexItem />
      <AddressAreas />
    </Box>
  );
}

export default DeliveryZones;
