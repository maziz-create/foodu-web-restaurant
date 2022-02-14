import React, { useState, useRef } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
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
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between" }}
          disableGutters
        >
          <IconButton
            onClick={() => setShowModal(!showModal)}
            sx={{ display: { xs: "block", sm: "none" } }}
            color="secondary"
          >
            <MenuIcon fontSize="large" />
          </IconButton>
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
        <Box
          sx={{
            height: "100%",
            width: "100%",
            backgroundColor: "red",
          }}
        >
          <Collapse in={showModal}>
            <>
              <p>asdasdsa</p>
              <p>asdasdsa</p>
              <p>asdasdsa</p>
              <p>asdasdsa</p>
            </>
          </Collapse>
        </Box>
      </Container>
    </AppBar>
  );
}

export default Navbar;
