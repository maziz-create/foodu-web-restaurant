import React from "react";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: {
          xs: "center",
          lg: "flex-start",
        },
        alignItems: "center",
        px: { xs: 2, md: 15 },
        pt: { xs: 6, lg: 15 },
        pb: 5,
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
            mb: 8,
            width: "96%",
            mx: 1,
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
            <Paper sx={{ backgroundColor: "transparent" }} elevation={3}>
              (( STATIC )) Lyhtytie 19 A 11, 00750 Helsinki
            </Paper>
          </Typography>
        </Typography>
        <Typography
          sx={{
            color: "#575756",
            fontWeight: "400",
            fontSize: "2rem",
            mb: 8,
            width: "96%",
            mx: 1,
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
            <Paper sx={{ backgroundColor: "transparent" }} elevation={3}>
              (( STATIC )) <br /> Sun 00:00 - 23:59 <br />
              Mon 00:00 - 23:59 <br /> Tues 00:00 - 23:59 <br /> Wed 00:00 -
              23:59 <br /> Thurs 00:00 - 23:59 <br /> Fri 00:00 - 23:59 <br />{" "}
              Satur 00:00 - 23:59
            </Paper>
          </Typography>
        </Typography>

        <Typography
          sx={{
            color: "#575756",
            fontWeight: "400",
            fontSize: "2rem",
            mb: 8,
            width: "96%",
            mx: 1,
          }}
          variant="h3"
          component="div"
        >
          Social Medias
          <Typography
            variant="overline"
            display="block"
            sx={{ mt: 2, fontSize: "1rem" }}
          >
            <Paper
              sx={{
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "column",
                paddingX: 3,
              }}
              elevation={3}
            >
              {/* (( STATIC )) Lyhtytie 19 A 11, 00750 Helsinki */}
              <Button
                sx={{ my: 1 }}
                variant="contained"
                color="success"
                startIcon={<WhatsAppIcon />}
              >
                Send Message
              </Button>
              <Button
                sx={{ my: 1 }}
                variant="contained"
                color="primary"
                startIcon={<FacebookIcon />}
              >
                Facebook
              </Button>
              <Button
                sx={{ my: 1 }}
                variant="contained"
                color="error"
                startIcon={<InstagramIcon />}
              >
                Instagram
              </Button>
            </Paper>
          </Typography>
        </Typography>
        <Typography
          className="blabla"
          sx={{
            color: "#575756",
            fontWeight: "400",
            fontSize: "2rem",
            mb: 8,
            width: "96%",
            mx: 1,
          }}
          variant="h3"
          component="div"
        >
          Contact
          <Typography
            variant="overline"
            display="block"
            sx={{ mt: 2, fontSize: "1rem" }}
          >
            <Paper sx={{ backgroundColor: "transparent" }} elevation={3}>
              (( STATIC )) Lyhtytie 19 A 11, 00750 Helsinki
            </Paper>
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}

export default Contact;
