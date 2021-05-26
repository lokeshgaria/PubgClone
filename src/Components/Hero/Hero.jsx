import React from "react";
import bg from "./assets/bgVideo.mp4";
import Mobilebg from "./assets/mobilebg.jpg";
import {  Box} from "@material-ui/core";
import "./Hero.css";
const Hero = () => {
  return (
    <Box >
      <video controls autoPlay loop >
          <source src={bg} type="video/mp4"  />
      </video>
      <img src={Mobilebg} alt="" className="mobilebg" />
     
 
    </Box>
  )
};
export default Hero;
