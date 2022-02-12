import React from "react";
import Carousel from "react-material-ui-carousel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import ImageSlider1 from "../../assets/slider_image_1.png";
import ImageSlider2 from "../../assets/slider_image_2.png";
import ImageSlider3 from "../../assets/slider_image_3.png";
import ImageSlider4 from "../../assets/slider_image_4.png";
import Typography from "@mui/material/Typography";

import RestaurantIcon from "@mui/icons-material/Restaurant";

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
      //   autoPlay
      indicators={false}
      fullHeightHover={false}
      navButtonsAlwaysVisible
      sx={{ height: "85vh" }}
    >
      {contents.map((item, i) => (
        <SliderItem key={i} item={item} />
      ))}
    </Carousel>
  );
}

function SliderItem(props: any) {
  return (
    <Box sx={{ height: "100%", position: "relative" }}>
      <Box
        component="img"
        sx={{
          height: "85vh",
          width: "100%",
          objectFit: "cover",
        }}
        src={props.item.image}
        alt="Slider"
      />
      <Box sx={{ position: "absolute", top: "30%", left: "15%" }}>
        <Typography
          variant="h2"
          component="div"
          sx={{
            color: "white",
            fontSize: "6rem",
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
            fontSize: "4rem",
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
