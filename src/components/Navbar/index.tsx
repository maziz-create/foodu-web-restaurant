import React, { useState } from "react";

import NavbarContent from "./NavbarContent";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Logo from "../../assets/foodu_logo.svg";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";

function Navbar() {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#FBFAF5",
        py: 3,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", lg: "space-between" },
          }}
          disableGutters
        >
          <IconButton
            onClick={() => setShowModal(!showModal)}
            sx={{ display: { xs: "block", lg: "none", paddingBottom: "0px" } }}
            color="success"
          >
            <MenuIcon fontSize="large" sx={{ paddingBottom: 0 }} />
          </IconButton>
          <Box
            component="img"
            src={Logo}
            alt="Logo"
            sx={{
              maxHeight: {
                xs: "32px",
                sm: "48px",
              },
            }}
          />
          {window.innerWidth > 1200 && <NavbarContent />}
        </Toolbar>
        <Box
          sx={{
            height: "100%",
            width: "100%",
          }}
        >
          <Collapse in={showModal}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                alignItems: "center",
                "& > *": {
                  width: {
                    xs: "85%",
                    sm: "65%",
                    md: "45%",
                  },
                },
              }}
            >
              <NavbarContent />
            </Box>
          </Collapse>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Navbar;
