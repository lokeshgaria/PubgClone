import React from 'react'
import "./Hero.css";
import { Box } from "@material-ui/core";
//images
import bg from "./assets/bgVideo.mp4";
import Mobilebg from "./assets/mobilebg.jpg";
import IndiaMsg from "./assets/indiakabttle.png";
import IndiaMsg2 from "./assets/indiakabttleM.png";
import rightbtm from "./assets/rightBootom.png";
const Hero = () => {
    return (
        <>
            <Box className="visual_main" position=" ">
                <video autoPlay loop>
                    <source src={bg} type="video/mp4" />
                </video>
                <img src={Mobilebg} alt="" className="mobilebg" />

                <div className="visual show2">
                    <span>
                        <img src={IndiaMsg} alt="" className="" />
                    </span>
                    <div className="visual_btn">
                        <p>
                            <a href="http://bit.ly/Battlegroundsin" className="btn1">
                                <span className="txt">PRE-REGISTER NOW!</span>
                            </a>
                        </p>

                        <p>
                            <a
                                href="https://www.battlegroundsmobileindia.com/#"
                                className="btn2"
                            >
                                <span className="txt">Check Pre-registration Rewards</span>
                            </a>
                        </p>
                    </div>
                </div>

                <div className="visual  hide2">
                    <span>
                        <img src={IndiaMsg2} alt="" className="" />
                    </span>
                </div>

                <div className="hide3  visual_btn2">
                    <p>
                        <a href="http://bit.ly/Battlegroundsin" className="btn1">
                            <span className="txt">PRE-REGISTER NOW!</span>
                        </a>
                    </p>

                    <p>
                        <a href="https://www.battlegroundsmobileindia.com/#" className="btn2">
                            <span className="txt">Check Pre-registration Rewards</span>
                        </a>
                    </p>
                </div>
                <p className="visual_logo">
                    <img src={rightbtm} alt="" />
                </p>
            </Box>
        </>
    )
}

export default Hero;
