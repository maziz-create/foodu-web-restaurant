import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React from "react";

function OpeningHours() {
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
        pt: 15,
        pb: 10,
        backgroundColor: "#C1E7D6",
        zIndex: "-1",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#575756",
            fontWeight: "400",
            fontSize: "2rem",
            mb: 1,
            width: { xs: "100%", md: "50%", lg: "100%" },
          }}
          variant="h3"
          component="div"
        >
          Location
          <Typography
            variant="overline"
            display="block"
            sx={{ mt: 2, fontSize: "1rem" }}
          >
            (( STATIC )) Lyhtytie 19 A 11, 00750 Helsinki
          </Typography>
        </Typography>
        <Typography
          sx={{
            color: "#575756",
            fontWeight: "400",
            fontSize: "2rem",
            mb: 1,
            width: { xs: "100%", md: "50%", lg: "100%" },
          }}
          variant="h3"
          component="div"
        >
          Hours
          <Typography
            variant="overline"
            display="block"
            sx={{ mt: 2, fontSize: "1rem" }}
          >
            (( STATIC )) Lyhtytie 19 A 11, 00750 Helsinki
          </Typography>
        </Typography>

        <Typography
          sx={{
            color: "#575756",
            fontWeight: "400",
            fontSize: "2rem",
            mb: 1,
            width: { xs: "100%", md: "50%", lg: "100%" },
          }}
          variant="h3"
          component="div"
        >
          Find Us On...
          <Typography
            variant="overline"
            display="block"
            sx={{ mt: 2, fontSize: "1rem" }}
          >
            (( STATIC )) Lyhtytie 19 A 11, 00750 Helsinki
          </Typography>
        </Typography>
        <Typography
          sx={{
            color: "#575756",
            fontWeight: "400",
            fontSize: "2rem",
            mb: 1,
            width: { xs: "100%", md: "50%", lg: "100%" },
          }}
          variant="h3"
          component="div"
        >
          Contact Us
          <Typography
            variant="overline"
            display="block"
            sx={{ mt: 2, fontSize: "1rem" }}
          >
            (( STATIC )) Lyhtytie 19 A 11, 00750 Helsinki
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default OpeningHours;
