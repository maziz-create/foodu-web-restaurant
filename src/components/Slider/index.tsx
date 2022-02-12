import React from "react";
import Carousel from "react-material-ui-carousel";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import ImageSlider1 from "../../assets/slider_image_1.png";
import ImageSlider2 from "../../assets/slider_image_2.png";
import ImageSlider3 from "../../assets/slider_image_3.png";
import ImageSlider4 from "../../assets/slider_image_4.png";

function Slider() {
  const title = {
    title1: "Delicious",
    title2: "Pizza & Kebab",
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
      autoPlay
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
    <Box sx={{ height: "100%" }}>
      <Box
        component="img"
        sx={{ height: "85vh", width: "100%", objectFit: "cover" }}
        src={props.item.image}
        alt="Slider"
      />
    </Box>
  );
}

export default Slider;
