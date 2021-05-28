import React from 'react'
import "./AppStore.css";
import { Box,  Container } from "@material-ui/core";
import Applogo from "./assets/applogo.png";
import playstore from "./assets/playstorelogo.png";
const AppStore = () => {
     return (
          <Box className="Appstore">
               <Container className="contentApp">

                    <div className="applogo">
                         <img src={Applogo} alt="" />
                    </div>
                    <div className="content">
                         
                              INDIA KA BATTLEGROUNDS <br/>Pre-Register Now!
                               
                    </div>

                    <div className="playstore">
                        <a href="http://bit.ly/Battlegroundsin"><img src={playstore} alt="" /></a> 
                    </div>
               </Container>
          </Box>
     )
}

export default AppStore
