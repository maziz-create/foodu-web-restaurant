import React from "react";
import Carousel from "react-material-ui-carousel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RestaurantIcon from "@mui/icons-material/Restaurant";

import ImageSlider1 from "../../assets/slider_image_1.png";
import ImageSlider2 from "../../assets/slider_image_2.png";
import ImageSlider3 from "../../assets/slider_image_3.png";
import ImageSlider4 from "../../assets/slider_image_4.png";

function Slider() {
  const title = {
    titleh2: "Delicious!",
    titleh3: "Pizza & Kebab",
    button: "See menu and order",
    text: "Now we are coming here!",
  };
  const contents = [
    {
      image: ImageSlider1,
      title: title,
    },
    {
      image: ImageSlider2,
      title: title,
    },
    {
      image: ImageSlider3,
      title: title,
    },
    {
      image: ImageSlider4,
      title: title,
    },
  ];

  return (
    <Carousel
      animation="slide"
      duration={650}
      // autoPlay
      indicators={false}
      fullHeightHover={false}
      navButtonsAlwaysVisible
      sx={{
        minHeight: "595px",
        "& .MuiIconButton-root": {
          backgroundColor: { xs: "transparent", sm: "#111213" },
        },
      }}
    >
      {contents.map((item, i) => (
        <SliderItem key={i} item={item} />
      ))}
    </Carousel>
  );
}

function SliderItem(props: any) {
  return (
    <Box sx={{ position: { md: "relative" }, overflow: "hidden" }}>
      <Box
        component="img"
        sx={{
          height: "100%",
          marginLeft: {
            xs: "-215%",
            sm: "-110%",
            md: "-60%",
            lg: "-25%",
          },
        }}
        src={props.item.image}
        alt="Slider"
      />

      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: { xs: "0", sm: "15%" },
          backgroundColor: "rgb(0 0 0 / 35%)",
          width: { xs: "100vw", sm: "inherit" },
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography
          variant="h2"
          component="div"
          sx={{
            color: "white",
            fontSize: {
              xs: "3.7rem",
              sm: "4.5rem",
              md: "6rem",
            },
            fontWeight: "500",
            textTransform: "uppercase",
          }}
        >
          {props.item.title.titleh2}
        </Typography>
        <Typography
          gutterBottom
          variant="h3"
          component="div"
          sx={{
            color: "#03D173",
            fontSize: {
              xs: "2.8rem",
              sm: "3.3rem",
              md: "6rem",
            },
            fontWeight: "300",
            textTransform: "uppercase",
          }}
        >
          {props.item.title.titleh3}
        </Typography>
        <Button
          sx={{ mb: 2 }}
          color="success"
          variant="contained"
          startIcon={<RestaurantIcon />}
        >
          {props.item.title.button}
        </Button>
        <Typography
          variant="subtitle2"
          component="div"
          sx={{
            color: "#03D173",
          }}
        >
          <Box>{props.item.title.text}</Box>
        </Typography>
      </Box>
    </Box>
  );
}

export default Slider;
