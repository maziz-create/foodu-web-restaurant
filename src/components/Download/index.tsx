import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import GooglePlayImage from "../../assets/google-play.png";
import AppStoreImage from "../../assets/app-store.png";
import PhoneImage from "../../assets/mobile_phone_3d.png";

function Download() {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: {
          xs: "center",
          lg: "flex-start",
        },
        alignItems: "center",
        px: { xs: 2, md: 15 },
        py: 7,
        backgroundColor: "#03D173",
      }}
    >
      <Box sx={{ textAlign: { xs: "center", lg: "start" } }}>
        <Typography
          sx={{
            color: "white",
            fontWeight: "500",
            fontSize: { xs: "3rem", sm: "4rem" },
            mb: 1,
          }}
          variant="h3"
          component="div"
        >
          App Downloaded
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "white",
            textTransform: "uppercase",
            fontWeight: "200",
            fontSize: "1rem",
            mr: 0,
          }}
        >
          Let's go, download our free app and fall in love right away on the
          first bite.
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Box
            sx={{ height: "100%", width: "170px" }}
            component="img"
            src={GooglePlayImage}
          />
          <Box
            sx={{ height: "100%", width: "170px" }}
            component="img"
            src={AppStoreImage}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: "none", lg: "block" },
          position: "absolute",
          top: "8rem",
          right: "0",
        }}
      >
        <Box
          component="img"
          sx={{ width: "100%" }}
          src={PhoneImage}
          alt="Phone"
        />
      </Box>
    </Box>
  );
}

export default Download;
