import React from 'react'
import "./News.css";



import { Box, Grid, Container, Card, CardActionArea, CardMedia, Button , Typography} from "@material-ui/core";

//images 
 
import  {newsData} from "./Newsdata";
const News = () => {

     

    return (
        <>
            <Box className="newsContainer">
                <Container>
                    <div className="NewstextContent">
                        <h1>NEWS</h1>
                    </div>

                    <Grid container spacing={2}>
                        {
                            newsData.map((item , index) =>
                                <Grid item
                                    lg={4}
                                    md={4}
                                    sm={12}
                                    component={Box}
                                    borderRadius={0}
                                    key={index}
                                >
                                    <Card component={Box}
                                        borderRadius={0}>
                                        <CardActionArea>
                                            <CardMedia
                                                title="News"
                                            >
                                                <img src={item.img} alt="" className="img-fluid" />
                                            </CardMedia>
                                            <Box className="CardContent">
                                                <p >{item.title}</p>

                                                <span>{item.date}</span>
                                            </Box>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        }


                    </Grid>


                    <div className="NewstextContent">
                       
                        <Button variant="outlined" style={{borderRadius : "0px"}}  >  <Typography variant="h4" component={Box} p={1}>View More </Typography>   </Button>
                    </div>
                </Container>
            </Box>
        </>
    )
}

export default News
