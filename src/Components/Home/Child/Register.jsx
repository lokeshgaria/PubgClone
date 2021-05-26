import React from 'react';
import "./Register.css";

import { Box, Grid , Container} from "@material-ui/core";

//IMPORTING ALL ASSETS FROM FOLDER
import background from "./assets/RegisterBg.jpg"
const Register = () => {
    return (
        <Box className="RegisterDiv">
            <Container>
            

             <h1 className="Register_Para">
             PRE- REGISTER NOW
             </h1>

             <div className="viedeowrapper">
             <Grid container >
                 <Grid item lg={12}
                  component={Box}
                  border={1}
                  >
                 <iframe width="" height="" src="https://www.youtube.com/embed/dZVpvhQtiRQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="img-fluid"></iframe>
                 </Grid>
             </Grid>
            
             </div>
            </Container>
            
        </Box>
    )
}

export default Register
