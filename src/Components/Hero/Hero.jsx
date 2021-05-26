import React from "react";

import { Box, AppBar, Typography } from "@material-ui/core";

//images
import bg from "./assets/bgVideo.mp4";
import Mobilebg from "./assets/mobilebg.jpg";
import IndiaMsg from "./assets/indiakabttle.png";
import "./Hero.css";
const Hero = () => {
  return (
    <Box className="visual_main" position=" ">
      <video autoPlay loop>
        <source src={bg} type="video/mp4" />
      </video>
      <img src={Mobilebg} alt="" className="mobilebg" />

      <p className="visual">
        <span>
          <img src={IndiaMsg} alt="" className="" />
        </span>
        <p>
          <a href="">
            <span>PRE-REGISTER NOW!</span>
          </a>
        </p>
      </p>
    </Box>
  );
};
export default Hero;
