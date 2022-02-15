import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";

import Kebabit from "../../assets/order/kebabit.jpeg";
import Pizzat from "../../assets/order/pizzat.jpeg";
import Salaatit from "../../assets/order/salaatit.jpeg";
import Juomat from "../../assets/order/juomat.jpg";

const images = [
  {
    url: Kebabit,
    title: "Kebabit",
    width: "30%",
  },
  {
    url: Pizzat,
    title: "Pizzat",
    width: "30%",
  },
  {
    url: Salaatit,
    title: "Salaatit",
    width: "30%",
  },
  {
    url: Juomat,
    title: "Juomat",
    width: "30%",
  },
  {
    url: Kebabit,
    title: "Kupongit",
    width: "30%",
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 200,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create("opacity"),
}));

const ImageMarked = styled("span")(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

function Order() {
  const [showModal, setShowModal] = useState(false);
  const [activeMenu, setActiveMenu] = useState(-1);

  return (
    <>
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            minWidth: 300,
            width: "100%",
          }}
        >
          {images.map((image) => (
            <>
              <ImageButton
                focusRipple
                key={image.title}
                style={{
                  marginBottom: "15px",
                }}
                sx={{ width: "100%", height: "300px" }}
                onClick={() => setShowModal(!showModal)}
              >
                <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                <Image sx={{ borderRadius: "15px" }}>
                  <Typography
                    component="span"
                    variant="subtitle1"
                    color="inherit"
                    sx={{
                      position: "relative",
                      p: 4,
                      pt: 2,
                      pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      borderRadius: "10px",
                    }}
                  >
                    {image.title}
                    <ImageMarked className="MuiImageMarked-root" />
                  </Typography>
                </Image>
              </ImageButton>
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
                  asdasdasdasdas
                </Box>
              </Collapse>
            </>
          ))}
        </Box>
      </Box>
    </>
  );
}

export default Order;
