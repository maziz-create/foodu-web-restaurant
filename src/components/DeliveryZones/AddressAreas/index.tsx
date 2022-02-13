import React from "react";

import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import "leaflet/dist/leaflet.css";

function AddressAreas() {
  const [activeArea, setActiveArea] = React.useState<number>(-1);
  return (
    <Box
      sx={{
        display: "flex",
        "& > :not(style)": {
          width: { xs: "100%", lg: "500px" },
          height: { xs: "100%", lg: "500px" },
          backgroundColor: "rgb(0 0 0 / 15%)",
          p: 1,
          textAlign: "center",
        },
      }}
    >
      <Paper variant="outlined">
        <Typography gutterBottom variant="h3">
          Food Delivery Zones
        </Typography>
        <Typography gutterBottom variant="body2" sx={{ fontSize: "17px" }}>
          Are you looking for food delivery near you? Not everyone has the skill
          or time to prepare tasty food. <br /> When you want royal treatment,
          Foodu.fi is the perfect option. <br /> Just select “Delivery” at
          checkout and the food will be delivered to your door.
        </Typography>
        <Typography gutterBottom variant="h4" sx={{ mt: 5 }}>
          Delivery Fees
        </Typography>
        <Box sx={{ display: "flex" }}>
          <>
            <Box
              sx={{
                mb: 1,
                width: "46%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "purple",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  mr: 1,
                }}
              />
              <Button
                onClick={() => {
                  activeArea === 1 ? setActiveArea(-1) : setActiveArea(1);
                }}
                variant={activeArea === 1 ? "contained" : "text"}
                color={activeArea === 1 ? "error" : "inherit"}
                sx={{
                  color: "purple",
                  py: "6px",
                  px: "8px",
                  border: ".3px solid black",
                }}
              >
                Area1 - 8 €
              </Button>
            </Box>
            <Divider orientation="vertical" flexItem />
          </>
          <>
            <Box
              sx={{
                mb: 1,
                width: "46%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  backgroundColor: "blue",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  mr: 1,
                }}
              />
              <Button
                onClick={() => {
                  activeArea === 2 ? setActiveArea(-1) : setActiveArea(2);
                }}
                variant={activeArea === 2 ? "contained" : "text"}
                color={activeArea === 2 ? "error" : "inherit"}
                sx={{
                  color: "blue",
                  py: "6px",
                  px: "8px",
                  border: ".3px solid black",
                }}
              >
                Area2 - 8 €
              </Button>
            </Box>
          </>
        </Box>
      </Paper>
    </Box>
  );
}

export default AddressAreas;
