import React, { useState } from 'react'
import "./Footer.css"
import { Container, Box, Avatar } from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import brand from "./assets/brand.png";
import close from "./assets/close.png";


const Footer = () => {

    const [scroll, setScroll] = useState(false);
    const [cookie, setCookie] = useState(true);


    const scrolll = () => {
        window.addEventListener("scroll", function () {
            var screentop = window.pageYOffset;
            if (screentop > 30) {
                setScroll(true);
            }
            else {
                setScroll(false)
            }
        })
    }



    scrolll();

    const scrollup = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    }
    return (
        <Box className="footer">
            {  scroll ?

                <div className="div">
                    <Avatar boxShadow={3} component={Box} className="avatar" onClick={scrollup}><ArrowUpwardIcon></ArrowUpwardIcon></Avatar>
                </div>

                :
                null
            }

            <Container >
                <div className="Footercontent">
                    <div className="brandlogo">
                        <img src={brand} alt="" />
                    </div>
                    <div className="FootertextContent">
                        © 2021 KRAFTON, Inc. All rights reserved.
                    </div>
                    <div className="terms">
                        <span className="policy">
                            Privacy Policy
                        </span>
                        <span>Terms of Service</span>
                    </div>
                </div>
            </Container>

            <div className={cookie ? "cookies " : "removeCookie" }>
                <span>This website uses cookies to ensure you get the best experience on our website . <a href="https://www.battlegroundsmobileindia.com/privacy">Learn More</a> </span>

                <img src={close} alt="close" onClick={() => setCookie(false)} />

            </div>
        </Box>
    )
}



export default Footer
