import React from "react";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

function NavbarContent() {
  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <>
      <Button variant="text" sx={{ color: "#575756", fontSize: "15px" }}>
        Dashboards
      </Button>
      <Button
        color="success"
        variant="contained"
        startIcon={<RestaurantIcon />}
        sx={{ borderRadius: "30px", p: 2 }}
      >
        See menu and order!
      </Button>
      <Button variant="text" sx={{ color: "#575756" }}>
        Contact
      </Button>
      <IconButton
        sx={{
          backgroundColor: "transparent",
          borderRadius: "0",
          color: "green",
          cursor: "default",
        }}
      >
        <LocalPhoneIcon sx={{ fontSize: "45px", color: "#575756" }} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "15px",
              fontWeight: "500",
              color: "#575756",
              textAlign: "start",
              letterSpacing: "1px",
            }}
          >
            Call and Order!
          </Typography>
          <Typography
            variant="body1"
            sx={{ fontSize: "20px", fontWeight: "600" }}
          >
            0401477757
          </Typography>
        </Box>
      </IconButton>
      <Typography
        variant="caption"
        sx={{
          maxWidth: { xs: "50%", lg: "10%" },
          color: "#575756",
          fontWeight: "500",
        }}
      >
        Please sign in for see{" "}
        <Box
          component="span"
          sx={{ color: "green", fontSize: "15px", fontWeight: "600" }}
        >
          bonuses
        </Box>{" "}
        and{" "}
        <Box
          component="span"
          sx={{ color: "green", fontSize: "15px", fontWeight: "600" }}
        >
          stamp card
        </Box>
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="error">
            <ShoppingCartIcon fontSize="large" />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <PersonAddAltRoundedIcon fontSize="large" />
        </IconButton>
        <IconButton sx={{ pl: "0" }}>
          <PersonRoundedIcon fontSize="large" />
        </IconButton>
      </Box>
    </>
  );
}

export default NavbarContent;
