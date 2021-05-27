import React from 'react';
import "./Rewards.css";

import { Box,   Container } from "@material-ui/core";
//Importing assets
import rewardImg from "./assets/item.png";
import rewardImgM from "./assets/item_m.png";
const Rewards = () => {
    return (
        <Box className="RewardContainer">
           <Container>
             <div className="textContent">

                <h1>Pre-registration Rewards</h1>
                <p>Pre-register now and get a permanent recon outfit and other rewards!</p>
                <h2>MAY 18. 2021 ~ UNTIL OFFICIAL LAUNCH</h2>
             </div>
               <Box className="imageDisplay showReward">
                  <img src={rewardImg} alt="" />
               </Box>
               <Box className="imageDisplay hideReward ">
                  <img src={rewardImgM} alt="" />
               </Box>
           </Container>
        </Box>
    )
}

export default Rewards
