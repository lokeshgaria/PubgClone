import React from 'react'
import "./News.css";



import { Box, Grid, Container, Card, CardActionArea, CardMedia, Button, Typography } from "@material-ui/core";

//images 

const para =

    <div className="icons">
       
        <div className="facebook">
            <i className="fab fa-facebook-f"></i>
        </div>
        <div className="instagram">
            <i className="fab fa-instagram"></i>
        </div>
        <div className="youtube">
            <i className="fab fa-youtube"></i>
        </div>
    </div>;


const News = ({ title, cardData }) => {



    return (
        <>
            <Box className="newsContainer">
                <Container>
                    <div className="NewstextContent">
                        <h1>{title}</h1>

                        {title == "SOCIAL MEDIA" ? para : null}
                    </div>

                    <Grid container spacing={2} >
                        {
                            cardData.map((item, index) =>
                                <Grid item
                                    lg={4}
                                    md={4}
                                    sm={12}
                                    component={Box}
                                    borderRadius={0}
                                    key={index}

                                >
                                    <Card
                                        data-aos="slide-up"
                                        component={Box}
                                        borderRadius={0}>
                                        <CardActionArea>
                                            <CardMedia
                                                title="News"
                                            >
                                                <img src={item.img} alt="" className="img-fluid" />
                                            </CardMedia>
                                            <Box className="CardContent">
                                                <p >{item.title}
                                                    {item.link ? <a href={item.link}>{item.link}</a> : null}
                                                    {item.after}
                                                </p>

                                                <span>{item.date}</span>
                                            </Box>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            )
                        }


                    </Grid>


                    <div className="NewstextContent">

                        <Button variant="outlined" style={{ borderRadius: "0px" }}  >  <Typography variant="h4" component={Box} p={1}>View More </Typography>   </Button>
                    </div>
                </Container>
            </Box>
        </>
    )
}

export default News
