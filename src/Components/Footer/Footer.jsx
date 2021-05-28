import React from 'react'
import "./Footer.css"
import { Container, Box } from "@material-ui/core";
import brand from "./assets/brand.png";
const Footer = () => {
    return (
        <Box className="footer">
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
        </Box>
    )
}

export default Footer
