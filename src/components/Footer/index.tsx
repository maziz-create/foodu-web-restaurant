import React from "react";

import FooterImage1 from "../../assets/footer/aktia.svg";
import FooterImage2 from "../../assets/footer/danskebank.svg";
import FooterImage3 from "../../assets/footer/handelsbanken.svg";
import FooterImage4 from "../../assets/footer/jousto.svg";
import FooterImage5 from "../../assets/footer/mastercard.svg";
import FooterImage6 from "../../assets/footer/mobile-pay.svg";
import FooterImage7 from "../../assets/footer/nordea.svg";
import FooterImage8 from "../../assets/footer/omasp.svg";
import FooterImage9 from "../../assets/footer/op.svg";
import FooterImage10 from "../../assets/footer/pivo.svg";
import FooterImage11 from "../../assets/footer/poppankki.svg";
import FooterImage12 from "../../assets/footer/siirto.svg";
import FooterImage13 from "../../assets/footer/spankki.svg";
import FooterImage14 from "../../assets/footer/visa.svg";

import Luova from "../../assets/footer/luova_logo.svg";
import Foodu from "../../assets/footer/foodu_logo.svg";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const images = [
  { img: FooterImage1 },
  { img: FooterImage2 },
  { img: FooterImage3 },
  { img: FooterImage4 },
  { img: FooterImage5 },
  { img: FooterImage6 },
  { img: FooterImage7 },
  { img: FooterImage8 },
  { img: FooterImage9 },
  { img: FooterImage10 },
  { img: FooterImage11 },
  { img: FooterImage12 },
  { img: FooterImage13 },
  { img: FooterImage14 },
];

function Footer() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, md: 5 },
          py: 5,
          backgroundColor: "#F1F1F3",
        }}
      >
        {images.map((img, i) => {
          return (
            <Box
              key={"img" + i}
              sx={{ width: { xs: "44%", sm: "31%", md: "16%" } }}
            >
              <Box
                component="img"
                src={img.img}
                sx={{ width: "130px", height: "100px", px: 2 }}
              />
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F1F1F3",
          pb: "4rem",
        }}
      >
        <Typography
          variant="caption"
          display="block"
          sx={{ color: "#929497", mr: 1 }}
        >
          powered by
        </Typography>
        <Box
          component="img"
          src={Luova}
          sx={{ width: "130px", height: "100px", mr: 1 }}
        />
        <Typography
          variant="caption"
          display="block"
          sx={{ color: "#929497", mr: 1 }}
        >
          and
        </Typography>
        <Box
          component="img"
          src={Foodu}
          sx={{ width: "130px", height: "100px" }}
        />
      </Box>
    </>
  );
}

export default Footer;
