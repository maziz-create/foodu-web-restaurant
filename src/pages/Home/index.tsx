import React from "react";

import Slider from "../../components/Slider";
import Download from "../../components/Download";
import Contact from "../../components/Contact";
import DeliveryZones from "../../components/DeliveryZones";

function Home() {
  return (
    <>
      <Slider />
      <Download />
      <Contact />
      <DeliveryZones />
    </>
  );
}

export default Home;
