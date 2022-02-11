import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Logo from "../../assets/foodu_logo.svg";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        borderBottomLeftRadius: "15px",
        borderBottomRightRadius: "15px",
        backgroundColor: "#C1E7D6",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar sx={{ alignItems: "start" }} disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "start",
            }}
          >
            <Accordion
              sx={{
                backgroundColor: "transparent",
                boxShadow: "none",
                "&:before": { m: 0 },
              }}
            >
              <AccordionSummary>
                <MenuIcon fontSize="large" />
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{
              maxHeight: {
                xs: "32px",
                sm: "48px",
                md: "64px",
              },
              p: {
                xs: 2,
                sm: 3,
                md: 4,
              },
            }}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
