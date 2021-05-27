import React from 'react';
import "./Register.css";

import { Box, Grid, Container } from "@material-ui/core";

 
 
const Register = () => {
    return (
        <Box className="RegisterDiv"  >
            <Container>
 

                <h1 className="Register_Para">
                    PRE- REGISTER NOW
             </h1>

                <div className="videowrapper">
                    <Grid container >
                        <Grid
                            item
                            lg={12}
                            md={12}
                            sm={12}
                            xs={12}
                            component={Box}
                            
                            border={1}
                        >
                            <iframe width="940" height="640" src="https://www.youtube.com/embed/dZVpvhQtiRQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="  iframe"></iframe>
                        </Grid>
                    </Grid>

                </div>
            </Container>

        </Box>
    )
}

export default Register
